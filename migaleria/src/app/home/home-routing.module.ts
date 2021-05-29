import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomePage } from './home.page';
//iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
