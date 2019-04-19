(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["html"] = factory();
	else
		root["html"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeSlider", function() { return rangeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "span", function() { return span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolTip", function() { return toolTip; });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @typedef {Object} elementExtended
 * @property {function(eventList):void} removeEvents removes all events added to element
 * @property {function():void} assignEvents reassign all events that are removed from element
 * @property {function():void} bubble add bubble effect on click
 */

/**
 * @typedef {Object} createOptions
 * @property {HTMLElement[] | HTMLAllCollection} children
 * @property {Object} attr calls HTMLElement.setAttribute(String: name, String: value);
 */

/**
 * @typedef {Object} inputNumber
 * @property {Number|String} min Returns / Sets the min value of input.
 * @property {Number|String} max Returns / Sets the max value of input.
 * @property {String|Number} step Returns / Sets the increment and decrement step of input.
 */

/**
 * @typedef {Object} inputCheckbox
 * @property {Boolean} checked Returns / Sets the current state of the element when type is checkbox or radio.
 * @property {Boolean} defaultChecked Returns / Sets the default state of a radio button or checkbox as originally 
 * specified in HTML that created this object.
 * @property {Boolean} indeterminate Returns whether the checkbox or radio button is in indeterminate state. For checkboxes, 
 * the effect is that the appearance of the checkbox is obscured/greyed in some way as to indicate its state is indeterminate 
 * (not checked but not unchecked). Does not affect the value of the checked attribute, and clicking the checkbox will set the value to false.
 */

/**
 * @typedef {Object} inputImage
 * @property {String} alt Returns / Sets the element's alt attribute, containing alternative text to use when type is image.
 * @property {String} height  Returns / Sets the element's height attribute, which defines the height of the image displayed for the button, 
 * if the value of type is image.
 * @property {String} src Returns / Sets the element's src attribute, which specifies a URI for the location of an 
 * image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
 * @property {String} width Returns / Sets the document's width attribute, which defines the width of the image displayed for the button, 
 * if the value of type is image.
 */

/**
 * @typedef {Object} inputFile
 * @property {String} accept Returns / Sets the element's accept attribute, containing comma-separated list of file types accepted by the 
 * server when type is file.
 * @property {FileList} files Returns/accepts a FileList object, which contains a list of File objects representing the files selected for upload.
 */

/**
 * Create new HTML tag
 * @param {String} tag HTMl element tag name 
 * @param {HTMLElement & createOptions} props
 * @returns {HTMLElement & elementExtended}
 */

function create() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var html = this;
  var el = document.createElement(tag);
  var eventFunctions = [];
  var oldEventListener = el.addEventListener.bind(el);
  /**@override addEventListener of page */

  el.addEventListener = addEventListener;
  /**@property */

  el.assignEvents = assignEvents;
  /**@property */

  el.removeEvents = removeEvents;
  /**
   * removes all event from page.
   * @param {String[]|String} events
   * @returns {void}
   */

  function removeEvents(events) {
    if (events) {
      for (var _i = 0, _eventFunctions = eventFunctions; _i < _eventFunctions.length; _i++) {
        var event = _eventFunctions[_i];

        if (Array.isArray(events) && events.indexOf(event.type)) {
          el.removeEventListener(event.type, event.listener);
        } else if (typeof events === 'string' && event.type === events) {
          el.removeEventListener(event.type, event.listener);
        }
      }

      return;
    }

    for (var _i2 = 0, _eventFunctions2 = eventFunctions; _i2 < _eventFunctions2.length; _i2++) {
      var _event = _eventFunctions2[_i2];
      el.removeEventListener(_event.type, _event.listener);
    }
  }
  /**
   * assign all event that were removed from page
   * @returns {void}
   */


  function assignEvents() {
    for (var _i3 = 0, _eventFunctions3 = eventFunctions; _i3 < _eventFunctions3.length; _i3++) {
      var event = _eventFunctions3[_i3];
      oldEventListener(event.type, event.listener, event.options);
    }
  }
  /**
   * 
   * @param {String} type A case-sensitive string representing the event type to listen for.
   * @param {CallableFunction} listener The object which receives a notification 
   * (an object that implements the Event interface) when an event of the specified type occurs. 
   * This must be an object implementing the EventListener interface, or a JavaScript function. 
   * See The event listener callback for details on the callback itself.
   * @param {Object} [options] An options object that specifies characteristics about the event listener.
   * @param {Boolean} [options.capture] A Boolean indicating that events of this type will be dispatched 
   * to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
   * @param {Boolean} [options.once] A Boolean indicating that the listener should be invoked at most 
   * once after being added. If true, the listener would be automatically removed when invoked.
   * @param {Boolean} [options.passive] A Boolean which, if true, indicates that the function specified 
   * by listener will never call preventDefault(). If a passive listener does call preventDefault(), 
   * the user agent will do nothing other than generate a console warning. See Improving scrolling 
   * performance with passive listeners to learn more.
   * @param {Boolean} [options.mozSystemGroup] "experimental" A Boolean indicating that the listener 
   * should be added to the system group. Available only in code running in XBL or in the chrome of the 
   * Firefox browser.
   * @returns {void}
   */


  function addEventListener(type, listener, options) {
    eventFunctions[eventFunctions.length] = {
      type: type,
      listener: listener,
      options: options
    };
    oldEventListener(type, listener, options);
  }

  for (var prop in props) {
    if (props[prop] === undefined) {
      return console.error("invalid value of \"".concat(prop, "\""));
    }

    if (prop == 'children' && Array.isArray(props[prop])) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = props[prop][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var htmlel = _step.value;
          el.appendChild(htmlel);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else if (prop == 'attr') {
      for (var p in props[prop]) {
        el.setAttribute(p, props[prop][p]);
      }
    } else if (props[prop].constructor.name === 'Object') {
      for (var _p in props[prop]) {
        el[prop][_p] = props[prop][_p];
      }
    } else el[prop] = props[prop];
  }
  /**
   * @function
   * @param {HTMLElement | HTMLAllCollection | HTMLElement[]} nodes
   */


  el.append = function (nodes) {
    nodes = Array.isArray(nodes) ? nodes : [nodes];

    for (var i = 0; i < nodes.length; ++i) {
      el.appendChild(nodes[i]);
    }
  };

  if (props.children) {
    el.append(props.children);
  }

  el.bubble = function bubble() {
    html.bubble(el);
  };

  return el;
}
/**
 * get first mathing element from DOM
 * @param {String} selector CSS selector 
 * @returns {HTMLElement}
 */


function get(selector) {
  return document.querySelector(selector);
}
/**
 * get all matching element from DOM
 * @param {String} selector CSS selector
 * @returns {HTMLElement[]}
 */


function getAll(selector) {
  return document.querySelectorAll(selector);
}
/**
 * 
 * @param {element} el 
 */


function bubble(el) {
  var bubble = create('i', {
    className: 'bubble'
  });
  el.addEventListener('click', bubbles);

  function bubbles(e) {
    var elClient = el.getBoundingClientRect();
    bubble.classList.add('animate');
    el.classList.add('bubbling');
    bubble.style.height = elClient.width + 'px';
    bubble.style.width = elClient.width + 'px';
    bubble.style.top = e.clientY - elClient.top - elClient.width / 2 + 'px';
    bubble.style.left = e.clientX - elClient.left - elClient.width / 2 + 'px';
    setTimeout(function assignProps() {
      el.removeEvents();
      el.appendChild(bubble);
    }, 0);
    setTimeout(function removeBubble() {
      bubble.classList.remove('animate');
      el.classList.remove('bubbling');
      el.assignEvents();
      el.removeChild(bubble);
    }, 580);
  }
}
/**
 * 
 * @param {HTMLInputElement} props 
 * @returns {HTMLInputElement}
 */


function input() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  props.type = 'text';
  return create('input', props);
}
/**
 * 
 * @param {HTMLSpanElement} props 
 * @returns {HTMLSpanElement} 
 */


function span() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return create('span', props);
}
/**
 * 
 * @param {String} text 
 * @param {HTMLButtonElement} [props] 
 * @returns {HTMLButtonElement} 
 */


function button() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (text) {
    props.textContent = text;
  }

  var button = create('span', props);
  button.bubble();
  return button;
}
/**
 * 
 * @param {HTMLDivElement} props 
 * @returns {HTMLDivElement} 
 */


function div() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return create('div', props);
}
/**
 * 
 * @param {String} src 
 * @param {String} alt 
 * @param {HTMLImageElement} props 
 * @returns {HTMLImageElement} 
 */


function img() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  props.src = src;
  props.alt = alt;
  return create('img', props);
}
/**
 * 
 * @param {String} href 
 * @param {Node} child 
 * @param {HTMLAnchorElement} props 
 * @returns {HTMLAnchorElement} 
 */


function a() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  props.href = href;

  if (child) {
    props.children = [child];
  }

  return create('a', props);
}
/**
 * @callback onchange
 * @param {Number} value 
 */

/**
 * 
 * @typedef slider
 * @property {onchange} onchange 
 * @property {function():Number} value 
 * @property {function(Number):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Number} params.min 
 * @param {Number} params.max 
 * @param {Number} [params.step] 
 * @param {Number} [params.value ]
 * @param {onchange} [params.onchange] 
 * @param {string} [params.size] 
 * @returns {slider & HTMLElement}
 */


function rangeSlider() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mainWrapper = div({
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  var btn = span({
    className: 'rangeSlider-button'
  });
  var min = params.min || 0;
  var max = params.max || 100;
  var step = params.step || 1;
  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }

  function calculateValue(x, res) {
    var diff = max - min;
    var width = mainWrapper.offsetWidth;
    var value = x / width * diff;
    value += min;
    var remainder = value % step;

    if (remainder >= step / 2) {
      value += step - remainder;
    } else {
      value -= remainder;
    }

    if (mainWrapper.onchange) {
      mainWrapper.onchange(value);
    }

    mainWrapper.value = value;
    btn.setAttribute('data-value', (value + '').substr(0, 4));
    x = (value - min) / diff;
    x *= width; // btn.style.left = x + 'px';

    if (res) console.log(res);
    btn.style.transform = "translate3d(".concat(x, "px, 0, 0)");
  }

  mainWrapper.addEventListener('mousedown', onmousedown);
  mainWrapper.addEventListener('focus', makeActive);
  mainWrapper.addEventListener('touchstart', onmousedown);

  function makeActive() {
    mainWrapper.classList.add('active');
    mainWrapper.onblur = removeActive;
  }

  function removeActive() {
    mainWrapper.classList.remove('active');
    mainWrapper.onblur = null;
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function onmousedown(e) {
    mainWrapper.focus();
    document.onmousemove = document.ontouchmove = onmousemove;
    document.onmouseup = document.ontouchend = onmouseup;
    onmousemove(e);
  }
  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */


  function onmousemove(e) {
    var x = e.clientX || e.touches[0].clientX;
    var width = mainWrapper.offsetWidth;
    var wrapperX = mainWrapper.getBoundingClientRect().x;
    x -= wrapperX;

    if (x <= width && x >= 0) {
      calculateValue(x);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  mainWrapper.appendChild(btn);
  return mainWrapper;
}
/**
 * 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {element} opts.element 
 * @param {String} opts.direction 
 * @param {Boolean} opts.watchChange
 */


function toolTip(opts) {
  if (!opts.element) return console.error('element is undefined');
  if (!opts.direction) opts.direction = 'left';
  var title = opts.title || opts.element.getAttribute('title') || opts.element.getAttribute('data-title') || '';
  var toolTip = create('div', {
    className: 'toolTip'
  });
  var toolTipPointer = create('span', {
    className: 'toolTip-pointer'
  });
  var wrapper = create('div', {
    className: 'toolTip-wrapper',
    attr: {
      "data-direction": opts.direction
    }
  });
  var text = create('span', {
    textContent: title,
    className: 'text'
  });
  /**
   * @type {MutationObserver}
   */

  var observer;
  toolTip.appendChild(toolTipPointer);
  toolTip.appendChild(text);
  wrapper.appendChild(toolTip);
  opts.element.onmouseenter = mouseEnter;
  opts.element.onmouseleave = mouseLeave;

  function mouseEnter() {
    var elClient = opts.element.getBoundingClientRect();

    if (opts.direction) {
      if (opts.direction === 'left') {
        wrapper.style.left = elClient.left + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.right = "0";
        toolTipPointer.style.top = "50%";
        toolTipPointer.style.transform = 'translate3d(50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-100%, -50%, 0px)';
      }

      if (opts.direction === 'right') {
        wrapper.style.left = elClient.right + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.left = "0";
        toolTipPointer.style.top = "50%";
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(0%, -50%, 0px)';
      }

      if (opts.direction === 'top') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.top + 'px';
        toolTipPointer.style.left = "50%";
        toolTipPointer.style.bottom = "0";
        toolTipPointer.style.transform = 'translate3d(-50%, 50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, -100%, 0px)';
      }

      if (opts.direction === 'bottom') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.bottom + 'px';
        toolTipPointer.style.left = "50%";
        toolTipPointer.style.top = "0";
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, 0%, 0px)';
      }
    }

    if (opts.watchChange) {
      observer = new MutationObserver(function (changes, observer) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = changes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var change = _step2.value;

            if (change.type === 'attributes') {
              text.textContent = opts.element.getAttribute('title') || opts.element.getAttribute('data-title');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
      observer.observe(opts.element, {
        attributes: true
      });
    }

    document.body.appendChild(wrapper);
  }

  function mouseLeave() {
    if (!toolTip.parentElement) return;
    document.body.removeChild(wrapper);

    if (opts.watchChange && observer) {
      observer.disconnect;
    }
  }

  opts.element.removeAttribute('title');
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".bubble {\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, .3);\n}\n\n.bubble.animate {\n  -webkit-animation: grow 600ms ease 1;\n          animation: grow 600ms ease 1;\n}\n\n.bubbling {\n  position: relative;\n  overflow: hidden;\n}\n\n.rangeSlider-wrapper {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: #99f;\n  margin: 13px 0;\n}\n\n.rangeSlider-wrapper:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n.rangeSlider-wrapper *:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n.rangeSlider-wrapper > span {\n  position: absolute;\n  top: -6.5px;\n  left: -7.5px;\n  display: block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #f99;\n  cursor: pointer;\n}\n\n.rangeSlider-wrapper > span::after {\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: attr(data-value);\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n}\n\n.rangeSlider-wrapper.active > span::after, .rangeSlider-wrapper:active > span::after {\n  background-color: inherit;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\n.rangeSlider-wrapper.small {\n  height: 2px;\n  margin: 8px 0;\n}\n\n.rangeSlider-wrapper.small > span {\n  top: -5px;\n  left: -6px;\n  height: 12px;\n  width: 12px;\n}\n\n.toolTip-wrapper {\n  position: fixed;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  pointer-events: none;\n  z-index: 999;\n}\n\n.toolTip-wrapper .toolTip {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #99f;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n  padding: 10px;\n  border-radius: 4px;\n  -webkit-animation: spring 100ms ease 1;\n          animation: spring 100ms ease 1;\n  width: fit-content;\n  max-width: 220px;\n}\n\n.toolTip-wrapper .toolTip > .text {\n  z-index: 1;\n  display: block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: pre-line;\n}\n\n.toolTip-wrapper .toolTip > .toolTip-pointer {\n  z-index: -1;\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  height: 15px;\n  width: 15px;\n  background-color: #99f;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});