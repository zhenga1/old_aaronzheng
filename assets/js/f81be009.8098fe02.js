"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[6450],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=o(t),h=s,k=c["".concat(l,".").concat(h)]||c[h]||N[h]||r;return t?n.createElement(k,m(m({ref:e},i),{},{components:t})):n.createElement(k,m({ref:e},i))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6049:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const r={},m="Joining Two Tablees",p={unversionedId:"CS61A/lec/cs_lec_22",id:"CS61A/lec/cs_lec_22",title:"Joining Two Tablees",description:"Two tables $A$ and $B$ are joined by a comma to yield all combos of a row from A and a row from B.",source:"@site/docs/CS61A/lec/cs_lec_22.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_22",permalink:"/docs/CS61A/lec/cs_lec_22",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_22.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Management Systems",permalink:"/docs/CS61A/lec/cs_lec_21"},next:{title:"Create Table",permalink:"/docs/CS61A/lec/cs_lec_23"}},l={},o=[],i={toc:o};function c(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"joining-two-tablees"},"Joining Two Tablees"),(0,s.kt)("p",null,"Two tables ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"A")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"B")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))," are joined by a comma to yield all combos of a row from A and a row from B."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE dogs AS\n    SELECT "abraham" AS name, "long" AS fur UNION\n    \n')),(0,s.kt)("p",null,"Example: Grandparents"),(0,s.kt)("h1",{id:"string-expressions"},"String Expressions"),(0,s.kt)("p",null,"String values can be combined to form longer strings"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'sqlite> SELECT "hello," || "world";\nhello, world\n')),(0,s.kt)("p",null,"Basic Sring Manipulation is built into SQL, but differs from Python"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},'sqlite> CREATE TABLE phrase AS SELECT "hello, world" AS s;\nsqlite> SELECT substr(s, 4, 2) || substr(s, instr(s, " ")+1, 1) FROM phrase;\nlow\n')),(0,s.kt)("p",null,"Strings can be used to represent structured values, but doign so is rarely a good idea"),(0,s.kt)("h1",{id:"cartesian-product-of-two-tables"},"Cartesian Product of Two Tables"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"We pair up every ",(0,s.kt)("strong",{parentName:"li"},"row")," within a table to every ",(0,s.kt)("strong",{parentName:"li"},"row"),"  within the other table, such that each table's row is matched 1-to-1 with each other table's row."),(0,s.kt)("li",{parentName:"ul"},"Essentially, if we have the first table with ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," rows, and another table with ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," rows, then our final ",(0,s.kt)("strong",{parentName:"li"},"cartesian product table")," would have ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a\\times b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," rows.")))}c.isMDXComponent=!0}}]);