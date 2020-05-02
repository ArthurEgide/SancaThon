import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import g from './../security'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: g.APIKEY,
  authDomain: "sancathon-socialfood.firebaseapp.com",
  databaseURL: "https://sancathon-socialfood.firebaseio.com",
  projectId: "sancathon-socialfood",
  storageBucket: "sancathon-socialfood.appspot.com",
  messagingSenderId: "990985202078",
  appId: "1:990985202078:web:47cbbf8bc4f35a423bce8f"
};
firebase.initializeApp(firebaseConfig)
let app= '';
firebase.auth().onAuthStateChanged(()=>{
  console.log("Auth changed")
  if(!app){
    console.log("!app")
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
