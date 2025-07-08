import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '@shared/const/localstorage.ts'

const $api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:8000/api/' : 'production.ru',
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
})

export default $api
