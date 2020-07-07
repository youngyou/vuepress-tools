(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{691:function(t,s,a){"use strict";a.r(s);var e=a(50),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{align:"center"}},[a("p",[t._v("An Ant Design style theme for VuePress.")])]),t._v(" "),a("blockquote",[a("p",[t._v("demo 地址："),a("a",{attrs:{href:"https://whu-luojian.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://whu-luojian.github.io"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("1:1 还原 Ant Design 官网风格，搭载 Ant Design of Vue 组件, 支持在 Markdown 文件中直接使用 Ant Design 组件.")]),t._v(" "),a("li",[t._v("统一预处理器，使用 Ant Design 设计规范的 Less 样式")])]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick start")]),t._v(" "),a("h3",{attrs:{id:"install-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-theme"}},[t._v("#")]),t._v(" Install theme")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-theme-antdesign\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-theme-antdesign\n")])])]),a("h3",{attrs:{id:"use-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-theme"}},[t._v("#")]),t._v(" Use theme")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 文件中指定主题:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antdesign'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其他配置跟 vuepress 默认保持一致，参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/using-a-theme.html#theme-shorthand",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using a theme"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theme Config"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#styling",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theme Style"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"palette"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#palette"}},[t._v("#")]),t._v(" palette")]),t._v(" "),a("p",[a("strong",[t._v("注意样式覆盖需采用 less 语法")]),t._v("\n如果要对默认预设的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 .vuepress/styles/palette.less 文件。\n你可以调整的一些变量如下:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 颜色")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@accentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #1890ff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@textColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.85"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@borderColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #eaecef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@codeBgColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f5f5f5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 布局")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@navbarHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 64px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@homePageWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 960px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应变化点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@MQNarrow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 992px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@MQMobile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 767px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@MQMobileNarrow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 575px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"preview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preview"}},[t._v("#")]),t._v(" preview")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/烟罗/vuepress-theme-antdesign/master/docs/blog-home.png",width:"600"}})]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/烟罗/vuepress-theme-antdesign/master/docs/blog-example.png",width:"600"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);