exports.ids=[2],exports.modules={47:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=(n(8),n(11)),u=function(t){return t.substr(1).split("&").reduce(function(t,e){if(e){var n=e.split("=");t[n[0]]=n[1]||""}return t},{})};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,n,o,r,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(o,r)}e.a=function(t){t.loadData||(t.loadData=function(t){return t.store,t.match,new Promise(function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function u(t){p(i,o,r,u,c,"next",t)}function c(t){p(i,o,r,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({code:200});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())});var e=function(e){function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,f(n).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,r.a.Component),function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(n,[{key:"componentWillMount",value:function(){var t=this.props.location.search;this.props.location.params=t?u(t):null}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(t,this.props))}}]),n}();!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(e,"defaultProps",{loadData:t.loadData||null}),e.contextTypes={},e.propTypes={};return Object(i.connect)(function(t){return{}},function(t,e){return{}})(e)}},48:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(27),u=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Component"]),function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(e,[{key:"render",value:function(){var t={},e=this.props,n=e.title,o=e.description,i=e.canonical,c=e.meta;return n&&(t.title=n),o&&(t.description=o),i&&(t.canonical=i),c&&(t.title=c),r.a.createElement(u.a,t)}}]),e}();e.a=p},56:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return w});var o,r,i=n(0),u=n.n(i),c=(n(24),n(8)),a=n(11),l=n(13),f=n(14),s=n(47),p=n(48),y=n(6);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e,n,o,r,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(o,r)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=(o=Object(a.connect)(function(t,e){return{list:Object(f.b)(t,e.match.params.id)}},function(t){return{loadPostsList:Object(c.bindActionCreators)(l.a,t)}}),Object(s.a)(r=o(r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=h(this,v(e).call(this,t))).state={notFoundPgae:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,u.a.Component),function(t,e,n){e&&d(t.prototype,e),n&&d(t,n)}(e,[{key:"componentWillMount",value:function(){var t=this.props,e=t.list;t.notFoundPgae;e&&e.data&&!e.data[0]&&(this.state.notFoundPgae=!0)}},{key:"componentDidMount",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function u(t){m(i,o,r,u,c,"next",t)}function c(t){m(i,o,r,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(){var e,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.match.params.id,n=this.props,o=n.list,n.loadPostsList,o&&o.data){t.next=5;break}return t.next=5,this.props.loadPostsList({id:e,filter:{_id:e}});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.list||{},e=t.loading,n=t.data,o=n&&n[0]?n[0]:null;return this.state.notFoundPgae?"404 Not Found":u.a.createElement("div",null,e?u.a.createElement(y.a,null):null,u.a.createElement(p.a,{title:o?o.title:"加载中..."}),o?u.a.createElement("div",{className:"jumbotron"},u.a.createElement("h1",{className:"display-4"},o.title),u.a.createElement("p",{className:"lead"},o.topic_id.name),u.a.createElement("hr",{className:"my-4"}),o.content_html?u.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.content_html}}):null):null)}}]),e}())||r)||r)}};