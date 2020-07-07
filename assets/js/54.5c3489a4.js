(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{530:function(t,s,n){"use strict";n.r(s);var e=n(50),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-define",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-define",alt:"npm"}}),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"vuepress-plugin-define"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-define"}},[t._v("#")]),t._v(" vuepress-plugin-define")]),t._v(" "),n("p",[t._v("Bring your configurations from "),n("code",[t._v(".env")]),t._v(" into VuePress markdown files.")]),t._v(" "),n("h2",{attrs:{id:"how-to-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-usage"}},[t._v("#")]),t._v(" How to Usage?")]),t._v(" "),n("h3",{attrs:{id:"_1-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation"}},[t._v("#")]),t._v(" 1. Installation")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-define\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or with npm")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-define\n")])])]),n("h3",{attrs:{id:"_2-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-setup"}},[t._v("#")]),t._v(" 2. Setup")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html#use-plugins-from-a-dependency",target:"_blank",rel:"noopener noreferrer"}},[t._v("Use plugins from a dependency"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'define'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-write-your-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-write-your-contents"}},[t._v("#")]),t._v(" 3. Write your contents")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('# Example\n\nHome: <const name="HOME" />\n')])])]),n("h3",{attrs:{id:"_4-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-options"}},[t._v("#")]),t._v(" 4. Options")]),t._v(" "),n("p",[t._v("By default, the content in the code block will not be converted. If you want to use "),n("code",[t._v('<const name="YOUR VARIABLE" />')]),t._v(" in the code block, you can set "),n("code",[t._v("forceConvert: Boolean")]),t._v(" to convert it like this:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'define'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        forceConvert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("hr"),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"http://sqrtthree.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqrtthree.com"),n("OutboundLink")],1),t._v("  · \nGitHub "),n("a",{attrs:{href:"https://github.com/sqrthree",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sqrthree"),n("OutboundLink")],1),t._v("  · \nTwitter "),n("a",{attrs:{href:"https://twitter.com/sqrtthree",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sqrtthree"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);