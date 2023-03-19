"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[8764],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),u=r,h=c["".concat(l,".").concat(u)]||c[u]||N[u]||s;return t?n.createElement(h,m(m({ref:a},o),{},{components:t})):n.createElement(h,m({ref:a},o))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7889:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const s={},m=void 0,p={unversionedId:"CS61A/PRACTICE FINAL/INTERPRETER",id:"CS61A/PRACTICE FINAL/INTERPRETER",title:"INTERPRETER",description:"Notes:",source:"@site/docs/CS61A/PRACTICE FINAL/INTERPRETER.md",sourceDirName:"CS61A/PRACTICE FINAL",slug:"/CS61A/PRACTICE FINAL/INTERPRETER",permalink:"/aaronzheng/docs/CS61A/PRACTICE FINAL/INTERPRETER",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/PRACTICE FINAL/INTERPRETER.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/aaronzheng/docs/CS61A/Home"},next:{title:"TAIL RECURSION",permalink:"/aaronzheng/docs/CS61A/PRACTICE FINAL/TAIL RECURSION"}},l={},i=[{value:"Example: While statements",id:"example-while-statements",level:2}],o={toc:i};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apparently ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," has the following syntax:\n",(0,r.kt)("inlineCode",{parentName:"li"},"(let (#definitionexprs) (returned expr))"),"\nLets say we want to define ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"5")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x = 5")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"))))),", ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"6")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y = 6")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"6")))))," in a local frame, and then return their sum. We can do:\n",(0,r.kt)("inlineCode",{parentName:"li"},"(let ((x 5) (y 6)) (+ x y))"))),(0,r.kt)("h2",{id:"example-while-statements"},"Example: While statements"),(0,r.kt)("p",null,"Sum of squares of even numbers less than 10, beginning with 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(begin (define (f x total) \n  (if (< x 10)\n  (f (+ x 2) (+ x total)) \n  total)\n)\n(f 2 0)\n)\n")),(0,r.kt)("p",null,"Sum of squares of numbers whose square is less than 50, beginning with 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(begin \n(define (f x total)\n  (if (< (* x x) 50) \n  (f (+ x 1) (+ total (* x x)))\n  total\n  )\n)\n (f 2 0)\n)\n")),(0,r.kt)("p",null,"NEW TASK: WE WANNA CREATE A FUNCTION THAT RETURNS AN EXPRESSION THAT DOES THE ABOVE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (sum-while initial-x condition add-to-total update-x)\n  `(begin (define (f x total)\n  (if ,condition (f ,update-x (+ total ,add-to-total))\n  total\n  )\n)\n")),(0,r.kt)("p",null,"![","[chrome_5ulud6mK3O.png]","]"))}c.isMDXComponent=!0}}]);