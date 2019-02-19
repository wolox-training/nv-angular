import { api } from '../config/api'

export function createUser(body) {
  api.post('/users', body)
}