import { Injectable } from '@angular/core';
import { Plugins, CameraResultType,CameraSource } from "@capacitor/core";
//Firebase 
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
//Foto
import { Foto } from "../clases/foto";

const {Camera} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotosFeasService {

  private dbPath = '/fotosFeas';
  fotosRef : AngularFirestoreCollection<Foto>
  nuevaFoto : Foto;
  private PHOTO_STORAGE: string = "fotos";  
  
  constructor(private readonly storage:AngularFireStorage,private db: AngularFirestore) { 
    this.nuevaFoto = new Foto();
    this.fotosRef = db.collection(this.dbPath);
  }

  /**
   * agregarGaleria
   */
  public async agregarGaleria(tipo:string) {
    
    const capturaFoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality:100
    });  
   
    //guardar en la db firebase
    // var items = new Array();
    const dataurl = capturaFoto.dataUrl;
    const filename = new Date().getTime();
    const ref = this.storage.ref(`${this.PHOTO_STORAGE}/${filename}`);
    const result = await ref.putString(dataurl,'data_url',{
      contentType: 'image/jpeg',
    });
    ref.getDownloadURL().subscribe(res=>{
      // hay que guadar las url de la imágen en bd.
      this.guardarFotoDB(res,tipo);
    })
  }
  
    

  guardarFotoDB(urlFoto:string,tipo:string){
    this.nuevaFoto.urlFoto = urlFoto;
    this.nuevaFoto.fecha = new Date();
    this.nuevaFoto.tipo = tipo;
    this.nuevaFoto.usuariosLike = []
    this.nuevaFoto.email = localStorage.getItem("usuario");
    this.create(this.nuevaFoto);
  }
  
  create(foto:Foto){
    return this.fotosRef.add({...foto});
   }
  
   getAll(): AngularFirestoreCollection<Foto>{
    return this.fotosRef;
  }

  update(id: string, foto: Foto): Promise<void> {
    return this.fotosRef.doc(id).update({
     conatdorFea:foto.conatdorFea,
     usuariosLike:foto.usuariosLike
    });
  }
}
