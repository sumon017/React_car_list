import {actionType} from "../Action/actionType";
const init = {
    isAuthenticated:false,
    user:null
}
const authReducer =(state=init,{type})=>{
    switch (type){
        case actionType.LOGIN_USER:
            return{

            }
        case actionType.LOGOUT_USER:
            return {

            }
        default: return state
    }
}

export default authReducer;