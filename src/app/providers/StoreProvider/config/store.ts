import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from '@entities/counter'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  })
}
