"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Singer vs Airbyte",s={unversionedId:"archive/faq/differences-with/singer-vs-airbyte",id:"archive/faq/differences-with/singer-vs-airbyte",title:"Singer vs Airbyte",description:"If you want to understand the difference between Airbyte and Singer, you might be interested in 2 articles we wrote:",source:"@site/../docs/archive/faq/differences-with/singer-vs-airbyte.md",sourceDirName:"archive/faq/differences-with",slug:"/archive/faq/differences-with/singer-vs-airbyte",permalink:"/archive/faq/differences-with/singer-vs-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/differences-with/singer-vs-airbyte.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Singer:</strong>",id:"singer",level:2},{value:"<strong>Airbyte:</strong>",id:"airbyte",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"singer-vs-airbyte"},"Singer vs Airbyte"),(0,a.kt)("p",null,"If you want to understand the difference between Airbyte and Singer, you might be interested in 2 articles we wrote:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u201c",(0,a.kt)("a",{parentName:"li",href:"https://airbyte.io/articles/data-engineering-thoughts/airbyte-vs-singer-why-airbyte-is-not-built-on-top-of-singer/"},"Airbyte vs. Singer: Why Airbyte is not built on top of Singer"),".\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c",(0,a.kt)("a",{parentName:"li",href:"https://airbyte.io/articles/data-engineering-thoughts/the-state-of-open-source-data-integration-and-etl/"},"The State of Open-Source Data Integration and ETL"),",\u201d in which we list and compare all ETL-related open-source projects, including Singer and Airbyte. As a summary, here are the differences:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://airbyte.io/wp-content/uploads/2020/10/Landscape-of-open-source-data-integration-platforms-4.png",alt:null})),(0,a.kt)("h2",{id:"singer"},(0,a.kt)("strong",{parentName:"h2"},"Singer:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supports 96 connectors after 4 years.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Increasingly outdated connectors:")," Talend ","(","acquirer of StitchData",")"," seems to have stopped investing in maintaining Singer\u2019s community and connectors. As most connectors see schema changes several times a year, more and more Singer\u2019s taps and targets are not actively maintained and are becoming outdated. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Absence of standardization:")," each connector is its own open-source project. So you never know the quality of a tap or target until you have actually used it. There is no guarantee whatsoever about what you\u2019ll get."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Singer\u2019s connectors are standalone binaries:")," you still need to build everything around to make them work ","(","e.g. UI, configuration validation, state management, normalization, schema migration, monitoring, etc",")",". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No full commitment to open sourcing all connectors,")," as some connectors are only offered by StitchData under a paid plan.  ",(0,a.kt)("em",{parentName:"li"},"*","*"))),(0,a.kt)("h2",{id:"airbyte"},(0,a.kt)("strong",{parentName:"h2"},"Airbyte:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ambition is to support ",(0,a.kt)("strong",{parentName:"li"},"300+ connectors by the end of 2021.")," We already supported about 50 connectors at the end of 2020, just 5 months after its inception. "),(0,a.kt)("li",{parentName:"ul"},"Airbyte\u2019s connectors are ",(0,a.kt)("strong",{parentName:"li"},"usable out of the box through a UI and API"),", with monitoring, scheduling and orchestration. Airbyte was built on the premise that a user, whatever their background, should be able to move data in 2 minutes. Data engineers might want to use raw data and their own transformation processes, or to use Airbyte\u2019s API to include data integration in their workflows. On the other hand, analysts and data scientists might want to use normalized consolidated data in their database or data warehouses. Airbyte supports all these use cases.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"One platform, one project with standards:")," This will help consolidate the developments behind one single project, some standardization and specific data protocol that can benefit all teams and specific cases. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connectors can be built in the language of your choice,")," as Airbyte runs them as Docker containers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airbyte integrates with your data stack and your needs:")," Airflow, Kubernetes, dbt, etc. Its normalization is optional, it gives you a basic version that works out of the box, but also allows you to use dbt to do more complicated things."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A full commitment to the open-source MIT project")," with the promise not to hide some connectors behind paid walls.")),(0,a.kt)("p",null,"Note that Airbyte\u2019s data protocol is compatible with Singer\u2019s. So it is easy to migrate a Singer tap onto Airbyte."))}p.isMDXComponent=!0}}]);