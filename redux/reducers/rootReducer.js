import nextReducer from './nextReducer'
import bugStackReducer from './bugStackReducer'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  next: nextReducer,
  bugStack: bugStackReducer
})

export default rootReducer
