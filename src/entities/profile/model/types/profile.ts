import { Country, Currency } from '@shared/const/common.ts'

export interface Profile {
  name: string
  lastname: string
  age: string
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  loading: boolean
  error?: string
  readonly: boolean
}
