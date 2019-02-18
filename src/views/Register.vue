<template>
  <form class="container" @submit.prevent="onSubmit">
    <img src="../assets/wolox-logo.png" class="wolox-logo" />
    <label class="form-label">First Name</label>
    <input class="form-input" type="text" v-model="user.firstName"/>
    <label class="form-label">Last Name</label>
    <input class="form-input" type="text" v-model="user.lastName"/>
    <label class="form-label">Email</label>
    <input class="form-input" type="text" v-model="user.email"/>
    <label class="form-label">Password</label>
    <input class="form-input" type="password" v-model="user.password"/>
    <div class="signup-button-container">
      <button type="submit" class="signup-button">Sign Up</button>
    </div>
    <button class="login-button">Login</button>
  </form>  
</template>

<script>
export default {
  data() { 
    return {
      user: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        locale: 'en'
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors.scss';

.container {
  border-top: 3px solid $wolox-blue;
  display: flex;
  flex-direction: column;
  margin: auto;
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
  border: 0;
  color: $white;
  width: 100%;
}

.login-button {
  background-color: $transparent;
  border: 2px solid $wolox-green;
  color: $wolox-green;
}
</style>