import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';


const routes: Routes = [{
  path: '',
  redirectTo:'/',
  pathMatch: 'full'
},{
  path: 'login',
  component: FormLoginComponent 
},
{
  path: 'usuario/listar',
  component: ListUserComponent
},
{
  path: 'usuario/nuevo',
  component: CreateUserComponent
}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
