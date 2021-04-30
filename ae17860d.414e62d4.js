(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(133)),o=a(134),s={id:"01-contact-flow-salesforce-lambdas",title:"Accessing the Salesforce API from Amazon Connect Contact Flows Using AWS Lambda"},l={unversionedId:"lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas",id:"lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas",isDocsHomePage:!1,title:"Accessing the Salesforce API from Amazon Connect Contact Flows Using AWS Lambda",description:"The most commonly used feature of the AWS Serverless Application",source:"@site/docs/lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas.md",slug:"/lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas",permalink:"/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas",editUrl:"https://github.com/amazon-connect/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/01-contact-flow-salesforce-lambdas.md",version:"current",sidebar:"lightning",previous:{title:"Voicemail Drops",permalink:"/amazon-connect-salesforce-cti/docs/lightning/03-cti-adapter/10-voicemail-drops"},next:{title:"Amazon Connect Historical Metrics in Salesforce",permalink:"/amazon-connect-salesforce-cti/docs/lightning/04-salesforce-lambdas/02-historical-metrics"}},i=[{value:"Salesforce Lookup",id:"salesforce-lookup",children:[]},{value:"Salesforce Create",id:"salesforce-create",children:[]},{value:"Salesforce Update",id:"salesforce-update",children:[]},{value:"Salesforce Phone Lookup",id:"salesforce-phone-lookup",children:[]},{value:"Salesforce Delete",id:"salesforce-delete",children:[]},{value:"Salesforce query",id:"salesforce-query",children:[]},{value:"Salesforce queryOne",id:"salesforce-queryone",children:[]},{value:"Salesforce createChatterPost",id:"salesforce-createchatterpost",children:[]},{value:"Salesforce createChatterComment",id:"salesforce-createchattercomment",children:[]},{value:"Salesforce search",id:"salesforce-search",children:[]},{value:"Salesforce searchOne",id:"salesforce-searchone",children:[]}],b={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The most commonly used feature of the AWS Serverless Application\nRepository for Salesforce is accessing/updating Salesforce data using\nthe sfInvokeAPI Lambda function. This function allows an Amazon Connect\ncontact flow to perform the following operations against your Salesforce\norg:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Lookup:")," queries Salesforce for objects based on the parameters\npassed to it")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create:")," creates a Salesforce object based on the parameters\npassed to it")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Update:")," updates a Salesforce object based on the parameters\npassed to it")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Phone Lookup:")," uses Salesforce Object Search Language (SOLS) to\nconstruct text-based search queries against the search index, which\ngives significant performance improvement when searching phone\nnumber fields.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Delete:")," deletes a Salesforce object based on the parameters\npassed to it")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Query:")," executes a Salesforce Object Query Language (SOQL) query\non the Salesforce instance. Can return multiple entries.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"QueryOne:")," executes a Salesforce Object Query Language (SOQL)\nquery on the Salesforce instance. Returns result only when one entry\nis returned from the query.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"CreateChatterPost:")," creates a chatter post.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"CreateChatterComment:")," creates a chatter comment.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Search:")," performs a search against the Salesforce instance, returning all results.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"SearchOne:")," performs a search against the Salesforce instance, returning at most one result."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"NOTE:")," naming of the Lambda function will vary based on template\ndata, but sfInvokeAPI will always be a part of the name."),Object(c.b)("p",null,"When you invoke this Lambda function from your contact flows, you will\nneed to pass along parameters that inform the function as to which\nSalesforce operation you wish to execute, as well as pass along any\nrequired parameters. Depedning on your use case, this can require\nreference to the ",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm"},"Salesforce REST\nAPI"),"\nor the ",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm"},"Salesforce Connect REST\nAPI"),"\ndocumentation. The core parameters are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"sf_operation:")," specifies with operation to run. Options are\nlookup, create, update, phoneLookup, query, queryOne,\ncreateChatterPost, createChatterComment")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"sf_object:")," defines what type of object you are referencing.\nExamples include Case, Contact, Task, etc.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"sf_fields:")," the fields you want to receive back from Salesforce\nwhen an operation completes successfully")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"sf_id:")," the unique identifier for a Salesforce object. Typically\nused in update operations")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"sf_phone:")," contains the phone number used to search when\nperforming a phone lookup"))),Object(c.b)("h3",{id:"salesforce-lookup"},"Salesforce Lookup"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"lookup"),". In\nthis case, the Lambda function queries Salesforce for objects based on\nthe parameters passed to it. For lookup, the following parameters are\nrequired:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_fields"))),Object(c.b)("p",null,"Any additional parameters passed will be evaluated as conditional\narguments for the lookup."),Object(c.b)("p",null,"Note that this operation only returns the first item of the query\nresults. If you want to have all results returned from Salesforce, set\n",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"lookup_all"),"."),Object(c.b)("p",null,"In the contact flow example below, we are looking for a specific case\nbased on customer input."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image156.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "5006g00000AaIs7AAF",\n    "sf_count": 1\n}\n')),Object(c.b)("h3",{id:"salesforce-create"},"Salesforce Create"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"create"),". In\nthis case, the Lambda function creates a Salesforce object based on the\nparameters passed to it. For create, the following parameters are\nrequired:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Specify additional parameters for the Salesforce object to be\ncreated. Please be sure to include all parameters required to create\nthe Salesforce object."))),Object(c.b)("p",null,"In the contact flow example below, we creating a new case based on\ncustomer input."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image157.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "5006g00000BLqurAAD"\n}\n')),Object(c.b)("h3",{id:"salesforce-update"},"Salesforce Update"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"update"),". In\nthis case, the Lambda function updates a Salesforce object based on the\nparameters passed to it. For update, the following parameters are\nrequired:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_id")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Specify additional parameters for the Salesforce object to be\ncreated. Please be sure to include all parameters required to create\nthe Salesforce object."))),Object(c.b)("p",null,"In the contact flow example below, we are updating a specific case."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image158.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Status": "204"\n}\n')),Object(c.b)("p",null,'The "204" status indicates a success.'),Object(c.b)("h3",{id:"salesforce-phone-lookup"},"Salesforce Phone Lookup"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to\n",Object(c.b)("strong",{parentName:"p"},"phoneLookup"),". In this case, the Lambda function uses Salesforce\nObject Search Language (SOLS) to construct text-based search queries.\nFor phoneLookup, the following parameters are required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_phone")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_fields"))),Object(c.b)("p",null,"In the contact flow example below, we look for a customer by phone\nnumber."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image159.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "5006g00000BLqurAAD",\n    "sf_count": "1",\n    "Name": "Jim Smith"\n}\n')),Object(c.b)("h3",{id:"salesforce-delete"},"Salesforce Delete"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"delete"),". In\nthis case, the Lambda function deletes a Salesforce object based on the\nparameters passed to it. For delete, the following parameters are\nrequired:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_id"))),Object(c.b)("p",null,"In the contact flow example below, we deleting an existing case based on\ncustomer input."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image160.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image161.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Response": "None"\n}\n')),Object(c.b)("h3",{id:"salesforce-query"},"Salesforce query"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"query"),". In\nthis case, the Lambda function uses Salesforce Object Query Language\n(SOQL) to conduct a query against the Salesforce instance. For query,\nthe following parameter is required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"query")),Object(c.b)("p",null,"Any additional parameters will replace text values in the original query\nso that queries can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'query: "select field from object"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'field: "Id"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'object: "Task"'))),Object(c.b)("p",null,'Will result in the query: "select Id from Task".'),Object(c.b)("p",null,"In the contact flow example below, we look for a customer by phone\nnumber."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image162.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image163.png")}),Object(c.b)("p",null,"(full text of the value is \"select Id from Contact where Phone LIKE\n'%number%'\")"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image164.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "sf_records": [\n        { "Id": "00303000001RZfIAAW" }\n    ],\n    "sf_count": 1\n}\n')),Object(c.b)("h3",{id:"salesforce-queryone"},"Salesforce queryOne"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to ",Object(c.b)("strong",{parentName:"p"},"queryOne"),"\n(case sensitive). In this case, the Lambda function uses Salesforce\nObject Query Language (SOQL) to conduct a query against the Salesforce\ninstance, returning a result only when one record is returned from the\nquery. For query, the following parameter is required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"query")),Object(c.b)("p",null,"Any additional parameters will replace text values in the original query\nso that queries can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'query: "select field from object"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'field: "Id"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'object: "Task"'))),Object(c.b)("p",null,'Will result in the query: "select Id from Task".'),Object(c.b)("p",null,"In the contact flow example below, we look for a customer by phone\nnumber."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image165.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image163.png")}),Object(c.b)("p",null,"(full text of the value is \"select Id from Contact where Phone LIKE\n'%number%'\")"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image164.png")}),Object(c.b)("p",null,"This operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "00303000001RZfIAAW",\n    "sf_count": 1\n}\n')),Object(c.b)("h3",{id:"salesforce-createchatterpost"},"Salesforce createChatterPost"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to\n",Object(c.b)("strong",{parentName:"p"},"createChatterPost")," (case sensitive). In this case, the Lambda\nfunction uses the Salesforce Connect REST API to create a chatter post\n(see\n",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_item.htm"},"here"),").\nFor createChatterPost, the following parameters are required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_feedElementType")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_subjectId")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_messageType")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_message"))),Object(c.b)("p",null,"The following parameter is optional:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"sf_mention")),Object(c.b)("p",null,"(refer to the api reference for value types)"),Object(c.b)("p",null,"Any additional parameters will replace text values in the sf_message so\nthat messages can be dynamic based on values stored within the contact\nflow. For example, the parameter set:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'sf_message: "Please help me with case ',Object(c.b)("inlineCode",{parentName:"p"},"caseId"),'"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"caseId: 1234"))),Object(c.b)("p",null,'Will result in the message: "Please help me with case 1234".'),Object(c.b)("p",null,"In the contact flow example below, we leave a chatter post on a contact."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image166.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image167.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image168.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image169.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image170.png")}),Object(c.b)("p",null,'(full text of the value is "I had a problem during the call. My contact\nid is ',Object(c.b)("inlineCode",{parentName:"p"},"contactId"),'.")'),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image171.png")}),Object(c.b)("p",null,"The operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "0D503000000ILY5CAO"\n}\n')),Object(c.b)("p",null,"See the chatter post appear attached to the Subject:"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image172.png")}),Object(c.b)("h3",{id:"salesforce-createchattercomment"},"Salesforce createChatterComment"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to\n",Object(c.b)("strong",{parentName:"p"},"createChatterComment")," (case sensitive). In this case, the Lambda\nfunction uses the Salesforce Connect REST to create a chatter comment\n(see\n",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm"},"here"),").\nFor createChatterComment, the following parameters are required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_feedElementId")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_commentType")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_commentMessage"))),Object(c.b)("p",null,"(refer to the api reference for value types)"),Object(c.b)("p",null,"Any additional parameters will replace text values in the\nsf_commentMessage so that messages can be dynamic based on values stored\nwithin the contact flow. For example, the parameter set:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'sf_commentMessage: "Please help me with case ',Object(c.b)("inlineCode",{parentName:"p"},"caseId"),'"')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"caseId: 1234"))),Object(c.b)("p",null,"In the contact flow example below, we leave a comment on a chatter post."),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image173.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image174.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image175.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image176.png")}),Object(c.b)("p",null,"The operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "0D703000000ChhNCAS"\n}\n')),Object(c.b)("p",null,"See the chatter post appear attached to the Subject:"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image177.png")}),Object(c.b)("h3",{id:"salesforce-search"},"Salesforce search"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to\n",Object(c.b)("strong",{parentName:"p"},"search")," (case sensitive). In this case, the Lambda\nfunction uses the Salesforce REST to perform a parameterized search\n(see\n",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm"},"here"),").\nFor search, the following parameters are required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"q")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_fields")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object"))),Object(c.b)("p",null,"The following parameters are optional:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"where")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"overallLimit"))),Object(c.b)("p",null,"(refer to the api reference for value types)"),Object(c.b)("p",null,"See the below example:"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image258.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image259.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image260.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image261.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image262.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image263.png")}),Object(c.b)("p",null,"The operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "sf_records": [\n        {\n            "Id": "50001000001B9e6AAG", \n            "Subject": "test subject", \n            "Status": "New"\n        }, \n        {\n            "Id": "50001000001B9eWAAS", \n            "Subject": "test subject", \n            "Status": "New"\n        }, \n        {\n            "Id": "50001000001BDgiAAG", \n            "Subject": "test subject", \n            "Status": "New"\n        }\n    ], \n    "sf_count": 3\n}\n')),Object(c.b)("h3",{id:"salesforce-searchone"},"Salesforce searchOne"),Object(c.b)("p",null,"This operation is invoked by setting ",Object(c.b)("strong",{parentName:"p"},"sf_operation")," to\n",Object(c.b)("strong",{parentName:"p"},"searchOne")," (case sensitive). In this case, the Lambda\nfunction uses the Salesforce REST to perform a parameterized search\n(see\n",Object(c.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm"},"here"),").\nFor search, the following parameters are required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"q")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_fields")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"sf_object"))),Object(c.b)("p",null,"The following parameter is optional:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"where")),Object(c.b)("p",null,"(refer to the api reference for value types)"),Object(c.b)("p",null,"See the below example:"),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image264.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image265.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image260.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image261.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image262.png")}),Object(c.b)("img",{src:Object(o.a)("/img/lightning/image263.png")}),Object(c.b)("p",null,"The operation returns a response of:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "Id": "50001000001BIn6AAG",\n    "Subject": "test subject unique", \n    "Status": "New", \n    "sf_count": 1\n}\n')))}p.isMDXComponent=!0},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,j=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(j,s(s({ref:t},i),{},{components:a})):r.a.createElement(j,s({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(22),r=a(135);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,s=void 0!==o&&o,l=c.absolute,i=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+b:b}(c,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},135:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);