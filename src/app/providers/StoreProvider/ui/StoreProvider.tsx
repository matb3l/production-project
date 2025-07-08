import { Provider } from 'react-redux'
import { FC, ReactNode } from 'react'
import { createReduxStore } from '@app/providers/StoreProvider'
import { StateSchema } from '@app/providers/StoreProvider/config/stateSchema.ts'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const navigate = useNavigate()

  const store = createReduxStore(undefined, navigate)

  return <Provider store={store}>{children}</Provider>
}
