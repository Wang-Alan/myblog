export const categoryMap = {"category":{"/":{"path":"/category/","map":{}},"/en/":{"path":"/en/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{}},"/en/":{"path":"/en/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


