import { create } from 'apisauce'
export const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  headers: {'Content-Type': 'application/json',
            Accept: 'application/json'}
})
