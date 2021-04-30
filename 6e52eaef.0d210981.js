(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return u}));var c=n(0),i=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=m(n),b=c,u=g["".concat(r,".").concat(b)]||g[b]||p[b]||a;return n?i.a.createElement(u,o(o({ref:t},l),{},{components:n})):i.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,r=new Array(a);r[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,r[1]=o;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var c=n(3),i=n(7),a=(n(0),n(133)),r={id:"07-amazon-connect-reports",title:"Amazon Connect Reports in Salesforce"},o={unversionedId:"classic/03-cti-adapter/07-amazon-connect-reports",id:"classic/03-cti-adapter/07-amazon-connect-reports",isDocsHomePage:!1,title:"Amazon Connect Reports in Salesforce",description:"Out of the box, within Amazon Connect, you can generate a number of",source:"@site/docs/classic/03-cti-adapter/07-amazon-connect-reports.md",slug:"/classic/03-cti-adapter/07-amazon-connect-reports",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/07-amazon-connect-reports",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/07-amazon-connect-reports.md",version:"current",sidebar:"classic",previous:{title:"Outbound Campaign Calls",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/06-outbound-campaign-calls"},next:{title:"CTI Flows",permalink:"/amazon-connect-salesforce-cti/docs/classic/03-cti-adapter/08-cti-flows"}},s=[],l={toc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Out of the box, within Amazon Connect, you can generate a number of\nreal-time and historical metric reports to monitor efficiency and\nutilization, agent performance, and other information about your contact\ncenter."),Object(a.b)("p",null,"Real-time metrics reports show real-time or near-real time metrics\ninformation about activity in your contact center. Historical metrics\nreports include data about past, completed activity and performance in\nyour contact center. You can customize the default report settings to\nget the view of the data that is most meaningful to you and your\norganization. You can change the time frame for the report, which\nmetrics are included in the report, and how the data is grouped within\nthe report."),Object(a.b)("p",null,"Amazon Connect provides you the ability to export reports to the S3\nbucket of your choice, in comma separated value (CSV) format. This\nenables broad compatibility across many analytics and WFM tools.\nEncryption is enabled by default for all saved reports, using S3\nserver-side encryption with KMS. Disabling encryption is not\nrecommended. You can schedule reports run hourly, daily, and monthly.\nThe output will be stored in the S3 bucket. Each report can have\ndifferent name and prefix."),Object(a.b)("p",null,"For the particular integration, at 30-minute intervals, Amazon Connect\ngenerates CSV reports which contain statistics for the last (30 minute)\nperiod. Two different reports are available to transport Agent and Queue\ninterval data from Amazon Connect to Salesforce."),Object(a.b)("p",null,"Each time a new report is exported, S3 is going to trigger a Lambda\nfunction from Amazon Connect Salesforce Lambda package (AWS Serverless\nApplication Repository), which is going to import the date into your\nSalesforce instance."),Object(a.b)("p",null,"Amazon Connect scheduled, Agent and Queue reports, are not automatically\nconfigured by the Amazon Connect Salesforce Lambda package, therefore\nthe first step would be to create and schedule these reports."),Object(a.b)("p",null,"In your Amazon Connect instance, navigate to Metrics and Quality ",">",'\nHistorical metrics. By default, you will be able to see the two reports\nneeded for this integration: "Contact metrics" and "Agent Performance".'),Object(a.b)("img",{src:"/img/classic/image251.png"}),Object(a.b)("img",{src:"/img/classic/image252.png"}),Object(a.b)("p",null,'Click on the "Contact metrics" to open the report and then click on the\ngrey gear icon on the right-hand side to configure it.'),Object(a.b)("img",{src:"/img/classic/image253.png"}),Object(a.b)("p",null,"Set the report configuration by following the screenshots below:"),Object(a.b)("img",{src:"/img/classic/image254.png"}),Object(a.b)("img",{src:"/img/classic/image255.png"}),Object(a.b)("p",null,"Optionally set the filters:"),Object(a.b)("img",{src:"/img/classic/image256.png"}),Object(a.b)("p",null,"And most importantly, select the correct metrics in the last tab:"),Object(a.b)("img",{src:"/img/classic/image257.png"}),Object(a.b)("img",{src:"/img/classic/image258.png"}),Object(a.b)("img",{src:"/img/classic/image259.png"}),Object(a.b)("img",{src:"/img/classic/image260.png"}),Object(a.b)("img",{src:"/img/classic/image261.png"}),Object(a.b)("p",null,"Once metrics are selected, click the Apply button. Next, click the\ndrop-down arrow on the right-hand side and select Schedule."),Object(a.b)("img",{src:"/img/classic/image262.png"}),Object(a.b)("p",null,"Set the report name, for instance ",Object(a.b)("em",{parentName:"p"},"sfIntervalQueue")," and click Continue"),Object(a.b)("img",{src:"/img/classic/image263.png"}),Object(a.b)("img",{src:"/img/classic/image264.png"}),Object(a.b)("p",null,"On the next screen, set Recurrence as:"),Object(a.b)("img",{src:"/img/classic/image265.png"}),Object(a.b)("p",null,"Switch to Delivery Options tab and set the Prefix as\n",Object(a.b)("em",{parentName:"p"},"SFDC/Queue")),Object(a.b)("img",{src:"/img/classic/image266.png"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\\\n"),"Click the Create button to create the Schedule for the report. The\nreport can be found in Metrics and quality ",">"," Saved Reports ",">","\nHistorical metrics"),Object(a.b)("img",{src:"/img/classic/image267.png"}),Object(a.b)("img",{src:"/img/classic/image268.png"}),Object(a.b)("p",null,"Click on the Clock (Schedule Report) icon to see the configuration.\nPlease note the File name and the Path for the CSV file to be created."),Object(a.b)("img",{src:"/img/classic/image269.png"}),Object(a.b)("p",null,"The Queue Interval report has been created and scheduled to export the\ndata. After a while, you will be able to see CSV files in the S3 bucket."),Object(a.b)("img",{src:"/img/classic/image270.png"}),Object(a.b)("p",null,"Repeat the steps for the Agent Interval report:"),Object(a.b)("p",null,"In your Amazon Connect instance, navigate to Metrics and Quality ",">","\nHistorical metrics."),Object(a.b)("img",{src:"/img/classic/image271.png"}),Object(a.b)("img",{src:"/img/classic/image252.png"}),Object(a.b)("p",null,'Choose the "Agent Performance" metrics to open the report and then click\non the grey gear icon on the right-hand side to configure it.'),Object(a.b)("img",{src:"/img/classic/image272.png"}),Object(a.b)("p",null,"Set the report configuration by following the screenshots below:"),Object(a.b)("img",{src:"/img/classic/image254.png"}),Object(a.b)("img",{src:"/img/classic/image273.png"}),Object(a.b)("p",null,"Optionally set the filters:"),Object(a.b)("img",{src:"/img/classic/image256.png"}),Object(a.b)("p",null,"And most importantly, select the correct metrics in the last tab:"),Object(a.b)("img",{src:"/img/classic/image274.png"}),Object(a.b)("img",{src:"/img/classic/image275.png"}),Object(a.b)("img",{src:"/img/classic/image276.png"}),Object(a.b)("img",{src:"/img/classic/image277.png"}),Object(a.b)("img",{src:"/img/classic/image278.png"}),Object(a.b)("p",null,"Once metrics are selected, click the Apply button. Next, click the\ndrop-down arrow on the right-hand side and select Schedule."),Object(a.b)("img",{src:"/img/classic/image262.png"}),Object(a.b)("p",null,"Set the report name, for instance ",Object(a.b)("em",{parentName:"p"},"sfIntervalAgent")," and click Continue"),Object(a.b)("img",{src:"/img/classic/image279.png"}),Object(a.b)("img",{src:"/img/classic/image264.png"}),Object(a.b)("p",null,"On the next screen, set Recurrence as:"),Object(a.b)("img",{src:"/img/classic/image265.png"}),Object(a.b)("p",null,"Switch to Delivery Options tab and set the Prefix as SFDC/Agent"),Object(a.b)("img",{src:"/img/classic/image280.png"}),Object(a.b)("p",null,"Click the Create button to create the Schedule for the report. The\nreport can be found in Metrics and quality ",">"," Saved Reports ",">","\nHistorical metrics"),Object(a.b)("img",{src:"/img/classic/image267.png"}),Object(a.b)("img",{src:"/img/classic/image281.png"}),Object(a.b)("p",null,"Click on the Clock (Schedule Report) icon to see the configuration.\nPlease note the File name and the Path for the CSV file to be created."),Object(a.b)("img",{src:"/img/classic/image282.png"}),Object(a.b)("p",null,"The Agent Interval report has been created and scheduled to export the\ndata. After a while, you will be able to see CSV files in the S3 bucket."),Object(a.b)("img",{src:"/img/classic/image283.png"}),Object(a.b)("p",null,"Amazon Connect Salesforce Lambda package (AWS Serverless Application\nRepository) deploys two Lambda functions to handle the reporting\nintegration: ",Object(a.b)("em",{parentName:"p"},"sfIntervalQueue")," and ",Object(a.b)("em",{parentName:"p"},"sfIntervalAgent"),". In the next step,\nwe are going to set Triggers for these functions."),Object(a.b)("p",null,"From the AWS Console, select Lambda service and choose ",Object(a.b)("em",{parentName:"p"},"sfIntervalQueue"),"\nLambda function. On the left-hand side, select S3 as a trigger."),Object(a.b)("img",{src:"/img/classic/image284.png"}),Object(a.b)("p",null,"After the trigger is selected:"),Object(a.b)("img",{src:"/img/classic/image285.png"}),Object(a.b)("p",null,"We need to set the trigger configuration. Select the Bucket where the\nCSV files are stored (from the Filename in previous steps). Set Event\ntype to PUT and set Prefix to the Queue path (from the Filename in\nprevious steps). Click the Add button and Save the function."),Object(a.b)("img",{src:"/img/classic/image286.png"}),Object(a.b)("p",null,"The final configuration should look like this:"),Object(a.b)("img",{src:"/img/classic/image287.png"}),Object(a.b)("p",null,"This Lambda function transfers the Queue reporting data to your SFDC\ninstance. Next, we have to repeat steps for Agent reporting Lambda\nfunction."),Object(a.b)("p",null,"From the AWS Console, select Lambda service and choose ",Object(a.b)("em",{parentName:"p"},"sfIntervalAgent"),"\nLambda function. On the left-hand side, select S3 as a trigger."),Object(a.b)("img",{src:"/img/classic/image284.png"}),Object(a.b)("p",null,"After the trigger is selected:"),Object(a.b)("img",{src:"/img/classic/image285.png"}),Object(a.b)("p",null,"We need to set the trigger configuration. Select the Bucket where the\nCSV files are stored (from the Filename in previous steps). Set Event\ntype to PUT and set Prefix to the Agent path (from the Filename in\nprevious steps). Click the Add button and Save the function."),Object(a.b)("img",{src:"/img/classic/image288.png"}),Object(a.b)("p",null,"The final configuration should look like this:"),Object(a.b)("img",{src:"/img/classic/image289.png"}),Object(a.b)("p",null,"This Lambda function transfers the Agent reporting data to your SFDC\ninstance."),Object(a.b)("p",null,"The Amazon Connect CTI Adapter comes with a predefined set of reports,\nwhich can be customized or additional reports can be created by\nleveraging the imported data. To see the list of built-in reports, login\ninto your SFDC instance and open the App Launcher, then choose Reports."),Object(a.b)("img",{src:"/img/classic/image290.png"}),Object(a.b)("p",null,"All Amazon Connect built-in reports are deployed in Amazon Connect\nReports folder:"),Object(a.b)("img",{src:"/img/classic/image291.png"}),Object(a.b)("p",null,"To see the exact layout of imported data for Queue, select the Queue All\nInterval 30 Today report:"),Object(a.b)("img",{src:"/img/classic/image292.png"}),Object(a.b)("p",null,"To see the exact layout of imported data for Agent, select the Agent All\nInterval 30 Today report:"),Object(a.b)("img",{src:"/img/classic/image293.png"}))}m.isMDXComponent=!0}}]);