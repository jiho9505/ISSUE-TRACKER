(self.webpackChunkclient=self.webpackChunkclient||[]).push([[404],{9404:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var n=r(910),a=r(7294),c=r(9509),o=r(2112),i=(r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),r(9070),r(7941),r(7327),r(5003),r(4747),r(9337),r(3321),r(8674),r(5666),r(1421)),u=r(2804),l=r(1620),s=r(3271),f=r(3695);const m=function(e){var t=e.refreshState;return a.createElement(p,null,a.createElement(f.Z,{refreshState:t}),a.createElement(s.Z,{refreshState:t}))};var p=(0,n.Z)("div",{target:"eg2nxd20"})({name:"e8r9tw",styles:"position:relative;display:flex;flex-direction:column;gap:20px"}),v=r(9487),y=r(3078),h=r(5390),b=r(6598),g=r(691),d=r(7244);function E(e,t,r,n,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,c=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=0;const Z=function(){var e=(0,i.u)(),t=(0,u.Zl)(d.f),r=(0,h.s0)(),n=w((0,a.useState)(""),2),c=n[0],s=n[1],f=w((0,a.useState)({content:"",images:[]}),2),p=f[0],O=f[1],S=w((0,a.useState)([]),2),x=S[0],Z=S[1],T=w((0,a.useState)([]),2),C=T[0],I=T[1],z=w((0,a.useState)(!1),2),L=z[0],M=z[1],F=(0,b.l)();(0,a.useEffect)((function(){c.length>0&&p.content.length>0?M(!0):M(!1)}),[c,p]),(0,a.useEffect)((function(){return function(){return clearTimeout(P)}}),[]);var N=function(e,t){switch(e){case"TITLE":s(t);break;case"COMMENT":O(j(j({},p),t));break;case"ASSIGNEE":Z(t);break;case"LABEL":I(t)}},R=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n={title:c,comment:p,assignees:x,labels:C},e.next=4,g.hi.post("/issue",n);case 4:(a=e.sent).isSuccess&&(t({isActive:!0,title:"이슈 작성이 되었습니다❗️",content:"2초 후 메인페이지로 이동합니다",mode:"success"}),B()),a.isSuccess||t({isActive:!0,title:a.message,mode:"fail"});case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function o(e){E(c,n,a,o,i,"next",e)}function i(e){E(c,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),B=function(){P=setTimeout((function(){r("/")}),2e3)};return a.createElement(k,{onSubmit:R},a.createElement(A,null,a.createElement(l.Z,{imageSrc:F}),a.createElement(m,{refreshState:N}),a.createElement(v.Z,{refreshState:N})),a.createElement(o.Z,null),a.createElement(D,{isFilledForm:L},a.createElement(y.Z,{opacity:L?"1":"0.5",sizeLevel:2,bgColor:e.colors.blue,onSubmit:R,type:"submit"},"완료")))};var k=(0,n.Z)("form",{target:"e832nj82"})(""),A=(0,n.Z)("div",{target:"e832nj81"})({name:"cbt3cb",styles:"display:flex;gap:20px"}),D=(0,n.Z)("div",{target:"e832nj80"})({name:"5ej25d",styles:"display:flex;justify-content:flex-end;align-items:center"}),T=r(8061);const C=function(){return a.createElement(I,null,a.createElement(c.Z,null),a.createElement(z,null,"새로운 이슈 작성"),a.createElement(o.Z,null),a.createElement(Z,null))};var I=(0,n.Z)("div",{target:"e1krs21p1"})(T.hA,";"),z=(0,n.Z)("h2",{target:"e1krs21p0"})({name:"ztuzxl",styles:"font-size:2rem;margin-top:60px"})},8533:(e,t,r)=>{"use strict";var n=r(2092).forEach,a=r(9341)("forEach");e.exports=a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},9070:(e,t,r)=>{var n=r(2109),a=r(9781),c=r(3070).f;n({target:"Object",stat:!0,forced:Object.defineProperty!==c,sham:!a},{defineProperty:c})},5003:(e,t,r)=>{var n=r(2109),a=r(7293),c=r(5656),o=r(1236).f,i=r(9781),u=a((function(){o(1)}));n({target:"Object",stat:!0,forced:!i||u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(c(e),t)}})},9337:(e,t,r)=>{var n=r(2109),a=r(9781),c=r(3887),o=r(5656),i=r(1236),u=r(6135);n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,r,n=o(e),a=i.f,l=c(n),s={},f=0;l.length>f;)void 0!==(r=a(n,t=l[f++]))&&u(s,t,r);return s}})},4747:(e,t,r)=>{var n=r(7854),a=r(8324),c=r(8509),o=r(8533),i=r(8880),u=function(e){if(e&&e.forEach!==o)try{i(e,"forEach",o)}catch(t){e.forEach=o}};for(var l in a)a[l]&&u(n[l]&&n[l].prototype);u(c)}}]);