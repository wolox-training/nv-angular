import { api } from '../config/api'

export function createUser(body) {
  return api.post('/users', body)
}
