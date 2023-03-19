"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[873],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>u});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),l=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},i=function(a){var e=l(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,o=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=l(t),k=r,u=c["".concat(o,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(u,s(s({ref:e},i),{},{components:t})):n.createElement(u,s({ref:e},i))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:r,s[1]=p;for(var l=2;l<m;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2721:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const m={},s=void 0,p={unversionedId:"CS61A/lec/cs_lec_6",id:"CS61A/lec/cs_lec_6",title:"cs_lec_6",description:"Limitations on dictionaries",source:"@site/docs/CS61A/lec/cs_lec_6.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_6",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_6",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_5",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_5"},next:{title:"cs_lec_8",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_8"}},o={},l=[],i={toc:l};function c(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Limitations on dictionaries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dictionaries are collections of objects identified by keys. "),(0,r.kt)("li",{parentName:"ul"},"Must be one to one, as in one key must only identify one object. Two keys cannot be equal: Can be at most one value for a given key")),(0,r.kt)("p",null,"The first restriction is tied to Python's underlying implementation of dictionaries\nThe second restriction is tied to the nature of keys.\nDictionary comprehensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"{<key exp>: <value exp> for <name> in <iter expression> if <filter exp>}\nShort version: {<key exp>:<value exp> for <name> in <iter expression> }\n")),(0,r.kt)("p",null,"![","[Zoom_Ao7cbuRKCG.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: Indexing"),"\nP: Implement index, takes a sequence of ",(0,r.kt)("em",{parentName:"p"},"keys"),", a sequence of ",(0,r.kt)("em",{parentName:"p"},"values")," and two argument ",(0,r.kt)("em",{parentName:"p"},"match")," function. It returns dictionary from ",(0,r.kt)("em",{parentName:"p"},"keys")," to lists in which the list for a key k contains all ",(0,r.kt)("em",{parentName:"p"},"values v")," for which ",(0,r.kt)("em",{parentName:"p"},"match(k,v)")," is a true value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},"def index(keys,values,match):\n    >>>index[[7,9,11],range(30,50),lambda k,v:v%k==0)]\n    return {k:[v for v in values if match(k,v)] for k in keys}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Abstraction")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compound values, combine other values together",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A date: a year, a month and a day"),(0,r.kt)("li",{parentName:"ul"},"A geographic position: latitude and longitude"))),(0,r.kt)("li",{parentName:"ul"},"Data abstraction lets us manipulate compound values as units"),(0,r.kt)("li",{parentName:"ul"},"Isolate two parts of program, thinking about how data are represented")),(0,r.kt)("p",null,"![","[Zoom_XodIAcBeoS 1.png]","]\n",(0,r.kt)("strong",{parentName:"p"},"Rational Numbers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exat representation of fractions -> before decimal evaluation"),(0,r.kt)("li",{parentName:"ul"},"A pair of integers (can express any rational) ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"q")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p/q")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q")))))),(0,r.kt)("li",{parentName:"ul"},"As soon as division occurs, exact representation lost"),(0,r.kt)("li",{parentName:"ul"},"Assume we can compose and decompose rational numbers:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor: rational(n,d)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Rational number arithmetic implementation"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},"def mul_rational(x,y):\n    return rational(numer(x)*numer(y),\n    denom(x)*denom(y))\ndef add_rational(x,y):\n    nx,dx = numer(x),denom(x)\n    ny,dy = numer(y),denom(y)\n    return rational(nx*dy+ny*dx,dx*dy)\ndef print_rational(x):\n    print(numer(x),'/',denom(x))\ndef rationals_are_equal(x,y):\n    return numer(x)*denom(y) == numer(y)*denom(x)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Simplest possible definiton of rational and other functions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},"def rational(x,y):\n    return [x,y]\ndef numer(r):\n    return r[0]\ndef denom(r):\n    return r[1]\n")),(0,r.kt)("p",null,"Above code works, however have not yet computed in ",(0,r.kt)("em",{parentName:"p"},"lowest terms")),(0,r.kt)("p",null,"FIX: New definition of ",(0,r.kt)("em",{parentName:"p"},"rational(x,y)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},"from math import gcd\ndef rational(x,y):\n    d = gcd(x,y)\n    return [x//d,y//d]\n>>>tenth = rational(1,10)\n>>>two_fifths = rational(2,5)\n>>>print_rational(add_rational(tenth,two_fifths))\n1/2\n>>>type\nclass('type')\n>>>\n")),(0,r.kt)("p",null,"![","[chrome_fH42C9kviA.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are Data, how to abstract data?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We need to guarantee that constructor and selector functions work together to specify the right behaviour"),(0,r.kt)("li",{parentName:"ul"},"Behaviour condition: If we construct rational number ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," form numerator ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," and denominator ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),", then we must have that ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"numer(x)/denom(x) = n/d")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," "),(0,r.kt)("li",{parentName:"ul"},"Data abstractions use selectors and constructors to define behaviour"),(0,r.kt)("li",{parentName:"ul"},"If the conditions for the behaviour of the abstraction is met, then we have the representation is valid.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"One can recognise data abstraction by its behaviour")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"New way to implement rational:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},"def rational(n,d):\n    def select(name):\n        if name == 'n':\n            return n\n        elif name=='d':\n            return d\n    return select\ndef numer(x):\n    return x('n')\ndef denom(x):\n    return x('d')\n")))}c.isMDXComponent=!0}}]);