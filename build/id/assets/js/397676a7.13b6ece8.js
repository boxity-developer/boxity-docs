"use strict";(self.webpackChunkboxity_docs=self.webpackChunkboxity_docs||[]).push([[923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6056:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Item Group",sidebar_position:3},l="Issue Center",u={unversionedId:"inventory-control/item-group",id:"inventory-control/item-group",isDocsHomePage:!1,title:"Item Group",description:"This feature allows users to report their issues to developers or their task to each employee that registered in this app. Also, allow users to interact with the reporter and assignee on the column form that has already provide in issue details.",source:"@site/docs/inventory-control/item-group.md",sourceDirName:"inventory-control",slug:"/inventory-control/item-group",permalink:"/id/inventory-control/item-group",editUrl:"https://github.com/bintangjtobing/boxity-docs/docs/inventory-control/item-group.md",version:"current",sidebarPosition:3,frontMatter:{title:"Item Group",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Inventory Item",permalink:"/id/inventory-control/inventory-item"},next:{title:"Stock Group",permalink:"/id/inventory-control/stock-group"}},p=[{value:"Create an issue",id:"create-an-issue",children:[]},{value:"Issue Authorization",id:"issue-authorization",children:[]},{value:"Closed or done issue",id:"closed-or-done-issue",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issue-center"},"Issue Center"),(0,a.kt)("p",null,"This feature allows users to report their issues to developers or their task to each employee that registered in this app. Also, allow users to interact with the reporter and assignee on the column form that has already provide in issue details."),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Each issue will be received by the assignee, where each issue has already got an approved by the supervisor or the head of their division."))),(0,a.kt)("p",null,"Each issue has a each level of priority, the lowest priority is for the lowest issue, not really urgent for this time, but maybe this issue can be important in the future. And highest priority is for urgent needs that have to be fixed as soon as possible."),(0,a.kt)("h2",{id:"create-an-issue"},"Create an issue"),(0,a.kt)("p",null,"Let's say that user want to report his issue to developer, user can create an issue from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Issue")," button that already provide on issue's banner."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996258/docs/issue%20center/Screenshot_2021-08-15_at_09.57.22_king9o.png",alt:"Create issue button"})),(0,a.kt)("p",null,"And when you click the button, it will direct to form issue, that already provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title"),(0,a.kt)("li",{parentName:"ul"},"Issue explanation"),(0,a.kt)("li",{parentName:"ul"},"Assignees"),(0,a.kt)("li",{parentName:"ul"},"Priority")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996351/docs/issue%20center/Screenshot_2021-08-15_at_09.59.06_rbqtx6.png",alt:"Issue create form"})),(0,a.kt)("p",null,"You can fill your title main issue on ",(0,a.kt)("inlineCode",{parentName:"p"},"Title section"),", write your issue explanation on ",(0,a.kt)("inlineCode",{parentName:"p"},"Issue explanation"),", and choose the user that can handle your issue on ",(0,a.kt)("inlineCode",{parentName:"p"},"Assignees")," section, and the last you can choose your priority from the lowest to the highest, it is up to your level of your issue."),(0,a.kt)("p",null,"And when you click ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit")," button, it will store to database, and your issue will shown at the ",(0,a.kt)("inlineCode",{parentName:"p"},"From You")," section at the bottom of the Issue Center page."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996769/docs/issue%20center/Screenshot_2021-08-15_at_10.06.04_c7fnv0.png",alt:"Your issue"})),(0,a.kt)("p",null,"and user just wait for the approval of the head of divison or the supervisor on user's team. "),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When your issue already got the approval, the assignees will receive user's issue and start to do the issue."))),(0,a.kt)("h2",{id:"issue-authorization"},"Issue Authorization"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Role")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Ability")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Head"),(0,a.kt)("td",{parentName:"tr",align:null},"Full Read/Write over all Issues, Auth for approve the issue reported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User"),(0,a.kt)("td",{parentName:"tr",align:null},"Can make the issue, write and discuss the issue on issue reported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HRD & GA"),(0,a.kt)("td",{parentName:"tr",align:null},"Can make the issue, write and discuss the issue on issue reported, also can approve the issue that have a related issue with this auth.")))),(0,a.kt)("h2",{id:"closed-or-done-issue"},"Closed or done issue"),(0,a.kt)("p",null,"User can see their issue closed by themself by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Issue Closed")," on the top of the issue center's page."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628998308/docs/issue%20center/Screenshot_2021-08-15_at_10.31.20_hhilra.png",alt:"Closed issue"})))}d.isMDXComponent=!0}}]);