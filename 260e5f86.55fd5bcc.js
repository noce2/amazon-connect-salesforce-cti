(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),g=r,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||c;return a?n.a.createElement(d,o(o({ref:t},l),{},{components:a})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(22),n=a(135);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+b:b}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},135:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(133)),i=a(134),o={id:"04-call-recording-link-for-task",title:"Call Recording Link for Task"},s={unversionedId:"classic/03-cti-adapter/04-call-recording-link-for-task",id:"classic/03-cti-adapter/04-call-recording-link-for-task",isDocsHomePage:!1,title:"Call Recording Link for Task",description:"The Adapter comes with a Visualforce component that provides users with",source:"@site/docs/classic/03-cti-adapter/04-call-recording-link-for-task.md",slug:"/classic/03-cti-adapter/04-call-recording-link-for-task",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/04-call-recording-link-for-task",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/04-call-recording-link-for-task.md",version:"current",sidebar:"classic",previous:{title:"Contact Attributes Display",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/03-contact-attributes-display"},next:{title:"Call Display on the Account Page",permalink:"/amazon-connect-salesforce-cti-staging/docs/classic/03-cti-adapter/05-call-display-account-page"}},l=[],b={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Adapter comes with a Visualforce component that provides users with\nthe ability to download a call recording created within Amazon Connect\nfrom a Salesforce page."),Object(c.b)("h5",{id:"cloudformation-template"},"Cloudformation Template"),Object(c.b)("p",null,"To make sure that the AWS resources are set up, make sure that the\n",Object(c.b)("em",{parentName:"p"},"PostcallRecordingImportEnabled")," parameter is set to true in your\nCloudformation stack:"),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming0.png")}),Object(c.b)("h5",{id:"aws-side-setup"},"AWS Side Setup"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"See ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html"},"these steps"),". Follow the sections ",Object(c.b)("em",{parentName:"p"},"Creating key pairs for your signers"),", and ",Object(c.b)("em",{parentName:"p"},"Adding a signer to a distribution"),".\nMake sure to record the ",Object(c.b)("strong",{parentName:"p"},"public key ID"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Copy and paste the contents of the private key .pem file into a text editor. Replace every newline character with a space, and then delete the last character. This is most easily done using a "find and replace" feature in your text editor.\nThe resulting string of text should resemble the following:'))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY----- (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (under 64 character string) -----END RSA PRIVATE KEY-----\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Navigate to the "Secrets Manager" service. Select the ',Object(c.b)("strong",{parentName:"p"},"SalesforceCredentials"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Under the "Secret value" tab, select "Retrieve secret value" and then "Edit".')),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"For the ",Object(c.b)("strong",{parentName:"p"},"CloudFrontPrivateKey")," field, copy and paste the modified contents of the private key .pem file. For the ",Object(c.b)("strong",{parentName:"p"},"CloudFrontAccessKeyID")," field, copy and paste the ",Object(c.b)("strong",{parentName:"p"},"Access Key Id")," you recorded above. Your Secrets Manager Secret should look like the following:"))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming1.png")}),Object(c.b)("p",null,'Please note that your secret may also be formatted stored as a "Secret key/value" secret rather than a "Plaintext" secret; both secret types are valid.'),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},'Navigate to your Salesforce instance. Navigate to setup, then search for "Visualforce pages."')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming2.png")}),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the ",Object(c.b)("strong",{parentName:"p"},"ACSFCCP_CallRecordingTask"),' visualforce page, and select "preview." Copy the url of the opened page up until ',Object(c.b)("inlineCode",{parentName:"p"},".com"),". Make sure not to include any characters after ",Object(c.b)("inlineCode",{parentName:"p"},".com"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Navigate back to aws, to the s3 bucket where your audio recording files are stored. This s3 bucket should be the same bucket as the ",Object(c.b)("strong",{parentName:"p"},"ConnectRecordingS3BucketName")," parameter to the serverless application.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the bucket details, select the ",Object(c.b)("strong",{parentName:"p"},"Permissions")," tab and then the ",Object(c.b)("strong",{parentName:"p"},"CORS configuration")," tab and paste the following. Replace the AllowedOrigin with the url copied in step 9."))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "AllowedHeaders": ["Access-Control-Allow-Origin"],\n    "AllowedMethods": ["GET"],\n    "AllowedOrigins": ["{url copied in step 9}"],\n    "ExposeHeaders": []\n  }\n]\n')),Object(c.b)("img",{src:Object(i.a)("/img/lightning/image271.png")}),Object(c.b)("ol",{start:10},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select Save")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Navigate to the "IAM" aws service. Select ',Object(c.b)("strong",{parentName:"p"},"Add User"),"."))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming4.png")}),Object(c.b)("ol",{start:12},Object(c.b)("li",{parentName:"ol"},"Give your IAM user a name, like ",Object(c.b)("strong",{parentName:"li"},"sfInvokeGenerateAudioRecordingStreamingURLIAMUser"),'. For the "AWS Access Type", select ',Object(c.b)("strong",{parentName:"li"},"Programmatic access"),".")),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming5.png")}),Object(c.b)("ol",{start:13},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Select Next, then select "Attach existing policies directly." Search for ',Object(c.b)("strong",{parentName:"p"},"invokeSfGenerateAudioRecordingStreamingURLPolicy")," and select it.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create the user, then copy down the ",Object(c.b)("strong",{parentName:"p"},"Access key ID")," and the ",Object(c.b)("strong",{parentName:"p"},"Secret access key"),". These keys will be used in the next section."))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming6.png")}),Object(c.b)("ol",{start:15},Object(c.b)("li",{parentName:"ol"},'Navigate to the "Lambda" aws service. Search for term "sfgenerate" and copy down the full name of the sfGenerateAudioRecordingStreaming lambda. This will be used in the next section.')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming7.png")}),Object(c.b)("ol",{start:16},Object(c.b)("li",{parentName:"ol"},'Navigate back to the "Lambda" aws service main page and navigate to the ',Object(c.b)("strong",{parentName:"li"},"us-east-1 region"),". Select ",Object(c.b)("strong",{parentName:"li"},"create function"),".")),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming8.png")}),Object(c.b)("ol",{start:17},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter a function name, like ",Object(c.b)("strong",{parentName:"p"},"sfSig4RequestToS3"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"change default execution role"),", and ",Object(c.b)("strong",{parentName:"p"},"use an existing role"),". Search for and select ",Object(c.b)("em",{parentName:"p"},"sfSig4RequestToS3Role"),"."))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming9.png")}),Object(c.b)("ol",{start:19},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"create function"),". On the next screen, copy and paste the contents from ",Object(c.b)("a",{parentName:"p",href:"/docs/lightning/04-salesforce-lambdas/sfSig4RequestToS3.js"},"this file")," into the function body, and then select ",Object(c.b)("strong",{parentName:"p"},"Deploy"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the actions dropdown, and then select ",Object(c.b)("strong",{parentName:"p"},"Deploy to Lambda@Edge"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'Select the Cloudfront Distribution that was created by the Salesfore Lambdas serverless application, then check off the "I acknowledge..." check box, then select deploy.'))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming10.png")}),Object(c.b)("h5",{id:"salesforce-side-setup"},"Salesforce Side Setup"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'In Salesforce Setup, search for "Named Credentials." Select ',Object(c.b)("strong",{parentName:"p"},"New Named Credential."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"For the ",Object(c.b)("strong",{parentName:"p"},"Name")," and ",Object(c.b)("strong",{parentName:"p"},"Label"),", enter AwsGenerateAudioRecordingURL.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"URL")," section, enter ",Object(c.b)("inlineCode",{parentName:"p"},"https://lambda.{awsRegion}.amazonaws.com/2015-03-31/functions/{lambdaFunctionName}/invocations/"),"-- replace {awsRegion} with the awsRegion your serverless application resides in (for example, us-east-1), and replace {lambdaFunctionName} with the full name of the sfGenerateAudioRecordingStreaming lambda you recorded in the previous section.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"For ",Object(c.b)("strong",{parentName:"p"},"Identity Type")," select ",Object(c.b)("strong",{parentName:"p"},"Named Principal"),". For the ",Object(c.b)("strong",{parentName:"p"},"Authentication Protocol"),", select ",Object(c.b)("strong",{parentName:"p"},"AWS Signature Version 4"),". Fill in the ",Object(c.b)("strong",{parentName:"p"},"Access key ID"),' you recorded in the previous section as "AWS Access Key ID", the ',Object(c.b)("strong",{parentName:"p"},"Secret access key"),' as the "AWS Secret Access Key", the AWS Region, and "lambda" as the "AWS Service."'))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming11.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Select ",Object(c.b)("strong",{parentName:"li"},"save"),".")),Object(c.b)("h4",{id:"enabling-call-recording-streaming"},"Enabling call recording streaming"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"From the left navigation, choose ",Object(c.b)("strong",{parentName:"p"},"Routing")," then select ",Object(c.b)("strong",{parentName:"p"},"Contact\nflows")))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming12.png")}),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Open the contact flow that you want to use to enable call recording\nimport. This contact flow must have Amazon Connect's native\nrecording turned on.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",Object(c.b)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Configure the block to set a contact attribute as follows:"),Object(c.b)("p",{parentName:"li"},"a. ",Object(c.b)("strong",{parentName:"p"},"Destination key:")," postcallRecordingImportEnabled"),Object(c.b)("p",{parentName:"li"},"b. ",Object(c.b)("strong",{parentName:"p"},"Value:")," true"))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming13.png")}),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",Object(c.b)("strong",{parentName:"p"},"Publish")," the\nflow.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish."))),Object(c.b)("p",null,"To edit the sample Task Page Layout, please follow the steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Log in to your Salesforce Org")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Navigate to ",Object(c.b)("strong",{parentName:"p"},"Setup")," then in type ",Object(c.b)("em",{parentName:"p"},"Object Manager")," in Quick Find"))),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming14.png")}),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},'Click on the "Task" object')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming15.png")}),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},'Click on the "Page Layouts"')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming16.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},'Click on the "',Object(c.b)("em",{parentName:"li"},"Task Layout"),'" and the layout designer will open')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming17.png")}),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},'Drag the "ACSFCCP_CallRecording" item to the desired are of the layout to have that information appear on the agent\'s screen. The following screenshot shows how the Call Details section could appear when placing the "ACSFCCP_CallRecording" item on the required Task layout.')),Object(c.b)("img",{src:Object(i.a)("/img/classic/audiostreaming18.png")}),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"To have access to the recording, the user must have an active session with Amazon Connect. This can be achieved by either logging in to the CCP softphone, or by logging in to Amazon Connect outside of Salesforce. After the session is established, a page refresh should make the player appear.")),Object(c.b)("h4",{id:"common-audio-streaming-setup-issues"},"Common Audio Streaming Setup Issues"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify that the Secrets Manager secret contains both the ",Object(c.b)("inlineCode",{parentName:"p"},"CloudFrontPrivateKey")," and ",Object(c.b)("inlineCode",{parentName:"p"},"CloudFrontAccessKeyID")," items.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify that your Cloudfront distribution's behavior is set to use ",Object(c.b)("inlineCode",{parentName:"p"},"Trusted Key Groups"),", and that the correct Key Group is selected."))),Object(c.b)("img",{src:Object(i.a)("/img/shared/audiostreamingkeygroups.png")}),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Verify that your Cloudfront distribution's behavior contains the sfSig4RequestToS3 edge lambda")),Object(c.b)("img",{src:Object(i.a)("/img/shared/audiostreamingedgelambda.png")}),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Verify that your S3 bucket CORS configuration is correct")),Object(c.b)("img",{src:Object(i.a)("/img/shared/audiostreamingcorsconfiguration.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify that your named credentials are correctly set up")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify that your user is added to the AC_CallRecording permission set"))))}p.isMDXComponent=!0}}]);