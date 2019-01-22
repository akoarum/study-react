import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const myMiddleware = (store: {[index: string]: any}) => (next: any) => (action: any) => {
  action.then((res: any) => {
    next(res)
  })
}

export default createStore(rootReducer, applyMiddleware(myMiddleware))