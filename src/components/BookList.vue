<template lang="pug">
  .book-grid
    .book-container(v-for='book in books')
      img.cover(:src='book.image_url', alt='Cover')
      h1.title {{ book.title }}
      p.author {{ book.author }}
</template>

<script>
import { getBooks } from '../services/BookService.js'

export default {
  data () {
    return {
      books: null
    }
  },
  mounted: function () {
    getBooks().then(res => {
      this.books = res.data      
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/variables/colors';
  .book-grid {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
    margin-top: 50px;
  }

  .book-container {
    box-shadow: 4px 4px 20px $grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 20px;
    padding: 20px;
    width: 250px;

    & .cover {
      width: 150px;
      height: 200px;
      margin-bottom: 20px;
      align-self: center;
    }
    
    & .title {
      color: $black;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: left;
    }

    & .author {
      font-size: 14px;
      text-align: left;
    }
  }
</style>
