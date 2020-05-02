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
    p3: String,
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
  border: double;
  border-color: blueviolet;
  display:inline-block;
  margin-bottom: 10px;
}

.card p {
  padding-left: 10px;
  padding-right: 25px;
  margin: 10px;
}
</style>
