(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},,,function(e,s,c){},function(e,s,c){"use strict";c.r(s);var i=c(0),a=c(1),n=c.n(a),t=c(3),l=c.n(t);c(10),c(11);var r=function(e){var s=e.resumeData,c=e.handleClick;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("header",{id:"home",children:[Object(i.jsx)("nav",{id:"nav-wrap",children:Object(i.jsxs)("ul",{id:"nav",className:"nav",children:[Object(i.jsx)("li",{className:"current",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#home",onClick:c,children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",onClick:c,children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#resume",onClick:c,children:"Resume"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#portfolio",onClick:c,children:"Works"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#contact",onClick:c,children:"Contact"})})]})}),Object(i.jsx)("div",{className:"row banner",children:Object(i.jsxs)("div",{className:"banner-text",children:[Object(i.jsxs)("h1",{className:"responsive-headline",children:["I am ",s.name]}),Object(i.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",s.role," ",s.roleDescription]}),Object(i.jsx)("hr",{}),Object(i.jsx)("ul",{className:"social",children:s.socialLinks&&s.socialLinks.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(i.jsx)("p",{className:"scrolldown",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(i.jsx)("i",{className:"fa fa-chevron-down"})})})]})})},o=c.p+"static/media/profile.954cc695.jpg";c(12);function j(e){var s=e.resumeData;return Object(i.jsx)("section",{id:"about",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"three columns",children:Object(i.jsx)("img",{className:"profile-pic",src:o,alt:""})}),Object(i.jsxs)("div",{className:"nine columns main-col",children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)("p",{children:s.aboutme}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"columns contact-details",children:[Object(i.jsx)("h2",{children:"Contact Details"}),Object(i.jsxs)("p",{className:"address",children:[Object(i.jsx)("span",{children:s.name}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:s.address}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:s.website})]})]})})]})]})})}c(13);function m(e){var s=e.resumeData;return Object(i.jsxs)("section",{id:"resume",children:[Object(i.jsxs)("div",{className:"row education",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Education"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:s.education&&s.education.map((function(e){return Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.UniversityName}),Object(i.jsxs)("p",{className:"info",children:[e.specialization,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(i.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(i.jsxs)("div",{className:"row work",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Work"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:s.work&&s.work.map((function(e){return Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.CompanyName}),Object(i.jsxs)("p",{className:"info",children:[e.specialization,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.MonthOfJoining," ",e.YearOfJoining," to  ",e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(i.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(i.jsxs)("div",{className:"row skill",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Skills"})})}),Object(i.jsxs)("div",{className:"nine columns main-col",children:[Object(i.jsx)("p",{children:s.skillsDescription}),Object(i.jsx)("div",{className:"bgrid-quarters row",children:Object(i.jsx)("ul",{className:"skill-row",children:s.skills&&s.skills.map((function(e){return Object(i.jsx)("li",{className:"skill-column",children:Object(i.jsx)("div",{className:"skill-card",children:e.skillname})})}))})})]})]})]})}c(14);function d(e){var s=e.resumeData;return Object(i.jsx)("section",{id:"portfolio",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"twelve columns collapsed",children:[Object(i.jsx)("h1",{children:"Check Out Some of My Works."}),Object(i.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters",children:s.portfolio&&s.portfolio.map((function(e){return Object(i.jsx)("div",{className:"columns portfolio-item",children:Object(i.jsx)("div",{className:"item-wrap",children:Object(i.jsx)("a",{href:e.imgurl,children:Object(i.jsxs)("div",{className:"portfolio-item-meta",children:[Object(i.jsx)("h5",{children:e.name}),Object(i.jsx)("p",{children:e.description})]})})})})}))})]})})})}c(15);var h=c(4),b=c.n(h);function u(e){e.resumeData;return Object(i.jsxs)("section",{id:"contact",children:[Object(i.jsx)("div",{className:"row section-head",children:Object(i.jsx)("div",{className:"ten columns",children:Object(i.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions"})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),b.a.sendForm("default_service","template_j3io1ha",e.target,"user_eCsw6Zt0O4mbWkiVYfJgk").then((function(s){console.log(e.target),console.log(s.text)}),(function(e){console.log(e.text)}))},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("input",{type:"hidden",name:"contact_number"}),Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{type:"text",className:"form-control",name:"user_name"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(i.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",name:"user_email"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message"}),Object(i.jsx)("textarea",{className:"form-control",name:"message"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",value:"Send",children:"Send"})]})})]})}c(18);function O(e){var s=e.resumeData;return Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"twelve columns",children:Object(i.jsx)("ul",{className:"social-links",children:s.socialLinks&&s.socialLinks.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,children:Object(i.jsx)("i",{className:e.className})})})}))})}),Object(i.jsx)("div",{id:"go-top",children:Object(i.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(i.jsx)("i",{className:"fa fa-chevron-up"})})})]})})}var x={imagebaseurl:"https://.github.io/",name:"Prathyusha Kanda",role:"Software Developer",linkedinId:"www.linkedin.com/in/prathyusak",skypeid:"Your skypeid",roleDescription:"with 4+ of experience facilitating engineering solutions with a wide range of technical skills.",socialLinks:[{name:"linkedin",url:"http://www.linkedin.com/in/prathyusak",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/prathyusak",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/Prathyu57204181",className:"fa fa-twitter"}],aboutme:"I am a Software Developer. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"Phoenix,Arizona",website:"https://prathyusak.github.io",education:[{UniversityName:"RVR & JC College of Engineering, Guntur",specialization:"Electronics and Communication Engineering",MonthOfPassing:"Apr",YearOfPassing:"2011"}],work:[{CompanyName:"Tata Consultancy Services",specialization:"Deusche Bank SSR team",MonthOfJoining:"Dec",YearOfJoining:"2011",MonthOfLeaving:"Feb",YearOfLeaving:"2016"}],skillsDescription:"My Skills include",skills:[{skillname:"Python"},{skillname:"Bash Shell Scripting"},{skillname:"ReactJS"},{skillname:"NodeJS"}],portfolio:[{name:"FaceRecognition",description:"Face Detection React App using Clarifai API",imgurl:"http://face-detect98.herokuapp.com"},{name:"AP-COVID",description:"Andhra Pradesh Covid tracking App using Python Django",imgurl:"http://aadhya.pythonanywhere.com/"},{name:"SpeechRecognition",description:"Speech Recognition React app using IBM speech API",imgurl:"http://prathyusak.github.io/speechrecog/"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]};function p(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r,{resumeData:x}),Object(i.jsx)(j,{resumeData:x}),Object(i.jsx)(m,{resumeData:x}),Object(i.jsx)(d,{resumeData:x}),Object(i.jsx)(u,{resumeData:x}),Object(i.jsx)(O,{resumeData:x})]})}var f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(s){var c=s.getCLS,i=s.getFID,a=s.getFCP,n=s.getLCP,t=s.getTTFB;c(e),i(e),a(e),n(e),t(e)}))};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.529f64ba.chunk.js.map