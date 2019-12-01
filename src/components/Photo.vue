<template> 
    <div class="lightbox">
        <div class="lightbox-info">
            <span 
							v-if="Number(this.$route.params.id) !== 1"
							class="button"
							@click="previousImage"
						>
							&#60;
						</span>
            {{ photo.title.toUpperCase() }}
            <span
							v-if="(Number(this.$route.params.id)) !== photos.length"
							class="button"
							@click="nextImage"
						>
							&#62;
						</span>
            <span class="button button--close" @click="goHome">Sulge</span>
        </div>
        <div 
					class="lightbox-image"
					:style="{ 'backgroundImage': `url(${photoUrl(photo.filename)})` }"
				>
				</div>
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
    previousImage() {
			if(this.$route.params.id > 1) {
        const previousPageId = Number(this.$route.params.id) -1;
        this.$router.push(`/photo/${previousPageId}`);
			}
    },
    nextImage() {
			if(this.$route.params.id < this.photos.length) {
        const nextPageId = Number(this.$route.params.id) +1;
        this.$router.push(`/photo/${nextPageId}`);
			}
		},
		goHome() {
      router.push('/');
    },
  }
};
</script>

<style lang="scss">
	.lightbox {
			background-color: rgba(0, 0, 0, 0.85);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 50px 100px 700px calc(100vh - 850px);
			justify-items: center;
			align-items: center;
	}
	.lightbox-info {
			grid-row-start: 2;
			font-size: 28px;
	}
	.lightbox-image {
			height: 700px;
			width: 700px;
			grid-row-start: 3;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center top;
	}
	.button {
			cursor: pointer;
			margin: 5px 8px 0;
			vertical-align: bottom;

			&--close {
				position: absolute;
				top: 10px;
				right: 10px;
			}
	}
	@media only screen and (max-width: 800px) {
		.lightbox {
			grid-template-rows: 50px 100px 300px calc(100vh - 450px);
		}
		.lightbox-image {
			height: 300px;
      width: 300px;
		}
	}
</style>