import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'//处理redux的异步任务的中间件
import { composeWithDevTools } from "redux-devtools-extension"
import layoutReducer from './layout/reducers'
import indexReducer from './test/index/reducers'
import homeReducer from './test/home/reducers'

const rootReducer = combineReducers({
  layoutReducer,
  indexReducer,
  homeReducer,
})
export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )
  return store
}
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// export default store