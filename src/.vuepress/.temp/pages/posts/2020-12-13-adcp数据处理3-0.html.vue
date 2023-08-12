<template><div><h2 id="adcp处理代码的2-0版本-存在以下问题" tabindex="-1"><a class="header-anchor" href="#adcp处理代码的2-0版本-存在以下问题" aria-hidden="true">#</a> ADCP处理代码的2.0版本，存在以下问题：</h2>
<ol>
<li>编写时未考虑为MIKE11的一维水动力模型服务</li>
<li>仅考虑了一条河的情形，未考虑多条河的情况</li>
<li>受R语言和课题组已有代码的影响，数据输入输出主要以文本文件为主，其实EXCEL会是更好的选择</li>
<li>数据导入部分的算法过于复杂，从软件导出的数据也相对繁琐，这些都是可以简化的。</li>
</ol>
<h2 id="充分利用python模块" tabindex="-1"><a class="header-anchor" href="#充分利用python模块" aria-hidden="true">#</a> 充分利用python模块</h2>
<p>主要编写以下模块：</p>
<ul>
<li>类定义模块<br>
仍然以section类为主，记录除了导入的原始结果外，增加计算结果。<br>
通过继承方法，扩展类对象。</li>
<li>输入输出模块<br>
将dataframe作为存储数据的主要表，不要用numpy array，numpy array应该在具体计算时使用<br>
输入可以时多源的，输出excel和特定软件需求为主。</li>
<li>功能模块<br>
要考虑可扩展性</li>
</ul>
</div></template>


