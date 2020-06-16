<template>
  <div class="register">
    <h1>{{ msg }}</h1>
    <p>E-mail</p>
    <input v-bind="UserEmail"/>
    <p>Nazwa użytkownika</p>
    <input v-bind="UserName"/>
    <p>Hasło</p>
    <input type="password" v-bind="UserPassword"/>
    <p>Powtórz Hasło</p>
    <input type="password" v-bind="UserPasswordAgain"/>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    UserEmail: String,
    UserNameLabel: String,
    UserName: String,
    UserPassword: String,
    UserPasswordAgain: String
  },
  data(){
      return{
          msg: "Rejestracja użytkownika"
        }
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
  color: #42b983;
}
</style>
