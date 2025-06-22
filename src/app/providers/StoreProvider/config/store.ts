import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from '@entities/counter'
import { userReducer } from '@entities/user'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}
