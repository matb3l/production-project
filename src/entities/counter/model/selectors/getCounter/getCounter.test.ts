import { describe, expect, it } from 'vitest'
import { StateSchema } from '@app/providers/StoreProvider'
import { getCounter } from '@entities/counter/model/selectors/getCounter/getCounter.ts'

describe('getCounter', () => {
  it('should return counter value', () => {
    const state: StateSchema = {
      counter: { value: 10 },
      user: {
        authData: {
          id: "1",
          username: "123"
        }
      }
    }

    expect(getCounter(state)).toEqual({ value: 10 })
  })
})
