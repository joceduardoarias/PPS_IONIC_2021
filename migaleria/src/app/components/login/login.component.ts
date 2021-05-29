import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { faUser, faUserPlus, faUsers, faUsersCog, faUserSecret, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  faUsers = faUsers;
  faUserTie = faUserTie;
  faUserSecret= faUserSecret;
  faUser = faUser;
  faUsersCog= faUsersCog;
  faUserPlus=faUserPlus;
  formLogin:FormGroup;

  constructor(private authService:AuthService,private router: Router) {
    
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
    }

    loguearse(){
      var email = this.formLogin.get('email').value;
      var pass = this.formLogin.get('password').value;
      
      this.authService.singIn(email,pass).then((res)=>{
      console.log(res.user.email);
      this.router.navigateByUrl("/inicio/home");
      localStorage.setItem('usuario',res.user.email);
    },err=>{
      console.log(err);
    });    
      
    }    

    setFormulario(email:string){
      this.formLogin.setValue({'email':email,'password':'123456'});
    }
    
}
