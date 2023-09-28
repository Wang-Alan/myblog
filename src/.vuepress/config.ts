import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/myblog/",
  head: [
    [
      "link",
      {rel: "icon", href: "av.png"}
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Alan 的博客",
      description: "Alan 的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "Alan's Blog",
      description: "Alan's Blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
