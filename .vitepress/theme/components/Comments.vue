<script setup lang="ts">
import {useData} from 'vitepress'

const {title} = useData()
</script>

<template>
  <div :key="title" class="giscus">
    <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="brenoepics/osprogramadores"
        data-repo-id="R_kgDOM-r4wA"
        data-category="General"
        data-category-id="DIC_kwDOM-r4wM4CjRYm"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark"
        data-lang="pt"
        data-loading="lazy"
        crossorigin="anonymous"
        async
    />
  </div>
</template>
