(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(18),r=c.n(a),i=(c(26),c(9)),o=c.n(i),j=c(19),b=c(7),u=c(20),l=c.n(u),p=c(3),d=c(4),h=c(6),O=c(5),x=c(0),m=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return console.log(),Object(x.jsx)("button",{onClick:function(){return e.props.selectCompany(e.props.index)},className:"job-btn ".concat(this.props.value===this.props.index&&"active-btn"),children:this.props.exp.company})}}]),c}(n.Component),f=c(21),v=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"job-desc",children:[Object(x.jsx)(f.a,{className:"job-icon"}),Object(x.jsx)("p",{children:this.props.duty})]})}}]),c}(n.Component);var y=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(b.a)(a,2),i=r[0],u=r[1],p=Object(n.useState)(0),d=Object(b.a)(p,2),h=d[0],O=d[1],f=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://course-api.com/react-tabs-project",e.next=4,l.a.get("https://course-api.com/react-tabs-project");case 4:if(!((t=e.sent).status>=400)){e.next=8;break}throw new Error(t.statusText);case 8:u(t.data),s(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){f()}),[]),c)return Object(x.jsx)("main",{children:Object(x.jsx)("div",{className:"loading",children:Object(x.jsx)("h1",{children:"loading..."})})});var y=function(e){O(e)},N=i[h],k=N.title,g=N.company,w=N.dates,C=N.duties;return Object(x.jsxs)("section",{className:"section",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h2",{children:"experience"}),Object(x.jsx)("div",{className:"underline"})]}),Object(x.jsxs)("div",{className:"jobs-center",children:[Object(x.jsx)("div",{className:"btn-container",children:i.map((function(e,t){return Object(x.jsx)(m,{exp:e,index:t,value:h,selectCompany:y},e.id)}))}),Object(x.jsxs)("article",{className:"job-info",children:[Object(x.jsx)("h3",{children:k}),Object(x.jsx)("h4",{children:g}),Object(x.jsx)("p",{className:"job-date",children:w}),C.map((function(e,t){return Object(x.jsx)(v,{duty:e},t)}))]})]}),Object(x.jsx)("button",{className:"btn",type:"button",children:"more info"})]})};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4d8beccd.chunk.js.map