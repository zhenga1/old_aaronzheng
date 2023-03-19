"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[7222],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>u});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=s,u=c["".concat(l,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(u,r(r({ref:a},o),{},{components:t})):n.createElement(u,r({ref:a},o))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2387:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const m={},r=void 0,p={unversionedId:"CS61A/lec/cs_lec_14",id:"CS61A/lec/cs_lec_14",title:"cs_lec_14",description:"- Lecture notes: link",source:"@site/docs/CS61A/lec/cs_lec_14.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_14",permalink:"/docs/CS61A/lec/cs_lec_14",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_14.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_13",permalink:"/docs/CS61A/lec/cs_lec_13"},next:{title:"cs_lec_15",permalink:"/docs/CS61A/lec/cs_lec_15"}},l={},i=[{value:"Memoization",id:"memoization",level:2},{value:"Exponentiation",id:"exponentiation",level:2}],o={toc:i};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"#r/lecture"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lecture notes: link")),(0,s.kt)("h1",{id:"lecture-1017"},"Lecture: 10/17"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},'print("Hello world i am cool")\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Efficiency"),"\nWe have to call f on n."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},'def fib(n):\n    """The n\'th fibonacci number.\n    """\n    if n==0 or n==1:\n        return n\n    else:\n        return fib(n-2) + fib(n-1)\ndef count(f):\n    def counted(n):\n        counted.call_count+=1\n        return f(n)\n    #Effectively creates an attribute of the function in counted.\n    counted.call_count = 0\n    return counted\n')),(0,s.kt)("p",null,"![","[Obsidian_wxZrzJYOAv.png]","]"),(0,s.kt)("h2",{id:"memoization"},"Memoization"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Idea"),": Remember the results that have been computed before"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},"def memo(f):\n    cache = {}\n    def memoized(f):\n        if n not in cache:\n            cache[n] = f(n)\n        return cache[n]\n    return memoized\n")),(0,s.kt)("p",null,"We see that the tree:\nMemoization is a cousin of dynamic programming, I suppose dynamic programming is just like from the bottom to the top?\n![","[chrome_qLr5GwZLtf.png]","]"),(0,s.kt)("h2",{id:"exponentiation"},"Exponentiation"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Goal:")," one more multipliation lets us double the problem size.\n![","[chrome_S69zzFaDvM 1.png]","]"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},"def exp(b,n):\n    if n==0:\n        return 1\n    else:\n        return b*exp(b,n-1)\n#Newer example\ndef exp(b,n):\n    if n==0:\n        return 1\n    elif n%2==0:\n        return (exp(b,n//2))**2\n    else:\n        return b*exp(b,n-1)\n")),(0,s.kt)("p",null,"Time in the Jupyter notebook can be figured out by the ",(0,s.kt)("inlineCode",{parentName:"p"},"%time")," call\nFor first example, the larger the n, the greater the time taken. It appears to be (in general) a linear trend. (Using jupyter time)"),(0,s.kt)("p",null,"However, for the faster example, the trend is more logarithmic, and the (absolute value) of the time taken itself is much less. "),(0,s.kt)("p",null,"First Example(LINEAR TIME)\nSecond Example(LOGARITHMIC TIME)"),(0,s.kt)("p",null,"We have that for the LINEAR TIME:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Doubling the input ",(0,s.kt)("strong",{parentName:"li"},"doubles")," the time"),(0,s.kt)("li",{parentName:"ul"},"1024x the input takes 1024x as much time")),(0,s.kt)("p",null,"For the LOGARITHMIC TIME:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Doubling the input ",(0,s.kt)("strong",{parentName:"li"},"increases")," the time by one step"),(0,s.kt)("li",{parentName:"ul"},"1024x the input takes 10 more steps lol. ")),(0,s.kt)("p",null,"==The description of how the functional computation time grows relative to the sizeof ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is called the ",(0,s.kt)("strong",{parentName:"p"},"Orders of Growth"),"=="),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Quadratic time"),"\nFunctions that process all pairs of values in a sequence of length ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," takes quadratic time"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},"def overlab(a,b):\n    count=0\n    for item in a:\n        for other in b:\n            if item==other:\n                count+=1\n    return count\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"overlap([2,3,5,2],[4,3,5,2])"),"  is a function with ",(0,s.kt)("inlineCode",{parentName:"p"},"O(4^2)")),(0,s.kt)("p",null,"So time taken ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"T")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))," is related to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," by:\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"T"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T = an^2 + bn+c")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.897438em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"))))),",where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," is a nonzero constant"),(0,s.kt)("p",null,"![","[chrome_HBIdOtZFUb.png]","]\n",(0,s.kt)("strong",{parentName:"p"},"Common orders of growth"),"\n![","[chrome_FzaeK4fUUE.png]","]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Logarithmic growth:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Doubling n increments time by a constant")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Linear growth:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Incrementing n increases time by constant")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Quadratic growth:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Incrementing n increases time by n times a constant. ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Exponential growth:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Incrementing n multiplies (existing) time by a constant. ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Factorial growth:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Incrementing n multiplies (existing) time by ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n+1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,s.kt)("p",null,"![","[chrome_gKJ2aGdrRh.png]","]"))}c.isMDXComponent=!0}}]);