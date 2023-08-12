import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "博文",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
