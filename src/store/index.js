import { createStore, applyMiddleware } from 'redux'
import combinedReducer from '../reducers/combined-reducer'

const configureStore = () => {
  const store = createStore(combinedReducer)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers/combined-reducer', () => {
        store.replaceReducer(combinedReducer)
      })
    }
  }

  return store
}

export default configureStore
