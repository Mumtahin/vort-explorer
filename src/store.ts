import { configureStore } from '@reduxjs/toolkit'
import rampReducer from './reducers/rampReducer'

export const store = configureStore({
  reducer: {
    rampData: rampReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
