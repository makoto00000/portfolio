<script setup>

import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import axios from 'axios';
import { ref } from 'vue';
import VUeElementLoading from "vue-element-loading";

const MAIL_ADDRESS = ref(process.env.VUE_APP_MAIL_ADDRESS);
const open = ref(false);
let sendError = ref(undefined);



const schema = object({
  name: string().required("必須の項目です").label("Name"),
  email: string().required("必須の項目です").email("メールアドレスを入力してください").label("Email"),
});
const { errors, useFieldModel, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    message: '',
  },
  initialErrors: {
    name: "必須の項目です",
    email: "必須の項目です",
  }
});

const onSubmit = handleSubmit(async (values,{ resetForm }) => {
  const options = {
    rejectUnauthorized: false, 
  };
  sendError.value = null;
  await axios.post(`${process.env.VUE_APP_API_DIR}`, options, JSON.stringify(values), {
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    rejectUnauthorized: false,
  })
    .then(() => sendError.value = false)
    .catch((error) => console.log(error), sendError.value = true);

    resetForm();
});

const [name, email, message] = useFieldModel(['name', 'email', 'message']);

</script>

<template lang="">
  <div class="container">
    <h2>Contact</h2>
    <div class="form">
      <div class="input-area">
        <div class="left">
          <div class="name">
            <div class="label-wrap">
              <label for="name">Name</label>
              <span class="validation_msg">{{errors.name}}</span>
            </div>
            <input type="text" v-model="name" />
          </div>
          <div class="email">
            <div class="label-wrap">
              <label for="email">Email</label>
              <span class="validation_msg">{{errors.email}}</span>
            </div>
            <input type="text" v-model="email" />
          </div>
        </div>
        <div class="right">
          <div class="message">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="50" rows="10" v-model="message"></textarea>
          </div>
        </div>
      </div>
      <button class="submit" @click="open=true" :disabled="Object.keys(errors).length  !== 0">confirm</button>
    </div>

  </div>

<Transition>
  <div v-if="open" class="modal_wrap">
    <div class="modal_overlay">
      <div class="modal_content">
        <VUeElementLoading :active="isSubmitting" spinner="bar-fade-scale" is-full-screen />
        <button @click="open = false, sendError = undefined" class="close_button">✕</button>
        
        <div v-if="sendError == undefined && !isSubmitting" class="modal_inner">
          <h4>お問い合わせ内容確認</h4>
          <form @submit="onSubmit">
            <div class="modal-block">
              <h5>Name</h5>
              <p>{{name}}</p>
              <h5>Email</h5>
              <p>{{email}}</p>
              <h5>Message</h5>
              <p>{{message}}</p>
            </div>
            <button type="submit" class="submit_button">submit</button>
          </form>
        </div>
        <div v-if="isSubmitting" class="modal_inner">
        </div>
        <div v-if="sendError == true && !isSubmitting" class="after_submit">
          <h4>送信できませんでした...</h4>
          <img src="../assets/img/apologize.png" class="apologize_img">

          <p>何らかの理由でメッセージが送信されませんでした。<br>お手数ですが時間をおいて再度送信するか、下記のメールアドレスへ直接ご連絡お願いいたします。</p>
          <a :href="`mailto:${MAIL_ADDRESS}`">{{MAIL_ADDRESS}}</a>
        </div>
        <div v-if="sendError == false && !isSubmitting" class="after_submit">
          <h4>送信が完了しました!</h4>
          <img src="../assets/img/send-mail.png" class="send_mail_img">
          <p>ご入力頂いたメールアドレスへ返信します。<br>しばらくお待ち下さい。<br>メールは｢{{MAIL_ADDRESS}}｣で送信致します。｢{{MAIL_ADDRESS}}｣からのメールを受信できるように設定をお願いします。</p>
        </div>

      </div>

    </div>
  </div>
</Transition>



</template>

<style scoped>
.modal_inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 2.5vw !important;
  margin-bottom: 2vw;
}
h5 {
  font-size: 2vw !important;
  margin-bottom: 0.5vw;
}
.modal-block p {
  margin-bottom: 2vw;
  font-size: 1.5vw;
}
.after_submit  {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.after_submit h4 {
  margin-bottom: 3vw;
}
.send_mail_img {
  width: 20vw;
  margin-bottom: 3vw;
}
.apologize_img {
  width: 10vw;
  margin-bottom: 3vw;
}
.after_submit p {
  font-size: 1vw;
  margin-bottom: 2vw;
}
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.submit:disabled {
  opacity: 0.5;
}
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
    height: calc(100vw * 9/16);
  }

.input-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
}
label {
  font-size: 3vw;
  text-align: left;
}

input, textarea {
  resize: none;
  border: 0.1vw solid #707070;
  border-radius: 1vw;
  width: 35vw;
  padding: 0.5vw 1vw;
  font-size: 1vw;
}
input {
  height: 3vw;
}
textarea {
  height: 15.5vw;
}
.left {
  margin-right: 6vw;
}
.name {
  margin-bottom: 5vw;
}
.label-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37vw;
}

.validation_msg {
  color: darkred;
  font-weight: bold;
  width: 60%;
  text-align: right;
}
  .name, .email, .message {
    display: flex;
    flex-direction: column;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    background: #707070;
    border-radius: 5px;
    padding: 1vw;
    width: 15vw;
    font-size: 2vw;
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
  width: 40vw;
  max-height: 40vw;
  padding: 3vw;
  box-sizing: border-box;
  background: #fff;
  transform: scale(0.3);
  transition: 0.5s;
  border-radius: 2vw;
  overflow: scroll;
  z-index: 9999;
}
.submit_button {
  display: block;
  margin: 4vw auto 0;
}
@media screen and (max-width: 768px) {
  .modal_content {
    height: 110vw;
    width: 70%;
  }
}
  .close_button{
  position: absolute;
  top: 1vw;
  right: 2vw;
  font-size: 3vw;
  cursor: pointer;
  background: none;
  color: #333;
  width: auto;
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

</style>