<template>
  <div class="start">
    
    <h1>{{ msg }}</h1>
    <NavigationBar/>
    
      <div class="container-fluid">
        <h1>My First Bootstrap Page</h1>
        <p>This is some text.</p>
      </div>

  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';

export default {
  name: 'Start',
  components: {
    NavigationBar,
    },
  props: {
    msg: String,
    Email: String,
    Password: String,
  },
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
