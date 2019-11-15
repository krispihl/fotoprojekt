<template>
  <div class="gallery">
    <div 
      class="gallery-panel"
      v-for="photo in photos"
      :key="photo.id"
    >
    <router-link :to="`./photo/${photo.id}`">
      <img :src="thumbUrl(photo.filename)" :alt="photo.title">
    </router-link>
    </div>
  </div>
</template>

<script>
import photos from '@/photos.json'

export default {
  name: 'Gallery',
  data() {
    return {
      photos
    }
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },
}
</script>

<style scoped lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    max-width: 90%;
    margin: 40px auto;
  }
  .gallery-panel img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
</style>
