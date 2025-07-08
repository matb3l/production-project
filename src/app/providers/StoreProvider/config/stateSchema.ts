import { UserSchema } from '@entities/user'
import { LoginSchema } from '@features/authByUserName'
import { ProfileSchema } from '@entities/profile'
import { CounterSchema } from '@entities/counter'
import { AxiosInstance } from 'axios'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
  profile: ProfileSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate: (to: To, options?: NavigateOptions) => void
}
