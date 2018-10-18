(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/meta/index.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/react-document-meta/dist/index.js"),c=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"render",value:function(){var e={},t=this.props,n=t.title,o=t.description,i=t.canonical,u=t.meta;return n&&(e.title=n),o&&(e.description=o),i&&(e.canonical=i),u&&(e.title=u),r.a.createElement(c.a,e)}}]),t}();t.a=p},"./src/components/play/detail/index.js":function(e,t,n){"use strict";var o,r,i=n("./node_modules/react/index.js"),c=n.n(i),u=n("./node_modules/react-router-dom/es/withRouter.js"),a=n("./node_modules/react-router-dom/es/Link.js"),l=n("./node_modules/redux/es/redux.js"),s=n("./node_modules/react-redux/es/index.js"),f=n("./src/actions/detail.js"),p=n("./src/reducers/detail.js"),y=n("./src/components/meta/index.js");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=(o=Object(s.b)(function(e,t){return{info:Object(p.b)(e,t.match.params.id)}},function(e){return{detail:Object(l.b)(f.a,e)}}),Object(u.a)(r=o(r=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,c.a.Component),function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id,t=this.props,n=t.info,o=t.detail;n&&n.data||o({id:e})}},{key:"render",value:function(){var e=this.props,t=e.info,n=t.data,o=void 0===n?{}:n,r=t.loading,i=e.isMeta,u=e.subTitle;return c.a.createElement("div",{className:"detail"},r?c.a.createElement("div",null,"loading..."):null,i?c.a.createElement(y.a,{title:o.name,keywords:o.name,description:o.name}):null,c.a.createElement(a.a,{to:"/bangumi/".concat(o.id)},o.name),u?" ".concat(u):null)}}]),t}())||r)||r);t.a=v},"./src/components/play/list/index.js":function(e,t,n){"use strict";var o,r,i=n("./node_modules/react/index.js"),c=n.n(i),u=n("./node_modules/react-router-dom/es/withRouter.js"),a=n("./node_modules/react-router-dom/es/Link.js"),l=n("./node_modules/redux/es/redux.js"),s=n("./node_modules/react-redux/es/index.js"),f=n("./src/actions/playlist.js"),p=n("./src/reducers/playlist.js");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=(o=Object(s.b)(function(e,t){return{play:Object(p.b)(e,t.match.params.id)}},function(e){return{playlist:Object(l.b)(f.a,e)}}),Object(u.a)(r=o(r=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,m(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,c.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id,t=this.props,n=t.play,o=t.playlist;n&&n.data||o({id:e})}},{key:"render",value:function(){var e=this.props,t=e.play,n=t.data,o=void 0===n?{}:n,r=t.loading,i=e.match,u=(o.Data||{}).playurls||[],l=i.params,s=l.id,f=l.pid,p=(o.Vod||[])[0];return c.a.createElement("div",{className:"card"},c.a.createElement("h5",{className:"card-header"},"播放列表"),c.a.createElement("div",{className:"card-body"},r?c.a.createElement("div",null,"loading..."):null,c.a.createElement("ul",null,u.map(function(e){return c.a.createElement("li",{key:e[1]},f===e[1].toString()?c.a.createElement(a.a,{style:{color:"red"},to:"/play/".concat(s,"/").concat(e[1])},p," ",e[0]):c.a.createElement(a.a,{to:"/play/".concat(s,"/").concat(e[1])},p," ",e[0]))}))))}}]),t}())||r)||r);t.a=j},"./src/components/shell.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/react-redux/es/index.js"),c=function(e){return e.substr(1).split("&").reduce(function(e,t){if(t){var n=t.split("=");e[n[0]]=n[1]||""}return e},{})};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n,o,r,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(o,r)}t.a=function(e){e.loadData||(e.loadData=function(e){return e.store,e.match,new Promise(function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function c(e){p(i,o,r,c,u,"next",e)}function u(e){p(i,o,r,c,u,"throw",e)}c(void 0)})}}(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({code:200});case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}())});var t=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,s(n).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,r.a.Component),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(n,[{key:"componentWillMount",value:function(){var e=this.props.location.search;this.props.location.params=e?c(e):null}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(e,this.props))}}]),n}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(t,"defaultProps",{loadData:e.loadData||null}),t.contextTypes={},t.propTypes={};return Object(i.b)(function(e){return{}},function(e,t){return{}})(t)}},"./src/pages/bangumi/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"Bangumi",function(){return d});var o,r=n("./node_modules/react/index.js"),i=n.n(r),c=n("./src/components/play/list/index.js"),u=n("./src/components/play/detail/index.js"),a=n("./src/components/shell.js");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=Object(a.a)(o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i.a.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"render",value:function(){return[i.a.createElement(u.a,{key:"detail",isMeta:!0}),i.a.createElement(c.a,{key:"playlist"})]}}]),t}())||o;t.default=d}}]);