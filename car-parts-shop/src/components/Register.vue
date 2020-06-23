<template>
  <div class="register">
    <p class="register-title">{{msg}}</p>
 <form class="register-form ">
  <label>
    <p class="label-txt">Adres email</p>
    <input type="email" class="input" id="InputEmail" aria-describedby="emailHelp">
    <div class="line-box">
      <div class="line"></div>
      <small id="emailHelp" class="form-text text-muted">Nie podawaj adresu email osobom nieupoważnionym!</small>
    </div>
  </label>
  <label>
    <p class="label-txt">Nazwa użytkownika</p>
    <input type="text" class="input" id="InputUsername">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Hasło</p>
    <input type="password" class="input" id="InputPassword">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Powtórz Hasło</p>
    <input type="password" class="input" id="InputPasswordAgain">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button class="mr-sm-2" type="submit">Zarejestruj</button>
  <button class="mr-sm-2" type="reset">Resetuj</button>
  <button class="mr-sm-2" type="button">Wróć</button>
</form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
      return{
          msg: "Rejestracja użytkownika"
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
