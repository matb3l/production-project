import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter.ts'

export const getCounterValue = createSelector(
  getCounter,
  counter => counter.value,
)
