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
          {{ photo.title }}
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
    grid-gap: 10px;
    max-width: 90%;
    margin: 0 auto;
  }
  .gallery-panel img {
    width: 100%;
    object-fit: cover;
    border: solid 3px #fff;
    border-radius: 5px;
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
    top: -150%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2rem;
    padding: 3px 10px 5px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #040004;
  }
</style>
