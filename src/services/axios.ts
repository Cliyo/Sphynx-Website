import axios from 'axios'

import { BASE_URL } from 'constants/request'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    language: 'pt-BR',
  },
})
