<template><div><h1 id="前端发展" tabindex="-1"><a class="header-anchor" href="#前端发展" aria-hidden="true">#</a> 前端发展</h1>
<p>2009年之前，前端开发处于原始时代（IE8出现开发者模式）<br>
2009年，node.js的出现标志前端进入现代化，同时确立前端工程师的岗位<br>
2009年之后，出现许多打包工具、包管理工具等.</p>
<p>-大漠穷秋</p>
<p>node.js的出现在前端发展史上是具有里程碑意义的，基于node.js发展出的前端框架，例如Angular、Vue等，给前端工程师通过web技术快速开发应用提供了可能，同时，一定程度上促进了web应用的发展，降低了应用开发的门槛。</p>
<h1 id="vue开发" tabindex="-1"><a class="header-anchor" href="#vue开发" aria-hidden="true">#</a> Vue开发</h1>
<p>Vue框架的作者是尤雨溪，借鉴了MVVM的设计模式，是国内目前非常活的框架。</p>
<h2 id="vue的核心概念" tabindex="-1"><a class="header-anchor" href="#vue的核心概念" aria-hidden="true">#</a> vue的核心概念</h2>
<p>Vue的核心概念是组件，组件可以分为根组件和其他组件，其他组件与根组件一起组成组件树，构成整个应用，根组件与其他组件没什么不同，配置选项是一样的，所对应的组件实例行为也是一样的。</p>
<p>根组件实例要挂载在应用实例上，作为渲染的起点。</p>
<p>组件实例包括模板和js代码，模板主要是由html，js表达式，“Mustache”语法组成，代码主要包括组件实例的propery和生命周期钩子。</p>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<p>vue的模板语法主要是插值和指令</p>
<p>插值具体包括文本、原始html、attribute和js表达式</p>
<p>指令包括参数和修饰符，常用指令有相应的缩写</p>
<h2 id="组件通讯" tabindex="-1"><a class="header-anchor" href="#组件通讯" aria-hidden="true">#</a> 组件通讯</h2>
<p>组件间通讯，包括数据和事件。</p>
<p>数据一般只能从父组件传向子组件，若父子组件间“级数”较少，则采用prop的方法传递，相当于为子组件创建property；若父子组件间“级数”较多，则可以采用provide/inject的方法传递。</p>
<p>事件常为父组件监听子组件的事件，通过$emit方法实现。子组件需要触发父组件的事件，子组件内部没有相应的事件函数，“搜索范围”内找不到对应的事件，使用$emit，告知vue需要扩大搜索范围，就能找到相应的事件函数。另外，$emit方法可以抛出子组件的值给父组件。</p>
<h2 id="单页面应用" tabindex="-1"><a class="header-anchor" href="#单页面应用" aria-hidden="true">#</a> 单页面应用</h2>
<p>组件本身，就足矣形成界面，但是若干界面如何组合在一起，需要引入路由和状态管理，vue官方也提供了相应的工具，同时，vue-cli也可以生成相应得模板，其中代码通过单文件组件组织在一起。</p>
<p>个人认为，vue特别厉害的一个思想是<strong>关注点分离并不意味着代码分离</strong>。将同一组件的html、css、js代码放在一个文件里，非常方便。</p>
<h2 id="函数计算和数据库" tabindex="-1"><a class="header-anchor" href="#函数计算和数据库" aria-hidden="true">#</a> 函数计算和数据库</h2>
<p>大部分程序都是多层架构的程序，至少包括数据层、业务逻辑层和表示层，vue编写的仅是程序的表示层，可能会有一些简单的小计算，因此需要引入函数计算和数据库。</p>
<p>云技术是未来的趋势，阿里的函数计算和云数据库为完整app的开发提供了非常多的便利。以http作为触发器的函数计算，加上云存储，几乎可以实现所有应用。</p>
</div></template>


