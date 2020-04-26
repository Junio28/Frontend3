import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';
import { ListProductComponent } from './componenets/product/list-product/list-product.component';
import { CreateProductComponent } from './componenets/product/create-product/create-product.component';
import { ListTypeProductComponent } from './componenets/type-product/list-type-product/list-type-product.component';
import { CreateTypeProductComponent } from './componenets/type-product/create-type-product/create-type-product.component';
import { ListSaleComponent } from './componenets/sale/list-sale/list-sale.component';
import { CreateSaleComponent } from './componenets/sale/create-sale/create-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormLoginComponent,
    ListUserComponent,
    CreateUserComponent,
    CopyrightComponent,
    ListClientComponent,
    CreateClientComponent,
    ListProductComponent,
    CreateProductComponent,
    ListTypeProductComponent,
    CreateTypeProductComponent,
    ListSaleComponent,
    CreateSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
