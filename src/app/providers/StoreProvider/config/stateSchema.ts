import { CounterSchema } from '@entities/counter/model/types/counterSchema.ts'
import { UserSchema } from '@entities/user'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
