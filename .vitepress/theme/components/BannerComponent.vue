<script setup lang="ts">
import {useData, withBase} from 'vitepress';

const {frontmatter} = useData();
</script>

<template>
  <div v-if="frontmatter.banner">
    <img :src="withBase(frontmatter.banner)" alt="Banner"/>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
