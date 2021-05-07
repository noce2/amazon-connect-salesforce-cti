(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),i=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=i(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=i(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||c;return n?o.a.createElement(m,p(p({ref:t},l),{},{components:n})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<c;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return i}));var a=n(3),o=n(7),c=(n(0),n(133)),r={id:"01-cti-flow-examples",title:"Appendix C: CTI Flow Examples"},p={unversionedId:"classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples",id:"classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples",isDocsHomePage:!1,title:"Appendix C: CTI Flow Examples",description:"This appendix includes samples scripts that provide different",source:"@site/docs/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples.md",slug:"/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples",permalink:"/amazon-connect-salesforce-cti/docs/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples.md",version:"current",sidebar:"classic",previous:{title:"Appendix B: Configuring Salesforce as Your Identity Provider",permalink:"/amazon-connect-salesforce-cti/docs/classic/05-appendices/02-appendix-b-configuring-salesforce-as-your-identity-provider/01-configuring-salesforce-as-your-identity-provider"},next:{title:"Appendix D: CTI Flow Blocks",permalink:"/amazon-connect-salesforce-cti/docs/classic/05-appendices/04-appendix-d-cti-flow-blocks/01-cti-flow-blocks"}},s=[{value:"Voice Contact Screenpop (Legacy Adapter Support)",id:"voice-contact-screenpop-legacy-adapter-support",children:[]},{value:"Chat Contact Screenpop",id:"chat-contact-screenpop",children:[]},{value:"Click-to-Dial",id:"click-to-dial",children:[]},{value:"Screen Pop on Customer Phone Number",id:"screen-pop-on-customer-phone-number",children:[]},{value:"Screen Pop a Case on Contact Attribute Data (if it exists) or Pop a New Case (if it does not)",id:"screen-pop-a-case-on-contact-attribute-data-if-it-exists-or-pop-a-new-case-if-it-does-not",children:[]},{value:"Create a Task (Call Activity) and Pop That Task",id:"create-a-task-call-activity-and-pop-that-task",children:[]},{value:"Screenpop on Customer Email Address (in contact attribute data)",id:"screenpop-on-customer-email-address-in-contact-attribute-data",children:[]},{value:"Create a Task (Call Activity) and Pop That Task",id:"create-a-task-call-activity-and-pop-that-task-1",children:[]},{value:"Default CTI Flows",id:"default-cti-flows",children:[]}],l={toc:s};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This appendix includes samples scripts that provide different\nfunctionality depending on the event source."),Object(c.b)("h3",{id:"voice-contact-screenpop-legacy-adapter-support"},"Voice Contact Screenpop (Legacy Adapter Support)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Voice Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/01-legacy.json"},"Download")),Object(c.b)("h3",{id:"chat-contact-screenpop"},"Chat Contact Screenpop"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Chat Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/02-chat-contact-screenpop.json"},"Download")),Object(c.b)("h3",{id:"click-to-dial"},"Click-to-Dial"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Chat Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onClickToDial"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/03-click-to-dial.json"},"Download")),Object(c.b)("h3",{id:"screen-pop-on-customer-phone-number"},"Screen Pop on Customer Phone Number"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Voice Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/06-screenpop-on-customer.json"},"Download")),Object(c.b)("h3",{id:"screen-pop-a-case-on-contact-attribute-data-if-it-exists-or-pop-a-new-case-if-it-does-not"},"Screen Pop a Case on Contact Attribute Data (if it exists) or Pop a New Case (if it does not)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Voice Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/07-screenpop-case.json"},"Download")),Object(c.b)("h3",{id:"create-a-task-call-activity-and-pop-that-task"},"Create a Task (Call Activity) and Pop That Task"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Voice Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/08-create-task.json"},"Download")),Object(c.b)("h3",{id:"screenpop-on-customer-email-address-in-contact-attribute-data"},"Screenpop on Customer Email Address (in contact attribute data)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Chat Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/09-screenpop-cust-email.json"},"Download")),Object(c.b)("h3",{id:"create-a-task-call-activity-and-pop-that-task-1"},"Create a Task (Call Activity) and Pop That Task"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Source"),": Amazon Connect Chat Contact"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Event"),": onConnecting"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/Sample+Flows/08-create-task.json"},"Download")),Object(c.b)("h3",{id:"default-cti-flows"},"Default CTI Flows"),Object(c.b)("p",null,"The following zip file includes default flows, which are automatically\nadded and activated on new installations of the package. However, if you\nare upgrading from an earlier version you may need to replace your\nlegacy script with the new flow."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://connect-blogs.s3.amazonaws.com/Amazon+Connect+Salesforce+CTI+Adapter/Assets/DefaultFlows-json.zip"},"Download")))}i.isMDXComponent=!0}}]);