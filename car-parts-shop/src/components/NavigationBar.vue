<template>
  <div class="navigationBar">
    <h1>{{ msga }}</h1>
      <div class="panel panel-default">
      <p>E-mail:</p>      <input v-bind="Email"/>      <p>Hasło:</p>      <input type="Password" v-bind="Password"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data(){
    return{msga:"testestsetsets",}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ff0000;
}
</style>
