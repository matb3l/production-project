import { describe, expect, it } from 'vitest'
import { StateSchema } from '@app/providers/StoreProvider'
import { getCounterValue } from '@entities/counter/model/selectors/getCounterValue/getCounterValue.ts'

describe('getCounterValue', () => {
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

    expect(getCounterValue(state)).toEqual(10)
  })
})
