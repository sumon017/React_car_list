import {combineReducers} from "redux";
import {productsReducer} from "./Reducer";
import authReducer from './authReducer'
import metaReducer from './metaReducer'
import errorReducer from './errorReducer'

export const rootReducer = combineReducers({
    products:productsReducer,
    auth:authReducer,
    meta:metaReducer,
    error:errorReducer
})