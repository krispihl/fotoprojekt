<template>
  <div class="home">
    <div class="header">
      <div class="title">FOTOPROJEKT<span>//</span>KASPER PIHL</div>
    </div>
    <Gallery/>
    <div class="footer">&copy; KRISPIHL 2019</div>
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
    font-size: 20px;
    margin: 20px;
  }
</style>
