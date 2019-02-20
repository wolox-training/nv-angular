<template>
  <form class="container" @submit.prevent="onSubmit">
    <img src="../assets/wolox-logo.png" class="wolox-logo" />
    <label class="form-label">First Name</label>
    <input class="input" type="text" v-model="firstName"/>
    <label class="form-label">Last Name</label>
    <input class="input" type="text" v-model="lastName"/>
    <label class="form-label">Email</label>
    <input class="input" type="text" v-model="email"/>
    <p class="error" v-if="!$v.email.email">Email address not valid</p>
    <label class="form-label">Password</label>
    <input class="input" type="password" v-model="password"/>
    <p class="error" v-if="!$v.password.password && password">Password should contain at least one number and one upper case</p>
    <button type="submit" class="button signup-button" :disabled="$v.$invalid">Sign Up</button>
    <button class="button login-button">Login</button>
  </form>
</template>

<script>
import { email } from 'vuelidate/lib/validators';
import { password } from '@/utils/validators';

export default {
  data () {
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
    onSubmit () {
      console.log(this.firstName, this.lastName, this.email, this.password)
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

.login-button {
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
