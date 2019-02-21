import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from './services/BookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    async setBooks (context) {
      const response = await getBooks()
      context.commit('setBooks', response.data)
    }
  },
  getters: {
    getBooks: state => state.books
  }
})
