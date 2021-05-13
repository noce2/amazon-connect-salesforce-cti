(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var r=c.a.createContext({}),b=function(e){var t=c.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(r.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,r=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return n?c.a.createElement(u,o(o({ref:t},r),{},{components:n})):c.a.createElement(u,o({ref:t},r))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var r=2;r<i;r++)s[r]=n[r];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(22),c=n(139);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,r=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(c.b)(n))return n;if(o)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+b:b}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},139:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}))},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),i=(n(0),n(137)),s=n(138),o={id:"01-installing-the-amazon-connect-cti-adapter",title:"Installing the Amazon Connect CTI Adapter for Salesforce Package"},l={unversionedId:"classic/02-installation/01-installing-the-amazon-connect-cti-adapter",id:"classic/02-installation/01-installing-the-amazon-connect-cti-adapter",isDocsHomePage:!1,title:"Installing the Amazon Connect CTI Adapter for Salesforce Package",description:"Lightning Flow Setup Installation",source:"@site/docs/classic/02-installation/01-installing-the-amazon-connect-cti-adapter.md",slug:"/classic/02-installation/01-installing-the-amazon-connect-cti-adapter",permalink:"/amazon-connect-salesforce-cti/docs/classic/02-installation/01-installing-the-amazon-connect-cti-adapter",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/02-installation/01-installing-the-amazon-connect-cti-adapter.md",version:"current",sidebar:"classic",previous:{title:"Key Benefits and Requirements",permalink:"/amazon-connect-salesforce-cti/docs/classic/01-introduction/01-key-benefits-and-requirements"},next:{title:"Installing the Amazon Connect Salesforce Lambda Package",permalink:"/amazon-connect-salesforce-cti/docs/classic/02-installation/02-installing-the-amazon-connect-salesforce-lambdas"}},r=[{value:"Lightning Flow Setup Installation",id:"lightning-flow-setup-installation",children:[]},{value:"Installing from the Salesforce AppExchange",id:"installing-from-the-salesforce-appexchange",children:[]},{value:"Create the Softphone Layout",id:"create-the-softphone-layout",children:[]},{value:"Set Access Permissions",id:"set-access-permissions",children:[{value:"AC_Administrator",id:"ac_administrator",children:[]},{value:"AC_Manager",id:"ac_manager",children:[]},{value:"AC_Agent",id:"ac_agent",children:[]}]},{value:"Configure Console Experience",id:"configure-console-experience",children:[]},{value:"Configure Classic Experience",id:"configure-classic-experience",children:[]}],b={toc:r};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"lightning-flow-setup-installation"},"Lightning Flow Setup Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"Service Setup")," within the Lightning UI under the gear\nicon.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"View All"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Search for or select ",Object(i.b)("strong",{parentName:"p"},"Add Phone Support"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Start")," on the ",Object(i.b)("strong",{parentName:"p"},"Voice Setup")," screen")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("strong",{parentName:"p"},"Select Your Voice Provider"),", select Amazon Connect CTI\nAdapter")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Agree to the terms and conditions and click Install ",Object(i.b)("strong",{parentName:"p"},"Package"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("strong",{parentName:"p"},"Add Voice Service Provider Details"),", add the URL to your\nAmazon Connect instance (see instructions below if you are unsure).\nYou will also need to allowlist your Salesforce domain within Amazon\nConnect.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("strong",{parentName:"p"},"Who's Answering the Phone?"),", select the name of the users\nyou would like to access the phone configuration. This can be\nmodified later under the Call Center configuration.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click Finish. You can also launch the Amazon Connect Setup Guide."))),Object(i.b)("h2",{id:"installing-from-the-salesforce-appexchange"},"Installing from the Salesforce AppExchange"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in into your Salesforce instance and open ",Object(i.b)("strong",{parentName:"li"},"Setup"),".")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image2.png")}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("a",{parentName:"li",href:"https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000EJH4yUAH"},"Amazon Connect CTI Package URL"),", then choose ",Object(i.b)("strong",{parentName:"li"},"Install for Admins Only"),".")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image3.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image5.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("strong",{parentName:"li"},"Done"),". The ",Object(i.b)("strong",{parentName:"li"},"Installed Packages")," page opens.")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image6.png")}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Quick Find")," box, type ",Object(i.b)("em",{parentName:"li"},"Call Center"),", then choose ",Object(i.b)("strong",{parentName:"li"},"Call Centers"),".")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image7.png")}),Object(i.b)("p",null,"The Call Centers page opens. You should see 3 Call Center\nconfigurations: Classic, Console and Lightning."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image8.png")}),Object(i.b)("h2",{id:"create-the-softphone-layout"},"Create the Softphone Layout"),Object(i.b)("p",null,"Next, we need to create a softphone layout for the solution."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image9.png")}),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Quick Find")," box, type ",Object(i.b)("em",{parentName:"p"},"Softphone Layouts"),", then choose ",Object(i.b)("strong",{parentName:"p"},"Softphone Layouts"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose ",Object(i.b)("strong",{parentName:"p"},"New"),"."))),Object(i.b)("img",{src:Object(s.a)("/img/classic/image10.png")}),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Enter a name for the layout, such as ",Object(i.b)("em",{parentName:"li"},"AmazonConnectDefault"),", then select the ",Object(i.b)("strong",{parentName:"li"},"Is Default Layout")," checkbox.")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image11.png")}),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},'Expand "Display these salesforce.com objects" and select objects that CTI Connector should be able to search, for a screen-pop query. In this example, besides default selection, I\'m adding "Case", as I want to search and screen-pop by CaseID.')),Object(i.b)("img",{src:Object(s.a)("/img/classic/image12.png")}),Object(i.b)("ol",{start:10},Object(i.b)("li",{parentName:"ol"},"If necessary, configure the search behavior in the case that one or multiple records are found upon CTI search.")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image13.png")}),Object(i.b)("ol",{start:11},Object(i.b)("li",{parentName:"ol"},"In this example, keep the default configuration, then choose\n",Object(i.b)("strong",{parentName:"li"},"Save"),".")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image14.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image15.png")}),Object(i.b)("h2",{id:"set-access-permissions"},"Set Access Permissions"),Object(i.b)("p",null,"All users must be assigned the required permission set to access the\nSalesforce metadata included in this package. The Amazon Connect CTI\nintegration package comes with two Permission Sets, one for agents and\none for managers, that grant the users all necessary access to use the\nsoftphone."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in into your Salesforce Org.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"Setup")," ",">"," ",Object(i.b)("strong",{parentName:"p"},"Manage Users")," ",">"," ",Object(i.b)("strong",{parentName:"p"},"Permission Sets"),"."))),Object(i.b)("img",{src:Object(s.a)("/img/classic/image16.png")}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("strong",{parentName:"li"},"AC_Manager"),".")),Object(i.b)("img",{src:Object(s.a)("/img/classic/image17.png")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose ",Object(i.b)("strong",{parentName:"p"},"Manage Assignments"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose ",Object(i.b)("strong",{parentName:"p"},"Add Assignments"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the users to assign the permissions, then choose ",Object(i.b)("strong",{parentName:"p"},"Assign"),". More information on assigning user permissions can be found at: ",Object(i.b)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5"},"https://help.salesforce.com/articleView?id=perm_sets_mass_assign.htm&type=5")))),Object(i.b)("h3",{id:"ac_administrator"},"AC_Administrator"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image18.png")}),Object(i.b)("h3",{id:"ac_manager"},"AC_Manager"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image19.png")}),Object(i.b)("h3",{id:"ac_agent"},"AC_Agent"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image20.png")}),Object(i.b)("h2",{id:"configure-console-experience"},"Configure Console Experience"),Object(i.b)("p",null,"For the Console experience, we are going to use Sample Console\napplication, but the procedure is the same for other applications."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image21.png")}),Object(i.b)("p",null,'In the top navigation bar, select the "+" icon.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image22.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image23.png")}),Object(i.b)("p",null,'Select "AC CTI Adapters"'),Object(i.b)("p",null,'Create a new adapter. Fill in the CTI Adapter Name. For the Call Center Definition Name, type in\nACConsoleAdapter. For the Amazon Connect Instance, type in the login url to the instance (this can be found\nin the Amazon Connect Instance details page), removing everything after ".com".'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image328.png")}),Object(i.b)("p",null,"Select Save."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image24.png")}),Object(i.b)("p",null,"In the Quick Find field, type Visualforce Pages and select Visual Force\nPages:"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image25.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image26.png")}),Object(i.b)("p",null,"As we are currently setting up the Console experience, click on\nAC_ConsoleAdapter page."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image27.png")}),Object(i.b)("p",null,"Click on the ",Object(i.b)("strong",{parentName:"p"},"Preview")," button. A new browser tab will open with the\nURL of this page. It's going to be in this format:"),Object(i.b)("pre",null,"https://sfdcInstance--amazonconnect.visualforce.com/apex/AC_ConsoleAdapter"),Object(i.b)("p",null,'This is what we are going to use as "Origin URL" in our Amazon Connect\nconfiguration. From AWS Console, select Amazon Connect service and then\nselect your Amazon Connect instance:'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image28.png")}),Object(i.b)("p",null,'Select "Application Integration" on the left-hand side:'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image29.png")}),Object(i.b)("p",null,'Click on "Add origin" link and enter the origin URL'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image30.png")}),Object(i.b)("p",null,'Click "Add" button'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image31.png")}),Object(i.b)("p",null,"From the Setup screen, type Apps in Quick Find field and select\nBuild",">","Create",">","Apps:"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image32.png")}),Object(i.b)("p",null,"You will be able to see all applications that are available in your\naccount."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image33.png")}),Object(i.b)("p",null,'Click "Edit" next to the Sample Console application.'),Object(i.b)("p",null,'Scroll to the bottom of the page and "Assign to Profiles"'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image34.png")}),Object(i.b)("p",null,"In this example, I'm assigning Sample console as Visible to System\nAdministrator."),Object(i.b)("p",null,"Choose ",Object(i.b)("strong",{parentName:"p"},"Save"),"."),Object(i.b)("p",null,"From Setup, type Call Centers in the Quick Find field and select Call\nCenters."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image35.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image36.png")}),Object(i.b)("p",null,'Select "Amazon Connect CCP Adapter Console 3.9"'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image37.png")}),Object(i.b)("p",null,"Replace the ",Object(i.b)("strong",{parentName:"p"},"CTI Adapter URL"),' with the AC Lightning Adapter visualforce page url you copied in the previous section.\nIf you wish to specify your version of the ccp user interface, add "?ccpVersion=x", where x is the version of the ccp\n(either 1 or 2). Click on the Save button.'),Object(i.b)("p",null,'Click on the "Manage Call Center Users" button at the bottom of the\npage.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image38.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image39.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image40.png")}),Object(i.b)("p",null,'Set filters and click on the Find button. Select the checkbox next to\nthe user and click "Add to Call Center" button.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image41.png")}),Object(i.b)("p",null,"Repeat the steps to add more users."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image42.png")}),Object(i.b)("p",null,"From the top-right corner, select Sample Console application."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image43.png")}),Object(i.b)("p",null,"In the bottom-right corner, you will be able to see the Phone button."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image44.png")}),Object(i.b)("p",null,"Click on the Phone button to open the softphone pop-up."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image45.png")}),Object(i.b)("p",null,"You will need to Sign in into your Amazon Connect CCP. Click on the Sign\nin to CCP button. A new modal pop-up will show, asking you to enter your\ncredentials."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image46.png")}),Object(i.b)("p",null,"Enter your credentials and click Sign in. Allow Microphone access (if\nasked by browser). Once login is successful, the pop-up window will\nautomatically close."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image47.png")}),Object(i.b)("p",null,'Select "Change status" and select "Available".'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image48.png")}),Object(i.b)("p",null,'Make an inbound phone call to your Amazon Connect instance. The CCP is\ngoing to "ring" and you can answer the call.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image49.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image50.png")}),Object(i.b)("h2",{id:"configure-classic-experience"},"Configure Classic Experience"),Object(i.b)("p",null,"The Salesforce Classic is the easiest to configure, but it has some\nlimitations. Most important limitation is that, with Classic layout,\nthere are no tabs and modal containers, so each time new object is\nselected, a full page reload occurs. This full reload causes softphone\nto be reloaded too, which could cause an issue in the voice call audio\nstream. Because of that, in the Classic environment, we have to run a\nseparate instance of softphone (CPP) which will carry the audio, while\nembedded instance of CCP can be used for call control and screen-pop\nfunctionality."),Object(i.b)("p",null,"First, we have to configure Amazon Connect integration."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image21.png")}),Object(i.b)("p",null,"From the top right corner, select the Sales application."),Object(i.b)("p",null,'In the top navigation bar, select the "+" icon.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image22.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image23.png")}),Object(i.b)("p",null,'Select "AC CTI Adapters"'),Object(i.b)("p",null,'Create a new adapter. Fill in the CTI Adapter Name. For the Call Center Definition Name, type in\nACConsoleAdapter. For the Amazon Connect Instance, type in the login url to the instance (this can be found\nin the Amazon Connect Instance details page), removing everything after ".com".'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image328.png")}),Object(i.b)("p",null,"Select Save."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image24.png")}),Object(i.b)("p",null,"In the Quick Find field, type Visualforce Pages and select Visual Force\nPages:"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image25.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image26.png")}),Object(i.b)("p",null,"As we are currently setting up the Classic experience, click on\nAC_ClassicAdapter page"),Object(i.b)("img",{src:Object(s.a)("/img/classic/image51.png")}),Object(i.b)("p",null,"Click on the Preview button. New browser tab will open with the URL of\nthis page. It's going to be in this format:"),Object(i.b)("pre",null,"https://sfdcInstance--amazonconnect.visualforce.com/apex/AC_ClassicAdapter"),Object(i.b)("p",null,'This is what we are going to use as "Origin URL" in our Amazon Connect\nconfiguration. From AWS Console, select Amazon Connect service and then\nselect your Amazon Connect instance:'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image52.png")}),Object(i.b)("p",null,'Select "Application Integration" on the left-hand side:'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image53.png")}),Object(i.b)("p",null,'Click on "Add origin" link and enter the origin URL'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image54.png")}),Object(i.b)("p",null,'Click "Add" button'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image55.png")}),Object(i.b)("p",null,"From the Salesforce Classic layout, select Setup then type Call Centers\nin the Quick Find field and select Call Centers."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image35.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image36.png")}),Object(i.b)("p",null,'Select "Amazon Connect CCP Adapter Classic 3.9"'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image56.png")}),Object(i.b)("p",null,"Replace the ",Object(i.b)("strong",{parentName:"p"},"CTI Adapter URL"),' with the AC Lightning Adapter visualforce page url you copied in the previous section.\nIf you wish to specify your version of the ccp user interface, add "?ccpVersion=x", where x is the version of the ccp\n(either 1 or 2). Click on the Save button.'),Object(i.b)("p",null,'Click on the "Manage Call Center Users" button at the bottom of the\npage.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image38.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image57.png")}),Object(i.b)("p",null,'Click on the "Add More Users" button.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image58.png")}),Object(i.b)("p",null,'Set filters and click on the Find button. Select the checkbox next to\nthe user and click "Add to Call Center" button.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image59.png")}),Object(i.b)("p",null,"Repeat the steps to add more users."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image60.png")}),Object(i.b)("p",null,"From the top-right corner, select Sales application."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image21.png")}),Object(i.b)("p",null,"On the left-hand side, you will be able to see the Phone container."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image61.png")}),Object(i.b)("p",null,"You will need to Sign in into your Amazon Connect CCP. Click on the Sign\nin to CCP button. A new browser tab will open, asking you to enter your\ncredentials."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image62.png")}),Object(i.b)("p",null,"Enter your credentials and click Sign in. Allow Microphone access (if\nasked by browser). Once Login is successful, the new tab with CCP will\nstay open, as this tab is going to carry the audio for voice calls."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image63.png")}),Object(i.b)("p",null,"Switch back to Salesforce tab in your browser."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image64.png")}),Object(i.b)("p",null,'Select "Change status" and select "Available".'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image65.png")}),Object(i.b)("p",null,'Make an inbound phone call to your Amazon Connect instance. The CCP is\ngoing to "ring" and you can answer the call.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image66.png")}),Object(i.b)("img",{src:Object(s.a)("/img/classic/image67.png")}),Object(i.b)("p",null,"Some CTI Flow features will reload the page the agent is currently on.\nThe page is fully reloaded, but the softphone preserved the audio\nstream, as another instance of CCP was running in the 2^nd^ tab. If the\n2nd tab is closed, the audio will be lost. The 2^nd^ CCP instance can\nalso run in a separate browser window, if preferred."),Object(i.b)("p",null,"Go to Salesforce Setup page and type Call Centers in Quick Find, then\nselect Call Centers."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image68.png")}),Object(i.b)("p",null,'Select "Amazon Connect CCP Classic"'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image69.png")}),Object(i.b)("p",null,'Click on the Edit button and find the "Amazon Connect CCP Login Popup"\nfield. By default, this field is set to "false", which means that Login\nPopup will be opened in a 2nd tab. If we change this value to "true",\nthen Login Popup will be opened in a new browser window.'),Object(i.b)("p",null,'You may also notice that "Amazon Connect CCP Medialess" field is set to\n"true". This basically means that embedded CCP instance will not carry\nany media. Set the value to "true" and click on the Save button. Go back\nto Sales application. If CCP is already logged in, please log out.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image70.png")}),Object(i.b)("p",null,'Click on the "Sign in to CCP" button and new browser window will open,\nasking you for credentials.'),Object(i.b)("img",{src:Object(s.a)("/img/classic/image71.png")}),Object(i.b)("p",null,"Enter your credentials and click Sign In. The CCP application will\nlogin, but popup window will stay open and it will host the 2^nd^ CCP\nwhich will carry the audio stream. This window can be minimized or moved\nto 2^nd^ screen."),Object(i.b)("img",{src:Object(s.a)("/img/classic/image72.png")}))}p.isMDXComponent=!0}}]);