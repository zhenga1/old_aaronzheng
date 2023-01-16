"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[6468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,f=u["".concat(s,".").concat(b)]||u[b]||m[b]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"CS61A/lec/Cs_lec_7",id:"CS61A/lec/Cs_lec_7",title:"Cs_lec_7",description:"Tree Abstraction",source:"@site/docs/CS61A/lec/Cs_lec_7.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/Cs_lec_7",permalink:"/docs/CS61A/lec/Cs_lec_7",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/Cs_lec_7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_disc_928",permalink:"/docs/CS61A/disc/cs_disc_928"},next:{title:"cs_intro",permalink:"/docs/CS61A/lec/cs_intro"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tree Abstraction"),"\ntrees grow ",(0,a.kt)("em",{parentName:"p"},"upside-down")),(0,a.kt)("p",null,"There are two repeatedly used definitions of trees:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recursive description(wooden tree)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"tree")," has a root ",(0,a.kt)("strong",{parentName:"li"},"label")," and a list of ",(0,a.kt)("strong",{parentName:"li"},"branches")," "),(0,a.kt)("li",{parentName:"ul"},"Each branch is a ",(0,a.kt)("strong",{parentName:"li"},"tree")),(0,a.kt)("li",{parentName:"ul"},"A tree with zero branches is called a ",(0,a.kt)("strong",{parentName:"li"},"leaf")))),(0,a.kt)("li",{parentName:"ul"},"Relative description(family tree)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each location in a tree is called a ",(0,a.kt)("strong",{parentName:"li"},"node")),(0,a.kt)("li",{parentName:"ul"},"Each ",(0,a.kt)("strong",{parentName:"li"},"node")," has a label that can be any value"),(0,a.kt)("li",{parentName:"ul"},"One node can be the parent/child of any other")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementing the tree abstraction:"),"\n![","[chrome_i3Melqbx2F.png]","]\nSo the tree can be implemented however it is fit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jupyter"},"#Example implementation\ndef tree(label, branches=[]):\n    \"\"\"Construct a tree with the given label value and a list of branches.\"\"\"\n\n    if change_abstraction.changed:\n        for branch in branches:\n            assert is_tree(branch), 'branches must be trees'\n        return {'label': label, 'branches': list(branches)}\n    else:\n        for branch in branches:\n            assert is_tree(branch), 'branches must be trees'\n        return [label] + list(branches)\ntreek = tree('mytree',[tree(3)])\n")),(0,a.kt)("p",null,"All branches of any ",(0,a.kt)("em",{parentName:"p"},"tree")," must be a ",(0,a.kt)("em",{parentName:"p"},"tree")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"def is_leaf(tree):\n    return not branches(tree)\n")),(0,a.kt)("p",null,"![","[chrome_WJhOkZyTrB.png]","]"),(0,a.kt)("p",null,"Trees:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(",(0,a.kt)("strong",{parentName:"li"},"ROOT LABEL"),") + ",(0,a.kt)("strong",{parentName:"li"},"A list of branches"))),(0,a.kt)("p",null,"Can implement ",(0,a.kt)("em",{parentName:"p"},"tree as a list"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"tree = [labels, list<branches> = []]\n\x3c!--So basically a tree has a branches variable, that when not initialised, default to [] value--\x3e\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jupyter"},"def fib_tree(n):\n    if n<=1:\n        return tree(n)\n    else:\n        left,right = fib_tree(n-2),fib_tree(n-1)\n        return tree(label(left)+label(right), [left,right])\ndef count_leaves(t):\n    if is_leaf(t):\n        return 1\n    else:\n        return sum([count_leaves(b) for b in branches(t)])\n")),(0,a.kt)("p",null,"Sum a list of lists -> You get one list with all the elemnts in all the lists."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jupyter"},"def print_tree(t, indent=0):\n    print(' \xa0' * indent + str(label(t)))\n    \n    for b in branches(t):\n        print_tree(b, indent + 1)\n")))}u.isMDXComponent=!0}}]);