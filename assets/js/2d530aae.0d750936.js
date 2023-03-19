"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[8599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"CS61A/disc/cs_disc_105",id:"CS61A/disc/cs_disc_105",title:"cs_disc_105",description:"Q1 Mutability WWPD",source:"@site/docs/CS61A/disc/cs_disc_105.md",sourceDirName:"CS61A/disc",slug:"/CS61A/disc/cs_disc_105",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_105",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/disc/cs_disc_105.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_disc_103",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_103"},next:{title:"cs_disc_1102",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_1102"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q1 Mutability WWPD"),"\n10/5 Disc 06"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jupyter"},"x = [1,2,3]\nx+=[4]\nx = x+[4]\n")),(0,a.kt)("p",null,"We see that x+=","[4]"," does the same thing as "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jupyter"},"x.extend([4])\n")),(0,a.kt)("p",null,"But the below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x = x+[4]\n")),(0,a.kt)("p",null,"Creates a new list and instead just assigns it to x. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is and == ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"== (equal value of list) -> checks if values of operands are equal. comparison operator"),(0,a.kt)("li",{parentName:"ul"},"is -> checks if operand points to the same thing. identity operator"))),(0,a.kt)("li",{parentName:"ul"},"copying lists",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lis","[:]"," creates a shallow copy of list, essentially just copying over the pointers to lists and other mutable elements contained within the outer list"))),(0,a.kt)("li",{parentName:"ul"},"return value of .pop(i)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Iterators")," will continue to iterate through a list even if the list is being changed mid iteration"))}u.isMDXComponent=!0}}]);