<template>
  

  <Carousel v-if="show">
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <TopPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <ProductPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <SkillsPage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <ProfilePage/>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <SelfAnalysisPage/>
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

  <div v-if="!show">
    <TopPage/>
    <ProductPage/>
    <SkillsPage/>
    <ProfilePage/>
    <SelfAnalysisPage/>
    <ContactPage/>
  </div>
  

  
  
</template>

<script setup>
import TopPage from './components/TopPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ProductPage from './components/ProductPage.vue'
import SelfAnalysisPage from './components/SelfAnalysisPage.vue'
import ContactPage from './components/ContactPage.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash';

const innerWidth = ref(window.innerWidth);
const show = ref(innerWidth.value >= 1024 ? true : false);
const checkWindowSize = () => {
  if (window.innerWidth >= 1024) {
    if (show.value === false && innerWidth.value < 1024) show.value = true;
  } else {
    if (show.value === true) show.value = false;
  }
  innerWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener('resize', debounce(checkWindowSize, 100));
});
onUnmounted(() => {
  window.removeEventListener('resize', checkWindowSize);
});

</script>

<style>
#app {
  font-family: PT Sans Caption, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  background-image: url("./assets/img/bgImage.png");
  background-color: #EEEEEE;
  background-size:cover;
  background-repeat: no-repeat;
  width: 100vw;
  /* height: calc(100vw * 9/16); */
  height: 100%;
}

.carousel__item {
  height: calc(100vw * 9/16);
  /* max-height: 100vh; */
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0 1vw;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination{
  position: absolute;
  bottom: 2vw;
  left: 50%;
  transform: translateX(-50%);
}
.carousel__pagination-button::after {
  width: 10vw !important;
  height: 1vw !important;
}
</style>
