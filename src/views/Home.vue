<template>
  <div class="home">
    <div class="header">
      <div class="title">FOTOPROJEKT<span>//</span>KASPER PIHL</div>
    </div>
    <Gallery/>
    <div class="footer">
      <span>&copy; KRISPIHL 2019</span>
      <a href="test.zip" download>
        Kõik pildid
        <img src="../assets/download.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'home',
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding: 40px 70px;
  }
  .title {
    margin-top: 5px;

    span {
      margin: 0 15px;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 20px 100px;

    a {
      font-size: 23px;
      color:#D48B92;
      text-decoration: none;

      img {
        margin-left: 5px;
      }
    }
  }
</style>
