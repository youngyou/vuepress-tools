(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{747:function(t,a,s){"use strict";s.r(a);var e=s(50),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/litengfu/vuepress-theme-daily-record",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-daily-record"),s("OutboundLink")],1),t._v(" 的原主题是"),s("a",{attrs:{href:"https://github.com/zhhlwd/vuepress-theme-indigo-material",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-indigo-material"),s("OutboundLink")],1),t._v(", 它在静态博客网站中的应用处处可见.在这里首先感谢原作者.")]),t._v(" "),s("p",[t._v("然而我想开发适合自己的个人博客, 所以我基于原作者的源代码重写了它.")]),t._v(" "),s("p",[t._v("正如 VuePress 文档所说:")]),t._v(" "),s("blockquote",[s("p",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\ntitle: 【读书笔记】《JavaScript权威指南》第7章数组\ndate: 2018-11-08 04:10:03\ntags: [读书笔记, 《JavaScript权威指南》]\n---\n")])])]),s("ul",[s("li",[t._v("理论上很好的 SEO")]),t._v(" "),s("li",[t._v("已经发布到 npm, 只需要下载即可, 还提供一套模板文件结构, 下载依赖后立即可以使用, 还提供了相关操作的 shell 文件,双击即可,几分钟就能有自己的博客")]),t._v(" "),s("li",[t._v("......")])]),t._v(" "),s("h3",{attrs:{id:"浏览器兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[t._v("#")]),t._v(" 浏览器兼容性")]),t._v(" "),s("p",[t._v("本主题只在最新版的谷歌浏览器和火狐浏览器测试无误")]),t._v(" "),s("p",[t._v("vuepress 默认有编译一些对老版本浏览器的兼容, 具体控制请看它"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网配置"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- template\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- .babelrc                   // 主题的babel配置, 按需加载element ui所需\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- .gitignore                 // 让git忽略跟踪dist文件夹等等, 不要把docs文件夹加进去\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- deploy.sh                  // 部署到git 远程仓库的shell文件, 要部署时双击即可, 前提是配置的构建目录位置没变\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- init.sh                    // "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("只要执行一次"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("克隆template分支到本地后, 双击它, 一步完成所有操作, 等他完成下载, 开启测试服务器, 打开http://localhost:8080/看到效果\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- package-lock.json\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- package.json\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- 目录说明.md\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- docs                       // 存放所有开发环境的目录\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- index.md               // 首页,不用改\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- .vuepress\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- config.js          // 主题的配置\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- public             // 存放静态文件的目录, 例如img, ico "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- avatar.jpg\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- brand.jpg\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- favicon.ico\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- about                  // 展示在自我介绍页面的内容\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- index.md           // 不能删除, 可以添加内容\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- tags                   // 不能删除, 不能动\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- index.md           // 不能删除, 不能动\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- all                    // 不能删除, 不能动\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- index.md           // 不能删除, 不能动\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- posts                  // 存放所有文章的目录\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);