<template>
  <div class="card">
    <p> {{p1}}</p>
    <p> {{p2}}</p>
    <p> {{p3}}</p>
  </div>
</template>

<script>
export default {
  name: 'exampleCard',
  props: {
    p1: String,
    p2: String,
    p3: String
  },
  data(){
    return {
    };
  },
}
</script>

<style scoped>
.card {
  color: #42b983;
  border: dashed;
  border-color: blueviolet;
  display:inline-block;
  margin-bottom: 10px;
}

.card:hover {
  color: #42b983;
  background-color: #454545;
  transition: 0.4s ease-in-out;
  transition-duration: 0.25s;
  font-size: 110%;
  transform: rotate(1.5deg);
  border: solid;
}

.card p {
  padding-left: 10px;
  padding-right: 25px;
  margin: 10px;
}

.card p:hover{
  color: #dedede;
  cursor: pointer;
  font-family: monospace;
  font-size: 150%;
}
</style>
