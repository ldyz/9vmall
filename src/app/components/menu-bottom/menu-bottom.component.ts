import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilsService } from "../../services/utils.service";
@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.css']
})
export class MenuBottomComponent implements OnInit {

   constructor(private util:UtilsService) { }

  ngOnInit() {
  
  }
      

  /**
   * 导航到首页
   */
  goHome(){

    
    console.log("首页按钮被点击");
  }
  /**
   * 调用微信js中的扫码功能，需要引入微信的jssdk
   */
  goScan(){
    console.log("扫码按钮被点击");
  }
  /**
   * 导航到购物车页面
   */
  goCart(){
    console.log("购物车按钮被点击");
  }

  /**
   * 导航到订单页面
   */
  goOrders(){
    console.log("我的订单按钮被点击");
  }
  
}
