<template>
  <div class="container">
      <div class="sub-text">
        <div>Web Engineer</div>
        <div>2020-</div>
      </div>
      <div class="top-image">
        <img src="../assets/img/topPageImage.png" alt="topPageImage" srcset="">
        <h1>portfolio.</h1>
        <p>makoto hata</p>
      </div>
  </div>
</template>

<script>
  export default {
    name:"TopPage"
  }
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
  width: 100vw;
}
.sub-text {
  position: absolute;
  width: 95%;
  display: flex;
  justify-content: space-between;
  font-size: 3vw;
  top: 2vw;
  left: 50%;
  transform: translateX(-50%);
}
.top-image {
  position: absolute;
  height: 80%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.top-image p {
  top: 65%;
  font-size: 3vw;
  font-weight: bold;
}
.top-image * {
  position: absolute;
}
.top-image img {
  width: 100%;
  height: 100%;
}
/* .top-image h1::before{
   content:"";
   display:inline-block;
   width:3px;
   height:15vw;
   rotate: -90deg;
   background-color:#333333;
   position:absolute;
   top:15%;
   left:-20%;
}

.top-image h1::after{
   content:"";
   display:inline-block;
   width:3px;
   height:15vw;
   rotate:90deg;
   background-color:#333333;
   position:absolute;
   top:15%;
   right:-20%;
} */

</style>