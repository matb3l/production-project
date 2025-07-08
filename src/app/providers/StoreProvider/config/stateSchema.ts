import { UserSchema } from '@entities/user'
import { LoginSchema } from '@features/authByUserName'
import { ProfileSchema } from '@entities/profile'
import { CounterSchema } from '@entities/counter'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
  profile: ProfileSchema
}
