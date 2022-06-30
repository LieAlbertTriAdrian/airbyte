"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2302],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=d(a),c=r,f=g["".concat(s,".").concat(c)]||g[c]||m[c]||i;return a?n.createElement(f,l(l({ref:e},p),{},{components:a})):n.createElement(f,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6210:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="End-to-End Testing Destination",o={unversionedId:"integrations/destinations/e2e-test",id:"integrations/destinations/e2e-test",title:"End-to-End Testing Destination",description:"This destination is for testing of Airbyte connections. It can be set up as a source message logger, a /dev/null, or to mimic specific behaviors (e.g. exception during the sync). Please use it with discretion. This destination may log your data, and expose sensitive information.",source:"@site/../docs/integrations/destinations/e2e-test.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/e2e-test",permalink:"/integrations/destinations/e2e-test",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/e2e-test.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"DynamoDB",permalink:"/integrations/destinations/dynamodb"},next:{title:"Elasticsearch",permalink:"/integrations/destinations/elasticsearch"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Mode",id:"mode",level:2},{value:"Silent (<code>/dev/null</code>)",id:"silent-devnull",level:3},{value:"Logging",id:"logging",level:3},{value:"Throttling",id:"throttling",level:3},{value:"Failing",id:"failing",level:3},{value:"CHANGELOG",id:"changelog",level:2}],p={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-testing-destination"},"End-to-End Testing Destination"),(0,r.kt)("p",null,"This destination is for testing of Airbyte connections. It can be set up as a source message logger, a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/null"),", or to mimic specific behaviors (e.g. exception during the sync). Please use it with discretion. This destination may log your data, and expose sensitive information."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"mode"},"Mode"),(0,r.kt)("h3",{id:"silent-devnull"},"Silent (",(0,r.kt)("inlineCode",{parentName:"h3"},"/dev/null"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is the only mode allowed on Airbyte Cloud.")),(0,r.kt)("p",null,"This mode works as ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/null"),". It does nothing about any data from the source connector. This is usually only useful for performance testing of the source connector."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"This mode logs the data from the source connector. It will log at most 1,000 data entries."),(0,r.kt)("p",null,"There are the different logging modes to choose from:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"First N entries"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log the first N number of data entries for each data stream."),(0,r.kt)("td",{parentName:"tr",align:"left"},"N: how many entries to log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Every N-th entry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log every N-th entry for each data stream. When N=1, it will log every entry. When N=2, it will log every other entry. Etc."),(0,r.kt)("td",{parentName:"tr",align:"left"},"N: the N-th entry to log. Max entry count: max number of entries to log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Random sampling"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log a random percentage of the entries for each data stream."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sampling ratio: a number in range of ",(0,r.kt)("inlineCode",{parentName:"td"},"[0, 1]"),". Optional seed: default to system epoch time. Max entry count: max number of entries to log.")))),(0,r.kt)("h3",{id:"throttling"},"Throttling"),(0,r.kt)("p",null,"This mode mimics a slow data sync. You can specify the time (in millisecond) of delay between each message from the source is processed."),(0,r.kt)("h3",{id:"failing"},"Failing"),(0,r.kt)("p",null,"This mode throws an exception after receiving a configurable number of messages."),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("p",null,"The OSS and Cloud variants have the same version number starting from version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2.2"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9745"},"#","9745")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integrate with Sentry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8905"},"#","8824")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix documentation URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-16"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8824"},"#","8824")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add multiple logging modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-05-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3290"},"#","3290")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create initial version.")))))}m.isMDXComponent=!0}}]);