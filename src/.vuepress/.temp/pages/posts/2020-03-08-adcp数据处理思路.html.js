export const data = JSON.parse("{\"key\":\"v-1d05690d\",\"path\":\"/posts/2020-03-08-adcp%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E6%80%9D%E8%B7%AF.html\",\"title\":\"ADCP数据处理思路\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ADCP数据处理思路\",\"author\":\"whl\",\"slug\":\"adcp数据处理思路\",\"comments\":\"no\",\"images\":null,\"category\":[\"个人\"],\"tag\":[\"Python\"],\"description\":\"数据概况 ADCP会对选定河段的若干断面进行测量，每个断面是一个测次，每个测次由若干数据组组成，每个数据组都有唯一数据组序号（Ensemble Number），每个数据组对于任一变量含若干不等的数据，代表该变量不同深度的值。 我们常用的变量包括： 水深 River Depth [m] 平均流速 Mean River Velocity (Ref: BT) [m/s] 速度 东向速度 East Velocity (Ref: BT) [m/s] 北向速度 North Velocity (Ref: BT) [m/s] 垂向速度 East Up Velocity (Ref: BT) [m/s] 位置 东向偏移量 East Displacement (Ref: BT) [m] 北向偏移量 North Displacement (Ref: BT) [m]\"},\"headers\":[{\"level\":2,\"title\":\"数据概况\",\"slug\":\"数据概况\",\"link\":\"#数据概况\",\"children\":[]},{\"level\":2,\"title\":\"处理流程\",\"slug\":\"处理流程\",\"link\":\"#处理流程\",\"children\":[{\"level\":3,\"title\":\"数据格式\",\"slug\":\"数据格式\",\"link\":\"#数据格式\",\"children\":[]}]},{\"level\":2,\"title\":\"面向对象编程\",\"slug\":\"面向对象编程\",\"link\":\"#面向对象编程\",\"children\":[{\"level\":3,\"title\":\"Pandas包的DataFrame\",\"slug\":\"pandas包的dataframe\",\"link\":\"#pandas包的dataframe\",\"children\":[]}]},{\"level\":2,\"title\":\"代码文件及对应功能\",\"slug\":\"代码文件及对应功能\",\"link\":\"#代码文件及对应功能\",\"children\":[]}],\"readingTime\":{\"minutes\":2.78,\"words\":835},\"filePathRelative\":\"posts/2020-03-08-adcp数据处理思路.md\",\"excerpt\":\"<h2> 数据概况</h2>\\n<p>ADCP会对选定河段的若干断面进行测量，每个断面是一个<strong>测次</strong>，每个测次由若干数据组组成，每个数据组都有唯一<strong>数据组序号（Ensemble Number）</strong>，每个数据组对于任一变量含若干不等的数据，代表该变量<strong>不同深度</strong>的值。</p>\\n<p>我们常用的变量包括：</p>\\n<ul>\\n<li>\\n<p>水深 River Depth [m]</p>\\n</li>\\n<li>\\n<p>平均流速 Mean River Velocity (Ref: BT) [m/s]</p>\\n</li>\\n<li>\\n<p>速度</p>\\n<ul>\\n<li>东向速度 East Velocity (Ref: BT) [m/s]</li>\\n<li>北向速度 North Velocity (Ref: BT) [m/s]</li>\\n<li>垂向速度 East Up Velocity (Ref: BT) [m/s]</li>\\n</ul>\\n</li>\\n<li>\\n<p>位置</p>\\n<ul>\\n<li>东向偏移量 East Displacement  (Ref: BT) [m]</li>\\n<li>北向偏移量 North Displacement  (Ref: BT) [m]</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")

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
