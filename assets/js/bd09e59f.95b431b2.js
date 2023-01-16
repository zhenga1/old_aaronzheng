"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[3076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"CS61A/misc/Quasiquotation",id:"CS61A/misc/Quasiquotation",title:"Quasiquotation",description:"Relating to the quote special form.",source:"@site/docs/CS61A/misc/Quasiquotation.md",sourceDirName:"CS61A/misc",slug:"/CS61A/misc/Quasiquotation",permalink:"/docs/CS61A/misc/Quasiquotation",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/misc/Quasiquotation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Problems i struggled w",permalink:"/docs/CS61A/misc/Problems i struggled w"},next:{title:"Representation",permalink:"/docs/CS61A/misc/Representation"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Relating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"quote")," special form."),(0,r.kt)("p",null,"Usually, the ",(0,r.kt)("inlineCode",{parentName:"p"},"quote")," special form tells us to not evaluate whatever is immeidately after the quote. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"quasiquote")," form is slightly different, it allows both ",(0,r.kt)("strong",{parentName:"p"},"quoting and unquoting")," "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"quasiquote")," allows us to construct literal lists in a similar way as a quote, but also lets us specify if any subexpression within the list should be evaluated."),(0,r.kt)("p",null,"Consider that we rewrite the ",(0,r.kt)("inlineCode",{parentName:"p"},"twice")," macro as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define-macro (twice f) \n  '(begin f f))\n")),(0,r.kt)("p",null,"This seems like it would have the same effect, but since the ",(0,r.kt)("inlineCode",{parentName:"p"},"quote")," form prevents any evalaution, the result expression that is being created would actually be ",(0,r.kt)("inlineCode",{parentName:"p"},"(begin f f)"),", which is not what is being wanted."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"quasiquote")," allows us to construct literal lists in a similar way as a quote, but also lets us specify if any expression within the list should be evaluated."),(0,r.kt)("p",null,"At first glance, the quasiquote (which can be invoked with the backtick or the ",(0,r.kt)("strong",{parentName:"p"},"quasiquote")," special form) behaves exactly the same as ' or ",(0,r.kt)("inlineCode",{parentName:"p"},"quote"),". However, using quasiquotes gives you the ability to ",(0,r.kt)("strong",{parentName:"p"},"unquote")," (which can be invoked with a comma ",(0,r.kt)("inlineCode",{parentName:"p"},",")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"unquote")," special form). THis removes an expression from the quoted context, evaluates it and places it back in."),(0,r.kt)("p",null,"By combining quasiquotes and unquoting, we can oten save ourselves a lot of trouble when building macro expressions."),(0,r.kt)("p",null,"Quasiquotes use thie backtick symbol\n![","[Pasted image 20221115164425.png]","]\nWhilst regular quotes are just '' these. "),(0,r.kt)("p",null,"Quasiquotes unquoting is basically the , mark, where we can have:\n![","[chrome_ZZDRl4R4Ew.png]","]"),(0,r.kt)("p",null,"![","[chrome_MbqSzLEw0Q.png]","]"),(0,r.kt)("p",null,"Its like ",(0,r.kt)("strong",{parentName:"p"},"define-macro")," allows an unknown(unevaluated) scheme expression to be passed in as the parameter. Then, the define macro can be used to combine these expressions to form a bigger expression, which is then going to be evaluated.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"define-macro"),"  allows us to define what's known as a ",(0,r.kt)("strong",{parentName:"p"},"macro")," which is just a simpler way for us to ",(0,r.kt)("strong",{parentName:"p"},"combine unknown expressions together into another expression.")," When we call macro, the operands of the expression are not evaluated but are instead treated as Scheme data. This means any operands that are call expressions  or special form expressions are treated as lists."),(0,r.kt)("p",null,"![","[chrome_3XLk3ZQN30.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regular lambda procedure:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evaluate operator"),(0,r.kt)("li",{parentName:"ul"},"Evaluate operands"),(0,r.kt)("li",{parentName:"ul"},"Apply operator to operands, evaluating the bod of the procedure.")),(0,r.kt)("p",null,"However, rules for evaluating calls to macro procedures are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evaluate ooperator"),(0,r.kt)("li",{parentName:"ul"},"Apply ooperator to unevaluated ooperands"),(0,r.kt)("li",{parentName:"ul"},"Evaluate the expression returned by macro in the frame it was called in")))}c.isMDXComponent=!0}}]);