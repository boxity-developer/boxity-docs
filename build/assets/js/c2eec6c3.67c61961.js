"use strict";(self.webpackChunkboxity_docs=self.webpackChunkboxity_docs||[]).push([[681],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),s=["components"],o={title:"Purchase Order",sidebar_position:3},u="Issue Center",l={unversionedId:"receiving-putaway/purchase-order",id:"receiving-putaway/purchase-order",isDocsHomePage:!1,title:"Purchase Order",description:"This feature allows users to report their issues to developers or their task to each employee that registered in this app. Also, allow users to interact with the reporter and assignee on the column form that has already provide in issue details.",source:"@site/docs/receiving-putaway/purchase-order.md",sourceDirName:"receiving-putaway",slug:"/receiving-putaway/purchase-order",permalink:"/receiving-putaway/purchase-order",editUrl:"https://github.com/bintangjtobing/boxity-docs/docs/receiving-putaway/purchase-order.md",version:"current",sidebarPosition:3,frontMatter:{title:"Purchase Order",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Purchase Invoice",permalink:"/receiving-putaway/purchase-invoice"},next:{title:"Purchase Request",permalink:"/receiving-putaway/purchase-request"}},p=[{value:"Create an issue",id:"create-an-issue",children:[]},{value:"Issue Authorization",id:"issue-authorization",children:[]},{value:"Closed or done issue",id:"closed-or-done-issue",children:[]}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issue-center"},"Issue Center"),(0,i.kt)("p",null,"This feature allows users to report their issues to developers or their task to each employee that registered in this app. Also, allow users to interact with the reporter and assignee on the column form that has already provide in issue details."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each issue will be received by the assignee, where each issue has already got an approved by the supervisor or the head of their division."))),(0,i.kt)("p",null,"Each issue has a each level of priority, the lowest priority is for the lowest issue, not really urgent for this time, but maybe this issue can be important in the future. And highest priority is for urgent needs that have to be fixed as soon as possible."),(0,i.kt)("h2",{id:"create-an-issue"},"Create an issue"),(0,i.kt)("p",null,"Let's say that user want to report his issue to developer, user can create an issue from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Issue")," button that already provide on issue's banner."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996258/docs/issue%20center/Screenshot_2021-08-15_at_09.57.22_king9o.png",alt:"Create issue button"})),(0,i.kt)("p",null,"And when you click the button, it will direct to form issue, that already provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Issue explanation"),(0,i.kt)("li",{parentName:"ul"},"Assignees"),(0,i.kt)("li",{parentName:"ul"},"Priority")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996351/docs/issue%20center/Screenshot_2021-08-15_at_09.59.06_rbqtx6.png",alt:"Issue create form"})),(0,i.kt)("p",null,"You can fill your title main issue on ",(0,i.kt)("inlineCode",{parentName:"p"},"Title section"),", write your issue explanation on ",(0,i.kt)("inlineCode",{parentName:"p"},"Issue explanation"),", and choose the user that can handle your issue on ",(0,i.kt)("inlineCode",{parentName:"p"},"Assignees")," section, and the last you can choose your priority from the lowest to the highest, it is up to your level of your issue."),(0,i.kt)("p",null,"And when you click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," button, it will store to database, and your issue will shown at the ",(0,i.kt)("inlineCode",{parentName:"p"},"From You")," section at the bottom of the Issue Center page."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996769/docs/issue%20center/Screenshot_2021-08-15_at_10.06.04_c7fnv0.png",alt:"Your issue"})),(0,i.kt)("p",null,"and user just wait for the approval of the head of divison or the supervisor on user's team. "),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When your issue already got the approval, the assignees will receive user's issue and start to do the issue."))),(0,i.kt)("h2",{id:"issue-authorization"},"Issue Authorization"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Role")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Ability")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Head"),(0,i.kt)("td",{parentName:"tr",align:null},"Full Read/Write over all Issues, Auth for approve the issue reported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User"),(0,i.kt)("td",{parentName:"tr",align:null},"Can make the issue, write and discuss the issue on issue reported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HRD & GA"),(0,i.kt)("td",{parentName:"tr",align:null},"Can make the issue, write and discuss the issue on issue reported, also can approve the issue that have a related issue with this auth.")))),(0,i.kt)("h2",{id:"closed-or-done-issue"},"Closed or done issue"),(0,i.kt)("p",null,"User can see their issue closed by themself by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Issue Closed")," on the top of the issue center's page."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628998308/docs/issue%20center/Screenshot_2021-08-15_at_10.31.20_hhilra.png",alt:"Closed issue"})))}d.isMDXComponent=!0}}]);