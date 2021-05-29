import { Component, OnInit } from '@angular/core';
import { Foto } from "../../clases/foto";
import { FotosFeasService } from "../../services/fotos-feas.service";
import { Usuario } from "../../clases/usuario";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-fotos-feas',
  templateUrl: './fotos-feas.component.html',
  styleUrls: ['./fotos-feas.component.scss'],
})
export class FotosFeasComponent implements OnInit {

  faSignOutAlt=faSignOutAlt;
  fotos:Foto[] = [];
  auxFoto:Foto;
  id:string;
  usuarioLogueado:Usuario;
  ;
  constructor(private fotoService:FotosFeasService, private auth:AuthService) { 
    this.getAll();      
    this.usuarioLogueado=new Usuario();
    this.usuarioLogueado.email= localStorage.getItem("usuario");
  }

  ngOnInit() {
  }


  nuevaFoto(tipo:string){
    this.fotoService.agregarGaleria(tipo);
  }

  getAll(){    

    var lista = this.fotoService.fotosRef.valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
      this.fotos = [];
          lista.map((res)=>{
              this.auxFoto = res;
              this.fotos.push(this.auxFoto);
              this.fotos.reverse();                     
           });                
        
     });    
  }


  meGusta(foto:Foto){
    
    if(!this.buscar(foto)){
      
      if (foto.conatdorFea) {
        foto.conatdorFea++;
      }else{
        foto.conatdorFea = 1;
      }

      foto.usuariosLike = new Array();
      foto.usuariosLike.push(this.usuarioLogueado.email);
      this.fotoService.update(foto.propertyId,foto);
    }
  
  }

  buscar(foto:Foto):boolean{
    console.log(foto.usuariosLike.indexOf(this.usuarioLogueado.email));
    if(foto.usuariosLike.indexOf(this.usuarioLogueado.email)==0){
      console.log("dió like");
      return true
    }else{
      console.log("no dió like");
      return false;
    }
  }

  salir(){
    this.auth.signOut();
  }

}
