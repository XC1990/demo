import products from './product-reducer'
import { combineReducers } from 'redux';


const combinedReducer = combineReducers({
    products
})

export default combinedReducer;