import { Typography } from '@mui/material'
import { Button } from '@shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '@entities/counter'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterState = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Typography>value = {counterState}</Typography>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={increment}>increment</Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={decrement}>decrement</Button>
    </div>
  )
}
