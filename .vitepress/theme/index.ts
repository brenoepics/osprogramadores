import {VPCarbon} from 'vitepress-carbon'
import HomeLatestPosts from "./components/HomeLatestPosts.vue";
import BannerComponent from "./components/BannerComponent.vue";
import SpotifyEmbed from './components/SpotifyEmbed.vue';
import YouTubeEmbed from './components/YouTubeEmbed.vue';
import {Theme} from "vitepress";
import {h} from "vue";
import './override.css'
import Comments from "./components/Comments.vue";
import LinkLayout from "./components/LinkLayout.vue";

export default {
    extends: VPCarbon,
    Layout: () => {
        return h(VPCarbon.Layout!, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'doc-before': () => h(BannerComponent),
            'doc-after': () => h(Comments)
        });
    },
    enhanceApp({app}) {
        app.component("SpotifyEmbed", SpotifyEmbed);
        app.component("YouTubeEmbed", YouTubeEmbed);
        app.component("HomeLatestPosts", HomeLatestPosts);
        app.component("LinkLayout", LinkLayout);
    }
} satisfies Theme
