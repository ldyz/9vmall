import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {UtilsService} from '../../services/utils.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  public CartList=[];  
  public islogin=true;
  public isEdit=[];
  public SelectList=[];
  public isCheckedList:object=[];
  public isAllCheck=false;
  public money=0;
  constructor(private storage:StorageService,private util:UtilsService,private http:HttpClient) { }
  ngOnInit() {
      //从本地存储中初始化购物车
      this.CartList=this.storage.getItem('cartList');
      if(!this.CartList){
        this.CartList=[];
      }
      
     
      this.money=this.getMoney();
    
      
      console.log(this.CartList);

  }  
 
  removeFromCart(id){
    this.util.removeFromCart(id);
    this.CartList=this.storage.getItem('cartList');
  }
  inc(id){
    this.util.incProductQuantity(id);
    this.CartList=this.storage.getItem('cartList');
  }
  dec(id){
    this.util.decProductQuantity(id);
    this.CartList=this.storage.getItem('cartList');
  }
  set(id,quantity){
    
    this.util.setProductQuantity(id,quantity);
        this.CartList=this.storage.getItem('cartList');
  }
  /**
   * 路由到结算页面
   */
  goToNext(){
    
    console.log('路由到结算页面');
  }

  addToSelectList(item,et){
    if(et){
    this.SelectList.forEach(el=>{
      if(el.id==item.id){
        return;
      }
    })
    this.SelectList.push(item);
    }else{
     
      this.SelectList.forEach((el,index)=>{
        console.log("\n"+item.id);
        if(el.id==item.id){
            this.SelectList.splice(index,1);
        }
      });
    }
    console.log(this.CartList);
    console.log(this.SelectList);

  }
  selectedAll(checked){
    if(checked){
      this.SelectList=[];
      this.isCheckedList=[];
    this.CartList.forEach((element,index)=>{
      this.SelectList.push(element);
      this.isCheckedList[element.id]=true;
    }) ;    
  }else{
    this.SelectList=[];
    this.isCheckedList=[];
  }
    console.log(this.SelectList);
  }

  isAllChecked(){

     if(this.CartList.length==this.SelectList.length){
   
      return true;
    }else{
      return false;
    }
  }

  isChecked(item){
    if(!this.SelectList){
      
      return false;
      
    }
    this.SelectList.forEach((el,index)=>{
      
      if(el.id==item.id){
        return true;
      }else{
        return false;
      }
    })
  }
  getMoney(){  
    this.money=0;   
    this.SelectList.forEach(el=>{       
       this.money+=(parseFloat(el.price)*parseFloat(el.productQuantity));
       console.log(el.price);
    })
    return this.money;
  }
  
}
