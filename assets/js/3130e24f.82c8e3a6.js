"use strict";(self.webpackChunkaaron=self.webpackChunkaaron||[]).push([[8405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||h[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,i={unversionedId:"ANTLR4/Notes 1",id:"ANTLR4/Notes 1",title:"Notes 1",description:"It is useful to take a moment to reflect on this: the lexer works on the characters of the input, a copy of the input to be precise, while the parser works on the tokens generated by the lexer.\xa0The lexer does not work on the input directly, and the parser does not even see the characters.",source:"@site/docs/ANTLR4/Notes 1.md",sourceDirName:"ANTLR4",slug:"/ANTLR4/Notes 1",permalink:"/aaron/docs/ANTLR4/Notes 1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ANTLR4/Notes 1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/aaron/docs/tutorial-extras/translate-your-site"},next:{title:"Welcome to your VS Code Extension",permalink:"/aaron/docs/ANTLR4/VSCODE Extension readme"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is useful to take a moment to reflect on this: the lexer works on the characters of the input, a copy of the input to be precise, while the parser works on the tokens generated by the lexer.\xa0",(0,o.kt)("strong",{parentName:"p"},"The lexer does not work on the input directly, and the parser does not even see the characters"),"."),(0,o.kt)("p",null,"This is important to remember in case you need to do something advanced like manipulating the input. In this case the input is a string, but, of course, it could be any stream of content."),(0,o.kt)("p",null,"The line 22 is redundant, since the option already defaults to true, but it shows that you can enable or disable it."),(0,o.kt)("p",null,"Then, on line 23, we set the root node of the tree as a\xa0",(0,o.kt)("strong",{parentName:"p"},"chat"),"\xa0rule. You want to invoke the parser specifying a rule, which typically is the first rule. However, you can actually invoke any rule directly, like\xa0",(0,o.kt)("strong",{parentName:"p"},"color"),"."),(0,o.kt)("p",null,"Once we get the parse tree from the parser, typically we want to process it using a listener or a visitor. In this case we specify a listener. Our particular listener takes a parameter: the response object. We want to use it to put some text in the response to send to the user. After setting the listener up, we finally walk the tree with our listener."))}p.isMDXComponent=!0}}]);