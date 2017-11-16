import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";
@Injectable()
export class UtilsService {

  protected storage=new StorageService();
  constructor() { }

  protected money:number;
  public CartList:any=[];
 
  public CheckedList:any=[];
  
  protected _count:number;
  public isAddToCart:boolean=false;
  flag:boolean;
/**
 * 添加商品到购物车中，item为JSON对象,quantity为添加的商品数量
 * @param product 
 * @param quantity
 */

  addToCart(product,quantity){    
         this.flag=false;    /**cartList是否存在标志*/
         this.CartList=this.storage.getItem('cartList'); 
         
         if(!this.CartList){
           this.CartList=[];
         }       
         console.log(product);
            this.CartList.forEach((item,index,array) => {
              
          if(item.id==product.id){ 
            this.flag=true; 
            item.productQuantity=parseInt(item.productQuantity)+parseInt(quantity);
            this.CartList[index]=item;       
            console.log('商品已存在：'+item.name);            
         }
        });
        if(!this.flag){
         product.productQuantity=quantity;
          
         this.CartList.push(product);     
  
      }
      this.storage.setItem('cartList',this.CartList);
      console.log(JSON.stringify(this.CartList));
  }

   /**
   * removeFromCart(‘商品ID')
   * 根据商品ID号删除CartList内的商品信息
   */
  removeFromCart(Id){
    this.CartList=this.storage.getItem('cartList');
    if(!this.CartList){
      console.log('购物车没有商品！');
     
    }else{
    
    this.CartList.forEach((item,index,array) => {
      console.log(item.id);
      if(item.id==Id){  
        console.log('删除商品'+item.id+"成功！");
       this.CartList.splice(index,1);
       this.storage.setItem('cartList',this.CartList);
      
     }
    });
  }

    console.log("删除成功：\n"+JSON.stringify(this.CartList));
   
   }



  /**
   * setProductQuantity('商品ID','商品数量')
   * 根据商品ID号设置商品数量
   * 
   */
  setProductQuantity(Id,quantity){
    this.CartList=this.storage.getItem('cartList');
    if(!this.CartList){
      console.log('购物车为空！');
    }else{
    this.CartList.forEach((item,index,array) => {
      if(item.id==Id){          
       item.productQuantity=quantity;       
       this.CartList[index]=item;     
     }
    });
    this.storage.setItem('cartList',this.CartList);
  }
  }

/**
 * incProductQuantity('商品ID')
 * 商品数量加1
 *   
 */
  incProductQuantity(Id){    
    this.CartList=this.storage.getItem('cartList');
    if(!this.CartList){
      console.log('错误，购物车为空！');
    }else{
      for(let item of this.CartList){
        if(item.id==Id){
          item.productQuantity=parseInt(item.productQuantity)+1;
        }
      }
    }
    this.storage.setItem('cartList',this.CartList);
    console.log('商品ID:'+Id+'数量增加1个\n增加后的数组为：\n'+JSON.stringify(this.CartList));
  }
  /**
   * decProductQuantity('商品ID')
   * @param productId 
   * 商品数量减少1，如果商品数量为0 则从购物车删除该商品
   */
  decProductQuantity(Id){
    this.CartList=this.storage.getItem('cartList');
    if(!this.CartList){
      console.log('错误，购物车为空！');
    }else{
      this.CartList.forEach((item,index,array) => {             
        if(item.id== Id){
          item.productQuantity=parseInt(item.productQuantity)-1;
          if(parseInt(item.productQuantity)==0){
            this.CartList.splice(index,1);
          }          
        }
      });
      this.storage.setItem('cartList',this.CartList);
      console.log('商品ID:'+ Id+'数量减少1个\n减少后的数组为：\n'+JSON.stringify(this.CartList));
    }
  }
  /**
   * getAllProductCount()
   * 获取购物车商品总数量
   */

   getAllProductCount(){
     this.CartList=this.storage.getItem('cartList');
     this._count=0;
     if(this.CartList){
     this.CartList.forEach(element => {

      this._count+=parseInt(element.productQuantity);
      
     });
    }
     return this._count;
   }

   removeAll(){
    this.CartList=[];
    this.storage.removeItem('cartList');
    console.log('购物车已经清空');
    console.log(JSON.stringify(this.CartList));
   }
 /**
  * getProductCount()
  * 获取购物车商品品种数量
  */
   getProductCount(){
      this.CartList=this.storage.getItem('cartList');
      if(!this.CartList){
        return 0;
      }else{
        return this.CartList.length;
      }
   }
   
   getQuantity(Id){
    this.CartList=this.storage.getItem('cartList');
     
    if(!this.CartList){
      
      return this.money;
       
    }else{
      this.CartList.forEach(item => {
        if(item.id==Id){
        console.log(item.productQuantity);
        return item.productQuantity;
        }
      });
      
    }
   }
   /**
    * 获取商品总价格
    */

    getMoney(){
      this.CartList=this.storage.getItem('cartList');
      this.money=0.0;
      
      if(!this.CartList){
        
        return this.money;
         
      }else{
        this.CartList.forEach(item => {
          this.money+=parseFloat(item.productQuantity)*parseFloat(item.salePrice);
        });
        
        return this.money.toFixed(2);
      }
    }
    /**
     * 获取单个产品的金额
     * @param Id 
     */
    getOneMoney(Id){
      this.CartList=this.storage.getItem('cartList');
      this.money=0.0;
      if(!this.CartList){
        
        return this.money;
         
      }else{
        this.CartList.forEach(item => {
          if(item.id==Id){
          this.money+=parseFloat(item.productQuantity)*parseFloat(item.salePrice);
          }
        });
        
        return this.money.toFixed(2);
      }
    }
/**
 * 判断是否已经添加到购物车
 * @param Id 
 */
    isAdded(Id){
      this.CartList=this.storage.getItem('cartList');
       this.isAddToCart=false;
      if(!this.CartList){   

         this.isAddToCart=false;
              
      }else{
        this.CartList.forEach(item => {
          if(item.id==Id){
        this.isAddToCart=true;
          }
        });         
      }
      console.log(this.isAddToCart);
      return this.isAddToCart;
    }

    checked(Id){
      this.CartList=this.storage.getItem('cartList');
    
     if(!this.CartList){   

        console.log('错误来自选择购物车商品结算过程中'+Id);
             
     }else{
       this.CartList.forEach((item,index) => {
         if(item.id==Id){
           item.checked=true;
           this.CartList[index]=item;
         }
       });         
     }
     console.log("商品ID："+Id+"被选中");
     this.storage.setItem('cartList',this.CartList);
    }
 
}
