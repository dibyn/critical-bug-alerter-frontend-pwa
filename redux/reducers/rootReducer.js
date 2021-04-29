import nextReducer from './nextReducer'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  next: nextReducer,
})

export default rootReducer
