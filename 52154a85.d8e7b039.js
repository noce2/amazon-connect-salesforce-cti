(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(22),i=n(135);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},135:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(133)),o=n(134),c={id:"04-cti-adapter-installation-troubleshooting",title:"CTI Adapter Installation Troubleshooting and Common Issues"},s={unversionedId:"classic/02-installation/04-cti-adapter-installation-troubleshooting",id:"classic/02-installation/04-cti-adapter-installation-troubleshooting",isDocsHomePage:!1,title:"CTI Adapter Installation Troubleshooting and Common Issues",description:"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes",source:"@site/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting.md",slug:"/classic/02-installation/04-cti-adapter-installation-troubleshooting",permalink:"/amazon-connect-salesforce-cti/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting.md",version:"current",sidebar:"classic",previous:{title:"Upgrading from an Earlier Version",permalink:"/amazon-connect-salesforce-cti/docs/classic/02-installation/03-upgrading-from-an-earlier-version"},next:{title:"CTI Adapter Configuration",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/01-cti-adapter-configuration"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"i-upgraded-my-adapter-to-v510-but-i-cannot-see-the-ccp-config-changes"},"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes"),Object(r.b)("p",null,"There is a bug with Salesforce that doesn't update a page layout when you upgrade a package. To fix this, go to Setup and search for ",Object(r.b)("inlineCode",{parentName:"p"},"Objects")," and click the option under ",Object(r.b)("inlineCode",{parentName:"p"},"Create"),". Once you're on the Custom Object page, search for the ",Object(r.b)("inlineCode",{parentName:"p"},"AC CTI Adapter")," object and click on it. Then go into ",Object(r.b)("inlineCode",{parentName:"p"},"Page Layouts")," and click ",Object(r.b)("inlineCode",{parentName:"p"},"Edit")," on the layout you are using (Typically ",Object(r.b)("inlineCode",{parentName:"p"},"AC CTI Adapter Layout - August 2020"),").  Then, drag and drop the ",Object(r.b)("inlineCode",{parentName:"p"},"Audio Device Settings")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Page Layout Settings")," into the desired spot on the page. Finally hit save."),Object(r.b)("img",{src:Object(o.a)("/img/lightning/troubleshooting2.png")}),Object(r.b)("h4",{id:"error-refused-to-run-the-javascript-url-because-it-violates-the-following-content-security-policy-directive"},"Error \u201crefused to run the JavaScript URL because it violates the following Content Security Policy directive...\u201d"),Object(r.b)("p",null,"This is an allowlisting issue, please review the installation and ensure that both URLs are properly allowlisted."),Object(r.b)("h4",{id:"error-refused-to-frame-visualforce-page"},"Error \u201crefused to frame\u201d Visualforce page"),Object(r.b)("img",{src:Object(o.a)("/img/classic/troubleshooting0.png")}),Object(r.b)("p",null,"This can happen if the customer has checked \u201cEnable clickjack protection\u201d on Salesforce session settings. The solution is to uncheck that. "),Object(r.b)("img",{src:Object(o.a)("/img/classic/troubleshooting1.png")}),Object(r.b)("h4",{id:"i-upgraded-my-adapter-to-v5-but-i-dont-see-the-cti-flows-feature"},"I upgraded my adapter to v5, but I don\u2019t see the CTI Flows feature."),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"/docs/classic/02-installation/03-upgrading-from-an-earlier-version"},"Upgrading from an Earlier Version")," section of the installation guide."),Object(r.b)("h4",{id:"i-upgraded-my-adapter-from-v3-to-v5-and-we-lost-some-screenpop-functionality"},"I upgraded my adapter from v3 to v5 and we lost some screenpop functionality."),Object(r.b)("p",null,"All screenpop functionality native to v3 now needs to be recreated using CTI Flows. Please review the ",Object(r.b)("a",{parentName:"p",href:"/docs/classic/05-appendices/03-appendix-c-cti-flow-examples/01-cti-flow-examples"},"CTI Flow Examples")," for more details, all screenpop functionality from v3 has been recreated."),Object(r.b)("h4",{id:"certain-picklists-are-missing-picklist-items"},"Certain picklists are missing picklist items."),Object(r.b)("p",null,"When upgrading from a version of the package to a higher version of the package in which new picklist items were added to a picklist, those new picklist items won't be installed. This is a ",Object(r.b)("a",{parentName:"p",href:"https://salesforce.stackexchange.com/questions/207367/i-have-a-managed-package-if-i-add-values-a-picklist-will-my-customers-get-it-o"},"known Salesforce issue"),"."),Object(r.b)("h4",{id:"i-upgraded-my-adapter-to-v510-but-i-cannot-see-the-ccp-config-changes-1"},"I upgraded my adapter to v5.10, but I cannot see the CCP Config changes"),Object(r.b)("p",null,"There is a bug with Salesforce that doesn't update a page layout when you upgrade a package. To fix this, go to Setup and search for ",Object(r.b)("inlineCode",{parentName:"p"},"Objects")," and click the option under ",Object(r.b)("inlineCode",{parentName:"p"},"Create"),". Once you're on the Custom Object page, search for the ",Object(r.b)("inlineCode",{parentName:"p"},"AC CTI Adapter")," object and click on it. Then go into ",Object(r.b)("inlineCode",{parentName:"p"},"Page Layouts")," and click ",Object(r.b)("inlineCode",{parentName:"p"},"Edit")," on the layout you are using (Typically ",Object(r.b)("inlineCode",{parentName:"p"},"AC CTI Adapter Layout - August 2020"),"). Then, drag and drop the ",Object(r.b)("inlineCode",{parentName:"p"},"Audio Device Settings")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Page Layout Settings")," into the desired spot on the page. Finally hit save."),Object(r.b)("img",{src:Object(o.a)("/img/classic/troubleshooting2.png")}))}u.isMDXComponent=!0}}]);