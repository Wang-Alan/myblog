export const data = JSON.parse("{\"key\":\"v-c6b843d8\",\"path\":\"/posts/2020-12-13-adcp%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%863-0.html\",\"title\":\"ADCP数据处理3.0\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ADCP数据处理3.0\",\"author\":\"whl\",\"slug\":\"adcp数据处理3-0\",\"comments\":\"no\",\"images\":null,\"category\":[\"个人\"],\"tag\":[\"Python\"],\"description\":\"ADCP处理代码的2.0版本，存在以下问题： 编写时未考虑为MIKE11的一维水动力模型服务 仅考虑了一条河的情形，未考虑多条河的情况 受R语言和课题组已有代码的影响，数据输入输出主要以文本文件为主，其实EXCEL会是更好的选择 数据导入部分的算法过于复杂，从软件导出的数据也相对繁琐，这些都是可以简化的。 充分利用python模块 主要编写以下模块： 类定义模块 仍然以section类为主，记录除了导入的原始结果外，增加计算结果。 通过继承方法，扩展类对象。 输入输出模块 将dataframe作为存储数据的主要表，不要用numpy array，numpy array应该在具体计算时使用 输入可以时多源的，输出excel和特定软件需求为主。 功能模块 要考虑可扩展性\"},\"headers\":[{\"level\":2,\"title\":\"ADCP处理代码的2.0版本，存在以下问题：\",\"slug\":\"adcp处理代码的2-0版本-存在以下问题\",\"link\":\"#adcp处理代码的2-0版本-存在以下问题\",\"children\":[]},{\"level\":2,\"title\":\"充分利用python模块\",\"slug\":\"充分利用python模块\",\"link\":\"#充分利用python模块\",\"children\":[]}],\"readingTime\":{\"minutes\":0.94,\"words\":282},\"filePathRelative\":\"posts/2020-12-13-adcp数据处理3-0.md\",\"excerpt\":\"<h2> ADCP处理代码的2.0版本，存在以下问题：</h2>\\n<ol>\\n<li>编写时未考虑为MIKE11的一维水动力模型服务</li>\\n<li>仅考虑了一条河的情形，未考虑多条河的情况</li>\\n<li>受R语言和课题组已有代码的影响，数据输入输出主要以文本文件为主，其实EXCEL会是更好的选择</li>\\n<li>数据导入部分的算法过于复杂，从软件导出的数据也相对繁琐，这些都是可以简化的。</li>\\n</ol>\\n<h2> 充分利用python模块</h2>\\n<p>主要编写以下模块：</p>\\n<ul>\\n<li>类定义模块<br>\\n仍然以section类为主，记录除了导入的原始结果外，增加计算结果。<br>\\n通过继承方法，扩展类对象。</li>\\n<li>输入输出模块<br>\\n将dataframe作为存储数据的主要表，不要用numpy array，numpy array应该在具体计算时使用<br>\\n输入可以时多源的，输出excel和特定软件需求为主。</li>\\n<li>功能模块<br>\\n要考虑可扩展性</li>\\n</ul>\",\"autoDesc\":true}")

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
