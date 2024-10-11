import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    "text": "Blog",
    "link": "/blog/"
  },
  {
    "text": "Desafios",
    "link": "/desafios/"
  },
  {
    "text": "Úteis",
    "items": [
      {
        "text": "Perguntas Frequentes (FAQ)",
        "link": "/faq"
      },
      {
        "text": "Regras da nossa comunidade",
        "link": "/regras"
      },
      {
        "text": "Instruções",
        "link": "/instrucoes"
      }
    ]
  },
  {
    "text": "Links",
    "link": "/links/"
  },
  {
    "text": "Podcast",
    "link": "/podcast/"
  }
];
