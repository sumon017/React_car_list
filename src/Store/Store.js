import {createStore,compose,applyMiddleware} from "redux";
import {rootReducer} from "./Reducer/rootReducer";
import Thunk from "redux-thunk"
const middleware = [Thunk]


const Store = createStore(rootReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default Store;