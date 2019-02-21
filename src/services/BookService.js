import { api } from '../config/api'
import LocalStorageService from './LocalStorageService'

export function getBooks() {
  api.setHeader('Authorization', LocalStorageService.getAuthToken())
  return api.get('/books')
}
