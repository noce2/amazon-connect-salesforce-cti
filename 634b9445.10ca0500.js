(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||r;return n?c.a.createElement(d,o(o({ref:t},p),{},{components:n})):c.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),c=n(7),r=(n(0),n(133)),i={id:"01-cti-flow-sources-and-events",title:"Appendix A: CTI Flow Sources and Events"},o={unversionedId:"classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events",id:"classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events",isDocsHomePage:!1,title:"Appendix A: CTI Flow Sources and Events",description:"The following sources are defined in the adapter for use with CTI",source:"@site/docs/classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events.md",slug:"/classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/05-appendices/01-appendix-a-cti-flow-sources-and-events/01-cti-flow-sources-and-events.md",version:"current",sidebar:"classic",previous:{title:"Invoking the Amazon Connect Salesforce Lambda in a Contact Flow",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas"},next:{title:"Appendix B: Configuring Salesforce as Your Identity Provider",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/05-appendices/02-appendix-b-configuring-salesforce-as-your-identity-provider/01-configuring-salesforce-as-your-identity-provider"}},l=[],p={toc:l};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following sources are defined in the adapter for use with CTI\nScripts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Initialization"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"onInit -- The CTI adapter has initialized."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Amazon Connect Agent"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onRefresh -- The Connect agent's data was updated.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onStateChange -- The Connect agent's state changed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onRoutable -- The Connect agent became available for contacts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onNotRoutable -- The Connect agent became unavailable for\ncontacts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'onOffline -- The Connect agent\'s state was set to "Offline".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onError -- The Connect agent encountered a system error.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'onAfterCallWork -- The Connect agent entered "After Call Work".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onInit -- The Connect agent has logged in.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Amazon Connect Voice Contact"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onIncoming -- The voice contact is incoming. Note: This event\nfires for queued callback contact only.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnecting -- The voice contact is connecting. Note. This\nevent fires for inbound and outbound contacts except queued\ncallback contacts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnected -- The voice contact is connected.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onEnded -- The voice contact is ended or destroyed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onRefresh -- The voice contact is updated.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onAccepted -- A voice contact is accepted.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onPending -- The voice contact is pending.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onMissed -- The voice contact is / was missed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onDestroy - The voice contact is destroyed.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Amazon Connect Chat Contact"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnecting -- The chat contact is connecting.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnected -- The chat contact is connected.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onEnded -- The chat contact ended.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onRefresh -- The chat contact is updated.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onAccepted -- The chat contact is accepted.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onPending -- The chat contact is pending.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onMessageReceived -- A message was received from the customer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onMessageSent -- A message was sent to the customer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onMissed -- The chat contact was missed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onDestroy - The voice contact is destroyed.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Amazon Connect Task Contact"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onIncoming -- The tasks contact is incoming.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnecting -- The task contact is connecting.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onConnected -- The task contact is connected.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onEnded -- The task contact ended.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onRefresh -- The task contact is updated.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onAccepted -- The task contact is accepted.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onPending -- The voice contact is pending.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onMissed -- The task contact was missed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onDestroy - The voice contact is destroyed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onTransferInitiated -- When the server has initiated the task transfer.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onTransferSucceeded -- When the task transfer has succeeded.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onTransferFailed -- When the task transfer has failed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onTaskExpiring -- Triggers 2 hours before the task expires.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onTaskExpired -- When the task has expired.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Salesforce Agent"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onStateChange -- The Salesforce agent's state changed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onWorkAccepted -- The Salesforce agent accepted work.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onWorkloadChanged -- The Salesforce agent's workload changed.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Salesforce UI"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onClickToDial -- A phone number, within the Salesforce UI, was\nclicked.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onNavigationChange")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"onHvsWorkStart"))))))}b.isMDXComponent=!0}}]);