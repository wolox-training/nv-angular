<template lang="pug">
  div
    NavBar
    BookList
</template>

<script>
import NavBar from '../components/NavBar'
import BookList from '../components/BookList'

export default {
  name: 'home',
  components: {
    NavBar,
    BookList
  }
}
</script>
