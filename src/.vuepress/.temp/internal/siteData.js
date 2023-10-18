export const siteData = JSON.parse("{\"base\":\"/myblog/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"av.png\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Alan 的博客\",\"description\":\"Alan 的博客\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Alan's Blog\",\"description\":\"Alan's Blog\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
