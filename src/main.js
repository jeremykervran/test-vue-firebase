// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyAxhG53pgUvyyfea_hvelGMHaW8X4iIZ8I",
  authDomain: "vue-firebase-tutorial-b46d0.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-b46d0.firebaseio.com",
  projectId: "vue-firebase-tutorial-b46d0",
  storageBucket: "",
  messagingSenderId: "416169356464"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }
});
