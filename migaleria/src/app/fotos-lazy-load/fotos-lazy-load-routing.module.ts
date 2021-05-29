import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosBonitasComponent } from '../components/fotos-bonitas/fotos-bonitas.component';
import { FotosFeasComponent } from '../components/fotos-feas/fotos-feas.component';


const routes: Routes = [
  
    {path:'fotosBonitas',component:FotosBonitasComponent},
    {path:'fotosFeas',component:FotosFeasComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotosLazyLoadPageRoutingModule {}
