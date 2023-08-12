<template><div><blockquote>
<p>说明：</p>
<ol>
<li>git 只能追踪文本文件的修改，如代码、md文件等，不能追踪二进制文件修改，如word</li>
<li>以下仅是我会用到的一些常见命令，更多信息可以参考<a href="https://www.liaoxuefeng.com/wiki/896043488029600" target="_blank" rel="noopener noreferrer">廖雪峰 git 教程<ExternalLinkIcon/></a>和<a href="https://www.bootcss.com/p/git-guide/" target="_blank" rel="noopener noreferrer"> git 使用简易指南<ExternalLinkIcon/></a></li>
</ol>
</blockquote>
<h2 id="创建版本库" tabindex="-1"><a class="header-anchor" href="#创建版本库" aria-hidden="true">#</a> 创建版本库</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="把一个文件放进-git-仓库" tabindex="-1"><a class="header-anchor" href="#把一个文件放进-git-仓库" aria-hidden="true">#</a> 把一个文件放进 git 仓库</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>文件名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> file1.txt
<span class="token function">git</span> <span class="token function">add</span> file2.txt file3.txt
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>message<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"add file"</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"modify files"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-工作流" tabindex="-1"><a class="header-anchor" href="#git-工作流" aria-hidden="true">#</a> git 工作流</h2>
<figure><img src="https://www.bootcss.com/p/git-guide/img/trees.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="查看仓库当前状态" tabindex="-1"><a class="header-anchor" href="#查看仓库当前状态" aria-hidden="true">#</a> 查看仓库当前状态</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看具体修改内容" tabindex="-1"><a class="header-anchor" href="#查看具体修改内容" aria-hidden="true">#</a> 查看具体修改内容</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>文件名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看历史记录" tabindex="-1"><a class="header-anchor" href="#查看历史记录" aria-hidden="true">#</a> 查看历史记录</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log 

<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="退回到历史版本" tabindex="-1"><a class="header-anchor" href="#退回到历史版本" aria-hidden="true">#</a> 退回到历史版本</h2>
<p>前一版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前二版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前100版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="退回后反悔" tabindex="-1"><a class="header-anchor" href="#退回后反悔" aria-hidden="true">#</a> 退回后反悔</h2>
<p>查看commit id</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退回</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 1094a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关联远程库" tabindex="-1"><a class="header-anchor" href="#关联远程库" aria-hidden="true">#</a> 关联远程库</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>服务器地址<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注：&lt;服务器地址&gt;在 github 仓库页复制即可，仅需要第一次配置时关联</p>
</blockquote>
<h2 id="推送改动" tabindex="-1"><a class="header-anchor" href="#推送改动" aria-hidden="true">#</a> 推送改动</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注：origin 是远程库名称，master是当前分支</p>
</blockquote>
</div></template>


