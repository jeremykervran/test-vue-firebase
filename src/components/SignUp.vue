<template>
    <div class="sign-up">
        <h3>Sign Up</h3>
        <p>Let's create a new account!</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link>.</span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signup',
    data: function() {
        return {}
    },
    methods:  {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
