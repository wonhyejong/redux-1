import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import counterSlice from './counter/counterSlice'
//import userSlice from './counter/userSlice'
import cartSlice from './cart/cartSlice'

const rootReducer = combineReducers({
  cart:cartSlice,
 // user:userSlice,
})

const store = configureStore({
  reducer:rootReducer
})

export default store;