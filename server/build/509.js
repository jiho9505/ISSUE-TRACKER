"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[509],{5796:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(910),i=r(7294),o=r(1421),a=r(8061);const u=function(e){var t=e.className,r=e.children,n=e.title,a=e.onMouseLeave,u=(0,o.u)();return i.createElement(c,{onMouseLeave:a,className:t,theme:u.colors},n&&i.createElement(l,null,n),r)};var c=(0,n.Z)("div",{target:"e9z9psl1"})("width:240px;display:flex;flex-direction:column;border:1px solid ",(function(e){return e.theme.border}),";border-radius:16px;background-color:",(function(e){return e.theme.background}),";position:absolute;z-index:1;overflow:hidden;"),l=(0,n.Z)("div",{target:"e9z9psl0"})(a.Sg," padding:8px 16px;height:48px;")},9509:(e,t,r)=>{r.d(t,{Z:()=>p});r(1539),r(8674);var n=r(910),i=(r(5666),r(7294)),o=r(2804),a=r(1620),u=r(5390),c=r(691),l=r(7244),s=r(6598);function f(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}var d=0,m=[{_id:"logout",name:"로그아웃"}];const p=function(){var e=(0,u.s0)(),t=(0,o.Zl)(l.f),r=(0,s.l)();(0,i.useEffect)((function(){return function(){return clearTimeout(d)}}),[]);var n=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r){e.next=7;break}return e.next=3,c.hi.get("/users/logout");case 3:if((n=e.sent).isSuccess&&(t({isActive:!0,title:"로그아웃이 되었습니다❗️",content:"2초 후 로그인페이지로 이동합니다",mode:"success"}),p()),n.isSuccess){e.next=7;break}throw new Error(n.message);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){f(o,n,i,a,u,"next",e)}function u(e){f(o,n,i,a,u,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),p=function(){d=setTimeout((function(){e("/")}),2e3)};return i.createElement(h,null,i.createElement(v,{onClick:function(){return e("/main")}},"ISSUE TRACKER"),i.createElement(a.Z,{onClick:n,imageSrc:r,items:m}))};var h=(0,n.Z)("div",{target:"efiei141"})({name:"unrh3l",styles:"display:flex;justify-content:space-between;width:100%"}),v=(0,n.Z)("h3",{target:"efiei140"})({name:"1pa56il",styles:"font-family:Montserrat;font-style:italic;font-weight:500;font-size:32px;line-height:40px;letter-spacing:-0.04em;cursor:pointer"})},1620:(e,t,r)=>{r.d(t,{Z:()=>l});r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(4916);var n=r(910),i=(r(1249),r(8309),r(7294)),o=r(5796),a=r(8061);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const l=function(e){var t=e.className,r=e.imageSrc,n=e.onClick,o=void 0===n?function(){}:n,a=e.items,c=void 0===a?[]:a,l=u((0,i.useState)(!1),2),m=l[0],p=l[1];return i.createElement(s,{className:t,items:c},i.createElement("img",{src:r,onClick:function(){c.length>0&&p(!m)},alt:"유저 이미지"}),m&&i.createElement(f,{title:"Settings",onMouseLeave:function(){return p(!1)}}," ",null==c?void 0:c.map((function(e,t){return i.createElement(d,{key:e._id,onClick:function(){return o(t)}},i.createElement("span",null,e.name))}))))};var s=(0,n.Z)("div",{target:"ei0do102"})(a.Xf," border-radius:50%;background:black;width:44px;height:44px;cursor:",(function(e){return e.items.length>0?"pointer":"default"}),";position:relative;img{border-radius:50%;width:100%;height:100%;}"),f=(0,n.Z)(o.Z,{target:"ei0do101"})({name:"1szzo4f",styles:"right:0px;top:45px;width:140px"}),d=(0,n.Z)("div",{target:"ei0do100"})(a.Sg," justify-content:space-between;background-color:white;padding:8px 16px;color:",(function(e){return e.theme.colors.text}),";height:48px;border-top:1px solid ",(function(e){return e.theme.colors.border}),";cursor:pointer;")},1070:(e,t,r)=>{r.d(t,{L:()=>n});var n=function(e){if(e){var t=null==e?void 0:e.data.success,r=null==e?void 0:e.data;if(t)return r.result;throw new Error(r.message)}return null}},6598:(e,t,r)=>{r.d(t,{l:()=>a});var n=r(8767),i=r(691),o=r(1070),a=function(){var e=(0,n.useQuery)("USER_IMAGE",(function(){return(0,i.HT)("/users/image")}),{refetchOnWindowFocus:!1}).data;return(0,o.L)(e)}}}]);