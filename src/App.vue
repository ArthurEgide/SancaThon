<template>
  <div id="app">
    <div id="nav">
      <div id="meeting">
        <router-link to="/teste">SocialFood</router-link>
        <router-link to="/teste">Parceiros</router-link>
        <router-link to="/teste">Restaurantes</router-link>
      </div>
      <div id="auth">
        <router-link to="/login">
          <p>
            Entrar
          </p>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "Principal",
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    to_login: function() {
      this.$route.replace()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  padding-left: 5px;
  background-color: #F0F0F0F0;
  display: flex;
  justify-content: space-between
}

#nav #auth{
  text-align: end;
}

#nav #meeting{
  text-align: start;
  display: flex;
  background-color: aliceblue;
  align-items: center;
  padding-left: 10px;
}

/* a é a tag do 'router-link' */
#nav #meeting a{
  margin-right: 30px;
  background-color: #fcfcfc;
  padding: 15px;
  text-decoration: none;
}

#nav #meeting a:hover{
  background-color: #cc3344;
  color: white;
  transition-duration: 0.45s;
  text-decoration-line: underline;
  border-radius: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #cc3344;
}
</style>
