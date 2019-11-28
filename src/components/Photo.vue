<template> 
    <div class="lightbox">
        <div class="lightbox-info">
            <span v-if="Number(this.$route.params.id) !== 0" class="close-btn" @click="previousImage"><</span>
            {{ photo.title.toUpperCase() }}
            <span v-if="(Number(this.$route.params.id) + 1) !== photos.length" class="close-btn" @click="nextImage">></span>
            <span img class="close-btn" @click="goHome">X</span>
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
	created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', this.handleKeyPress)
    }
  },
  beforeDestroy() {
		if (typeof window !== 'undefined') {
			document.removeEventListener('keydown', this.handleKeyPress)
		}
	},
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    handleKeyPress(e) {
      if (e.keyCode === 37) {
        this.previousImage();
      } else if (e.keyCode === 39) {
        this.nextImage();
      } else if (e.keyCode === 27) {
				this.goHome();
			}
    },
    goHome() {
        router.push('/');
    },
    previousImage() {
			if(this.$route.params.id > 0) {
        const previousPageId = Number(this.$route.params.id) -1;
        this.$router.push(`/photo/${previousPageId}`);
			}
    },
    nextImage() {
			if(this.$route.params.id < this.photos.length) {
        const nextPageId = Number(this.$route.params.id) +1;
        this.$router.push(`/photo/${nextPageId}`);
			}
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
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 100px 1fr 50px;
        justify-items: center;
        align-items: center;
    }
    .lightbox-info {
        grid-row-start: 2;
        font-size: 28px;
    }
    .close-btn {
        cursor: pointer;
        margin: 5px 8px 0;
        vertical-align: bottom;
        width: 18px;
    }
</style>