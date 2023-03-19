"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[2126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||f[h]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,u={unversionedId:"CS61A/lec/cs_lec_3",id:"CS61A/lec/cs_lec_3",title:"cs_lec_3",description:"Warren Hall can be used for CS 61a help",source:"@site/docs/CS61A/lec/cs_lec_3.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_3",permalink:"/docs/CS61A/lec/cs_lec_3",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_25",permalink:"/docs/CS61A/lec/cs_lec_25"},next:{title:"cs_lec_4",permalink:"/docs/CS61A/lec/cs_lec_4"}},s={},i=[],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Warren Hall can be used for CS 61a help"),(0,a.kt)("p",null,"A function that does not expliitly return a value will return None\nCareful: None is not displayed by the interpreter as the value of an expression"),(0,a.kt)("p",null,"None is not displayed by the interpreter as the value of an expression (only value to do so) look at line 3\nFunctions end at return statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"return  #is the same as \nreturn None.\n")),(0,a.kt)("p",null,"Pure functions and Non-Pure Functions\nPure Functions\ngiven the same input, the function will return the same output\nJust return vlaues"),(0,a.kt)("p",null,"Non-Pure Functions\nwill not really return the same output for every given input\nhave side effects -> return none\nNot jsut returning a value, it also does other stuff, like prints someething out"),(0,a.kt)("p",null,"Print prints stuff out all on  one line and then goes to the next line\nMultple environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sequence of frames which show bindigns of names and values")),(0,a.kt)("p",null,"Def statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"def square(x):\n    return mul(x,x)\n\n>>>square(2+2)\n")),(0,a.kt)("p",null,"What happenes?\nA new function is creted!\nName bound to that function in the current frame"),(0,a.kt)("p",null,"Call expression: square(2+2) Operand 2+2, argument: 4\nOperator: Square\nFunction: func square(x)"),(0,a.kt)("p",null,"Calling/Applying: Argument. x will evaluate to 4\nSignature -> Square(x)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"from operator import mul\ndef square(x):\n    return mul(x,x)\nsquare(square(3))\n\n    Global frame:\n        mul\n        square\n    f1: square [ parent-Global]\n        x:3\n        return value:9\n    f2: square [ parent=Global]\n        x:9\n        return value:81\n")),(0,a.kt)("p",null,"First you must look at the parent Frame, as in the primarily local(square) frame.\nIf not found, then look in the Global frame, which includes the functions, such as mul and square"),(0,a.kt)("p",null,"n enviornment is a sequence of frames"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the global frame alone"),(0,a.kt)("li",{parentName:"ul"},"A local, then the global frame")),(0,a.kt)("p",null,"Square(square(3)) -> func square(x)\n-> square(3) --\x3e func square(x) ->\n|"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3")),(0,a.kt)("p",null,"In this case, there is only two frames, specifically the local and then the global frame."),(0,a.kt)("p",null,"NAMES HAVE DIFFERENT MEANINGS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"def square(square):\n    return mul((->two)square,square)\n")),(0,a.kt)("p",null,"square(4) <- one"),(0,a.kt)("p",null,"so basically the one square is in the global frame, so square refers to the method\nbut the square inside of the square function searches the local frame, so square refers to the parameter of the function\nsquare."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m doctest ex.py\n")),(0,a.kt)("p",null,"This is using the doctest lines and testing them, seeing if they are correct."),(0,a.kt)("p",null,"INFINITE LOOP cuz even negative numbers\nif negative -> True"),(0,a.kt)("p",null,"Evaluating short-circuit codes\nonce the code reaches the end of the truthy statements, it kills itslef\nSo the code finishes execution\nat the last truthy statement\nWIth the and sequence\nif 5 and 0 and 20 -> with and, everything following must evaluates to a truthy value"),(0,a.kt)("p",null,"if False or 0 or 20   -> Or thingy stops at the last non-truthy value"),(0,a.kt)("p",null," Print with 'DEBUG:' at the front of the outputted line to avoid ok from grading"))}p.isMDXComponent=!0}}]);