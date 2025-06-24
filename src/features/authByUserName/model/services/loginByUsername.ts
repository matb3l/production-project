import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from '@entities/user'
import i18n from 'i18next'
import { USER_LOCALSTORAGE_KEY } from '@shared/const/localstorage.ts'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setUserData(response.data))

      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(
        i18n.t('Вы ввели неверный логин или пароль'),
      )
    }
  },
)
