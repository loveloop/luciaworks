(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(8),s=n.n(i),a=(n(14),n(7)),r=n(9),d=n(2),u=n(3),l=n(5),h=n(4),j=(n(15),n(0)),p=function(t){var e=t.form,n=t.children;return Object(j.jsxs)("div",{className:"todo-wrap",children:[Object(j.jsx)("div",{className:"title",children:"TO DO LIST"}),Object(j.jsx)("section",{className:"form-wrapper",children:e}),Object(j.jsx)("section",{className:"todos-wrapper",children:n})]})},b=(n(17),function(t){var e=t.value,n=t.onAppChange,o=t.onCreate,c=t.onAppKey;return Object(j.jsxs)("div",{className:"inputForm",children:[Object(j.jsx)("input",{value:e,onChange:n,onKeyPress:c}),Object(j.jsx)("button",{className:"addButton",onClick:o,children:"\ucd94\uac00"})]})}),v=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.id,o=t.onRemove,c=t.onToggle,i=t.checked;return Object(j.jsxs)("div",{className:"todoItem",onClick:function(){return c(n)},children:[Object(j.jsx)("div",{className:"remove",onClick:function(t){t.stopPropagation(),o(n)},children:"X"}),Object(j.jsx)("div",{className:"todoText ".concat(i&&"checked"),children:e}),Object(j.jsx)("div",{className:"check",children:"check"})]})}}]),n}(o.Component)),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.todos,n=t.onRemovep,o=t.onTogglep,c=e.map((function(t){var e=t.id,c=t.text,i=t.checked;return Object(j.jsx)(v,{id:e,text:c,checked:i,onRemove:n,onToggle:o},e)}));return Object(j.jsx)("div",{children:c})}}]),n}(o.Component),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).id=3,t.state={input:"",todos:[{id:0,text:"\ub9ac\uc561\ud2b8 \uc815\ub9ac\ud558\uae30",checked:!1},{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc815\ub9ac",checked:!1},{id:2,text:"\uc774\ub825\uc11c \uc4f0\uae30 \ubc30\uc5f4",checked:!1}]},t.onChange=function(e){t.setState({input:e.target.value})},t.listAdd=function(e){var n=t.state,o=n.input,c=n.todos;console.log("add"),t.setState({input:"",todos:c.concat({id:t.id++,text:o,checked:!1})})},t.listRemove=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})},t.listToggle=function(e){var n=t.state.todos.findIndex((function(t){return t.id===e})),o=t.state.todos[n],c=Object(r.a)(t.state.todos);c[n]=Object(a.a)(Object(a.a)({},o),{},{checked:!o.checked}),t.setState({todos:c})},t.onKeyEnter=function(e){console.log("enter"),"Enter"===e.key&&t.listAdd()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{form:Object(j.jsx)(b,{value:this.state.input,onAppChange:this.onChange,onCreate:this.listAdd,onAppKey:this.onKeyEnter}),children:Object(j.jsx)(O,{todos:this.state.todos,onRemovep:this.listRemove,onTogglep:this.listToggle})})})}}]),n}(o.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),i(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.dcf2377d.chunk.js.map