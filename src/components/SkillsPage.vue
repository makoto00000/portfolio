<template lang="">
  <div class="container">
    <h2>Engineer Skills</h2>

    <div class="skill-wrapper">

      <div class="language-wrapper">
        <h3>language</h3>
        <div class="parent">
          <div class="upper-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/html.png" alt="">
              </div>
              <h4>HTML</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/css.png" alt="">
              </div>
              <h4>CSS</h4>
            </div>
              <div class="image-card">
                <div class="image-wrapper">
                  <img src="../assets/img/language-logo/javascript.png" alt="">
                </div>
                <h4>javascript</h4>
              </div>
              <div class="image-card">
                <div class="image-wrapper">
                  <img src="../assets/img/language-logo/typescript.png" alt="">
                </div>
                <h4>typescript</h4>
              </div>
          </div>
            
          <div class="lower-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/php.png" alt="">
              </div>
              <h4>php</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/java.png" alt="">
              </div>
              <h4>java</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/ruby.png" alt="">
              </div>
              <h4>ruby</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/python.png" alt="">
              </div>
              <h4>python</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="flamework-wrapper">
        <h3>flamework</h3>
        <div class="parent">
          <div class="upper-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/react.png" alt="">
              </div>
              <h4>react</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/nextjs.png" alt="">
              </div>
              <h4>Next.js</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/rails.png" alt="">
              </div>
              <h4>Ruby on Rails</h4>
            </div>
          </div>

          <div class="lower-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/flutter.png" alt="">
              </div>
            <h4>flutter</h4></div>
            <div class="image-card"><div class="image-wrapper">
              <img src="../assets/img/language-logo/vuejs.png" alt="">
            </div>
            <h4>Vue.js</h4></div>
          </div>
        </div>
      </div>

      <div class="other-wrapper">
        <h3>other</h3>
        <div class="parent">
          <div class="upper-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/sqlite.png" alt="">
              </div>
              <h4>SQLite</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/postgresql.png" alt="">
              </div>
              <h4>PostgreSQL</h4>
            </div>
              <div class="image-card">
                <div class="image-wrapper">
                  <img src="../assets/img/language-logo/mysql.png" alt="">
                </div>
                <h4>MySQL</h4>
              </div>
              <div class="image-card">
                <div class="image-wrapper">
                  <img src="../assets/img/language-logo/graphql.png" alt="">
                </div>
                <h4>GraphQL</h4>
              </div>
          </div>
            
          <div class="lower-row">
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/docker.png" alt="">
              </div>
              <h4>docker</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/git.png" alt="">
              </div>
              <h4>git</h4>
            </div>
            <div class="image-card">
              <div class="image-wrapper">
                <img src="../assets/img/language-logo/aws.png" alt="">
              </div>
              <h4>AWS</h4>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
export default {
  name: "SkillsPage"
}
</script>
<style scoped>

  img {
    width: 5vw;
  }
  h2 {
    border-bottom: 0.5vw solid;
    margin: 0 5vw;
    padding-bottom: 2vw;
  }
  h4 {
    text-align: center;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .skill-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 5vw;
  }

  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .upper-row, .lower-row {
    display: flex;
    justify-content: space-around;
    align-items:center;
    height: 10vw;
  }

  .image-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: space-between;
    width: 8vw;
    height: 8vw;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    height: 10vw;
  }

</style>