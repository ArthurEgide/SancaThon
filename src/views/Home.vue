<template>
  <div class="home">
    <p>#1 Property from firebase stored on local {{name}}!</p>
    <p>#2 Calculated with async property.  {{from_birth}} lifedays until today</p>
    <span>#3 </span><p v-for="item in this.aleatory_list" :key="item.count">
      {{ item.count }}
    </p>
    <p>#4 Property observer.Inverted name property {{reversedMessage}}</p>
    <div>
      <p>#5 Using Component</p>
      <Card
        p1 = "Using"
        p2 = "my"
        p3 = "Card"
      />
    </div>
    <input type="button" value="Logout" @click="logout">
    <input type="button" value="Change Name" @click="name = 'This property as changed'">
  </div>
</template>



<script>

import firebase from 'firebase'
import Card from './../components/exampleCard'
import g from './../../security'

export default {
  name: 'Home',
  components: {
    Card
  },
  // As propriedadas de 'data' são acessadas com 'this.PROP'
  data(){
    return {
      name : "",
      birthday: "",
      from_birth: "",
      aleatory_list: [
        { count: '0' },
        { count: '1' },
        { count: '2' },
        { count: '3' },
        { count: '4' },
        { count: '5' },
        { count: '6' },
        { count: '7' },
        { count: '8' }
      ]
      
    };
  },
  computed: {
    reversedMessage: function () {
      return this.name.split('').reverse().join('')
    }
  },
  methods: {
    logout: function() {
      console.log("saindo!")
        firebase
        .auth()
        .signOut()
        .then( 
          () =>{
            console.log("Deslogado com sucesso")
            this.$router.replace("login")
          }
        )
    },
    daysToBith: function(book){
      var date1 = new Date(this.birthday); 
      var date2 = new Date(); 
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

      this.from_birth = Math.round(Difference_In_Days)
      return 0;
    },
  },
  // Essa função rola toda vez que a página é carregada. Antes de ser renderizada na tela já é disparado essa função
  beforeCreate: function () {

    // Busca informações no firebase. O ".ref() se refere ao root do 'database' e daí pra frente navega nos paths normalmente."
    // o '.child(VAL)' funciona como "/VAL", ou seja, ref("/users/arthur") é igual à "ref().child("users").child("arthur")".
    // Por padrão, vamos utilizar o 'ref' pro primeiro nó e o 'child' pros nós subsequentes

    firebase
      .database()
      .ref("/users")
      .child(firebase.auth().currentUser.uid)
      .once("value") // once = busca 1 única vez o valor. on = monitora o valor, retornando toda mudança. Caso use, é necessário desligar o observador quando não for mai necessário
      .then( data =>{  // O callback é cheio de informações referente à transação feita. Pra pegar os valores(salvos no banco), use a função '.val()'
        this.name = data.val().name;
        this.birthday = data.val().birthday;
        this.daysToBith();
      } )
  },
}
</script>

<style scoped>
/* Divirta-se com o CSS single file */
.author {
  background-color: darkcyan;
}

.title {
  background-color: dodgerblue;
}

.edition {
  background-color: rgb(202, 156, 245);
}

p, span {
  color: black;
  font-family: fantasy;
}

</style>