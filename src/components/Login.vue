<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br><br>
    <input type="password" v-model="password" placeholder="Password"><br><br>
    <button v-on:click="signIn">Connection</button>
    <p class="no-account-text">You don't have an account? <router-link to="/sign-up">You can create one!</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function() {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    border: none;
    height: 40px;
    border-radius: 3px 3px 3px;
    background-color: #41B883;
    color: white;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    transition: 0.5s;
  }
  button:hover {
    background-color: white;
    color: #41B883;
    border: 2px solid #41B883;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>

