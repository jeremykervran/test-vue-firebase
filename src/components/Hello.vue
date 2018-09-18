<template>
    <div class="hello">
        <h3>Hello!</h3>
        <iframe width="33%" height="315" src="https://www.youtube.com/embed/le0BLAEO93g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br>
        <h3>:3</h3>
        <button v-on:click="logout">Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        logout: function () {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
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
  iframe {
      box-shadow: 3px 3px 3px dimgrey;
  }
</style>