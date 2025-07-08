import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from '@entities/user'
import i18n from 'i18next'
import { USER_LOCALSTORAGE_KEY } from '@shared/const/localstorage.ts'
import { ThunkExtraArg } from '@app/providers/StoreProvider/config/stateSchema.ts'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { extra: ThunkExtraArg; rejectWithValue: string }
>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      dispatch(userActions.setUserData(response.data))

      extra.navigate('/profile')

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
    }
  },
)
