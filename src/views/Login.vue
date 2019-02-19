<template>
  <form class="container" @submit.prevent="onSubmit">
    <img src="../assets/wolox-logo.png" class="wolox-logo" />
    <label class="form-label">Email</label>
    <input class="input" type="text" v-model="email"/>
    <p class="error" v-if="!$v.email.email">Email address not valid</p>
    <label class="form-label">Password</label>
    <input class="input" type="password" v-model="password"/>
    <p class="error" v-if="!$v.password.passwordFormat && password">Password should contain at least one number and one upper case</p>
    <button type="submit" class="button login-button" :disabled="$v.$invalid">Login</button>
    <button type="button" class="button signup-button" @click="redirectSignup">Sign Up</button>
  </form>
</template>

<script>
import { email } from 'vuelidate/lib/validators'
import { getToken } from '../services/UserService.js'

export default {
  data () {
    return {
      email: null,
      password: null,
      locale: 'en'
    }
  },
  validations: {
    email: {
      email
    },
    password: {
      passwordFormat(value) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        return re.test(value)
      }
    }
  },
  methods: {
    onSubmit() {
      const body = {
        "session": {
          "email": this.email,
          "password": this.password,
        }
      }
      getToken(body)
    },
    redirectSignup() {
      this.$router.push({ name: 'register' })
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
    content: " ";
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
}

.error {
  color: $red;
  font-size: 11px;
  font-style: italic;
  text-align: left;
}
</style>
