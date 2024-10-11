<script setup>
import {computed} from 'vue';

const props = defineProps({
  episode: {
    type: String,
    required: true
  }
});

const spotifyUrl = computed(() => `https://open.spotify.com/embed/episode/${props.episode}`);

</script>

<template>
  <div class="spotify-embed">
    <iframe
        title="Spotify Embed"
        :src="spotifyUrl"
        width="100%"
        height="232px"
        allow="encrypted-media"
    ></iframe>
  </div>
</template>

<style scoped>
.spotify-embed {
  width: 80%;
  margin: 0 auto;
}
.spotify-embed iframe {
  border: none;
  border-radius: 25px;
  background: transparent;
}
</style>
