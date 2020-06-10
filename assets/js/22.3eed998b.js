(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{508:function(t,a,n){"use strict";n.r(a);var s=n(50),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress-autodoc-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-autodoc-plugin"}},[t._v("#")]),t._v(" Vuepress Autodoc Plugin")]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("VuePress plugin for automatic code documentation via "),n("a",{attrs:{href:"https://jsdoc.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDoc"),n("OutboundLink")],1),t._v(" with an API similar to "),n("a",{attrs:{href:"http://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("sphinx.ext.autodoc")]),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("h3",{attrs:{id:"install-in-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-in-project"}},[t._v("#")]),t._v(" Install in Project")]),t._v(" "),n("p",[t._v("To use this library in a Vue project, add the package to your package dependencies via:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev vuepress-plugin-autodoc\n")])])]),n("p",[t._v("Or, with "),n("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),n("OutboundLink")],1),t._v(":")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-autodoc\n")])])]),n("h2",{attrs:{id:"quickstart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" Quickstart")]),t._v(" "),n("h3",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),n("p",[t._v("To use this in documentation for a project, follow the VuePress "),n("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html#use-plugins-from-a-dependency",target:"_blank",rel:"noopener noreferrer"}},[t._v("guidelines"),n("OutboundLink")],1),t._v(". Here is a quick example:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-autodoc'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"referencing-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#referencing-code"}},[t._v("#")]),t._v(" Referencing Code")]),t._v(" "),n("p",[t._v("Once you've configured VuePress to use this plugin, you can automatically generate API documentation for code in your project using:")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" API Section")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Full Documentation")]),t._v("\n\n/autodoc src/index.js\n\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Document Specific Objects")]),t._v("\n\n/autodoc src/index.js myFunction MyClass myConst\n\n")])])]),n("p",[t._v("This will automatically render styled API documentation for code elements with JSDoc-compatible docstrings.")]),t._v(" "),n("p",[t._v("This type of dynamic auto-documentation allows developers to be clear in how their API is structured, providing context alongside their API documentation. For example, let's say we have a file in our project that looks like:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contents of src/index.js")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Generic number class\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n  * Constructor for object.\n  * @param {Number} input - Number to add.\n  * @param {String} name - Name for number.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Return number from class.\n   * @return {Number} The number value.\n   */")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Add another number and return result.\n    * @param {Number} other - Other number to add.\n    * @return {Number} Other number to add.\n    */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("other")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" other"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Function for adding two numbers.\n * @param {Number} x - Left operand.\n * @param {Number} y - Right operand.\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Object with functions and data.\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" utils "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Item in utils array.\n   */")]),t._v("\n   item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Echo value.\n   *\n   * @param {Number} value - Value to echo.\n   */")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We can render pre-formatted code documentaton for specific items using the following markdown syntax:")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[t._v("// contents of docs/README.md\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" API Documentation")]),t._v("\n\nHere is documentation for specific elements from our module:\n\n/autodoc src/index.js add Number utils\n\nAnd here are all of the documented elements:\n\n/autodoc src/index.js\n\n")])])]),n("p",[t._v("To show sidebar links for auto-documented items, place a header tag with the name of the item immediately before the "),n("code",[t._v("/autodoc")]),t._v(" statement:")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Classes")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Number")]),t._v("\n\n/autodoc src/index.js Number\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Functions")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" add")]),t._v("\n\n/autodoc src/index.js add\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" subtract")]),t._v("\n\n/autodoc src/index.js subtract\n\n")])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("p",[t._v("See a demo of the documentation "),n("a",{attrs:{href:"https://bprinty.github.io/vuepress-plugin-autodoc/#example",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);