(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{491:function(e,t,a){"use strict";a.r(t);var o=a(50),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{attrs:{align:"center"}},[a("h1",[e._v("API Docs Generator for VuePress")]),e._v(" "),a("p",[e._v("Language-agnostic API docs generator for VuePress.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://eryn.io/Cmdr/api/Registry.html"}},[e._v("Demo")]),e._v(" | "),a("a",{attrs:{href:"https://raw.githubusercontent.com/evaera/Cmdr/master/docs/api/Registry.md"}},[e._v("Source")])])]),e._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),a("p",[e._v("I wanted a way to generate web API documentation for my projects from pure data. Some languages like Rust and TypeScript have really good integration for automatically generating documentation right from the code. This tool is for the languages who aren't so lucky (read: Lua)! This could also be used to generate documentation for projects which are implemented in multiple languages.")]),e._v(" "),a("p",[e._v("This tool is fairly rudimentary and takes some shortcuts in order to generate reasonable documentation without needing to parse actual language grammar.")]),e._v(" "),a("p",[e._v("For example, when denoting a function, you must structure it as an object in your data with entries for "),a("code",[e._v("name")]),e._v(", "),a("code",[e._v("params")]),e._v(", "),a("code",[e._v("returns")]),e._v(", etc. Using a function signature like you would do in a proper type system is not supported, because a) this varies wildly between languages and b) it's more complicated to parse.")]),e._v(" "),a("p",[e._v("The good news is that once all of that data is structured correctly, this plugin can automatically generate short function signatures with hyperlinked types for you so your readers will have a pleasant experience.")]),e._v(" "),a("h3",{attrs:{id:"why-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-vuepress"}},[e._v("#")]),e._v(" Why VuePress?")]),e._v(" "),a("p",[e._v("It's very simple to use and works with very minimal configuration in your project. This makes it easy to add to lots of projects without hassle.")]),e._v(" "),a("h2",{attrs:{id:"features-and-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features-and-design"}},[e._v("#")]),e._v(" Features and design")]),e._v(" "),a("ul",[a("li",[e._v("One documentation page per module / object / class.")]),e._v(" "),a("li",[e._v("Pages are made up three primary sections, Types, Properties, and Methods.")]),e._v(" "),a("li",[e._v("Types in the Type section support both interface style and free-form.")]),e._v(" "),a("li",[e._v("Free-form types have supports for parsing generic syntax into hyperlinks (e.g. in "),a("code",[e._v("List<Foo>")]),e._v(", if you have both "),a("code",[e._v("List")]),e._v(" and "),a("code",[e._v("Foo")]),e._v(" defined as types, they will be hyperlinked.)")]),e._v(" "),a("li",[e._v('Tags on fields and types for things like "read only" or "deprecated".')]),e._v(" "),a("li",[e._v('Ability to set default tags with mutual exclusions, e.g. all properties have "read only" tag by default unless they have an explicit "writable" tag')])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ol",[a("li",[e._v("Install plugin through npm: "),a("code",[e._v("npm i -D vuepress-plugin-api-docs-generator")])]),e._v(" "),a("li",[e._v("Add to your "),a("code",[e._v("config.js")]),e._v(" inside your "),a("code",[e._v(".vuepress")]),e._v(" folder:")])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'api-docs-generator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* options */")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("3. Put your full API in the "),a("code",[e._v("api")]),e._v(" option in the plugin options, and/or create individual markdown pages with "),a("code",[e._v("docs")]),e._v(" front matter set to the data structure detailed below, and in include an "),a("code",[e._v("<ApiDocs />")]),e._v(" tag in the body.")]),e._v(" "),a("p",[e._v("To link to an API from a non-API page, you can use "),a("code",[e._v('<ApiLink to="Page.Field" />')]),e._v(" or "),a("code",[e._v('<ApiLink to="Page.Field" />')]),e._v(". This tag does "),a("em",[e._v("not")]),e._v(" work in descriptions from your API data. For linking from API pages to API pages, please see Descriptions below.")]),e._v(" "),a("h2",{attrs:{id:"data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-format"}},[e._v("#")]),e._v(" Data format")]),e._v(" "),a("h3",{attrs:{id:"freeformtypestring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freeformtypestring"}},[e._v("#")]),e._v(" FreeFormTypeString")]),e._v(" "),a("p",[e._v("A string that is indicative of a type. These are automatically hyperlinked to applicable types from around your docs.")]),e._v(" "),a("p",[e._v("Generics are in the form "),a("code",[e._v("foo<bar<baz, qux>>")]),e._v(". Improper balancing of angle brackets will cause parsing to fail and it will just spit out exactly what you put in.")]),e._v(" "),a("p",[e._v("Union and intersection types may be separated by "),a("code",[e._v("|")]),e._v(" and "),a("code",[e._v("&")]),e._v(", respectively.")]),e._v(" "),a("p",[e._v("End a free-form type with a "),a("code",[e._v("?")]),e._v(" to indicate optionality, this is detected for parameter the required field.")]),e._v(" "),a("h3",{attrs:{id:"freeformtypeobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freeformtypeobject"}},[e._v("#")]),e._v(" FreeFormTypeObject")]),e._v(" "),a("p",[e._v("Objects which can become other kinds of types. This object has the keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("desc")]),e._v(": String, only displayed when within an Interface object.")]),e._v(" "),a("li",[a("code",[e._v("kind")]),e._v(": String, with the possible values:\n"),a("ul",[a("li",[a("code",[e._v("function")]),e._v(" "),a("ul",[a("li",[e._v("self becomes Function")])])]),e._v(" "),a("li",[a("code",[e._v("interface")]),e._v(", "),a("code",[e._v("enum")]),e._v(" "),a("ul",[a("li",[e._v("self becomes Interface")])])]),e._v(" "),a("li",[a("code",[e._v("literal")]),e._v(" "),a("ul",[a("li",[e._v("self becomes LiteralInterface")])])]),e._v(" "),a("li",[a("code",[e._v("intersection")]),e._v(", "),a("code",[e._v("union")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("types")]),e._v(" sibling: array of FreeFormTypes.")]),e._v(" "),a("li",[a("code",[e._v("parens")]),e._v(" sibling: if true, will be wrapped in parenthesis (for precedence)")])])]),e._v(" "),a("li",[a("code",[e._v("property")]),e._v(", "),a("code",[e._v("type")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type")]),e._v(" sibling: FreeFormType")])])])])]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(": FreeFormType if "),a("code",[e._v("kind")]),e._v(" is not present.")])]),e._v(" "),a("h3",{attrs:{id:"freeformtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freeformtype"}},[e._v("#")]),e._v(" FreeFormType")]),e._v(" "),a("p",[e._v("Either a FreeFormTypeString or a FreeFormTypeObject.")]),e._v(" "),a("h3",{attrs:{id:"interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[e._v("#")]),e._v(" Interface")]),e._v(" "),a("p",[e._v("An Interface is an object which contains a dictionary mapping string keys to FreeFormTypes. You may also set the value to "),a("code",[e._v("null")]),e._v(" in the case of an enum.")]),e._v(" "),a("p",[e._v("It has the keys:")]),e._v(" "),a("p",[a("code",[e._v("type")]),e._v(": Dictionary")]),e._v(" "),a("h3",{attrs:{id:"literalinterface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#literalinterface"}},[e._v("#")]),e._v(" LiteralInterface")]),e._v(" "),a("p",[e._v("An Interface except string keys in the "),a("code",[e._v("type")]),e._v(" dictionary are mapped to LiteralInterface objects instead of FreeFormTypes.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Description fields are strings parsed as Markdown. You can even include code blocks in these.")]),e._v(" "),a("p",[e._v("To link to types, use the format "),a("code",[e._v("[[Page.Field]]")]),e._v(" or simply just "),a("code",[e._v("[[Page]]")]),e._v(" to refer to a page/object.")]),e._v(" "),a("h3",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" Function")]),e._v(" "),a("p",[e._v("Object with possible keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": Function name (omit for callback types)")]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(": Array of Parameter objects")]),e._v(" "),a("li",[a("code",[e._v("returns")]),e._v(": ReturnValue")])]),e._v(" "),a("h3",{attrs:{id:"parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter"}},[e._v("#")]),e._v(" Parameter")]),e._v(" "),a("p",[e._v("Object with the possible keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": The name of the parameter")]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(": FreeFormType")]),e._v(" "),a("li",[a("code",[e._v("optional")]),e._v(": Boolean. This is implied true if "),a("code",[e._v("type")]),e._v(" is a string and ends with a "),a("code",[e._v("?")])]),e._v(" "),a("li",[a("code",[e._v("desc")]),e._v(": Description")])]),e._v(" "),a("p",[e._v("Shorthand: Instead of an object, set to a string in the format "),a("code",[e._v('"firstName: firstType, secondName: secondType"')])]),e._v(" "),a("h3",{attrs:{id:"returnvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returnvalue"}},[e._v("#")]),e._v(" ReturnValue")]),e._v(" "),a("p",[e._v("ReturnValue can be a FreeFormTypeString or an array of SingleReturnValue objects.")]),e._v(" "),a("h3",{attrs:{id:"singlereturnvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#singlereturnvalue"}},[e._v("#")]),e._v(" SingleReturnValue")]),e._v(" "),a("p",[e._v("An object with the following keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type")]),e._v(": FreeFormType")]),e._v(" "),a("li",[a("code",[e._v("desc")]),e._v(": Description")])]),e._v(" "),a("h3",{attrs:{id:"tagdefault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagdefault"}},[e._v("#")]),e._v(" TagDefault")]),e._v(" "),a("p",[e._v("TagDefault is a string or an object with the keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": The name of the tag (required)")]),e._v(" "),a("li",[a("code",[e._v("unless")]),e._v(": String or array of strings which are tag names. If one of these tags is explicitly on a member, the named tag won't be added as a default to that member.")])]),e._v(" "),a("h3",{attrs:{id:"documentname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentname"}},[e._v("#")]),e._v(" DocumentName")]),e._v(" "),a("p",[e._v("A string which matches the "),a("code",[e._v("name")]),e._v(" field of a Document (or the page's title that the Document occurs on if "),a("code",[e._v("name")]),e._v(" is omitted from that Document)")]),e._v(" "),a("h3",{attrs:{id:"docentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docentry"}},[e._v("#")]),e._v(" DocEntry")]),e._v(" "),a("p",[e._v("Object with possible keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": String")]),e._v(" "),a("li",[a("code",[e._v("tags")]),e._v(": Array of strings")]),e._v(" "),a("li",[a("code",[e._v("desc")]),e._v(": Description")]),e._v(" "),a("li",[a("code",[e._v("deprecated")]),e._v(": True, or an object with keys:\n"),a("ul",[a("li",[a("code",[e._v("since")]),e._v(": String, Version this member became deprecated")]),e._v(" "),a("li",[a("code",[e._v("use")]),e._v(": Reference to what to use instead ("),a("code",[e._v("DocumentName.Field")]),e._v(")")])])]),e._v(" "),a("li",[a("code",[e._v("since")]),e._v(": String, version that this member was added")]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(": FreeFormType")])]),e._v(" "),a("h3",{attrs:{id:"docentryfunction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docentryfunction"}},[e._v("#")]),e._v(" DocEntryFunction")]),e._v(" "),a("p",[e._v("An object which all fields from DocEntry and Function plus the following optional fields:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("static")]),e._v(": Boolean. If true, the "),a("code",[e._v("staticMethodCallOperator")]),e._v(" will be used instead of the "),a("code",[e._v("methodCallOperator")]),e._v(" in the signature. This field is implied true if there is a tag named "),a("code",[e._v("static")]),e._v(" on this function.")]),e._v(" "),a("li",[a("code",[e._v("overloads")]),e._v(": Array of Function objects")])]),e._v(" "),a("h3",{attrs:{id:"document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[e._v("#")]),e._v(" Document")]),e._v(" "),a("p",[e._v("A document is a single page of documentation, modelling a class or module.")]),e._v(" "),a("p",[e._v("All keys are optional unless otherwise noted:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": String, defaults to page title (required if this structure is being loaded from an API data file, optional if this structure is embedded in front matter)")]),e._v(" "),a("li",[a("code",[e._v("extends")]),e._v(": DocumentName")]),e._v(" "),a("li",[a("code",[e._v("desc")]),e._v(": Description")]),e._v(" "),a("li",[a("code",[e._v("defaults")]),e._v(": Object\n"),a("ul",[a("li",[a("code",[e._v("tags")]),e._v(": Array of TagDefault objects")]),e._v(" "),a("li",[a("code",[e._v("returns")]),e._v(":")]),e._v(" "),a("li",[a("code",[e._v("property_tags")]),e._v(": Array of TagDefault objects")]),e._v(" "),a("li",[a("code",[e._v("type_tags")]),e._v(": Array of TagDefault objects")]),e._v(" "),a("li",[a("code",[e._v("function_tags")]),e._v(": Array of TagDefault objects")])])]),e._v(" "),a("li",[a("code",[e._v("tags")]),e._v(": Array of strings which are tag names that apply to this Document")]),e._v(" "),a("li",[a("code",[e._v("types")]),e._v(": Array of DocEntry objects")]),e._v(" "),a("li",[a("code",[e._v("properties")]),e._v(": Array of DocEntry objects")]),e._v(" "),a("li",[a("code",[e._v("functions")]),e._v(": Array of DocEntryFunction objects")])]),e._v(" "),a("h3",{attrs:{id:"extending-page-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-page-objects"}},[e._v("#")]),e._v(" Extending page/objects")]),e._v(" "),a("p",[e._v("It's possible to denote inheritance between objects with the "),a("code",[e._v("extends")]),e._v(" property in the structure. It should be set to the "),a("code",[e._v("name")]),e._v(" of the object it extends.")]),e._v(" "),a("p",[e._v("On the docs, inherited members will link to the object that they're from.")]),e._v(" "),a("p",[e._v("In terms of the parent and child data structures, "),a("code",[e._v("defaults")]),e._v(" is merged together by keys and "),a("code",[e._v("types")]),e._v(", "),a("code",[e._v("functions")]),e._v(", and "),a("code",[e._v("properties")]),e._v(" are concatenated. No other fields are inherited from the parent structure.")]),e._v(" "),a("h2",{attrs:{id:"plugin-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[e._v("#")]),e._v(" Plugin options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("defaults")]),e._v(": Site-wide defaults, see "),a("code",[e._v("defaults")]),e._v(" field in the data structure above.")]),e._v(" "),a("li",[a("code",[e._v("types")]),e._v(": Array of external type objects with the possible keys:\n"),a("ul",[a("li",[a("code",[e._v("summary")]),e._v(": Tooltip text when hovering over this type")]),e._v(" "),a("li",[a("code",[e._v("link")]),e._v(": External hyperlink to docs for this type")])])]),e._v(" "),a("li",[a("code",[e._v("tagColors")]),e._v(": Object with keys of your tag names and values of the hex color you want them to be.")]),e._v(" "),a("li",[a("code",[e._v("emptyType")]),e._v(": The default type if none is specified. Defaults to "),a("code",[e._v("any")])]),e._v(" "),a("li",[a("code",[e._v("methodCallOperator")]),e._v(": String, default "),a("code",[e._v(".")])]),e._v(" "),a("li",[a("code",[e._v("staticMethodCallOperator")]),e._v(": string, default "),a("code",[e._v(".")])]),e._v(" "),a("li",[a("code",[e._v("api")]),e._v(": Optional array of doc pages (objects with the structure of the data structure detailed in the previous section). These pages will be automatically created in your website at "),a("code",[e._v("/api/<item name slug>.html")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"color-pallette"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-pallette"}},[e._v("#")]),e._v(" Color pallette")]),e._v(" "),a("p",[e._v("Available Stylus pallette options (and defaults):")]),e._v(" "),a("div",{staticClass:"language-styl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-styl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$apiDocsAccentFunction")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[e._v("#10ac84")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$apiDocsAccentType")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[e._v("#0abde3")])]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);