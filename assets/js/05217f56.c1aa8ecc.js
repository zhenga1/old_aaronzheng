"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[5088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,l={unversionedId:"CS61A/disc/cs_disc_1102",id:"CS61A/disc/cs_disc_1102",title:"cs_disc_1102",description:"Scheme List Mini-lec",source:"@site/docs/CS61A/disc/cs_disc_1102.md",sourceDirName:"CS61A/disc",slug:"/CS61A/disc/cs_disc_1102",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_1102",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/disc/cs_disc_1102.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_disc_105",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_105"},next:{title:"cs_disc_1109",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_1109"}},s={},p=[{value:"<code>if</code>\xa0Expressions",id:"ifexpressions",level:3},{value:"<code>cond</code>\xa0Expressions",id:"condexpressions",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scheme List Mini-lec")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(= <a> <b>)")," returns true if ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),"(a number) equals ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),"(a number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(eq? <a> <b?)")," returns true if ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," are the same primitive values, similar to Python ",(0,i.kt)("inlineCode",{parentName:"li"},"is")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(equal? <a> <b>)")," is specifically for the case where if the contents of ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," ( list) is the same as the contents of ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," (another list). If ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," are not lists, ",(0,i.kt)("inlineCode",{parentName:"li"},"equal?")," is the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"eq?"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(define a (1,2,3))")),(0,i.kt)("p",null,"Scheme: ==",(0,i.kt)("strong",{parentName:"p"},"CALL EXPRESSIONS"),"==\nCall expressions apply a procedure to some arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(<operator> <operand1> <operand2> ...)\n")),(0,i.kt)("p",null,"Call expressions in Scheme work exactly like they do in Python. To evaluate them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Evaluate the operator to get a procedure."),(0,i.kt)("li",{parentName:"ol"},"Evaluate each of the operands from left to right."),(0,i.kt)("li",{parentName:"ol"},"Apply the value of the operator to the evaluated operands.")),(0,i.kt)("p",null,"For example, consider the call expression\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"(+ 1 2)"),". First, we evaluate the symbol\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0to get the built-in addition procedure. Then we evaluate the two operands\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"\xa0to get their corresponding atomic values. Finally, we apply the addition procedure to the values\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"\xa0to get the return value\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("p",null,"Operators may be symbols, such as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", or more complex expressions, as long as they evaluate to procedure values."),(0,i.kt)("p",null,"Here is a reference for the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/scheme-builtins/"},"Scheme Built-In Procedures"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scm> (- 1 1)                 ; 1 - 1\n0\nscm> (* (+ 1 2) (+ 1 2))     ; (1 + 2) * (1 + 2)\n9\n")),(0,i.kt)("h1",{id:"special-forms"},"Special Forms"),(0,i.kt)("p",null,"Special form expressions contain a\xa0",(0,i.kt)("strong",{parentName:"p"},"special form"),"\xa0as the operator. Special form expressions\xa0",(0,i.kt)("em",{parentName:"p"},"do not"),"\xa0follow the same rules of evaluation as call expressions. Each special form has its own rules of evaluation -- that's what makes them special! Here's the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/scheme-spec/#special-forms-2"},"Scheme Specification"),"\xa0to reference the special forms we will cover in this class."),(0,i.kt)("p",null,"It is important to note that everything in Scheme is either an\xa0",(0,i.kt)("strong",{parentName:"p"},"atomic"),"\xa0or an\xa0",(0,i.kt)("strong",{parentName:"p"},"expression"),", so although these special forms look and operate similarly to Python, they are evaluated differently."),(0,i.kt)("p",null,"Special forms like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"and"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"or"),"\xa0in Python direct the control flow of a program and allow you to evaluate specific expressions under some condition. In Scheme, however, these special forms are expressions that take in a set amount of parameters and return some value based on the condition passed in."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If Expression")),(0,i.kt)("p",null,"An\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression looks like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(if <predicate> <if-true> [if-false])")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<predicate>"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<if-true>"),"\xa0are required expressions and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"[if-false]"),"\xa0is optional."),(0,i.kt)("p",null,"The rules for evaluation are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Evaluate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<predicate>"),"."),(0,i.kt)("li",{parentName:"ol"},"If\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<predicate>"),"\xa0evaluates to a truth-y value, evaluate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<if-true>"),"\xa0and return its value. Otherwise, evaluate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"[if-false]"),"\xa0if provided and return its value.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0is a special form as not all of its operands will be evaluated. The value of the first operand determines whether the second or the third operator is evaluated.\n![","[chrome_D1YSJwVLGl.png]","]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Boolean operators")),(0,i.kt)("p",null,"Like Python, Scheme has the boolean operators\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"and"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"or"),", and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"not"),".\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"and"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"or"),"\xa0are special forms because they are short-circuiting operators, while\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"not"),"\xa0is a builtin procedure."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"and"),"\xa0takes in any amount of operands and evaluates these operands from left to right until one evaluates to a false-y value. It returns that first false-y value or the value of the last expression if there are no false-y values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"or"),"\xa0also evaluates any number of operands from left to right until one evaluates to a truth-y value. It returns that first truth-y value or the value of the last expression if there are no truth-y values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not"),"\xa0takes in a single operand, evaluates it, and returns its opposite truthiness value.")),(0,i.kt)("p",null,"All Scheme procedures are constructed as lambda procedures."),(0,i.kt)("p",null,"One way to create a procedure is to use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"lambda"),"\xa0special form."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(lambda (<param1> <param2> ...) <body>)")),(0,i.kt)("p",null,"This expression creates a lambda function with the given parameters and body, but does not evaluate the body. As in Python, the body is not evaluated until the function is called and applied to some argument values. The fact that neither the parameters nor the body is evaluated is what makes\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"lambda"),"\xa0a special form."),(0,i.kt)("p",null,"We can also assign the value of an expression to a name with a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"define"),"\xa0special form:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"(define (<name> <param> ...) <body> ...)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"(define <name> (lambda (<param> ...) <body> ...))"))),(0,i.kt)("p",null,"These two expressions are equivalent; the first is a concise version of the second."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Scheme"},"scm> ; Bind lambda function to square \nscm> (define square (lambda (x) (* x x))) square scm> (define (square x) (* x x)) ; Same as above square \nscm> square (lambda (x) (* x x)) \nscm> (square 4) 16\n")),(0,i.kt)("h3",{id:"ifexpressions"},(0,i.kt)("inlineCode",{parentName:"h3"},"if"),"\xa0Expressions"),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0special form allows us to evaluate one of two expressions based on a predicate. It takes in two required arguments and an optional third argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(if <predicate> <if-true> [if-false])\n")),(0,i.kt)("p",null,"The first operand is what's known as a\xa0",(0,i.kt)("strong",{parentName:"p"},"predicate"),"\xa0expression in Scheme, an expression whose value is interpreted as either\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"#t"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"#f"),"."),(0,i.kt)("p",null,"The rules for evaluating an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0special form expression are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Evaluate\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<predicate>"),"."),(0,i.kt)("li",{parentName:"ol"},"If\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<predicate>"),"\xa0evaluates to a truth-y value, evaluate and return the value if the expression\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<if-true>"),". Otherwise, evaluate and return the value of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"[if-false]"),"\xa0if it is provided.")),(0,i.kt)("p",null,"Can you see why this expression is a special form? Compare the rules between a regular call expression and an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression. What is the difference?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Step 2 of evaluating call expressions requires evaluating all of the operands in order. However, an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression will only evaluate two of its operands, the conditional expression and either\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<true-result>"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<false-result>"),". Because we don't evaluate all the operands in an\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression, it is a special form.")),(0,i.kt)("p",null,"Let's compare a Scheme\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression with a Python\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0statement:"),(0,i.kt)("p",null,"Scheme"),(0,i.kt)("p",null,"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scm> (if (> x 3)\n         1\n         2)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">>> if x > 3:\n...     1\n... else:\n...     2\n")),(0,i.kt)("p",null,"Although the code may look the same, what happens when each block of code is evaluated is actually very different. Specifically, the Scheme expression, given that it is an expression, evaluates to some value. However, the Python\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0statement simply directs the flow of the program."),(0,i.kt)("p",null,"Another difference between the two is that it's possible to add more lines of code into the suites of the Python\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0statement, while a Scheme\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression expects just a single expression for each of the true result and the false result."),(0,i.kt)("p",null,"One final difference is that in Scheme, you cannot write\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),"\xa0cases. If you want to have multiple cases using the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expression, you would need multiple branched\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expressions:"),(0,i.kt)("h3",{id:"condexpressions"},(0,i.kt)("inlineCode",{parentName:"h3"},"cond"),"\xa0Expressions"),(0,i.kt)("p",null,"Using nested\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\xa0expressions doesn't seem like a very practical way to take care of multiple cases. Instead, we can use the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),"\xa0special form, a general conditional expression similar to a multi-clause if/elif/else conditional expression in Python.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),"\xa0takes in an arbitrary number of arguments known as\xa0",(0,i.kt)("em",{parentName:"p"},"clauses"),". A clause is written as a list containing two expressions:\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"(<p> <e>)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(cond\n    (<p1> <e1>)\n    (<p2> <e2>)\n    ...\n    (<pn> <en>)\n    [(else <else-expression>)])\n")),(0,i.kt)("p",null,"The first expression in each clause is a predicate. The second expression in the clause is the return expression corresponding to its predicate. The optional\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"else"),"\xa0clause has no predicate."),(0,i.kt)("p",null,"The rules of evaluation are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Evaluate the predicates\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<p1>"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<p2>"),", ...,\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<pn>"),"\xa0in order until you reach one that evaluates to a truth-y value."),(0,i.kt)("li",{parentName:"ol"},"If you reach a predicate that evaluates to a truth-y value, evaluate and return the corresponding expression in the clause."),(0,i.kt)("li",{parentName:"ol"},"If none of the predicates are truth-y and there is an\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"else"),"\xa0clause, evaluate and return\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"<else-expression>"),".")),(0,i.kt)("p",null,"As you can see,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),"\xa0is a special form because it does not evaluate its operands in their entirety; the predicates are evaluated separately from their corresponding return expression. In addition, the expression short circuits upon reaching the first predicate that evaluates to a truth-y value, leaving the remaining predicates unevaluated."),(0,i.kt)("p",null,"The following code is roughly equivalent (see the explanation in the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cs61a.org/lab/lab10/#if-expressions"},"if expression section"),"):"),(0,i.kt)("p",null,"Scheme"),(0,i.kt)("p",null,"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scm> (cond\n        ((> x 0) 'positive)\n        ((< x 0) 'negative)\n        (else 'zero))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">>> if x > 0:\n...     'positive'\n... elif x < 0:\n...     'negative'\n... else:\n...     'zero'\n")))}u.isMDXComponent=!0}}]);