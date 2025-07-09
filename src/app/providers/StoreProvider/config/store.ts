import {
  Action,
  configureStore,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './stateSchema'
import { counterReducer } from '@entities/counter'
import { userReducer } from '@entities/user'
import { loginReducer } from '@features/authByUserName'
import { useDispatch } from 'react-redux'
import { profileReducer } from '@entities/profile'
import $api from '@shared/api/api.ts'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'

export const createReduxStore = (
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
  }

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  })
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, Action>
export const useAppDispatch = () => useDispatch<AppDispatch>()
