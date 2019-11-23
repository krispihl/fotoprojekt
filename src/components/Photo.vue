<template> 
    <div class="lightbox">
        <div class="lightbox-info">
            <img v-if="Number(this.$route.params.id) !== 0" class="close-btn" src="../assets/previous.png" @click="previousImage">
            {{ photo.title.toUpperCase() }}
            <img v-if="(Number(this.$route.params.id) + 1) !== photos.length" class="close-btn" src="../assets/next.png" @click="nextImage">
            <img class="close-btn" src="../assets/close.png" @click="goHome">
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
    goHome() {
        router.push('/');
    },
    previousImage() {
        const previousPageId = Number(this.$route.params.id) -1;
        this.$router.push(`/photo/${previousPageId}`);
    },
    nextImage() {
        const nextPageId = Number(this.$route.params.id) +1;
        this.$router.push(`/photo/${nextPageId}`);
    }
  }
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
        margin: 5px 8px 0;
        vertical-align: bottom;
        width: 18px;
    }
</style>