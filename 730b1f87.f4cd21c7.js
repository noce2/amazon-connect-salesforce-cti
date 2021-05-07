(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var c=a(0),n=a.n(c);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=c,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return a?n.a.createElement(g,o(o({ref:t},s),{},{components:a})):n.a.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var c=a(22),n=a(135);function r(){var e=Object(c.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,c){var r=void 0===c?{}:c,i=r.forcePrependBaseUrl,o=void 0!==i&&i,l=r.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},135:function(e,t,a){"use strict";function c(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!c(e)}a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return n}))},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var c=a(3),n=a(7),r=(a(0),a(133)),i=a(134),o={id:"05-call-display-account-page",title:"Call Display on the Account Page"},l={unversionedId:"classic/03-cti-adapter/05-call-display-account-page",id:"classic/03-cti-adapter/05-call-display-account-page",isDocsHomePage:!1,title:"Call Display on the Account Page",description:"The Adapter comes with a Visualforce Page that displays all phone calls",source:"@site/docs/classic/03-cti-adapter/05-call-display-account-page.md",slug:"/classic/03-cti-adapter/05-call-display-account-page",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/05-call-display-account-page",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/05-call-display-account-page.md",version:"current",sidebar:"classic",previous:{title:"Call Recording Link for Task",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/04-call-recording-link-for-task"},next:{title:"Outbound Campaign Calls",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/06-outbound-campaign-calls"}},s=[],b={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Adapter comes with a Visualforce Page that displays all phone calls\nmade using Amazon Connect for an Account. It differs from thee standard\nActivity Related List because if filters all other activities out and\nfocuses on the phone calls only."),Object(r.b)("p",null,'To show the recent calls on the Account details page, add the\n"ACSFCCP_CallLogging_View" Visualforce Page to the Account Page layout.\nIt is recommended to create a dedicated section with a 1-Column layout\nfor this purpose, and to make the Visualforce Page scrollable.'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in to your Salesforce Org")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to ",Object(r.b)("strong",{parentName:"p"},"Setup")," then in type ",Object(r.b)("em",{parentName:"p"},"Object Manager")," in Quick Find"))),Object(r.b)("img",{src:Object(i.a)("/img/classic/image203.png")}),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},'Click on the "Account" object')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image208.png")}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},'Click on the "Page Layouts"')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image209.png")}),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},'Click on the "Account layout" and the layout designer will open')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image210.png")}),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},'From the left-hand side menu, select "Fields"')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image211.png")}),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},'Drag and Drop "Section" item to add a new section on the layout')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image212.png")}),Object(r.b)("img",{src:Object(i.a)("/img/classic/image213.png")}),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},'On the pop-up form, set Section Name ("Call Logging View") and 1-Column Layout')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image214.png")}),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},'Click "OK"')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image215.png")}),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},"From the left-hand side menu, select Visualforce Pages:")),Object(r.b)("img",{src:Object(i.a)("/img/classic/image216.png")}),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},'Drag and drop "ACSFCCP_CallLogging_View" item to the "Call Logging View" section')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image217.png")}),Object(r.b)("img",{src:Object(i.a)("/img/classic/image218.png")}),Object(r.b)("img",{src:Object(i.a)("/img/classic/image219.png")}),Object(r.b)("ol",{start:12},Object(r.b)("li",{parentName:"ol"},'Hover the newly added component and click on the "Setting" icon')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image220.png")}),Object(r.b)("p",null,'Check "Show scrollbars" and click "OK"'),Object(r.b)("img",{src:Object(i.a)("/img/classic/image221.png")}),Object(r.b)("ol",{start:13},Object(r.b)("li",{parentName:"ol"},'Click the "Save" button in the top-left corner')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image222.png")}),Object(r.b)("ol",{start:14},Object(r.b)("li",{parentName:"ol"},'Make some phone calls, ask to speak with an agent. Open the Account, then select "Details" tab')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image223.png")}),Object(r.b)("ol",{start:15},Object(r.b)("li",{parentName:"ol"},'Scroll down the Details page until you see the "Call Logging View" section')),Object(r.b)("img",{src:Object(i.a)("/img/classic/image224.png")}),Object(r.b)("p",null,"For more information on how to add a Visualforce Page to a Page layout,\nplease visit:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en/modules/visualforce_mobile_salesforce1/units/visualforce_mobile%20_salesforce1_layouts_cards"},"https://trailhead.salesforce.com/en/modules/visualforce_mobile_salesforce1/units/visualforce_mobile_salesforce1_layouts_cards")))}p.isMDXComponent=!0}}]);