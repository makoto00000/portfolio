<template lang="">
  <div class="container">
    <h2>Products</h2>
    <div class="product-wrapper">
      <div class="product-card"></div>
      <div class="product-card"></div>
      <div class="product-card"></div>
    </div>

    </div>

</template>
<script>
export default {
  name: "ProductPage"
}
</script>
<style scoped>
    h2 {
    border-bottom: 0.5vw solid;
    margin: 0 5vw;
    padding-bottom: 2vw;
    margin-bottom: 5vw;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .product-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-card {
    height: 25vw;
    width: 25vw;
    background-color: #ffffff;
    border-radius: 20%;
    margin-right: 3vw;
  }
  .product-card:last-child {
    margin-right: 0;
  }
</style>