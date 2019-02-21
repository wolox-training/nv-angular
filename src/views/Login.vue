<template lang="pug">
  form.container(@submit.prevent='onSubmit')
    img.wolox-logo(src='../assets/wolox-logo.png')
    label.form-label 
      | Email
    input.input(type='text' v-model='email')
    p.error(v-if='!$v.email.email') 
      | Email address not valid
    label.form-label 
      | Password
    input.input(type='password' v-model='password')
    p.error(v-if='!$v.password.password && password') 
      | Password should contain at least one number and one upper case
    button.button.login-button(type='submit' :disabled='$v.$invalid') 
      | Login
    router-link.button.signup-button(to='/sign-up') 
      | Sign Up
</template>

<script>
import { email } from 'vuelidate/lib/validators'
import { getToken } from '../services/UserService.js'
import LocalStorageService from '../services/LocalStorageService.js'
import { password } from '@/utils/validators'

export default {
  data () {
    return {
      email: null,
      password: null,
      locale: 'en'
    }
  },
  validations: {
    email: { email },
    password: { password }
  },
  methods: {
    onSubmit() {
      const { email, password } = this
      getToken({ email, password}).then(res => {
        if(res.ok){
          LocalStorageService.setAuthToken(res.data.access_token)
          this.$router.push({ name: 'home' })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.container {
  border-top: 3px solid $wolox-blue;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
  width: 280px;
}

.wolox-logo {
  align-self: center;
  margin-bottom: 20px;
  width: 250px;
}

.form-label {
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
}

.login-button {
  background-color: $wolox-green;
  color: $white;
  position: relative;
  width: 100%;

  &:after {
    position: absolute;
    content: ' ';
    border: 1px solid $grey;
    width: 100%;
    left: 0;
    top: 50px;
  }

  &:disabled {
    background-color: $grey;
    cursor: not-allowed;
  }
}

.signup-button {
  background-color: $transparent;
  border: 2px solid $wolox-green;
  color: $wolox-green;
  text-align: center;
}

.error {
  color: $red;
  font-size: 11px;
  font-style: italic;
  text-align: left;
}
</style>
