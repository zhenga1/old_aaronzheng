"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[4472],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),h=s,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(7462),s=(a(7294),a(3905));const r={},o=void 0,i={unversionedId:"CS70/Miscellaneous Self Study/Practice Problems",id:"CS70/Miscellaneous Self Study/Practice Problems",title:"Practice Problems",description:"A celebrity at a party is someone whom everyone knows, yet who knows no one. Suppose that you are at a party with n people. For any pair of people A and B at the party, you can ask A if they know B and receive an honest answer. Give a recursive algorithm to determine whether there is a celebrity at the party, and if so who, by asking at most 3n\u22124 questions. (Note: for the purpose of this question you are just visiting the party to ask questions. What you are trying to determine is whether the n people actually attending the party include a celebrity.) Prove by induction that your algorithm always correctly identifies a celebrity if there is one, and that the number of questions is at most 3n\u22124.",source:"@site/docs/CS70/Miscellaneous Self Study/Practice Problems.md",sourceDirName:"CS70/Miscellaneous Self Study",slug:"/CS70/Miscellaneous Self Study/Practice Problems",permalink:"/docs/CS70/Miscellaneous Self Study/Practice Problems",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS70/Miscellaneous Self Study/Practice Problems.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graphs",permalink:"/docs/CS70/Miscellaneous Self Study/Graphs"},next:{title:"Proofs",permalink:"/docs/CS70/Miscellaneous Self Study/Proofs"}},l={},m=[],p={toc:m};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"celebrity"))," at a party is someone whom everyone knows, yet who knows no one. Suppose that you are at a party with n people. For any pair of people A and B at the party, you can ask A if they know B and receive an honest answer. Give a recursive algorithm to determine whether there is a celebrity at the party, and if so who, by asking at most 3n\u22124 questions. (Note: for the purpose of this question you are just visiting the party to ask questions. What you are trying to determine is whether the n people actually attending the party include a celebrity.) Prove by induction that your algorithm always correctly identifies a celebrity if there is one, and that the number of questions is at most 3n\u22124."),(0,s.kt)("p",null,"Key insight: Asking any pair of people whether they know each other will always eliminate one person as celebrity.\nAlgo:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"First randomly choose two people (A and B) and ask if one of them, A, knows B.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If true, then A is not a celebrity. B is next step"),(0,s.kt)("li",{parentName:"ul"},"If false, then B is not a celebrity. A is next step"))),(0,s.kt)("li",{parentName:"ul"},"Use next step on the following person, C. Whoever's status is still not determined is next step to ask the next random person. ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"(n-1) questions eliminate n-1 people from being celebrity."))),(0,s.kt)("li",{parentName:"ul"},"NEXT VERIFICATION OF THE ONE AND ONLY"),(0,s.kt)("li",{parentName:"ul"},"CHECK THAT EVERYONE KNOWS CELEBRITY",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"(n-1) questions asked. "))),(0,s.kt)("li",{parentName:"ul"},"CHECK CELEBRITY KNOWS NO ONE",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"- (n-1) questions asked\n")),"Total 3n-3"),(0,s.kt)("li",{parentName:"ul"},"CATCH, minus one since the celebrity (lets call C) must have been paired up with at least one person, so at least one of the CHECK questions is redundant.\nTotal 3n-4. ")),(0,s.kt)("p",null,"Inductive proof:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Base case. 2 people clearly can be identified by 2 questions. Use elimination method to eliminate one person as celebrity, then check whether the celebrity dude knows the other guy, or vice versa. "),(0,s.kt)("li",{parentName:"ul"},"Inductive case. Assume works for ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n=k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"For ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n=k+1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),", take first ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," people and use algo to identify celeb THIS IS WRONG"),(0,s.kt)("li",{parentName:"ul"},"JUST see above")))),(0,s.kt)("p",null,"A common recursively defined function is the factorial, defined for a nonnegative number n as n! = n(n \u2212 1)(n \u2212 2)...1, with base case 0! = 1. Let us reinforce our understanding of the connection between recursion and induction by considering the following theorem involving factorials.\nTheorem: For all n \u2208 N, n > 1 =\u21d2 n! < n^n . Prove this theorem using induction. (Hint: In the Inductive Step, write (n+1)! = (n+1)\xb7 n!, and use the Induction Hypothesis.)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Base case, we have 2! < 2^2 = 4."),(0,s.kt)("li",{parentName:"ul"},"Inductive case: ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Let k! < k^k"),(0,s.kt)("li",{parentName:"ul"},"Then (k+1)! = k! x (k+1) < k^k x (k+1) < (k+1)^k x (k+1) = (k+1)^(k+1). QED")))),(0,s.kt)("p",null,"Use the proof of Theorem 3.6 to design an algorithm that, given any amount of postage of at least 12c, outputs the numbers of 4c and 5c stamps that make up this postage. What\u2019s the largest number of 5c stamps your algorithm will ever use?"),(0,s.kt)("p",null,"Algo: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Take n as no of postage."),(0,s.kt)("li",{parentName:"ul"},"Calculate m = n mod 4"),(0,s.kt)("li",{parentName:"ul"},"Set no of 5s as equal to m"),(0,s.kt)("li",{parentName:"ul"},"then no of 4s will be equal to (n-5m)//4")),(0,s.kt)("p",null,"So max is 3."))}c.isMDXComponent=!0}}]);