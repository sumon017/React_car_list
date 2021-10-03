import {actionType} from "../Action/actionType";

const errorReducer =(state={},{type,payload})=>{
    switch (type){
        case actionType.CATCH_ERROR:
            return{
                state:payload
            }
        default:
            return state
    }

}

export default errorReducer