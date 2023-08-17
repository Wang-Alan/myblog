export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"title\":\"首页\",\"heroText\":false,\"projects\":[{\"icon\":\"book\",\"name\":\"关于\",\"desc\":\"个人信息、联系方式等\",\"link\":\"/about/\"},{\"icon\":\"book\",\"name\":\"文章\",\"desc\":\"发表的论文等\",\"link\":\"https://www.yuque.com/alan-wang/wx1qte/yvr8dq3riyfr89kf\"},{\"icon\":\"book\",\"name\":\"项目\",\"desc\":\"主持或参与的项目等\",\"link\":\"/about/\"},{\"icon\":\"book\",\"name\":\"编辑\",\"desc\":\"创建新博文、修改页面内容等\",\"link\":\"https://github.com/Wang-Alan/myblog/tree/master/src/posts\"}],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":82},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

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
