<template>
  <div class="lightbox">
    <div class="lightbox-image" :style="{ 'backgroundImage': `url(${photoUrl(photo.filename)})` }"></div>
    <div class="lightbox-info">
        {{ photo.title.toUpperCase() }}
    </div>
  </div>
</template>

<script>
import photos from '@/photos.json';

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
        background-color: #000;
        color: #fff;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 50px 1fr 50px;
        justify-items: center;
        align-items: center;
    }
    .lightbox-info {
        grid-row-start: 2;
    }
</style>