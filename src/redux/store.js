import { createStore, combineReducers, applyMiddleware} from 'redux'
import itemReducer  from './reducers'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({ itemReducer })

export const Store = createStore(rootReducer, applyMiddleware(thunk))