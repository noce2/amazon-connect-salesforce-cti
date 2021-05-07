(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(133)),i=n(134),c={id:"01-configuration",title:"Appendix B: Configuring Salesforce as Your Identity Provider"},b={unversionedId:"lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",id:"lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",isDocsHomePage:!1,title:"Appendix B: Configuring Salesforce as Your Identity Provider",description:"Prerequisites",source:"@site/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration.md",slug:"/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",permalink:"/amazon-connect-salesforce-cti-staging/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/05-appendices/appendix-b-configuring-salesforce-as-your-identity-provider/01-configuration.md",version:"current",sidebar:"lightning",previous:{title:"Configure Salesforce Omnichannel for Testing",permalink:"/amazon-connect-salesforce-cti-staging/docs/lightning/05-appendices/appendix-a-required-salesforce-configurations/02-configure-salesforce-omnichannel"},next:{title:"Appendix C: CTI Flow Sources and Events",permalink:"/amazon-connect-salesforce-cti-staging/docs/lightning/05-appendices/appendix-c-cti-flow-sources-and-events/01-cti-flow-sources-and-events"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuring Salesforce as an Identity Provider",id:"configuring-salesforce-as-an-identity-provider",children:[]},{value:"Configure the Identity Provider, Policy, and Role in the AWS Console",id:"configure-the-identity-provider-policy-and-role-in-the-aws-console",children:[]},{value:"Complete the Base Salesforce Configuration",id:"complete-the-base-salesforce-configuration",children:[]},{value:"Complete the Amazon Connect Configuration",id:"complete-the-amazon-connect-configuration",children:[]},{value:"Final Configuration for the Lightning Experience",id:"final-configuration-for-the-lightning-experience",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"To complete the SSO integration between Salesforce and Amazon Connect,\nyou need:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"An Amazon Connect Instance configured for SAML authentication")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Appropriate AWS permissions to create Identity and Access Management\n(IAM) roles and policies")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Administrator permissions for your Salesforce Org")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Amazon Connect CTI Adapter AppExchange package installed and\nconfigured"))),Object(r.b)("h3",{id:"configuring-salesforce-as-an-identity-provider"},"Configuring Salesforce as an Identity Provider"),Object(r.b)("p",null,"First, we need to enable Salesforce to act as an identity provider\n(IdP). An IdP performs end user authentication and provides the\ncredentials to the requesting service provider. In this case, Salesforce\nserver as the IdP and Amazon Connect the service provider, while being\nembedded in Salesforce."),Object(r.b)("h4",{id:"setup-identity-provider--download-metadata"},"Setup Identity Provider & Download Metadata"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(r.b)("strong",{parentName:"p"},"Setup"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Quick Find")," field, type ",Object(r.b)("strong",{parentName:"p"},"Identity Provider,")," then select\n",Object(r.b)("strong",{parentName:"p"},"Identity Provider")," from the result list")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Identity Provider may be enabled by default. If not, choose ",Object(r.b)("strong",{parentName:"p"},"Enable\nIdentity Provider"),", then select the appropriate certificate and\nselect Save."))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image234.png")}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("strong",{parentName:"li"},"Download Metadata")," and save the file to your computer.")),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image235.png")}),Object(r.b)("h3",{id:"configure-the-identity-provider-policy-and-role-in-the-aws-console"},"Configure the Identity Provider, Policy, and Role in the AWS Console"),Object(r.b)("p",null,"Next, you need to configure the identity provider (Salesforce) in the\nAWS console and provide access to Amazon Connect via IAM policies and\nroles. This allows AWS to acknowledge Salesforce as the identity\nprovider and to provide users authenticated through Salesforce with the\naccess required to login to Amazon Connect."),Object(r.b)("h4",{id:"configure-the-identity-provider"},"Configure the Identity Provider"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Login to the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},Object(r.b)("strong",{parentName:"a"},"AWS console")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Identity providers")))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image236.png")}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Create Provider"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the Configure Provider screen, select ",Object(r.b)("strong",{parentName:"p"},"SAML")," as the Provider\nType"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image237.png")}),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the Provider Name to ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnect"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Import the metadata file you downloaded previously by selecting\nChoose File and navigating to the downloaded metadata file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select Next Step")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose Create")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Identity provider has been created"))),Object(r.b)("h4",{id:"create-the-iam-role-and-policy"},"Create the IAM Role and Policy"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Login to the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},Object(r.b)("strong",{parentName:"a"},"AWS console")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Roles,")," then choose ",Object(r.b)("strong",{parentName:"p"},"Create role"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"SAML 2.0 federation"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the SAML provider dropdown, select the provider you just created,\nwhich should be named ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnect"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the radio button for ",Object(r.b)("strong",{parentName:"p"},"Allow programmatic and AWS Management\nConsole access"),". The Attribute and Value fields should\nauto-populate"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image238.png")}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Next: Permissions"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the Attach permissions policies page, select ",Object(r.b)("strong",{parentName:"p"},"Create policy."),"\nThis will open a new browser tab.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose the ",Object(r.b)("strong",{parentName:"p"},"JSON")," tab to switch to the JSON editor")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replace the existing JSON with the following:"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Statement1",\n            "Effect": "Allow",\n            "Action": "connect:GetFederationToken",\n            "Resource": [\n                "**YOUR ARN**/user/${aws:userid}"\n            ]\n        }\n    ]\n}\n')),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replace ",Object(r.b)("strong",{parentName:"p"},"YOUR ARN")," with the ARN of your Amazon Connect\ninstance. To find your Amazon Connect instance ARN:")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open a new tab in your browser and navigate to ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon Connect\nConsole"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on the name (alias) of your Amazon Connect instance")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the Instance ARN and paste it to your computer's notepad (you\nwill use it in a few places)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Review policy"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the Name to ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnectPolicy"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Create Policy"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the Policy has been created, close the tab, go back to the\noriginal (Role) tab in your browser and select the ",Object(r.b)("strong",{parentName:"p"},"Refresh"),"\nbutton (do not refresh the browser)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the search field, enter ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnectPolicy")," and select\nthe box to attach the policy."))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image239.png")}),Object(r.b)("ol",{start:20},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Next: Tags")," and set tags if desired, then choose ",Object(r.b)("strong",{parentName:"p"},"Next:\nReview"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Name the Role ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnectRole")," and provide a description if\nyou like")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select Create role"))),Object(r.b)("h3",{id:"complete-the-base-salesforce-configuration"},"Complete the Base Salesforce Configuration"),Object(r.b)("p",null,"Next, you need to configure a Connect App in Salesforce and provide\nfurther configuration to complete the SAML integration."),Object(r.b)("h4",{id:"create-the-connected-app-in-salesforce"},"Create the Connected App in Salesforce"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to ",Object(r.b)("strong",{parentName:"p"},"Setup"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Quick Find")," field, type ",Object(r.b)("strong",{parentName:"p"},"App Manager,")," then select ",Object(r.b)("strong",{parentName:"p"},"App\nManager")," from the result list")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select New Connected App"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image240.png")}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Provide a name for the Connected App, such as ",Object(r.b)("strong",{parentName:"p"},"AmazonConnectSAML,"),"\nthen press tab and the API Name should auto-populate")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Provide an email contact address"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image241.png")}),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the Web App Settings section, choose ",Object(r.b)("strong",{parentName:"p"},"Enable SAML"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Leave Start URL empty")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set Entity Id to the same name that you gave the Identity Provider\nin the IAM console, which should be ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnect"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set ACS URL as ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://signin.aws.amazon.com/saml"},"https://signin.aws.amazon.com/saml")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set Subject Type as ",Object(r.b)("strong",{parentName:"p"},"Persistent ID")))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image242.png")}),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Save"),". The screen should refresh and the new Connected App\nshould be displayed")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scroll down to the ",Object(r.b)("strong",{parentName:"p"},"Custom Attributes")," section and select ",Object(r.b)("strong",{parentName:"p"},"New"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set Key as\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://aws.amazon.com/SAML/Attributes/RoleSessionName"},"https://aws.amazon.com/SAML/Attributes/RoleSessionName")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set Value as ",Object(r.b)("strong",{parentName:"p"},"$User.Email"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Save")))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image243.png")}),Object(r.b)("ol",{start:16},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select New again to configure another custom attribute")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set Key as ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://aws.amazon.com/SAML/Attributes/Role"},"https://aws.amazon.com/SAML/Attributes/Role")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Value is going to be a combination of the Indentity Provider and\nIAM Role ARNs."),Object(r.b)("p",{parentName:"li"},"a.  In a new tab, open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home"},"AWS identity and Access Management (IAM)\nConsole")),Object(r.b)("p",{parentName:"li"},"b.  On the left navigation, select ",Object(r.b)("strong",{parentName:"p"},"Identity providers")),Object(r.b)("p",{parentName:"li"},"c.  Select the Identity provider you created earlier, which should\nbe named ",Object(r.b)("strong",{parentName:"p"},"SalesforceConnect")),Object(r.b)("p",{parentName:"li"},"d.  Copy the ",Object(r.b)("strong",{parentName:"p"},"Provider ARN")," to your computer's notepad"),Object(r.b)("p",{parentName:"li"},"e.  Return to the IAM console and select ",Object(r.b)("strong",{parentName:"p"},"Roles")),Object(r.b)("p",{parentName:"li"},"f.  Select the Role you created earlier, which should be\n",Object(r.b)("strong",{parentName:"p"},"SalesforceConnectRole")),Object(r.b)("p",{parentName:"li"},"g.  Copy the ",Object(r.b)("strong",{parentName:"p"},"Role ARN")," to your computer's notepad"),Object(r.b)("p",{parentName:"li"},"h.  Format the combined value as follows:\n'Identity Provider ARN' & ',' & 'Role ARN'"),Object(r.b)("p",{parentName:"li"},"i.  Paste the formatted value into the Custom Attribute Value")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Save")))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image244.png")}),Object(r.b)("ol",{start:20},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"At the top of the Connected App description, select ",Object(r.b)("strong",{parentName:"p"},"Manage"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scroll down to the ",Object(r.b)("strong",{parentName:"p"},"SAML login Information")," section")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the ",Object(r.b)("strong",{parentName:"p"},"IdP-Initiated Login URL")," to your computer's notepad")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scroll down to find the Profiles section, then select ",Object(r.b)("strong",{parentName:"p"},"Manage\nProfiles"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select a profile from the list, for example System Administrator for\ntesting purposes")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Save"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open a new tab in your browser and navigate to IdP-Initiated Login\nURL that you copied in an earlier step")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser will redirect to AWS Console and log you in\nautomatically as a federated user\n",Object(r.b)("strong",{parentName:"p"},"Note:")," you may be able to see AWS services, but you should have\nno configuration rights."))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image245.png")}),Object(r.b)("ol",{start:28},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Federated Login consists of the Role name and your Salesforce\nemail address.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Initial validation is complete"))),Object(r.b)("h3",{id:"complete-the-amazon-connect-configuration"},"Complete the Amazon Connect Configuration"),Object(r.b)("p",null,"The last step in the SAML setup is to add users to Amazon Connect that\nexist in your Salesforce org, then validate login. It is critical that\nthe usernames for both platforms match exactly."),Object(r.b)("h4",{id:"add-users-to-amazon-connect"},"Add Users to Amazon Connect"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In a new browser tab, login to the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},"AWS\nconsole"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon Connect\nConsole"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the name (alias) of your Amazon Connect instance")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Login as administrator")))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image246.png")}),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Within the Amazon Connect administration portal, select ",Object(r.b)("strong",{parentName:"p"},"Users"),"\nthen choose ",Object(r.b)("strong",{parentName:"p"},"User Management"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Leave ",Object(r.b)("strong",{parentName:"p"},"Create and setup a new user")," selected and choose ",Object(r.b)("strong",{parentName:"p"},"Next"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Complete the First and Last name fields as appropriate")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the login name to match the ",Object(r.b)("strong",{parentName:"p"},"Email Address")," of your Salesforce\nuser")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the ",Object(r.b)("strong",{parentName:"p"},"Routing Profile"),". In this example, the default Basic\nRouting Profile is shown")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the ",Object(r.b)("strong",{parentName:"p"},"Security Profile"),". In this example, ",Object(r.b)("em",{parentName:"p"},"Admin")," is shown"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image247.png")}),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Save"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Create Users"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Repeat this process as required for your staff"))),Object(r.b)("h3",{id:"final-configuration-for-the-lightning-experience"},"Final Configuration for the Lightning Experience"),Object(r.b)("p",null,"Now that all of the underlying pieces are in place, the last steps are\nto create the Amazon Connect Single Sign On URL and validate that it\nworks correctly, then configure the Lightning CTI adapter and login the\nagent."),Object(r.b)("h4",{id:"create-the-amazon-connect-sso-url"},"Create the Amazon Connect SSO URL"),Object(r.b)("p",null,"You create the Amazon Connect SSO URL by combining the IdP-Initiated\nLogin URL that you copied earlier, and a relay state URL that will\nredirect the authenticated user to your Amazon Connect instance."),Object(r.b)("p",null,"The 'RelayState' will be in the following format:"),Object(r.b)("pre",null,"https://console.aws.amazon.com/connect/federate/",Object(r.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(r.b)("p",null,'Please note that "console.aws.amazon.com" refers to US-East-1 region (N.\nVirginia). If your Amazon Connect instance is in a different region,\nplease use the region Console URL. For example:'),Object(r.b)("pre",null,"https://us-west-2.console.aws.amazon.com/connect/federate/",Object(r.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To begin, format the relay state URL by replacing ",Object(r.b)("strong",{parentName:"p"},"InstanceId"),"\nwith your Instance Id. To find your Amazon Connect Instance Id:"),Object(r.b)("p",{parentName:"li"},"a.  Open a new tab in your browser and navigate to the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/connect/home"},"Amazon\nConnect Console")),Object(r.b)("p",{parentName:"li"},"b.  Click on the name (alias) of your Amazon Connect"),Object(r.b)("p",{parentName:"li"},"c.  From the Instance ARN, copy the portion after the '/'. This is\nthe Instance Id"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image248.png")}),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Concatenate the 'IdP-Initiated Login URL' and the 'RelayState', by\ncombining the two with \"&RelayState=\" in between, for example:")),Object(r.b)("pre",null,"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/",Object(r.b)("b",null,"InstanceId"),"?destination=%2Fconnect%2Fccp"),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"This is the Final SSO URL, needed for the Amazon Connect Lightning\nCTI Adapter Configuration.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To validate this URL:"),Object(r.b)("p",{parentName:"li"},"a.  Open a new tab in the same browser that you are logged into\nSalesforce"),Object(r.b)("p",{parentName:"li"},"b.  Paste the fully concatenated URL into the new browser and press\nenter"),Object(r.b)("p",{parentName:"li"},"c.  You should automatically login and be redirected to the Amazon\nConnect Contact Control Panel.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once you validate the full URL, you are ready to add it to the\nLightning Adapter"))),Object(r.b)("h4",{id:"configure-the-cti-lightning-adapter-in-salesforce-for-sso"},"Configure the CTI Lightning Adapter in Salesforce For SSO"),Object(r.b)("p",null,"Now we are ready to complete the last step in the configuration process:\nAdding the SSO settings for Salesforce to the Lightning Adapter. This\nwill configure the adapter to authenticate via SSO and redirect to the\nAmazon Connect Contact Control Panel once authentication completes."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in into your Salesforce org and go to the ",Object(r.b)("strong",{parentName:"p"},"Service Console"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Expand the ",Object(r.b)("strong",{parentName:"p"},"navigation menu")," by selecting the down arrow and\nchoose ",Object(r.b)("strong",{parentName:"p"},"AC CTI Adapters"),"."))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image114.png")}),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"ACLightningAdapter"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scroll down to the Single SignOn (SSO) section and choose the pencil\nicon of either field to edit"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image115.png")}),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For the SSO Url, copy the first part of the SSO URL that you created\npreviously, up to the first question mark (do not copy the question\nmark), for example:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"https://mXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Paste this portion of the URL into the ",Object(r.b)("strong",{parentName:"p"},"SSO Url")," field"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image116.png")}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For the SSO Relay State, copy everything AFTER the question mark (do\nnot copy the question mark), for example:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"https://mXXXXXXrun-dev-ed.my.salesforce.com/idp/login?app=0sp0N000000Caid&RelayState=https://console.aws.amazon.com/connect/federate/<b>InstanceId</b>?destination=%2Fconnect%2Fccp"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Paste this portion of the URL into the ",Object(r.b)("strong",{parentName:"p"},"SSO Relay State")," field"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image117.png")}),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose ",Object(r.b)("strong",{parentName:"p"},"Save"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Refresh")," your browser to make the changes take effect"),Object(r.b)("p",{parentName:"li"},"a.  ",Object(r.b)("strong",{parentName:"p"},"NOTE:")," If you receive a blocked popup warning, select the\nwarning and change the setting to always allow popups from your\nSalesforce org, then refresh the browser again"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image118.png")}),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},"After a few seconds, a new window should pop up for a moment. This\nwindow is performing the authentication and setting your session\ncookie. Once it does this, it will close automatically.")),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image119.png")}),Object(r.b)("ol",{start:12},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the authentication window closes, select the ",Object(r.b)("strong",{parentName:"p"},"phone icon")," in\nthe console toolbar to open the CCP\nNote: You may also receive popups to allow notifications and\nmicrophone access. Please accept both.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You should now see the authenticated and logged in CCP"))),Object(r.b)("img",{src:Object(i.a)("/img/lightning/image120.png")}),Object(r.b)("ol",{start:14},Object(r.b)("li",{parentName:"ol"},"Configuration is complete")))}s.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,d=s["".concat(i,".").concat(O)]||s[O]||m[O]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(22),o=n(135);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,c=void 0!==i&&i,b=r.absolute,l=void 0!==b&&b;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},135:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);