(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{928:function(e,t,n){"use strict";n.r(t);var a=n(50),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress-theme-track"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-track"}},[e._v("#")]),e._v(" vuepress-theme-track")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.ui.cn/detail/120714.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("true-track"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Yubisaki/vuepress-theme-yubisaki",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-yubisaki"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/TommyShao/vuepress-theme-track/dev/screenshot/home.jpg",alt:"HOME"}}),e._v(" "),n("img",{attrs:{src:"https://raw.githubusercontent.com/TommyShao/vuepress-theme-track/dev/screenshot/post.jpg",alt:"POST"}})]),e._v(" "),n("p",[n("a",{attrs:{href:"https://raw.githubusercontent.com/TommyShao/vuepress-theme-track/dev/screenshot/home.jpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("more screenshot"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://kuaizi-co.github.io/blog/track.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Demo"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" USAGE")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ yarn add vuepress-theme-track\n# or\n$ npm install vuepress-theme-track --save-dev\n")])])]),n("h3",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("In your "),n("code",[e._v("docs/.vuepress/config.js")]),e._v(" file, It's to add this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  title: '前端周刊',\n  description: '每周分享前端知识',\n  base: '/blog/',\n  head: [\n    ['link', { rel: 'icon', href: 'favicon.ico' }]\n  ],\n  // use vuepress-theme-track\n  theme: 'track',\n  // local development\n  port: 3000,\n  // Google Analytics ID\n  ga: '',\n  // fuck IE\n  evergreen: true,\n  markdown: {\n    // markdown-it-anchor 的选项\n    anchor: { permalink: true },\n    // markdown-it-toc 的选项\n    toc: { includeLevel: [1, 2] },\n    config: md => {\n      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件\n        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)\n    }\n  },\n  themeConfig: {\n    footer: 'MIT Licensed | Copyright © 2018-present tommyshao',\n    // github card\n    // github account name\n    github: 'tomieric',\n    // logo\n    logo: '/images/logo.png',\n    // homepage logo\n    logoInverse: '/images/logo-white.png',\n    // It's show font color to post title\n    accentColor: '#ac3e40',\n    // pageSize\n    per_page: 5,\n    // date format\n    date_format: 'yyyy-MM-dd',\n    // Tag\n    tags: true,\n    // gitalk\n    // https://github.com/Yubisaki/vuepress-theme-yubisaki#comment-system\n    comment: {\n      clientID: '',\n      clientSecret: '',\n      repo: 'https://github.com/tomieric/vuepress-theme-track.git',\n      owner: 'tomieric',\n      admin: ['tomieric'],\n      perPage: 5,\n      // id: 'comment',      // Ensure uniqueness and length less than 50\n      distractionFreeMode: false  // Facebook-like distraction free mode\n    },\n    // navLinks\n    nav: [\n        { text: '首页', link: '/'}, // home\n        { text: '周刊', link: '/weekly/'}, // blog\n        { text: '分类', link: '/category/' }, // category\n        { text: '标签', link: '/tag/' }, // tag\n        { text: '关于我们', link: '/about' },\n        { text: 'Track', link: '/track' }\n    ],\n    // page list home url\n    pageRoot: '/weekly/',\n    sidebar: 'auto',\n    // show author in post article, Default: false\n    // Team blog, show everyone in memenbers\n    showAuthor: true\n  }\n}\n")])])]),n("h3",{attrs:{id:"scripts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),n("p",[e._v("In your "),n("code",[e._v("package.json")]),e._v(" file")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# package.json\n{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs",\n    "docs:deploy": "gh-pages -d ./vuepress/dist"\n  }\n}\n')])])]),n("h3",{attrs:{id:"commandline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commandline"}},[e._v("#")]),e._v(" CommandLine")]),e._v(" "),n("p",[e._v("we're support to the "),n("code",[e._v("vp-track")]),e._v(" command,It's usually use to create a new post")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ npx vp-track --help\n# -p post\n# -d destination\n$ npx vp-track -p test -d docs/weekly\n> ✔ Create test succeeded!\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);