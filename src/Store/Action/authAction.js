import axios from "axios";
import {actionType} from "./actionType";

export const register = (user,history) => dispatch =>{

 dispatch({type:actionType.LOADING_STATE, payload:true})
    axios.post('http://ec2-3-86-114-78.compute-1.amazonaws.com/api/v1/register',user)
        .then(res=>{
            console.log(res)
            history.push('/')
        })
        .catch(error=>{
            // dispatch({type:actionType.CATCH_ERROR, payload:error.res.data})
            console.log(error)
            dispatch({type:actionType.LOADING_STATE, payload:false})
        })
}