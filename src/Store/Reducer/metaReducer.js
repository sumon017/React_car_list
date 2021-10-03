import {actionType} from "../Action/actionType";

const init = {
    message:"",
    loading:false
}

const metaReducer =(state=init,{type,payload})=>{
    switch (type){
        case actionType.GET_MESSAGE:
            return {
                ...state,
                message: payload
            }
        case actionType.DISMISS_MESSAGE:
            return {
                ...state,
                message: ""
            }
        case actionType.LOADING_STATE:
            return {
                ...state,
                loading: payload
            }
        default:return state
    }

}

export default metaReducer