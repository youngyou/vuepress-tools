(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{534:function(e,t,s){"use strict";s.r(t);var v=s(50),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-reco-vuepress-plugin-comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-reco-vuepress-plugin-comments"}},[e._v("#")]),e._v(" @vuepress-reco/vuepress-plugin-comments")]),e._v(" "),s("h2",{attrs:{id:"introduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[e._v("#")]),e._v(" Introduce")]),e._v(" "),s("p",[e._v("Comments plugin for vuepress-theme-reco or other vuepress theme.")]),e._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("As plugin")]),e._v(": "),s("code",[e._v("@vuepress-reco/vuepress-plugin-comments")])]),e._v(" "),s("li",[s("strong",[e._v("As component")]),e._v(": "),s("code",[e._v("Comments (评论)")]),e._v(" / "),s("code",[e._v("AccessNumber (使用 Valine 时的访问量)")]),e._v("（主题开发时使用）")])]),e._v(" "),s("h2",{attrs:{id:"option-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[e._v("#")]),e._v(" Option API")]),e._v(" "),s("p",[e._v("组件会在 "),s("code",[e._v("$themeConfig")]),e._v(" 注入一个参数 "),s("code",[e._v("commentsSolution")]),e._v("，如果使用 "),s("code",[e._v("Valine")]),e._v("，其值为 "),s("code",[e._v("valine")]),e._v("，如果使用 "),s("code",[e._v("Vssue")]),e._v("，其值为 "),s("code",[e._v("vssue")]),e._v("，可以使用这个参数来主题中做差异化处理，比如是否显示阅读数量。")]),e._v(" "),s("h3",{attrs:{id:"valine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[e._v("#")]),e._v(" Valine")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    valineConfig: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }  \n}\n")])])]),s("p",[e._v("或者：")]),e._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  theme: 'reco',\n  plugins: [['@vuepress-reco/comments', {\n    solution: 'valine',\n    options: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }]] \n}\n")])])]),s("h3",{attrs:{id:"vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vssue"}},[e._v("#")]),e._v(" Vssue")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    vssueConfig: {\n      platform: 'github',\n      owner: 'OWNER_OF_REPO',\n      repo: 'NAME_OF_REPO',\n      clientId: 'YOUR_CLIENT_ID',\n      clientSecret: 'YOUR_CLIENT_SECRET',\n    }\n  }  \n}\n")])])]),s("p",[e._v("或者：")]),e._v(" "),s("div",{staticClass:"language-javscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  theme: 'reco',\n  plugins: [['@vuepress-reco/comments', {\n    solution: 'vuess',\n    options: {\n      platform: 'github',\n      owner: 'OWNER_OF_REPO',\n      repo: 'NAME_OF_REPO',\n      clientId: 'YOUR_CLIENT_ID',\n      clientSecret: 'YOUR_CLIENT_SECRET',\n    }\n  }]] \n}\n")])])]),s("p",[s("strong",[s("code",[e._v("options")]),e._v(" 详解：")])]),e._v(" "),s("ul",[s("li",[e._v("platform: 支持的代码托管平台")]),e._v(" "),s("li",[e._v("owner: 对应 "),s("code",[e._v("repository")]),e._v(" 的拥有者帐号或者团队")]),e._v(" "),s("li",[e._v("repo: 用来存储评论的 repository")]),e._v(" "),s("li",[e._v("clientId: "),s("code",[e._v("OAuth App")]),e._v(" 的 "),s("code",[e._v("client id")])]),e._v(" "),s("li",[e._v("clientSecret: "),s("code",[e._v("OAuth App")]),e._v(" 的 "),s("code",[e._v("client secret")]),e._v("（只有在使用某些平台时需要）")])]),e._v(" "),s("p",[s("strong",[s("code",[e._v("platform")]),e._v(" 详解（点击查看"),s("a",{attrs:{href:"https://vssue.js.org/zh/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("支持的代码托管平台"),s("OutboundLink")],1),e._v("）：")])]),e._v(" "),s("ul",[s("li",[e._v("github: "),s("code",[e._v("@vssue/api-github-v3")])]),e._v(" "),s("li",[e._v("github-v4: "),s("code",[e._v("@vssue/api-github-v4")])]),e._v(" "),s("li",[e._v("gitlab: "),s("code",[e._v("@vssue/api-gitlab-v4")])]),e._v(" "),s("li",[e._v("bitbucket: "),s("code",[e._v("@vssue/api-bitbucket-v2")])]),e._v(" "),s("li",[e._v("gitee: "),s("code",[e._v("@vssue/api-gitee-v5")])]),e._v(" "),s("li")]),e._v(" "),s("h3",{attrs:{id:"accessnumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessnumber"}},[e._v("#")]),e._v(" AccessNumber")]),e._v(" "),s("blockquote",[s("p",[e._v("仅在 使用 "),s("code",[e._v("Valine")]),e._v(" 时才有效。")])]),e._v(" "),s("h4",{attrs:{id:"idval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idval"}},[e._v("#")]),e._v(" idVal")]),e._v(" "),s("ul",[s("li",[e._v("description: valine 记录浏览数的 id 值")]),e._v(" "),s("li",[e._v("type: "),s("code",[e._v("String")])])]),e._v(" "),s("h4",{attrs:{id:"numstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numstyle"}},[e._v("#")]),e._v(" numStyle")]),e._v(" "),s("ul",[s("li",[e._v("description: 浏览量的数字样式（用于调整不同位置的显示风格）")]),e._v(" "),s("li",[e._v("type: "),s("code",[e._v("Object")])])]),e._v(" "),s("h4",{attrs:{id:"flagtitle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flagtitle"}},[e._v("#")]),e._v(" flagTitle")]),e._v(" "),s("ul",[s("li",[e._v("description: 文章标题")]),e._v(" "),s("li",[e._v("type: "),s("code",[e._v("String")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);