<template lang="pug">
  div
    NavBar
    div.detail-container
      img.cover(:src='book.image_url')
      div.detail-info
        div.title-container
          h1.title 
            | {{book.title}}
          h2.genre 
            | ({{book.genre}})
        div.info-container
          label.label 
            | {{ $t("book.author")}}
          p.data 
            | {{book.author}}
        div.info-container
          label.label 
            | {{ $t("book.publisher")}}
          p.data 
            | {{book.publisher}}
        div.info-container
          label.label 
            | {{ $t("book.year")}}
          p.data 
            | {{book.year}}
</template>

<script>
import NavBar from '../components/NavBar'
import { getBook } from '../services/BookService'

export default {
  data () {
    return {
      book: null
    }
  },
  name: 'book-detail',
  components: {
    NavBar
  },
  mounted: function(){
    const id = this.$route.params.id
    getBook(id).then(res => this.book = res.data)
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/variables/colors';

  .detail-container {
    box-shadow: 4px 4px 20px $grey;
    display: flex;
    justify-content: space-around;
    margin: auto; 
    margin-top: 50px;
    padding: 40px;
    width: 60%;
  }

  .cover {
    height: 300px;
    margin-right: 30px;
    width: 200px;
  }

  .detail-info {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .title-container {
    border-bottom: 3px solid $wolox-green;
    display: flex;
    padding-bottom: 20px;
    text-align: left;
  }

  .title {
    color: $black;
    font-size: 32px;
    font-weight: bold;
    margin-right: 10px;
  }

  .genre {
    font-size: 22px;
  }

  .info-container {
    display: flex;
    margin-top: 30px;
  }

  .label {
    color: $black;
    font-weight: bold;
    margin-right: 5px;
    font-size: 16px;
  }

  .data {
    font-size: 16px;
  }
</style>
