import { CounterSchema } from '@entities/counter/model/types/counterSchema.ts'
import { UserSchema } from '@entities/user'
import { LoginSchema } from '@features/authByUserName'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
}
