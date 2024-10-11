<script setup>
import { computed } from 'vue';

const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
});

const youtubeUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`);
</script>

<template>
  <div class="youtube-embed">
    <iframe
        title="YouTube Embed"
        :src="youtubeUrl"
        width="100%"
        height="315px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.youtube-embed {
  width: 80%;
  margin: 0 auto;
}
.youtube-embed iframe {
  border: none;
  background: transparent;
}
</style>
