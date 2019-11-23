<template>
  <div class="gallery">
    <div 
      class="gallery-panel"
      v-for="photo in photos"
      :key="photo.id"
    >
      <router-link 
        :to="`./photo/${photo.id}`"
        class="link"
      >
        <img 
          :src="thumbUrl(photo.filename)"
          :alt="photo.title"
          @mouseover="scaleItem = photo.id" 
          @mouseout="scaleItem = null" 
          :class="[
            'image',
            {scale: scaleItem === photo.id}
          ]"
        >
        <div 
          v-if="scaleItem === photo.id"
          class="overlay"
        >
          {{ photo.title.toUpperCase() }}
        </div>
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
      photos,
      scaleItem: null
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
  .image {
    transition: transform 0.25s ease-in;
  }
  .scale {
    transform: scale(1.05);
  }
  .link {
    position: relative;
  }
  .overlay {
    position: absolute;
    padding: 7px 10px 5px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #040004;
    top: -150%;
    left: 50%;
    transform: translate(-50%,-50%);
    line-height: 1.2rem;
  }
</style>
