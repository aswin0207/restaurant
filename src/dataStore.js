import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


// create reducer
const reduce=combineReducers({

})

// create middlewares
const middleware=[thunk]

// create store
//  reducer,middleware
const store=createStore(reducer,applyMiddleware(...middleware))


export default store