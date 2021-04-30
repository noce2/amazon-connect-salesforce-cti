(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(22),o=n(135);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,a=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},135:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(133)),c=n(134),a={id:"09-recording-controls",title:"Recording Controls"},l={unversionedId:"lightning/03-cti-adapter/09-recording-controls",id:"lightning/03-cti-adapter/09-recording-controls",isDocsHomePage:!1,title:"Recording Controls",description:"Recording Controls panel in the CCP Overlay allows your agents to control the recording behavior of the call.",source:"@site/docs/lightning/03-cti-adapter/09-recording-controls.md",slug:"/lightning/03-cti-adapter/09-recording-controls",permalink:"/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/09-recording-controls",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/09-recording-controls.md",version:"current",sidebar:"lightning",previous:{title:"CTI Actions",permalink:"/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/08-cti-actions"},next:{title:"Voicemail Drops",permalink:"/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/10-voicemail-drops"}},s=[{value:"Setup",id:"setup",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Recording Controls panel in the CCP Overlay allows your agents to control the recording behavior of the call."),Object(i.b)("img",{src:Object(c.a)("/img/shared/ccp-overlay-5-recording.png")}),Object(i.b)("p",null,"This can be useful when you don't want to record every call, and give the agent the ability to pause and resume a recording."),Object(i.b)("p",null,"Note that once a recording is stopped, it cannot be restarted. After starting a recording, you should use pause/resume button to control it."),Object(i.b)("p",null,"This panel is disabled by default. You can enable it by adding ",Object(i.b)("inlineCode",{parentName:"p"},"FEATURE_RECORDING_PANEL")," feature flag to your CTI Adapter, with the setting ",Object(i.b)("inlineCode",{parentName:"p"},"Enabled:true"),"."),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"First, create an IAM user and give it the managed policy ",Object(i.b)("inlineCode",{parentName:"p"},"AmazonConnect_FullAccess"),"."),Object(i.b)("img",{src:Object(c.a)("/img/shared/ccp-overlay-7-iam.png")}),Object(i.b)("p",null,'Copy the access key and secret of this user (from the "Security credentials" tab.) Next, go to your Salesforce instance Setup section. Search for Named Credentials in the left sidebar, and create a new credential named ',Object(i.b)("inlineCode",{parentName:"p"},"AmazonConnectAPI"),". (The name and the label should be identical.)"),Object(i.b)("img",{src:Object(c.a)("/img/shared/ccp-overlay-6-named-credentials.png")}),Object(i.b)("p",null,"Fill in ",Object(i.b)("inlineCode",{parentName:"p"},"https://connect.us-east-1.amazonaws.com"),' as the url. For Identity Type, select "Named Principal" and for "Authentication Protocol" select "AWS Signature Version 4." Then fill in the "AWS Access Key Id" and "AWS Access Secret" fields with your IAM user credentials. And for AWS Region, use the region of your Connect instance. And for the AWS Service, fill in ',Object(i.b)("inlineCode",{parentName:"p"},"connect"),"."))}d.isMDXComponent=!0}}]);