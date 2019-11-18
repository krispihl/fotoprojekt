<template> 

        <div class="lightbox">
            <div class="lightbox-info">
                {{ photo.title.toUpperCase() }}
                <img class="close-btn" src="../assets/close.png" @click="goBack">
            </div>
            
            <div class="lightbox-image" :style="{ 'backgroundImage': `url(${photoUrl(photo.filename)})` }"></div>
            
        </div>

</template>

<script>
import photos from '@/photos.json';
import router from '../router'

export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    goBack() {
        router.go(-1);
    }
  },
};
</script>

<style>
    .lightbox-image {
        height: 800px;
        width: 800px;
        grid-row-start: 3;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
    }
    .lightbox {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 100px 1fr 50px;
        justify-items: center;
        align-items: center;
    }
    .lightbox-info {
        grid-row-start: 2;
        font-weight: bold;
    }
    .close-btn {
        cursor: pointer;
        margin-left: 15px;
        margin-top: 5px;
        vertical-align: bottom;
        width: 18px;
    }
</style>