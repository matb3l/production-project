import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from '@app/providers/StoreProvider'

export const getLoginState = (state: StateSchema) => state.login

export const getUsername = createSelector(
  getLoginState,
  login => login.username,
)

export const getPassword = createSelector(
  getLoginState,
  login => login.password,
)

export const getIsLoading = createSelector(
  getLoginState,
  login => login.isLoading,
)

export const getError = createSelector(getLoginState, login => login.error)
