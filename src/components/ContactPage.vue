<template lang="">
  <div class="container">
    <h2>Contact</h2>
    <form action="" method="post">
      <div class="input-area">
        <div class="left">
          <div class="name">
            <label for="name">Name</label>
            <input type="text" name="name">
          </div>
          <div class="email">
            <label for="email">Email</label>
            <input type="email" name="email">
          </div>
        </div>
        <div class="right">
          <div class="message">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="50" rows="10"></textarea>
          </div>
        </div>
      </div>
      <button type="submit">submit</button>
    </form>
    </div>
</template>
<script>
export default {
  name: "ContactPage"
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
  .name, .email, .message {
    display: flex;
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
</style>