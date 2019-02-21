<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@import 'scss/application';
@import 'scss/variables/colors';

.input {
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

.button {
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
  outline: 0;
  padding: 10px;
}
</style>
