<template lang="">
  <div class="container">
    <h2>Products</h2>
    <ProductModal />
  </div>

</template>

<script setup>
import ProductModal from './ProductModal.vue';


</script>

<style scoped>
    h2 {
    border-bottom: 0.5vw solid;
    margin: 0 5vw;
    padding-bottom: 2vw;
    margin-bottom: 5vw;
    text-align: left;
    width: 90%;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vw * 9/16);
  }
  
</style>