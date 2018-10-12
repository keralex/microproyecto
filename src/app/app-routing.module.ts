import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavigationhomeComponent } from './Navigation/navigationhome/navigationhome.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
   {
    path: '',
    children:[
      { path: '', redirectTo:'/home' , pathMatch: 'full'},
      {path: 'home',component:HomeComponent} ,
      {path: 'description/pokemonid',component:DescriptionComponent}
    ], component: NavigationhomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
