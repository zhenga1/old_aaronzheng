"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[7046],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),o=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=o(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(t),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return t?i.createElement(f,l(l({ref:n},d),{},{components:t})):i.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var i=t(7462),r=(t(7294),t(3905));const a={},l=void 0,s={unversionedId:"CS61A/PRACTICE FINAL/TAIL RECURSION",id:"CS61A/PRACTICE FINAL/TAIL RECURSION",title:"TAIL RECURSION",description:"Question 1",source:"@site/docs/CS61A/PRACTICE FINAL/TAIL RECURSION.md",sourceDirName:"CS61A/PRACTICE FINAL",slug:"/CS61A/PRACTICE FINAL/TAIL RECURSION",permalink:"/old_aaronzheng/docs/CS61A/PRACTICE FINAL/TAIL RECURSION",draft:!1,editUrl:"https://github.com/zhenga1/old_aaronzheng/tree/main/docs/CS61A/PRACTICE FINAL/TAIL RECURSION.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"INTERPRETER",permalink:"/old_aaronzheng/docs/CS61A/PRACTICE FINAL/INTERPRETER"},next:{title:"scheme",permalink:"/old_aaronzheng/docs/CS61A/PRACTICE FINAL/scheme"}},p={},o=[{value:"Question 1",id:"question-1",level:3},{value:"Question 2",id:"question-2",level:3},{value:"Question 3",id:"question-3",level:3},{value:"Question 4",id:"question-4",level:3},{value:"Question 5",id:"question-5",level:3}],d={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"question-1"},"Question 1"),(0,r.kt)("p",null,"Write a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"\xa0that is tail recursive. It should take in a list\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"lst"),"\xa0and a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"fn"),", and apply the function onto every element in the list.\nMY ANSWER:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (map fn list)\n  (define (map-iter s m)\n  (if (null? s) m\n  (map-iter (cdr s) (cons (fn (car s)) m))\n  )\n  )\n  (reverse (map-iter list nil))\n)\n")),(0,r.kt)("p",null,"Better answer, without using ",(0,r.kt)("strong",{parentName:"p"},"reverse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (map fn list)\n  (define (map-iter s m)\n  (if (null? s) m\n  (map-iter (cdr s) (append m (list (fn (car s))))))\n  )\n  (map-iter list nil)\n)\n")),(0,r.kt)("h3",{id:"question-2"},"Question 2"),(0,r.kt)("p",null,"Write a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),"\xa0that is tail recursive. It should take in a list\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"lst"),"\xa0and a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"pred"),", and keep only the elements in the list that satisfy the predicate."),(0,r.kt)("p",null,"MY ANSWER:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (filter pred lst) \n  (define (filter-iter s m)\n  (cond ((null? s) m) \n  ((pred (car s)) \n  (filter-iter (cdr s) (append m (list (car s)))))\n  (else (filter-iter (cdr s) m))\n  ))\n  (filter-iter lst nil)\n)\n")),(0,r.kt)("p",null,"OFFICIAL ANSWER:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (filter pred lst) (define (filter-help lst so-far) (cond ((null? lst) so-far) ((pred (car lst)) (filter-help (cdr lst) (append so-far (list (car lst))))) (else (filter-help (cdr lst) so-far)))) (filter-help lst nil))\n")),(0,r.kt)("h3",{id:"question-3"},"Question 3"),(0,r.kt)("p",null,"Write a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\xa0that is tail recursive. It should take in a list\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"lst"),", an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"item"),", and an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", and insert the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"\xa0into the list at the given\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"."),(0,r.kt)("p",null,"MY ANSWER:\nVer 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (insert lst item index)\n  (define (insert-iter s m index)\n  (cond ((null? s) \n  (append m (list item)))\n  ((= index 0) \n  (insert-iter (cdr s) (append m (append (list item) (list (car s)))) (- index 1))) \n  (else \n  (insert-iter (cdr s) (append m (list (car s))) (- index 1))\n  )\n)\n)\n  (insert-iter lst nil index)\n)\n")),(0,r.kt)("p",null,"Ver 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (insert lst item index)\n  (define (insert-iter s m index)\n  (if (or (null? lst) (= index 0))\n   (append m (cons item s))\n   (insert-iter (cdr s) (append m (list (car s))) (- index 1))\n    )\n)\n  (insert-iter lst nil index)\n)\n")),(0,r.kt)("p",null,"BETTER SOLUTION:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (insert lst item index) (define (insert-help lst index so-far) (if (or (null? lst) (= index 0)) (append so-far (cons item lst)) (insert-help (cdr lst) (- index 1) (append so-far (list (car lst)))))) (insert-help lst index nil))\n")),(0,r.kt)("h3",{id:"question-4"},"Question 4"),(0,r.kt)("p",null,"Write a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),"\xa0that is tail recursive. It should take in a list\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"lst"),"\xa0and an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"item"),", and remove the first occurence of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"\xa0in the list. If\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"\xa0item doesn't occur, just return the original list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (remove lst item) \n  (define (remove-thing s m)\n  (if (= (car s) item)\n      (append m (cdr s))\n      (remove-thing (cdr s) (append m (list (car s)))))\n  )\n  (remove-thing lst nil)\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (remove lst item)\n  (define (remove-thing s m)\n  (if (= (car s) item) \n      (append m (cdr s))\n      (remove-thing (cdr s) (append m (list (car s))))\n  )\n  )\n  (remove-thing lst nil)\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (remove lst item)\n  (define (remove-thing s m)\n  (cond ((null? s) m)\n  ((= (car s) item) (append m (cdr s)))\n  (else (remove-thing (cdr s) (append m (list (car s)))))\n  )\n  )\n  (remove-thing lst nil)\n)\n")),(0,r.kt)("h3",{id:"question-5"},"Question 5"),(0,r.kt)("p",null,"Write a function\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"pop"),"\xa0that is tail recursive. It should take in a list\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"lst"),"\xa0and an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", and remove the item in the list at the given\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index"),". If the index is out of bounds, just return the original list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (pop lst index)\n  (define (pop-help s m index)\n      (cond \n\n       ((null? s) m)\n       \n      ((= index 0) \n      (append m (cdr s)))\n\n       (else (pop-help (cdr s) (append m (list (car s))) (- index 1)))\n      )\n  )\n  (pop-help lst nil index)\n)\n")))}c.isMDXComponent=!0}}]);