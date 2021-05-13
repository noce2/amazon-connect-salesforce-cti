(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(137)),c=n(138),i={id:"06-postcall-contact-lens-import",title:"Postcall Contact Lens Import"},l={unversionedId:"lightning/04-salesforce-lambdas/06-postcall-contact-lens-import",id:"lightning/04-salesforce-lambdas/06-postcall-contact-lens-import",isDocsHomePage:!1,title:"Postcall Contact Lens Import",description:"Contact Lens for Amazon Connect is a set of machine learning (ML) capabilities integrated into Amazon Connect. With Contact Lens for Amazon Connect, contact center supervisors can better understand the sentiment, trends, and compliance of customer conversions to effectively train agents, replicate successful interactions, and identify crucial company and product feedback.",source:"@site/docs/lightning/04-salesforce-lambdas/06-postcall-contact-lens-import.md",slug:"/lightning/04-salesforce-lambdas/06-postcall-contact-lens-import",permalink:"/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/06-postcall-contact-lens-import",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/06-postcall-contact-lens-import.md",version:"current",sidebar:"lightning",previous:{title:"Contact Trace Record Import",permalink:"/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/05-contact-trace-record-import"},next:{title:"Configuring My Domain in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/01-configuring-my-domain"}},s=[{value:"Contact Lens Import",id:"contact-lens-import",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Contact Lens for Amazon Connect is a set of machine learning (ML) capabilities integrated into Amazon Connect. With Contact Lens for Amazon Connect, contact center supervisors can better understand the sentiment, trends, and compliance of customer conversions to effectively train agents, replicate successful interactions, and identify crucial company and product feedback. "),Object(r.b)("p",null,"Contact Lens are available within your Amazon Connect instance in CTR page, and Contact Lens data are stored in Amazon Connect S3 bucket. With the AWS Serverless Application for Salesforce (Amazon Connect Salesforce Lambda), you can import Contact Lens data into your Salesforce org. "),Object(r.b)("h3",{id:"contact-lens-import"},"Contact Lens Import"),Object(r.b)("p",null,"Before using AWS Serverless Application (Amazon Connect Salesforce Lambda) to import Contact Lens data, you need to enable Contact Lens in Amazon Connect. More information can be found at ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/connect/latest/adminguide/enable-analytics.html"},"https://docs.aws.amazon.com/connect/latest/adminguide/enable-analytics.html"),"."),Object(r.b)("p",null,"Once enabled during the installation of AWS Serverless Application (Amazon Connect Salesforce Lambda), Contact Lens import is activated on a call by call basis by adding a specific contact attribute. This attribute is used during Contact Lens processing to trigger the import task."),Object(r.b)("h4",{id:"creating-the-aws-lambda-trigger-for-the-contact-lens-data"},"Creating the AWS Lambda Trigger for the Contact Lens Data"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make sure you set ",Object(r.b)("strong",{parentName:"p"},"ContactLensImportEnabled")," to ",Object(r.b)("strong",{parentName:"p"},"true")," during the deployment of Amazon Connect Salesforce Lambda application.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the deployment is finished, you need to configure a trigger that invokes a Lambda function when Contact Lens output file is generated and stored in S3.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In a browser tab, login to the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},"AWS Console"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/lambda/home"},"AWS Lambda Console"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the filter field of the AWS Lambda console, enter sfProcessContactLens and press enter to filter the list of functions.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the Lambda that includes sfProcessContactLens in the name.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Expand the Designer section.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select Add trigger"))),Object(r.b)("img",{src:Object(c.a)("/img/lightning/contactlenslambda-1.png")}),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"In Trigger congiguration, select S3 from the dropdown list")),Object(r.b)("img",{src:Object(c.a)("/img/lightning/image188.png")}),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the bucket of your Amazon Connect instace. You can find your Amazon Connect bucket name by clicking on your Amazon Connect instance alias in Amazon Connect console.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change the Event type to PUT.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the Prefix to ",Object(r.b)("strong",{parentName:"p"},"Analysis/Voice/2020"),". Note that this might change as the date changes so you will need to update this on the first day of every new year. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the Suffix to .json")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The trigger configuration should now be similar to the following:"))),Object(r.b)("img",{src:Object(c.a)("/img/lightning/contactlenslambda-2.png")}),Object(r.b)("ol",{start:15},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Add"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If everything has been configured correctly, you should received a success message. "))),Object(r.b)("h4",{id:"enabling-contact-lens-import"},"Enabling Contact Lens Import"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"From the left navigation, choose ",Object(r.b)("strong",{parentName:"p"},"Routing")," then select ",Object(r.b)("strong",{parentName:"p"},"Contact         flows")))),Object(r.b)("img",{src:Object(c.a)("/img/lightning/image201.png")}),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the contact flow that you want to use to enable Contact Lens\nimport.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",Object(r.b)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure the block to set a few contact attributes:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To turn on Contact Lens data import, set ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"contactLensImportEnabled"))," to ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"true")),"."),Object(r.b)("img",{src:Object(c.a)("/img/lightning/contactlensattributes-1.png")})),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For recording import, there are two options: original call recording and redacted call recording. ",Object(r.b)("strong",{parentName:"p"},"Note that you can only import one of the recordings for each contact.")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To turn on original recording import, set ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"postcallRecordingImportEnabled"))," to ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"true"))),Object(r.b)("img",{src:Object(c.a)("/img/lightning/contactlensattributes-2.png")})),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To turn on redacted recording import, set ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"postcallRedactedRecordingImportEnabled"))," to ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"true"))),Object(r.b)("img",{src:Object(c.a)("/img/lightning/contactlensattributes-3.png")})))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",Object(r.b)("strong",{parentName:"p"},"Publish")," the\nflow.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Place a call, connect to your agent, speak for a few moments, then\nend the call. Make sure the agent exits after call work")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Contact Lens data is emitted a couple of minutes after call            completion and the import happens almost immediately."))))}p.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(22),o=n(139);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,c=r.forcePrependBaseUrl,i=void 0!==c&&c,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},139:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);