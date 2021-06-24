(self.webpackChunkamazon_connect_salesforce_cti=self.webpackChunkamazon_connect_salesforce_cti||[]).push([[1045],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),h=r,d=g["".concat(s,".").concat(h)]||g[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return o}});var n=a(2263),r=a(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+p:p}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1914:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(4996),l=["components"],s={id:"04-contact-channel-analytics",title:"Contact Channel Analytics"},c=void 0,p={unversionedId:"lightning/salesforce-lambdas/04-contact-channel-analytics",id:"lightning/salesforce-lambdas/04-contact-channel-analytics",isDocsHomePage:!1,title:"Contact Channel Analytics",description:"In addition to the CTI adapter's native ability to provide direct",source:"@site/docs/lightning/04-salesforce-lambdas/04-contact-channel-analytics.md",sourceDirName:"lightning/04-salesforce-lambdas",slug:"/lightning/salesforce-lambdas/04-contact-channel-analytics",permalink:"/amazon-connect-salesforce-cti/docs/lightning/salesforce-lambdas/04-contact-channel-analytics",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/04-contact-channel-analytics.md",version:"current",sidebarPosition:4,frontMatter:{id:"04-contact-channel-analytics",title:"Contact Channel Analytics"},sidebar:"lightning",previous:{title:"Amazon Connect Real-Time Metrics in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/lightning/salesforce-lambdas/03-real-time-metrics"},next:{title:"Contact Trace Record Import",permalink:"/amazon-connect-salesforce-cti/docs/lightning/salesforce-lambdas/05-contact-trace-record-import"}},m=[{value:"Call Recording Streaming",id:"call-recording-streaming",children:[]},{value:"Recording Transcripts",id:"recording-transcripts",children:[]},{value:"AI Driven Contact Analysis",id:"ai-driven-contact-analysis",children:[]}],g={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to the CTI adapter's native ability to provide direct\nplayback links to call recordings in Amazon Connect, the AWS Serverless\nApplication Repository for Salesforce includes several functions that\nallow you to process recordings, perform quality analytics functions,\nand bring data into Salesforce."),(0,i.kt)("p",null,"This processing is done post-call, using the Contact Trace Record (CTR)\nas the initiation path. The following quality analytics options are\navailable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Call Recording Streaming:")," streams the actual audio file into\nSalesforce. This option is not mandatory for the others to function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Recording Transcript:")," you can choose to have your call\nrecordings transcribed to text and presented in a visual format that\nresembles a chat conversation. This allows for quick scanning of a\ncall to identify key segments of conversation. This option is\nrequired if you wish to include the next level of analysis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AI-Driven Contact Analysis:")," once the recordings have been\ntranscribed to text, you can also indicate that you wish to do\nfurther analysis of the conversation using ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/comprehend/"},"Amazon\nComprehend"),". Available options\nare:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sentiment Analysis:")," returns the overall sentiment of the\nconversation (Positive, Negative, Neutral, or Mixed).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Keyphrase Extraction:")," returns the key phrases or talking\npoints and a confidence score to support that this is a key\nphrase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Language Detection:")," returns the dominant language with a\nconfidence score to support that a language is dominant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Custom Entities:")," allows you to customize the AI to identify\nterms that are specific to your domain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Syntax Analysis:")," analyze the transcript using tokenization\nand Parts of Speech (PoS), and identify word boundaries and\nlabels like nouns and adjectives within the text."))))),(0,i.kt)("h3",{id:"call-recording-streaming"},"Call Recording Streaming"),(0,i.kt)("p",null,"You can stream Call Recordings in your Salesforce Org. This\nallows for easy access to the recordings from within Salesforce and can\nbe used in conjunction with the other contact channel analytics features\nto provide a complete view of the customer interaction."),(0,i.kt)("p",null,"The import of call recordings is not required to activate the other\ncontact channel analytics features."),(0,i.kt)("p",null,"Once enabled during the AWS Serverless Application Repository for\nSalesforce, recording import is activated on a call by call basis by\nadding a specific contact attribute. This attribute is used during\nContact Trace Record processing to trigger the call import."),(0,i.kt)("p",null,"NOTE: After Call Work time is a part of the Contact Trace Record. As\nsuch, CTRs are not generated until the agent leaves the after call work\nstate. If you are not seeing a recording import, please make sure the\nagent has completed the call and left the after call work state."),(0,i.kt)("h4",{id:"prerequisite-setup"},"Prerequisite Setup"),(0,i.kt)("h5",{id:"cloudformation-template"},"Cloudformation Template"),(0,i.kt)("p",null,"To make sure that the AWS resources are set up, make sure that the\n",(0,i.kt)("em",{parentName:"p"},"PostcallRecordingImportEnabled")," parameter is set to true in your\nCloudformation stack:"),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image266.png")}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you are expecting more than 1000 concurrent calls, you may have to increase the timeout for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sfCTRTrigger")," lambda.")),(0,i.kt)("h5",{id:"aws-side-setup"},"AWS Side Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html"},"these steps"),". Follow the sections ",(0,i.kt)("em",{parentName:"p"},"Creating key pairs for your signers"),", and ",(0,i.kt)("em",{parentName:"p"},"Adding a signer to a distribution"),".\nMake sure to record the ",(0,i.kt)("strong",{parentName:"p"},"public key ID"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Copy and paste the contents of the private key .pem file into a text editor. Replace every newline character with a space, and then delete the last character. This is most easily done using a "find and replace" feature in your text editor.\nThe resulting string of text should resemble the following:'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY----- (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (64 character string) (under 64 character string) -----END RSA PRIVATE KEY-----\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Navigate to the "Secrets Manager" service. Select the ',(0,i.kt)("strong",{parentName:"p"},"SalesforceCredentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Under the "Secret value" tab, select "Retrieve secret value" and then "Edit".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the ",(0,i.kt)("strong",{parentName:"p"},"CloudFrontPrivateKey")," field, copy and paste the modified contents of the private key .pem file. For the ",(0,i.kt)("strong",{parentName:"p"},"CloudFrontAccessKeyID")," field, copy and paste the ",(0,i.kt)("strong",{parentName:"p"},"Access Key Id")," you recorded above. Your Secrets Manager Secret should look like the following:"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image270.png")}),(0,i.kt)("p",null,'Please note that your secret may also be formatted stored as a "Secret key/value" secret rather than a "Plaintext" secret; both secret types are valid.'),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},'Navigate to your Salesforce instance. Navigate to setup, then search for "Visualforce pages."')),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image283.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"AC_RecordingViewer"),' visualforce page, and select "preview." Copy the url of the opened page up until ',(0,i.kt)("inlineCode",{parentName:"p"},".com"),". Make sure not to include any characters after ",(0,i.kt)("inlineCode",{parentName:"p"},".com"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate back to aws, to the s3 bucket where your audio recording files are stored. This s3 bucket should be the same bucket as the ",(0,i.kt)("strong",{parentName:"p"},"ConnectRecordingS3BucketName")," parameter to the serverless application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the bucket details, select the ",(0,i.kt)("strong",{parentName:"p"},"Permissions")," tab and then the ",(0,i.kt)("strong",{parentName:"p"},"CORS configuration")," tab and paste the following. Replace the AllowedOrigin with the url copied in step 9. Additionally, add in the ",(0,i.kt)("inlineCode",{parentName:"p"},"...lightning.force.com")," url to your instance to the configuration."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "AllowedHeaders": ["Access-Control-Allow-Origin"],\n    "AllowedMethods": ["GET"],\n    "AllowedOrigins": ["{url copied in step 9}", "https://{instanceName}.lightning.force.com/"],\n    "ExposeHeaders": []\n  }\n]\n')),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image271.png")}),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Save")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Navigate to the "IAM" aws service. Select ',(0,i.kt)("strong",{parentName:"p"},"Add User"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image272.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"Give your IAM user a name, like ",(0,i.kt)("strong",{parentName:"li"},"sfInvokeGenerateAudioRecordingStreamingURLIAMUser"),'. For the "AWS Access Type", select ',(0,i.kt)("strong",{parentName:"li"},"Programmatic access"),".")),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image273.png")}),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select Next, then select "Attach existing policies directly." Search for ',(0,i.kt)("strong",{parentName:"p"},"invokeSfGenerateAudioRecordingStreamingURLPolicy")," and select it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the user, then copy down the ",(0,i.kt)("strong",{parentName:"p"},"Access key ID")," and the ",(0,i.kt)("strong",{parentName:"p"},"Secret access key"),". These keys will be used in the next section."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image284.png")}),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},'Navigate to the "Lambda" aws service. Search for term "sfgenerate" and copy down the full name of the sfGenerateAudioRecordingStreaming lambda. This will be used in the next section.')),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image274.png")}),(0,i.kt)("ol",{start:16},(0,i.kt)("li",{parentName:"ol"},'Navigate back to the "Lambda" aws service main page and navigate to the ',(0,i.kt)("strong",{parentName:"li"},"us-east-1 region"),". Select ",(0,i.kt)("strong",{parentName:"li"},"create function"),".")),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/audiostreaming0.png")}),(0,i.kt)("ol",{start:17},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a function name, like ",(0,i.kt)("strong",{parentName:"p"},"sfSig4RequestToS3"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"change default execution role"),", and ",(0,i.kt)("strong",{parentName:"p"},"use an existing role"),". Search for and select ",(0,i.kt)("em",{parentName:"p"},"sfSig4RequestToS3Role"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/audiostreaming1.png")}),(0,i.kt)("ol",{start:19},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"create function"),". On the next screen, copy and paste the contents from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/docs/lightning/04-salesforce-lambdas/sfSig4RequestToS3.js"},"this file")," into the function body, and then select ",(0,i.kt)("strong",{parentName:"p"},"Deploy"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the actions dropdown, and then select ",(0,i.kt)("strong",{parentName:"p"},"Deploy to Lambda@Edge"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select the Cloudfront Distribution that was created by the Salesfore Lambdas serverless application, then check off the "I acknowledge..." check box, then select deploy.'))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/audiostreaming2.png")}),(0,i.kt)("h5",{id:"salesforce-side-setup"},"Salesforce Side Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In Salesforce Setup, search for "Named Credentials." Select ',(0,i.kt)("strong",{parentName:"p"},"New Named Credential."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Label"),", enter AwsGenerateAudioRecordingURL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"URL")," section, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"https://lambda.{awsRegion}.amazonaws.com/2015-03-31/functions/{lambdaFunctionName}/invocations/"),"-- replace {awsRegion} with the awsRegion your serverless application resides in (for example, us-east-1), and replace {lambdaFunctionName} with the full name of the sfGenerateAudioRecordingStreaming lambda you recorded in the previous section."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: There is an intermittant bug with salesfore where the trailing ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," causes an error. Try using ",(0,i.kt)("inlineCode",{parentName:"p"},"https://lambda.{awsRegion}.amazonaws.com/2015-03-31/functions/{lambdaFunctionName}/invocations")," as the ",(0,i.kt)("strong",{parentName:"p"},"URL")," if you see an error message such as ",(0,i.kt)("em",{parentName:"p"},"The request signature we calculated does not match the signature you provided. Check your AWS Secret Access Key and signing method. Consult the service documentation for details."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Identity Type")," select ",(0,i.kt)("strong",{parentName:"li"},"Named Principal"),". For the ",(0,i.kt)("strong",{parentName:"li"},"Authentication Protocol"),", select ",(0,i.kt)("strong",{parentName:"li"},"AWS Signature Version 4"),". Fill in the ",(0,i.kt)("strong",{parentName:"li"},"Public Key ID"),' you recorded in the previous section as "AWS Access Key ID", the ',(0,i.kt)("strong",{parentName:"li"},"Secret access key"),' as the "AWS Secret Access Key", the AWS Region, and "lambda" as the "AWS Service."')),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image275.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"save"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the setup search box, search for "Permission sets". Select the "AC_CallRecording" permission set. Select "Manage Assignments".'))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image278.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},'Select "Add Assignments". Add the users that should have access to the audio recordings and select "assign".')),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image279.png")}),(0,i.kt)("h4",{id:"enabling-call-recording-streaming"},"Enabling call recording streaming"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the left navigation, choose ",(0,i.kt)("strong",{parentName:"p"},"Routing")," then select ",(0,i.kt)("strong",{parentName:"p"},"Contact\nflows")))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image201.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the contact flow that you want to use to enable call recording\nimport. This contact flow must have Amazon Connect's native\nrecording turned on.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",(0,i.kt)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the block to set a contact attribute as follows:"),(0,i.kt)("p",{parentName:"li"},"a. ",(0,i.kt)("strong",{parentName:"p"},"Destination key:")," postcallRecordingImportEnabled"),(0,i.kt)("p",{parentName:"li"},"b. ",(0,i.kt)("strong",{parentName:"p"},"Value:")," true"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image202.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",(0,i.kt)("strong",{parentName:"p"},"Publish")," the\nflow.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place a call, connect to your agent, speak for a few moments to test\nthe audio, then end the call. Make sure the agent exits after call\nwork")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After a minute or so, the recording should import."))),(0,i.kt)("h4",{id:"adding-contact-channel-analytics-to-the-service-console"},"Adding Contact Channel Analytics to the Service Console"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,i.kt)("strong",{parentName:"p"},"Service Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the ",(0,i.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image40.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"On the Edit Service Console App Navigation Items page, select ",(0,i.kt)("strong",{parentName:"li"},"Add\nMore Items"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image41.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"+")," next to ",(0,i.kt)("strong",{parentName:"p"},"AC Contact Channel Analytics"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Add 1 Nav Item"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the order of your Navigation Items if desired, then choose\n",(0,i.kt)("strong",{parentName:"p"},"Save")))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image203.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Once the save completes, expand the ",(0,i.kt)("strong",{parentName:"li"},"navigation menu")," by selecting\nthe down arrow and choose ",(0,i.kt)("strong",{parentName:"li"},"AC Contact Channel Analytics"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image204.png")}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Change the list view from Recently Viewed to ",(0,i.kt)("strong",{parentName:"li"},"All"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image205.png")}),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Once the view refreshes, you should see your record(s)")),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image206.png")}),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the recording to open it")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Notes & Attachments section, you will see the recording file\nattached."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image207.png")}),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"NOTE: The recording playback, waveform, and transcript views are\nonly active when you also choose to activate recording transcripts.")),(0,i.kt)("h4",{id:"common-audio-streaming-setup-issues"},"Common Audio Streaming Setup Issues"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the Secrets Manager secret contains both the ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudFrontPrivateKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CloudFrontAccessKeyID")," items.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that your Cloudfront distribution's behavior is set to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Trusted Key Groups"),", and that the correct Key Group is selected."))),(0,i.kt)("img",{src:(0,o.Z)("/img/shared/audiostreamingkeygroups.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Verify that your Cloudfront distribution's behavior contains the sfSig4RequestToS3 edge lambda")),(0,i.kt)("img",{src:(0,o.Z)("/img/shared/audiostreamingedgelambda.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Verify that your S3 bucket CORS configuration is correct")),(0,i.kt)("img",{src:(0,o.Z)("/img/shared/audiostreamingcorsconfiguration.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that your named credentials are correctly set up")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that your user is added to the AC_CallRecording permission set"))),(0,i.kt)("h3",{id:"recording-transcripts"},"Recording Transcripts"),(0,i.kt)("p",null,"Enabling the Recording Transcripts activates a process to run your\ncontact recordings through Amazon Transcribe which uses a deep learning\nprocess to convert text to speech accurately and quickly. In addition,\nthis process also creates a visual waveform of the recording, enables\nthe in-app recording playback, and provides a visual representation of\nthe conversation."),(0,i.kt)("p",null,"Once enabled during the AWS Serverless Application Repository for\nSalesforce, recording transcription is activated on a call by call basis\nby adding a specific contact attribute. This attribute is used during\nContact Trace Record processing to trigger the transcription."),(0,i.kt)("p",null,"Make sure the Salesforce user accessing recording transcription are added to the AC_CallRecording permission set, as described in the previous section."),(0,i.kt)("h4",{id:"enabling-recording-transcription"},"Enabling recording transcription"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the left navigation, choose ",(0,i.kt)("strong",{parentName:"p"},"Routing")," then select ",(0,i.kt)("strong",{parentName:"p"},"Contact\nflows")))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image201.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the contact flow that you want to use to enable call\ntranscription. This contact flow must have Amazon Connect's native\nrecording turned on, since the transcription is dependent on it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",(0,i.kt)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the block to set two contact attributes as follows:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attribute 1: enables the transcription process"),(0,i.kt)("p",{parentName:"li"},"a. ",(0,i.kt)("strong",{parentName:"p"},"Destination key"),": postcallTranscribeEnabled"),(0,i.kt)("p",{parentName:"li"},"b. ",(0,i.kt)("strong",{parentName:"p"},"Value"),": true")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attribute 2: specifies the transcription language"),(0,i.kt)("p",{parentName:"li"},"-a. ",(0,i.kt)("strong",{parentName:"p"},"Destination key"),": postcallTranscribeLanguage"),(0,i.kt)("p",{parentName:"li"},"b. ",(0,i.kt)("strong",{parentName:"p"},"Value"),": en-US (See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-LanguageCode"},"Amazon Transcribe API\nReference"),"\nfor valid language codes)"))))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image208.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",(0,i.kt)("strong",{parentName:"p"},"Publish")," the\nflow.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place a call, connect to your agent, speak for a few moments from\nboth the agent and the customer side to generate a good transcript,\nthen end the call. Make sure the agent exits after call work")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The transcription will take at least as long as the call did. Wait\nan appropriate amount of time for the transcription to be available."))),(0,i.kt)("h4",{id:"accessing-transcriptions"},"Accessing transcriptions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,i.kt)("strong",{parentName:"p"},"Service Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the ",(0,i.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose AC Contact Channel Analytics. If you have not previously\nadded AC Contact Channel Analytics to the navigation menu, complete\nthe steps found in\n",(0,i.kt)("a",{parentName:"p",href:"#adding-contact-channel-analytics-to-the-service-console"},"Adding Contact Channel Analytics to the Service Console"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image209.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Change the list view from Recently Viewed to ",(0,i.kt)("strong",{parentName:"li"},"All"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image205.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Once the view refreshes, you should see your record(s)")),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image210.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a record to view the details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the record opens, note the recording waveform, playback\ncontrols, and the visual version of the transcription"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image211.png")}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Also note that the transcriptions for each side of the conversation\nare also included as attachments.")),(0,i.kt)("h3",{id:"ai-driven-contact-analysis"},"AI Driven Contact Analysis"),(0,i.kt)("p",null,"Enabling the AI Driven Contact Analysis function allows you to process\nthe transcribed text using ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/comprehend/"},"Amazon\nComprehend"),". Amazon Comprehend is a\nnatural language processing service that uses machine learning to find\ninsights and relationships in text."),(0,i.kt)("p",null,"Once enabled during the AWS Serverless Application Repository for\nSalesforce, contact analysis is activated on a call by call basis by\nadding a specific contact attribute. This attribute is used during\nContact Trace Record processing to trigger the Amazon Comprehend task."),(0,i.kt)("p",null,"There are five functions available with the integration. Each function\nis triggered by a code. You can use one code in your contact attribute,\nor string multiple together as a comma separated list. The available\ncodes and their functions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"snt = Sentiment Analysis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"kw = Keyphrase Extraction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dl = Language Detection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ne = Custom Entities"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"syn = Syntax Analysis")))),(0,i.kt)("h4",{id:"enabling-ai-driven-contact-analysis"},"Enabling AI Driven Contact Analysis"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your Amazon Connect instance as an Administrator")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the left navigation, choose ",(0,i.kt)("strong",{parentName:"p"},"Routing")," then select ",(0,i.kt)("strong",{parentName:"p"},"Contact\nflows")))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image201.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the contact flow that you want to use to enable AI Driven\nContact Analytics. This contact flow must have Amazon Connect's\nnative recording turned on, and transcription enabled as these are\nboth prerequisites for the analytics function.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In you contact flow, before you transfer to queue, add a new ",(0,i.kt)("strong",{parentName:"p"},"Set\ncontact attributes")," block")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the block to set a contact attribute as follows:"),(0,i.kt)("p",{parentName:"li"},"a. ",(0,i.kt)("strong",{parentName:"p"},"Destination key:")," postcallTranscribeComprehendAnalysis"),(0,i.kt)("p",{parentName:"li"},"b. ",(0,i.kt)("strong",{parentName:"p"},"Value:")," snt,dl,kw,syn"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- In this example, we are performing sentiment analysis,\nlanguage detection, and keyphrase\nextraction\n")))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image212.png")}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Save")," the Set contact attributes block. Make sure it is\nappropriately connected to your contact flow, and ",(0,i.kt)("strong",{parentName:"p"},"Publish")," the\nflow.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait approximately 2 minutes to give the contact flow time to\npublish.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place a call, connect to your agent, speak for a few moments from\nboth the agent and the customer side to generate a good transcript,\nthen end the call. Make sure the agent exits after call work")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The contact analysis runs after the transcription, which will take\nat least as long as the call did. Wait an appropriate amount of time\nfor the analysis to be available."))),(0,i.kt)("h4",{id:"accessing-the-ai-driven-contact-analysis"},"Accessing the AI Driven Contact Analysis"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",(0,i.kt)("strong",{parentName:"p"},"Service Console"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the ",(0,i.kt)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose AC Contact Channel Analytics. If you have not previously\nadded AC Contact Channel Analytics to the navigation menu, complete\nthe steps found in\n",(0,i.kt)("a",{parentName:"p",href:"#adding-contact-channel-analytics-to-the-service-console"},"Adding Contact Channel Analytics to the Service Console"),"."))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image209.png")}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Change the list view from Recently Viewed to ",(0,i.kt)("strong",{parentName:"li"},"All"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image205.png")}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Once the view refreshes, you should see your record(s)")),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image210.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a record to view the details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the record opens, note the Keywords, Sentiment, and Dominant\nLanguage"))),(0,i.kt)("img",{src:(0,o.Z)("/img/lightning/image213.png")}))}h.isMDXComponent=!0}}]);