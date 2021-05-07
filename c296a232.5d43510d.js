(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(133)),r=n(134),c={id:"01-cti-adapter-configuration",title:"CTI Adapter Configuration"},s={unversionedId:"classic/03-cti-adapter/01-cti-adapter-configuration",id:"classic/03-cti-adapter/01-cti-adapter-configuration",isDocsHomePage:!1,title:"CTI Adapter Configuration",description:"The CTI Adapter installed by the managed package provides a number of",source:"@site/docs/classic/03-cti-adapter/01-cti-adapter-configuration.md",slug:"/classic/03-cti-adapter/01-cti-adapter-configuration",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/01-cti-adapter-configuration",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/01-cti-adapter-configuration.md",version:"current",sidebar:"classic",previous:{title:"CTI Adapter Installation Troubleshooting and Common Issues",permalink:"/amazon-connect-salesforce-cti/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting"},next:{title:"Omnipresence Agent State Sync",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync"}},l=[{value:"CTI Adapter Details",id:"cti-adapter-details",children:[]},{value:"Single Sign On Settings",id:"single-sign-on-settings",children:[{value:"Identify the SSO URL components",id:"identify-the-sso-url-components",children:[]},{value:"Configure the CTI Lightning Adapter in Salesforce",id:"configure-the-cti-lightning-adapter-in-salesforce",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The CTI Adapter installed by the managed package provides a number of\nfeatures that change or enhance the functionality of the integration. By\ndefault, many of these features have been configured during install with\na default setting. This section will detail the options available."),Object(i.b)("img",{src:Object(r.a)("/img/classic/image82.png")}),Object(i.b)("h2",{id:"cti-adapter-details"},"CTI Adapter Details"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"CTI Adapter Name:")," provide a unique name for this CTI adapter\ndefinition")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Amazon Connect Instance:")," This was configured in a previous\nsection. This is the instance url for your Amazon Connect\ninstance.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Amazon Connect Instance Region:")," This is the code for the region\nthat you have deployed your Amazon Connect instance to. This is\nrequired for the Amazon Connect chat APIs to work correctly. If you\ndo not use the chat feature of Amazon Connect, this field is not\nnecessary")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Custom Ringtone:")," This allows for overriding the built-in\nringtone with any browser-supported audio file accessible by the\nuser.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Call Center Definition Name:")," This was configured in a previous\nsection. This is the internal name of the Call Center configured in\nSalesforce setup. This value links the CTI Adapter to the Call\nCenter, and ultimately to the agents.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Softphone Popout Enabled:")," Salesforce supports softphone pop out\nin Console and Lightning Experience modes. When the softphone is\npopped out, it opens in a new browser window external to the\nSalesforce UI. This is helpful in use cases where the call controls\nare regularly needed but the agent also needs full access to the\nentire console.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Debug Level:")," For future use")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Medialess:")," Amazon Connect supports running in VDI environments,\nhowever best practice is to send the actual audio stream via a\nseparate CCP. Selecting the medialess option will configure the\nSalesforce CCP to run in medialess mode, which provides the data\nthat Salesforce needs for screenpop while the audio is streamed to a\nlocal CCP.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Presence Sync Enabled:")," This setting allows the adapter to use\nthe presence rules to sync state from Amazon Connect to Salesforce\nOmni-Channel.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Audio Device Settings")," Turning this setting on allows the Agent\nto setup a custom audio device for their speaker, microphone and\nringer in the adapter (Speaker and Ringer settings not available on Firefox).\nYou may have to add this field to the layout manually. ",Object(i.b)("a",{parentName:"p",href:"/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting"},"See troubleshooting"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Phone Type Settings")," Turning this setting on allows the Agent to\nchange their Phone Type in the CCP. You may have to add this field to\nthe layout manually. ",Object(i.b)("a",{parentName:"p",href:"/docs/classic/02-installation/04-cti-adapter-installation-troubleshooting"},"See troubleshooting")))),Object(i.b)("h2",{id:"single-sign-on-settings"},"Single Sign On Settings"),Object(i.b)("p",null,"The Amazon Connect CTI Adapter supports single sign on(SSO) via SAML\nintegration. This allows customers that use a SAML provider for\nauthentication into Amazon Connect. You will need the SSO URL for your\nprovider and the Relay State settings for your Amazon Connect instance."),Object(i.b)("p",null,"For general information on configuring SAML for Amazon Connect, please\nrefer to: ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml"},"Amazon Connect Administrator Guide: Configure SAML for\nIdentity Management in Amazon\nConnect"),"."),Object(i.b)("p",null,"If you wish to use ",Object(i.b)("strong",{parentName:"p"},"Salesforce")," as your identity provider for Single\nSign On, please follow the setup instructions in ",Object(i.b)("a",{parentName:"p",href:"/docs/classic/05-appendices/02-appendix-b-configuring-salesforce-as-your-identity-provider/01-configuring-salesforce-as-your-identity-provider"},"Appendix B - Configuring Salesforce as Your Identity Provider"),"."),Object(i.b)("p",null,"For information about configuring specific SAML providers to work with\nAmazon Connect:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/contact-center/enabling-federation-with-aws-single-sign-on-and-amazon-connect/"},"AWS Single\nSign-On"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/contact-center/configure-single-sign-on-for-amazon-connect-using-okta/"},"Okta")))),Object(i.b)("p",null,"Once you have your SAML integration working with Amazon Connect, you\nwill need to create the Amazon Connect Single Sign On URL and validate\nthat it works correctly, then configure the Lightning CTI adapter and\nlogin the agent."),Object(i.b)("h3",{id:"identify-the-sso-url-components"},"Identify the SSO URL components"),Object(i.b)("p",null,"In order to authenticate with Amazon Connect, you need your IdP login\nURL from your SAML provider and a relay state URL that will redirect the\nauthenticated user to your Amazon Connect instance."),Object(i.b)("p",null,"Your IdP Login URL will resemble the following (Salesforce is shown):"),Object(i.b)("pre",null,"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid"),Object(i.b)("p",null,"The 'RelayState' will be in the following format:"),Object(i.b)("pre",null,"https://console.aws.amazon.com/connect/federate/",Object(i.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(i.b)("p",null,'Please note that "console.aws.amazon.com" refers to US-East-1 region (N.\nVirginia). If your Amazon Connect instance is in a different region,\nplease use the region Console URL. For example:'),Object(i.b)("pre",null,"https://us-west-2.console.aws.amazon.com/connect/federate/",Object(i.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(i.b)("h3",{id:"configure-the-cti-lightning-adapter-in-salesforce"},"Configure the CTI Lightning Adapter in Salesforce"),Object(i.b)("p",null,"Now we are ready to complete the last step in the configuration process:\nAdding the SSO settings to the Lightning Adapter. This will configure\nthe adapter to authenticate via SSO and redirect to the Amazon Connect\nContact Control Panel once authentication completes."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",Object(i.b)("strong",{parentName:"p"},"Service Console"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Expand the ",Object(i.b)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",Object(i.b)("strong",{parentName:"p"},"AC CTI Adapters"),"."))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image83.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"ACLightningAdapter"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Scroll down to the Single SignOn (SSO) section and choose the pencil\nicon of either field to edit"))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image84.png")}),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For the SSO Url, paste your IdP login URL up to the first question\nmark (if one exists). A couple of examples are provided:"),Object(i.b)("p",{parentName:"li"},"Salesforce:"),Object(i.b)("pre",null,"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid"),Object(i.b)("p",{parentName:"li"},"Microsoft ADFS:"),Object(i.b)("pre",null,"https://sts.yourcorp.com/adfs/ls/idpinitiatedsignon.aspx")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Paste this portion of the URL into the ",Object(i.b)("strong",{parentName:"p"},"SSO Url")," field"))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image85.png")}),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For the SSO Relay State:"),Object(i.b)("p",{parentName:"li"},"IF you had a question mark in your login URL, paste everything AFTER\nthe question mar into the SSO Relay state field, then add\n&RelayState= to the end, and append your relay state URL.\nFor example:"),Object(i.b)("pre",null,"app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/",Object(i.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(i.b)("p",{parentName:"li"},"IF you did not have a Question Mark, then enter &RelayState= into\nthe SSO Relay State field and append your relay statue URL to it.\nFor example:"),Object(i.b)("pre",null,"&RelayState=https://console.aws.amazon.com/connect/federate/",Object(i.b)("b",null,"instanceId"),"?destination=%2Fconnect%2Fccp")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Example of a completed SSO section (Salesforce is shown)"))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image86.png")}),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose ",Object(i.b)("strong",{parentName:"p"},"Save"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Refresh")," your browser to make the changes take effect"),Object(i.b)("p",{parentName:"li"},"a.  ",Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you receive a blocked popup warning, select the\nwarning and change the setting to always allow popups from your\nSalesforce org, then refresh the browser again"))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image87.png")}),Object(i.b)("ol",{start:11},Object(i.b)("li",{parentName:"ol"},"After a few seconds, a new window should pop up for a moment. This\nwindow is performing the authentication and setting your session\ncookie. Once it does this, it will close automatically.")),Object(i.b)("img",{src:Object(r.a)("/img/classic/image88.png")}),Object(i.b)("ol",{start:12},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once the authentication window closes, select the ",Object(i.b)("strong",{parentName:"p"},"phone icon")," in\nthe console toolbar to open the CCP\nNote: You may also receive popups to allow notifications and\nmicrophone access. Please accept both.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You should now see the authenticated and logged in CCP"))),Object(i.b)("img",{src:Object(r.a)("/img/classic/image89.png")}),Object(i.b)("p",null,"SSO Configuration is complete"))}b.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(22),o=n(135);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,c=void 0!==r&&r,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},135:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);