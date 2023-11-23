"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99365],{72990:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-social-idps-account-and-register-saml-application-idp",children:"Create social IdP's account and register SAML application (IdP)"}),"\n",(0,i.jsx)(n.p,{children:"Let's go through configurations of SAML connector."}),"\n",(0,i.jsx)(n.p,{children:"Before we kicking off, you can go to a social identity provider which supports SAML protocol and create your own account. Okta, OneLogin, Salesforce and some other platforms support authentication based on SAML protocol."}),"\n",(0,i.jsx)(n.p,{children:"If your IdP mandate the encryption of SAML assertion and receiving of signed authentication requests, you should generate your private key and corresponding certificate using RSA algorithm. Keep the private key for your SP use and upload the certificate to IdP."}),"\n",(0,i.jsxs)(n.p,{children:["You also need to configure the ACS (Assertion Consumer Service) URL as ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"})," to handle IdP's SAML assertion. Where you can find your ",(0,i.jsx)(n.code,{children:"connectorId"})," at SAML connector's details page in Logto's Admin Console."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Per current Logto's design, we only support Redirect-binding for sending authentication request and POST-binding for receiving SAML assertion. Although this sounds not cool, but we believe that the current design can handle most of your use cases. If you have any problems, feel free to reach out!"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-saml-connector-sp",children:"Configure SAML connector (SP)"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will introduce each attribute in detail."}),"\n",(0,i.jsxs)(n.h4,{id:"entityid-required",children:["entityID ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entityID"})," (i.e. ",(0,i.jsx)(n.code,{children:"issuer"}),") is Entity identifier. It is used to identify your entity (SAML SP entity), and match the equivalence in each SAML request/response."]}),"\n",(0,i.jsxs)(n.h4,{id:"signinendpoint-required",children:["signInEndpoint ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The IdP's endpoint that you send SAML authentication requests to. Usually, you can find this value in IdP details page (i.e. IdP's ",(0,i.jsx)(n.code,{children:"SSO URL"})," or ",(0,i.jsx)(n.code,{children:"Login URL"}),")."]}),"\n",(0,i.jsxs)(n.h4,{id:"x509certificate-required",children:["x509Certificate ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The x509 certificate generated from IdPs private key, IdP is expected to have this value available."}),"\n",(0,i.jsxs)(n.p,{children:["The content of the certificate comes with ",(0,i.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," header and ",(0,i.jsx)(n.code,{children:"-----END CERTIFICATE-----"})," tail."]}),"\n",(0,i.jsxs)(n.h4,{id:"idpmetadataxml-required",children:["idpMetadataXml ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The field is used to place contents from your IdP metadata XML file."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["The XML parser we are using does not support customized namespace.\nIf the IdP metadata comes with namespace, you should manually remove them.\nFor namespace of XML file, see ",(0,i.jsx)(n.a,{href:"http://www.xmlmaster.org/en/article/d01/c10/",children:"reference"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"assertionconsumerserviceurl-required",children:["assertionConsumerServiceUrl ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The assertion consumer service (ACS) URL is the SP's endpoint to receive IdP's SAML Assertion POST requests. As we mentioned in previous part, it is usually configured at IdP settings but some IdP get this value from SAML authentication requests, we hence also add this value as a REQUIRED field. It's value should look like ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"signauthnrequest",children:"signAuthnRequest"}),"\n",(0,i.jsxs)(n.p,{children:["The boolean value that controls whether SAML authentication request should be signed, whose default value is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"encryptassertion",children:"encryptAssertion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encryptAssertion"})," is a boolean value that indicates if IdP will encrypt SAML assertion, with default value ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signAuthnRequest"})," and ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," attributes should align with corresponding parameters of IdP setting, otherwise error will be thrown to show that configuration does not match.\nAll SAML responses need to be signed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"requestsignaturealgorithm",children:"requestSignatureAlgorithm"}),"\n",(0,i.jsxs)(n.p,{children:["This should be aligned with the signature algorithms of IdP so that Logto can verify the signature of the SAML assertion. Its value should be either ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"}),", ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," or ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})," and the default value is ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"messagesigningorder",children:"messageSigningOrder"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"messageSigningOrder"})," indicates the signing and encrypting order of IdP, it's value should be either ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})," or ",(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," and the default value is ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"privatekey-and-privatekeypass",children:"privateKey and privateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"privateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"privateKey"})," is required by IdP for checking the signature."]}),"\n",(0,i.jsx)(n.h4,{id:"encprivatekey-and-encprivatekeypass",children:"encPrivateKey and encPrivateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"encPrivateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," is required by IdP for encrypting SAML assertion."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For keys and certificates generation, ",(0,i.jsx)(n.code,{children:"openssl"})," is a wonderful tool. Here is sample command line that might be helpful:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -passout pass:${privateKeyPassword} -out ${encryptPrivateKeyFilename}.pem 4096\nopenssl req -new -x509 -key ${encryptPrivateKeyFilename}.pem -out ${encryptionCertificateFilename}.cer -days 3650\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," and ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," files are enforced to be encoded in ",(0,i.jsx)(n.code,{children:"pkcs1"})," scheme as pem string, which means the private key files should start with ",(0,i.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"})," and end with ",(0,i.jsx)(n.code,{children:"-----END RSA PRIVATE KEY-----"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"nameidformat",children:"nameIDFormat"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nameIDFormat"})," is an OPTIONAL attribute that declares the name id format that would respond. The value can be among ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," and ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"}),", and the default value is ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"timeout",children:"timeout"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"timeout"})," is the time tolerance for time validation, since the time between your SP entity and IdP entity could be different and network connection may also bring some delay. The unit is in millisecond, and the default value is 5000 (i.e. 5s)."]}),"\n",(0,i.jsx)(n.h4,{id:"profilemap",children:"profileMap"}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. Each ",(0,i.jsx)(n.code,{children:"profileMap"})," keys is Logto's standard user profile field name and corresponding value should be social profiles field name. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is REQUIRED and others are optional fields."]}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signInEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x509certificate"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idpMetadataXml"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entityID"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"assertionConsumerServiceUrl"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"messageSigningOrder"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," | ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sign-then-encrypt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"requestSignatureAlgorithm"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signAuthnRequest"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryptAssertion"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKey"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKeyPass"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nameIDFormat"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timeout"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"5000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",children:"Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/tngan/samlify",children:"samlify - Highly configuarable Node.js SAML 2.0 library for Single Sign On"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},38645:function(e,n,t){t.d(n,{ZP:function(){return l}});var i=t(11527),r=t(17279),s=t(82401),o=t(49106),c=t(24061),d=t(13994);function a(e){const n={h3:"h3",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(d.ZP,{sdk:"flutter"})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},55458:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return c}});var i=t(11527),r=t(17279),s=t.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png";function o(e){const n={h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create application",src:t(95561).Z+"",width:"2368",height:"226"})}),"\n",(0,i.jsx)(n.p,{children:'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsxs)("p",{children:['In the opening modal, select the "',e.type,'" option as the application type.']}),"\n",(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81057:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3160",height:"1822"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with"," "]}),(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,i.jsx)("span",{children:" and "}),(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,i.jsx)(n.p,{children:"Logto"})}),(0,i.jsx)(n.p,{children:"."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:[(0,i.jsxs)(n.p,{children:["Basic knowledge of"," "]}),(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,i.jsx)(n.p,{children:"."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},42977:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},connector:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return a}});var i=t(11527),r=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(38645),t(72990);const s={slug:"how-to-build-saml-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","saml","flutter","dart","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with Flutter and Logto"},o=void 0,c={permalink:"/tutorial/how-to-build-saml-sign-in-with-flutter-and-logto",source:"@site/tutorial/build-with-logto/generated-flutter-saml.mdx",title:"How to build SAML sign-in with Flutter and Logto",description:"\x3c!--",date:"2023-11-23T06:39:45.652Z",formattedDate:"November 23, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"saml",permalink:"/tutorial/tags/saml"},{label:"flutter",permalink:"/tutorial/tags/flutter"},{label:"dart",permalink:"/tutorial/tags/dart"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-saml-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","saml","flutter","dart","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with Flutter and Logto"},unlisted:!1,prevItem:{title:"How to build OIDC sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Apple sign-in with Go and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-go-and-logto"}},d={authorsImageUrls:[void 0]},a=[],l="SAML";function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},82401:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Our flutter SDK package is published on ",(0,i.jsx)(n.a,{href:"https://pub.dev/packages/logto_dart_sdk",children:"pub.dev"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"flutter pub get logto_dart_sdk\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Or you may directly get your own copy of the SDK from ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/dart",children:"github"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/logto-io/dart\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},49106:function(e,n,t){t.d(n,{ZP:function(){return a}});var i=t(11527),r=t(17279),s=t(20384),o=t(74976),c=t(45969);function d(e){const n={code:"code",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,i.jsx)(o.ZP,{figureSrc:s.Z,redirectUri:"io.logto://callback"}),"\n",(0,i.jsx)(c.ZP,{calling:".signIn(redirectUri)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},24061:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n"})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},74976:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Admin Console",src:e.figureSrc,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},45969:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Before calling ",(0,i.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},20384:function(e,n){n.Z="data:image/png;base64,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"},10766:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},95561:function(e,n,t){n.Z=t.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(50959);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);