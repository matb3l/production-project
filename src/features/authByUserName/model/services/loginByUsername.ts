import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '@entities/user'
import i18n from 'i18next'

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

      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(
        i18n.t('Вы ввели неверный логин или пароль'),
      )
    }
  },
)
