"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[7912],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>u});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),l=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(m.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=l(t),k=s,u=c["".concat(m,".").concat(k)]||c[k]||h[k]||r;return t?n.createElement(u,p(p({ref:a},o),{},{components:t})):n.createElement(u,p({ref:a},o))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=k;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[c]="string"==typeof e?e:s,p[1]=i;for(var l=2;l<r;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6652:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const r={},p=void 0,i={unversionedId:"CS61A/lec/cs_lec_25",id:"CS61A/lec/cs_lec_25",title:"cs_lec_25",description:"-> The idea that you can organise entire programs into functions",source:"@site/docs/CS61A/lec/cs_lec_25.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_25",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_25",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_25.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aggregation",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_24"},next:{title:"cs_lec_3",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_3"}},m={},l=[{value:"Example: Length of a List",id:"example-length-of-a-list",level:2},{value:"Example: Define factorial function that returns n!cdot  k",id:"example-define-factorial-function-that-returns-ncdot--k",level:3},{value:"Examples: Looking at higher-order functions",id:"examples-looking-at-higher-order-functions",level:3},{value:"Example: Map with only a constant number of frames",id:"example-map-with-only-a-constant-number-of-frames",level:3},{value:"What is it we are doing when we create interpreters?",id:"what-is-it-we-are-doing-when-we-create-interpreters",level:2},{value:"An analogy: Programs define machines",id:"an-analogy-programs-define-machines",level:4},{value:"Interpreters are General Computing Machines",id:"interpreters-are-general-computing-machines",level:2}],o={toc:l};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"#TailRecursion"),(0,s.kt)("h1",{id:"tail-recursion"},"Tail Recursion"),(0,s.kt)("h1",{id:"functional-programming"},"Functional programming"),(0,s.kt)("p",null,"-> The idea that you can organise entire programs into functions"),(0,s.kt)("p",null,"We have that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All functions are pure functions"),(0,s.kt)("li",{parentName:"ul"},"No reassignment, no mutable data types"),(0,s.kt)("li",{parentName:"ul"},"Name-value bindings are permanant")),(0,s.kt)("p",null,"Advantages of functional programming:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The value of expression is independent of the order that the sub-expressions are evaluated"),(0,s.kt)("li",{parentName:"ul"},"Sub-expressions can be safely evaluated in order or on demand (lazily)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Referential Transparency:")," Value of an expression does not change when you substitute one of its subexpressions with the value of the subexpression.\nBut, since there are no for/while statements as we cannot rebind variables to different values, how can we make recursion fast?")),(0,s.kt)("h1",{id:"recursion-vs-iteration-in-python"},"Recursion vs Iteration in Python"),(0,s.kt)("p",null,"In python, recursion always create new active frames.\n",(0,s.kt)("inlineCode",{parentName:"p"},"factorial(n,k)")," computes ",(0,s.kt)("inlineCode",{parentName:"p"},"k*n!")),(0,s.kt)("p",null,"==Recursive solution:=="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def factorial(n,k):\n    if n==0:\n        return k\n    else:\n        return factorial(n-1,k*n)\n\n")),(0,s.kt)("p",null,"Up to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," frame,s time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Theta n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," and space ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Theta n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," "),(0,s.kt)("p",null,"==Iterative solution=="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def factorial(n,k):\n    while n>0:\n        n,k = n-1, k*n\n    return k\n")),(0,s.kt)("p",null,"Only one frame, time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Theta n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," but space ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Theta 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Summary:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Two functions can have same runtime and different memory usage"),(0,s.kt)("li",{parentName:"ul"},"Iterative functions use less space because they only have one frame")),(0,s.kt)("p",null,"But what about Scheme? We have no iteration!"),(0,s.kt)("h1",{id:"tail-recursion-1"},"Tail Recursion"),(0,s.kt)("p",null,'"Implementation of scheme is allowed to be properly ',(0,s.kt)("strong",{parentName:"p"},"tail-recursive"),". This allows the execution of an ",(0,s.kt)("strong",{parentName:"p"},"iterative computation in constant space"),", so even if the iterative computation is described by a ",(0,s.kt)("strong",{parentName:"p"},"syntactically recursive procedure"),'"'),(0,s.kt)("p",null,"A.K.A"),(0,s.kt)("p",null,"Since Scheme ",(0,s.kt)("strong",{parentName:"p"},"doesn't actually have an iterative way to write code"),", we must figure out a way to use ",(0,s.kt)("em",{parentName:"p"},"less space")," in Scheme but still do recursion."),(0,s.kt)("p",null,"So this is where ",(0,s.kt)("strong",{parentName:"p"},"tail recursion")," comes in!!"),(0,s.kt)("p",null,"![","[chrome_WFeUFm3Cxh.png]","]\nWe see that the above expression in scheme (",(0,s.kt)("em",{parentName:"p"},"recursive"),") should use the same resources as the below python script. HOW TO DO??\n![","[chrome_e9odYn4cL5.png]","]\nAll the frames on the top ",(0,s.kt)("strong",{parentName:"p"},"are essentially useless")," once the next recursive call is made, since there is no need to keep those frames anymore. Unlike certain cases when tail-recursion is not possible (such as finding a unique path through a map), in this factorial instance, tail-recursion is the best solution, since there is no need to keep around frames that have data that can be discarded."),(0,s.kt)("h1",{id:"tail-calls"},"Tail Calls"),(0,s.kt)("p",null,"If there is nothing to do beside return the result of the recursive expression in the parent frame, then the function call is ",(0,s.kt)("strong",{parentName:"p"},"tail-recursive"),"\nIn other words:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def tail_recursive(thing):\n    ###STUFF\n    return tail_recursive(thing-1)\n    ###Nothing to do after recursion, no other implementations/code\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tail Call:"),"\nA ",(0,s.kt)("em",{parentName:"p"},"procedure call")," that has not yet returned is ==active==. Some procedural calls are ",(0,s.kt)("em",{parentName:"p"},"tail calls"),". A Scheme interpreter should support an ",(0,s.kt)("em",{parentName:"p"},"unbounded number")," of active tail calls using only a ",(0,s.kt)("em",{parentName:"p"},"constant")," number of space."),(0,s.kt)("p",null,"A tail call is a call expression in a ",(0,s.kt)("em",{parentName:"p"},"tail context")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The last body sub-expression of a lambda expression"),(0,s.kt)("li",{parentName:"ul"},"Sub expression 2 or 3 can also be in a tail context in an ",(0,s.kt)("strong",{parentName:"li"},"if")," expression. "),(0,s.kt)("li",{parentName:"ul"},"All non-predicate sub-expressions in a tail-context ",(0,s.kt)("strong",{parentName:"li"},"cond")),(0,s.kt)("li",{parentName:"ul"},"The last sub-expression in a tail-context ",(0,s.kt)("strong",{parentName:"li"},"and")," or ",(0,s.kt)("strong",{parentName:"li"},"or")),(0,s.kt)("li",{parentName:"ul"},"The last sub-expression in a tail-context ",(0,s.kt)("strong",{parentName:"li"},"begin"))),(0,s.kt)("h2",{id:"example-length-of-a-list"},"Example: Length of a List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (length s) \n  (if (null? s) 0\n  (+ 1 (length (cdr s)))\n  ))\n")),(0,s.kt)("p",null,"A call expression is not a tail call if more computation is still required in the calling procedure"),(0,s.kt)("p",null,"We see above the result of ",(0,s.kt)("inlineCode",{parentName:"p"},"(length (cdr s))")," is being used and summed with the expression 1, so it is not properly ",(0,s.kt)("strong",{parentName:"p"},"tail recursive")),(0,s.kt)("p",null,"So, the call above requires linear space."),(0,s.kt)("p",null,"![","[chrome_f5bJU4ko1Q.png]","]"),(0,s.kt)("p",null,"So doing the adding of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," within a ",(0,s.kt)("strong",{parentName:"p"},"nested inner function"),". "),(0,s.kt)("p",null,"![","[chrome_7H3FqogQeZ.png]","]"),(0,s.kt)("p",null,"SO basically, we have the above is a call in tail-context."),(0,s.kt)("h1",{id:"eval-with-tail-call-optimization"},"Eval with Tail Call Optimization"),(0,s.kt)("p",null,"The return value of the tail call should be the return value of the current procedure call."),(0,s.kt)("p",null,"Therefore, tail call shouldn't increase the environment size."),(0,s.kt)("h3",{id:"example-define-factorial-function-that-returns-ncdot--k"},"Example: Define factorial function that returns n!",(0,s.kt)("span",{parentName:"h3",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u22c5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cdot")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.44445em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u22c5"))))),"  k"),(0,s.kt)("p",null,"(tail call):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (factorial n k) \n  (if (zero? n) k (factorial (- n 1) (* n k)))\n)\n")),(0,s.kt)("p",null,"Not optimized for tail calls"),(0,s.kt)("p",null,"We see that , we can have:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"> (factorial 10 1) # DOABLE\n> (factorial 100 1) # DOABLE\n> (factorial 1000 1) # ERROR, MAXIMUM DEPTH EXCEEDED\n")),(0,s.kt)("p",null,"So basically scheme interpreter is not ",(0,s.kt)("strong",{parentName:"p"},"tail-recursive"),"\nWE ",(0,s.kt)("strong",{parentName:"p"},"should be able")," to compute this as much times as we need, there shouldn't be a recursive error."),(0,s.kt)("p",null,"![","[chrome_UdMFbO9Kbo.png]","]\nWe see that, out of the following functions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"length")," is not tail-recursive, since the expression that contains the ",(0,s.kt)("strong",{parentName:"li"},"tail-recursive")," statement is added to ",(0,s.kt)("strong",{parentName:"li"},"1"),", meaning it is not in ",(0,s.kt)("strong",{parentName:"li"},"tail-context"),", there is something that needs to be done after the function is called."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"contains")," is tail-recursive, since the if expression that contains the ",(0,s.kt)("strong",{parentName:"li"},"recursive call")," is at the tail."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"has-repeat")," is tail-recursive. This entire if expression is in a ",(0,s.kt)("strong",{parentName:"li"},"tail-context"),", so we have that ",(0,s.kt)("inlineCode",{parentName:"li"},"has-repeat")," must be ",(0,s.kt)("strong",{parentName:"li"},"tail-recursive"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"fib")," is not tail recursive, since the ",(0,s.kt)("strong",{parentName:"li"},"inner")," function ",(0,s.kt)("inlineCode",{parentName:"li"},"(fib (- k 1))")," is not a function in ",(0,s.kt)("strong",{parentName:"li"},"tail-context"))),(0,s.kt)("h3",{id:"examples-looking-at-higher-order-functions"},"Examples: Looking at higher-order functions"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"(define (reduce procedure s start))"),"\nBasically applies the procedure from start to each and every element within the list ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),". Essentially it reduces a list ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," and integer ",(0,s.kt)("inlineCode",{parentName:"p"},"start")," to a single thing, whether that be a list or a number or something else. "),(0,s.kt)("p",null,"Example:\n",(0,s.kt)("inlineCode",{parentName:"p"},"(reduce * '(3 4 5) 2)"),"\n-> Effectively this computes ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\\cdot 3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"))))),", then   ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(2\\cdot 3)\\cdot 4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))),", etcetera, until we get the final answer of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"120")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"120")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"(reduce (lambda (x y) (cons y x)) '(3 4 5) 2"),"\n-> Effectively we first do ",(0,s.kt)("inlineCode",{parentName:"p"},"(cons 2 3)"),", then we do ",(0,s.kt)("inlineCode",{parentName:"p"},"(cons 4 (cons (2 3)))"),", then finally we do ",(0,s.kt)("inlineCode",{parentName:"p"},"( cons 5 (cons 4 (cons (2 3))))"),". So the end result becomes:\n",(0,s.kt)("inlineCode",{parentName:"p"},"'(5 4 2 3)")),(0,s.kt)("p",null,"![","[chrome_OK3sdycoGU 1.png]","]\nFrom above image, we see that both ",(0,s.kt)("em",{parentName:"p"},"Box 1")," and ",(0,s.kt)("em",{parentName:"p"},"Box 2")," are in tail context. However, ",(0,s.kt)("strong",{parentName:"p"},"RED BOX")," is not, as the ",(0,s.kt)("em",{parentName:"p"},"procedure function")," is being called and then the result is being passed in to the ",(0,s.kt)("em",{parentName:"p"},"result")," function."),(0,s.kt)("p",null,"Hence, does this run in constant time? Maybe.\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," This is entirely dependent on whether or not the ",(0,s.kt)("strong",{parentName:"p"},"RED BOX")," runs in constant time and requires only constant space. If only requires constant space, then the entire function ",(0,s.kt)("strong",{parentName:"p"},"reduce")," requires only constant space. If not, then no."),(0,s.kt)("h3",{id:"example-map-with-only-a-constant-number-of-frames"},"Example: Map with only a constant number of frames"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"map")," function basically takes in a procedure and a list, and creates a new list whereby the procedure is applied to every element of the list. It is assumed that the procedure can be applied to every element in the list"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (map procedure s)\n  (if (null? s) nil\n  (cons (procedure (car s)) \n  (map procedure (cdr s))))\n)\n")),(0,s.kt)("p",null,"We see that ",(0,s.kt)("strong",{parentName:"p"},"map")," is obviously not a ",(0,s.kt)("strong",{parentName:"p"},"tail-context"),", since whatever is returned from the ",(0,s.kt)("strong",{parentName:"p"},"map")," function is passed directly into ",(0,s.kt)("strong",{parentName:"p"},"cons"),"."),(0,s.kt)("p",null,"HOW TO MAKE IT TAIL RECURSIVE?\nSOLUTION:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (map procedure s)\n  (define (map-reverse s m)\n  (if (null? s) m \n  (map-reverse (cdr s) (cons (procedure (car s)) m))\n  )\n  )\n  (reverse (map-reverse s nil))\n)\n")),(0,s.kt)("p",null,"We see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"reverse")," call isn't ",(0,s.kt)("strong",{parentName:"p"},"tail-recursive"),", but then the calls to ",(0,s.kt)("strong",{parentName:"p"},"map-reverse")," is ",(0,s.kt)("strong",{parentName:"p"},"tail-recursive"),", so we are good. Since the function called is ",(0,s.kt)("strong",{parentName:"p"},"map-reverse")," instead of ",(0,s.kt)("strong",{parentName:"p"},"map")," for the function call within the ",(0,s.kt)("strong",{parentName:"p"},"reverse"),", we see that that not being tail-recursive is insignificant. "),(0,s.kt)("p",null,"What about the ",(0,s.kt)("strong",{parentName:"p"},"reverse")," function?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (reverse s)\n  (define (reverse-iter s m)\n  (if (null? s) m\n  (reverse-iter (cdr s) (cons (car s) m)))\n  )\n)\n")),(0,s.kt)("h2",{id:"what-is-it-we-are-doing-when-we-create-interpreters"},"What is it we are doing when we create interpreters?"),(0,s.kt)("p",null,"We are creating little machines. "),(0,s.kt)("h4",{id:"an-analogy-programs-define-machines"},"An analogy: Programs define machines"),(0,s.kt)("p",null,"Programs specify logic of computational devices.\n![","[chrome_jR2pEkfBj4.png]","]"),(0,s.kt)("h2",{id:"interpreters-are-general-computing-machines"},"Interpreters are General Computing Machines"),(0,s.kt)("p",null,"An interpreter can be parameterized to simulate any machine"),(0,s.kt)("p",null,"Our scheme interpreter is a universal machine. "),(0,s.kt)("p",null,"Think of it as a bridge between data objects that are manipulated by our progrmaming language and the programming language itself. "),(0,s.kt)("p",null,"Internally, it is just a set of evaluation rules."),(0,s.kt)("h1",{id:"dynamic-scope"},"Dynamic Scope"),(0,s.kt)("p",null,"The way in which names are looked up in Scheme or Python is called ",(0,s.kt)("em",{parentName:"p"},"lexical scope"),". (or ",(0,s.kt)("em",{parentName:"p"},"static scope"),")"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Lexical Scope:")," The parent of a frame is in the environment in which a procedure was ",(0,s.kt)("em",{parentName:"p"},"defined")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dynamic Scope:")," The parent of a frame is the environment in which a procedure was ",(0,s.kt)("em",{parentName:"p"},"called"),".\n![","[chrome_Gzn9wEJyoh.png]","]"))}c.isMDXComponent=!0}}]);