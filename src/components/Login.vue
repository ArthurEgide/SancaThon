<template>
  <div id="auth_box">
    <form 
      action="login"
      method="post" 
      ref="form_login" 
      id="form_login"
      >
      <p>E-mail</p>
      <input 
        type="email" 
        autocomplete="email"
        v-model="email"
        >
      <p>Senha</p>
      <input 
      type="password" 
      v-model="password"
      >
    </form><br>
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import g from './../../security'

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    login: function() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then( 
          (user) =>{
            console.log("Logado com sucesso")
            console.log(user.user)
            this.$router.push('/')
          },
          (err) =>{
            alert("A unexpected thing happen")
            console.log("Error: " , err)
          }
        )
    }
  }
}
</script>

<style scoped>

#auth_box{
  padding: 60px;
  margin: 3px;
  background-color: burlywood;
}

</style>