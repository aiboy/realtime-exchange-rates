!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,o){r.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1);var a=n(5),u=r(a),s=n(12),l=r(s),c=n(30),f=r(c),p=n(49),d=r(p),v=n(67),b=r(v),y=n(74),h=r(y),m=n(83),g=r(m),_=n(88),w=r(_),O=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){this.providers=new u["default"],this.settings=new l["default"],this.symbols=new f["default"],this.rates=new d["default"],this.header=new b["default"],this.main=new h["default"],this.footer=new g["default"],this.button=new w["default"],this.providers.init(),this.settings.init(),this.symbols.init(),this.rates.init(),this.header.init(),this.main.init(),this.footer.init(),this.button.init(),this.providers.viewmodel.subscribe("provider selected",this.rates.store,"onProviderSelected"),this.providers.viewmodel.subscribe("provider selected",this.settings.viewmodel,"onProviderSelected"),this.providers.viewmodel.subscribe("provider selected",this.symbols.viewmodel,"onProviderSelected"),this.settings.viewmodel.subscribe("rates refresh required",this.rates.store,"onRatesRefreshRequired"),this.rates.view.subscribe("remove symbol",this.symbols.viewmodel,"onFilterSymbolRemoved"),this.symbols.viewmodel.subscribe("filter symbols updated",this.rates.viewmodel,"onFilterSymbolsUpdated"),this.providers.store.fire("first load")}}]),e}();!function(){var e=new O;document.addEventListener("DOMContentLoaded",e.init.bind(e),!1)}()},function(e,t){},,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),u=r(a),s=n(11),l=r(s),c=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){this.store=new u["default"],this.viewmodel=new l["default"],this.viewmodel.init(),this.store.init(),this.store.subscribe("first load",this.store,"onUpdate"),this.store.subscribe("update",this.viewmodel,"onUpdate")}}]),e}();t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(7),l=r(s),c=n(9),f=r(c),p=n(10),d=r(p),v=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){}},{key:"onUpdate",value:function(){var e,t=this,n=location.search.match(/\bprovider=(\w+)/)||[],r=n[1];e=r?f["default"].api_base+"/providers?provider="+r:f["default"].api_base+"/providers",l["default"](e).then(function(e){t.fire("update",e)}).fail(function(e){t.fire("update",e)})}}]),t}(d["default"]);t["default"]=v,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.method,r=void 0===n?"GET":n,o=t.async,i=void 0===o?!0:o,u=t.timeout,c=void 0===u?1e4:u,f=new s["default"],p=new XMLHttpRequest;return p.open(r,e,i),p.timeout=c,p.onreadystatechange=function(){p.readyState===p.DONE&&([200,201].indexOf(p.status)>-1?f.resolve(new l({status:p.status,data:a(p)})):f.reject(new l({status:p.status,error:a(p)})))},p.ontimeout=function(){f.reject(new l({status:p.status,error:"Request Timeout"}))},p.send(),f}function a(e){var t=e.getResponseHeader("Content-Type")||"",n=t.match(/\w+\/(\w+)/)||[],r=n[1];return"json"===r?JSON.parse(e.responseText):e.responseText}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var u=n(8),s=r(u),l=function c(e){var t=e.status,n=e.data,r=e.error;o(this,c),this.status=t,this.data=n,this.error=r};t.FetchResponse=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e),this.isResolved=!1,this.data=null,this.successCallbacks=[],this.rejectCallbacks=[]}return r(e,[{key:"resolve",value:function(e){this.isResolved||this.processCallbacks(this.successCallbacks,e)}},{key:"reject",value:function(e){this.isResolved||this.processCallbacks(this.rejectCallbacks,e)}},{key:"processCallbacks",value:function(e,t){this.isResolved=!0,this.data=t,e.forEach(function(e){return e(t)})}},{key:"then",value:function(e){return this.isResolved?e(this.data):this.successCallbacks.push(e),this}},{key:"fail",value:function(e){return this.isResolved?e(this.data):this.rejectCallbacks.push(e),this}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={api_base:"/api/v1"},e.exports=t["default"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this._subscribtionList=[]}return o(e,[{key:"subscribe",value:function(e,t,n){var r=t[n].bind(t);this._subscribtionList.push({event:e,callback:r})}},{key:"unsubscribe",value:function(e,t){this._subscribtionList=this._subscribtionList.filter(function(n){return n.event!==e&&n.callback!==t})}},{key:"fire",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];this._subscribtionList.forEach(function(n){n.event===e&&n.callback.apply(t,r)})}}]),e}();t["default"]=i,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){}},{key:"onUpdate",value:function(e){if(!e.data)throw e.error;this.providers=e.data;var t=this.providers.filter(function(e){return e.defaultProvider})[0];if(!t)throw"no default provider from server side";this.selectedProvider||(this.selectedProvider=t),this.fire("update",this.selectedProvider)}},{key:"selectedProvider",get:function(){return this._selectedProvider},set:function(e){this._selectedProvider!==e&&(this._selectedProvider=e,this.fire("provider selected",e))}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(13),n(15),n(17),n(19),n(21),n(23);var a=n(25),u=r(a),s=n(26),l=r(s),c=n(27),f=r(c),p=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){this.store=new u["default"],this.viewmodel=new l["default"],this.view=new f["default"],this.view.init(),this.viewmodel.init(),this.store.init(),this.viewmodel.subscribe("update",this.view,"onUpdate"),this.view.subscribe("refresh rate changed",this.viewmodel,"onRefreshRateChanged")}}]),e}();t["default"]=p,e.exports=t["default"]},1,,1,,1,,1,,1,,1,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){}},{key:"onUpdate",value:function(){}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this.intervalId=null,this.provider=null}},{key:"updateRate",value:function(e){var t=this;clearInterval(this.intervalId),"number"==typeof e?isNaN(e)?this.fire("update",{name:this.provider.name,refresh:!1,refreshInfo:"NaN as refresh rate"}):this.intervalId=setInterval(function(){return t.fire("rates refresh required")},e):this.fire("rates refresh required")}},{key:"onProviderSelected",value:function(e){var t=this,n=e.refreshIntervals&&e.refreshIntervals.length>0;this.refreshRate=n?e.refreshIntervals[0]:null,this.fire("update",{name:e.name,refresh:n,refreshRate:this.refreshRate,refreshInfo:e.refreshInfo,refreshIntervals:e.refreshIntervals&&e.refreshIntervals.map(function(e){return{value:e,selected:e===t.refreshRate}})})}},{key:"onRefreshRateChanged",value:function(e){this.refreshRate=e}},{key:"refreshRate",set:function(e){this._rate!==e&&(this._rate=e,this.updateRate(e))},get:function(){return this._rate}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(28),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this.viewName="settings_content",this.template='\n            <div class="settings_provider" ng-text="name"></div>\n            <div ng-show="refresh">\n                <span>Data refresh period:</span>\n                <select class="settings_select" ng-loop="refreshIntervals" ng-change="onRefreshRateChange">\n                    <option ng-value="value" ng-text="value" ng-selected="selected"></option>\n                </select>\n            </div>\n            <div ng-hide="refresh">\n                <span class="settings_info" ng-text="refreshInfo"></span>\n            </div>\n        '}},{key:"onRefreshRateChange",value:function(e,t){var n=t.target;this.fire("refresh rate changed",+n.value)}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=n(29),f=r(c),p=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"onUpdate",value:function(e){if(!this.viewName)throw"viewName field is required";if(!this.template)throw"template is required";var t=document.querySelector("."+this.viewName);if(!t)throw"element with class viewName must be in the DOM";t.innerHTML="",t.appendChild(f["default"](this.template,e,this))}}]),t}(l["default"]);t["default"]=p,e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n){var o,i=document.createElement("div");i.innerHTML=e;for(var a=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,null,!1);o=a.nextNode();){if(o.ctx=o.ctx||o.parentNode.ctx||t,o.getAttribute("ng-scope")&&(o.ctx=r(o.ctx,o.getAttribute("ng-scope"))),o.getAttribute("ng-loop")){var u=o.children[0],s=r(o.ctx,o.getAttribute("ng-loop"))||[];o.removeChild(u),s.forEach(function(e){u=u.cloneNode(!0),u.ctx=e,o.appendChild(u)})}if(o.getAttribute("ng-value")&&(o.value=r(o.ctx,o.getAttribute("ng-value"))),o.getAttribute("ng-selected")){var l=r(o.ctx,o.getAttribute("ng-selected"));l&&o.setAttribute("selected","yes")}if(o.getAttribute("ng-text")&&(o.innerText=r(o.ctx,o.getAttribute("ng-text"))),o.getAttribute("ng-class")){var c=r(o.ctx,o.getAttribute("ng-class"));c&&(o.className+=" "+c)}if(o.getAttribute("ng-show")){var f=r(o.ctx,o.getAttribute("ng-show"));f||(o.style.display="none")}if(o.getAttribute("ng-hide")){var p=r(o.ctx,o.getAttribute("ng-hide"));p&&(o.style.display="none")}o.getAttribute("ng-change")&&!function(e){e.addEventListener("change",function(t){n[e.getAttribute("ng-change")].bind(n)(e.ctx,t)},!0)}(o),o.getAttribute("ng-click")&&!function(e){e.addEventListener("click",function(t){n[e.getAttribute("ng-click")].bind(n)(e.ctx,t)},!0)}(o)}return i}function r(e,t){return"self"===t?e:e[t]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(31),n(33),n(35),n(37),n(39),n(41),n(43);var a=n(45),u=r(a),s=n(46),l=r(s),c=n(48),f=r(c),p=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){this.store=new u["default"],this.viewmodel=new l["default"],this.view=new f["default"],this.view.init(),this.viewmodel.init(),this.store.init(),this.viewmodel.subscribe("update",this.view,"onUpdate"),this.view.subscribe("filter symbol added",this.viewmodel,"onFilterSymbolAdded"),this.view.subscribe("base symbol change",this.viewmodel,"onBaseSymbolChange"),this.view.subscribe("target symbol change",this.viewmodel,"onTargetSymbolChange"),this.view.subscribe("symbol add",this.viewmodel,"onSymbolAdd")}}]),e}();t["default"]=p,e.exports=t["default"]},1,,1,,1,,1,,1,,1,,1,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){}},{key:"onUpdate",value:function(){}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=n(47),f=r(c),p=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this._filterSymbols=[],this._possibleSymbols=[],this._lastBaseSymbol=null,this._lastTargetSymbol=null,this._baseSymbols=[],this._targetSymbols=[]}},{key:"onFilterSymbolRemoved",value:function(e){var t=this._filterSymbols.indexOf(e);this._filterSymbols.splice(t,1),this.fire("filter symbols updated",this._filterSymbols),this.update()}},{key:"onFilterSymbolAdded",value:function(e){this._filterSymbols.indexOf(e.type)<0&&this._filterSymbols.push(e.type),this.fire("filter symbols updated",this._filterSymbols),this.update()}},{key:"onProviderSelected",value:function(e){var t=this;this.fire("filter symbols updated",this._filterSymbols),this._baseSymbols=e.supportedBaseCurrency.map(function(e){return{value:f["default"][e],type:e}}),this._lastBaseSymbol=this._baseSymbols[0],this._targetSymbols=e.supportedTargetCurrency.map(function(e){return{value:f["default"][e],type:e}}),this._lastTargetSymbol=this._targetSymbols.filter(function(e){return e.type!==t._lastBaseSymbol.type})[0],this._lastBaseSymbol=this._baseSymbols.filter(function(e){return e.type!==t._lastTargetSymbol.type})[0],this._lastTargetSymbol.selected=!0,this._lastBaseSymbol.selected=!0,this.update()}},{key:"update",value:function(){var e=this;this._possibleSymbols.forEach(function(t){e._filterSymbols.indexOf(t.type)>-1?t.state="symbols_row__disabled":t.state="symbols_row__enabled"});var t=this._baseSymbols.filter(function(t){return t.type!==e._lastTargetSymbol.type}),n=this._targetSymbols.filter(function(t){return t.type!==e._lastBaseSymbol.type});this.fire("update",{haveSymbolsToAdd:!0,baseSymbols:t,targetSymbols:n,possibleSymbols:this._possibleSymbols})}},{key:"onBaseSymbolChange",value:function(e){var t=this._baseSymbols.filter(function(t){return t.type===e})[0];this._lastBaseSymbol.selected=!1,this._lastBaseSymbol=t,this._lastBaseSymbol.selected=!0,this.update()}},{key:"onTargetSymbolChange",value:function(e){var t=this._targetSymbols.filter(function(t){return t.type===e})[0];this._lastTargetSymbol.selected=!1,this._lastTargetSymbol=t,this._lastTargetSymbol.selected=!0,this.update()}},{key:"onSymbolAdd",value:function(){var e=this;this._possibleSymbols.some(function(t){return t.type===e._lastBaseSymbol.type+e._lastTargetSymbol.type})||(this._possibleSymbols.push({type:this._lastBaseSymbol.type+this._lastTargetSymbol.type,state:"symbols_row__enabled"}),this.update())}}]),t}(l["default"]);t["default"]=p,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={Add:"Add",Remove:"Remove","Realtime exchange rates":"Realtime exchange rates",Settings:"Settings",Symbols:"Symbols",Rates:"Rates","Last Update From Server: ":"Last Update From Server: ",USD:"US dollar",EUR:"Euro",JPY:"Japanese yen",BGN:"Bulgarian lev",CZK:"Czech koruna",DKK:"Danish krone",GBP:"Pound sterling",HUF:"Hungarian forint",PLN:"Polish zloty",RON:"Romanian leu",SEK:"Swedish krona",CHF:"Swiss franc",NOK:"Norwegian krone",HRK:"Croatian kuna",RUB:"Russian rouble",TRY:"Turkish lira",AUD:"Australian dollar",BRL:"Brazilian real",CAD:"Canadian dollar",CNY:"Chinese yuan renminbi",HKD:"Hong Kong dollar",IDR:"Indonesian rupiah",ILS:"Israeli shekel",INR:"Indian rupee",KRW:"South Korean won",MXN:"Mexican peso",MYR:"Malaysian ringgit",NZD:"New Zealand dollar",PHP:"Philippine peso",SGD:"Singapore dollar",THB:"Thai baht",ZAR:"South African rand",ISK:"Icelandic krona"},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(28),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this.viewName="symbols_content",this.template='\n            <table class="symbols_table" cellspacing="0">\n                <tbody ng-loop="possibleSymbols">\n                    <tr class="symbols_row" ng-class="state">\n                        <td class="symbols_column" ng-text="type"></td>\n                        <td class="symbols_column symbols_column__last">\n                            <button class="button" ng-click="onAddClick">Add</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="symbols_controls" ng-show="haveSymbolsToAdd">\n                <select ng-loop="baseSymbols" ng-change="onBaseSymbolChange">\n                    <option ng-value="type" ng-text="value" ng-selected="selected"></option>\n                </select>\n                /\n                <select ng-loop="targetSymbols" ng-change="onTargetSymbolChange">\n                    <option ng-value="type" ng-text="value" ng-selected="selected"></option>\n                </select>\n                <button class="button" ng-click="onSymbolAddClick">Add</button>\n            </div>\n        '}},{key:"onAddClick",value:function(e){this.fire("filter symbol added",e)}},{key:"onBaseSymbolChange",value:function(e,t){this.fire("base symbol change",t.target.value)}},{key:"onTargetSymbolChange",value:function(e,t){this.fire("target symbol change",t.target.value)}},{key:"onSymbolAddClick",value:function(){this.fire("symbol add")}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(50),n(52),n(54),n(56),n(58),n(60),n(62);var a=n(64),u=r(a),s=n(65),l=r(s),c=n(66),f=r(c),p=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){this.store=new u["default"],this.viewmodel=new l["default"],this.view=new f["default"],this.view.init(),this.viewmodel.init(),this.store.init(),this.store.subscribe("update",this.viewmodel,"onUpdate"),this.viewmodel.subscribe("update",this.view,"onUpdate")}}]),e}();t["default"]=p,e.exports=t["default"]},1,,1,,1,,1,,1,,1,,1,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(7),l=r(s),c=n(9),f=r(c),p=n(10),d=r(p),v=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this.selectedProvider=null,
this.failAttempts=0}},{key:"onRatesRefreshRequired",value:function(){var e=this;this.selectedProvider?this.failAttempts>3?this.fire("update",{data:{lastRequest:"more that 3 failed attempts to get rates for: "+this.selectedProvider.name,items:[]}}):l["default"](f["default"].api_base+"/rates/"+this.selectedProvider.slug).then(function(t){e.fire("update",t)}).fail(function(){e.failAttempts+=1,e.fire("update",{data:{lastRequest:"...",items:[]}})}):this.fire("update","cant refresh with null provider")}},{key:"onProviderSelected",value:function(e){this.selectedProvider=e,this.failAttempts=0}}]),t}(d["default"]);t["default"]=v,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(10),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this._filterSymbols=[],this.lastResponse=null}},{key:"onUpdate",value:function(e){var t=this;this.lastResponse=e,this.fire("update",{lastUpdate:e.data.lastRequest,data:e.data.items.filter(function(e){return t._filterSymbols.indexOf(e.type)>-1})})}},{key:"onFilterSymbolsUpdated",value:function(e){this._filterSymbols=e,this.lastResponse&&this.onUpdate(this.lastResponse)}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,n=a,r=!0}},s=n(28),l=r(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"init",value:function(){this.viewName="rates_content",this.template='\n            <div class="rates_lastupdate">Last Update From Server: <span ng-text="lastUpdate"></span></div>\n            <table class="rates_table" cellspacing="0">\n                <tbody ng-loop="data">\n                    <tr class="rates_row">\n                        <td class="rates_column" ng-text="type"></td>\n                        <td class="rates_column" ng-text="ask"></td>\n                        <td class="rates_column" ng-text="bid"></td>\n                        <td class="rates_column rates_column__last">\n                            <button class="button" ng-click="onRemoveClick">Remove</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        '}},{key:"onRemoveClick",value:function(e){this.fire("remove symbol",e.type)}}]),t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(68),n(70),n(72);var i=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){}}]),e}();t["default"]=i,e.exports=t["default"]},1,,1,,1,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(75),n(77),n(79),n(81);var i=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){}}]),e}();t["default"]=i,e.exports=t["default"]},1,,1,,1,,1,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(84),n(86);var i=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){}}]),e}();t["default"]=i,e.exports=t["default"]},1,,1,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(89);var i=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){}}]),e}();t["default"]=i,e.exports=t["default"]},1]));