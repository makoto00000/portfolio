<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <!-- <TopPage /> -->
  <!-- <ProfilePage /> -->
  <SkillsPage />
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TopPage from './components/TopPage.vue'
// import ProfilePage from './components/ProfilePage.vue'
import SkillsPage from './components/SkillsPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // TopPage,
    // ProfilePage,
    SkillsPage,
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
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vw * 9/16);

}
</style>
