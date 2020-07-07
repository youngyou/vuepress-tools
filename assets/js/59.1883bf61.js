(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{535:function(t,s,e){"use strict";e.r(s);var a=e(50),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-plugin-disqusjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-disqusjs"}},[t._v("#")]),t._v(" Vuepress Plugin Disqusjs")]),t._v(" "),e("p",[t._v("🔌 Register a global "),e("code",[t._v("<DisqusJS />")]),t._v(" component to add to your layouts.")]),t._v(" "),e("p",[t._v("This plugins is a vuepress wrapper of "),e("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("DisqusJS"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-disqusjs -D\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-disqusjs\n")])])]),e("h2",{attrs:{id:"register-the-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-the-plugin"}},[t._v("#")]),t._v(" Register the plugin")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disqusjs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),e("p",[t._v("Please check out "),e("a",{attrs:{href:"#config"}},[t._v("Config")]),t._v(" for options.")]),t._v(" "),e("p",[t._v("Note that Vuepress allows multiple syntaxes to register plugins. See "),e("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress documentation on how to use a plugin"),e("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),e("h2",{attrs:{id:"use-the-disqusjs-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-the-disqusjs-component"}},[t._v("#")]),t._v(" Use the Disqusjs component")]),t._v(" "),e("p",[t._v("This plugin present a out-of-box SSR-friendly component  - "),e("code",[t._v("<Disqusjs/>")]),t._v(". Just put it wherever you like, and Disqus will be embedded in the right place. For example:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...... --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DisqusJS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Or you can simply put it in your "),e("code",[t._v(".md")]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Hello VuePress")]),t._v("\n\nThis is a demo.\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Disqus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("You can use all the props and events defined by "),e("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("DisqusJS"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),t._v(" "),e("th",[t._v("Data Type")]),t._v(" "),e("th",[t._v("required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("shortname")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Your disqus shortname.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("url")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Your URL where Disqus is present")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("title")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Title that identifies the current page.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("identifier")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("The page's unique identifier")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sso_config")])]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Single sign-on (SSO)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("api_key")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Your API key disqus")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("remote_auth_s3")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("implementation with Laravel/PHP")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("language")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Language overrides")])])])]),t._v(" "),e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),e("p",[t._v("See the table above. All the props are also configuration options for this plugin. They'll be passed to every "),e("code",[t._v("Disqusjs")]),t._v(" component. You're still able to override it by passing down props. Note that if you don't set language, it'll use VuePress's $lang as default language.")]),t._v(" "),e("p",[t._v("There's still one option available - "),e("code",[t._v("name")]),t._v(" which specifies the name of the disqus component. Defaults to: "),e("code",[t._v("DisqusJS")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);