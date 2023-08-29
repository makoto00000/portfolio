<template lang="">
  <div class="container">
    <div class="profile-container">
      <div class="image-bg">
        <img src="../assets/img/selfImage.png" alt="" srcset="">
      </div>
      <div class="profile">
        <h2>Makoto Hata</h2>
        <p class="job-name">Web Engineer</p>
        <p class="profile-text">
          1992/4/29 香川県出身。<br>
          長所 - 好きなことなら狂ったように集中できる<br>
          短所 - 完璧主義<br>
          趣味 - プログラミング、ミステリー小説
        </p>
        <div class="sns-wrapper">
          <a href="https://twitter.com/makoblog2">
            <img src="../assets/img/X.jpg" alt="">
          </a>
          <a href="https://github.com/makoto00000">
            <img src="../assets/img/github.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage"
}
</script>
<style scoped>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }  
  .profile-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vw;
  }
  .image-bg {
    background-color: #000000;
    width: 30vw;
    padding: 2vw;
    margin-right: 5vw;
  }
  .image-bg img {
    background-color: #ffffff;
    height: 30vw;
    margin-left: 3vw;
  }

  .profile {
    /* width: 60%; */
    text-align: left;
  }
  .job-name {
    font-size: 2rem;
    border-bottom: 0.3vw solid;
    padding-bottom: 2vw;
    margin-bottom: 2vw;
  }
.profile-text {
  line-height: 3vw;
}
.sns-wrapper {
  display: flex;
  margin-top: 2vw;
}
.sns-wrapper img {
  width: 3vw;
  margin-right: 2vw;
  cursor: pointer;
}
</style>