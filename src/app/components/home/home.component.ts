import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../services/utils.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TProductUrl:any="http://www.9vmall.com/api/gettjproducts";
  TProductList:any=[];

  constructor(private util:UtilsService,private http:HttpClient) { }

  ngOnInit() {
    this.getTJProducts();

  }
 
  /**
   * 初始化首页特价商品数据函数
   */
  getTJProducts(){
      this.http.get(this.TProductUrl).subscribe(data=>{
       
         
         this.TProductList=data;
      
        console.log(this.TProductList);
          

      });

  }

  

}
