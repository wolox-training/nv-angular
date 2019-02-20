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
    setBooks (context) {
      getBooks().then(books => {
        context.commit('setBooks', books.data)
      })
    }
  },
  getters: {
    getBooks (state) {
      return state.books;
    }
  }
})
