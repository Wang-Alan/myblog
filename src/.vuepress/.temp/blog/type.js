export const typeMap = {"article":{"/":{"path":"/article/","keys":[]},"/en/":{"path":"/en/article/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]},"/en/":{"path":"/en/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

