<template>
  <div class="home">
    <div class="header">
      <div class="wrapper">
        <div class="title">FOTOPROJEKT <span>|</span> 
          <img class="icon" src="../assets/camera.png" alt=""> 
          Kasper Pihl
        </div>
      </div>
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
    height: 85px;
    background-color: #563444;
    color:#fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:0px 5px 10px rgba(86,52,68, 0.9);
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .title {
    margin-top: 5px;

    span {
      margin-left: 5px;
    }
  }
  .icon {
    vertical-align: bottom;
    height: 24px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .footer {
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
