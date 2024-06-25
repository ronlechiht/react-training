//import callApi from '../api'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

/*export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products', 'GET', null).then(res => {
          
            dispatch(GetAllProduct(res.data));
        });
    }
}*/

/*GET_ALL_PRODUCT*/
export const GetAllProduct = <T>(data: T) => {
    return{
        type:'GET_ALL_PRODUCT',
        data
    }
}

/*GET NUMBER CART*/
export const GetNumberCart = () => {
    return{
        type:'GET_NUMBER_CART'
    }
}

export const AddCart = <T>(data: T) => {
    return {
        type:'ADD_CART',
        data
    }
}
export const UpdateCart = <T>(data: T) => {
    return {
        type:'UPDATE_CART',
        data
    }
}
export const DeleteCart = <T>(data: T) => {
    return{
        type:'DELETE_CART',
        data
    }
}

export const IncreaseQuantity = <T>(data: T) => {
    return{
        type:'INCREASE_QUANTITY',
        data
    }
}
export const DecreaseQuantity = <T>(data: T) => {
    return{
        type:'DECREASE_QUANTITY',
        data
    }
}