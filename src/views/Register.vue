<template>
  <div>
    <form action="do_register" method="post" ref="form_register" id="form_register">
      <p>Name</p>
      <input 
        type="text" 
        v-model="name"
        >
      <p>birthday</p>
      <input 
        type="date" 
        v-model.trim="birthday"
        >
      <p>E-mail</p>
      <input 
        type="email" 
        v-model.trim="email"
        >
      <p>Senha</p>
      <input 
      type="password" 
      v-model="password"
      >
      <p>Repita sua senha</p>
      <input 
      type="password" 
      v-model="repassword"
      >
    </form><br>
      <button @click="register">Registrar</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "register",
  data() {
    return {
      name: '',
      birthday: '',
      email: '',
      password: '',
      repassword: ''
    };
  },
  methods: {
    register: function() {
      if(this.password==this.repassword){
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then( 
          (reg) =>{
            this.$router.replace("home")
            
            firebase.database().ref("/users").child(reg.user.uid).set({
              name: this.name,
              birthday: this.birthday
            })

          },
          (err) =>{
            alert("A unexpected thing happen")
            console.log("Error: " , err)
          }
        )
      }else{
        alert("The password's provided need to be the same")
      }

          
    }
  }
}
</script>