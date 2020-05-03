<template>
  <div id="auth">
    <div>
      <img 
        src="./../assets/logo.png" 
        alt="Logo da empreesa. Chapéu de chefe de cozinha vermelho escrito social em amarelo e food em vermelho."
        class="logo"
        >
    </div>

    <div class="auth_box">
      <Login/>
    </div>


  </div>
</template>

<script>

import firebase from 'firebase'
import Login from './../components/Login'
import Register from './../components/Register'
import g from './../../security'

export default {
  name: 'Auth',
  components: {
    Login,
    Register
  },
  data(){
    return {
      name : "",
    };
  },
  computed: {
  },
  methods: {
    logout: function() {
      console.log("saindo!")
    },
  },
}
</script>

<style scoped>
#auth {
  background-color: darkcyan;
  display: flex;
  justify-content: space-around;
}

#auth .auth_box{
  background-color: brown;
  align-self: center;
}

.logo {
  height: 450px;
  width: 400px;
}

</style>