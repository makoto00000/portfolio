<script setup>
import { ref } from 'vue'

const open = ref(false);
const productNum = ref(Number);
const Products = ref([
  {
    id: 0,
    name: "ラフランクボード",
    image: require("../assets/img/product/lfb-detail.png"),
    language: "PHP",
    term: "1ヶ月",
    comment: "  掲示板のWebアプリです。掲示板を立てる、投稿にレスを送る、投稿を削除する、画像をアップロードするなどの基本的な機能を実装しました。\n「平和な掲示板をコンセプト」としており、誹謗中傷のない平和な場を目指しています。",
    url: "https://lfboard.com/",
  },
  {
    id: 1,
    name: "Cheer and Tips",
    image: require("../assets/img/product/cat-detail.png"),
    language: "PHP",
    term: "1ヶ月",
    comment: "　「どこかで頑張っている誰かにチップを」がコンセプトです。チップをもらって応援してもらった人は、またそのチップで誰かを応援できます。こうやって応援の輪が広がっていけば素敵だなと思い開発しました。\n基本的な機能はラフランクボードをベースにして、さらにログイン機能、課金機能を実装しました。",
    url: "https://cheerandtips.com",
  },
  {
    id: 2,
    name: "VARCLOCK",
    image: require("../assets/img/product/varclock-detail.png"),
    language: "Flutter",
    term: "2週間",
    comment: "　倍速機能を持った時計アプリです。例えば倍速モードで1時間が経過した場合、実際には30分しか経過していないことになります。この差分の30分を得した気分になれるというものです。\n　普段から1日がもっと長かったらなと思っていたのが、開発のきっかけです。iosとandroid両方に対応しており、画面下部にはバナー広告を設置しました。",
    url: "",
  },
  {
    id: 3,
    name: "FLEDGLING",
    image: require("../assets/img/product/fledgling-detail.mp4"),
    language: "bubble",
    term: "2ヶ月",
    comment: "　駆け出しエンジニアとスタートアップ起業家をつなぐマッチングサービス。駆け出しエンジニアは実務経験が欲しいけど、実務経験がなければ実務ができないというジレンマを抱えています。\n　そこで価格を抑えられるなら駆け出しエンジニアに仕事を依頼したいという起業家をマッチングさせることを思いつきました。\n　開発にはノーコードツールであるBubbleを使用しました。",
    url: "",
  },
  {
    id: 4,
    name: "Some Diaries",
    image: require("../assets/img/product/someDiaries-detail.png"),
    language: "Next.js",
    term: "2ヶ月",
    comment: "　どこかの誰かと交換日記ができるWebサービスです。\n　ユーザーは誰かが作成した日記に自由に参加ができ、好きなことを書くことができます。\n　Next.jsの学習も兼ねて作成したサービスで、OAuth認証を用いたログイン機能や、APIでのデータベース連携を実装しています。",
    url: "",
  },

]);

</script>

<template>

  <div class="product-wrapper">
    <div class="product-card"><img @click="open = true, productNum = 0" src="../assets/img/product/lfb.png" alt="">
    </div>
    <div class="product-card"><img @click="open = true, productNum = 1" src="../assets/img/product/cat.png" alt="">
    </div>
    <div class="product-card"><img @click="open = true, productNum = 2" src="../assets/img/product/varClock.png" alt="">
    </div>
    <div class="product-card"><img @click="open = true, productNum = 3" src="../assets/img/product/fledgling.png" alt="">
    </div>
    <div class="product-card"><img @click="open = true, productNum = 4" src="../assets/img/product/someDiaries.png" alt="">
    </div>
  </div>
  <Transition>
    <div v-if="open" class="modal_wrap">
      <div @click="open=false" class="modal_overlay">
        <div class="modal_content">
          <button @click="open = false" class="close_button">✕</button>
          <h3>{{ Products[productNum].name }}</h3>
          <div class="modal-block">
            <img v-if="productNum != 3" :src=' Products[productNum].image ' alt="" class="img-datail">
            <video v-else autoplay :src='Products[productNum].image'></video>
            <div class="modal-block-right">
                <p><span class="bold">開発言語：</span>{{ Products[productNum].language }}</p>
                <p><span class="bold">開発期間：</span>{{ Products[productNum].term }}</p>
                <p><span class="bold">内容：</span><br>{{ Products[productNum].comment }}</p>
                <p v-if="Products[productNum].url != '' "><span class="bold">URL：</span><a :href=' Products[productNum].url ' target="blank">{{ Products[productNum].name }}</a><img class="gaibu-link" src="../assets/img/gaibu-link.png" alt=""></p>
                <p v-if="Products[productNum].url == '' ">※現在非公開</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
video {
  width: 30vw;
  margin-right: 5vw;
  margin-right: 5vw;
}
.product-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
  .product-card {
    height: 15vw;
    width: 15vw;
    background-color: #ffffff;
    border-radius: 20%;
    margin-right: 3vw;
    animation: zoomOut 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-card img {
    width: 80%;
    padding: 2vw;
  }
  .product-card:hover {
    transform: scale(1.2);
    animation: zoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }
  @keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
@keyframes zoomOut {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
  .product-card:last-child {
    margin-right: 0;
  }
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
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
  height: 47vw;
  padding: 2vw;
  box-sizing: border-box;
  background: #fff;
  transform: scale(0.3);
  transition: 0.5s;
  border-radius: 2vw;
}
@media screen and (max-width: 1024px) {
  .modal_content {
    height: 100vw;
  }
}
.modal_content h3 {
  margin-bottom: 2vw;
}
.modal-block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
}
.modal-block-right {
  overflow: scroll;
  padding-bottom: 5vw;
  height: 80%;
}
.modal-block-right p {
  margin: 2vw;
}
.img-datail {
  max-height: 80%;
  max-width: 50%;
  margin-left: 5vw;
  margin-right: 5vw;
}
@media (max-width: 1024px) {
  .img-detail {
    width: 20vw;
    height: 0;
  }
}
.modal_content p {
  font-size: 2vw;
  text-align: left;
  white-space: pre-line;
}
.gaibu-link {
  width: 1.5vw;
  margin-left: 1vw;
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