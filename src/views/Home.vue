<template>
  <div class="home">
    <div class="header">
      <div class="wrapper">
        <img class="icon" src="../assets/camera.png" alt="">
        <div class="title">FOTOPROJEKT [KASPER PIHL]</div>
      </div>
    </div>
    <Gallery/>
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
    height: 100px;
    background-color: #AAE6D9;
    color:#040004;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .icon {
    height: 30px;
    margin-right: 15px;
    margin-bottom: 3px;
  }
</style>
