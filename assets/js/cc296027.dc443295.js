"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[9410],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>h});var t=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=i(n),d=l,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?t.createElement(h,s(s({ref:r},p),{},{components:n})):t.createElement(h,s({ref:r},p))}));function h(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[m]="string"==typeof e?e:l,s[1]=a;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6935:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var t=n(7462),l=(n(7294),n(3905));const o={},s="Scheme",a={unversionedId:"CS61A/misc/retarded error",id:"CS61A/misc/retarded error",title:"Scheme",description:"Traceback (most recent call last):",source:"@site/docs/CS61A/misc/retarded error.md",sourceDirName:"CS61A/misc",slug:"/CS61A/misc/retarded error",permalink:"/aaronzheng/docs/CS61A/misc/retarded error",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/misc/retarded error.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"recursion framework",permalink:"/aaronzheng/docs/CS61A/misc/recursion framework"},next:{title:"slicing",permalink:"/aaronzheng/docs/CS61A/misc/slicing"}},c={},i=[],p={toc:i};function m(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scheme"},"Scheme"),(0,l.kt)("p",null,'Traceback (most recent call last):\nk (most recent call last):\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\ok\\client\\sources\\ok_test\\scheme.py", line 58, in evaluate\nresult = timesr.timed(self.timeout, self.scheme.scheme_eval,\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\ok\\client\\utils\\timer.py", line 33, in timed\nraise submission.error\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\ok\\client\\utils\\timer.py", line 49, in run\nself.result = self.fn(',(0,l.kt)("em",{parentName:"p"},'self.args, **self.kargs)\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\scheme_eval_apply.py", line 47, in scheme_eval\nreturn scheme_apply(op,operands,env)\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\scheme_eval_apply.py", line 71, in scheme_apply\nreturn procedure.py_func('),'pythonlist)\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\scheme_builtins.py", line 431, in scheme_load\nread_eval_print_loop(next_line, env, quiet=quiet, report_errors=True)',(0,l.kt)("br",{parentName:"p"}),"\n",'File "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\scheme.py", line 28, in read_eval_print_loop\nsrc = next_line()\nFile "D:\\Downloads\\released_proj_scheme_scheme\\scheme\\scheme_builtins.py", line 427, in next_line\nreturn buffer_lines(lines)\nNameError: name \'buffer_lines\' is not defined'),(0,l.kt)("p",null,"Code that doesn't work:\n(if (integer? k)"),(0,l.kt)("p",null,"\xa0 (let ((k k+1))"),(0,l.kt)("p",null,"\xa0 \xa0 (cond ((not (pair? s)) nil)"),(0,l.kt)("p",null,"\xa0 (else (cons (cons k (car s)) (enumerate (cdr s))))"),(0,l.kt)("p",null,"\xa0 ))"),(0,l.kt)("p",null,"\xa0 (let ((k 0))"),(0,l.kt)("p",null,"\xa0 (cond ((not (pair? s)) nil)"),(0,l.kt)("p",null,"\xa0 (else (cons (cons k (car s)) (enumerate (cdr s)))))"),(0,l.kt)("p",null,"\xa0 ) )\n(let ((k"),(0,l.kt)("p",null,"\xa0 ())))\n\xa0("),(0,l.kt)("p",null,"\xa0 \xa0 cond ((not (pair? s)) nil"),(0,l.kt)("p",null,"\xa0 )"),(0,l.kt)("p",null,"\xa0 ("),(0,l.kt)("p",null,"\xa0 \xa0 else (cons (cons ((lambda (x) ()) (car s)) (car s)) (enumerate (cdr s) ) )"),(0,l.kt)("p",null,"\xa0 )"),(0,l.kt)("p",null,")"))}m.isMDXComponent=!0}}]);