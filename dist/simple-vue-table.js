!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("simple-vue-table",[],t):"object"==typeof exports?exports["simple-vue-table"]=t():e["simple-vue-table"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1);var r=n(6)(n(7),n(8),null,null);r.options.__file="C:\\vue-simple-table\\src\\simple-vue-table.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] simple-vue-table.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("7576b596",r,!1)},function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic,cyrillic-ext);",""]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Nosifer);",""]),t.push([e.i,"\nbody{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-weight: 700;\n}\n.inp{\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 16px;\r\n\twidth: 100%;\r\n\theight: 100%;\n}\ntable{\r\n\tborder-spacing: 0;\n}\ninput{\r\n\tborder-width: 0;\n}\ninput:focus{\r\n\toutline: none;\r\n\tborder-bottom: 1px solid black;\n}\ntd{\r\n\theight: 40px;\n}\r\n\r\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var s=d++;r=p||(p=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function u(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(5),l={},f=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],u=l[i.id];u.refs--,n.push(u)}t?(o=c(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var u=n[s];if(0===u.refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete l[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],u=s[1],a=s[2],c=s[3],l={id:e+":"+o,css:u,media:a,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var a=Object.create(u.computed||null);Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}}),u.computed=a}return{esModule:o,exports:s,options:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:["valuesArray","tableHead","btn"],mounted:function(){console.log(this.btn)},components:{},methods:{someHandler:function(){console.log("fwef")}}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"striped"},[n("thead",[n("tr",e._l(e.tableHead,function(t){return n("th",[e._v(e._s(t))])}))]),e._v(" "),n("tbody",e._l(e.valuesArray,function(t){return n("tr",e._l(t,function(t){return n("td",[n("input",{staticClass:"inp",attrs:{type:"text",name:""},domProps:{value:t},on:{change:e.someHandler}})])}))}))]),e._v(" "),void 0!==e.btn?n("div",[n("button",[e._v(e._s(e.btn))])]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0}])});