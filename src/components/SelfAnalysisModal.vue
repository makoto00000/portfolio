<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue';
const open = ref(false);
const modalNum = ref(0);
const props = defineProps({
  analyses:[]
});

const analyses = ref(props.analyses);


</script>

<template>
  <div class="analysis-wrapper">
    <button v-for="(analysis,index) in analyses" :key=index :class='analysis.className' @click="open = true, modalNum = index">{{ analysis.title }}</button>
  </div>

<Transition>
  <div v-if="open" class="modal_wrap">
    <div @click="open=false" class="modal_overlay">
      <div class="modal_content">
        <button @click="open = false" class="close_button">✕</button>
        <h3>{{analyses[modalNum].title}}</h3>
        <img :src='analyses[modalNum].image' alt="">
        <p>{{ analyses[modalNum].content }}</p>
      </div>
    </div>
  </div>
</Transition>

</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.analysis-wrapper {
  width: 100%;
  height: 30vw;
  position: relative;
  width: 100vw;
}
.analysis {
  font-size: 2vw;
  font-weight: bold;
  position: absolute;
}
.word1 {
  top: 0;
  left: 20vw;
}
.word2 {
  top: 1vw;
  left: 55vw;
}
.word3 {
  top: 10vw;
  left: 15vw;
}
.word4 {
  top: 8vw;
  left: 36vw;
}
.word5 {
  top: 10vw;
  left: 70vw;
}
.word6 {
  top: 18vw;
  left: 24vw;
}
.word7 {
  top: 15vw;
  left: 54vw;
}
.word8 {
  top: 18vw;
  left: 77vw;
}
.modal_overlay{
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 9999; */
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  opacity: 0;
}

.modal_content{
  align-self: center;
  width: 80%;
  height: 45vw;
  padding: 2vw;
  box-sizing: border-box;
  background: #fff;
  transform: scale(0.3);
  transition: 0.5s;
  border-radius: 2vw;
}
.modal_content img {
  width: 45%;
  border-radius: 1vw;
  margin: 2vw 0;
}
.modal_content p {
  font-size: 2vw;
  text-align: left;
  white-space: pre-line;
}
.close_button{
  position: absolute;
  top: 2vw;
  right: 2vw;
  font-size: 3vw;
  cursor: pointer;
}
.close_button:hover {
  color: darkred;
}

.modal_overlay{
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s;
}
.modal_overlay .modal_content{
  transform: scale(1);
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.open {
  animation: zoomOut 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
.open:hover {
  font-size: 2vw;
  font-weight: bold;
  color:darkred;
  animation: zoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
@keyframes zoomOut {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>