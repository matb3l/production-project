import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from '@entities/counter'
import { userReducer } from '@entities/user'
import { loginReducer } from '@features/authByUserName'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
