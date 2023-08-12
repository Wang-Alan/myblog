<template><div><h2 id="数据概况" tabindex="-1"><a class="header-anchor" href="#数据概况" aria-hidden="true">#</a> 数据概况</h2>
<p>ADCP会对选定河段的若干断面进行测量，每个断面是一个<strong>测次</strong>，每个测次由若干数据组组成，每个数据组都有唯一<strong>数据组序号（Ensemble Number）</strong>，每个数据组对于任一变量含若干不等的数据，代表该变量<strong>不同深度</strong>的值。</p>
<p>我们常用的变量包括：</p>
<ul>
<li>
<p>水深 River Depth [m]</p>
</li>
<li>
<p>平均流速 Mean River Velocity (Ref: BT) [m/s]</p>
</li>
<li>
<p>速度</p>
<ul>
<li>东向速度 East Velocity (Ref: BT) [m/s]</li>
<li>北向速度 North Velocity (Ref: BT) [m/s]</li>
<li>垂向速度 East Up Velocity (Ref: BT) [m/s]</li>
</ul>
</li>
<li>
<p>位置</p>
<ul>
<li>东向偏移量 East Displacement  (Ref: BT) [m]</li>
<li>北向偏移量 North Displacement  (Ref: BT) [m]</li>
</ul>
</li>
</ul>
<h2 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h2>
<ol>
<li>用 WinRiverII 软件导出数据，每个测次每个变量会导出一个 txt 文件</li>
<li>把 txt 文件导入 python</li>
<li>处理数据并得出结果</li>
</ol>
<p>包括：</p>
<ul>
<li>根据水深数据画出河流断面图</li>
<li>根据位置数据与 GPS 记录将 ADCP 的航迹转化为经纬度格式和直角坐标格式</li>
<li>根据三维速度矢量加和，得到河流三维各个点的流速</li>
<li>根据河段轮廓生成网格</li>
<li>根据网格和其它数据（深度或平均流速），反向距离插值</li>
<li>生成 techplot 云图输入文件</li>
</ul>
<h3 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h3>
<ol>
<li>数据是多维度的。若干断面，每个断面有若干数据组集合，每个数据组集合有若干变量，每个变量是一组不等长的数组，这些数组与数据组集合的编号对应。</li>
<li>每个数据组集都有唯一的编号，每个变量都有唯一的名称。</li>
</ol>
<h2 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程</h2>
<blockquote>
<p>比较理想的存储模式是创建结构体数组，每个结构体代表一个断面，每个断面里存储不同的数据，但是因为 python 不支持结构体，所以用面向对象的方法，组织数据。</p>
<p>直接用 numpy 包的多维数组创建的数据结构太乱了，影响程序的可读性。</p>
<p>pandas 可以结合 DataFrame 整理数据，但是创建对象的方法更好！</p>
</blockquote>
<p>类：断面</p>
<p>属性：数据组集编号、水深、平均流速、东向流速、北向流速、垂向流速、东向偏移量、北向偏移量</p>
<h4 id="原生数据类型" tabindex="-1"><a class="header-anchor" href="#原生数据类型" aria-hidden="true">#</a> 原生数据类型</h4>
<p>数据组集编号（元组）、水深（字典）、平均流速（字典）、东向流速（字典）、北向流速（字典）、垂向流速（字典）、东向偏移量（字典）、北向偏移量（字典）</p>
<h3 id="pandas包的dataframe" tabindex="-1"><a class="header-anchor" href="#pandas包的dataframe" aria-hidden="true">#</a> Pandas包的DataFrame</h3>
<p>由于原生数据类型的字典不好计算，因此用pandas包里的 DataFrame 代替字典等</p>
<h2 id="代码文件及对应功能" tabindex="-1"><a class="header-anchor" href="#代码文件及对应功能" aria-hidden="true">#</a> 代码文件及对应功能</h2>
<ul>
<li>
<p>反距离插值</p>
<p>一般是画热图前会用到，输入文件包括</p>
<ul>
<li>位置（x，y）和变量</li>
<li>网格文件</li>
</ul>
<p>输出是每个网格坐标对应变量值</p>
</li>
<li>
<p>经纬度与距离转化</p>
<p>输入文件和输出文件分别是经纬度和坐标，两列</p>
</li>
<li>
<p>网格生成或转化</p>
<p>这个用成熟的软件直接生成会简单很多，不用写</p>
</li>
<li>
<p>导入数据</p>
</li>
<li>
<p>位置转换</p>
</li>
<li>
<p>techplot 输入文件生成</p>
<p>记住 techplot 的格式要求有点累，不如直接写一个模板，方便</p>
</li>
</ul>
</div></template>


