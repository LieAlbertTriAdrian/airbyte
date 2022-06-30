"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6125],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},623:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="Snapchat Marketing",p={unversionedId:"integrations/sources/snapchat-marketing",id:"integrations/sources/snapchat-marketing",title:"Snapchat Marketing",description:"Overview",source:"@site/../docs/integrations/sources/snapchat-marketing.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/snapchat-marketing",permalink:"/integrations/sources/snapchat-marketing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/snapchat-marketing.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Smartsheets",permalink:"/integrations/sources/smartsheets"},next:{title:"Snowflake",permalink:"/integrations/sources/snowflake"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Data type mapping",id:"data-type-mapping",level:4},{value:"Features",id:"features",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snapchat-marketing"},"Snapchat Marketing"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Snapchat Marketing source can sync data from the ",(0,r.kt)("a",{parentName:"p",href:"https://marketingapi.snapchat.com/docs/"},"Snapchat Marketing API")),(0,r.kt)("p",null,"Useful links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ads.snapchat.com/"},"Snapchat Ads Manager"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/"},"Snapchat API Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://businesshelp.snapchat.com/s/article/api-faq?language=en_US"},"Snapchat API FAQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://businesshelp.snapchat.com/s/article/get-started?language=en_US"},"Set up Snapchat Business account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://businesshelp.snapchat.com/s/article/api-apply?language=en_US"},"Activate Access to the Snapchat Marketing API"))),(0,r.kt)("h4",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#organizations"},"Organization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-ad-accounts"},"Ad Account")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-creatives"},"Creative")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-media"},"Media")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-campaigns"},"Campaign")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-ads-under-an-ad-account"},"Ad")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-ad-squads-under-an-ad-account"},"Ad Squad")," ","(","Incremental",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#get-all-audience-segments"},"Segments")," ","(","Incremental",")")),(0,r.kt)("h4",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client","_","id - Snapchat account client ID"),(0,r.kt)("li",{parentName:"ul"},"client","_","secret - Snapchat account client secret"),(0,r.kt)("li",{parentName:"ul"},"refresh","_","token - Snapchat account refresh token ")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"To get the required credentials you need to set up a snapchat business account. Follow this guide to set up one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://businesshelp.snapchat.com/s/article/get-started?language=en_US"},"Set up Snapchat Business account"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After that - ",(0,r.kt)("a",{parentName:"p",href:"https://businesshelp.snapchat.com/s/article/api-apply?language=en_US"},"Activate Access to the Snapchat Marketing API"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adding the OAuth2 app requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_url")," parameter. If you have the API endpoint that will handle next OAuth process - write it to this parameter. "),(0,r.kt)("p",{parentName:"li"},"If not - just use some valid url. Here's the discussion about it: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Snap-Kit/bitmoji-sample/issues/3"},"Snapchat Redirect URL - Clarity in documentation please")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On this step you will retrieve ",(0,r.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,r.kt)("strong",{parentName:"p"},"Client Secret")," carefully save ",(0,r.kt)("strong",{parentName:"p"},"Client Secret")," - you cannot view it in UI, only by regenerating"))),(0,r.kt)("p",null,"Snapchat uses OAuth2 authentication, so to get the refresh token the workflow in next: 1. Open the authorize link in a browser: ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.snapchat.com/login/oauth2/authorize?response_type=code&client_id=%7Bclient_id%7D&redirect_uri=%7Bredirect_uri%7D&scope=snapchat-marketing-api&state=wmKkg0TWgppW8PTBZ20sldUmF7hwvU"},"https://accounts.snapchat.com/login/oauth2/authorize?response","_","type=code&client","_","id={client","_","id}&redirect","_","uri={redirect","_","uri}&scope=snapchat-marketing-api&state=wmKkg0TWgppW8PTBZ20sldUmF7hwvU")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login & Authorize via UI")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Locate "code" query parameter in the redirect')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Exchange code for access token + refresh token"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\  \n-d "code={one_time_use_code}" \\  \n-d "client_id={client_id}" \\  \n-d "client_secret={client_secret}"  \\  \n-d "grant_type=authorization_code"  \\  \n-d "redirect_uri=redirect_uri"  \nhttps://accounts.snapchat.com/login/oauth2/access_token\n')))),(0,r.kt)("p",null,"You will receive the API key and refresh token in response. Use this refresh token in the connector specifications.",(0,r.kt)("br",{parentName:"p"}),"\n","The useful link to Authentication process is ",(0,r.kt)("a",{parentName:"p",href:"https://marketingapi.snapchat.com/docs/#authentication"},"here")),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Snapchat Marketing API has limitations to 1000 items per page"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7811"},"7811")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add oauth2.0, fix stream_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5072"},"5072")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix bug with incorrect stream","_","state value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4843"},"4843")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release supporting the Snapchat Marketing API")))))}m.isMDXComponent=!0}}]);