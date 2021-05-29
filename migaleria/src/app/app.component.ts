import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public router:Router,public platform: Platform) {
    this.initializeApp();
  }

  /**
   * Este método se encargado de manejar el splash de la app
   */
   initializeApp(){
    
    this.platform.ready().then(()=>{
      
      setTimeout(() => {
        console.log("carga splash");
        SplashScreen.hide();
        this.router.navigateByUrl('splash');
      }, 500);

    });
    
  }

}
