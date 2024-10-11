---
# https://brenoepics.github.io/vitepress-carbon/guide/home-component.html
layout: home

hero:
  name: "Os Programadores"
  text: "Aprenda algo novo"
  tagline: "Tudo que você sempre quis saber sobre Programação de Computadores e nunca teve coragem de perguntar."
  icon:
    src: ./img/logo.png
    alt: Logo
  image:
    src: ./img/template-easy-customize.png
    alt: Banner
  actions:
    - theme: brand
      text: FAQ
      link: /faq
    - theme: alt
      text: Blog
      link: /blog/
    - theme: alt
      text: Podcast
      link: /podcast/
---

<HomeLatestPosts blogPath="/blog/" title="Artigos Recentes" limit="12" />
<HomeLatestPosts blogPath="/podcast/" title="Podcasts Recentes" limit="6" />
