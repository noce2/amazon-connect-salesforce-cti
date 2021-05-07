(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(133)),s=n(134),i={id:"02-omnipresence-agent-state-sync",title:"Omnipresence Agent State Sync"},o={unversionedId:"classic/03-cti-adapter/02-omnipresence-agent-state-sync",id:"classic/03-cti-adapter/02-omnipresence-agent-state-sync",isDocsHomePage:!1,title:"Omnipresence Agent State Sync",description:"Amazon Connect CTI Connector supports the bidirectional synchronization",source:"@site/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync.md",slug:"/classic/03-cti-adapter/02-omnipresence-agent-state-sync",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/02-omnipresence-agent-state-sync.md",version:"current",sidebar:"classic",previous:{title:"CTI Adapter Configuration",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/01-cti-adapter-configuration"},next:{title:"Contact Attributes Display",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/03-contact-attributes-display"}},l=[{value:"Enable Omnichannel",id:"enable-omnichannel",children:[]},{value:"Create Presence Statuses",id:"create-presence-statuses",children:[]},{value:"Configure Enabled Service Presences Status Access",id:"configure-enabled-service-presences-status-access",children:[{value:"Amazon Connect System Statuses",id:"amazon-connect-system-statuses",children:[]}]},{value:"Configure Presence Status Synchronization Rules",id:"configure-presence-status-synchronization-rules",children:[{value:"Presence Status Configuration Rules",id:"presence-status-configuration-rules",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Amazon Connect CTI Connector supports the bidirectional synchronization\nof Amazon Connect agent states with Salesforce omnichannel presence\nstates."),Object(c.b)("img",{src:Object(s.a)("/img/classic/image90.png")}),Object(c.b)("h2",{id:"enable-omnichannel"},"Enable Omnichannel"),Object(c.b)("p",null,"In order to sync your Connect User status with your Omni-Channel agent\nstatus, you must configure Omni-Channel Presence Syncing. This will make\nyour Omni-Channel presence status match your Amazon Connect Agent Status\nand vice versa."),Object(c.b)("p",null,'First, we must enable omni-channel. To do this, navigate to "Setup" and\ntype "omni" into the Quick Find box, then select "Omni-Channel Settings"\nfrom the menu.'),Object(c.b)("img",{src:Object(s.a)("/img/classic/image91.png")}),Object(c.b)("p",null,'Place a check in the checkbox for "Enable Omni-Channel".'),Object(c.b)("img",{src:Object(s.a)("/img/classic/image92.png")}),Object(c.b)("h2",{id:"create-presence-statuses"},"Create Presence Statuses"),Object(c.b)("p",null,"In this step, we need to add and map Presence Statuses to what is\ndefined in Amazon Connect under Users -",">"," Agent Status."),Object(c.b)("img",{src:Object(s.a)("/img/classic/image93.png")}),Object(c.b)("p",null,'Open the Setup in your Salesforce Org and type "presence", then select\n"Presence Statuses" from the menu. Click the "New" button and add\nstatuses to match what is defined in Amazon Connect.'),Object(c.b)("img",{src:Object(s.a)("/img/classic/image94.png")}),Object(c.b)("p",null,"Each status is flagged as either Online or Busy. For each status that is\nmarked as Online, you will need to specify a service channel to\nassociate the presence status."),Object(c.b)("img",{src:Object(s.a)("/img/classic/image95.png")}),Object(c.b)("h2",{id:"configure-enabled-service-presences-status-access"},"Configure Enabled Service Presences Status Access"),Object(c.b)("p",null,"Next, we need to assign access to these statuses by going to Profiles in\nSalesforce Setup, and ensure that the agent will be able to access the\nstatuses that map to their Amazon Connect statuses."),Object(c.b)("p",null,'In the Salesforce Setup, under Manage Users, select Profiles, then\nselect the user profile to edit. Scroll down the page until you find the\nsection labeled "Enabled Service Presence Status Access".'),Object(c.b)("img",{src:Object(s.a)("/img/classic/image96.png")}),Object(c.b)("p",null,'Click the "Edit" button and on the next page, "Add" presence statuses\nyou want to have enabled for the user.'),Object(c.b)("img",{src:Object(s.a)("/img/classic/image97.png")}),Object(c.b)("h3",{id:"amazon-connect-system-statuses"},"Amazon Connect System Statuses"),Object(c.b)("p",null,"The following Amazon Connect CCP statuses are system statuses that can be used in presence sync.\nPlease note however that these statuses are restricted and you cannot set the Amazon Connect status\nto the below."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Busy - agent is in a call"),Object(c.b)("li",{parentName:"ul"},"Pending - agent is receiving a request for a queue callback"),Object(c.b)("li",{parentName:"ul"},"PendingBusy - agent is receiving call"),Object(c.b)("li",{parentName:"ul"},"CallingCustomer - agent is calling customer"),Object(c.b)("li",{parentName:"ul"},"AfterCallWork - agent is in the after call work screen")),Object(c.b)("h2",{id:"configure-presence-status-synchronization-rules"},"Configure Presence Status Synchronization Rules"),Object(c.b)("p",null,"The Amazon Connect Salesforce CTI Adapter provides a rules-based\npresence status synchronization system allowing for flexibility in\nmapping agent states between Amazon Connect and Salesforce Omnichannel."),Object(c.b)("p",null,"Presence synchronization actions may be configured based upon manual\nagent state changes (agent goes on break), system agent state changes\n(answering a call), omnichannel agent work (agent accepts an email), and\nomnichannel workload changes (agent completes an email) as examples."),Object(c.b)("h3",{id:"presence-status-configuration-rules"},"Presence Status Configuration Rules"),Object(c.b)("p",null,"Presence Sync Rules are evaluated based on specific events. The\navailable events are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Connect Agent State Change:")," The Connect agent's state has\nchanged.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Agent State Change:")," The Salesforce agent's state has\nchanged.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Agent Logout:")," The Salesforce agent has logged out.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Work Accepted:")," The Salesforce agent has accepted\nwork.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Workload Changed:")," The Salesforce agent's workload has\nchanged."))),Object(c.b)("p",null,"Once the event is triggered, the CTI adapter will evaluate the provided\ncriteria. The criteria is established by comparing Operand A, using\nstandard comparator options, against Operand B. Possible options for\nOperand A and B are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Connect Agent New State:")," The Connect agent's new state value")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Connect Agent Old State:")," The Connect agent's old (previous)\nstate value")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Agent New State:")," The Salesforce agent's new state\nvalue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Service Channel:")," The service channel upon which the\nSalesforce agent has accepted work")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Previous Workload:")," The Salesforce agent's previous\nworkload")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Previous Workload Pct:")," The Salesforce agent's\npervious workload expressed as a percent of configured capacity")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce New Workload:")," The Salesforce agent's new workload")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce New Workload Pct:")," The Salesforce agent's new workload\nexpressed as a percent of configured capacity")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Salesforce Configured Capacity:")," The Salesforce agent's\nconfigured capacity")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Static Value:"),' The user may provide a value. For example, a\ncustom agent state name or other alphanumeric value. When Static\nValue is selected a "Value" field becomes visible to accept the\nusers static value input.'))),Object(c.b)("p",null,"Available comparators are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Equal to:")," Are Operand A and Operand B equal")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Not equal to:")," Are Operand A and Operand B not equal")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Greater than:")," Is Operand A greater than Operand B")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Greater than or equal to:")," Is Operand A greater than or equal to\nOperand B")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Less than:")," Is Operand A less than Operand B")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Less than or equal to:")," Is Operand A less than or equal to\nOperand B"))),Object(c.b)("img",{src:Object(s.a)("/img/classic/image98.png")}),Object(c.b)("p",null,"The configuration setting illustrated in the previous example, are\ndescribed below:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"source -- The triggered event. In this case, an Amazon Connect agent\nstate change is the triggering event")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"destination -- The target system on which to execute the action")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"criteria -- The values and comparator that will be evaluated to\ndetermine whether or not to trigger the action"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"operandA -- The left side of the criteria statement")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"operandB -- The right side of the criteria statement")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"comparator -- The comparison operator used to evaluate the\ncriteria statement")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"state -- The target agent state of the destination system"))),Object(c.b)("p",null,"Example rule:"),Object(c.b)("img",{src:Object(s.a)("/img/classic/image99.png")}),Object(c.b)("p",null,"Summary: This rule is triggered when the Connect agent's state is\nchanged (Source). If their state is changed to the static value (Operand\nB) \"Lunch\" (Operand B Value), then the Salesforce Agent's state\n(Destination) is set to Lunch (Value)."))}b.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,g=b["".concat(s,".").concat(m)]||b[m]||u[m]||c;return n?r.a.createElement(g,i(i({ref:t},l),{},{components:n})):r.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(22),r=n(135);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,s=c.forcePrependBaseUrl,i=void 0!==s&&s,o=c.absolute,l=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(c,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},135:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);