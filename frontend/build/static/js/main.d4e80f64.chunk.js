(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/Icon_faded.0a27301d.svg"},119:function(e,t,a){e.exports=a(276)},126:function(e,t,a){},127:function(e,t,a){},151:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(125),a(126),a(127),a(43)),i=a(28),u=a(103),d=a.n(u),s=a(34),m=a.n(s),v=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1];return r.a.createElement(v.Provider,{value:{id:l,setId:o}},e.children)},b=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],u=Object(n.useContext)(v).id;return r.a.createElement(b.Provider,{value:{deliverables:l,removeDeliverable:function(e){o(l.filter(function(t){return t.id!==e})),m.a.post("/api/removeItem/".concat(u),{id:e}).then(function(e){console.log(e)})},addDeliverable:function(e,t,a){var n=d.a.v4();o([].concat(Object(c.a)(l),[{id:n,name:e,description:t,due:a}])),m.a.post("/api/addItem/".concat(u),{id:n,name:e,description:t,due:a}).then(function(e){console.log(e)})},setDeliverables:o}},e.children)},g=a(296),E=a(298),h=a(297);function y(){return r.a.createElement("header",null,r.a.createElement(g.a,{position:"static"},r.a.createElement(h.a,{style:{backgroundColor:"#8AAAFF"}},r.a.createElement(E.a,{variant:"h3"},"Todo List")),r.a.createElement(h.a,{variant:"dense",style:{backgroundColor:"#6699FF"}},r.a.createElement(E.a,{variant:"body1"},"Deadline management made easier"))))}var O=a(301),j=a(302),w=a(303),x=a(299),C=(a(151),a(305)),D=a(300),k=a(111),I=a(21);function S(e){var t=Object(n.useContext)(b).removeDeliverable,a=e.deliverable,l=a.id,o=a.name,c=a.description,i=a.due,u=Object(I.differenceInDays)(Object(I.parse)(i),Object(I.startOfToday)());return r.a.createElement(x.a,{style:{padding:"1rem"}},r.a.createElement(D.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},o),r.a.createElement(E.a,{variant:"h6"},"Due on: ",Object(I.parse)(i).toLocaleDateString()),r.a.createElement(E.a,{variant:"body1",style:u>0?{color:"blue"}:0===u?{color:"orange"}:{color:"red"}}," ",u>0?"".concat(u,1===u?" day left":" days left"):0===u?"Due Today":"Overdue"),r.a.createElement(k.a,{style:{margin:"1em",padding:"0.5em"}},r.a.createElement(E.a,{variant:"body1"},c))),r.a.createElement("hr",null),r.a.createElement(C.a,{onClick:t.bind(this,l)},"Mark Complete"))}var T=a(107),A=a.n(T);function L(){var e=Object(n.useContext)(b).deliverables;return e.sort(function(e,t){return e.due>t.due}),r.a.createElement(w.a,{p:"1rem"},r.a.createElement(O.a,{style:{backgroundColor:"#555",minHeight:"50vh",padding:"1rem"}},r.a.createElement(E.a,{variant:"h4",style:{color:"#fff",textTransform:"uppercase"}},e.length>0?e.length>1?"".concat(e.length," things due"):"Just one thing due":""),r.a.createElement(E.a,{m:2,variant:"body1",className:"text-left mx-3",style:{color:"#fff"}},e.length>0?"":"It appears you have nothing left to do :)"),r.a.createElement(j.a,{container:!0,spacing:2},e.map(function(e){return r.a.createElement(j.a,{item:!0,xs:12,lg:4,md:6},r.a.createElement(S,{key:e.id,deliverable:e}))})),r.a.createElement("img",{src:A.a,alt:"",style:{margin:"1rem",width:"4%",opacity:"0.5",alignItems:"flex-center",justifyContent:"center"}})))}var q=a(17),F=a.n(q),G=a(109),N=a.n(G),B=a(108),J=a.n(B);function P(){var e=Object(n.useContext)(b).addDeliverable,t=Object(n.useState)({title:"",desc:"",due:Object(I.startOfToday)().toLocaleDateString(),preserve:!1}),a=Object(i.a)(t,2),l=a[0],o=a[1],c=function(e){o({title:"title"===e.target.id?e.target.value:l.title,desc:"desc"===e.target.id?e.target.value:l.desc,due:"due"===e.target.id?e.target.value:l.due,preserve:"preserve"===e.target.id?!l.preserve:l.preserve})};return r.a.createElement(J.a,{style:{maxWidth:"60%"}},r.a.createElement(F.a,{onSubmit:function(t){t.preventDefault(),e(l.title,l.desc,l.due),l.preserve||o({title:"",desc:"",due:Object(I.startOfToday)().toLocaleDateString(),preserve:!1})}},r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Add a new deliverable"),r.a.createElement(F.a.Control,{type:"text",placeholder:"Enter Title",id:"title",value:l.title,onChange:c})),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Control,{as:"textarea",placeholder:"Enter Description",id:"desc",value:l.desc,onChange:c})),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Control,{type:"date",id:"due",value:l.due,onChange:c}),r.a.createElement(F.a.Text,{className:"text-muted text-left"},"The above date will be reflected as the due date.")),r.a.createElement(F.a.Group,null,r.a.createElement("input",{type:"checkbox",id:"preserve",defaultChecked:l.preserve,onClick:c}),r.a.createElement("span",null," Preserve form data upon submission.")),r.a.createElement(N.a,{type:"submit",bg:"primary",className:"mb-2"},"Submit")))}var W=a(110),$=a.n(W);function H(){var e="",t=Object(n.useContext)(v).setId,a=Object(n.useContext)(b).setDeliverables;return"/"!==window.location.pathname?(e=window.location.pathname.substr(1,9),localStorage.setItem("uniqueid",e),t(e)):null!=localStorage.getItem("uniqueid")?t(e=localStorage.getItem("uniqueid")):(t(e=$.a.generate()),localStorage.setItem("uniqueid",e)),Object(n.useEffect)(function(){m.a.get("/api/getUser/".concat(e)).then(function(e){a(e.data)})},[e,a]),r.a.createElement(O.a,null,r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"body1"},r.a.createElement("a",{href:"".concat(window.location.origin,"/").concat(e)},window.location.origin,"/$",e)," to access your entries in the future."))}var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement(H,null),r.a.createElement(L,null),r.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.d4e80f64.chunk.js.map