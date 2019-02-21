<template lang="pug">
  form.container(@submit.prevent='onSubmit')
    img.wolox-logo(src='../assets/wolox-logo.png')
    label.form-label 
      | First Name
    input.input(type='text' v-model='firstName')
    label.form-label 
      | Last Name
    input.input(type='text' v-model='lastName')
    label.form-label 
      | Email
    input.input(type='text' v-model='email')
    p.error(v-if='!$v.email.email') 
      | Email address not valid
    label.form-label 
      | Password
    input.input(type='password' v-model='password')
    p.error(v-if='!$v.password.passwordFormat && password') 
      | Password should contain at least one number and one upper case
    button.button.signup-button(type='submit' :disabled='$v.$invalid') 
      | Sign Up
    router-link.button.login-button(to='/login') 
      | Login
</template>

<script>
import { email } from 'vuelidate/lib/validators'
import { password } from '@/utils/validators'
import { createUser } from '@/services/UserService'

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
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
      const body = {
        "user": {
          "email": this.email,
          "password": this.password,
          "password_confirmation": this.password,
          "first_name": this.firstName,
          "last_name": this.lastName,
          "locale": "en"
        }
      }
      createUser(body)
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

.signup-button-container {
  border-bottom: 1px solid $grey;
  padding-bottom: 20px;
}

.signup-button {
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

.login-button {
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
