import {actionType} from "../Action/actionType";
const init={
    products:[],
    product:{}
}

export const productsReducer = (state=init,{type,payload}) =>{
    switch (type){
        case actionType.LOAD_PRODUCTS:
            return{
                ...state,
                products:payload
            }
        case actionType.DETAILS_PRODUCT:
            return {
                ...state,
                product: payload
            }
        default: return state
    }
}