<script setup lang="ts">
import { defineProps } from 'vue';
import { DefaultTheme, useData } from 'vitepress';
import { VPFeatures } from 'vitepress-carbon/components';

interface Feature {
  icon?: DefaultTheme.FeatureIcon;
  title: string;
  details: string;
  link?: string;
  linkText?: string;
  rel?: string;
  target?: string;
}

const props = defineProps<{
  blogPath: string;
  title: string;
  limit: number;
}>();

const { theme } = useData();
const posts = theme.value.sidebar[props.blogPath][0].items.slice(0, props.limit);
const features: Feature[] = posts.map((post: any) => {
  return {
    title: post.text,
    link: post.link,
    linkText: 'Ler Mais',
    rel: 'noopener',
  };
});
</script>

<template>
  <div class="centered-title">{{ title }}</div>
  <VPFeatures v-if="features.length > 0" :features="features" />
</template>

<style scoped>
.centered-title {
  text-align: center;
  font-size: 1.5em;
  padding-top: 1em;
  margin-bottom: 1em;
}
</style>
