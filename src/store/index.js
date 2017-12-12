import { createStore } from 'redux'
import combinedReducer from '../reducers/combined-reducer'

let store = createStore(combinedReducer)

export default store