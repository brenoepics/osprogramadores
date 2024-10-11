import {defineConfigWithTheme} from 'vitepress'
import type {ThemeConfig} from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'
import {sidebar} from "./generatedSidebar";
import {nav} from "./generatedNav";
import {TelegramIcon} from "./theme/components/icons/TelegramIcon";

// https://vitepress.dev/reference/site-config
const baseUrl = '/osprogramadores/'
export default defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,
    title: "OsProgramadores",
    description: "Tudo que você sempre quis saber sobre Programação de Computadores e nunca teve coragem de perguntar.",
    srcDir: 'src',
    base: baseUrl,
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    sitemap: {
        hostname: 'https://brenoepics.github.io' + baseUrl,
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },
    head: [
        ['link', {rel: 'icon', href: baseUrl + 'img/favicon.ico'}],
        ['meta', {name: 'theme-color', content: '#0089D3'}],
        ['meta', {property: 'og:url', content: 'https://github.com/brenoepics/osprogramadores'}],
        ['meta', {property: 'og:type', content: 'Repository'}],
        ['meta', {property: 'og:title', content: 'Os Progragadores'}],
        [
            'meta',
            {
                property: 'og:description',
                content: 'Os Programadores - Tudo que você sempre quis saber sobre Programação de Computadores e nunca teve coragem de perguntar.'
            }
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav,
        lastUpdated: {
            text: 'Publicado em',
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'medium'
            }
        },
        logo: '/img/logo.png',
        search: {
            provider: 'local'
        },

        sidebar: sidebar,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon'},
            {icon: {svg: TelegramIcon}, link: 'https://t.me/osprogramadores'}
        ]
    }
})
