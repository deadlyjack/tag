!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.html=e():t.html=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".bubble {\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, .3);\n}\n\n.bubble.animate {\n  -webkit-animation: grow 600ms ease 1;\n          animation: grow 600ms ease 1;\n}\n\n.bubbling {\n  position: relative;\n  overflow: hidden;\n}\n\n.toggler-wrapper {\n  position: relative;\n  display: block;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  background-color: #99f;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.toggler-wrapper *:focus {\n  outline: none !important;\n}\n\n.toggler-wrapper > span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #f99;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  margin: 0 !important;\n}\n\n.toggler-wrapper > input[type=checkbox]:checked + span.toggler_btn {\n  background-color: #7dda85;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\n.rangeSlider-wrapper {\n  position: relative;\n  height: 4px;\n  background-color: #99f;\n  margin: 13px 5px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rangeSlider-wrapper *:focus, .rangeSlider-wrapper:focus {\n  outline: none !important;\n}\n\n.rangeSlider-wrapper > span {\n  position: absolute;\n  top: -5.5px;\n  left: -7.5px;\n  display: block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #f99;\n}\n\n.rangeSlider-wrapper > span::after {\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: attr(data-value);\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n}\n\n.rangeSlider-wrapper.active > span::after, .rangeSlider-wrapper:active > span::after {\n  background-color: inherit;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\n.rangeSlider-wrapper.small {\n  height: 2px;\n  margin: 18px 5px;\n}\n\n.rangeSlider-wrapper.small > span {\n  top: -5px;\n  left: -6px;\n  height: 12px;\n  width: 12px;\n}\n\n.__toolTip {\n  position: fixed !important;\n  margin: 0 !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #7474d1;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 5px;\n  border-radius: 4px;\n  width: fit-content;\n  max-width: 220px;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: pre;\n  -webkit-transition: all 100ms ease;\n  transition: all 100ms ease;\n  -webkit-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  pointer-events: none;\n  z-index: 999;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  opacity: 0;\n}\n\n.__toolTip.__visible {\n  opacity: 1;\n  -webkit-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  -webkit-animation: spring 100ms ease 1;\n          animation: spring 100ms ease 1;\n}\n\n.__toolTip::before {\n  content: '';\n  z-index: -1;\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  height: 12px;\n  width: 12px;\n  background-color: inherit;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.__toolTip.left::before {\n  right: -6px;\n}\n\n.__toolTip.right::before {\n  left: -6px;\n}\n\n.__toolTip.top::before {\n  bottom: -6px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n\n.__toolTip.bottom::before {\n  top: -6px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8) rotate(0deg);\n            transform: scale(0.8) rotate(0deg);\n  }\n  80% {\n    -webkit-transform: scale(1.2) rotate(0deg);\n            transform: scale(1.2) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg);\n  }\n}\n\n@keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8) rotate(0deg);\n            transform: scale(0.8) rotate(0deg);\n  }\n  80% {\n    -webkit-transform: scale(1.2) rotate(0deg);\n            transform: scale(1.2) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg);\n  }\n}\n\n@-webkit-keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n.__select {\n  position: relative;\n  height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  border-bottom: solid 2px #666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.__select:hover {\n  background-color: #eef;\n}\n\n.__select > .__placeholder {\n  content: attr(data-text);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 2px;\n  font-size: 0.95em;\n  text-transform: none;\n}\n\n.__select > .__placeholder::after {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-size: 0.65em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: '\\25BC';\n  margin-left: auto;\n  color: #666;\n}\n\nbody > .__mask {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nbody > .__options {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  display: block;\n  position: fixed;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 30, .6);\n          box-shadow: 0 0 8px rgba(0, 0, 30, .6);\n  top: 0;\n  left: 0;\n  background-color: white;\n  overflow: hidden;\n  z-index: 9999;\n}\n\nbody > .__options > .__option {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: default;\n  padding: 0 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: pre-wrap;\n}\n\nbody > .__options > .__option.__selected, body > .__options > .__option.__selected:hover {\n  background-color: #96f;\n  color: white;\n}\n\nbody > .__options > .__option:hover {\n  background-color: #fcf;\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,d=[],u=n(4);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=l||(l=b(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&f(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e);n(0);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t instanceof HTMLElement;if(!n&&"string"!=typeof t)throw new Error("{tag} is invalid value of tag");var r=n?t:document.createElement(t);for(var o in r.oldEventListener=r.addEventListener.bind(r),r.addEventListener=function(t,e,n){this.eventFunctions||(this.eventFunctions=[]);this.eventFunctions[this.eventFunctions.length]={type:t,listener:e,options:n},this.oldEventListener(t,e,n)}.bind(r),r.assignRemovedEvents=function(t){var e=this.eventFunctions;if(!e)return;if(t){var n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;Array.isArray(t)&&t.indexOf(s.type)?this.oldEventListener(s.type,s.listener,s.options):"string"==typeof t&&s.type===t&&this.oldEventListener(s.type,s.listener,s.options)}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return}var l=!0,c=!1,d=void 0;try{for(var u,f=e[Symbol.iterator]();!(l=(u=f.next()).done);l=!0){var p=u.value;this.oldEventListener(p.type,p.listener)}}catch(t){c=!0,d=t}finally{try{l||null==f.return||f.return()}finally{if(c)throw d}}}.bind(r),r.append=function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.map(function(e){e instanceof Node&&(t.appendChild(e),e instanceof HTMLElement&&e.id&&(r[e.id]=e))}),this}.bind(r),r.get=function(t){return this.querySelector(t)}.bind(r),r.getAll=function(t){return this.querySelectorAll(t)}.bind(r),r.removeEvents=function(t){var e=this.eventFunctions;if(!e)return;if(t){var n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;Array.isArray(t)&&t.indexOf(l.type)?this.removeEventListener(l.type,l.listener):"string"==typeof t&&l.type===t&&this.removeEventListener(l.type,l.listener)}}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return}var c=!0,d=!1,u=void 0;try{for(var f,p=e[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var h=f.value;r.removeEventListener(h.type,h.listener)}}catch(t){d=!0,u=t}finally{try{c||null==p.return||p.return()}finally{if(d)throw u}}}.bind(r),r.remove=function(){this.parentElement&&(this.removeEvents(),this.oldParentelement=this.parentElement,this.parentElement.removeChild(this))}.bind(r),r.restore=function(t){(t=t||this.oldParentelement||null)&&!this.parentElement&&(this.assignRemovedEvents(),t.appendChild(this))}.bind(r),e)if(void 0!==e[o])if("child"===o){var i=e[o];r instanceof Node&&r.append(i)}else if("children"==o&&Array.isArray(e[o])){var a=e[o],s=!0,l=!1,c=void 0;try{for(var d,u=a[Symbol.iterator]();!(s=(d=u.next()).done);s=!0){var f=d.value;r.append(f)}}catch(t){l=!0,c=t}finally{try{s||null==u.return||u.return()}finally{if(l)throw c}}}else if("attr"==o)for(var p in e[o])r.setAttribute(p,e[o][p]);else if("Object"===e[o].constructor.name)for(var h in e[o])r[o][h]=e[o][h];else r[o]=e[o];return r}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return console.error("element is undefined");var n=r("div",{className:"__toolTip",textContent:e.title||t.getAttribute("title")||t.getAttribute("data-title")||""}),o=e.direction||t.getAttribute("data-direction")||"auto";function i(){n.classList.remove("__visible"),setTimeout(function(){n.remove(),n.enabled=!1},100)}o=["auto","top","right","bottom","left"].indexOf(o)>-1?o:"auto",t.addEventListener("mouseover",function(){if(!n.enabled){n.enabled=!0,n.restore(document.body);var e=t.getBoundingClientRect(),r=n.getBoundingClientRect();!function t(e){switch(n.className="__toolTip "+e,e){case"left":case"right":n.style.top=l("v")+"px",n.style.left=s(e)+"px";break;case"top":case"bottom":n.style.top=s(e)+"px",n.style.left=l()+"px";break;default:a("left")?t("left"):a("right")?t("right"):a("top")?t("top"):a("bottom")?t("bottom"):i()}}(o),n.classList.add("__visible")}function a(t){switch(t){case"left":return!(s("left")<0);case"right":return!(s("right")+r.width>innerWidth);case"top":return!(s("top")<0);case"bottom":return!(s("bottom")+r.height>innerHeight)}}function s(t){switch(t){case"left":return e.left-r.width-8;case"right":return e.right+8;case"top":return e.top-r.height-8;case"bottom":return e.bottom+8}}function l(t){return t?e.top+e.height/2-r.height/2:e.left+e.width/2-r.width/2}}),t.addEventListener("mouseout",i)}i.init=function(){o(document.querySelectorAll("[data-title]")).map(function(t){return i(t)})};var a=i;n.d(e,"xprt",function(){return l});var s={rangeSlider:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r("div",{role:"input",tabIndex:0,className:"rangeSlider-wrapper",attr:{"data-value":0}}),n=r("span",{className:"rangeSlider-button"}),o=t.min||0,i=t.max||100,a=t.step||1,s=i-o,l=0,c=null,d=function(){var t=(a+"").split(".");if(t.length>1){var e=t[1].length;return e>2?2:e}return 0}();function u(){e.classList.add("active"),e.onblur=f}function f(){e.classList.remove("active"),e.onblur=null}function p(t){e.focus(),document.onmousemove=document.ontouchmove=h,document.onmouseup=document.ontouchend=m,h(t)}function h(t){var n=t.clientX||t.touches[0].clientX;(n-=e.getBoundingClientRect().x)<=(l=e.offsetWidth)&&n>=0?function(t){var e=t/l*s;b(e+=o)}(n):n>l&&e.value!==i?b(i):n<0&&e.value!==o&&b(o)}function m(){document.onmouseup=null,document.onmousemove=null,document.ontouchmove=null,document.ontouchend=null}function b(r){(r=0===d?parseInt(r):parseFloat(r))>=i?r=i:r<=o&&(r=o),c&&clearTimeout(c),u(),l=e.offsetWidth;var p=r/a;if(p%=1,(p*=a)>=a/2){var h=r;(h+=a-p)>i?r-=p:r=h}else r-=p;var m=r+"",b=d;m=m.split("."),m=b>0&&m.length>1?m[0]+"."+m[1].substr(0,b):m[0],e.setAttribute("data-value",m),n.setAttribute("data-value",m),m=d?parseFloat(m):parseInt(m),e.onchange&&e.onchange(m),t.onchange&&t.onchange(m),e.value=m;var v=(r-o)/s;v*=l,n.style.transform="translate3d(".concat(v,"px, 0, 0)"),c=setTimeout(function(){f()},1e3)}return e.value=t.value||o,t.size&&e.classList.add(t.size),t.value&&setTimeout(function(){b(t.value)},0),e.addEventListener("mousedown",p),e.addEventListener("focus",u),e.addEventListener("touchstart",p),e.setvalue=b,e.appendChild(n),e},toolTip:a,toggler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r("input",{type:"checkbox",style:{display:"none"}}),n=r("span",{className:"toggler_btn"}),o=r("label",{tabIndex:0,role:"input",className:"toggler-wrapper",children:[e,n]});if(t.onchange&&(o.onchange=t.onchange),void 0!==t.value&&(!0!==t.value&&"on"!==t.value||(e.checked=!0)),t.size){var i=t.size,a=2*i;o.style.width=a+"px",o.style.height=i+"px",o.style.borderRadius=i/2+"px",n.style.height=i+"px",n.style.width=i+"px"}return e.onchange=function(){"on/off"===t.valType?e.checked?o.value="on":o.value="off":o.value=e.checked},o.setvalue=function(t){t=!!t,e.checked=t},o},comboBox:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r("div",{className:"__select",tabIndex:0}),o=r("span",{className:"__placeholder"}),i=r("div",{className:"__options"}),a=r("div",{className:"__mask",onclick:m}),s=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var r=n.offsetWidth;return t.parentNode.removeChild(t),e-r}(),l=0,c=e.height||40,d=e.width,u=e.spead||1,f={},p=!1;function h(){a.restore(document.body),i.restore(document.body);var t=n.getBoundingClientRect(),r=i.children.length*c,o=!1,d=r>e.maxheight?e.maxheight:r;i.style.top=t.top+"px",i.style.left=t.left+"px",i.style.width=t.width+"px",i.style.height="0";var f=window.innerHeight-t.bottom,h=t.height+t.top;i.style.removeProperty("transform"),t.bottom+d>window.innerHeight?(t.bottom-d<0?h>f?(r=h>d?d:h,p=!0):r=f>d?d:f:(r>d&&(r=d,o=!0,i.style.width=t.width+s+"px"),p=!0),r!==d&&(r>d&&(r=d),o=!0,i.style.width=t.width+s+"px")):r<=e.maxheight?(i.style.width=t.width+"px",i.style.removeProperty("overflow-y")):(i.style.width=t.width+s+"px",r=e.maxheight,o=!0),l=r;var m=0,b=1,v=0,g=i.querySelector(".__selected");g&&y(g),function t(){if(m>=r)o&&(i.style.overflowY="scroll");else{v=(v+=b/r)<1?v:1,m+=b,b+=u;var e=m<r?m:r;i.style.height=e+"px",i.style.opacity=v,p&&(i.style.transform="translate(0, ".concat(-(e-c),"px)")),requestAnimationFrame(t)}}()}function m(){i.style.removeProperty("overflow-y");var t=l,e=1,n=1;!function r(){if(t<=0)return a.remove(),i.remove(),void(p=!1);n=(n-=e/l)>0?n:0,t-=e,e+=u;var o=t>0?t:0;i.style.height=t+"px",i.style.opacity=n,p&&(i.style.transform="translate(0, ".concat(-(o-c),"px)")),requestAnimationFrame(r)}()}function b(){g(null,this.getAttribute("data-id")),m()}function v(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2?arguments[2]:void 0;if("string"!=typeof t&&(a=a||t.value||t.getAttribute("data-value")||"",t=t.textContent),e.select&&!s){var l=r("option",{textContent:t,attr:{value:a}});e.select.appendChild(l)}t=r("div",{className:"__option",attr:{"data-value":a,"data-id":i.childElementCount},textContent:t,style:{height:c?c+"px":"fit-content"}}),""===o.textContent&&(o.textContent=t.textContent,e.select&&(e.select.value=a),n.setAttribute("data-value",a)),t.addEventListener("click",b),i.appendChild(t);var d=!1;i.parentElement||(document.body.appendChild(i),d=!0);var u=i.getBoundingClientRect();o.style.width=u.width+"px",d&&document.body.removeChild(i)}function g(r){var a,s,l,c,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(a=r?i.querySelector("[data-value='".concat(r,"']")):i.querySelector("[data-id='".concat(d,"']"))){r=a.getAttribute("data-value"),e.select&&(e.select.value=r);var u=i.querySelector(".__selected");u&&u.classList.remove("__selected"),a.classList.add("__selected"),n.setAttribute("data-value",r),o.textContent=a.textContent,f.onchange(r),t=a,e.select&&(e.select.value=r),l=(s=a).parentElement.getBoundingClientRect(),c=s.getBoundingClientRect(),!(l.bottom<=c.top||l.top>=c.bottom)||y(a)}}function y(t){t.parentElement.scrollTop=t.offsetTop}return function(){if(e.maxheight=e.maxheight||600,e.select){f.select=e.select;var r=e.select.options;e.select.style.display="none",e.select.parentElement.insertBefore(n,e.element);for(var s=function(t){v(r[t],void 0,!0),r[t].selected&&setTimeout(function(){g(null,t)},5)},l=0;l<r.length;++l)s(l);n.getAttribute("data-value")||g(null,0)}else f.select=n;function u(e){var n;if(38===e.which){var r=t.previousElementSibling;n=r?r.getAttribute("data-id"):t.parentElement.lastElementChild.getAttribute("data-id")}else if(40===e.which){var o=t.nextElementSibling;n=o?o.getAttribute("data-id"):t.parentElement.firstElementChild.getAttribute("data-id")}else 13===e.which&&(a.parentElement?m():h());n&&g(null,n)}n.appendChild(o),o.style.height=c+"px",d&&(o.style.width=d+"px",i.style.width=d+"px"),f.onchange=function(){},o.onclick=h,n.addEventListener("focus",function(){this.onkeyup=u})}(),f.customSelect=i,f.addOption=v,f.value=function(){return n.getAttribute("data-value")},f.setvalue=g,f.removeOption=function(t){var e=i.querySelector("[data-value='".concat(t,"']"));return!!e&&(e.parentElement.removeChild(e),!0)},f},tag:r},l=s;e.default=s}]).default});