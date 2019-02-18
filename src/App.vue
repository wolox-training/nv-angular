<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import 'scss/variables/colors.scss';

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input {
  border: 2px solid $transparent;
  border-radius: 5px;
  height: 25px;
  margin-top: 10px;
  outline: 0;
  width: 100%;

  &:focus {
    border: 2px solid $grey;
    border-radius: 5px;
  }
}

button {
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  outline: 0;
  padding: 10px;
}
</style>
