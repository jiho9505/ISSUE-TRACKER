"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[162],{2112:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(910),o=r(7294),a=r(1421);const i=function(){var e=(0,a.u)();return o.createElement(u,{theme:e})};var u=(0,n.Z)("div",{target:"eq5xaxo0"})("width:100%;margin-top:2rem;margin-bottom:2rem;border-bottom:1px solid ",(function(e){return e.theme.colors.border}),";")},9487:(e,t,r)=>{r.d(t,{Z:()=>k});r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(4916),r(8674);var n=r(910),o=(r(5666),r(1249),r(6699),r(2023),r(4553),r(561),r(2222),r(8309),r(7294)),a=r(1421),i=r(2804),u=r(5796),c=r(1620),l=r(7750),s=r(691),f=r(8061),p=r(1788),m=r(7244);function d(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){g(a,n,o,i,u,"next",e)}function u(e){g(a,n,o,i,u,"throw",e)}i(void 0)}))}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=["담당자","레이블","마일스톤"],E="ASSIGNEE",w="LABEL_KEY";function S(e){var t=e.refreshState,r=(0,a.u)(),n=(0,i.Zl)(m.f),u=v((0,o.useState)(!1),2),f=u[0],g=u[1],y=v((0,o.useState)(!1),2),x=y[0],S=y[1],k=v((0,o.useState)([]),2),_=k[0],D=k[1],R=v((0,o.useState)([]),2),U=R[0],q=R[1],B=v((0,o.useState)([]),2),$=B[0],G=B[1],P=v((0,o.useState)([]),2),W=P[0],Y=P[1],K=v((0,o.useState)([]),2),Q=K[0],X=K[1],H=v((0,o.useState)([]),2),J=H[0],V=H[1];(0,o.useEffect)((function(){oe(),ae()}),[]),(0,o.useEffect)((function(){if(t){var e=_.map((function(e){return $[e]})),r=_.map((function(e){return $[e]._id}));Y(e),t("ASSIGNEE",r)}}),[_]),(0,o.useEffect)((function(){if(t){var e=U.map((function(e){return Q[e]})),r=U.map((function(e){return Q[e]._id}));V(e),t("LABEL",r)}}),[U]);var ee=function(){var e=h(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"담당자"===t?g(!f):"레이블"===t&&S(!x);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){return g(!1)},re=function(){return S(!1)},ne=function(e,t,r){if(e.includes(t)){var o=d(e),a=o.findIndex((function(e){return e===t}));return o.splice(a,1),o}return r===E&&5===e.length||r===w&&3===e.length?(n({isActive:!0,title:"더 이상 추가할 수 없습니다❗️",mode:"fail"}),e):[].concat(d(e),[t])},oe=function(){var e=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.hi.get("/users");case 2:if((t=e.sent).isSuccess&&G(t.data.result),t.isSuccess){e.next=6;break}throw new Error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.hi.get("/label");case 2:if((t=e.sent).isSuccess&&X(t.data.result),t.isSuccess){e.next=6;break}throw new Error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(e,t){return e.includes(t)?o.createElement("img",{src:p.sz}):o.createElement("img",{src:p.Md})},ue=function(){return $.map((function(e,t){return o.createElement(L,{key:e._id,onClick:function(){return function(e,t){var r=ne(e,t,E);D(r)}(_,t)}},o.createElement(T,null,o.createElement(N,{imageSrc:e.avatar,alt:"아바타"}),o.createElement("span",null,e.name)),ie(_,t))}))},ce=function(){return Q.map((function(e,t){return o.createElement(L,{key:e._id,onClick:function(){return function(e,t){var r=ne(e,t,w);q(r)}(U,t)}},o.createElement(O,{info:e}),ie(U,t))}))};return o.createElement(Z,{theme:r},b.map((function(e,t){return o.createElement(A,{key:t},o.createElement(C,null,o.createElement(M,null,e),o.createElement(j,{src:p.DC,alt:"".concat(e," 추가"),onClick:function(){return ee(e)}})),function(e){return"담당자"===e?W.map((function(e){return o.createElement(I,{key:e._id},o.createElement(c.Z,{imageSrc:e.avatar}),o.createElement(z,null,e.name))})):"레이블"===e?J.map((function(e){return o.createElement(I,{key:e._id},o.createElement(l.Z,{info:e}))})):void 0}(e),function(e){return"담당자"===e&&f?o.createElement(F,{title:"".concat(e," 추가"),onMouseLeave:te},ue()):"레이블"===e&&x?o.createElement(F,{title:"".concat(e," 추가"),onMouseLeave:re},ce()):void 0}(e))})))}const k=(0,o.memo)(S);var Z=(0,n.Z)("div",{target:"e1ig7y6n11"})("width:308px;height:30%;border:1px solid ",(function(e){return e.theme.colors.border}),";border-radius:16px;background-color:white;",f.Xf," flex-direction:column;"),A=(0,n.Z)("div",{target:"e1ig7y6n10"})("width:93%;padding:32px;background-color:white;position:relative;border-bottom:1px solid ",(function(e){return e.theme.colors.border}),";display:flex;flex-direction:column;gap:10px;&:last-child{border-bottom:none;}"),C=(0,n.Z)("div",{target:"e1ig7y6n9"})(f.Sg," justify-content:space-between;margin-top:5px;margin-bottom:10px;"),I=(0,n.Z)("div",{target:"e1ig7y6n8"})(f.Sg," gap:10px;"),z=(0,n.Z)("span",{target:"e1ig7y6n7"})("color:",(function(e){return e.theme.colors.text}),";"),M=(0,n.Z)("span",{target:"e1ig7y6n6"})("color:",(function(e){return e.theme.colors.text}),";"),j=(0,n.Z)("img",{target:"e1ig7y6n5"})({name:"e0dnmk",styles:"cursor:pointer"}),F=(0,n.Z)(u.Z,{target:"e1ig7y6n4"})({name:"18lhz8d",styles:"left:10px;top:60px"}),L=(0,n.Z)("div",{target:"e1ig7y6n3"})(f.Sg," justify-content:space-between;background-color:white;padding:8px 16px;color:",(function(e){return e.theme.colors.text}),";height:48px;border-top:1px solid ",(function(e){return e.theme.colors.border}),";cursor:pointer;"),T=(0,n.Z)("div",{target:"e1ig7y6n2"})(f.Sg," gap:5px;"),N=(0,n.Z)(c.Z,{target:"e1ig7y6n1"})({name:"1aynuae",styles:"width:20px;height:20px"}),O=(0,n.Z)(l.Z,{target:"e1ig7y6n0"})({name:"e0dnmk",styles:"cursor:pointer"})},7750:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(910),o=(r(8309),r(7294));const a=function(e){var t=e.info,r=e.className;return o.createElement(i,{className:r,type:"button",bgColor:t.bgColor,textColor:t.textColor},t.name)};var i=(0,n.Z)("button",{target:"e1dg77800"})("border-radius:30px;background-color:",(function(e){return e.bgColor}),";color:",(function(e){return e.textColor}),";padding:8px 12px;font-size:12px;min-width:120px;height:30px;cursor:default;")},3271:(e,t,r)=>{r.d(t,{Z:()=>f});r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916);var n=r(910),o=r(7294),a=r(1421),i=r(1788);const u=function(){return o.createElement(c,null,o.createElement("label",{htmlFor:"file-id"},o.createElement("img",{src:i.vu,alt:"파일 첨부"}),o.createElement("span",null,"파일 첨부하기 [Coming Soon] ")),o.createElement("input",{type:"file",id:"file-id",disabled:!0}))};var c=(0,n.Z)("div",{target:"ebw5mx60"})({name:"1f9rpgr",styles:"padding:12px 20px;label{display:flex;align-items:center;gap:7px;}span{font-size:0.75rem;color:#6e7191;}"});function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const f=function(e){var t=e.refreshState,r=e.value,n=(0,a.u)(),i=l((0,o.useState)(!1),2),c=i[0],s=i[1];return o.createElement(p,{theme:n,isFocus:c},r&&o.createElement(m,null,"코멘트를 입력하세요"),o.createElement(d,{placeholder:"코멘트를 입력하세요",onChange:function(e){t("COMMENT",{content:e.target.value})},onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},value:r,isFocus:c,required:!0,maxLength:1e4}),r&&o.createElement(g,null,"띄어쓰기 포함 ",r.length,"자"),o.createElement(u,null))};var p=(0,n.Z)("div",{target:"e1sk9xfz3"})("position:relative;background-color:",(function(e){var t=e.isFocus,r=e.theme;return t?"white":r.colors.input}),";outline:",(function(e){return e.isFocus?"0.3px solid black":"none"}),";border-radius:16px;overflow:hidden;"),m=(0,n.Z)("label",{target:"e1sk9xfz2"})("position:absolute;top:8px;left:24px;font-size:0.75rem;line-height:20px;z-index:1;color:",(function(e){return e.theme.colors.text}),";"),d=(0,n.Z)("textarea",{target:"e1sk9xfz1"})("position:relative;width:880px;height:343px;border:none;padding:16px 24px;resize:none;outline:none;padding-top:",(function(e){return e.value?"35px":"16px"}),";border-bottom:1px dashed ",(function(e){var t=e.isFocus,r=e.theme;return t?"black":r.colors.border}),";background-color:",(function(e){var t=e.isFocus,r=e.theme;return t?"white":r.colors.input}),";&::placeholder{color:",(function(e){return e.theme.colors.placeholder}),";}"),g=(0,n.Z)("span",{target:"e1sk9xfz0"})("position:absolute;right:20px;top:300px;font-weight:500;font-size:12px;line-height:20px;color:",(function(e){return e.theme.colors.text}),";")},3695:(e,t,r)=>{r.d(t,{Z:()=>l});r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916);var n=r(910),o=r(7294),a=r(1421),i=r(1544);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const l=function(e){var t=e.refreshState,r=e.className,n=e.init,c=void 0===n?"":n,l=e.mode,p=void 0===l?"":l,m=(0,a.u)(),d=u((0,o.useState)(c||""),2),g=d[0],h=d[1];return o.createElement(o.Fragment,null,g&&o.createElement(s,{className:r},"제목"),o.createElement(f,{className:r,theme:m,value:g,onChange:function(e){var r=(0,i.zW)(e.target.value);h(r),"EDIT"===p?t(r):t("TITLE",r)},placeholder:"제목",required:!0,maxLength:"30"}))};var s=(0,n.Z)("label",{target:"e13aubop1"})("position:absolute;top:8px;left:24px;font-size:12px;line-height:20px;color:",(function(e){return e.theme.colors.text}),";"),f=(0,n.Z)("input",{target:"e13aubop0"})("width:880px;height:56px;background:",(function(e){return e.theme.colors.input}),";border-radius:14px;padding:0px 24px;padding-top:",(function(e){return e.value?"12px":"0px"}),";&::placeholder{color:",(function(e){return e.theme.colors.placeholder}),";}")},1544:(e,t,r)=>{r.d(t,{mr:()=>n,zW:()=>o,iI:()=>a,QI:()=>i});r(1539),r(8674),r(9714),r(3112),r(4916),r(5306),r(2222),r(3123);var n=function(){return("#"+Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")).toLocaleUpperCase()},o=function(e){return e.replace(/[<>]/g,"")},a=function(e){var t=((new Date).getTime()-new Date(e).getTime())/1e3;if(t<60){var r=Math.floor(t);return"".concat(r,"초 전")}if(t<3600){var n=Math.floor(t/60);return"".concat(n,"분 전")}if(t<86400){var o=Math.floor(t/3600);return"".concat(o,"시간 전")}var a=new Date(e),i=a.getFullYear(),u=a.getMonth()+1,c=a.getDate();return"".concat(i,"년 ").concat(u,"월 ").concat(c,"일")},i=function(){var e=location.pathname.split("/");return e[e.length-1]}}}]);