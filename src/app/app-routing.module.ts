import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';


const routes: Routes = [{
  path: '',
  redirectTo:'/',
  pathMatch: 'full'
},{
  path: 'login',
  component: FormLoginComponent 
},
{
  path: 'usuario',
  component: ListUserComponent
},
{
  path: 'usuario/nuevo',
  component: CreateUserComponent
},
{
  path: 'cliente',
  component: ListClientComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
