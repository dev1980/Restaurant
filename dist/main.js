!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var r=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],s=n.base?o[0]+n.base:o[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:b(f,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function b(e,n){var t,r,a;if(n.singleton){var o=m++;t=h||(h=u(n)),r=f.bind(null,t,o,!1),a=f.bind(null,t,o,!0)}else t=u(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=o}}}},function(e,n,t){var r=t(3),a=t(4),o=t(5);n=r(!1);var i=a(o);n.push([e.i,"body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url("+i+");\r\n    background-size: cover;\r\n    background-position: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nheader {\r\n    text-align: center;\r\n    background-color: sandybrown;\r\n    margin-top: 0;\r\n}\r\na {\r\n    font-size: 20px;\r\n}\r\nul{\r\n    padding: 10px;\r\n}\r\nli {\r\n    display: inline;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n#main-content{\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    border: 1px solid orange;\r\n    padding: 12px;\r\n    \r\n}\r\n#main-content p{\r\n    font-size: 18px;\r\n}\r\n#main-content h3{\r\ntext-align: center;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"68f3f15ef6e1b02d9dd928b277345ec2.jpg"},function(e,n,t){"use strict";t.r(n);t(0);const r=()=>{document.querySelector("main").innerHTML='<section id="main-content">\n            <h3>\n                Best coffe in Town with sandwich.\n            </h3>\n            <p>  "A Cup of Coffee, a Sandwich and You" is a 1925 song written by Joseph Meyer, with lyrics by Al Dubin and Billy Rose. The title was inspired by the famous line "A Jug of Wine, a Loaf of Bread--and Thou" from the Rubaiyat of Omar Khayyam.[1][2] The song first gained popularity after it was performed (and recorded) by Gertrude Lawrence and Jack Buchanan in André Charlot\'s show Charlot\'s Revue[1] when it came to New York in 1926. The song was Dubin\'s first significant success[2] and was credited with bringing Lawrence and Buchanan popularity in the United States</p>\n        </section>\n    '};document.querySelector("#content").innerHTML=' <header class="header">\n        <h2>WelCome to Tea Time</h2>\n        <ul>\n        <li class="tab home"><a href="#">Home</a></li>\n        <li class="tab about"><a href="#">About</a></li>\n        <li class="tab menu"><a href="#">Menu</a></li>\n        <li class="tab contact"><a href="#">Contact</a></li>\n        </ul>     \n        </header>\n        <main id="home">\n        </main>\n    ',r(),document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",n=>{let t=e.className.replace("tab ",""),a=document.querySelector("main");if(t!=a.id)switch(t){case"home":a.id="home",r();break;case"about":a.id="about",document.querySelector("main").innerHTML='\n        <section id="_about" class="about-content">\n            <div class="row">\n                <h1>About Us</h1>\n                <p>\n                A restaurant is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve the same food.\n                </p>\n                <p>\n                There are also chain restaurants that serve slightly more expensive food. They are called fast casual restaurants. Applebee\'s and Perkins are examples of this type of chain restaurant.\n                </p>\n            </div>\n        </section>\n    ';break;case"menu":a.id="menu",menu();break;case"contact":a.id="contact",location()}})})}]);