(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,a,t){e.exports=t(271)},144:function(e,a,t){},145:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},267:function(e,a,t){},271:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(144),t(145),t(13)),s=t.n(o),i=t(26),u=t(31),m=Object(n.createContext)(),d=t(22);var p=function(e,a){switch(a.type){case"add":return{count:e.count+20};case"LOAD_POST":return Object(d.a)({},e,{post:a.payload,loading:!1});default:throw new Error}},E=t(27),f=t.n(E),v=function(e){var a={count:30,loading:!0,post:[]},t=Object(n.useReducer)(p,a),l=Object(u.a)(t,2),c=l[0],o=l[1],d=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/posts");case 2:a=e.sent,o({type:"LOAD_POST",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(m.Provider,{value:{alert:c,Increment:function(){o({type:"add",payload:a})},getData:d}},e.children)},g=Object(n.createContext)();var h=function(e,a){switch(a.type){case"LOAD_PARTNER":return Object(d.a)({},e,{partners:a.payload,loading:!1});case"LOAD_USER":return Object(d.a)({},e,{users:a.payload,loading:!1});case"LOAD_REQUEST":return Object(d.a)({},e,{requests:a.payload,loading:!1});case"LOAD_DASHBOARD":return Object(d.a)({},e,{dashboard:a.payload,loading:!1});case"ACTIVE_STATUS":return Object(d.a)({},e,{partners:a.payload,loading:!1});case"LOAD_ALL_QUOTES":return Object(d.a)({},e,{allQuotes:a.payload,loading:!1});case"SET_LOADING":return Object(d.a)({},e,{loading:a.payload});default:throw new Error}},b="https://repairkaki.com",y=function(e){var a=Object(n.useReducer)(h,{count:30,loading:!0,partners:[],users:[],requests:[],dashboard:{},allQuotes:[]}),t=Object(u.a)(a,2),l=t[0],c=t[1],o=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("".concat(b,"/masterAdmin/partner/all"));case 3:a=e.sent,c({type:"LOAD_PARTNER",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("".concat(b,"/masterAdmin/users/all"));case 3:a=e.sent,c({type:"LOAD_USER",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("".concat(b,"/masterAdmin/request/all"));case 3:a=e.sent,c({type:"LOAD_REQUEST",payload:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(s.a.mark((function e(a,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(b,"/masterAdmin/partner/activeStatus"),{id:a,status:t});case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(b,"/masterAdmin/partner/matrix"));case 2:a=e.sent,c({type:"LOAD_DASHBOARD",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loading=!0,e.next=3,f.a.post("".concat(b,"/masterAdmin/request/all_quotes"),{_id:a});case 3:t=e.sent,c({type:"LOAD_ALL_QUOTES",payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{state:l,LoadPartners:o,LoadUsers:m,changeActiveStatus:p,LoadAllRequest:d,LoadDashboard:E,loadAllQuotes:v,setLoading:function(e){c({type:"SET_LOADING",payload:e})}}},e.children)};t(163);var A=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h5",null,"Welcome to Master Admin"))},O=t(16),w=(t(164),function(){localStorage.setItem("isMasterAuthenticated",!1),window.location.href="/login"});var k=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://www.repairkaki.com/static/media/repairkaki_logo.696698f3.png",className:"menuLogo",alt:"repairkaiLogo"}),r.a.createElement("ul",{className:"dashboardMenu"},r.a.createElement("li",null,r.a.createElement(O.c,{to:"/",activeClassName:"menuActive",exact:!0},"Dashboard")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/partners",activeClassName:"menuActive"},"Partners")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users",activeClassName:"menuActive"},"Users")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/requests",activeClassName:"menuActive"},"All Request")),r.a.createElement("li",null,r.a.createElement("a",{onClick:w},"Log out"))))},L=(t(169),t(170),t(314)),N=t(318),x=t(317),j=t(313),C=t(315),D=t(316),S=t(272),R=t(335),T=t(319),q=t(331),_=t(309);var P=function(){var e=Object(n.useContext)(g),a=e.state,t=a.partners,l=a.loading;return console.log(t),Object(n.useEffect)((function(){e.LoadPartners()}),[]),!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(_.a,null)):r.a.createElement("div",{className:"partner"},r.a.createElement(j.a,{component:S.a},r.a.createElement(L.a,{"aria-label":"simple table"},r.a.createElement(C.a,null,r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Name"),r.a.createElement(x.a,{align:"left"},"Email"),r.a.createElement(x.a,{align:"left"},"Postal Code"),r.a.createElement(x.a,{align:"left"},"Status"),r.a.createElement(x.a,{align:"left"},"Last Login"))),r.a.createElement(N.a,null,t.map((function(a){return r.a.createElement(D.a,{key:a.name},r.a.createElement(x.a,{align:"left"},a.username),r.a.createElement(x.a,{align:"left"},a.email),r.a.createElement(x.a,{align:"left"},a.postalCode),r.a.createElement(x.a,{align:"left"},r.a.createElement(T.a,null,r.a.createElement(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.isApproved,onChange:function(t){e.changeActiveStatus(a._id,t.target.value)}},r.a.createElement(R.a,{value:!1},"Pending"),r.a.createElement(R.a,{value:!0},"Active")))),r.a.createElement(x.a,{align:"left"},a.lastLogin))}))))))},M=t(52);t(264);var U=function(){var e=Object(n.useContext)(g);Object(n.useEffect)((function(){e.LoadDashboard()}),[]);var a=e.state.dashboard;return r.a.createElement("div",null,r.a.createElement("div",{className:"chartsArea"},r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Users","Total Partners"],datasets:[{data:[a.totalUser,a.totalPartner],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Weekly Growth Users","Weekly Growth Partners"],datasets:[{data:[a.weeklyUserGrowth,a.weeklyPartnerGrowth],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Active Users Monthly","Total Active Partner Monthly"],datasets:[{data:[a.totalActiveUserMonthy,a.totalActiveParterMonthly],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}})),r.a.createElement("div",null,r.a.createElement(M.a,{data:{labels:["Total Active Users Weekly","Total Active Partners Weekly"],datasets:[{data:[a.totalActiveUserWeekly,a.totalActiveParterWeekly],backgroundColor:["#dc3545","#ccc"]}]},options:{responsive:!0,maintainAspectRatio:!0}}))),r.a.createElement("div",{className:"AnaylyticsArea"},r.a.createElement("div",null,r.a.createElement("h4",null,"Engaements"),r.a.createElement("hr",null),r.a.createElement("p",null,a.totalRequesWeekly," of request has been made last 7 days"),r.a.createElement("p",null,a.totalRequesMonthly," of request has been made last 30 days")),r.a.createElement("div",null,r.a.createElement("h4",null,"Successful Repair"),r.a.createElement("hr",null),r.a.createElement("p",null,a.totalAppointmentWeekly," of appoinments has been made  in last 7 days"),r.a.createElement("p",null,a.totalAppointmentMonthly," of Appointment has been made last 30 days")),r.a.createElement("div",null,r.a.createElement("h4",null,"Partner Revenue"),r.a.createElement("hr",null),r.a.createElement("p",null,"All time- total revenue by all partners"),r.a.createElement("h4",null,"$",a.AllTimeRevenu),r.a.createElement("hr",null),r.a.createElement("p",null,"Last 7 days- total revenue by all partners"),r.a.createElement("h4",null,"$",a.TotalWeeklyRevenue))))},W=t(33);t(265);var I=function(){var e=Object(n.useContext)(g),a=e.state,t=a.users,l=a.loading;return Object(n.useEffect)((function(){e.LoadUsers()}),[]),!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(_.a,null)):r.a.createElement("div",{className:"partner"},r.a.createElement(j.a,{component:S.a},r.a.createElement(L.a,{"aria-label":"simple table"},r.a.createElement(C.a,null,r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Name"),r.a.createElement(x.a,{align:"left"},"Email"),r.a.createElement(x.a,{align:"left"},"Postal Code"),r.a.createElement(x.a,{align:"left"},"Total Requests"),r.a.createElement(x.a,{align:"left"},"Last Login"))),r.a.createElement(N.a,null,t.map((function(e){return r.a.createElement(D.a,{key:e.name},r.a.createElement(x.a,{align:"left"},e.userData.username),r.a.createElement(x.a,{align:"left"},e.userData.email),r.a.createElement(x.a,{align:"left"},e.userData.postalCode),r.a.createElement(x.a,{align:"left"},e.totalRequest),r.a.createElement(x.a,{align:"left"},e.userData.lastLogin))}))))))},Q=t(119),B=t(322),G=t(323),Y=t(324),$=t(325),z=t(326),F=t(53),H=t(68),J=t(327),V=(t(266),t(82)),K=t.n(V),X=Object(Q.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]}}}));function Z(){var e=Object(n.useContext)(g),a=e.state,t=a.requests,l=a.loading;console.log(t),Object(n.useEffect)((function(){e.LoadAllRequest()}),[]);var c=X();return!0===l?r.a.createElement("div",{className:"loading"},r.a.createElement(_.a,null)):r.a.createElement("div",{className:"grid-4"},t.map((function(e){return r.a.createElement(B.a,{className:c.root},r.a.createElement(G.a,{title:e.problemType,subheader:K()(e.createdAt).format("MMMM Do YYYY, h:mm:ss a")}),r.a.createElement(Y.a,{className:c.media,image:0!=e.pictures.length?e.pictures[0].location:"https://repairkaki.s3-ap-southeast-1.amazonaws.com/public/placeholderImage.png",title:e._id}),r.a.createElement($.a,null,r.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},""===e.description?"No description provided":e.description)),r.a.createElement(z.a,{disableSpacing:!0},r.a.createElement(J.a,{size:"small",color:"primary"},r.a.createElement(O.b,{to:"/request/".concat(e._id)},"View More")),r.a.createElement(J.a,{color:"secondary",align:"right"},"Delete")))})))}t(267);var ee=function(e){var a=Object(n.useContext)(g),t=a.loadAllQuotes,l=a.setLoading,c=a.state,o=c.allQuotes,s=c.loading;return console.log(s),console.log(o),Object(n.useEffect)((function(){l(!0),t(e.match.params.id)}),[]),!1===s&&o.submittedQuotes?r.a.createElement("div",{className:"RequestContainer"},r.a.createElement("h3",null,"All Quotation"),r.a.createElement("hr",null),r.a.createElement("div",{className:"grid-3"},0===o.submittedQuotes.length?"No application found":o.submittedQuotes.map((function(e,a){return r.a.createElement("div",{key:a,className:"quotationBox"},r.a.createElement("p",null,"Bid : ",r.a.createElement("b",null,"$",e.bid)),r.a.createElement("p",null,"Comments: ",r.a.createElement("b",null,e.comments)),r.a.createElement("p",null,"Lead time: ",r.a.createElement("b",null,e.leadTime)),r.a.createElement("p",null,"Submitted by: ",r.a.createElement("b",null,e.quotationBy.name)),!0===e.appoinmented?r.a.createElement("span",{class:"badge badge-pill badge-success"},"Appoinmented"):"")})))):r.a.createElement("div",{className:"RequestContainer"},r.a.createElement(_.a,null))},ae=localStorage.getItem("isMasterAuthenticated");var te=function(){return"false"===ae?r.a.createElement(W.a,{to:"/login"}):r.a.createElement("div",{className:"DasboardGrid"},r.a.createElement("div",{className:"MenuContainer"},r.a.createElement(k,null)),r.a.createElement("div",{className:"contentArea"},r.a.createElement(A,null),r.a.createElement("div",{className:"dashboardContainer"},r.a.createElement(W.b,{path:"/",exact:!0,component:U}),r.a.createElement(W.b,{path:"/partners",component:P}),r.a.createElement(W.b,{path:"/users",component:I}),r.a.createElement(W.b,{path:"/requests",component:Z}),r.a.createElement(W.b,{path:"/request/:id",component:ee}))))},ne=t(334),re=t(330),le=t(333),ce=t(328),oe=t(332),se=t(120),ie=t.n(se),ue=t(329);function me(){return r.a.createElement(F.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://material-ui.com/"},"Repairkaki")," ",(new Date).getFullYear(),".")}var de=Object(Q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),pe=function(e){e.preventDefault();var a=e.target.email.value,t=e.target.password.value;"repairkaki@gmail.com"===a&&"repairkaki123"===t?localStorage.setItem("isMasterAuthenticated",!0):localStorage.setItem("isMasterAuthenticated",!1),window.location.href="/"},Ee=localStorage.getItem("isMasterAuthenticated");function fe(){var e=de();return"true"===Ee?r.a.createElement(W.a,{to:"/"}):r.a.createElement(ue.a,{component:"main",maxWidth:"xs"},r.a.createElement(re.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(ne.a,{className:e.avatar},r.a.createElement(ie.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:pe},r.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(J.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"))),r.a.createElement(oe.a,{mt:8},r.a.createElement(me,null)))}t(270);var ve=function(){return r.a.createElement(v,null,r.a.createElement(O.a,null,r.a.createElement(W.d,null,r.a.createElement(y,null,r.a.createElement(W.b,{path:"/login",exact:!0,component:fe}),r.a.createElement(W.b,{path:"/",component:te})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.dc327c60.chunk.js.map