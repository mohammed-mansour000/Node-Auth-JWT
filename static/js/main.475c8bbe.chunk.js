(this["webpackJsonptemprary-name02"]=this["webpackJsonptemprary-name02"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(21),a=c.n(s),i=(c(28),c(6)),j=c(2),o=(c(29),c(4)),l=c(38),b=c(0);var u=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")):{}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(l.a)(["jwt"]),a=Object(o.a)(s,3),u=a[0],p=(a[1],a[2]),h=Object(j.e)();return Object(r.useEffect)((function(){u.jwt?n(JSON.parse(localStorage.getItem("userInfo"))):(n({}),h.push("/login"))}),[u.jwt]),Object(b.jsxs)("nav",{children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{children:"Node Auth-JWT"})}),Object(b.jsxs)("ul",{children:[(null===c||void 0===c?void 0:c.email)&&Object(b.jsxs)("li",{children:["Welcome, ",c.email]}),u.jwt&&Object(b.jsx)("li",{style:{cursor:"pointer"},onClick:function(){p("jwt"),localStorage.removeItem("userInfo"),n({}),h.push("/login")},children:"Log out"}),!u.jwt&&Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/login",children:"Log in"})}),!u.jwt&&Object(b.jsx)("li",{className:"btn",children:Object(b.jsx)(i.b,{to:"/signup",children:"Sign up"})})]})]})};var p=function(){return Object(b.jsx)("footer",{children:"By Mohammed Mansur"})};var h=function(){var e=Object(l.a)(["jwt"]),t=Object(o.a)(e,3),c=t[0],n=(t[1],t[2],Object(j.e)());return Object(r.useEffect)((function(){c.jwt||(localStorage.removeItem("userInfo"),n.push("/login"))}),[]),Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"smoothie",children:Object(b.jsx)("img",{src:"smoothie.png",alt:""})}),Object(b.jsxs)("div",{className:"headings",children:[Object(b.jsx)("h2",{children:"Smoothie Recipes"}),Object(b.jsx)("h3",{children:"By Ninjas For Ninjas"}),Object(b.jsx)(i.b,{to:"smoothies",className:"btn",children:"View Recipes"})]})]})},O=c(13),d=c.n(O),m=c(16),x=c(11),g=c(9);var f=function(){var e=Object(l.a)(["jwt"]),t=Object(o.a)(e,3),c=t[0],n=t[1],s=(t[2],Object(r.useState)({email:"",password:""})),a=Object(o.a)(s,2),i=a[0],u=a[1],p=Object(r.useState)({emailError:"",passwordError:""}),h=Object(o.a)(p,2),O=h[0],f=h[1],v=Object(j.e)(),w=function(e){var t=e.target,c=t.name,r=t.value;u(Object(g.a)(Object(g.a)({},i),{},Object(x.a)({},c,r)))};Object(r.useEffect)((function(){c.jwt&&v.push("/")}),[]);var S=function(){var e=Object(m.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f({email:"",password:""}),e.prev=2,e.next=5,fetch("https://auth-node-jwt.herokuapp.com/login",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).errors&&(console.log(r.error),f(Object(g.a)(Object(g.a)({},O),r.errors))),r.user&&(n("jwt",r.token,{maxAge:2592e5}),localStorage.setItem("userInfo",JSON.stringify(r.user)),v.push("/")),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:S,children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",required:!0,onChange:w}),O.email&&Object(b.jsx)("div",{className:"email error",children:O.email}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",required:!0,onChange:w}),O.password&&Object(b.jsx)("div",{className:"password error",children:O.password}),Object(b.jsx)("button",{children:"Login"})]})})};var v=function(){var e=Object(l.a)(["jwt"]),t=Object(o.a)(e,3),c=t[0],n=t[1],s=(t[2],Object(r.useState)({email:"",password:""})),a=Object(o.a)(s,2),i=a[0],u=a[1],p=Object(r.useState)({emailError:"",passwordError:""}),h=Object(o.a)(p,2),O=h[0],f=h[1],v=Object(j.e)(),w=function(e){var t=e.target,c=t.name,r=t.value;u(Object(g.a)(Object(g.a)({},i),{},Object(x.a)({},c,r)))};Object(r.useEffect)((function(){c.jwt&&v.push("/")}),[]);var S=function(){var e=Object(m.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f({email:"",password:""}),e.prev=2,e.next=5,fetch("https://auth-node-jwt.herokuapp.com/signup",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).errors&&f(Object(g.a)(Object(g.a)({},O),r.errors)),r.user&&(n("jwt",r.token,{maxAge:2592e5}),localStorage.setItem("userInfo",JSON.stringify(r.user)),v.push("/")),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:S,children:[Object(b.jsx)("h2",{children:"Sign Up"}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",required:!0,onChange:w}),O.email&&Object(b.jsx)("div",{className:"email error",children:O.email}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",required:!0,onChange:w}),O.password&&Object(b.jsx)("div",{className:"password error",children:O.password}),Object(b.jsx)("button",{children:"Signup"})]})})};var w=function(){var e=Object(l.a)(["jwt"]),t=Object(o.a)(e,3),c=t[0],n=(t[1],t[2],Object(j.e)());return Object(r.useEffect)((function(){c.jwt||(localStorage.removeItem("userInfo"),n.push("/login"))}),[]),Object(b.jsxs)("ul",{className:"recipes",children:[Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Banana Boost"}),Object(b.jsx)("p",{children:"Banana, Vanilla ice cream, Milk"})]}),Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Tropical Twist"}),Object(b.jsx)("p",{children:"Peach, Pinapple, Apple juice"})]}),Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Protein Packer"}),Object(b.jsx)("p",{children:"Oats, Peanut butter, Milk, Banana, Blueberries"})]}),Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Banana Boost"}),Object(b.jsx)("p",{children:"Banana, Vanilla ice cream, Milk"})]}),Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Tropical Twist"}),Object(b.jsx)("p",{children:"Peach, Pinapple, Apple juice"})]}),Object(b.jsxs)("li",{className:"recipe",children:[Object(b.jsx)("img",{src:"../../public/smoothie.png",alt:"smoothie recipe icon"}),Object(b.jsx)("h4",{children:"Protein Packer"}),Object(b.jsx)("p",{children:"Oats, Peanut butter, Milk, Banana, Blueberries"})]})]})};var S=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(j.a,{path:"/",component:h,exact:!0}),Object(b.jsx)(j.a,{path:"/signup",component:v}),Object(b.jsx)(j.a,{path:"/login",component:f}),Object(b.jsx)(j.a,{path:"/smoothies",component:w}),Object(b.jsx)(p,{})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.475c8bbe.chunk.js.map