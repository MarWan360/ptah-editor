!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./public/js",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(e){const t="gallery-one-preview",n="hero-tile_active";var o=document.querySelectorAll("["+t+"]"),r=document.querySelectorAll("[gallery-one-stage]");function c(e){var c=e.getAttribute("data-index"),l=e.getAttribute(t);!function(e,t){[].forEach.call(e,function(e,o){o==t&&e.classList.contains(n)||(o==t?e.classList.add(n):e.classList.contains(n)&&e.classList.remove(n))})}(o,c),[].forEach.call(r,function(e,t){t==c?e.classList.add(l):e.classList.contains(l)&&e.classList.remove(l)})}!function(t){[].forEach.call(t,function(t,o){t.onclick=function(e){c(t)},t.classList.contains(n)?t.click():o==e&&t.click()})}(o)}(0),function(){const e="gallery-two-url";var t=document.querySelectorAll("[gallery-two-link]"),n=document.querySelectorAll("[gallery-two-popup]")[0],o=document.querySelectorAll("[gallery-two-popup-content]")[0],r=document.querySelectorAll("[gallery-two-popup-close]")[0],c="https://www.youtube.com/embed/dqHeutdSSyM";function l(){o.innerHTML="",n.style.display="none"}[].forEach.call(t,function(t,r){t.onclick=function(r){!function(t){let r=!1;var l=t.getAttribute(e),i=""!==l?l:c;!function(e){o.innerHTML=e,n.style.display="flex"}((r=function(e){let t=e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);return!!t&&t[1]}(i))?'<iframe  width="100%" height="100%" src="https://www.youtube.com/embed/'+r+'?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>':'<img width="100%"  height="100%" src="'+i+'"></img>')}(t)}}),r.onclick=function(e){l()},n.onclick=function(e){l()}}()}]);