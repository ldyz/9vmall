import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { CartlistComponent } from "./components/cartlist/cartlist.component";
import { OrdersComponent } from "./components/orders/orders.component";
const routes: Routes = [
//配置路由
{
  path:'home',
  component:HomeComponent
},
{
  path:'cartlist',
  component:CartlistComponent

},
{
  path:'orders',
  component:OrdersComponent

},
{
  path:'**',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
