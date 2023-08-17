<template><div><h2 id="建站步骤" tabindex="-1"><a class="header-anchor" href="#建站步骤" aria-hidden="true">#</a> 建站步骤</h2>
<p>参考官方文档：<a href="https://theme-hope.vuejs.press/zh/guide/get-started/intro.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/get-started/intro.html<ExternalLinkIcon/></a></p>
<h2 id="部署的原理" tabindex="-1"><a class="header-anchor" href="#部署的原理" aria-hidden="true">#</a> 部署的原理</h2>
<p>在一个 Github 仓库创建两个分支，其中一个放源码，姑且称之为 <code v-pre>源码分支</code>，另一个放编译得到的 <code v-pre>html</code> 文件，称之为 <code v-pre>部署分支</code>。</p>
<p>设置 Github 工作流，当 <code v-pre>源码分支</code> 发生变动时，自动编译，将编译得到的 <code v-pre>html</code> 文件放到 <code v-pre>部署分支</code>。</p>
<p>在 Github Page 的编译和部署（Build and deployment），将来源选项（Source）设置为 <code v-pre>Deploy from a branch</code>；将分支选项（Branch）设置为 <code v-pre>部署分支</code>。</p>
<p>这样，只需要在 <code v-pre>源码分支</code> 创建内容，Github 会自动编译、部署到 <code v-pre>部署分支</code>，最终通过 Github Page 服务以网页的形式呈现。</p>
</div></template>


