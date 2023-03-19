"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[1555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Trees",l={unversionedId:"CS61A/misc/TREES",id:"CS61A/misc/TREES",title:"Trees",description:"One example of data abstraction is with\xa0trees.",source:"@site/docs/CS61A/misc/TREES.md",sourceDirName:"CS61A/misc",slug:"/CS61A/misc/TREES",permalink:"/docs/CS61A/misc/TREES",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/misc/TREES.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Special Forms",permalink:"/docs/CS61A/misc/Special Forms"},next:{title:"Untitled 1",permalink:"/docs/CS61A/misc/Untitled 1"}},s={},p=[{value:"Working with Trees",id:"working-with-trees",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trees"},"Trees"),(0,a.kt)("p",null,"One example of data abstraction is with\xa0",(0,a.kt)("strong",{parentName:"p"},"trees"),"."),(0,a.kt)("p",null,"In computer science,\xa0",(0,a.kt)("strong",{parentName:"p"},"trees"),"\xa0are recursive data structures that are widely used in various settings and can be implemented in many ways. The diagram below is an example of a tree.\n![","[chrome_Ngz3oz7i7s.png]","]"),(0,a.kt)("p",null,"Notice that the tree branches downward. In computer science, the\xa0",(0,a.kt)("strong",{parentName:"p"},"root"),"\xa0of a tree starts at the top, and the\xa0",(0,a.kt)("strong",{parentName:"p"},"leaves"),"\xa0are at the bottom."),(0,a.kt)("p",null,"Some terminology regarding trees:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parent Node"),": A node that has at least one branch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Child Node"),": A node that has a parent. A child node can only have one parent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Root"),": The top node of the tree. In our example, this is the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\xa0node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Label"),": The value at a node. In our example, every node's label is an integer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Leaf"),": A node that has no branches. In our example, the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"4"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"5"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"6"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"\xa0nodes are leaves."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Branch"),": A subtree of the root. Trees have branches, which are trees themselves: this is why trees are\xa0",(0,a.kt)("em",{parentName:"li"},"recursive"),"\xa0data structures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Depth"),": How far away a node is from the root. We define this as the number of edges between the root to the node. As there are no edges between the root and itself, the root has depth 0. In our example, the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"\xa0node has depth 1 and the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"4"),"\xa0node has depth 2."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Height"),": The depth of the lowest (furthest from the root) leaf. In our example, the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"4"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"5"),", and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"6"),"\xa0nodes are all the lowest leaves with depth 2. Thus, the entire tree has height 2."),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"working-with-trees"},"Working with Trees"),(0,a.kt)("p",null,"A tree has both a value for the root node and a sequence of branches, which are also trees. In our implementation, we represent the branches as a list of trees. Since a tree is a data abstraction, our choice to use lists is just an implementation detail."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The arguments to the constructor\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"tree"),"\xa0are the value for the root node and an optional list of branches.\xa0",(0,a.kt)("em",{parentName:"li"},"If no branches parameter is provided, the default value\xa0",(0,a.kt)("inlineCode",{parentName:"em"},"[]"),"\xa0is used.")),(0,a.kt)("li",{parentName:"ul"},"The selectors for these are\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"label"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"branches"),".")),(0,a.kt)("p",null,"Remember\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"branches"),"\xa0returns a list of trees and not a tree directly. It's important to distinguish between working with a tree and working with a\xa0",(0,a.kt)("strong",{parentName:"p"},"list of"),"\xa0trees."),(0,a.kt)("p",null,"We have also provided a convenience function,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"is_leaf"),"."),(0,a.kt)("p",null,"Let's try to create the tree from above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"t = tree(1,\n      [tree(3,\n          [tree(4),\n           tree(5),\n           tree(6)]),\n      tree(2)])\n")))}m.isMDXComponent=!0}}]);