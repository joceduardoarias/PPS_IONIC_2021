import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  
  {
    path: 'fotos',
    loadChildren: () => import('./fotos-lazy-load/fotos-lazy-load.module').then( m => m.FotosLazyLoadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
