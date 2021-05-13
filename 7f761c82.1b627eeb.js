(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(137)),o=n(138),c={id:"02-configure-salesforce-omnichannel",title:"Configure Salesforce Omnichannel for Testing"},l={unversionedId:"lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",id:"lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",isDocsHomePage:!1,title:"Configure Salesforce Omnichannel for Testing",description:"In order to sync your Connect User status with your Omni-Channel agent",source:"@site/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel.md",slug:"/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",permalink:"/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel.md",version:"current",sidebar:"lightning",previous:{title:"Configuring My Domain in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/01-configuring-my-domain"},next:{title:"Appendix B: Configuring Salesforce as Your Identity Provider",permalink:"/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration"}},s=[{value:"Enable Omnichannel",id:"enable-omnichannel",children:[]},{value:"Configure Presence Statuses",id:"configure-presence-statuses",children:[]},{value:"Configure Profiles to Use the New Statuses",id:"configure-profiles-to-use-the-new-statuses",children:[]},{value:"Add Omni-Channel to the Utility Bar",id:"add-omni-channel-to-the-utility-bar",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to sync your Connect User status with your Omni-Channel agent\nstatus, you must configure Omni-Channel Presence Syncing. This will make\nyour Omni-Channel presence status match your Amazon Connect Agent Status\nand vice versa."),Object(i.b)("h3",{id:"enable-omnichannel"},"Enable Omnichannel"),Object(i.b)("p",null,"First, we must enable omni-channel. Once you enable Omni-Channel, you\nwill have access to the other components in Salesforce that will be\nrequired for Omni-Channel setup."),Object(i.b)("h4",{id:"enable-omnichannel-in-your-salesforce-org"},"Enable Omnichannel in Your Salesforce Org"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(i.b)("strong",{parentName:"p"},"Setup"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Quick Find")," field, enter omni and choose ",Object(i.b)("strong",{parentName:"p"},"Omni-Channel\nSettings")," from the results"))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image230.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Select the checkbox for Enable Omni-Channel and choose Save")),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image231.png")}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Omni-Channel is now enabled.")),Object(i.b)("h3",{id:"configure-presence-statuses"},"Configure Presence Statuses"),Object(i.b)("p",null,"Once you have enabled Omni-Channel, you will need to configure presence\nstatuses to reflect the different presence states that you wish your\nOmni-Channel agents to enter. These do not need to match agent statuses\nin Amazon Connect exactly, but it does make it easier to track what you\nare doing."),Object(i.b)("h4",{id:"add-a-presence-status"},"Add a Presence Status"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(i.b)("strong",{parentName:"p"},"Setup"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Quick Find")," field, enter presence and choose ",Object(i.b)("strong",{parentName:"p"},"Presence\nStatuses")," from the results"))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image147.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the Presence Statuses page, choose New")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Provide a status name, for example Lunch")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Set the Status options appropriately, for example, Busy")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For Online statuses, you will need to provide a channel. Please\nreference the ",Object(i.b)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5"},"Omni-Channel\ndocumentation"),"\nfor details")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose Save"))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image148.png")}),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Repeat as necessary for all desired statuses")),Object(i.b)("h3",{id:"configure-profiles-to-use-the-new-statuses"},"Configure Profiles to Use the New Statuses"),Object(i.b)("p",null,"Before agents can use the statuses that have been configured, you will\nneed to make sure that they have been provided rights to them. This is\ndone by modifying the profiles assigned to your agents."),Object(i.b)("h4",{id:"modify-profiles-to-use-new-statuses"},"Modify Profiles to Use New Statuses"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(i.b)("strong",{parentName:"p"},"Setup"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Quick Find")," field, enter profiles and choose ",Object(i.b)("strong",{parentName:"p"},"Profiles"),"\nfrom the results"))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image149.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the profile assigned to your users")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hover over the Enabled Service Presence Status link and choose Edit"))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image150.png")}),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Select the available status from the left, then choose the Add\nbutton to add it the Enabled Service Presence Statuses field")),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image151.png")}),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select Save")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeat as necessary for other statuses or profiles."))),Object(i.b)("h3",{id:"add-omni-channel-to-the-utility-bar"},"Add Omni-Channel to the Utility Bar"),Object(i.b)("p",null,"To provide agents access to the Omni-Channel tool, you will need to add\nit to the Service Console."),Object(i.b)("h4",{id:"add-the-omni-channel-utility-item"},"Add the Omni-Channel Utility Item"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(i.b)("strong",{parentName:"p"},"Setup"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Quick Find")," box, type ",Object(i.b)("strong",{parentName:"p"},"App Manager"),", then choose ",Object(i.b)("strong",{parentName:"p"},"App\nManager")," from the result list."))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image17.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Expand the drop-down menu associated to Service Console and select\n",Object(i.b)("strong",{parentName:"li"},"Edit"),".")),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image18.png")}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Once the ",Object(i.b)("strong",{parentName:"li"},"Lightning App Builder")," opens, select ",Object(i.b)("strong",{parentName:"li"},"Utility Items"),"\nfrom the left Navigation")),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image19.png")}),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Choose Add Utility Item, then select Omni-Channel")),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image232.png")}),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adjust the order of the utility items as desired and select Save.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Return to the Service Console and refresh your browser.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You should now see the Omni-Channel utility item."))),Object(i.b)("img",{src:Object(o.a)("/img/lightning/image233.png")}))}p.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(22),a=n(139);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},139:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);