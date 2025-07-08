import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from '@entities/counter'
import { userReducer } from '@entities/user'
import { loginReducer } from '@features/authByUserName'
import { useDispatch } from 'react-redux'
import { profileReducer } from '@entities/profile'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
