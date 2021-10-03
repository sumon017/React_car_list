import {actionType} from "./actionType";
import axios from "axios";

export const loadproducts = () => dispatch =>{
    axios.get(`${process.env.React_APP_API}`)
        .then(res=>{
            dispatch({
                type:actionType.LOAD_PRODUCTS,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}
export const productsDetails = (id) => dispatch =>{
    axios.get(`${process.env.React_APP_API}/${id}`)
        .then(res=>{
            dispatch({
                type:actionType.DETAILS_PRODUCT,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}