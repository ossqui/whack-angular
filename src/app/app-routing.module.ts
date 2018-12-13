import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesVinoComponent } from './components/detalles-vino/detalles-vino.component';
import { ListaVinosComponent } from './components/admin/lista-vinos/lista-vinos.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vino/:id', component: DetallesVinoComponent},
  {path: 'admin/lista-vinos', component:ListaVinosComponent},
  {path: 'user/login', component:LoginComponent},
  {path: 'user/registro', component:RegistroComponent},
  {path: 'user/perfil', component:PerfilComponent},
  {path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
