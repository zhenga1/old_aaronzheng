"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[9106],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},i="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,c=p(a,["components","mdxType","originalType","parentName"]),i=o(t),k=s,h=i["".concat(l,".").concat(k)]||i[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},c),{},{components:t})):n.createElement(h,r({ref:e},c))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[i]="string"==typeof a?a:s,r[1]=p;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7335:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>i,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const m={},r=void 0,p={unversionedId:"CS61A/lec/cs_lec_12",id:"CS61A/lec/cs_lec_12",title:"cs_lec_12",description:"- Lecture notes: link",source:"@site/docs/CS61A/lec/cs_lec_12.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_12",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_12",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_12.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_11",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_11"},next:{title:"cs_lec_13",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_13"}},l={},o=[],c={toc:o};function i(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"#r/lecture"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lecture notes: link")),(0,s.kt)("h1",{id:"lecture-107"},"Lecture: 10/7"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},'print("Hello world i am cool")\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Mutable values ")),(0,s.kt)("p",null,"![","[WhatsApp Image 2022-10-07 at 1.18.23 PM.jpeg]","]"),(0,s.kt)("p",null,"![","[pythonw_5kBuKRGa2t.png]","]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Object-oriented programming"),"\n",(0,s.kt)("strong",{parentName:"p"},"A method for organizing programs")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Data abstraction"),(0,s.kt)("li",{parentName:"ul"},"Bundling together information and related behaviour\n",(0,s.kt)("strong",{parentName:"li"},"A metaphor for computation using distributed state")),(0,s.kt)("li",{parentName:"ul"},"Each object has its own local state"),(0,s.kt)("li",{parentName:"ul"},"Each object also knows how to manage its own local state, based on method calls"),(0,s.kt)("li",{parentName:"ul"},"Method calls (can be thought of) as messages passed between objects"),(0,s.kt)("li",{parentName:"ul"},"Several objects may all be instances of a common type"),(0,s.kt)("li",{parentName:"ul"},"Different types may relate to each other.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Specialised syntax and vocabulary to support this metaphor"),"\n![","[WhatsApp Image 2022-10-07 at 1.25.30 PM.jpeg]","]"),(0,s.kt)("h1",{id:"classes"},"Classes"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"class")," describes the general behaviour of its instances\n",(0,s.kt)("strong",{parentName:"p"},"Idea:")," All bank accounts have a ",(0,s.kt)("em",{parentName:"p"},"balance")," and an account ",(0,s.kt)("em",{parentName:"p"},"holder"),"; the ",(0,s.kt)("em",{parentName:"p"},"Account")," class should add those attributes to each newly created instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},">>>a = Account('John')\n>>>a.holder\n'John'\n>>>a.balance\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Idea:")," All bank accounts should have ",(0,s.kt)("strong",{parentName:"p"},"withdraw")," and ",(0,s.kt)("strong",{parentName:"p"},"deposit")," behaviours that all work in the same way."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},">>>a.deposit(15)\n15\n>>>a.withdraw(10)\n5\n>>>a.balance\n5\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Better Idea"),": All bank accounts share a ",(0,s.kt)("strong",{parentName:"p"},"withdraw")," method and a ",(0,s.kt)("strong",{parentName:"p"},"deposit")," method"),(0,s.kt)("h1",{id:"the-class-statement"},"The class Statement"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class name:\n    suite\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"class statement")," creates a new class and binds that class to name in the first frame of the current environment"),(0,s.kt)("p",null,"Assignment and def statements in suite creates attributes of the class (not names in frames)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Object Construction"),"\n",(0,s.kt)("strong",{parentName:"p"},"Idea:")," All bank accounts have a ",(0,s.kt)("strong",{parentName:"p"},"balance")," and an account ",(0,s.kt)("strong",{parentName:"p"},"holder"),"; The ",(0,s.kt)("strong",{parentName:"p"},"Account")," class should add those attributes to each of its instances."),(0,s.kt)("p",null,"![","[WhatsApp Image 2022-10-07 at 1.32.40 PM.jpeg]","]"),(0,s.kt)("p",null,"Q: Is init kinda setting up defaults?\nA: Not rlly, its kinda like ",(0,s.kt)("em",{parentName:"p"},"setting up the object")," to ",(0,s.kt)("em",{parentName:"p"},"prepare it to be used"),". "),(0,s.kt)("p",null,"Can't write ",(0,s.kt)("strong",{parentName:"p"},"def constructor"),", must write ",(0,s.kt)("strong",{parentName:"p"},"def ",(0,s.kt)("em",{parentName:"strong"},"init"))),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"init"))," function is always called whenever the constructor is called."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Object Identity"),"\nEvery object that is an instance of a user-defined class has a unique identity:\n![","[chrome_HX8HwQpibp.png]","]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Methods"),"\nMethods are functions defined in the suite of a class statement\n![","[chrome_hlpwVyZaMp.png]","]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Invoking Methods"),"\nAll invoked methods have access to the objet via the self parameter, and so they can all access and manipulate the object's state"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dot Expressions"),"\nObjects receive messages via dot notation"),(0,s.kt)("p",null,"Dot notation accesses attributes of the instance or its class ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},">")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"<expression>,<name>")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7335400000000001em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")))))),(0,s.kt)("p",null,"The ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},">")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"<expression>")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")))))," can be any valid Python Expression\nThe ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},">")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"<name>")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")))))," must be a simple name"),(0,s.kt)("p",null,"![","[chrome_bqWGMOpvCG.png]","]\nAbove expression evaluates to the value of the attribute looked up by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},">")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"<name>")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")))))," in the object that is the value of the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},">")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"<expression>")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">")))))),(0,s.kt)("p",null,"![","[WhatsApp Image 2022-10-07 at 1.52.10 PM.jpeg]","]"),(0,s.kt)("p",null,"Can also assign methods to instance.\nAssume we have that ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," is an Account object"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"Account.deposit(a, amount) #would work\na.deposit(amount) #would also work\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Accessing Attributes"),"\nUsing getattr, we can look up an attribute "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Methods and Functions"),"\nPython distinguishes between:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Functions, which we have been creating since the beginning of the ccourse, and"),(0,s.kt)("li",{parentName:"ul"},"Bound methods, which couple together a function and the object on which that method will be invoked",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Object + Function = Bound Method")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Looking Up Attributes by Name"),"\nexpression, name"),(0,s.kt)("p",null,"To evaluate a dot expression:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Evlaluate the expression to the left of the dot, which yields the object of the dot expression"),(0,s.kt)("li",{parentName:"ol"},"name ..."),(0,s.kt)("li",{parentName:"ol"},"...")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Class Attributes")))}i.isMDXComponent=!0}}]);