import { api } from '../config/api'

export function createUser(body) {
  return api.post('/users', body)
}

export function getToken(body) {
  return api.post('/users/sessions', body)
}
