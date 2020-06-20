<template>
  <div class="basket">
    <BasketItem Ean="asdsadsadas" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="23432423" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="mnbmnbmnbm" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="puiipiopoi" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="trytryrt" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="qweqwewq" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="asdsad" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="zxcxzcxz" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>
    <BasketItem Ean="rtyrtyrt" Producent="Producent_test" Seria="SeriaTest" KodProduktu="KodProd" Jednostka="Jednostka" Zdjecie="Zdjecie213"/>

    <div class="basketSummary">
      
    </div>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';

export default {
  name: 'Basket',
  components: {
    BasketItem
  }
};
</script>
