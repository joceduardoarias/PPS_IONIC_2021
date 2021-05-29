import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogueadoEmail!:string;
  
  constructor(private afAuth: AngularFireAuth,
    private router: Router) { }

    /**
  * Este método es el encargado de autenticar los usuarios de la app
  */
 public async singIn (email :string, password:string) {
  return this.afAuth.signInWithEmailAndPassword(email,password);
}              
/**
 * cuando el usuario presione salir de la app lo llevará al login
 */
public async signOut() {
  this.router.navigateByUrl("/inicio/login");
  await this.afAuth.signOut();
  
}

auth(){
  return this.afAuth.currentUser
}

}
