import { api } from '../config/api'

export function createUser(body) {
  api.post('/users', body)
}

export function getToken(body) {
  api.post('/users/sessions', body)
}
