(this.webpackJsonpnew_tokofolio=this.webpackJsonpnew_tokofolio||[]).push([[0],{162:function(e,t,s){},244:function(e,t,s){},250:function(e,t,s){},288:function(e,t,s){},289:function(e,t,s){},290:function(e,t,s){},291:function(e,t,s){},292:function(e,t,s){},296:function(e,t){},298:function(e,t){},311:function(e,t){},313:function(e,t){},341:function(e,t){},342:function(e,t){},347:function(e,t){},349:function(e,t){},356:function(e,t){},375:function(e,t){},406:function(e,t,s){},407:function(e,t,s){},408:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(0),o=s.n(c),a=s(22),r=s.n(a),i=s(431),l=(s(244),s(9)),j=s(36),d=s(15),h=s(432),u=s(67),b=s(59),m=s(433),O=s(225),f=s(424);var p=Object(f.a)((function(e){var t=e.show,s=e.handleClose,o=e.data,a=void 0===o?{}:o,r=e.cookies,i=e.portfolioID,j=Object(c.useState)(a),d=Object(l.a)(j,2),h=d[0],f=d[1];return Object(n.jsxs)(m.a,{show:t,onHide:s,children:[Object(n.jsx)(m.a.Header,{closeButton:!0,children:Object(n.jsx)(m.a.Title,{children:"Add new tokofolio"})}),Object(n.jsx)(m.a.Body,{children:["symbol","date","qty","price"].map((function(e){return Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"text",placeholder:"qty"===e?"quantity":e,style:{color:"grey",fontFamily:"Verdana",fontWeight:"bold",fontSize:"15px",backgroundColor:"white"},size:"30",maxlength:"30",className:"form-control",name:e,value:h[e]||"",onChange:function(e){return f(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))}})})}))}),Object(n.jsxs)(m.a.Footer,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:s,children:"Discard"}),Object(n.jsx)(O.a,{variant:"primary",onClick:function(){var e=r.get("token");fetch("http://localhost:5000/users/dashboard/new?token=".concat(e,"&portfolioId=").concat(i),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(h)}).then((function(e){return e.json()})).then((function(e){null!==e?(s(),alert("added succefully")):alert("something went wrong, try again later")}))},children:"Add"})]})]})}));function x(e){var t=e.show,s=e.handleClose;return Object(n.jsxs)(m.a,{show:t,onHide:s,children:[Object(n.jsx)(m.a.Header,{closeButton:!0,children:Object(n.jsx)(m.a.Title,{children:"Delete account"})}),Object(n.jsx)(m.a.Body,{}),Object(n.jsxs)(m.a.Footer,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:s,children:"Discard"}),Object(n.jsx)(O.a,{variant:"primary",onClick:s,children:"Delete"})]})]})}function g(e){var t=e.show,s=e.handleClose,o=e.token,a=Object(c.useState)({}),r=Object(l.a)(a,2),i=r[0],j=r[1];return Object(n.jsxs)(m.a,{show:t,onHide:s,children:[Object(n.jsx)(m.a.Header,{closeButton:!0,children:Object(n.jsx)(m.a.Title,{children:"Add new Tokofolio"})}),Object(n.jsx)(m.a.Body,{children:Object(n.jsx)("input",{type:"text",placeholder:"name of tokofolio",style:{color:"grey",fontFamily:"Verdana",fontWeight:"bold",fontSize:"15px",backgroundColor:"white"},size:"30",maxlength:"30",className:"form-control",name:"name",value:i.name,onChange:function(e){return j({name:e.target.value})}})}),Object(n.jsxs)(m.a.Footer,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:s,children:"Discard"}),Object(n.jsx)(O.a,{variant:"primary",onClick:function(){fetch("http://localhost:5000/user/portfolio?token=".concat(o),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){null!==e?(s(),alert("added successfully")):alert("something went wrong, try again later")}))},children:"Add"})]})]})}var v=Object(f.a)((function(e){var t=e.show,s=e.handleClose,o=e.item,a=e.index,r=e.cookies,i=e.portfolioID,j=Object(c.useState)(o),d=Object(l.a)(j,2),h=d[0],f=d[1];return Object(n.jsxs)(m.a,{show:t,onHide:s,children:[Object(n.jsx)(m.a.Header,{closeButton:!0,children:Object(n.jsx)(m.a.Title,{children:"Add new tokofolio"})}),Object(n.jsx)(m.a.Body,{children:["symbol","date","qty","price"].map((function(e){return Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"text",placeholder:"qty"===e?"quantity":e,style:{color:"grey",fontFamily:"Verdana",fontWeight:"bold",fontSize:"15px",backgroundColor:"white"},size:"30",maxlength:"30",className:"form-control",name:e,value:h[e],onChange:function(e){return f(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))}})})}))}),Object(n.jsxs)(m.a.Footer,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:s,children:"Discard"}),Object(n.jsx)(O.a,{variant:"primary",onClick:function(){var e=r.get("token");fetch("http://localhost:5000/user/portfolio?token=".concat(e,"&portfolioId=").concat(i),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(Object(b.a)({index:a},h))}).then((function(e){return e.json()})).then((function(e){null!==e?(s(),alert("update succefull")):alert("something went wrong, try again later")}))},children:"Save"})]})]})})),y=(s(147),s(436)),k=s(435),N=s(434),S=s(226),w=s.p+"static/media/logo.9ae901f8.svg";var C=Object(d.g)(Object(f.a)((function(e){var t=e.cookies,s=Object(c.useState)(!1),o=Object(l.a)(s,2),a=o[0],r=o[1],i=Object(d.f)();return Object(c.useEffect)((function(){r(t.get("token"))}),[t.get("token")]),Object(n.jsx)("div",{className:"Navbar",children:Object(n.jsxs)(y.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(y.a.Brand,{href:"/",children:Object(n.jsx)("img",{alt:"",src:w,width:"72",height:"72",className:"d-inline-block align-top"})}),Object(n.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(k.a,{className:"mr-auto",children:[Object(n.jsx)(k.a.Link,{href:"/dashboard",children:"My Tokofolio"}),a?Object(n.jsx)(k.a.Link,{onClick:function(){t.remove("token"),alert("you succesfully logout"),i.push("/")},children:"Logout"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a.Link,{href:"/login",children:"Login"}),Object(n.jsx)(k.a.Link,{href:"/register",children:"Register"})]})]}),Object(n.jsxs)(N.a,{inline:!0,children:[Object(n.jsx)(S.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(n.jsx)(O.a,{variant:"outline-success",children:"Search"})]})]})]})})})));function _(e){var t=e.item,s=e.setTotal,o=e.total,a=e.index,r=(e.setUser,e.update),i=e.token,j=e.items,d=e.user,h=Object(c.useState)(0),u=Object(l.a)(h,2),b=u[0],m=u[1],O=Object(c.useState)(0),f=Object(l.a)(O,2),p=f[0],x=f[1],g=Object(c.useState)(!1),y=Object(l.a)(g,2),k=y[0],N=y[1];return Object(c.useEffect)((function(){var e,n=Math.round(1e3*(null===(e=j[t.symbol.toUpperCase()])||void 0===e?void 0:e.quote.USD.price))/1e3||0,c=(n-t.price)*t.qty;m(c),x(n),s(o+c)}),[t]),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:"/cryptocurrency_icons/svg/color/".concat(t.symbol.toLowerCase(),".svg"),alt:"logo",width:"50",height:"50"})}),Object(n.jsx)("td",{children:t.symbol}),Object(n.jsx)("td",{children:t.date}),Object(n.jsx)("td",{children:t.qty}),Object(n.jsx)("td",{children:t.price}),Object(n.jsx)("td",{children:p}),Object(n.jsx)("td",{style:{color:b>0?"green":"red"},children:b.toFixed(2)}),Object(n.jsx)("td",{children:Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return N(!0)},children:"Edit"}),k&&Object(n.jsx)(v,{show:k,handleClose:function(){N(!1),r(Symbol())},item:t,index:a,portfolioID:d._id}),Object(n.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return function(e){fetch("http://localhost:5000/users/dashboard?token=".concat(i,"&portfolioId=").concat(d._id),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({index:e})}).then((function(e){return e.json()})).then((function(e){null!==e?(r(Symbol()),alert("delete succefull")):alert("something went wrong, try again later")}))}(a)},children:"Remove"})]})})]})}var D=Object(d.g)(Object(f.a)((function(e){var t=Object(c.useState)(!1),s=Object(l.a)(t,2),o=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)(!1),b=Object(l.a)(u,2),m=b[0],O=b[1],f=Object(c.useState)(0),v=Object(l.a)(f,2),y=v[0],k=v[1],N=Object(c.useState)(null),S=Object(l.a)(N,2),w=S[0],D=S[1],I=Object(c.useState)(!0),T=Object(l.a)(I,2),q=T[0],R=T[1],F=Object(c.useState)(),E=Object(l.a)(F,2),A=E[0],P=E[1],B=Object(c.useState)(null),L=Object(l.a)(B,2),M=L[0],U=L[1],W=Object(c.useState)(null),H=Object(l.a)(W,2),J=H[0],z=H[1],V=e.cookies.get("token");return Object(c.useEffect)((function(){console.log("refres"),R(V),fetch("http://localhost:5000/users/dashboard").then((function(e){return e.json()})).then((function(e){U(e)})),fetch("http://localhost:5000/users/portfolios?token=".concat(V)).then((function(e){return e.json()})).then((function(e){var t=0;w&&(t=e.findIndex((function(e){return e._id==w._id}))),console.log(t),D(e[-1==t?0:t]),z(e)}))}),[A]),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(C,{}),w?Object(n.jsx)("div",{className:"container",children:q?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Welcome to your Tokofolio"}),Object(n.jsxs)("div",{className:"action-button",children:[Object(n.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return a(!0)},children:"Add to Tokofolio"}),o&&Object(n.jsx)(p,{show:o,handleClose:function(){a(!1),P(Symbol())},portfolioID:w._id}),Object(n.jsx)("button",{className:"btn btn-danger  btn-sm",onClick:function(){return O(!0)},children:"Delete Account"}),m&&Object(n.jsx)(x,{show:m,handleClose:function(){O(!1),P(Symbol())}}),Object(n.jsx)("button",{className:"btn btn-secondary  btn-sm",onClick:function(){return d(!0)},children:"Add new Tokofolio"}),j&&Object(n.jsx)(g,{show:j,handleClose:function(){d(!1),P(Symbol())},token:V}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.a.Toggle,{variant:"success",id:"dropdown-basic",children:w.name}),Object(n.jsx)(h.a.Menu,{children:J&&J.map((function(e){return Object(n.jsx)(h.a.Item,{onClick:function(){return D(e)},children:e.name})}))})]})]}),w&&M?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Token"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Qty"}),Object(n.jsx)("th",{children:"Price buy"}),Object(n.jsx)("th",{children:"Price today"}),Object(n.jsx)("th",{children:"P/L"}),Object(n.jsx)("th",{children:"Actions"})]})}),Object(n.jsx)("tbody",{children:(w.portfolio||[]).map((function(e,t){return Object(n.jsx)(_,{item:e,setTotal:k,total:y,index:t,setUser:D,update:P,token:V,items:M,user:w})}))})]}),Object(n.jsxs)("p",{children:["Total: $",Object(n.jsx)("span",{style:{color:y>0?"green":"red"},children:y.toFixed(2)})]})]}):Object(n.jsx)("div",{children:"Your tokofolio is empty"})]}):Object(n.jsx)("div",{children:"your session is expired"})}):Object(n.jsx)("h1",{children:"You need to login first to get access to your Tokofolio"})]})})));s(250);function I(e){var t=e.result,s=void 0===t?{}:t,o=Object(c.useState)(!1),a=Object(l.a)(o,2),r=a[0],i=a[1],j=Object(d.f)();return Object.values(s).map((function(e){return r?Object(n.jsx)(p,{show:r,handleClose:function(){i(!1),j.push("/dashboard")},portfolioID:"ghjfg",data:Object.values(s)[0]}):Object(n.jsxs)("ul",{class:"search-list",children:[Object(n.jsx)("li",{children:e.name}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"/cryptocurrency_icons/svg/color/".concat(e.symbol.toLowerCase(),".svg"),alt:"logo",width:"72",height:"72"})}),Object(n.jsxs)("li",{children:["Symbol: ",e.symbol]}),Object(n.jsxs)("li",{children:["Price: ",e.quote.USD.price]}),Object(n.jsxs)("li",{children:["Volume 24h: ",e.quote.USD.volume_24h]}),Object(n.jsxs)("li",{children:["Percent change last 1h: ",e.quote.USD.percent_change_1h]}),Object(n.jsxs)("li",{children:["Percent change last 24h: ",e.quote.USD.percent_change_24h]}),Object(n.jsxs)("li",{children:["Percent change last 7d: ",e.quote.USD.percent_change_7d]}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(!0)},children:"Add to Tokofolio"})})]})}))}s(251);var T=s(57),q=s.n(T);s(162);function R(e){var t=e.items;return Object(c.useLayoutEffect)((function(){var e=document.querySelector("ul.marquee-content"),t=document.documentElement,s=getComputedStyle(t).getPropertyValue("--marquee-elements-displayed");t.style.setProperty("--marquee-elements",e.children.length);for(var n=0;n<s;n++)e.appendChild(e.children[n].cloneNode(!0))}),[]),Object(n.jsx)("div",{className:"marquee",children:Object(n.jsx)("ul",{className:"marquee-content",children:t.map((function(e){return Object(n.jsxs)("li",{children:[e.symbol,": ",e.quote.USD.price]})}))})})}function F(e){var t=e.items,s=Object(c.useState)(null),o=Object(l.a)(s,2),a=o[0],r=o[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),d=j[0],h=j[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),m=b[0],O=b[1];return Object(n.jsxs)("div",{className:"add-background",children:[Object(n.jsx)("div",{className:"Ticker",children:t&&Object(n.jsx)(R,{items:t})}),Object(n.jsx)("div",{className:"Navbar",children:Object(n.jsx)(C,{})}),Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Start your Tokofolio today!"})}),Object(n.jsxs)("div",{className:"parent main column",children:[Object(n.jsx)("div",{id:"search-bar-container",className:"parent box search-bar-container ",children:Object(n.jsx)("div",{className:"parent form",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("input",{type:"text",className:"shadow-lg",placeholder:"Search tokens",size:"50",value:m,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("button",{style:{position:"absolute",right:"50px"},onClick:function(){h(!0),r(null),fetch("http://localhost:5000/coin-portfolio-data?search=".concat(m)).then((function(e){return e.json()})).then((function(e){h(!1),r(e),console.log(e)})).catch((function(e){console.log(e)})).finally((function(){console.log("complete")}))},children:Object(n.jsx)("i",{className:"fas fa-search"})})]})})}),d&&Object(n.jsx)("div",{className:"loader",children:"Loading..."}),a&&Object(n.jsx)(I,{result:a})]})]})}s(163);var E=s(58),A=s.n(E),P=q.a.create({baseURL:"http://localhost:5000",timeout:5e3,headers:{"X-Custom-Header":"foobar"}}),B={login:function(e,t,s,n){P.post("/users/login",{email:e,password:t}).then((function(e){if(console.log(e),!e.data.success)return n("Error occurred in login, please try again");s.cookies.set("token",e.data.token,{path:"/",expires:A.a.unix(e.data.expiresAt).toDate()}),s.history.push("/dashboard")})).catch((function(e){console.log(e),n("Error occurred in login, please try again")}))},sendMessage:function(e,t,s){return console.log(e),P.post("/api/v1/message/new",{name:e,room:t,message:s})},syncMessage:function(){return P.get("/api/v1/message/sync",{})},syncMessageByRoom:function(e){return P.get("/api/v1/message/syncbyroom/"+e,{})},addRoom:function(e,t){return P.post("/api/v1/room/new",{from:e,to:t})},syncRooms:function(e){return P.get("/api/v1/room/sync",{headers:{auth_token:e}})},findRoom:function(e){return P.get("/api/v1/room/"+e,{})},register:function(e,t,s,n){P.post("/users/register",{email:e,password:t}).then((function(e){if(console.log(e),!e.data.success)return n("Error occurred in register, please try again");s.cookies.set("token",e.data.token,{path:"/",expires:A.a.unix(e.data.expiresAt).toDate()}),s.history.push("/dashboard")})).catch((function(e){console.log(e),n("Error occurred in register, please try again")}))}},L=Object(f.a)(B);s(288);var M=Object(d.g)(Object(f.a)((function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),o=s[0],a=s[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),j=i[0],d=i[1],h=Object(c.useState)(""),u=Object(l.a)(h,2),b=u[0],m=u[1];return Object(c.useEffect)((function(){console.log("email",o),console.log("password",j)}),[o,j]),Object(n.jsxs)("div",{className:"container-fluid other-background login",style:{backgroundImage:"url('/background2.svg')"},children:[Object(n.jsx)(C,{}),Object(n.jsx)("h1",{class:"h3 mt-3 mb-3 font-weight-normal",children:"Please Sign In"}),Object(n.jsx)("h3",{className:"text-danger",children:b}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"email",children:"Email"}),Object(n.jsx)("label",{htmlfor:"inputEmail",class:"sr-only",children:"Email"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Email address",required:"",autofocus:"",name:"email",value:o,onChange:function(e){a(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"password",class:"sr-only",children:"Password"}),Object(n.jsx)("input",{type:"password",class:"form-control",id:"password",name:"password",onChange:function(e){d(e.target.value)}}),Object(n.jsx)("div",{className:"checkbox mb-3"})]}),Object(n.jsx)("button",{class:"btn btn-primary",onClick:function(){""===o||""===j?m("All fields required"):(m(""),L.login(o,j,e,m))},children:"Sign In"})]})]})})));s(289);var U=Object(d.g)(Object(f.a)((function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),o=s[0],a=s[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),j=i[0],d=i[1],h=Object(c.useState)(""),u=Object(l.a)(h,2),b=u[0],m=u[1],O=Object(c.useState)(""),f=Object(l.a)(O,2),p=f[0],x=f[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),y=v[0],k=v[1];return Object(c.useEffect)((function(){console.log("firstname",o),console.log("lastname",j),console.log("email",b),console.log("passpord",p)}),[o,j,b,p]),Object(n.jsxs)("div",{className:"container-fluid other-background login",style:{backgroundImage:"url('/background2.svg')"},children:[Object(n.jsx)("img",{className:"mb-4",src:"/../tokofolio_logo1.svg",alt:"200",width:"200",height:"300"}),Object(n.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please Register"}),Object(n.jsxs)("h3",{className:"text-danger",children:[y," "]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"first_name",className:"sr-only",children:"First Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",required:"",autoFocus:"",name:"first_name",value:o,onChange:function(e){a(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"last_name",className:"sr-only",children:"Last Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Last Name",required:"",autoFocus:"",name:"last_name",value:j,onChange:function(e){d(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Email address",required:"",autoFocus:"",id:"email",name:"email",value:b,onChange:function(e){m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:"",id:"password",name:"password",value:p,onChange:function(e){x(e.target.value)}}),Object(n.jsx)("div",{className:"checkbox mb-3",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})})]}),Object(n.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(){""===o||""===j||""===b||""===p?k("All fields required"):(k(""),q.a.post("https://cryptic-sands-87652.herokuapp.com/users/register",{email:b,password:p,first_name:o,last_name:j}).then((function(t){if(console.log(t),!t.data.success)return k("Error occurred in form, please check values");e.cookies.set("token",t.data.token,{path:"/",expires:A.a.unix(t.data.expiresAt).toDate()}),e.history.push("/dashboard")})).catch((function(e){console.log(e),k("Error occurred in form, please check values")})))},children:"Submit"})]})}))),W=s(40),H=s(41),J=s(43),z=s(42),V=(s(290),s(291),s(230)),Y=s.n(V),Q=s(437),X=s(425),$=s(77),G=s.n($),K=s(231),Z=s.n(K),ee=s(426),te=(s(292),s(120)),se=function(e){Object(J.a)(s,e);var t=Object(z.a)(s);function s(e){var n;return Object(W.a)(this,s),(n=t.call(this,e)).props={addNewChat:!1,gossip:!1},n.state={seed:Math.floor(5e3*Math.random()),userDetail:""},n}return Object(H.a)(s,[{key:"componentDidMount",value:function(){this.setState({userDetail:te.decode(this.props.cookies.get("token"))})}},{key:"createChat",value:function(){var e=prompt("Please enter user email");e&&L.addRoom(this.state.userDetail.email,e)}},{key:"roomSelection",value:function(){console.log(this.props.roomInfo.roomID),this.props.cookies.set("selectedRoom",this.props.roomInfo.roomID)}},{key:"render",value:function(){var e=this;return console.log(this.state.userDetail),console.log(this.props.roomInfo),this.props.addNewChat?Object(n.jsx)("div",{onClick:function(t){e.createChat()},className:"sidebarChat",children:Object(n.jsx)("h2",{children:"Add new chat"})}):Object(n.jsxs)("div",{className:"sidebarChat",onClick:function(t){e.roomSelection()},children:[this.props.roomInfo.usernames.map((function(t){if(t!==e.state.userDetail.name)return Object(n.jsx)(Q.a,{src:"https://avatars.dicebear.com/api/human/".concat(t,".svg")})})),Object(n.jsx)("div",{className:"sidebarChat__info",children:this.props.roomInfo.usernames.map((function(t){if(t!==e.state.userDetail.name)return Object(n.jsx)("h2",{children:t})}))})]})}}]),s}(o.a.Component),ne=Object(f.a)(se),ce=s(88),oe=s.n(ce),ae=s(120),re=function(e){Object(J.a)(s,e);var t=Object(z.a)(s);function s(e){var n;return Object(W.a)(this,s),(n=t.call(this,e)).state={rooms:[],userDetail:""},n}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var e=this;L.syncRooms(this.props.cookies.get("token")).then((function(t){e.props.cookies.set("rooms",JSON.stringify(t.data)),e.setState({rooms:t.data})})),this.setState({userDetail:ae.decode(this.props.cookies.get("token"))}),new oe.a("639cb43c9e51d063cebf",{cluster:"ap1"}).subscribe("rooms").bind("insert",(function(t){console.log(t),L.syncRooms(e.props.cookies.get("token")).then((function(t){e.props.cookies.set("rooms",JSON.stringify(t.data)),e.setState({rooms:t.data})}))}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__header",children:[Object(n.jsx)(Q.a,{src:"https://avatars.dicebear.com/api/human/".concat(this.state.userDetail.name,".svg")}),Object(n.jsxs)("div",{className:"sidebar__headerRight",children:[Object(n.jsx)(X.a,{children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(X.a,{children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(X.a,{children:Object(n.jsx)(Z.a,{})})]})]}),Object(n.jsx)("div",{className:"sidebar__search",children:Object(n.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(n.jsx)(ee.a,{}),Object(n.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(n.jsxs)("div",{className:"sidebar__chats",children:[Object(n.jsx)(ne,{addNewChat:!0}),this.state.rooms?this.state.rooms.map((function(e){return Object(n.jsx)(ne,{roomInfo:e})})):Object(n.jsx)("div",{})]})]})}}]),s}(o.a.Component),ie=Object(f.a)(re),le=s(427),je=s(428),de=s(429),he=s(233),ue=s.n(he),be=(s(406),s(232)),me=s.n(be),Oe=s(120),fe=function(e){Object(J.a)(s,e);var t=Object(z.a)(s);function s(e){var n;return Object(W.a)(this,s),(n=t.call(this,e)).state={input:"",userDetail:"",room:n.props.cookies.get("selectedRoom"),roomInfo:"",messages:[]},n}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.setState({userDetail:Oe.decode(this.props.cookies.get("token"))}),L.syncMessageByRoom(this.props.cookies.get("selectedRoom")).then((function(t){e.setState({messages:t.data})})),L.findRoom(this.state.room).then((function(t){e.setState({roomInfo:t.data})})),new oe.a("639cb43c9e51d063cebf",{cluster:"ap1"}).subscribe("messages").bind("insert",(function(t){console.log(t),t.room===e.state.room&&L.syncMessageByRoom(e.props.cookies.get("selectedRoom")).then((function(t){console.log(t.data[0].timestamp),e.setState({messages:t.data})}))})),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.room!==e.cookies.get("selectedRoom")&&(this.setState({room:this.props.cookies.get("selectedRoom")}),L.syncMessageByRoom(this.props.cookies.get("selectedRoom")).then((function(e){t.setState({messages:e.data}),console.log(e.data)})),L.findRoom(this.props.cookies.get("selectedRoom")).then((function(e){console.log(e.data),t.setState({roomInfo:e.data})}))),this.scrollToBottom()}},{key:"sendMessage",value:function(e){e.preventDefault(),L.sendMessage(this.state.userDetail.name,this.state.room,this.state.input),this.setState({input:""})}},{key:"setInput",value:function(e){this.setState({input:e.target.value})}},{key:"scrollToBottom",value:function(){this.el.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsxs)("div",{className:"chat__header",children:[Object(n.jsx)(Q.a,{}),Object(n.jsxs)("div",{className:"chat__headerInfo",children:[this.state.roomInfo?this.state.roomInfo.usernames.map((function(t){if(t!==e.state.userDetail.name)return Object(n.jsx)("h3",{children:t})})):"",Object(n.jsx)("p",{children:"Last seen at..."})]}),Object(n.jsxs)("div",{className:"chat__headerRight",children:[Object(n.jsx)(X.a,{children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(X.a,{children:Object(n.jsx)(le.a,{})}),Object(n.jsx)(X.a,{children:Object(n.jsx)(je.a,{})})]})]}),Object(n.jsxs)("div",{className:"chat__body",children:[this.state.messages.map((function(t){return Object(n.jsxs)("p",{className:"chat__message ".concat(t.name===e.state.userDetail.name&&"chat__receiver"),children:[Object(n.jsx)("span",{className:"chat__name",children:t.name}),t.message,Object(n.jsx)("span",{className:"chat__timestamp",children:Object(n.jsx)(me.a,{unix:!0,children:t.timestamp})})]})})),Object(n.jsx)("div",{ref:function(t){e.el=t}})]}),Object(n.jsxs)("div",{className:"chat__footer",children:[Object(n.jsx)(de.a,{}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{value:this.state.input,onChange:function(t){e.setInput(t)},placeholder:"Type a message",type:"text"}),Object(n.jsx)("button",{onClick:function(t){e.sendMessage(t)},type:"submit",children:"Send a message"})]}),Object(n.jsx)(ue.a,{})]})]})}}]),s}(o.a.Component),pe=Object(f.a)(fe),xe=(q.a.create({baseURL:"http://localhost:5000"}),s(430)),ge=(s(407),function(e){Object(J.a)(s,e);var t=Object(z.a)(s);function s(){return Object(W.a)(this,s),t.apply(this,arguments)}return Object(H.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"login__page ",children:Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Whatsapp.webp",alt:""}),Object(n.jsx)("div",{className:"login__text",children:Object(n.jsx)("h1",{children:"Sign in to Tokofolio Chat"})}),Object(n.jsx)(xe.a,{children:Object(n.jsx)(j.b,{to:"/login",className:"login__link",children:"Sign In"})})]})})}}]),s}(o.a.Component)),ve=function(e){Object(J.a)(s,e);var t=Object(z.a)(s);function s(e){var n;return Object(W.a)(this,s),(n=t.call(this,e)).state={showWindow:!1},n}return Object(H.a)(s,[{key:"setWindow",value:function(e){this.setState({showWindow:e})}},{key:"render",value:function(){var e=this;return this.state.showWindow?this.props.cookies.get("token")&&"undefined"!==this.props.cookies.get("token")?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"app__body",children:[Object(n.jsx)(ie,{}),Object(n.jsx)(pe,{})]}),Object(n.jsx)(X.a,{onClick:function(){e.setWindow(!1)},children:Object(n.jsx)(G.a,{})})]}):Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(ge,{}),Object(n.jsx)(X.a,{onClick:function(){e.setWindow(!1)},children:Object(n.jsx)(G.a,{})})]}):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(X.a,{onClick:function(){e.setWindow(!0)},children:Object(n.jsx)(G.a,{})})})}}]),s}(o.a.Component),ye=Object(f.a)(ve);function ke(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),s=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("http://localhost:5000/users/dashboard").then((function(e){return e.json()})).then((function(e){o(Object.values(e))}))}),[]),Object(n.jsxs)(j.a,{children:[Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,children:Object(n.jsx)(F,{items:s})}),Object(n.jsx)(d.a,{path:"/dashboard",children:Object(n.jsx)(D,{})}),Object(n.jsx)(d.a,{path:"/register",children:Object(n.jsx)(U,{})}),Object(n.jsx)(d.a,{path:"/login",children:Object(n.jsx)(M,{})}),Object(n.jsx)(d.a,{path:"/chat",children:Object(n.jsx)(ye,{})}),Object(n.jsx)(d.a,{path:"/portfolios/:id",children:Object(n.jsx)(D,{})}),Object(n.jsx)(ye,{})]}),Object(n.jsx)(ye,{})]})}var Ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,438)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),o(e),a(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(ke,{})})}),document.getElementById("root")),Ne()}},[[408,1,2]]]);
//# sourceMappingURL=main.42768082.chunk.js.map