"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[659],{5993:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(910),a=r(7294),l=r(2789);const o=function(e){var t=e.onClick;return a.createElement(l.Z,null,a.createElement(i,{onClick:t},a.createElement("div",{className:"alert__overlay"}),a.createElement("div",{className:"alert__content"},a.createElement("span",{className:"alert__guide"},"정말로 삭제하시겠습니까?"),a.createElement("div",{className:"alert__checkOne"},a.createElement("span",{className:"alert__cancel"},"취소"),a.createElement("span",{className:"alert__delete"},"삭제")))))};var i=(0,n.Z)("div",{target:"e2vtb6y0"})({name:"1p6xfml",styles:"z-index:1;width:100vw;height:100vh;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.3);.alert__content{display:flex;flex-direction:column;gap:5px;justify-content:space-between;position:absolute;left:50%;top:35%;transform:translate(-50%, -50%);width:308px;height:108px;background-color:white;box-shadow:0px 0px 4px rgba(204, 204, 204, 0.5),0px 2px 4px rgba(0, 0, 0, 0.25);backdrop-filter:blur(4px);border-radius:10px;padding:16px 20px;font-size:20px;}.alert__overlay{width:100%;height:100%;}.alert__guide{font-size:20px;line-height:20px;}.alert__checkOne{display:flex;justify-content:space-between;font-size:16px;}.alert__cancel{cursor:pointer;}.alert__delete{cursor:pointer;color:red;}"})},8659:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916);var n=r(910),a=r(7294),l=r(1421),o=r(9509),i=(r(8674),r(5666),r(8767)),c=r(2804),u=r(7750),s=(r(9070),r(7941),r(7327),r(5003),r(4747),r(9337),r(3321),r(3078)),p=r(1788),m=r(1544),f=r(8061);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b=function(e){var t=e.form,r=e.setForm,n=e.onSubmit,o=e.onClick,i=e.isNew,c=(0,l.u)(),u=function(e){return"dark"===e?"black"===t.textColor?a.createElement("img",{src:p.sz,alt:"체크"}):a.createElement("img",{src:p.Md,alt:"체크X"}):"light"===e?"white"===t.textColor?a.createElement("img",{src:p.sz,alt:"체크"}):a.createElement("img",{src:p.Md,alt:"체크X"}):void 0};return a.createElement(v,{theme:c,onSubmit:n},a.createElement(y,null,a.createElement(C,null,"레이블 이름"),a.createElement(S,{type:"text",maxLength:16,required:!0,value:t.name,onChange:function(e){var n=(0,m.zW)(e.currentTarget.value);r(g(g({},t),{},{name:n}))}})),a.createElement(y,null,a.createElement(C,null,"설명(선택)"),a.createElement(S,{type:"text",maxLength:30,value:t.description,onChange:function(e){return r(g(g({},t),{},{description:e.currentTarget.value}))}})),a.createElement(x,null,a.createElement(E,null,a.createElement(C,null,"배경 색상"),a.createElement(w,null,a.createElement(k,{bgColor:t.bgColor}),a.createElement("span",null,t.bgColor),a.createElement("img",{src:p.RG,alt:"변경",onClick:function(){return r(g(g({},t),{},{bgColor:(0,m.mr)()}))}}))),a.createElement(Z,null,a.createElement(C,null,"텍스트 색상"),a.createElement(A,null,a.createElement("div",{onClick:function(){return r(g(g({},t),{},{textColor:"black"}))}},u("dark"),a.createElement("span",null,"어두운 색")),a.createElement("div",{onClick:function(){return r(g(g({},t),{},{textColor:"white"}))}},u("light"),a.createElement("span",null,"밝은 색"))))),a.createElement(j,null,a.createElement(a.Fragment,null,!i&&a.createElement(_,{onClick:o,sizeLevel:1},a.createElement("img",{src:p.oU}),a.createElement("span",null,"취소")),a.createElement(O,{type:"submit",onSubmit:n,opacity:null!=t&&t.name?"1":"0.5",sizeLevel:1},a.createElement("img",{src:p.Om}),a.createElement("span",null,"완료")))))};var v=(0,n.Z)("form",{target:"emc337a12"})({name:"1wbs6dl",styles:"width:100%;display:flex;flex-direction:column;gap:10px"}),y=(0,n.Z)("div",{target:"emc337a11"})("display:flex;align-items:center;padding:0px 24px;width:100%;height:40px;background:",(function(e){return e.theme.colors.input}),";border-radius:11px;gap:30px;position:relative;"),x=(0,n.Z)("div",{target:"emc337a10"})({name:"oq6u0f",styles:"display:flex;gap:10px"}),E=(0,n.Z)("div",{target:"emc337a9"})(f.Sg," padding:0px 24px;width:30%;height:40px;background:",(function(e){return e.theme.colors.input}),";border-radius:11px;gap:30px;position:relative;"),w=(0,n.Z)("div",{target:"emc337a8"})(f.Sg," position:absolute;left:112px;top:50%-20;gap:15px;span{font-size:13px;}img{cursor:pointer;}"),k=(0,n.Z)("div",{target:"emc337a7"})("background-color:",(function(e){return e.bgColor}),";border-radius:50%;width:10px;height:10px;"),Z=(0,n.Z)("div",{target:"emc337a6"})(f.Sg," padding:0px 24px;width:35%;height:40px;background:",(function(e){return e.theme.colors.input}),";border-radius:11px;gap:30px;"),A=(0,n.Z)("div",{target:"emc337a5"})(f.Sg," gap:20px;div{",f.Sg," gap:5px;font-size:13px;cursor:pointer;}"),C=(0,n.Z)("label",{target:"emc337a4"})("font-size:12px;line-height:20px;font-weight:bold;color:",(function(e){return e.theme.colors.text}),";"),S=(0,n.Z)("input",{target:"emc337a3"})("width:80%;height:100%;background:",(function(e){return e.theme.colors.input}),";position:absolute;left:112px;top:0px;font-size:16px;"),j=(0,n.Z)("div",{target:"emc337a2"})({name:"1eclsy6",styles:"display:flex;gap:8px;position:absolute;bottom:32px;right:32px"}),_=(0,n.Z)(s.Z,{target:"emc337a1"})("background-color:white;border:1px solid ",(function(e){return e.theme.colors.blue}),";span{color:",(function(e){return e.theme.colors.blue}),";}"),O=(0,n.Z)(s.Z,{target:"emc337a0"})(""),z=r(691),N=r(7244);function P(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const q=function(e){var t=e.isNew,r=void 0!==t&&t,n=e.className,o=e.init,s=e.onClick,p=e.setActiveBtn,f=(0,l.u)(),d=I((0,a.useState)({name:o?o.name:"",description:o?o.description:"",bgColor:o?o.bgColor:(0,m.mr)(),textColor:o?o.textColor:"black"}),2),g=d[0],h=d[1],v=(0,i.useMutation)((function(e){return(0,z.a4)("/label",e)})),y=(0,i.useMutation)((function(e){return(0,z.Q0)("/label?id=".concat(o._id),e)})),x=(0,i.useQueryClient)(),E=(0,c.Zl)(N.f),w=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r){e.next=7;break}return e.next=4,v.mutateAsync(g);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,y.mutateAsync(g);case 9:e.t0=e.sent;case 10:if((n=e.t0).data.success){e.next=14;break}return E({isActive:!0,title:n.data.message,mode:"fail"}),e.abrupt("return");case 14:E({isActive:!0,title:r?"레이블을 생성하였습니다.":"레이블을 업데이트 하였습니다.",mode:"success"}),x.invalidateQueries("LABEL"),p(!1);case 17:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){P(l,n,a,o,i,"next",e)}function i(e){P(l,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return a.createElement(M,{className:n,theme:f},a.createElement(B,null,r?a.createElement(R,null,"새로운 레이블 추가"):a.createElement(R,null,"레이블 편집")),a.createElement(T,null,a.createElement(U,null,a.createElement(u.Z,{info:g})),a.createElement(D,null,a.createElement(b,{form:g,setForm:h,onSubmit:w,onClick:s,isNew:r}))))};var M=(0,n.Z)("div",{target:"e1pare8u5"})("width:100%;height:345px;background:white;border-top:1px solid ",(function(e){return e.theme.colors.border}),";padding:32px;position:relative;"),B=(0,n.Z)("div",{target:"e1pare8u4"})({name:"151kqgc",styles:"position:absolute;left:32px;top:32px"}),R=(0,n.Z)("span",{target:"e1pare8u3"})({name:"1qg6oif",styles:"font-size:24px"}),T=(0,n.Z)("div",{target:"e1pare8u2"})({name:"cvtw4y",styles:"display:flex;justify-content:space-between;height:100%"}),U=(0,n.Z)("div",{target:"e1pare8u1"})("width:20%;height:100%;",f.Xf,";"),D=(0,n.Z)("div",{target:"e1pare8u0"})("width:75%;height:100%;",f.Sg," justify-content:flex-end;"),Q=(r(1249),r(6699),r(5993));function F(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const G=function(e){var t=e.label,r=(0,l.u)(),n=$((0,a.useState)(!1),2),o=n[0],s=n[1],m=$((0,a.useState)(!1),2),f=m[0],d=m[1],g=(0,i.useMutation)((function(){return(0,z.yY)("/label?id=".concat(t._id))})),h=(0,i.useQueryClient)(),b=(0,c.Zl)(N.f),v=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(["alert__overlay","alert__cancel"].includes(t.target.className)&&d(!1),"alert__delete"!==t.target.className){e.next=11;break}return d(!1),e.next=5,g.mutateAsync();case 5:if((r=e.sent).data.success){e.next=9;break}return b({isActive:!0,title:r.data.message,mode:"fail"}),e.abrupt("return");case 9:b({isActive:!0,title:"레이블을 삭제하였습니다.",mode:"success"}),h.invalidateQueries("LABEL");case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){F(l,n,a,o,i,"next",e)}function i(e){F(l,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement(H,{theme:r},a.createElement(u.Z,{info:t}),a.createElement(J,null,t.description),a.createElement(W,null,a.createElement(Y,{onClick:function(){return s(!o)}},a.createElement("img",{src:p.EJ,alt:"편집"}),"편집"),a.createElement(K,{onClick:function(){return d(!0)}},a.createElement("img",{src:p.R4,alt:"삭제"}),"삭제"))),o&&a.createElement(q,{init:t,onClick:function(){return s(!1)},setActiveBtn:s}),f&&a.createElement(Q.Z,{onClick:v}))};var H=(0,n.Z)("div",{target:"eey7ny84"})(f.Sg," width:100%;height:100px;background:white;border-top:1px solid ",(function(e){return e.theme.colors.border}),";padding:0 32px;position:relative;justify-content:space-between;"),J=(0,n.Z)("span",{target:"eey7ny83"})("font-size:16px;line-height:28px;color:",(function(e){return e.theme.colors.text}),";position:absolute;width:800px;height:28px;left:240px;top:36px;"),W=(0,n.Z)("div",{target:"eey7ny82"})({name:"7l4wkj",styles:"display:flex;justify-content:space-between;gap:20px"}),Y=(0,n.Z)("span",{target:"eey7ny81"})(f.Sg," gap:5px;color:",(function(e){return e.theme.colors.text}),";cursor:pointer;"),K=(0,n.Z)("span",{target:"eey7ny80"})(f.Sg," gap:5px;color:",(function(e){return e.theme.colors.red}),";cursor:pointer;"),V=r(8295),ee=r(3555),te=r(3006);function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const ae=function(){var e=(0,l.u)(),t=(0,te.S)(),r=re((0,te.e)(),2),n=r[0];return r[1]?a.createElement(le,null,a.createElement(ee.Z,null)):a.createElement(oe,{theme:e},a.createElement(ie,null,a.createElement(ce,null,t,"개의 레이블")),0===(null==n?void 0:n.length)?a.createElement(V.Z,null):null==n?void 0:n.map((function(e){return a.createElement(G,{key:e._id,label:e})})))};var le=(0,n.Z)("div",{target:"ejfqvb83"})({name:"1vcob1d",styles:"display:flex;justify-content:center;align-items:center"}),oe=(0,n.Z)("div",{target:"ejfqvb82"})("width:100%;margin-top:30px;background:",(function(e){return e.theme.colors.background}),";border:1px solid ",(function(e){return e.theme.colors.border}),";border-radius:16px;overflow:hidden;"),ie=(0,n.Z)("div",{target:"ejfqvb81"})({name:"1wonv3d",styles:"padding:18px 32px"}),ce=(0,n.Z)("span",{target:"ejfqvb80"})("font-size:16px;line-height:28px;color:",(function(e){return e.theme.colors.text}),";font-weight:bold;"),ue=r(273);const se=function(e){var t=e.onClick,r=e.isActiveAddBtn,n=(0,l.u)();return a.createElement(pe,{theme:n},a.createElement(ue.Z,{choice:"label"}),r?a.createElement(fe,{sizeLevel:1,onClick:t},a.createElement("img",{src:p.oU,alt:"닫기"}),a.createElement("span",null,"닫기")):a.createElement(me,{sizeLevel:1,onClick:t},a.createElement("img",{src:p.LH,alt:"추가"}),"추가"))};var pe=(0,n.Z)("div",{target:"e4bszht2"})({name:"m8prfz",styles:"display:flex;justify-content:space-between;margin-top:50px"}),me=(0,n.Z)(s.Z,{target:"e4bszht1"})(""),fe=(0,n.Z)(s.Z,{target:"e4bszht0"})("background-color:white;border:1px solid ",(function(e){return e.theme.colors.blue}),";span{color:",(function(e){return e.theme.colors.blue}),";margin-left:4px;}");function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const he=function(){var e=(0,l.u)(),t=de((0,a.useState)(!1),2),r=t[0],n=t[1];return a.createElement(be,{theme:e},a.createElement(o.Z,null),a.createElement(se,{onClick:function(){return n(!r)},isActiveAddBtn:r}),r&&a.createElement(ve,{isNew:!0,setActiveBtn:n}),a.createElement(ae,null))};var be=(0,n.Z)("div",{target:"exmvqwe1"})(f.hA,";"),ve=(0,n.Z)(q,{target:"exmvqwe0"})("margin-top:50px;border-radius:16px;border:1px solid ",(function(e){return e.theme.colors.border}),";")},6699:(e,t,r)=>{var n=r(2109),a=r(1318).includes,l=r(1223);n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")}}]);