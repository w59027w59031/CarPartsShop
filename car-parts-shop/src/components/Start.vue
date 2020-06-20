<template>
  <div class="start">    
    <NavigationBar/>   
    <br/>
    <ProductContainer/>
    <br/>
    <Basket/>

  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import ProductContainer from './ProductContainer.vue';
import Basket from './Basket.vue';

export default {
  name: 'Start',
  components: {
    NavigationBar,
    ProductContainer,
    Basket
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
