(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),l=c.n(s),r=(c(9),c(2)),o=(c(10),c(0));var i=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})})};function d(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",onChange:function(e){console.log("On change"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"black"},value:n,id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Uppercase was clicked!");var t=n.toUpperCase();s(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Lowercase was clicked!");var t=n.toLowerCase();s(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){console.log("Clear button was clicked!");s(""),e.showAlert("Text cleared","success")},children:"Clear"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.split(/[  ]+/);s(t.join(" ")),e.showAlert("Removed Extra spacesonen","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Text Summary"}),Object(o.jsxs)("p",{children:["Word Count: ",n.split(" ").filter((function(e){return 0!==e.length})).length," and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," minutes read!"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Nothing to preview! "})]})]})}d.defaultProps={title:"Kuch bhi",aboutText:"aur batao"};var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"\ud835\udd4b\ud835\udd56\ud835\udd69\ud835\udd65\u2102\ud835\udd66\ud835\udd63\ud835\udd56",aboutText:"About",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",u("Dark Mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light Mode has been enabled","success"))}}),Object(o.jsx)(i,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Try TextCure",mode:c,showAlert:u})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.cc59ac9c.chunk.js.map