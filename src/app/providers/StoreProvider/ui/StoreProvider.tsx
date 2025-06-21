import { Provider } from 'react-redux'
import { FC, ReactNode } from 'react'
import { createReduxStore } from '@app/providers/StoreProvider'
import { StateSchema } from '@app/providers/StoreProvider/config/stateSchema.ts'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore()
  return <Provider store={store}>{children}</Provider>
}
