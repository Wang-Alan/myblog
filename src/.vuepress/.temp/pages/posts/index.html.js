export const data = JSON.parse("{\"key\":\"v-e1e3da16\",\"path\":\"/posts/\",\"title\":\"全部博文\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"全部博文\",\"sidebar\":false,\"toc\":false,\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://wang-alan.github.io/myblog/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Alan 的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"全部博文\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Alan Wang\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"全部博文\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
