(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,a,t){e.exports=t(271)},144:function(e,a,t){},145:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},267:function(e,a,t){},271:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(144),t(145),t(13)),s=t.n(o),i=t(32),m=t(29),u=Object(n.createContext)(),d=t(33);var p=function(e,a){switch(a.type){case"add":return{count:e.count+20};case"LOAD_POST":return Object(d.a)({},e,{post:a.payload,loading:!1});default:throw new Error}},E=t(25),f=t.n(E),v=function(e){var a={count:30,loading:!0,post:[]},t=Object(n.useReducer)(p,a),l=Object(m.a)(t,2),c=l[0],o=l[1],d=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/posts");case 2:a=e.sent,o({type:"LOAD_POST",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(u.Provider,{value:{alert:c,Increment:function(){o({type:"add",payload:a})},getData:d}},e.children)},h=Object(n.createContext)();var g=function(e,a){switch(a.type){case"LOAD_PARTNER":return Object(d.a)({},e,{partners:a.payload,loading:!1});case"LOAD_USER":return Object(d.a)({},e,{users:a.payload,loading:!1});case"LOAD_REQUEST":return Object(d.a)({},e,{requests:a.payload,loading:!1});case"LOAD_DASHBOARD":return Object(d.a)({},e,{dashboard:a.payload,loading:!1});case"ACTIVE_STATUS":return Object(d.a)({},e,{partners:a.payload,loading:!1});default:throw new Error}},b=function(e){var a=Object(n.useReducer)(g,{count:30,loading:!0,partners:[],users:[],requests:[],dashboard:{}}),t=Object(m.a)(a,2),l=t[0],c=t[1],o=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("https://repairkaki.com/masterAdmin/partner/all");case 3:a=e.sent,c({type:"LOAD_PARTNER",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("https://repairkaki.com/masterAdmin/users/all");case 3:a=e.sent,c({type:"LOAD_USER",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("https://repairkaki.com/masterAdmin/requests/all");case 3:a=e.sent,c({type:"LOAD_REQUEST",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(s.a.mark((function e(a,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("https://repairkaki.com/masterAdmin/partner/activeStatus",{id:a,status:t});case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://repairkaki.com/masterAdmin/partner/matrix");case 2:a=e.sent,c({type:"LOAD_DASHBOARD",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{state:l,LoadPartners:o,LoadUsers:u,changeActiveStatus:p,LoadAllRequest:d,LoadDashboard:E}},e.children)};t(163);var y=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h5",null,"Welcome to Master Admin"))},A=t(19),k=(t(164),function(){localStorage.setItem("isMasterAuthenticated",!1),window.location.href="/login"});var w=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://www.repairkaki.com/static/media/repairkaki_logo.696698f3.png",className:"menuLogo",alt:"repairkaiLogo"}),r.a.createElement("ul",{className:"dashboardMenu"},r.a.createElement("li",null,r.a.createElement(A.b,{to:"/",activeClassName:"menuActive",exact:!0},"Dashboard")),r.a.createElement("li",null,r.a.createElement(A.b,{to:"/partners",activeClassName:"menuActive"},"Partners")),r.a.createElement("li",null,r.a.createElement(A.b,{to:"/users",activeClassName:"menuActive"},"Users")),r.a.createElement("li",null,r.a.createElement(A.b,{to:"/requests",activeClassName:"menuActive"},"All Request")),r.a.createElement("li",null,r.a.createElement("a",{onClick:k},"Log out"))))},O=(t(169),t(170),t(315)),x=t(319),N=t(318),j=t(314),C=t(316),L=t(317),R=t(272),D=t(336),S=t(320),P=t(332),T=t(310);var q=function(){var e=Object(n.useContext)(h),a=e.state,t=a.partners,l=a.loading;return console.log(t),Object(n.useEffect)((function(){e.LoadPartners()}),[]),!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(T.a,null)):r.a.createElement("div",{className:"partner"},r.a.createElement(j.a,{component:R.a},r.a.createElement(O.a,{"aria-label":"simple table"},r.a.createElement(C.a,null,r.a.createElement(L.a,null,r.a.createElement(N.a,null,"Name"),r.a.createElement(N.a,{align:"left"},"Email"),r.a.createElement(N.a,{align:"left"},"Postal Code"),r.a.createElement(N.a,{align:"left"},"Status"),r.a.createElement(N.a,{align:"left"},"Last Login"))),r.a.createElement(x.a,null,t.map((function(a){return r.a.createElement(L.a,{key:a.name},r.a.createElement(N.a,{align:"left"},a.username),r.a.createElement(N.a,{align:"left"},a.email),r.a.createElement(N.a,{align:"left"},a.postalCode),r.a.createElement(N.a,{align:"left"},r.a.createElement(S.a,null,r.a.createElement(P.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.isApproved,onChange:function(t){e.changeActiveStatus(a._id,t.target.value)}},r.a.createElement(D.a,{value:!1},"Pending"),r.a.createElement(D.a,{value:!0},"Active")))),r.a.createElement(N.a,{align:"left"},a.lastLogin))}))))))},M=t(52);t(264);var W=function(){var e=Object(n.useContext)(h);Object(n.useEffect)((function(){e.LoadDashboard()}),[]);var a=e.state.dashboard;return r.a.createElement("div",null,r.a.createElement("div",{className:"chartsArea"},r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Users","Total Partners"],datasets:[{data:[a.totalUser,a.totalPartner],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Weekly Growth Users","Weekly Growth Partners"],datasets:[{data:[a.weeklyUserGrowth,a.weeklyPartnerGrowth],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Active Users Monthly","Total Active Partner Monthly"],datasets:[{data:[a.totalActiveUserMonthy,a.totalActiveParterMonthly],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Active Users Weekly","Total Active Partners Weekly"],datasets:[{data:[a.totalActiveUserWeekly,a.totalActiveParterWeekly],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}}))),r.a.createElement("div",{className:"AnaylyticsArea"},r.a.createElement("div",null,r.a.createElement("h4",null,"Engaements"),r.a.createElement("hr",null),r.a.createElement("p",null,a.totalRequesWeekly," of request has been made last 7 days"),r.a.createElement("p",null,a.totalRequesMonthly," of request has been made last 30 days")),r.a.createElement("div",null,r.a.createElement("h4",null,"Successful Repair"),r.a.createElement("hr",null),r.a.createElement("p",null,a.totalAppointmentWeekly," of appoinments has been made  in last 7 days"),r.a.createElement("p",null,a.totalAppointmentMonthly," of Appointment has been made last 30 days")),r.a.createElement("div",null,r.a.createElement("h4",null,"Partner Revenue"),r.a.createElement("hr",null),r.a.createElement("p",null,"All time- total revenue by all partners"),r.a.createElement("h4",null,"$",a.AllTimeRevenu),r.a.createElement("hr",null),r.a.createElement("p",null,"Last 7 days- total revenue by all partners"),r.a.createElement("h4",null,"$",a.TotalWeeklyRevenue))))},U=t(31);t(265);var _=function(){var e=Object(n.useContext)(h),a=e.state,t=a.users,l=a.loading;return Object(n.useEffect)((function(){e.LoadUsers()}),[]),!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(T.a,null)):r.a.createElement("div",{className:"partner"},r.a.createElement(j.a,{component:R.a},r.a.createElement(O.a,{"aria-label":"simple table"},r.a.createElement(C.a,null,r.a.createElement(L.a,null,r.a.createElement(N.a,null,"Name"),r.a.createElement(N.a,{align:"left"},"Email"),r.a.createElement(N.a,{align:"left"},"Postal Code"),r.a.createElement(N.a,{align:"left"},"Total Requests"),r.a.createElement(N.a,{align:"left"},"Last Login"))),r.a.createElement(x.a,null,t.map((function(e){return r.a.createElement(L.a,{key:e.name},r.a.createElement(N.a,{align:"left"},e.userData.username),r.a.createElement(N.a,{align:"left"},e.userData.email),r.a.createElement(N.a,{align:"left"},e.userData.postalCode),r.a.createElement(N.a,{align:"left"},e.totalRequest),r.a.createElement(N.a,{align:"left"},e.userData.lastLogin))}))))))},I=t(119),G=t(323),Y=t(324),B=t(325),$=t(326),z=t(327),F=t(53),H=t(68),J=t(328),Q=(t(266),t(81)),V=t.n(Q),K=Object(I.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]}}}));function X(){var e=Object(n.useContext)(h),a=e.state,t=a.requests,l=a.loading;console.log(t),Object(n.useEffect)((function(){e.LoadAllRequest()}),[]);var c=K();return!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(T.a,null)):r.a.createElement("div",{className:"grid-4"},t.map((function(e){return r.a.createElement(G.a,{className:c.root},r.a.createElement(Y.a,{title:e.problemType,subheader:V()(e.createdAt).format("MMMM Do YYYY, h:mm:ss a")}),r.a.createElement(B.a,{className:c.media,image:0!=e.pictures.length?e.pictures[0].location:"https://repairkaki.s3-ap-southeast-1.amazonaws.com/public/placeholderImage.png",title:e._id}),r.a.createElement($.a,null,r.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},"Need vehicle servicing - authorised workshops preferred.")),r.a.createElement(z.a,{disableSpacing:!0},r.a.createElement(J.a,{size:"small",color:"primary",align:"right"},"View More")))})))}t(267);var Z=function(e){return r.a.createElement("div",{className:"RequestContainer"})},ee=localStorage.getItem("isMasterAuthenticated");var ae=function(){return"false"===ee?r.a.createElement(U.a,{to:"/login"}):r.a.createElement("div",{className:"DasboardGrid"},r.a.createElement("div",{className:"MenuContainer"},r.a.createElement(w,null)),r.a.createElement("div",{className:"contentArea"},r.a.createElement(y,null),r.a.createElement("div",{className:"dashboardContainer"},r.a.createElement(U.b,{path:"/",exact:!0,component:W}),r.a.createElement(U.b,{path:"/partners",component:q}),r.a.createElement(U.b,{path:"/users",component:_}),r.a.createElement(U.b,{path:"/requests",component:X}),r.a.createElement(U.b,{path:"/request/:id",component:Z}))))},te=t(335),ne=t(331),re=t(334),le=t(329),ce=t(333),oe=t(120),se=t.n(oe),ie=t(330);function me(){return r.a.createElement(F.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(le.a,{color:"inherit",href:"https://material-ui.com/"},"Repairkaki")," ",(new Date).getFullYear(),".")}var ue=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),de=function(e){e.preventDefault();var a=e.target.email.value,t=e.target.password.value;"master@repairkaki.com"===a&&"repairkaki123"===t?localStorage.setItem("isMasterAuthenticated",!0):localStorage.setItem("isMasterAuthenticated",!1),window.location.href="/"},pe=localStorage.getItem("isMasterAuthenticated");function Ee(){var e=ue();return"true"===pe?r.a.createElement(U.a,{to:"/"}):r.a.createElement(ie.a,{component:"main",maxWidth:"xs"},r.a.createElement(ne.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(te.a,{className:e.avatar},r.a.createElement(se.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:de},r.a.createElement(re.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(re.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(J.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"))),r.a.createElement(ce.a,{mt:8},r.a.createElement(me,null)))}t(270);var fe=function(){return r.a.createElement(v,null,r.a.createElement(A.a,null,r.a.createElement(U.d,null,r.a.createElement(b,null,r.a.createElement(U.b,{path:"/login",exact:!0,component:Ee}),r.a.createElement(U.b,{path:"/",component:ae})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.78cc9c67.chunk.js.map