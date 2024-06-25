import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../actions';
import { CartProduct } from '../types/CartProduct';
import { Product } from '../types/Procduct';

const initProduct: {numberCart: number, Carts: CartProduct[], _products: Product[]} = {
    numberCart:0,
    Carts:[],
    _products:[]
}

const todoProduct = (state = initProduct,action: {type: string, data: CartProduct, index: number}) => {
    switch(action.type){
        case GET_ALL_PRODUCT: 
            return{
                ...state,
                _products:action.data
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.data.id,
                    productId:action.data.productId,
                    productColor:action.data.productColor,
                    productSize:action.data.productSize,
                    productQuantity:action.data.productQuantity
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.data.id){
                        state.Carts[key].productQuantity += item.productQuantity;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.data.id,
                        productId:action.data.productId,
                        productColor:action.data.productColor,
                        productSize:action.data.productSize,
                        productQuantity:action.data.productQuantity
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.index].productQuantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.index].productQuantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.index].productQuantity--;
                }
              
                return{
                    ...state
                }
            case DELETE_CART:
                return{
                    ...state,
                    numberCart:state.numberCart --,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.index].id
                    })
                   
                }
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;