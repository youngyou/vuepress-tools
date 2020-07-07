(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{632:function(t,e,r){"use strict";r.r(e);var s=r(50),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vuepress-plugin-redirect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-redirect"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://vuepress.github.io/plugins/redirect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-redirect"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("Migrated to "),r("a",{attrs:{href:"https://github.com/vuepress/vuepress-community",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-community"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-redirect",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-redirect.svg",alt:"npm"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),r("OutboundLink")],1),t._v(" plugin that handles redirection.")]),t._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),r("p",[t._v("VuePress has a built-in "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/en/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("i18n system"),r("OutboundLink")],1),t._v(", but you must provide a default language, otherwise you will only get a 404 if you try to access "),r("code",[t._v("/")]),t._v(" directly. However, providing a default language often means a less friendly project structure (because the files in the default language are one level lower than others), and we sometimes want our website to keep "),r("code",[t._v("/")]),t._v(" for a more intelligent redirection (e.g. determines that the language used by the user based on "),r("code",[t._v("navigator.language")]),t._v(" and automatically redirects to the corresponding page). Vuepress-plugin-redirect is such a plugin that handles automatic redirections. Of course, its capacity is not limited to automatic redirecting of the language, because you can redirect any page to its subpages via a custom redirector.")]),t._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),r("h3",{attrs:{id:"locales"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#locales"}},[t._v("#")]),t._v(" locales")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("boolean")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("false")])])]),t._v(" "),r("p",[t._v("Whether to provide i18n redirection.")]),t._v(" "),r("h3",{attrs:{id:"redirectors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redirectors"}},[t._v("#")]),t._v(" redirectors")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("Redirector[]")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("[]")])])]),t._v(" "),r("p",[t._v("A list of custom redirectors.")]),t._v(" "),r("h3",{attrs:{id:"redirector-base"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redirector-base"}},[t._v("#")]),t._v(" redirector.base")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("'/'")])])]),t._v(" "),r("p",[t._v("Base URL to be redirected.")]),t._v(" "),r("h3",{attrs:{id:"redirector-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redirector-storage"}},[t._v("#")]),t._v(" redirector.storage")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("boolean | string | Storage")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("false")])])]),t._v(" "),r("p",[t._v("Decide how the results of the redirect are stored. If set to "),r("code",[t._v("string")]),t._v(", it corresponds to the key of "),r("code",[t._v("localStorage")]),t._v(". If it is an object, you must include the following two methods:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("get(redirector: Redirector): string")])]),t._v(" "),r("li",[r("code",[t._v("set(value: string, redirector: Redirector): void")])])]),t._v(" "),r("p",[t._v("A simple "),r("code",[t._v("storage")]),t._v(" object is provided below for your reference:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" storage "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" base "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" localStorage "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" localStorage"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redirect:'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" base "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" localStorage "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    localStorage"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redirect:'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"redirector-alternative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redirector-alternative"}},[t._v("#")]),t._v(" redirector.alternative")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("type:")]),t._v(" "),r("code",[t._v("string | string[] | ((rel: string) => string | string[])")])]),t._v(" "),r("li",[r("strong",[t._v("default:")]),t._v(" "),r("code",[t._v("undefined")])])]),t._v(" "),r("p",[t._v("An alternate list of redirects. A requested URL will be devided into two parts, "),r("code",[t._v("base")]),t._v(" and "),r("code",[t._v("rel")]),t._v(", and "),r("code",[t._v("alternative")]),t._v(" will be inserted between them. If it is a function, "),r("code",[t._v("rel")]),t._v(" will be passed as a parameter. All the results obtained will be tried in sequence, and the first existing page will be taken for redirection.")]),t._v(" "),r("h2",{attrs:{id:"contribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[t._v("#")]),t._v(" Contribution")]),t._v(" "),r("p",[t._v("Contribution Welcome!")])])}),[],!1,null,null,null);e.default=a.exports}}]);