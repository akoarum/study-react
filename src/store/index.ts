import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const middleware = (store: { [index: string]: any }) => (next: any) => (action: any) => {
  action.then((res: any) => {
    next(res)
  })
}

export default createStore(reducers, applyMiddleware(middleware))