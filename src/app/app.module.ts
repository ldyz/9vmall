import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StorageService} from './services/storage.service';
import { UtilsService } from "./services/utils.service";
import {HttpClientModule} from '@angular/common/http';
 
import {
  Ng2BootstrapModule
}from 'ngx-bootstrap';
import { MenuBottomComponent } from './components/menu-bottom/menu-bottom.component';
import { SearchComponent } from './components/search/search.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './components/profile/profile.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBottomComponent,
    SearchComponent,
    CartlistComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent,
    ProductsComponent,
    ProductListComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    Ng2BootstrapModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [
    StorageService,
    UtilsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
