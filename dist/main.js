!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1).Dom();console.log(r.setEventListeners())},function(e,t){t.Dom=()=>(setEventListeners=()=>{const e=document.querySelector("#add-group"),t=document.querySelector("#group-container");e.addEventListener("click",()=>{t.appendChild(drawGroup({groupName:"Group Name"}))})},drawGroup=e=>{const t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("button"),o=document.createElement("button"),i=document.createElement("h1");return i.innerHTML=e.groupName,r.innerHTML='<i class="material-icons">create</i>',r.classList.add("edit"),o.innerHTML='<i class="material-icons">delete_sweep</i>',o.classList.add("delete"),n.classList.add("control-container"),t.classList.add("group"),n.appendChild(r),n.appendChild(o),t.appendChild(i),t.appendChild(n),t.tabIndex=-1,t},drawActivity=e=>{},{setEventListeners:setEventListeners,drawGroup:drawGroup,drawActivity:drawActivity})}]);