"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[9208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"CS61A/lec/cs_intro",id:"CS61A/lec/cs_intro",title:"cs_intro",description:"What is computer science?",source:"@site/docs/CS61A/lec/cs_intro.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_intro",permalink:"/docs/CS61A/lec/cs_intro",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cs_lec_7",permalink:"/docs/CS61A/lec/Cs_lec_7"},next:{title:"cs_lec",permalink:"/docs/CS61A/lec/cs_lec"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What is computer science?"),(0,o.kt)("p",null,"The study of "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What problems cnan be solved using computation,\nhow to solve those problems\nWhat techniques lead to effetie solutions")),(0,o.kt)("p",null,"Systems\nArtificial Intelligence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Decision Making\n- Robotics\n- Natural Language Processing\n    - Even more specific shit\n    - Ansswering questions\n    - Dialog\n    -Translation\n")),(0,o.kt)("p",null,"Graphics"),(0,o.kt)("p",null,"Seccurity\nNetworking\nProgramming Languages\nTheory\nScientific Computing"),(0,o.kt)("p",null,"Common enemy -> complexity\nCommon tool used to solve the enemy -> abstraction"),(0,o.kt)("p",null,"The course is about:\nMastering abstraction\nTalking about something (without actually taking about the specifics).\nProgramming paradigms\nSo that you can manage complexity"),(0,o.kt)("p",null,"Language uses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python fundamentals"),(0,o.kt)("li",{parentName:"ul"},"Combinign multiple ideas in large projects"),(0,o.kt)("li",{parentName:"ul"},"How computers interpret programming languages")),(0,o.kt)("p",null,"Other programming languages: Scheme & SQL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A challenging course that will demand a lot of you")),(0,o.kt)("p",null,"The videos that (the lecutres) are pretty good so some students choose not to come to live lecctures."),(0,o.kt)("p",null,"According to the Syllabus\nThere is no formal programming-related prerequisitee for CS61A but.."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tking the course without any prior programming experience is typically very challenging"),(0,o.kt)("li",{parentName:"ul"},"Mmost CS 61A students have had significant prior programming experience."),(0,o.kt)("li",{parentName:"ul"},"Studnets who take the course without prior programming experience\ntypically must work substantially harder to master the material and\ntend to receive lower final grades in the course.")),(0,o.kt)("p",null,"Students who take course later often get more out of it due to increased understanding."),(0,o.kt)("p",null,"Arou\nCS10 -> course for beginners\nC88C -> Computational structures in Data Science\n-> based on CS61A , but covers only 3 out of 4 units worth of the content:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Two programming projects (instead of four) that are adapted from CS 61A proejcts"),(0,o.kt)("li",{parentName:"ul"},"Everything you need to know to continue on to CS61B"),(0,o.kt)("li",{parentName:"ul"},"Omits the unit on how programs run other programs")),(0,o.kt)("p",null,"Designed for students taking Data 8 but is now indepenedent\nCourse might be full, but expansion options are investigated. "),(0,o.kt)("p",null,"Course Policies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learning + Community")),(0,o.kt)("p",null,"Collboration\nWorking together is highly encouraged"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Discuss everthign with each other; learn from your fellow studnets!"),(0,o.kt)("li",{parentName:"ul"},"Some projects can be completed with a partner"),(0,o.kt)("li",{parentName:"ul"},"Choose a partner from your discussion section")),(0,o.kt)("p",null,"What constituttes academic misconduct/"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"don't look at someone eelse's code"),(0,o.kt)("li",{parentName:"ul"},"Don't tell other people the answers. Can point out what is wrong and describe how to fix it or show relevant example."),(0,o.kt)("li",{parentName:"ul"},"Copying project solutiosn causes people to fail this course"),(0,o.kt)("li",{parentName:"ul"},"We really do catch people who violate the rules, and we are getting beter at it")),(0,o.kt)("p",null,"Build good habits now"),(0,o.kt)("p",null,"SCORING:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Around half is lab/discussion/homework "),(0,o.kt)("li",{parentName:"ul"},"A third is Projects"),(0,o.kt)("li",{parentName:"ul"},"Tests/exams take up half of the course grade."),(0,o.kt)("li",{parentName:"ul"},"Final exam takes quarter of course grade"),(0,o.kt)("li",{parentName:"ul"},"MT2 is more important than MT1")),(0,o.kt)("p",null,"Exam advice:\nStudy early & often\nPrevious exams are a great way to test understanding & problem solving skills"),(0,o.kt)("p",null,"Assignment advice:\nDon't be afraid to ask for help!\nTry using external resources (e.g., Google) to udnerstand errors\nTry a personal project if you have time"))}p.isMDXComponent=!0}}]);