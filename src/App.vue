<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Carousel>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <SelfAnalysisPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <ProductPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <TopPage></TopPage>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <ProfilePage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <SkillsPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <ContactPage/>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  
</template>

<script>
import TopPage from './components/TopPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ProductPage from './components/ProductPage.vue'
import SelfAnalysisPage from './components/SelfAnalysisPage.vue'
import ContactPage from './components/ContactPage.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {


    TopPage,
    ProfilePage,
    SkillsPage,
    ProductPage,
    SelfAnalysisPage,
    ContactPage,
    Carousel,
    Slide,
    Pagination,
    Navigation,

  }
}
</script>

<style>
#app {
  font-family: PT Sans Caption, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  background-image: url("./assets/img/bgImage.png");
  background-color: #EEEEEE;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(100vw * 9/16);
}

.carousel__item {
  /* min-height: 200px; */

  height: calc(100vw * 9/16);
  /* background-color: var(--vc-clr-primary); */
  /* color: var(--vc-clr-white); */
  /* font-size: 20px; */
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination{
  position: absolute;
  bottom: 4vw;
  left: 50%;
  transform: translateX(-50%);
}
.carousel__pagination-button::after {
  width: 10vw !important;
  height: 1vw !important;
}
</style>
