(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(133)),i=a(134),o={id:"03-contact-attributes-display",title:"Contact Attributes Display"},l={unversionedId:"classic/03-cti-adapter/03-contact-attributes-display",id:"classic/03-cti-adapter/03-contact-attributes-display",isDocsHomePage:!1,title:"Contact Attributes Display",description:"Amazon Connect allows for user defined Contact Attributes to be attached",source:"@site/docs/classic/03-cti-adapter/03-contact-attributes-display.md",slug:"/classic/03-cti-adapter/03-contact-attributes-display",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/03-contact-attributes-display",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/03-contact-attributes-display.md",version:"current",sidebar:"classic",previous:{title:"Omnipresence Agent State Sync",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync"},next:{title:"Call Recording Link for Task",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/04-call-recording-link-for-task"}},s=[],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Amazon Connect allows for user defined Contact Attributes to be attached\nto a phone call within Contact Flows. This can be used to track caller\ninputs, IVR selections, outcomes of an interaction with Amazon Lex, or\ndata lookup from backend systems through Lambda. Some of those values\ncan be useful to be displayed to the agent to speed up data input or\nskip processes such as authenticating the customer."),Object(c.b)("p",null,"Amazon Connect allows data classifications for contact\\'s attributes.\nThe classification engines scans configured metadata and identifies text\nand links attributes to display in Attributes and Links sections\nrespectively."),Object(c.b)("p",null,"To configure a contact attribute for display within embedded CCP:"),Object(c.b)("p",null,'In the top navigation bar, select the "+" icon.'),Object(c.b)("img",{src:Object(i.a)("/img/classic/image22.png")}),Object(c.b)("p",null,'Select "AC CTI Adapters"'),Object(c.b)("p",null,"Create a new adapter. Fill in the CTI Adapter Name, and Amazon Connect\nInstance Alias. For the Call Center Definition Name, type in\nACConsoleAdapter. Select Save."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Log in to your Salesforce Org.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"From the top right corner, select the ",Object(c.b)("strong",{parentName:"p"},"Sales")," application."))),Object(c.b)("img",{src:Object(i.a)("/img/classic/image21.png")}),Object(c.b)("img",{src:Object(i.a)("/img/classic/image23.png")}),"3. Select **AC CTI Adapters** and select your adapter",Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Scroll down to the attributes section and select ",Object(c.b)("strong",{parentName:"li"},"New AC CTI\nAttribute"))),Object(c.b)("img",{src:Object(i.a)("/img/classic/image191.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Provide a ",Object(c.b)("strong",{parentName:"p"},"CTI Attribute Name"),", for example: authenticated")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Provide the ",Object(c.b)("strong",{parentName:"p"},"Label")," name, for example:")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the ",Object(c.b)("strong",{parentName:"p"},"Display")," option, in this case: Key-Value")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select Text as the ",Object(c.b)("strong",{parentName:"p"},"Type"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"For ",Object(c.b)("strong",{parentName:"p"},"Style"),", enter the following: ",Object(c.b)("em",{parentName:"p"},"color: red"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"Format")," field, enter ",Object(c.b)("em",{parentName:"p"},"{{phone_number}}")," to reference the\nincoming contact attribute")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set ",Object(c.b)("strong",{parentName:"p"},"Default Value")," to ",Object(c.b)("em",{parentName:"p"},"unk"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Choose ",Object(c.b)("strong",{parentName:"p"},"Save")))),Object(c.b)("img",{src:Object(i.a)("/img/classic/image192.png")}),Object(c.b)("ol",{start:13},Object(c.b)("li",{parentName:"ol"},"Open the Amazon Connect Contact Flow Designer and drop ",Object(c.b)("em",{parentName:"li"},"Set ",">"," Set\nContact Attributes")," block to your Contact Flow. Set the attribute\nbased on your business logic. For example:")),Object(c.b)("img",{src:Object(i.a)("/img/classic/image193.png")}),Object(c.b)("ol",{start:14},Object(c.b)("li",{parentName:"ol"},"Place and inbound call and ask to speak with an agent. Accept the\nincoming call and check if Contact Attribute is displayed in the\nembedded CCP.")),Object(c.b)("img",{src:Object(i.a)("/img/classic/image194.png")}),Object(c.b)("p",null,"There are additional features that can be used to further customize CTI\nattributes."),Object(c.b)("img",{src:Object(i.a)("/img/classic/image195.png")}),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"In the Sales application, navigate to your CTI Adapter your CTI Adapter")),Object(c.b)("img",{src:Object(i.a)("/img/classic/image196.png")}),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Scroll down to the Features section. Select ",Object(c.b)("strong",{parentName:"p"},"New AC Feature"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set the AC Feature Name to ",Object(c.b)("strong",{parentName:"p"},"FEATURE_CTI_ATTRIBUTES"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Fill the value text box to contain the following settings:"),Object(c.b)("p",{parentName:"li"},"a.  ",Object(c.b)("strong",{parentName:"p"},"ShowAttributesIfEmpty")," (Boolean, default true): show\nattributes text box when contact has no attributes"),Object(c.b)("p",{parentName:"li"},"b. ",Object(c.b)("strong",{parentName:"p"},"ShowAllAttributes")," (Boolean, default false): show all attributes, including attributes with no value"))),Object(c.b)("img",{src:Object(i.a)("/img/classic/image197.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Select ",Object(c.b)("strong",{parentName:"li"},"Save"))))}p.isMDXComponent=!0},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(22),r=a(135);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},135:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);