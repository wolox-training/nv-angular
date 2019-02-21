<template lang="pug">
  .navbar-container
    img.wolox-logo(src='../assets/wolox-logo.png')
    a.logout(@click='logout') 
      | Logout
</template>

<script>
import LocalStorageService from '../services/LocalStorageService.js'

export default {
  name: 'NavBar',
  methods: {
    logout() {
      LocalStorageService.removeAuthToken()
      this.$router.push({ name: 'login' })
    }
  }
}

</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.navbar-container {
  border-top: 6px solid $wolox-blue;
  box-shadow: 0 3px 20px $grey;
  display: flex;
  justify-content: space-between;
  padding: 10px 300px;
  align-items: center;
}

.wolox-logo {
  height: 40px;
  width: 150px;
}

.logout {
  color: $black;
  font-weight: bold;
}


</style>
