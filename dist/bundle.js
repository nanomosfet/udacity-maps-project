/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/knockout/build/output/knockout-latest.debug.js":
/*!*********************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.debug.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function(){
var DEBUG=true;
(function(undefined){
    // (0, eval)('this') is a robust way of getting a reference to the global object
    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
    var window = this || (0, eval)('this'),
        document = window['document'],
        navigator = window['navigator'],
        jQueryInstance = window["jQuery"],
        JSON = window["JSON"];
(function(factory) {
    // Support three module loading scenarios
    if (true) {
        // [1] AMD anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function(koExports, amdRequire){
// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
var ko = typeof koExports !== 'undefined' ? koExports : {};
// Google Closure Compiler helpers (used only to make the minified file smaller)
ko.exportSymbol = function(koPath, object) {
    var tokens = koPath.split(".");

    // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
    // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
    var target = ko;

    for (var i = 0; i < tokens.length - 1; i++)
        target = target[tokens[i]];
    target[tokens[tokens.length - 1]] = object;
};
ko.exportProperty = function(owner, publicName, object) {
    owner[publicName] = object;
};
ko.version = "3.4.2";

ko.exportSymbol('version', ko.version);
// For any options that may affect various areas of Knockout and aren't directly associated with data binding.
ko.options = {
    'deferUpdates': false,
    'useOnlyNativeEvents': false
};

//ko.exportSymbol('options', ko.options);   // 'options' isn't minified
ko.utils = (function () {
    function objectForEach(obj, action) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                action(prop, obj[prop]);
            }
        }
    }

    function extend(target, source) {
        if (source) {
            for(var prop in source) {
                if(source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    function setPrototypeOf(obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    var canSetPrototype = ({ __proto__: [] } instanceof Array);
    var canUseSymbols = !DEBUG && typeof Symbol === 'function';

    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
    var knownEvents = {}, knownEventTypesByEventName = {};
    var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
    objectForEach(knownEvents, function(eventType, knownEventsForType) {
        if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++)
                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
        }
    });
    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
    // If there is a future need to detect specific versions of IE10+, we will amend this.
    var ieVersion = document && (function() {
        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
        while (
            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
            iElems[0]
        ) {}
        return version > 4 ? version : undefined;
    }());
    var isIe6 = ieVersion === 6,
        isIe7 = ieVersion === 7;

    function isClickOnCheckableElement(element, eventType) {
        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
        if (eventType.toLowerCase() != "click") return false;
        var inputType = element.type;
        return (inputType == "checkbox") || (inputType == "radio");
    }

    // For details on the pattern for changing node classes
    // see: https://github.com/knockout/knockout/issues/1597
    var cssClassNameRegex = /\S+/g;

    function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
        var addOrRemoveFn;
        if (classNames) {
            if (typeof node.classList === 'object') {
                addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    addOrRemoveFn.call(node.classList, className);
                });
            } else if (typeof node.className['baseVal'] === 'string') {
                // SVG tag .classNames is an SVGAnimatedString instance
                toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
            } else {
                // node.className ought to be a string.
                toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
            }
        }
    }

    function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
        // obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
        var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
        ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
            ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
        });
        obj[prop] = currentClassNames.join(" ");
    }

    return {
        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

        arrayForEach: function (array, action) {
            for (var i = 0, j = array.length; i < j; i++)
                action(array[i], i);
        },

        arrayIndexOf: function (array, item) {
            if (typeof Array.prototype.indexOf == "function")
                return Array.prototype.indexOf.call(array, item);
            for (var i = 0, j = array.length; i < j; i++)
                if (array[i] === item)
                    return i;
            return -1;
        },

        arrayFirst: function (array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate.call(predicateOwner, array[i], i))
                    return array[i];
            return null;
        },

        arrayRemoveItem: function (array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index > 0) {
                array.splice(index, 1);
            }
            else if (index === 0) {
                array.shift();
            }
        },

        arrayGetDistinctValues: function (array) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
            }
            return result;
        },

        arrayMap: function (array, mapping) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                result.push(mapping(array[i], i));
            return result;
        },

        arrayFilter: function (array, predicate) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate(array[i], i))
                    result.push(array[i]);
            return result;
        },

        arrayPushAll: function (array, valuesToPush) {
            if (valuesToPush instanceof Array)
                array.push.apply(array, valuesToPush);
            else
                for (var i = 0, j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
            return array;
        },

        addOrRemoveItem: function(array, value, included) {
            var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
            if (existingEntryIndex < 0) {
                if (included)
                    array.push(value);
            } else {
                if (!included)
                    array.splice(existingEntryIndex, 1);
            }
        },

        canSetPrototype: canSetPrototype,

        extend: extend,

        setPrototypeOf: setPrototypeOf,

        setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

        objectForEach: objectForEach,

        objectMap: function(source, mapping) {
            if (!source)
                return source;
            var target = {};
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    target[prop] = mapping(source[prop], prop, source);
                }
            }
            return target;
        },

        emptyDomNode: function (domNode) {
            while (domNode.firstChild) {
                ko.removeNode(domNode.firstChild);
            }
        },

        moveCleanedNodesToContainerElement: function(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);
            var templateDocument = (nodesArray[0] && nodesArray[0].ownerDocument) || document;

            var container = templateDocument.createElement('div');
            for (var i = 0, j = nodesArray.length; i < j; i++) {
                container.appendChild(ko.cleanNode(nodesArray[i]));
            }
            return container;
        },

        cloneNodes: function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        },

        setDomNodeChildren: function (domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);
            if (childNodes) {
                for (var i = 0, j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
            }
        },

        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
            if (nodesToReplaceArray.length > 0) {
                var insertionPoint = nodesToReplaceArray[0];
                var parent = insertionPoint.parentNode;
                for (var i = 0, j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                }
            }
        },

        fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
            // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
            // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
            // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
            // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
            // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
            //
            // Rules:
            //   [A] Any leading nodes that have been removed should be ignored
            //       These most likely correspond to memoization nodes that were already removed during binding
            //       See https://github.com/knockout/knockout/pull/440
            //   [B] Any trailing nodes that have been remove should be ignored
            //       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
            //       See https://github.com/knockout/knockout/pull/1903
            //   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
            //       and include any nodes that have been inserted among the previous collection

            if (continuousNodeArray.length) {
                // The parent node can be a virtual element; so get the real parent node
                parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;

                // Rule [A]
                while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
                    continuousNodeArray.splice(0, 1);

                // Rule [B]
                while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode)
                    continuousNodeArray.length--;

                // Rule [C]
                if (continuousNodeArray.length > 1) {
                    var current = continuousNodeArray[0], last = continuousNodeArray[continuousNodeArray.length - 1];
                    // Replace with the actual new continuous node set
                    continuousNodeArray.length = 0;
                    while (current !== last) {
                        continuousNodeArray.push(current);
                        current = current.nextSibling;
                    }
                    continuousNodeArray.push(last);
                }
            }
            return continuousNodeArray;
        },

        setOptionNodeSelectionState: function (optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7)
                optionNode.setAttribute("selected", isSelected);
            else
                optionNode.selected = isSelected;
        },

        stringTrim: function (string) {
            return string === null || string === undefined ? '' :
                string.trim ?
                    string.trim() :
                    string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },

        stringStartsWith: function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        },

        domNodeIsContainedBy: function (node, containedByNode) {
            if (node === containedByNode)
                return true;
            if (node.nodeType === 11)
                return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
            if (containedByNode.contains)
                return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
            if (containedByNode.compareDocumentPosition)
                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
            while (node && node != containedByNode) {
                node = node.parentNode;
            }
            return !!node;
        },

        domNodeIsAttachedToDocument: function (node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
        },

        anyDomNodeIsAttachedToDocument: function(nodes) {
            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
        },

        tagNameLower: function(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
        },

        catchFunctionErrors: function (delegate) {
            return ko['onError'] ? function () {
                try {
                    return delegate.apply(this, arguments);
                } catch (e) {
                    ko['onError'] && ko['onError'](e);
                    throw e;
                }
            } : delegate;
        },

        setTimeout: function (handler, timeout) {
            return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
        },

        deferError: function (error) {
            setTimeout(function () {
                ko['onError'] && ko['onError'](error);
                throw error;
            }, 0);
        },

        registerEventHandler: function (element, eventType, handler) {
            var wrappedHandler = ko.utils.catchFunctionErrors(handler);

            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
            if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
                jQueryInstance(element)['bind'](eventType, wrappedHandler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                element.addEventListener(eventType, wrappedHandler, false);
            else if (typeof element.attachEvent != "undefined") {
                var attachEventHandler = function (event) { wrappedHandler.call(element, event); },
                    attachEventName = "on" + eventType;
                element.attachEvent(attachEventName, attachEventHandler);

                // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                // so to avoid leaks, we have to remove them manually. See bug #856
                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                });
            } else
                throw new Error("Browser doesn't support addEventListener or attachEvent");
        },

        triggerEvent: function (element, eventType) {
            if (!(element && element.nodeType))
                throw new Error("element must be a DOM node when calling triggerEvent");

            // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
            // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
            // IE doesn't change the checked state when you trigger the click event using "fireEvent".
            // In both cases, we'll use the click method instead.
            var useClickWorkaround = isClickOnCheckableElement(element, eventType);

            if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
                jQueryInstance(element)['trigger'](eventType);
            } else if (typeof document.createEvent == "function") {
                if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                }
                else
                    throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (useClickWorkaround && element.click) {
                element.click();
            } else if (typeof element.fireEvent != "undefined") {
                element.fireEvent("on" + eventType);
            } else {
                throw new Error("Browser doesn't support triggering events");
            }
        },

        unwrapObservable: function (value) {
            return ko.isObservable(value) ? value() : value;
        },

        peekObservable: function (value) {
            return ko.isObservable(value) ? value.peek() : value;
        },

        toggleDomNodeCssClass: toggleDomNodeCssClass,

        setTextContent: function(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if ((value === null) || (value === undefined))
                value = "";

            // We need there to be exactly one child: a text node.
            // If there are no children, more than one, or if it's not a text node,
            // we'll clear everything and create a single text node.
            var innerTextNode = ko.virtualElements.firstChild(element);
            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
            } else {
                innerTextNode.data = value;
            }

            ko.utils.forceRefresh(element);
        },

        setElementName: function(element, name) {
            element.name = name;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ieVersion <= 7) {
                try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                }
                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
            }
        },

        forceRefresh: function(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                var elem = node.nodeType == 1 ? node : node.parentNode;
                if (elem.style)
                    elem.style.zoom = elem.style.zoom;
            }
        },

        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
            if (ieVersion) {
                var originalWidth = selectElement.style.width;
                selectElement.style.width = 0;
                selectElement.style.width = originalWidth;
            }
        },

        range: function (min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];
            for (var i = min; i <= max; i++)
                result.push(i);
            return result;
        },

        makeArray: function(arrayLikeObject) {
            var result = [];
            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                result.push(arrayLikeObject[i]);
            };
            return result;
        },

        createSymbolOrString: function(identifier) {
            return canUseSymbols ? Symbol(identifier) : identifier;
        },

        isIe6 : isIe6,
        isIe7 : isIe7,
        ieVersion : ieVersion,

        getFormFields: function(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = (typeof fieldName == 'string')
                ? function(field) { return field.name === fieldName }
                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
            var matches = [];
            for (var i = fields.length - 1; i >= 0; i--) {
                if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
            };
            return matches;
        },

        parseJson: function (jsonString) {
            if (typeof jsonString == "string") {
                jsonString = ko.utils.stringTrim(jsonString);
                if (jsonString) {
                    if (JSON && JSON.parse) // Use native parsing where available
                        return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
                }
            }
            return null;
        },

        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
            if (!JSON || !JSON.stringify)
                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
        },

        postJson: function (urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm;

            // If we were given a form, use its 'action' URL and pick out any requested field values
            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                var originalForm = urlOrForm;
                url = originalForm.action;
                for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                        params[fields[j].name] = fields[j].value;
                }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";
            for (var key in data) {
                // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                form.appendChild(input);
            }
            objectForEach(params, function(key, value) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
        }
    }
}());

ko.exportSymbol('utils', ko.utils);
ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
ko.exportSymbol('utils.extend', ko.utils.extend);
ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
ko.exportSymbol('utils.postJson', ko.utils.postJson);
ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
ko.exportSymbol('utils.range', ko.utils.range);
ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

if (!Function.prototype['bind']) {
    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
    Function.prototype['bind'] = function (object) {
        var originalFunction = this;
        if (arguments.length === 1) {
            return function () {
                return originalFunction.apply(object, arguments);
            };
        } else {
            var partialArgs = Array.prototype.slice.call(arguments, 1);
            return function () {
                var args = partialArgs.slice(0);
                args.push.apply(args, arguments);
                return originalFunction.apply(object, args);
            };
        }
    };
}

ko.utils.domData = new (function () {
    var uniqueId = 0;
    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
    var dataStore = {};

    function getAll(node, createIfNotFound) {
        var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
        var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
        if (!hasExistingDataStore) {
            if (!createIfNotFound)
                return undefined;
            dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
            dataStore[dataStoreKey] = {};
        }
        return dataStore[dataStoreKey];
    }

    return {
        get: function (node, key) {
            var allDataForNode = getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
        },
        set: function (node, key, value) {
            if (value === undefined) {
                // Make sure we don't actually create a new domData key if we are actually deleting a value
                if (getAll(node, false) === undefined)
                    return;
            }
            var allDataForNode = getAll(node, true);
            allDataForNode[key] = value;
        },
        clear: function (node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            if (dataStoreKey) {
                delete dataStore[dataStoreKey];
                node[dataStoreKeyExpandoPropertyName] = null;
                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }
            return false;
        },

        nextKey: function () {
            return (uniqueId++) + dataStoreKeyExpandoPropertyName;
        }
    };
})();

ko.exportSymbol('utils.domData', ko.utils.domData);
ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

ko.utils.domNodeDisposal = new (function () {
    var domDataKey = ko.utils.domData.nextKey();
    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

    function getDisposeCallbacksCollection(node, createIfNotFound) {
        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
        }
        return allDisposeCallbacks;
    }
    function destroyCallbacksCollection(node) {
        ko.utils.domData.set(node, domDataKey, undefined);
    }

    function cleanSingleNode(node) {
        // Run all the dispose callbacks
        var callbacks = getDisposeCallbacksCollection(node, false);
        if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](node);
        }

        // Erase the DOM data
        ko.utils.domData.clear(node);

        // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
        ko.utils.domNodeDisposal["cleanExternalData"](node);

        // Clear any immediate-child comment nodes, as these wouldn't have been found by
        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
        if (cleanableNodeTypesWithDescendants[node.nodeType])
            cleanImmediateCommentTypeChildren(node);
    }

    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
        var child, nextChild = nodeWithChildren.firstChild;
        while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8)
                cleanSingleNode(child);
        }
    }

    return {
        addDisposeCallback : function(node, callback) {
            if (typeof callback != "function")
                throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
        },

        removeDisposeCallback : function(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);
            if (callbacksCollection) {
                ko.utils.arrayRemoveItem(callbacksCollection, callback);
                if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
            }
        },

        cleanNode : function(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
                cleanSingleNode(node);

                // ... then its descendants, where applicable
                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    // Clone the descendants list in case it changes during iteration
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0, j = descendants.length; i < j; i++)
                        cleanSingleNode(descendants[i]);
                }
            }
            return node;
        },

        removeNode : function(node) {
            ko.cleanNode(node);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        },

        "cleanExternalData" : function (node) {
            // Special support for jQuery here because it's so commonly used.
            // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
            // so notify it to tear down any resources associated with the node & descendants here.
            if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
                jQueryInstance['cleanData']([node]);
        }
    };
})();
ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
ko.exportSymbol('cleanNode', ko.cleanNode);
ko.exportSymbol('removeNode', ko.removeNode);
ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
(function () {
    var none = [0, "", ""],
        table = [1, "<table>", "</table>"],
        tbody = [2, "<table><tbody>", "</tbody></table>"],
        tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        select = [1, "<select multiple='multiple'>", "</select>"],
        lookup = {
            'thead': table,
            'tbody': table,
            'tfoot': table,
            'tr': tbody,
            'td': tr,
            'th': tr,
            'option': select,
            'optgroup': select
        },

        // This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
        mayRequireCreateElementHack = ko.utils.ieVersion <= 8;

    function getWrap(tags) {
        var m = tags.match(/^<([a-z]+)[ >]/);
        return (m && lookup[m[1]]) || none;
    }

    function simpleHtmlParse(html, documentContext) {
        documentContext || (documentContext = document);
        var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;

        // Based on jQuery's "clean" function, but only accounting for table-related elements.
        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

        // Trim whitespace, otherwise indexOf won't work as expected
        var tags = ko.utils.stringTrim(html).toLowerCase(), div = documentContext.createElement("div"),
            wrap = getWrap(tags),
            depth = wrap[0];

        // Go to html and back, then peel off extra wrappers
        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
        if (typeof windowContext['innerShiv'] == "function") {
            // Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
            // support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
            // somehow shims the native APIs so it just works anyway)
            div.appendChild(windowContext['innerShiv'](markup));
        } else {
            if (mayRequireCreateElementHack) {
                // The document.createElement('my-element') trick to enable custom elements in IE6-8
                // only works if we assign innerHTML on an element associated with that document.
                documentContext.appendChild(div);
            }

            div.innerHTML = markup;

            if (mayRequireCreateElementHack) {
                div.parentNode.removeChild(div);
            }
        }

        // Move to the right depth
        while (depth--)
            div = div.lastChild;

        return ko.utils.makeArray(div.lastChild.childNodes);
    }

    function jQueryHtmlParse(html, documentContext) {
        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
        if (jQueryInstance['parseHTML']) {
            return jQueryInstance['parseHTML'](html, documentContext) || []; // Ensure we always return an array and never null
        } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQueryInstance['clean']([html], documentContext);

            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
            if (elems && elems[0]) {
                // Find the top-most parent element that's a direct child of a document fragment
                var elem = elems[0];
                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
                    elem = elem.parentNode;
                // ... then detach it
                if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
            }

            return elems;
        }
    }

    ko.utils.parseHtmlFragment = function(html, documentContext) {
        return jQueryInstance ?
            jQueryHtmlParse(html, documentContext) :   // As below, benefit from jQuery's optimisations where possible
            simpleHtmlParse(html, documentContext);  // ... otherwise, this simple logic will do in most common cases.
    };

    ko.utils.setHtml = function(node, html) {
        ko.utils.emptyDomNode(node);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        html = ko.utils.unwrapObservable(html);

        if ((html !== null) && (html !== undefined)) {
            if (typeof html != 'string')
                html = html.toString();

            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.
            if (jQueryInstance) {
                jQueryInstance(node)['html'](html);
            } else {
                // ... otherwise, use KO's own parsing logic.
                var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
            }
        }
    };
})();

ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

ko.memoization = (function () {
    var memos = {};

    function randomMax8HexChars() {
        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
    }
    function generateRandomId() {
        return randomMax8HexChars() + randomMax8HexChars();
    }
    function findMemoNodes(rootNode, appendToArray) {
        if (!rootNode)
            return;
        if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null)
                appendToArray.push({ domNode: rootNode, memoId: memoId });
        } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
                findMemoNodes(childNodes[i], appendToArray);
        }
    }

    return {
        memoize: function (callback) {
            if (typeof callback != "function")
                throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
        },

        unmemoize: function (memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined)
                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
            try {
                callback.apply(null, callbackParams || []);
                return true;
            }
            finally { delete memos[memoId]; }
        },

        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);
            for (var i = 0, j = memos.length; i < j; i++) {
                var node = memos[i].domNode;
                var combinedParams = [node];
                if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                if (node.parentNode)
                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
        },

        parseMemoText: function (memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
        }
    };
})();

ko.exportSymbol('memoization', ko.memoization);
ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
ko.tasks = (function () {
    var scheduler,
        taskQueue = [],
        taskQueueLength = 0,
        nextHandle = 1,
        nextIndexToProcess = 0;

    if (window['MutationObserver']) {
        // Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
        // From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
        scheduler = (function (callback) {
            var div = document.createElement("div");
            new MutationObserver(callback).observe(div, {attributes: true});
            return function () { div.classList.toggle("foo"); };
        })(scheduledProcess);
    } else if (document && "onreadystatechange" in document.createElement("script")) {
        // IE 6-10
        // From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
        scheduler = function (callback) {
            var script = document.createElement("script");
            script.onreadystatechange = function () {
                script.onreadystatechange = null;
                document.documentElement.removeChild(script);
                script = null;
                callback();
            };
            document.documentElement.appendChild(script);
        };
    } else {
        scheduler = function (callback) {
            setTimeout(callback, 0);
        };
    }

    function processTasks() {
        if (taskQueueLength) {
            // Each mark represents the end of a logical group of tasks and the number of these groups is
            // limited to prevent unchecked recursion.
            var mark = taskQueueLength, countMarks = 0;

            // nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
            for (var task; nextIndexToProcess < taskQueueLength; ) {
                if (task = taskQueue[nextIndexToProcess++]) {
                    if (nextIndexToProcess > mark) {
                        if (++countMarks >= 5000) {
                            nextIndexToProcess = taskQueueLength;   // skip all tasks remaining in the queue since any of them could be causing the recursion
                            ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
                            break;
                        }
                        mark = taskQueueLength;
                    }
                    try {
                        task();
                    } catch (ex) {
                        ko.utils.deferError(ex);
                    }
                }
            }
        }
    }

    function scheduledProcess() {
        processTasks();

        // Reset the queue
        nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
    }

    function scheduleTaskProcessing() {
        ko.tasks['scheduler'](scheduledProcess);
    }

    var tasks = {
        'scheduler': scheduler,     // Allow overriding the scheduler

        schedule: function (func) {
            if (!taskQueueLength) {
                scheduleTaskProcessing();
            }

            taskQueue[taskQueueLength++] = func;
            return nextHandle++;
        },

        cancel: function (handle) {
            var index = handle - (nextHandle - taskQueueLength);
            if (index >= nextIndexToProcess && index < taskQueueLength) {
                taskQueue[index] = null;
            }
        },

        // For testing only: reset the queue and return the previous queue length
        'resetForTesting': function () {
            var length = taskQueueLength - nextIndexToProcess;
            nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
            return length;
        },

        runEarly: processTasks
    };

    return tasks;
})();

ko.exportSymbol('tasks', ko.tasks);
ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
//ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
ko.extenders = {
    'throttle': function(target, timeout) {
        // Throttling means two things:

        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
        target['throttleEvaluation'] = timeout;

        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
        //     so the target cannot change value synchronously or faster than a certain rate
        var writeTimeoutInstance = null;
        return ko.dependentObservable({
            'read': target,
            'write': function(value) {
                clearTimeout(writeTimeoutInstance);
                writeTimeoutInstance = ko.utils.setTimeout(function() {
                    target(value);
                }, timeout);
            }
        });
    },

    'rateLimit': function(target, options) {
        var timeout, method, limitFunction;

        if (typeof options == 'number') {
            timeout = options;
        } else {
            timeout = options['timeout'];
            method = options['method'];
        }

        // rateLimit supersedes deferred updates
        target._deferUpdates = false;

        limitFunction = method == 'notifyWhenChangesStop' ?  debounce : throttle;
        target.limit(function(callback) {
            return limitFunction(callback, timeout);
        });
    },

    'deferred': function(target, options) {
        if (options !== true) {
            throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.')
        }

        if (!target._deferUpdates) {
            target._deferUpdates = true;
            target.limit(function (callback) {
                var handle,
                    ignoreUpdates = false;
                return function () {
                    if (!ignoreUpdates) {
                        ko.tasks.cancel(handle);
                        handle = ko.tasks.schedule(callback);

                        try {
                            ignoreUpdates = true;
                            target['notifySubscribers'](undefined, 'dirty');
                        } finally {
                            ignoreUpdates = false;
                        }
                    }
                };
            });
        }
    },

    'notify': function(target, notifyWhen) {
        target["equalityComparer"] = notifyWhen == "always" ?
            null :  // null equalityComparer means to always notify
            valuesArePrimitiveAndEqual;
    }
};

var primitiveTypes = { 'undefined':1, 'boolean':1, 'number':1, 'string':1 };
function valuesArePrimitiveAndEqual(a, b) {
    var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
    return oldValueIsPrimitive ? (a === b) : false;
}

function throttle(callback, timeout) {
    var timeoutInstance;
    return function () {
        if (!timeoutInstance) {
            timeoutInstance = ko.utils.setTimeout(function () {
                timeoutInstance = undefined;
                callback();
            }, timeout);
        }
    };
}

function debounce(callback, timeout) {
    var timeoutInstance;
    return function () {
        clearTimeout(timeoutInstance);
        timeoutInstance = ko.utils.setTimeout(callback, timeout);
    };
}

function applyExtenders(requestedExtenders) {
    var target = this;
    if (requestedExtenders) {
        ko.utils.objectForEach(requestedExtenders, function(key, value) {
            var extenderHandler = ko.extenders[key];
            if (typeof extenderHandler == 'function') {
                target = extenderHandler(target, value) || target;
            }
        });
    }
    return target;
}

ko.exportSymbol('extenders', ko.extenders);

ko.subscription = function (target, callback, disposeCallback) {
    this._target = target;
    this.callback = callback;
    this.disposeCallback = disposeCallback;
    this.isDisposed = false;
    ko.exportProperty(this, 'dispose', this.dispose);
};
ko.subscription.prototype.dispose = function () {
    this.isDisposed = true;
    this.disposeCallback();
};

ko.subscribable = function () {
    ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
    ko_subscribable_fn.init(this);
}

var defaultEvent = "change";

// Moved out of "limit" to avoid the extra closure
function limitNotifySubscribers(value, event) {
    if (!event || event === defaultEvent) {
        this._limitChange(value);
    } else if (event === 'beforeChange') {
        this._limitBeforeChange(value);
    } else {
        this._origNotifySubscribers(value, event);
    }
}

var ko_subscribable_fn = {
    init: function(instance) {
        instance._subscriptions = { "change": [] };
        instance._versionNumber = 1;
    },

    subscribe: function (callback, callbackTarget, event) {
        var self = this;

        event = event || defaultEvent;
        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

        var subscription = new ko.subscription(self, boundCallback, function () {
            ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
            if (self.afterSubscriptionRemove)
                self.afterSubscriptionRemove(event);
        });

        if (self.beforeSubscriptionAdd)
            self.beforeSubscriptionAdd(event);

        if (!self._subscriptions[event])
            self._subscriptions[event] = [];
        self._subscriptions[event].push(subscription);

        return subscription;
    },

    "notifySubscribers": function (valueToNotify, event) {
        event = event || defaultEvent;
        if (event === defaultEvent) {
            this.updateVersion();
        }
        if (this.hasSubscriptionsForEvent(event)) {
            var subs = event === defaultEvent && this._changeSubscriptions || this._subscriptions[event].slice(0);
            try {
                ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
                for (var i = 0, subscription; subscription = subs[i]; ++i) {
                    // In case a subscription was disposed during the arrayForEach cycle, check
                    // for isDisposed on each subscription before invoking its callback
                    if (!subscription.isDisposed)
                        subscription.callback(valueToNotify);
                }
            } finally {
                ko.dependencyDetection.end(); // End suppressing dependency detection
            }
        }
    },

    getVersion: function () {
        return this._versionNumber;
    },

    hasChanged: function (versionToCheck) {
        return this.getVersion() !== versionToCheck;
    },

    updateVersion: function () {
        ++this._versionNumber;
    },

    limit: function(limitFunction) {
        var self = this, selfIsObservable = ko.isObservable(self),
            ignoreBeforeChange, notifyNextChange, previousValue, pendingValue, beforeChange = 'beforeChange';

        if (!self._origNotifySubscribers) {
            self._origNotifySubscribers = self["notifySubscribers"];
            self["notifySubscribers"] = limitNotifySubscribers;
        }

        var finish = limitFunction(function() {
            self._notificationIsPending = false;

            // If an observable provided a reference to itself, access it to get the latest value.
            // This allows computed observables to delay calculating their value until needed.
            if (selfIsObservable && pendingValue === self) {
                pendingValue = self._evalIfChanged ? self._evalIfChanged() : self();
            }
            var shouldNotify = notifyNextChange || self.isDifferent(previousValue, pendingValue);

            notifyNextChange = ignoreBeforeChange = false;

            if (shouldNotify) {
                self._origNotifySubscribers(previousValue = pendingValue);
            }
        });

        self._limitChange = function(value) {
            self._changeSubscriptions = self._subscriptions[defaultEvent].slice(0);
            self._notificationIsPending = ignoreBeforeChange = true;
            pendingValue = value;
            finish();
        };
        self._limitBeforeChange = function(value) {
            if (!ignoreBeforeChange) {
                previousValue = value;
                self._origNotifySubscribers(value, beforeChange);
            }
        };
        self._notifyNextChangeIfValueIsDifferent = function() {
            if (self.isDifferent(previousValue, self.peek(true /*evaluate*/))) {
                notifyNextChange = true;
            }
        };
    },

    hasSubscriptionsForEvent: function(event) {
        return this._subscriptions[event] && this._subscriptions[event].length;
    },

    getSubscriptionsCount: function (event) {
        if (event) {
            return this._subscriptions[event] && this._subscriptions[event].length || 0;
        } else {
            var total = 0;
            ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
                if (eventName !== 'dirty')
                    total += subscriptions.length;
            });
            return total;
        }
    },

    isDifferent: function(oldValue, newValue) {
        return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
    },

    extend: applyExtenders
};

ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

// For browsers that support proto assignment, we overwrite the prototype of each
// observable instance. Since observables are functions, we need Function.prototype
// to still be in the prototype chain.
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
}

ko.subscribable['fn'] = ko_subscribable_fn;


ko.isSubscribable = function (instance) {
    return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
};

ko.exportSymbol('subscribable', ko.subscribable);
ko.exportSymbol('isSubscribable', ko.isSubscribable);

ko.computedContext = ko.dependencyDetection = (function () {
    var outerFrames = [],
        currentFrame,
        lastId = 0;

    // Return a unique ID that can be assigned to an observable for dependency tracking.
    // Theoretically, you could eventually overflow the number storage size, resulting
    // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
    // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
    // take over 285 years to reach that number.
    // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
    function getId() {
        return ++lastId;
    }

    function begin(options) {
        outerFrames.push(currentFrame);
        currentFrame = options;
    }

    function end() {
        currentFrame = outerFrames.pop();
    }

    return {
        begin: begin,

        end: end,

        registerDependency: function (subscribable) {
            if (currentFrame) {
                if (!ko.isSubscribable(subscribable))
                    throw new Error("Only subscribable things can act as dependencies");
                currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
            }
        },

        ignore: function (callback, callbackTarget, callbackArgs) {
            try {
                begin();
                return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
                end();
            }
        },

        getDependenciesCount: function () {
            if (currentFrame)
                return currentFrame.computed.getDependenciesCount();
        },

        isInitial: function() {
            if (currentFrame)
                return currentFrame.isInitial;
        }
    };
})();

ko.exportSymbol('computedContext', ko.computedContext);
ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);

ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');

ko.observable = function (initialValue) {
    function observable() {
        if (arguments.length > 0) {
            // Write

            // Ignore writes if the value hasn't changed
            if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
                observable.valueWillMutate();
                observable[observableLatestValue] = arguments[0];
                observable.valueHasMutated();
            }
            return this; // Permits chained assignments
        }
        else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
            return observable[observableLatestValue];
        }
    }

    observable[observableLatestValue] = initialValue;

    // Inherit from 'subscribable'
    if (!ko.utils.canSetPrototype) {
        // 'subscribable' won't be on the prototype chain unless we put it there directly
        ko.utils.extend(observable, ko.subscribable['fn']);
    }
    ko.subscribable['fn'].init(observable);

    // Inherit from 'observable'
    ko.utils.setPrototypeOfOrExtend(observable, observableFn);

    if (ko.options['deferUpdates']) {
        ko.extenders['deferred'](observable, true);
    }

    return observable;
}

// Define prototype for observables
var observableFn = {
    'equalityComparer': valuesArePrimitiveAndEqual,
    peek: function() { return this[observableLatestValue]; },
    valueHasMutated: function () { this['notifySubscribers'](this[observableLatestValue]); },
    valueWillMutate: function () { this['notifySubscribers'](this[observableLatestValue], 'beforeChange'); }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observable constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
}

var protoProperty = ko.observable.protoProperty = '__ko_proto__';
observableFn[protoProperty] = ko.observable;

ko.hasPrototype = function(instance, prototype) {
    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
    if (instance[protoProperty] === prototype) return true;
    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
};

ko.isObservable = function (instance) {
    return ko.hasPrototype(instance, ko.observable);
}
ko.isWriteableObservable = function (instance) {
    // Observable
    if ((typeof instance == 'function') && instance[protoProperty] === ko.observable)
        return true;
    // Writeable dependent observable
    if ((typeof instance == 'function') && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
        return true;
    // Anything else
    return false;
}

ko.exportSymbol('observable', ko.observable);
ko.exportSymbol('isObservable', ko.isObservable);
ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
ko.exportSymbol('observable.fn', observableFn);
ko.exportProperty(observableFn, 'peek', observableFn.peek);
ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
ko.observableArray = function (initialValues) {
    initialValues = initialValues || [];

    if (typeof initialValues != 'object' || !('length' in initialValues))
        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

    var result = ko.observable(initialValues);
    ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
    return result.extend({'trackArrayChanges':true});
};

ko.observableArray['fn'] = {
    'remove': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var removedValues = [];
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];
            if (predicate(value)) {
                if (removedValues.length === 0) {
                    this.valueWillMutate();
                }
                removedValues.push(value);
                underlyingArray.splice(i, 1);
                i--;
            }
        }
        if (removedValues.length) {
            this.valueHasMutated();
        }
        return removedValues;
    },

    'removeAll': function (arrayOfValues) {
        // If you passed zero args, we remove everything
        if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
        }
        // If you passed an arg, we interpret it as an array of entries to remove
        if (!arrayOfValues)
            return [];
        return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'destroy': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        this.valueWillMutate();
        for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value))
                underlyingArray[i]["_destroy"] = true;
        }
        this.valueHasMutated();
    },

    'destroyAll': function (arrayOfValues) {
        // If you passed zero args, we destroy everything
        if (arrayOfValues === undefined)
            return this['destroy'](function() { return true });

        // If you passed an arg, we interpret it as an array of entries to destroy
        if (!arrayOfValues)
            return [];
        return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'indexOf': function (item) {
        var underlyingArray = this();
        return ko.utils.arrayIndexOf(underlyingArray, item);
    },

    'replace': function(oldItem, newItem) {
        var index = this['indexOf'](oldItem);
        if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
        }
    }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observableArray constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
}

// Populate ko.observableArray.fn with read/write functions from native arrays
// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
        // (for consistency with mutating regular observables)
        var underlyingArray = this.peek();
        this.valueWillMutate();
        this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
        this.valueHasMutated();
        // The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
        return methodCallResult === underlyingArray ? this : methodCallResult;
    };
});

// Populate ko.observableArray.fn with read-only functions from native arrays
ko.utils.arrayForEach(["slice"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        var underlyingArray = this();
        return underlyingArray[methodName].apply(underlyingArray, arguments);
    };
});

ko.exportSymbol('observableArray', ko.observableArray);
var arrayChangeEventName = 'arrayChange';
ko.extenders['trackArrayChanges'] = function(target, options) {
    // Use the provided options--each call to trackArrayChanges overwrites the previously set options
    target.compareArrayOptions = {};
    if (options && typeof options == "object") {
        ko.utils.extend(target.compareArrayOptions, options);
    }
    target.compareArrayOptions['sparse'] = true;

    // Only modify the target observable once
    if (target.cacheDiffForKnownOperation) {
        return;
    }
    var trackingChanges = false,
        cachedDiff = null,
        arrayChangeSubscription,
        pendingNotifications = 0,
        underlyingNotifySubscribersFunction,
        underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
        underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;

    // Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
    target.beforeSubscriptionAdd = function (event) {
        if (underlyingBeforeSubscriptionAddFunction)
            underlyingBeforeSubscriptionAddFunction.call(target, event);
        if (event === arrayChangeEventName) {
            trackChanges();
        }
    };
    // Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
    target.afterSubscriptionRemove = function (event) {
        if (underlyingAfterSubscriptionRemoveFunction)
            underlyingAfterSubscriptionRemoveFunction.call(target, event);
        if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
            if (underlyingNotifySubscribersFunction) {
                target['notifySubscribers'] = underlyingNotifySubscribersFunction;
                underlyingNotifySubscribersFunction = undefined;
            }
            arrayChangeSubscription.dispose();
            trackingChanges = false;
        }
    };

    function trackChanges() {
        // Calling 'trackChanges' multiple times is the same as calling it once
        if (trackingChanges) {
            return;
        }

        trackingChanges = true;

        // Intercept "notifySubscribers" to track how many times it was called.
        underlyingNotifySubscribersFunction = target['notifySubscribers'];
        target['notifySubscribers'] = function(valueToNotify, event) {
            if (!event || event === defaultEvent) {
                ++pendingNotifications;
            }
            return underlyingNotifySubscribersFunction.apply(this, arguments);
        };

        // Each time the array changes value, capture a clone so that on the next
        // change it's possible to produce a diff
        var previousContents = [].concat(target.peek() || []);
        cachedDiff = null;
        arrayChangeSubscription = target.subscribe(function(currentContents) {
            // Make a copy of the current contents and ensure it's an array
            currentContents = [].concat(currentContents || []);

            // Compute the diff and issue notifications, but only if someone is listening
            if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                var changes = getChanges(previousContents, currentContents);
            }

            // Eliminate references to the old, removed items, so they can be GCed
            previousContents = currentContents;
            cachedDiff = null;
            pendingNotifications = 0;

            if (changes && changes.length) {
                target['notifySubscribers'](changes, arrayChangeEventName);
            }
        });
    }

    function getChanges(previousContents, currentContents) {
        // We try to re-use cached diffs.
        // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
        // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
        // notifications are issued immediately so we wouldn't be queueing up more than one.
        if (!cachedDiff || pendingNotifications > 1) {
            cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
        }

        return cachedDiff;
    }

    target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
        // Only run if we're currently tracking changes for this observable array
        // and there aren't any pending deferred notifications.
        if (!trackingChanges || pendingNotifications) {
            return;
        }
        var diff = [],
            arrayLength = rawArray.length,
            argsLength = args.length,
            offset = 0;

        function pushDiff(status, value, index) {
            return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
        }
        switch (operationName) {
            case 'push':
                offset = arrayLength;
            case 'unshift':
                for (var index = 0; index < argsLength; index++) {
                    pushDiff('added', args[index], offset + index);
                }
                break;

            case 'pop':
                offset = arrayLength - 1;
            case 'shift':
                if (arrayLength) {
                    pushDiff('deleted', rawArray[offset], offset);
                }
                break;

            case 'splice':
                // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                    endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                    endAddIndex = startIndex + argsLength - 2,
                    endIndex = Math.max(endDeleteIndex, endAddIndex),
                    additions = [], deletions = [];
                for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                    if (index < endDeleteIndex)
                        deletions.push(pushDiff('deleted', rawArray[index], index));
                    if (index < endAddIndex)
                        additions.push(pushDiff('added', args[argsIndex], index));
                }
                ko.utils.findMovesInArrayComparison(deletions, additions);
                break;

            default:
                return;
        }
        cachedDiff = diff;
    };
};
var computedState = ko.utils.createSymbolOrString('_state');

ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
    if (typeof evaluatorFunctionOrOptions === "object") {
        // Single-parameter syntax - everything is on this "options" param
        options = evaluatorFunctionOrOptions;
    } else {
        // Multi-parameter syntax - construct the options according to the params passed
        options = options || {};
        if (evaluatorFunctionOrOptions) {
            options["read"] = evaluatorFunctionOrOptions;
        }
    }
    if (typeof options["read"] != "function")
        throw Error("Pass a function that returns the value of the ko.computed");

    var writeFunction = options["write"];
    var state = {
        latestValue: undefined,
        isStale: true,
        isDirty: true,
        isBeingEvaluated: false,
        suppressDisposalUntilDisposeWhenReturnsFalse: false,
        isDisposed: false,
        pure: false,
        isSleeping: false,
        readFunction: options["read"],
        evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
        disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
        disposeWhen: options["disposeWhen"] || options.disposeWhen,
        domNodeDisposalCallback: null,
        dependencyTracking: {},
        dependenciesCount: 0,
        evaluationTimeoutInstance: null
    };

    function computedObservable() {
        if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
                // Writing a value
                writeFunction.apply(state.evaluatorFunctionTarget, arguments);
            } else {
                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }
            return this; // Permits chained assignments
        } else {
            // Reading the value
            ko.dependencyDetection.registerDependency(computedObservable);
            if (state.isDirty || (state.isSleeping && computedObservable.haveDependenciesChanged())) {
                computedObservable.evaluateImmediate();
            }
            return state.latestValue;
        }
    }

    computedObservable[computedState] = state;
    computedObservable.hasWriteFunction = typeof writeFunction === "function";

    // Inherit from 'subscribable'
    if (!ko.utils.canSetPrototype) {
        // 'subscribable' won't be on the prototype chain unless we put it there directly
        ko.utils.extend(computedObservable, ko.subscribable['fn']);
    }
    ko.subscribable['fn'].init(computedObservable);

    // Inherit from 'computed'
    ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);

    if (options['pure']) {
        state.pure = true;
        state.isSleeping = true;     // Starts off sleeping; will awake on the first subscription
        ko.utils.extend(computedObservable, pureComputedOverrides);
    } else if (options['deferEvaluation']) {
        ko.utils.extend(computedObservable, deferEvaluationOverrides);
    }

    if (ko.options['deferUpdates']) {
        ko.extenders['deferred'](computedObservable, true);
    }

    if (DEBUG) {
        // #1731 - Aid debugging by exposing the computed's options
        computedObservable["_options"] = options;
    }

    if (state.disposeWhenNodeIsRemoved) {
        // Since this computed is associated with a DOM node, and we don't want to dispose the computed
        // until the DOM node is *removed* from the document (as opposed to never having been in the document),
        // we'll prevent disposal until "disposeWhen" first returns false.
        state.suppressDisposalUntilDisposeWhenReturnsFalse = true;

        // disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
        // behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
        // to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
        // be documented or used by application code, as it's likely to change in a future version of KO.
        if (!state.disposeWhenNodeIsRemoved.nodeType) {
            state.disposeWhenNodeIsRemoved = null;
        }
    }

    // Evaluate, unless sleeping or deferEvaluation is true
    if (!state.isSleeping && !options['deferEvaluation']) {
        computedObservable.evaluateImmediate();
    }

    // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
    // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
    if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
        ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function () {
            computedObservable.dispose();
        });
    }

    return computedObservable;
};

// Utility function that disposes a given dependencyTracking entry
function computedDisposeDependencyCallback(id, entryToDispose) {
    if (entryToDispose !== null && entryToDispose.dispose) {
        entryToDispose.dispose();
    }
}

// This function gets called each time a dependency is detected while evaluating a computed.
// It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
function computedBeginDependencyDetectionCallback(subscribable, id) {
    var computedObservable = this.computedObservable,
        state = computedObservable[computedState];
    if (!state.isDisposed) {
        if (this.disposalCount && this.disposalCandidates[id]) {
            // Don't want to dispose this subscription, as it's still being used
            computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
            this.disposalCandidates[id] = null; // No need to actually delete the property - disposalCandidates is a transient object anyway
            --this.disposalCount;
        } else if (!state.dependencyTracking[id]) {
            // Brand new subscription - add it
            computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? { _target: subscribable } : computedObservable.subscribeToDependency(subscribable));
        }
        // If the observable we've accessed has a pending notification, ensure we get notified of the actual final value (bypass equality checks)
        if (subscribable._notificationIsPending) {
            subscribable._notifyNextChangeIfValueIsDifferent();
        }
    }
}

var computedFn = {
    "equalityComparer": valuesArePrimitiveAndEqual,
    getDependenciesCount: function () {
        return this[computedState].dependenciesCount;
    },
    addDependencyTracking: function (id, target, trackingObj) {
        if (this[computedState].pure && target === this) {
            throw Error("A 'pure' computed must not be called recursively");
        }

        this[computedState].dependencyTracking[id] = trackingObj;
        trackingObj._order = this[computedState].dependenciesCount++;
        trackingObj._version = target.getVersion();
    },
    haveDependenciesChanged: function () {
        var id, dependency, dependencyTracking = this[computedState].dependencyTracking;
        for (id in dependencyTracking) {
            if (dependencyTracking.hasOwnProperty(id)) {
                dependency = dependencyTracking[id];
                if ((this._evalDelayed && dependency._target._notificationIsPending) || dependency._target.hasChanged(dependency._version)) {
                    return true;
                }
            }
        }
    },
    markDirty: function () {
        // Process "dirty" events if we can handle delayed notifications
        if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
            this._evalDelayed(false /*isChange*/);
        }
    },
    isActive: function () {
        var state = this[computedState];
        return state.isDirty || state.dependenciesCount > 0;
    },
    respondToChange: function () {
        // Ignore "change" events if we've already scheduled a delayed notification
        if (!this._notificationIsPending) {
            this.evaluatePossiblyAsync();
        } else if (this[computedState].isDirty) {
            this[computedState].isStale = true;
        }
    },
    subscribeToDependency: function (target) {
        if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
            var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
                changeSub = target.subscribe(this.respondToChange, this);
            return {
                _target: target,
                dispose: function () {
                    dirtySub.dispose();
                    changeSub.dispose();
                }
            };
        } else {
            return target.subscribe(this.evaluatePossiblyAsync, this);
        }
    },
    evaluatePossiblyAsync: function () {
        var computedObservable = this,
            throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(this[computedState].evaluationTimeoutInstance);
            this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function () {
                computedObservable.evaluateImmediate(true /*notifyChange*/);
            }, throttleEvaluationTimeout);
        } else if (computedObservable._evalDelayed) {
            computedObservable._evalDelayed(true /*isChange*/);
        } else {
            computedObservable.evaluateImmediate(true /*notifyChange*/);
        }
    },
    evaluateImmediate: function (notifyChange) {
        var computedObservable = this,
            state = computedObservable[computedState],
            disposeWhen = state.disposeWhen,
            changed = false;

        if (state.isBeingEvaluated) {
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
        }

        // Do not evaluate (and possibly capture new dependencies) if disposed
        if (state.isDisposed) {
            return;
        }

        if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
            // See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
            if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
                computedObservable.dispose();
                return;
            }
        } else {
            // It just did return false, so we can stop suppressing now
            state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
        }

        state.isBeingEvaluated = true;
        try {
            changed = this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
        } finally {
            state.isBeingEvaluated = false;
        }

        if (!state.dependenciesCount) {
            computedObservable.dispose();
        }

        return changed;
    },
    evaluateImmediate_CallReadWithDependencyDetection: function (notifyChange) {
        // This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
        // Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
        // which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).

        var computedObservable = this,
            state = computedObservable[computedState],
            changed = false;

        // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
        // Then, during evaluation, we cross off any that are in fact still being used.
        var isInitial = state.pure ? undefined : !state.dependenciesCount,   // If we're evaluating when there are no previous dependencies, it must be the first time
            dependencyDetectionContext = {
                computedObservable: computedObservable,
                disposalCandidates: state.dependencyTracking,
                disposalCount: state.dependenciesCount
            };

        ko.dependencyDetection.begin({
            callbackTarget: dependencyDetectionContext,
            callback: computedBeginDependencyDetectionCallback,
            computed: computedObservable,
            isInitial: isInitial
        });

        state.dependencyTracking = {};
        state.dependenciesCount = 0;

        var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);

        if (computedObservable.isDifferent(state.latestValue, newValue)) {
            if (!state.isSleeping) {
                computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
            }

            state.latestValue = newValue;
            if (DEBUG) computedObservable._latestValue = newValue;

            if (state.isSleeping) {
                computedObservable.updateVersion();
            } else if (notifyChange) {
                computedObservable["notifySubscribers"](state.latestValue);
            }

            changed = true;
        }

        if (isInitial) {
            computedObservable["notifySubscribers"](state.latestValue, "awake");
        }

        return changed;
    },
    evaluateImmediate_CallReadThenEndDependencyDetection: function (state, dependencyDetectionContext) {
        // This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
        // You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
        // can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
        // overhead of computed evaluation (on V8 at least).

        try {
            var readFunction = state.readFunction;
            return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
        } finally {
            ko.dependencyDetection.end();

            // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
            if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
                ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
            }

            state.isStale = state.isDirty = false;
        }
    },
    peek: function (evaluate) {
        // By default, peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
        // Pass in true to evaluate if needed.
        var state = this[computedState];
        if ((state.isDirty && (evaluate || !state.dependenciesCount)) || (state.isSleeping && this.haveDependenciesChanged())) {
            this.evaluateImmediate();
        }
        return state.latestValue;
    },
    limit: function (limitFunction) {
        // Override the limit function with one that delays evaluation as well
        ko.subscribable['fn'].limit.call(this, limitFunction);
        this._evalIfChanged = function () {
            if (this[computedState].isStale) {
                this.evaluateImmediate();
            } else {
                this[computedState].isDirty = false;
            }
            return this[computedState].latestValue;
        };
        this._evalDelayed = function (isChange) {
            this._limitBeforeChange(this[computedState].latestValue);

            // Mark as dirty
            this[computedState].isDirty = true;
            if (isChange) {
                this[computedState].isStale = true;
            }

            // Pass the observable to the "limit" code, which will evaluate it when
            // it's time to do the notification.
            this._limitChange(this);
        };
    },
    dispose: function () {
        var state = this[computedState];
        if (!state.isSleeping && state.dependencyTracking) {
            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                if (dependency.dispose)
                    dependency.dispose();
            });
        }
        if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
            ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
        }
        state.dependencyTracking = null;
        state.dependenciesCount = 0;
        state.isDisposed = true;
        state.isStale = false;
        state.isDirty = false;
        state.isSleeping = false;
        state.disposeWhenNodeIsRemoved = null;
    }
};

var pureComputedOverrides = {
    beforeSubscriptionAdd: function (event) {
        // If asleep, wake up the computed by subscribing to any dependencies.
        var computedObservable = this,
            state = computedObservable[computedState];
        if (!state.isDisposed && state.isSleeping && event == 'change') {
            state.isSleeping = false;
            if (state.isStale || computedObservable.haveDependenciesChanged()) {
                state.dependencyTracking = null;
                state.dependenciesCount = 0;
                if (computedObservable.evaluateImmediate()) {
                    computedObservable.updateVersion();
                }
            } else {
                // First put the dependencies in order
                var dependeciesOrder = [];
                ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                    dependeciesOrder[dependency._order] = id;
                });
                // Next, subscribe to each one
                ko.utils.arrayForEach(dependeciesOrder, function (id, order) {
                    var dependency = state.dependencyTracking[id],
                        subscription = computedObservable.subscribeToDependency(dependency._target);
                    subscription._order = order;
                    subscription._version = dependency._version;
                    state.dependencyTracking[id] = subscription;
                });
            }
            if (!state.isDisposed) {     // test since evaluating could trigger disposal
                computedObservable["notifySubscribers"](state.latestValue, "awake");
            }
        }
    },
    afterSubscriptionRemove: function (event) {
        var state = this[computedState];
        if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                if (dependency.dispose) {
                    state.dependencyTracking[id] = {
                        _target: dependency._target,
                        _order: dependency._order,
                        _version: dependency._version
                    };
                    dependency.dispose();
                }
            });
            state.isSleeping = true;
            this["notifySubscribers"](undefined, "asleep");
        }
    },
    getVersion: function () {
        // Because a pure computed is not automatically updated while it is sleeping, we can't
        // simply return the version number. Instead, we check if any of the dependencies have
        // changed and conditionally re-evaluate the computed observable.
        var state = this[computedState];
        if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
            this.evaluateImmediate();
        }
        return ko.subscribable['fn'].getVersion.call(this);
    }
};

var deferEvaluationOverrides = {
    beforeSubscriptionAdd: function (event) {
        // This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
        if (event == 'change' || event == 'beforeChange') {
            this.peek();
        }
    }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.computed constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
}

// Set the proto chain values for ko.hasPrototype
var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
ko.computed[protoProp] = ko.observable;
computedFn[protoProp] = ko.computed;

ko.isComputed = function (instance) {
    return ko.hasPrototype(instance, ko.computed);
};

ko.isPureComputed = function (instance) {
    return ko.hasPrototype(instance, ko.computed)
        && instance[computedState] && instance[computedState].pure;
};

ko.exportSymbol('computed', ko.computed);
ko.exportSymbol('dependentObservable', ko.computed);    // export ko.dependentObservable for backwards compatibility (1.x)
ko.exportSymbol('isComputed', ko.isComputed);
ko.exportSymbol('isPureComputed', ko.isPureComputed);
ko.exportSymbol('computed.fn', computedFn);
ko.exportProperty(computedFn, 'peek', computedFn.peek);
ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);

ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
    if (typeof evaluatorFunctionOrOptions === 'function') {
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure':true});
    } else {
        evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);   // make a copy of the parameter object
        evaluatorFunctionOrOptions['pure'] = true;
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
    }
}
ko.exportSymbol('pureComputed', ko.pureComputed);

(function() {
    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

    ko.toJS = function(rootObject) {
        if (arguments.length == 0)
            throw new Error("When calling ko.toJS, pass the object you want to convert.");

        // We just unwrap everything at every level in the object graph
        return mapJsObjectGraph(rootObject, function(valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                valueToMap = valueToMap();
            return valueToMap;
        });
    };

    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
        var plainJavaScriptObject = ko.toJS(rootObject);
        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
    };

    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
        visitedObjects = visitedObjects || new objectLookup();

        rootObject = mapInputCallback(rootObject);
        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof RegExp)) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
        if (!canHaveProperties)
            return rootObject;

        var outputProperties = rootObject instanceof Array ? [] : {};
        visitedObjects.save(rootObject, outputProperties);

        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (typeof propertyValue) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                case "object":
                case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
                        ? previouslyMappedValue
                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
            }
        });

        return outputProperties;
    }

    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);

            // For arrays, also respect toJSON property for custom mappings (fixes #278)
            if (typeof rootObject['toJSON'] == 'function')
                visitorCallback('toJSON');
        } else {
            for (var propertyName in rootObject) {
                visitorCallback(propertyName);
            }
        }
    };

    function objectLookup() {
        this.keys = [];
        this.values = [];
    };

    objectLookup.prototype = {
        constructor: objectLookup,
        save: function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            if (existingIndex >= 0)
                this.values[existingIndex] = value;
            else {
                this.keys.push(key);
                this.values.push(value);
            }
        },
        get: function(key) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
        }
    };
})();

ko.exportSymbol('toJS', ko.toJS);
ko.exportSymbol('toJSON', ko.toJSON);
(function () {
    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
    ko.selectExtensions = {
        readValue : function(element) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7
                        ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text)
                        : element.value;
                case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                default:
                    return element.value;
            }
        },

        writeValue: function(element, value, allowUnset) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    switch(typeof value) {
                        case "string":
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                delete element[hasDomDataExpandoProperty];
                            }
                            element.value = value;
                            break;
                        default:
                            // Store arbitrary object using DomData
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                            element[hasDomDataExpandoProperty] = true;

                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                            element.value = typeof value === "number" ? value : "";
                            break;
                    }
                    break;
                case 'select':
                    if (value === "" || value === null)       // A blank string or null value will select the caption
                        value = undefined;
                    var selection = -1;
                    for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
                        optionValue = ko.selectExtensions.readValue(element.options[i]);
                        // Include special check to handle selecting a caption with a blank string value
                        if (optionValue == value || (optionValue == "" && value === undefined)) {
                            selection = i;
                            break;
                        }
                    }
                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
                        element.selectedIndex = selection;
                    }
                    break;
                default:
                    if ((value === null) || (value === undefined))
                        value = "";
                    element.value = value;
                    break;
            }
        }
    };
})();

ko.exportSymbol('selectExtensions', ko.selectExtensions);
ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
ko.expressionRewriting = (function () {
    var javaScriptReservedWords = ["true", "false", "null", "undefined"];

    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
    // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

    function getWriteableValue(expression) {
        if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
            return false;
        var match = expression.match(javaScriptAssignmentTarget);
        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
    }

    // The following regular expressions will be used to split an object-literal string into tokens

        // These two match strings, either with double quotes or single quotes
    var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
        stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
        // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
        // as a regular expression (this is handled by the parsing loop below).
        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
        // These characters have special meaning to the parser and must not appear in the middle of a
        // token, except as part of a string.
        specials = ',"\'{}()/:[\\]',
        // Match text (at least two characters) that does not contain any of the above special characters,
        // although some of the special characters are allowed to start it (all but the colon and comma).
        // The text can contain spaces, but leading or trailing spaces are skipped.
        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
        // Match any non-space character not matched already. This will match colons and commas, since they're
        // not matched by "everyThingElse", but will also match any other single character that wasn't already
        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
        oneNotSpace = '[^\\s]',

        // Create the actual regular expression by or-ing the above strings. The order is important.
        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),

        // Match end of previous token to determine whether a slash is a division or regex.
        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
        keywordRegexLookBehind = {'in':1,'return':1,'typeof':1};

    function parseObjectLiteral(objectLiteralString) {
        // Trim leading and trailing spaces from the string
        var str = ko.utils.stringTrim(objectLiteralString);

        // Trim braces '{' surrounding the whole object literal
        if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

        // Split into tokens
        var result = [], toks = str.match(bindingToken), key, values = [], depth = 0;

        if (toks) {
            // Append a comma so that we don't need a separate code block to deal with the last item
            toks.push(',');

            for (var i = 0, tok; tok = toks[i]; ++i) {
                var c = tok.charCodeAt(0);
                // A comma signals the end of a key/value pair if depth is zero
                if (c === 44) { // ","
                    if (depth <= 0) {
                        result.push((key && values.length) ? {key: key, value: values.join('')} : {'unknown': key || values.join('')});
                        key = depth = 0;
                        values = [];
                        continue;
                    }
                // Simply skip the colon that separates the name and value
                } else if (c === 58) { // ":"
                    if (!depth && !key && values.length === 1) {
                        key = values.pop();
                        continue;
                    }
                // A set of slashes is initially matched as a regular expression, but could be division
                } else if (c === 47 && i && tok.length > 1) {  // "/"
                    // Look at the end of the previous token to determine if the slash is actually division
                    var match = toks[i-1].match(divisionLookBehind);
                    if (match && !keywordRegexLookBehind[match[0]]) {
                        // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                        str = str.substr(str.indexOf(tok) + 1);
                        toks = str.match(bindingToken);
                        toks.push(',');
                        i = -1;
                        // Continue with just the slash
                        tok = '/';
                    }
                // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
                } else if (c === 40 || c === 123 || c === 91) { // '(', '{', '['
                    ++depth;
                } else if (c === 41 || c === 125 || c === 93) { // ')', '}', ']'
                    --depth;
                // The key will be the first token; if it's a string, trim the quotes
                } else if (!key && !values.length && (c === 34 || c === 39)) { // '"', "'"
                    tok = tok.slice(1, -1);
                }
                values.push(tok);
            }
        }
        return result;
    }

    // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
    var twoWayBindings = {};

    function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
        bindingOptions = bindingOptions || {};

        function processKeyValue(key, val) {
            var writableVal;
            function callPreprocessHook(obj) {
                return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
            }
            if (!bindingParams) {
                if (!callPreprocessHook(ko['getBindingHandler'](key)))
                    return;

                if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                    // For two-way bindings, provide a write method in case the value
                    // isn't a writable observable.
                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                }
            }
            // Values are wrapped in a function so that each value can be accessed independently
            if (makeValueAccessors) {
                val = 'function(){return ' + val + ' }';
            }
            resultStrings.push("'" + key + "':" + val);
        }

        var resultStrings = [],
            propertyAccessorResultStrings = [],
            makeValueAccessors = bindingOptions['valueAccessors'],
            bindingParams = bindingOptions['bindingParams'],
            keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ?
                parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

        ko.utils.arrayForEach(keyValueArray, function(keyValue) {
            processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
        });

        if (propertyAccessorResultStrings.length)
            processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

        return resultStrings.join(",");
    }

    return {
        bindingRewriteValidators: [],

        twoWayBindings: twoWayBindings,

        parseObjectLiteral: parseObjectLiteral,

        preProcessBindings: preProcessBindings,

        keyValueArrayContainsKey: function(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++)
                if (keyValueArray[i]['key'] == key)
                    return true;
            return false;
        },

        // Internal, private KO utility for updating model properties from within bindings
        // property:            If the property being updated is (or might be) an observable, pass it here
        //                      If it turns out to be a writable observable, it will be written to directly
        // allBindings:         An object with a get method to retrieve bindings in the current execution context.
        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        // value:               The value to be written
        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
        //                      it is !== existing value on that writable observable
        writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
            if (!property || !ko.isObservable(property)) {
                var propWriters = allBindings.get('_ko_property_writers');
                if (propWriters && propWriters[key])
                    propWriters[key](value);
            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                property(value);
            }
        }
    };
})();

ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

// Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
// all bindings could use an official 'property writer' API without needing to declare that they might). However,
// since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
// as an internal implementation detail in the short term.
// For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
// undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
// public API, and we reserve the right to remove it at any time if we create a real public property writers API.
ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
(function() {
    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
    // of that virtual hierarchy
    //
    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
    // without having to scatter special cases all over the binding and templating code.

    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
    // So, use node.text where available, and node.nodeValue elsewhere
    var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

    function isStartComment(node) {
        return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function isEndComment(node) {
        return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function getVirtualChildren(startComment, allowUnbalanced) {
        var currentNode = startComment;
        var depth = 1;
        var children = [];
        while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
                depth--;
                if (depth === 0)
                    return children;
            }

            children.push(currentNode);

            if (isStartComment(currentNode))
                depth++;
        }
        if (!allowUnbalanced)
            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
        return null;
    }

    function getMatchingEndComment(startComment, allowUnbalanced) {
        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
        if (allVirtualChildren) {
            if (allVirtualChildren.length > 0)
                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
        } else
            return null; // Must have no matching end comment, and allowUnbalanced is true
    }

    function getUnbalancedChildTags(node) {
        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
        var childNode = node.firstChild, captureRemaining = null;
        if (childNode) {
            do {
                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                    captureRemaining.push(childNode);
                else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
                        childNode = matchingEndComment;
                    else
                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                }
            } while (childNode = childNode.nextSibling);
        }
        return captureRemaining;
    }

    ko.virtualElements = {
        allowedBindings: {},

        childNodes: function(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
        },

        emptyNode: function(node) {
            if (!isStartComment(node))
                ko.utils.emptyDomNode(node);
            else {
                var virtualChildren = ko.virtualElements.childNodes(node);
                for (var i = 0, j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
            }
        },

        setDomNodeChildren: function(node, childNodes) {
            if (!isStartComment(node))
                ko.utils.setDomNodeChildren(node, childNodes);
            else {
                ko.virtualElements.emptyNode(node);
                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                for (var i = 0, j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
            }
        },

        prepend: function(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
                if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                else
                    containerNode.appendChild(nodeToPrepend);
            } else {
                // Start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
        },

        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
                ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
                // Insert after insertion point
                if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                else
                    containerNode.appendChild(nodeToInsert);
            } else {
                // Children of start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
        },

        firstChild: function(node) {
            if (!isStartComment(node))
                return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        nextSibling: function(node) {
            if (isStartComment(node))
                node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        hasBindingValue: isStartComment,

        virtualNodeBindingValue: function(node) {
            var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
            return regexMatch ? regexMatch[1] : null;
        },

        normaliseVirtualElementDomStructure: function(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                return;

            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.
            var childNode = elementVerified.firstChild;
            if (childNode) {
                do {
                    if (childNode.nodeType === 1) {
                        var unbalancedTags = getUnbalancedChildTags(childNode);
                        if (unbalancedTags) {
                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                            var nodeToInsertBefore = childNode.nextSibling;
                            for (var i = 0; i < unbalancedTags.length; i++) {
                                if (nodeToInsertBefore)
                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                                else
                                    elementVerified.appendChild(unbalancedTags[i]);
                            }
                        }
                    }
                } while (childNode = childNode.nextSibling);
            }
        }
    };
})();
ko.exportSymbol('virtualElements', ko.virtualElements);
ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
(function() {
    var defaultBindingAttributeName = "data-bind";

    ko.bindingProvider = function() {
        this.bindingCache = {};
    };

    ko.utils.extend(ko.bindingProvider.prototype, {
        'nodeHasBindings': function(node) {
            switch (node.nodeType) {
                case 1: // Element
                    return node.getAttribute(defaultBindingAttributeName) != null
                        || ko.components['getComponentNameForNode'](node);
                case 8: // Comment node
                    return ko.virtualElements.hasBindingValue(node);
                default: return false;
            }
        },

        'getBindings': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ false);
        },

        'getBindingAccessors': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ true);
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'getBindingsString': function(node, bindingContext) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                default: return null;
            }
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'parseBindingsString': function(bindingsString, bindingContext, node, options) {
            try {
                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                return bindingFunction(bindingContext, node);
            } catch (ex) {
                ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                throw ex;
            }
        }
    });

    ko.bindingProvider['instance'] = new ko.bindingProvider();

    function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
        var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
        return cache[cacheKey]
            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
    }

    function createBindingsStringEvaluator(bindingsString, options) {
        // Build the source for a function that evaluates "expression"
        // For each scope variable, add an extra level of "with" nesting
        // Example result: with(sc1) { with(sc0) { return (expression) } }
        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
        return new Function("$context", "$element", functionBody);
    }
})();

ko.exportSymbol('bindingProvider', ko.bindingProvider);
(function () {
    ko.bindingHandlers = {};

    // The following element types will not be recursed into during binding.
    var bindingDoesNotRecurseIntoElementTypes = {
        // Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
        // because it's unexpected and a potential XSS issue.
        // Also bindings should not operate on <template> elements since this breaks in Internet Explorer
        // and because such elements' contents are always intended to be bound in a different context
        // from where they appear in the document.
        'script': true,
        'textarea': true,
        'template': true
    };

    // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
    ko['getBindingHandler'] = function(bindingKey) {
        return ko.bindingHandlers[bindingKey];
    };

    // The ko.bindingContext constructor is only called directly to create the root context. For child
    // contexts, use bindingContext.createChildContext or bindingContext.extend.
    ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback, options) {

        // The binding context object includes static properties for the current, parent, and root view models.
        // If a view model is actually stored in an observable, the corresponding binding context object, and
        // any child contexts, must be updated when the view model is changed.
        function updateContext() {
            // Most of the time, the context will directly get a view model object, but if a function is given,
            // we call the function to retrieve the view model. If the function accesses any observables or returns
            // an observable, the dependency is tracked, and those observables can later cause the binding
            // context to be updated.
            var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

            if (parentContext) {
                // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
                // parent context is updated, this context will also be updated.
                if (parentContext._subscribable)
                    parentContext._subscribable();

                // Copy $root and any custom properties from the parent context
                ko.utils.extend(self, parentContext);

                // Because the above copy overwrites our own properties, we need to reset them.
                self._subscribable = subscribable;
            } else {
                self['$parents'] = [];
                self['$root'] = dataItem;

                // Export 'ko' in the binding context so it will be available in bindings and templates
                // even if 'ko' isn't exported as a global, such as when using an AMD loader.
                // See https://github.com/SteveSanderson/knockout/issues/490
                self['ko'] = ko;
            }
            self['$rawData'] = dataItemOrObservable;
            self['$data'] = dataItem;
            if (dataItemAlias)
                self[dataItemAlias] = dataItem;

            // The extendCallback function is provided when creating a child context or extending a context.
            // It handles the specific actions needed to finish setting up the binding context. Actions in this
            // function could also add dependencies to this binding context.
            if (extendCallback)
                extendCallback(self, parentContext, dataItem);

            return self['$data'];
        }
        function disposeWhen() {
            return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
        }

        var self = this,
            isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
            nodes,
            subscribable;

        if (options && options['exportDependencies']) {
            // The "exportDependencies" option means that the calling code will track any dependencies and re-create
            // the binding context when they change.
            updateContext();
        } else {
            subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

            // At this point, the binding context has been initialized, and the "subscribable" computed observable is
            // subscribed to any observables that were accessed in the process. If there is nothing to track, the
            // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
            // the context object.
            if (subscribable.isActive()) {
                self._subscribable = subscribable;

                // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
                subscribable['equalityComparer'] = null;

                // We need to be able to dispose of this computed observable when it's no longer needed. This would be
                // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
                // we cannot assume that those nodes have any relation to each other. So instead we track any node that
                // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

                // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
                nodes = [];
                subscribable._addNode = function(node) {
                    nodes.push(node);
                    ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
                        ko.utils.arrayRemoveItem(nodes, node);
                        if (!nodes.length) {
                            subscribable.dispose();
                            self._subscribable = subscribable = undefined;
                        }
                    });
                };
            }
        }
    }

    // Extend the binding context hierarchy with a new view model object. If the parent context is watching
    // any observables, the new child context will automatically get a dependency on the parent context.
    // But this does not mean that the $data value of the child context will also get updated. If the child
    // view model also depends on the parent view model, you must provide a function that returns the correct
    // view model on each update.
    ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback, options) {
        return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
            // Extend the context hierarchy by setting the appropriate pointers
            self['$parentContext'] = parentContext;
            self['$parent'] = parentContext['$data'];
            self['$parents'] = (parentContext['$parents'] || []).slice(0);
            self['$parents'].unshift(self['$parent']);
            if (extendCallback)
                extendCallback(self);
        }, options);
    };

    // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
    // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
    // when an observable view model is updated.
    ko.bindingContext.prototype['extend'] = function(properties) {
        // If the parent context references an observable view model, "_subscribable" will always be the
        // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
        return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
            // This "child" context doesn't directly track a parent observable view model,
            // so we need to manually set the $rawData value to match the parent.
            self['$rawData'] = parentContext['$rawData'];
            ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
        });
    };

    ko.bindingContext.prototype.createStaticChildContext = function (dataItemOrAccessor, dataItemAlias) {
        return this['createChildContext'](dataItemOrAccessor, dataItemAlias, null, { "exportDependencies": true });
    };

    // Returns the valueAccesor function for a binding value
    function makeValueAccessor(value) {
        return function() {
            return value;
        };
    }

    // Returns the value of a valueAccessor function
    function evaluateValueAccessor(valueAccessor) {
        return valueAccessor();
    }

    // Given a function that returns bindings, create and return a new object that contains
    // binding value-accessors functions. Each accessor function calls the original function
    // so that it always gets the latest value and all dependencies are captured. This is used
    // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
    function makeAccessorsFromFunction(callback) {
        return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
            return function() {
                return callback()[key];
            };
        });
    }

    // Given a bindings function or object, create and return a new object that contains
    // binding value-accessors functions. This is used by ko.applyBindingsToNode.
    function makeBindingAccessors(bindings, context, node) {
        if (typeof bindings === 'function') {
            return makeAccessorsFromFunction(bindings.bind(null, context, node));
        } else {
            return ko.utils.objectMap(bindings, makeValueAccessor);
        }
    }

    // This function is used if the binding provider doesn't include a getBindingAccessors function.
    // It must be called with 'this' set to the provider instance.
    function getBindingsAndMakeAccessors(node, context) {
        return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
    }

    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
        var validator = ko.virtualElements.allowedBindings[bindingName];
        if (!validator)
            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
    }

    function applyBindingsToDescendantsInternal (bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
        var currentChild,
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
            provider = ko.bindingProvider['instance'],
            preprocessNode = provider['preprocessNode'];

        // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
        // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
        // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
        // trigger insertion of <template> contents at that point in the document.
        if (preprocessNode) {
            while (currentChild = nextInQueue) {
                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                preprocessNode.call(provider, currentChild);
            }
            // Reset nextInQueue for the next loop
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
        }

        while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
        }
    }

    function applyBindingsToNodeAndDescendantsInternal (bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
        var shouldBindDescendants = true;

        // Perf optimisation: Apply bindings only if...
        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
        var isElement = (nodeVerified.nodeType === 1);
        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
        if (shouldApplyBindings)
            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

        if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
        }
    }

    var boundElementDomDataKey = ko.utils.domData.nextKey();


    function topologicalSortBindings(bindings) {
        // Depth-first sort
        var result = [],                // The list of key/handler pairs that we will return
            bindingsConsidered = {},    // A temporary record of which bindings are already in 'result'
            cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
        ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
            if (!bindingsConsidered[bindingKey]) {
                var binding = ko['getBindingHandler'](bindingKey);
                if (binding) {
                    // First add dependencies (if any) of the current binding
                    if (binding['after']) {
                        cyclicDependencyStack.push(bindingKey);
                        ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
                            if (bindings[bindingDependencyKey]) {
                                if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                                    throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                                } else {
                                    pushBinding(bindingDependencyKey);
                                }
                            }
                        });
                        cyclicDependencyStack.length--;
                    }
                    // Next add the current binding
                    result.push({ key: bindingKey, handler: binding });
                }
                bindingsConsidered[bindingKey] = true;
            }
        });

        return result;
    }

    function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
        // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
        var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
        if (!sourceBindings) {
            if (alreadyBound) {
                throw Error("You cannot apply bindings multiple times to the same element.");
            }
            ko.utils.domData.set(node, boundElementDomDataKey, true);
        }

        // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
        // we can easily recover it just by scanning up the node's ancestors in the DOM
        // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
        if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
            ko.storedBindingContextForNode(node, bindingContext);

        // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
        var bindings;
        if (sourceBindings && typeof sourceBindings !== 'function') {
            bindings = sourceBindings;
        } else {
            var provider = ko.bindingProvider['instance'],
                getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

            // Get the binding from the provider within a computed observable so that we can update the bindings whenever
            // the binding context is updated or if the binding provider accesses observables.
            var bindingsUpdater = ko.dependentObservable(
                function() {
                    bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                    // Register a dependency on the binding context to support observable view models.
                    if (bindings && bindingContext._subscribable)
                        bindingContext._subscribable();
                    return bindings;
                },
                null, { disposeWhenNodeIsRemoved: node }
            );

            if (!bindings || !bindingsUpdater.isActive())
                bindingsUpdater = null;
        }

        var bindingHandlerThatControlsDescendantBindings;
        if (bindings) {
            // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
            // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
            // the latest binding value and registers a dependency on the binding updater.
            var getValueAccessor = bindingsUpdater
                ? function(bindingKey) {
                    return function() {
                        return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                    };
                } : function(bindingKey) {
                    return bindings[bindingKey];
                };

            // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
            function allBindings() {
                return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
            }
            // The following is the 3.x allBindings API
            allBindings['get'] = function(key) {
                return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
            };
            allBindings['has'] = function(key) {
                return key in bindings;
            };

            // First put the bindings into the right order
            var orderedBindings = topologicalSortBindings(bindings);

            // Go through the sorted bindings, calling init and update for each
            ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
                // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
                // so bindingKeyAndHandler.handler will always be nonnull.
                var handlerInitFn = bindingKeyAndHandler.handler["init"],
                    handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                    bindingKey = bindingKeyAndHandler.key;

                if (node.nodeType === 8) {
                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
                }

                try {
                    // Run init, ignoring any dependencies
                    if (typeof handlerInitFn == "function") {
                        ko.dependencyDetection.ignore(function() {
                            var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

                            // If this binding handler claims to control descendant bindings, make a note of this
                            if (initResult && initResult['controlsDescendantBindings']) {
                                if (bindingHandlerThatControlsDescendantBindings !== undefined)
                                    throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                bindingHandlerThatControlsDescendantBindings = bindingKey;
                            }
                        });
                    }

                    // Run update in its own computed wrapper
                    if (typeof handlerUpdateFn == "function") {
                        ko.dependentObservable(
                            function() {
                                handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                            },
                            null,
                            { disposeWhenNodeIsRemoved: node }
                        );
                    }
                } catch (ex) {
                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                    throw ex;
                }
            });
        }

        return {
            'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
        };
    };

    var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
    ko.storedBindingContextForNode = function (node, bindingContext) {
        if (arguments.length == 2) {
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
            if (bindingContext._subscribable)
                bindingContext._subscribable._addNode(node);
        } else {
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
        }
    }

    function getBindingContext(viewModelOrBindingContext) {
        return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
            ? viewModelOrBindingContext
            : new ko.bindingContext(viewModelOrBindingContext);
    }

    ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
        return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
    };

    ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
        var context = getBindingContext(viewModelOrBindingContext);
        return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
    };

    ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
            applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
        // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
        if (!jQueryInstance && window['jQuery']) {
            jQueryInstance = window['jQuery'];
        }

        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

        applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    // Retrieving binding context from arbitrary nodes
    ko.contextFor = function(node) {
        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
        switch (node.nodeType) {
            case 1:
            case 8:
                var context = ko.storedBindingContextForNode(node);
                if (context) return context;
                if (node.parentNode) return ko.contextFor(node.parentNode);
                break;
        }
        return undefined;
    };
    ko.dataFor = function(node) {
        var context = ko.contextFor(node);
        return context ? context['$data'] : undefined;
    };

    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
    ko.exportSymbol('applyBindings', ko.applyBindings);
    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
    ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
    ko.exportSymbol('contextFor', ko.contextFor);
    ko.exportSymbol('dataFor', ko.dataFor);
})();
(function(undefined) {
    var loadingSubscribablesCache = {}, // Tracks component loads that are currently in flight
        loadedDefinitionsCache = {};    // Tracks component loads that have already completed

    ko.components = {
        get: function(componentName, callback) {
            var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
            if (cachedDefinition) {
                // It's already loaded and cached. Reuse the same definition object.
                // Note that for API consistency, even cache hits complete asynchronously by default.
                // You can bypass this by putting synchronous:true on your component config.
                if (cachedDefinition.isSynchronousComponent) {
                    ko.dependencyDetection.ignore(function() { // See comment in loaderRegistryBehaviors.js for reasoning
                        callback(cachedDefinition.definition);
                    });
                } else {
                    ko.tasks.schedule(function() { callback(cachedDefinition.definition); });
                }
            } else {
                // Join the loading process that is already underway, or start a new one.
                loadComponentAndNotify(componentName, callback);
            }
        },

        clearCachedDefinition: function(componentName) {
            delete loadedDefinitionsCache[componentName];
        },

        _getFirstResultFromLoaders: getFirstResultFromLoaders
    };

    function getObjectOwnProperty(obj, propName) {
        return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
    }

    function loadComponentAndNotify(componentName, callback) {
        var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
            completedAsync;
        if (!subscribable) {
            // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
            subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
            subscribable.subscribe(callback);

            beginLoadingComponent(componentName, function(definition, config) {
                var isSynchronousComponent = !!(config && config['synchronous']);
                loadedDefinitionsCache[componentName] = { definition: definition, isSynchronousComponent: isSynchronousComponent };
                delete loadingSubscribablesCache[componentName];

                // For API consistency, all loads complete asynchronously. However we want to avoid
                // adding an extra task schedule if it's unnecessary (i.e., the completion is already
                // async).
                //
                // You can bypass the 'always asynchronous' feature by putting the synchronous:true
                // flag on your component configuration when you register it.
                if (completedAsync || isSynchronousComponent) {
                    // Note that notifySubscribers ignores any dependencies read within the callback.
                    // See comment in loaderRegistryBehaviors.js for reasoning
                    subscribable['notifySubscribers'](definition);
                } else {
                    ko.tasks.schedule(function() {
                        subscribable['notifySubscribers'](definition);
                    });
                }
            });
            completedAsync = true;
        } else {
            subscribable.subscribe(callback);
        }
    }

    function beginLoadingComponent(componentName, callback) {
        getFirstResultFromLoaders('getConfig', [componentName], function(config) {
            if (config) {
                // We have a config, so now load its definition
                getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
                    callback(definition, config);
                });
            } else {
                // The component has no config - it's unknown to all the loaders.
                // Note that this is not an error (e.g., a module loading error) - that would abort the
                // process and this callback would not run. For this callback to run, all loaders must
                // have confirmed they don't know about this component.
                callback(null, null);
            }
        });
    }

    function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
        // On the first call in the stack, start with the full set of loaders
        if (!candidateLoaders) {
            candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
        }

        // Try the next candidate
        var currentCandidateLoader = candidateLoaders.shift();
        if (currentCandidateLoader) {
            var methodInstance = currentCandidateLoader[methodName];
            if (methodInstance) {
                var wasAborted = false,
                    synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
                        if (wasAborted) {
                            callback(null);
                        } else if (result !== null) {
                            // This candidate returned a value. Use it.
                            callback(result);
                        } else {
                            // Try the next candidate
                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                    }));

                // Currently, loaders may not return anything synchronously. This leaves open the possibility
                // that we'll extend the API to support synchronous return values in the future. It won't be
                // a breaking change, because currently no loader is allowed to return anything except undefined.
                if (synchronousReturnValue !== undefined) {
                    wasAborted = true;

                    // Method to suppress exceptions will remain undocumented. This is only to keep
                    // KO's specs running tidily, since we can observe the loading got aborted without
                    // having exceptions cluttering up the console too.
                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
                        throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                    }
                }
            } else {
                // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
                getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
            }
        } else {
            // No candidates returned a value
            callback(null);
        }
    }

    // Reference the loaders via string name so it's possible for developers
    // to replace the whole array by assigning to ko.components.loaders
    ko.components['loaders'] = [];

    ko.exportSymbol('components', ko.components);
    ko.exportSymbol('components.get', ko.components.get);
    ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
})();
(function(undefined) {

    // The default loader is responsible for two things:
    // 1. Maintaining the default in-memory registry of component configuration objects
    //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
    // 2. Answering requests for components by fetching configuration objects
    //    from that default in-memory registry and resolving them into standard
    //    component definition objects (of the form { createViewModel: ..., template: ... })
    // Custom loaders may override either of these facilities, i.e.,
    // 1. To supply configuration objects from some other source (e.g., conventions)
    // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

    var defaultConfigRegistry = {};

    ko.components.register = function(componentName, config) {
        if (!config) {
            throw new Error('Invalid configuration for ' + componentName);
        }

        if (ko.components.isRegistered(componentName)) {
            throw new Error('Component ' + componentName + ' is already registered');
        }

        defaultConfigRegistry[componentName] = config;
    };

    ko.components.isRegistered = function(componentName) {
        return defaultConfigRegistry.hasOwnProperty(componentName);
    };

    ko.components.unregister = function(componentName) {
        delete defaultConfigRegistry[componentName];
        ko.components.clearCachedDefinition(componentName);
    };

    ko.components.defaultLoader = {
        'getConfig': function(componentName, callback) {
            var result = defaultConfigRegistry.hasOwnProperty(componentName)
                ? defaultConfigRegistry[componentName]
                : null;
            callback(result);
        },

        'loadComponent': function(componentName, config, callback) {
            var errorCallback = makeErrorCallback(componentName);
            possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
                resolveConfig(componentName, errorCallback, loadedConfig, callback);
            });
        },

        'loadTemplate': function(componentName, templateConfig, callback) {
            resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
        },

        'loadViewModel': function(componentName, viewModelConfig, callback) {
            resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
        }
    };

    var createViewModelKey = 'createViewModel';

    // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
    // into the standard component definition format:
    //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
    // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
    // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
    // so this is implemented manually below.
    function resolveConfig(componentName, errorCallback, config, callback) {
        var result = {},
            makeCallBackWhenZero = 2,
            tryIssueCallback = function() {
                if (--makeCallBackWhenZero === 0) {
                    callback(result);
                }
            },
            templateConfig = config['template'],
            viewModelConfig = config['viewModel'];

        if (templateConfig) {
            possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
                    result['template'] = resolvedTemplate;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }

        if (viewModelConfig) {
            possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
                    result[createViewModelKey] = resolvedViewModel;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }
    }

    function resolveTemplate(errorCallback, templateConfig, callback) {
        if (typeof templateConfig === 'string') {
            // Markup - parse it
            callback(ko.utils.parseHtmlFragment(templateConfig));
        } else if (templateConfig instanceof Array) {
            // Assume already an array of DOM nodes - pass through unchanged
            callback(templateConfig);
        } else if (isDocumentFragment(templateConfig)) {
            // Document fragment - use its child nodes
            callback(ko.utils.makeArray(templateConfig.childNodes));
        } else if (templateConfig['element']) {
            var element = templateConfig['element'];
            if (isDomElement(element)) {
                // Element instance - copy its child nodes
                callback(cloneNodesFromTemplateSourceElement(element));
            } else if (typeof element === 'string') {
                // Element ID - find it, then copy its child nodes
                var elemInstance = document.getElementById(element);
                if (elemInstance) {
                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
                } else {
                    errorCallback('Cannot find element with ID ' + element);
                }
            } else {
                errorCallback('Unknown element type: ' + element);
            }
        } else {
            errorCallback('Unknown template value: ' + templateConfig);
        }
    }

    function resolveViewModel(errorCallback, viewModelConfig, callback) {
        if (typeof viewModelConfig === 'function') {
            // Constructor - convert to standard factory function format
            // By design, this does *not* supply componentInfo to the constructor, as the intent is that
            // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
            // be used in factory functions, not viewmodel constructors.
            callback(function (params /*, componentInfo */) {
                return new viewModelConfig(params);
            });
        } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
            // Already a factory function - use it as-is
            callback(viewModelConfig[createViewModelKey]);
        } else if ('instance' in viewModelConfig) {
            // Fixed object instance - promote to createViewModel format for API consistency
            var fixedInstance = viewModelConfig['instance'];
            callback(function (params, componentInfo) {
                return fixedInstance;
            });
        } else if ('viewModel' in viewModelConfig) {
            // Resolved AMD module whose value is of the form { viewModel: ... }
            resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
        } else {
            errorCallback('Unknown viewModel value: ' + viewModelConfig);
        }
    }

    function cloneNodesFromTemplateSourceElement(elemInstance) {
        switch (ko.utils.tagNameLower(elemInstance)) {
            case 'script':
                return ko.utils.parseHtmlFragment(elemInstance.text);
            case 'textarea':
                return ko.utils.parseHtmlFragment(elemInstance.value);
            case 'template':
                // For browsers with proper <template> element support (i.e., where the .content property
                // gives a document fragment), use that document fragment.
                if (isDocumentFragment(elemInstance.content)) {
                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
                }
        }

        // Regular elements such as <div>, and <template> elements on old browsers that don't really
        // understand <template> and just treat it as a regular container
        return ko.utils.cloneNodes(elemInstance.childNodes);
    }

    function isDomElement(obj) {
        if (window['HTMLElement']) {
            return obj instanceof HTMLElement;
        } else {
            return obj && obj.tagName && obj.nodeType === 1;
        }
    }

    function isDocumentFragment(obj) {
        if (window['DocumentFragment']) {
            return obj instanceof DocumentFragment;
        } else {
            return obj && obj.nodeType === 11;
        }
    }

    function possiblyGetConfigFromAmd(errorCallback, config, callback) {
        if (typeof config['require'] === 'string') {
            // The config is the value of an AMD module
            if (amdRequire || window['require']) {
                (amdRequire || window['require'])([config['require']], callback);
            } else {
                errorCallback('Uses require, but no AMD loader is present');
            }
        } else {
            callback(config);
        }
    }

    function makeErrorCallback(componentName) {
        return function (message) {
            throw new Error('Component \'' + componentName + '\': ' + message);
        };
    }

    ko.exportSymbol('components.register', ko.components.register);
    ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
    ko.exportSymbol('components.unregister', ko.components.unregister);

    // Expose the default loader so that developers can directly ask it for configuration
    // or to resolve configuration
    ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

    // By default, the default loader is the only registered component loader
    ko.components['loaders'].push(ko.components.defaultLoader);

    // Privately expose the underlying config registry for use in old-IE shim
    ko.components._allRegisteredComponents = defaultConfigRegistry;
})();
(function (undefined) {
    // Overridable API for determining which component name applies to a given node. By overriding this,
    // you can for example map specific tagNames to components that are not preregistered.
    ko.components['getComponentNameForNode'] = function(node) {
        var tagNameLower = ko.utils.tagNameLower(node);
        if (ko.components.isRegistered(tagNameLower)) {
            // Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
            if (tagNameLower.indexOf('-') != -1 || ('' + node) == "[object HTMLUnknownElement]" || (ko.utils.ieVersion <= 8 && node.tagName === tagNameLower)) {
                return tagNameLower;
            }
        }
    };

    ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
        // Determine if it's really a custom element matching a component
        if (node.nodeType === 1) {
            var componentName = ko.components['getComponentNameForNode'](node);
            if (componentName) {
                // It does represent a component, so add a component binding for it
                allBindings = allBindings || {};

                if (allBindings['component']) {
                    // Avoid silently overwriting some other 'component' binding that may already be on the element
                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
                }

                var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

                allBindings['component'] = valueAccessors
                    ? function() { return componentBindingValue; }
                    : componentBindingValue;
            }
        }

        return allBindings;
    }

    var nativeBindingProviderInstance = new ko.bindingProvider();

    function getComponentParamsFromCustomElement(elem, bindingContext) {
        var paramsAttribute = elem.getAttribute('params');

        if (paramsAttribute) {
            var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
                rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
                    return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
                }),
                result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
                    var paramValue = paramValueComputed.peek();
                    // Does the evaluation of the parameter value unwrap any observables?
                    if (!paramValueComputed.isActive()) {
                        // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
                        // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
                        return paramValue;
                    } else {
                        // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
                        // level of observability, and any inner (resulting model value) level of observability.
                        // This means the component doesn't have to worry about multiple unwrapping. If the value is a
                        // writable observable, the computed will also be writable and pass the value on to the observable.
                        return ko.computed({
                            'read': function() {
                                return ko.utils.unwrapObservable(paramValueComputed());
                            },
                            'write': ko.isWriteableObservable(paramValue) && function(value) {
                                paramValueComputed()(value);
                            },
                            disposeWhenNodeIsRemoved: elem
                        });
                    }
                });

            // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
            // This is in case the developer wants to react to outer (binding) observability separately from inner
            // (model value) observability, or in case the model value observable has subobservables.
            if (!result.hasOwnProperty('$raw')) {
                result['$raw'] = rawParamComputedValues;
            }

            return result;
        } else {
            // For consistency, absence of a "params" attribute is treated the same as the presence of
            // any empty one. Otherwise component viewmodels need special code to check whether or not
            // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
            return { '$raw': {} };
        }
    }

    // --------------------------------------------------------------------------------
    // Compatibility code for older (pre-HTML5) IE browsers

    if (ko.utils.ieVersion < 9) {
        // Whenever you preregister a component, enable it as a custom element in the current document
        ko.components['register'] = (function(originalFunction) {
            return function(componentName) {
                document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
                return originalFunction.apply(this, arguments);
            }
        })(ko.components['register']);

        // Whenever you create a document fragment, enable all preregistered component names as custom elements
        // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
        document.createDocumentFragment = (function(originalFunction) {
            return function() {
                var newDocFrag = originalFunction(),
                    allComponents = ko.components._allRegisteredComponents;
                for (var componentName in allComponents) {
                    if (allComponents.hasOwnProperty(componentName)) {
                        newDocFrag.createElement(componentName);
                    }
                }
                return newDocFrag;
            };
        })(document.createDocumentFragment);
    }
})();(function(undefined) {

    var componentLoadingOperationUniqueId = 0;

    ko.bindingHandlers['component'] = {
        'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
            var currentViewModel,
                currentLoadingOperationId,
                disposeAssociatedComponentViewModel = function () {
                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                    if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                    }
                    currentViewModel = null;
                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                    currentLoadingOperationId = null;
                },
                originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));

            ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

            ko.computed(function () {
                var value = ko.utils.unwrapObservable(valueAccessor()),
                    componentName, componentParams;

                if (typeof value === 'string') {
                    componentName = value;
                } else {
                    componentName = ko.utils.unwrapObservable(value['name']);
                    componentParams = ko.utils.unwrapObservable(value['params']);
                }

                if (!componentName) {
                    throw new Error('No component name specified');
                }

                var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                ko.components.get(componentName, function(componentDefinition) {
                    // If this is not the current load operation for this element, ignore it.
                    if (currentLoadingOperationId !== loadingOperationId) {
                        return;
                    }

                    // Clean up previous state
                    disposeAssociatedComponentViewModel();

                    // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                    if (!componentDefinition) {
                        throw new Error('Unknown component \'' + componentName + '\'');
                    }
                    cloneTemplateIntoElement(componentName, componentDefinition, element);
                    var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                        childBindingContext = bindingContext['createChildContext'](componentViewModel, /* dataItemAlias */ undefined, function(ctx) {
                            ctx['$component'] = componentViewModel;
                            ctx['$componentTemplateNodes'] = originalChildNodes;
                        });
                    currentViewModel = componentViewModel;
                    ko.applyBindingsToDescendants(childBindingContext, element);
                });
            }, null, { disposeWhenNodeIsRemoved: element });

            return { 'controlsDescendantBindings': true };
        }
    };

    ko.virtualElements.allowedBindings['component'] = true;

    function cloneTemplateIntoElement(componentName, componentDefinition, element) {
        var template = componentDefinition['template'];
        if (!template) {
            throw new Error('Component \'' + componentName + '\' has no template');
        }

        var clonedNodesArray = ko.utils.cloneNodes(template);
        ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
    }

    function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
        var componentViewModelFactory = componentDefinition['createViewModel'];
        return componentViewModelFactory
            ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes })
            : componentParams; // Template-only component
    }

})();
var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
ko.bindingHandlers['attr'] = {
    'update': function(element, valueAccessor, allBindings) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
        ko.utils.objectForEach(value, function(attrName, attrValue) {
            attrValue = ko.utils.unwrapObservable(attrValue);

            // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
            // when someProp is a "no value"-like value (strictly null, false, or undefined)
            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
            var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
            if (toRemove)
                element.removeAttribute(attrName);

            // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
            // property for IE <= 8.
            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                attrName = attrHtmlToJavascriptMap[attrName];
                if (toRemove)
                    element.removeAttribute(attrName);
                else
                    element[attrName] = attrValue;
            } else if (!toRemove) {
                element.setAttribute(attrName, attrValue.toString());
            }

            // Treat "name" specially - although you can think of it as an attribute, it also needs
            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
            // entirely, and there's no strong reason to allow for such casing in HTML.
            if (attrName === "name") {
                ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
            }
        });
    }
};
(function() {

ko.bindingHandlers['checked'] = {
    'after': ['value', 'attr'],
    'init': function (element, valueAccessor, allBindings) {
        var checkedValue = ko.pureComputed(function() {
            // Treat "value" like "checkedValue" when it is included with "checked" binding
            if (allBindings['has']('checkedValue')) {
                return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
            } else if (allBindings['has']('value')) {
                return ko.utils.unwrapObservable(allBindings.get('value'));
            }

            return element.value;
        });

        function updateModel() {
            // This updates the model value from the view value.
            // It runs in response to DOM events (click) and changes in checkedValue.
            var isChecked = element.checked,
                elemValue = useCheckedValue ? checkedValue() : isChecked;

            // When we're first setting up this computed, don't change any model state.
            if (ko.computedContext.isInitial()) {
                return;
            }

            // We can ignore unchecked radio buttons, because some other radio
            // button will be getting checked, and that one can take care of updating state.
            if (isRadio && !isChecked) {
                return;
            }

            var modelValue = ko.dependencyDetection.ignore(valueAccessor);
            if (valueIsArray) {
                var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
                if (oldElemValue !== elemValue) {
                    // When we're responding to the checkedValue changing, and the element is
                    // currently checked, replace the old elem value with the new elem value
                    // in the model array.
                    if (isChecked) {
                        ko.utils.addOrRemoveItem(writableValue, elemValue, true);
                        ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
                    }

                    oldElemValue = elemValue;
                } else {
                    // When we're responding to the user having checked/unchecked a checkbox,
                    // add/remove the element value to the model array.
                    ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
                }
                if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
                    modelValue(writableValue);
                }
            } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
            }
        };

        function updateView() {
            // This updates the view value from the model value.
            // It runs in response to changes in the bound (checked) value.
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (valueIsArray) {
                // When a checkbox is bound to an array, being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
            } else if (isCheckbox) {
                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                element.checked = modelValue;
            } else {
                // For radio buttons, being checked means that the radio button's value corresponds to the model value
                element.checked = (checkedValue() === modelValue);
            }
        };

        var isCheckbox = element.type == "checkbox",
            isRadio = element.type == "radio";

        // Only bind to check boxes and radio buttons
        if (!isCheckbox && !isRadio) {
            return;
        }

        var rawValue = valueAccessor(),
            valueIsArray = isCheckbox && (ko.utils.unwrapObservable(rawValue) instanceof Array),
            rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
            oldElemValue = valueIsArray ? checkedValue() : undefined,
            useCheckedValue = isRadio || valueIsArray;

        // IE 6 won't allow radio buttons to be selected unless they have a name
        if (isRadio && !element.name)
            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });

        // Set up two computeds to update the binding:

        // The first responds to changes in the checkedValue value and to element clicks
        ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
        ko.utils.registerEventHandler(element, "click", updateModel);

        // The second responds to changes in the model value (the one associated with the checked binding)
        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });

        rawValue = undefined;
    }
};
ko.expressionRewriting.twoWayBindings['checked'] = true;

ko.bindingHandlers['checkedValue'] = {
    'update': function (element, valueAccessor) {
        element.value = ko.utils.unwrapObservable(valueAccessor());
    }
};

})();var classesWrittenByBindingKey = '__ko__cssValue';
ko.bindingHandlers['css'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value !== null && typeof value == "object") {
            ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            });
        } else {
            value = ko.utils.stringTrim(String(value || '')); // Make sure we don't try to store or set a non-string value
            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
        }
    }
};
ko.bindingHandlers['enable'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value && element.disabled)
            element.removeAttribute("disabled");
        else if ((!value) && (!element.disabled))
            element.disabled = true;
    }
};

ko.bindingHandlers['disable'] = {
    'update': function (element, valueAccessor) {
        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
    }
};
// For certain common events (currently just 'click'), allow a simplified data-binding syntax
// e.g. click:handler instead of the usual full-length event:{click:handler}
function makeEventHandlerShortcut(eventName) {
    ko.bindingHandlers[eventName] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var newValueAccessor = function () {
                var result = {};
                result[eventName] = valueAccessor();
                return result;
            };
            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
        }
    }
}

ko.bindingHandlers['event'] = {
    'init' : function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var eventsToHandle = valueAccessor() || {};
        ko.utils.objectForEach(eventsToHandle, function(eventName) {
            if (typeof eventName == "string") {
                ko.utils.registerEventHandler(element, eventName, function (event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                        return;

                    try {
                        // Take all the event args, and prefix with the viewmodel
                        var argsForHandler = ko.utils.makeArray(arguments);
                        viewModel = bindingContext['$data'];
                        argsForHandler.unshift(viewModel);
                        handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                        if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                            if (event.preventDefault)
                                event.preventDefault();
                            else
                                event.returnValue = false;
                        }
                    }

                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
                    if (!bubble) {
                        event.cancelBubble = true;
                        if (event.stopPropagation)
                            event.stopPropagation();
                    }
                });
            }
        });
    }
};
// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
ko.bindingHandlers['foreach'] = {
    makeTemplateValueAccessor: function(valueAccessor) {
        return function() {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)
            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
            ko.utils.unwrapObservable(modelValue);
            return {
                'foreach': unwrappedValue['data'],
                'as': unwrappedValue['as'],
                'includeDestroyed': unwrappedValue['includeDestroyed'],
                'afterAdd': unwrappedValue['afterAdd'],
                'beforeRemove': unwrappedValue['beforeRemove'],
                'afterRender': unwrappedValue['afterRender'],
                'beforeMove': unwrappedValue['beforeMove'],
                'afterMove': unwrappedValue['afterMove'],
                'templateEngine': ko.nativeTemplateEngine.instance
            };
        };
    },
    'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
    },
    'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
    }
};
ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['foreach'] = true;
var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
var hasfocusLastValue = '__ko_hasfocusLastValue';
ko.bindingHandlers['hasfocus'] = {
    'init': function(element, valueAccessor, allBindings) {
        var handleElementFocusChange = function(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;
            if ("activeElement" in ownerDoc) {
                var active;
                try {
                    active = ownerDoc.activeElement;
                } catch(e) {
                    // IE9 throws if you access activeElement during page load (see issue #703)
                    active = ownerDoc.body;
                }
                isFocused = (active === element);
            }
            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

            //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
            element[hasfocusLastValue] = isFocused;
            element[hasfocusUpdatingProperty] = false;
        };
        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
    },
    'update': function(element, valueAccessor) {
        var value = !!ko.utils.unwrapObservable(valueAccessor());

        if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
            value ? element.focus() : element.blur();

            // In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
            // Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
            // element was focused already.
            if (!value && element[hasfocusLastValue]) {
                element.ownerDocument.body.focus();
            }

            // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
        }
    }
};
ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
ko.bindingHandlers['html'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};
// Makes a binding like with or if
function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
    ko.bindingHandlers[bindingKey] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var didDisplayOnLastUpdate,
                savedNodes;
            ko.computed(function() {
                var rawValue = valueAccessor(),
                    dataValue = ko.utils.unwrapObservable(rawValue),
                    shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
                    isFirstRender = !savedNodes,
                    needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);

                if (needsRefresh) {
                    // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                        savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                    }

                    if (shouldDisplay) {
                        if (!isFirstRender) {
                            ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                        }
                        ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, rawValue) : bindingContext, element);
                    } else {
                        ko.virtualElements.emptyNode(element);
                    }

                    didDisplayOnLastUpdate = shouldDisplay;
                }
            }, null, { disposeWhenNodeIsRemoved: element });
            return { 'controlsDescendantBindings': true };
        }
    };
    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
    ko.virtualElements.allowedBindings[bindingKey] = true;
}

// Construct the actual binding handlers
makeWithIfBinding('if');
makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
makeWithIfBinding('with', true /* isWith */, false /* isNot */,
    function(bindingContext, dataValue) {
        return bindingContext.createStaticChildContext(dataValue);
    }
);
var captionPlaceholder = {};
ko.bindingHandlers['options'] = {
    'init': function(element) {
        if (ko.utils.tagNameLower(element) !== "select")
            throw new Error("options binding applies only to SELECT elements");

        // Remove all existing <option>s.
        while (element.length > 0) {
            element.remove(0);
        }

        // Ensures that the binding processor doesn't try to bind the options
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindings) {
        function selectedOptions() {
            return ko.utils.arrayFilter(element.options, function (node) { return node.selected; });
        }

        var selectWasPreviouslyEmpty = element.length == 0,
            multiple = element.multiple,
            previousScrollTop = (!selectWasPreviouslyEmpty && multiple) ? element.scrollTop : null,
            unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
            valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
            includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
            arrayToDomNodeChildrenOptions = {},
            captionValue,
            filteredArray,
            previousSelectedValues = [];

        if (!valueAllowUnset) {
            if (multiple) {
                previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
            } else if (element.selectedIndex >= 0) {
                previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
            }
        }

        if (unwrappedArray) {
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // If caption is included, add it to the array
            if (allBindings['has']('optionsCaption')) {
                captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                // If caption value is null or undefined, don't show a caption
                if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                }
            }
        } else {
            // If a falsy value is provided (e.g. null), we'll simply empty the select element
        }

        function applyToObject(object, predicate, defaultValue) {
            var predicateType = typeof predicate;
            if (predicateType == "function")    // Given a function; run it against the data value
                return predicate(object);
            else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                return object[predicate];
            else                                // Given no optionsText arg; use the data value itself
                return defaultValue;
        }

        // The following functions can run at two different times:
        // The first is when the whole array is being updated directly from this binding handler.
        // The second is when an observable value for a specific array entry is updated.
        // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
        var itemUpdate = false;
        function optionForArrayItem(arrayEntry, index, oldOptions) {
            if (oldOptions.length) {
                previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ ko.selectExtensions.readValue(oldOptions[0]) ] : [];
                itemUpdate = true;
            }
            var option = element.ownerDocument.createElement("option");
            if (arrayEntry === captionPlaceholder) {
                ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                ko.selectExtensions.writeValue(option, undefined);
            } else {
                // Apply a value to the option element
                var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                // Apply some text to the option element
                var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                ko.utils.setTextContent(option, optionText);
            }
            return [option];
        }

        // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
        // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
        arrayToDomNodeChildrenOptions['beforeRemove'] =
            function (option) {
                element.removeChild(option);
            };

        function setSelectionCallback(arrayEntry, newOptions) {
            if (itemUpdate && valueAllowUnset) {
                // The model value is authoritative, so make sure its value is the one selected
                // There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
            } else if (previousSelectedValues.length) {
                // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
                // That's why we first added them without selection. Now it's time to set the selection.
                var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

                // If this option was changed from being selected during a single-item update, notify the change
                if (itemUpdate && !isSelected) {
                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                }
            }
        }

        var callback = setSelectionCallback;
        if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
            callback = function(arrayEntry, newOptions) {
                setSelectionCallback(arrayEntry, newOptions);
                ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
            }
        }

        ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

        ko.dependencyDetection.ignore(function () {
            if (valueAllowUnset) {
                // The model value is authoritative, so make sure its value is the one selected
                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
            } else {
                // Determine if the selection has changed as a result of updating the options list
                var selectionChanged;
                if (multiple) {
                    // For a multiple-select box, compare the new selection count to the previous one
                    // But if nothing was selected before, the selection can't have changed
                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                } else {
                    // For a single-select box, compare the current value to the previous value
                    // But if nothing was selected before or nothing is selected now, just look for a change in selection
                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0)
                        ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0])
                        : (previousSelectedValues.length || element.selectedIndex >= 0);
                }

                // Ensure consistency between model value and selected option.
                // If the dropdown was changed so that selection is no longer the same,
                // notify the value or selectedOptions binding.
                if (selectionChanged) {
                    ko.utils.triggerEvent(element, "change");
                }
            }
        });

        // Workaround for IE bug
        ko.utils.ensureSelectElementIsRenderedCorrectly(element);

        if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
            element.scrollTop = previousScrollTop;
    }
};
ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
ko.bindingHandlers['selectedOptions'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(), valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
        });
    },
    'update': function (element, valueAccessor) {
        if (ko.utils.tagNameLower(element) != "select")
            throw new Error("values binding applies only to SELECT elements");

        var newValue = ko.utils.unwrapObservable(valueAccessor()),
            previousScrollTop = element.scrollTop;

        if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                if (node.selected != isSelected) {      // This check prevents flashing of the select element in IE
                    ko.utils.setOptionNodeSelectionState(node, isSelected);
                }
            });
        }

        element.scrollTop = previousScrollTop;
    }
};
ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
ko.bindingHandlers['style'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor() || {});
        ko.utils.objectForEach(value, function(styleName, styleValue) {
            styleValue = ko.utils.unwrapObservable(styleValue);

            if (styleValue === null || styleValue === undefined || styleValue === false) {
                // Empty string removes the value, whereas null/undefined have no effect
                styleValue = "";
            }

            element.style[styleName] = styleValue;
        });
    }
};
ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (typeof valueAccessor() != "function")
            throw new Error("The value for a submit binding must be a function");
        ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();
            try { handlerReturnValue = value.call(bindingContext['$data'], element); }
            finally {
                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
        });
    }
};
ko.bindingHandlers['text'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
        // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        ko.utils.setTextContent(element, valueAccessor());
    }
};
ko.virtualElements.allowedBindings['text'] = true;
(function () {

if (window && window.navigator) {
    var parseVersion = function (matches) {
        if (matches) {
            return parseFloat(matches[1]);
        }
    };

    // Detect various browser versions because some old versions don't fully support the 'input' event
    var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
        userAgent = window.navigator.userAgent,
        safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
        firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
}

// IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
// But it does fire the 'selectionchange' event on many of those, presumably because the
// cursor is moving and that counts as the selection changing. The 'selectionchange' event is
// fired at the document level only and doesn't directly indicate which element changed. We
// set up just one event handler for the document and use 'activeElement' to determine which
// element was changed.
if (ko.utils.ieVersion < 10) {
    var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
        selectionChangeHandlerName = ko.utils.domData.nextKey();
    var selectionChangeHandler = function(event) {
        var target = this.activeElement,
            handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
        if (handler) {
            handler(event);
        }
    };
    var registerForSelectionChangeEvent = function (element, handler) {
        var ownerDoc = element.ownerDocument;
        if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
            ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
            ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
        }
        ko.utils.domData.set(element, selectionChangeHandlerName, handler);
    };
}

ko.bindingHandlers['textInput'] = {
    'init': function (element, valueAccessor, allBindings) {

        var previousElementValue = element.value,
            timeoutHandle,
            elementValueBeforeEvent;

        var updateModel = function (event) {
            clearTimeout(timeoutHandle);
            elementValueBeforeEvent = timeoutHandle = undefined;

            var elementValue = element.value;
            if (previousElementValue !== elementValue) {
                // Provide a way for tests to know exactly which event was processed
                if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
                previousElementValue = elementValue;
                ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
            }
        };

        var deferUpdateModel = function (event) {
            if (!timeoutHandle) {
                // The elementValueBeforeEvent variable is set *only* during the brief gap between an
                // event firing and the updateModel function running. This allows us to ignore model
                // updates that are from the previous state of the element, usually due to techniques
                // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
                elementValueBeforeEvent = element.value;
                var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
                timeoutHandle = ko.utils.setTimeout(handler, 4);
            }
        };

        // IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
        // so we'll make sure all updates are asynchronous
        var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;

        var updateView = function () {
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (modelValue === null || modelValue === undefined) {
                modelValue = '';
            }

            if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                ko.utils.setTimeout(updateView, 4);
                return;
            }

            // Update the element only if the element and model are different. On some browsers, updating the value
            // will move the cursor to the end of the input, which would be bad while the user is typing.
            if (element.value !== modelValue) {
                previousElementValue = modelValue;  // Make sure we ignore events (propertychange) that result from updating the value
                element.value = modelValue;
            }
        };

        var onEvent = function (event, handler) {
            ko.utils.registerEventHandler(element, event, handler);
        };

        if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
            // Provide a way for tests to specify exactly which events are bound
            ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
                if (eventName.slice(0,5) == 'after') {
                    onEvent(eventName.slice(5), deferUpdateModel);
                } else {
                    onEvent(eventName, updateModel);
                }
            });
        } else {
            if (ko.utils.ieVersion < 10) {
                // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
                // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
                // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
                // when using autocomplete, we'll use 'propertychange' for it also.
                onEvent('propertychange', function(event) {
                    if (event.propertyName === 'value') {
                        ieUpdateModel(event);
                    }
                });

                if (ko.utils.ieVersion == 8) {
                    // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
                    // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
                    // events too.
                    onEvent('keyup', updateModel);      // A single keystoke
                    onEvent('keydown', updateModel);    // The first character when a key is held down
                }
                if (ko.utils.ieVersion >= 8) {
                    // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
                    // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
                    // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
                    // can detect all of those except dragging text out of the field, for which we use 'dragend'.
                    // These are also needed in IE8 because of the bug described above.
                    registerForSelectionChangeEvent(element, ieUpdateModel);  // 'selectionchange' covers cut, paste, drop, delete, etc.
                    onEvent('dragend', deferUpdateModel);
                }
            } else {
                // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
                // through the user interface.
                onEvent('input', updateModel);

                if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                    // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
                    // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
                    onEvent('keydown', deferUpdateModel);
                    onEvent('paste', deferUpdateModel);
                    onEvent('cut', deferUpdateModel);
                } else if (operaVersion < 11) {
                    // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
                    // We can try to catch some of those using 'keydown'.
                    onEvent('keydown', deferUpdateModel);
                } else if (firefoxVersion < 4.0) {
                    // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
                    onEvent('DOMAutoComplete', updateModel);

                    // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
                    onEvent('dragdrop', updateModel);       // <3.5
                    onEvent('drop', updateModel);           // 3.5
                }
            }
        }

        // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
        onEvent('change', updateModel);

        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
    }
};
ko.expressionRewriting.twoWayBindings['textInput'] = true;

// textinput is an alias for textInput
ko.bindingHandlers['textinput'] = {
    // preprocess is the only way to set up a full alias
    'preprocess': function (value, name, addBinding) {
        addBinding('textInput', value);
    }
};

})();ko.bindingHandlers['uniqueName'] = {
    'init': function (element, valueAccessor) {
        if (valueAccessor()) {
            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
            ko.utils.setElementName(element, name);
        }
    }
};
ko.bindingHandlers['uniqueName'].currentIndex = 0;
ko.bindingHandlers['value'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
        if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
            ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
            return;
        }

        // Always catch "change" event; possibly other events too if asked
        var eventsToCatch = ["change"];
        var requestedEventsToCatch = allBindings.get("valueUpdate");
        var propertyChangedFired = false;
        var elementValueBeforeEvent = null;

        if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
        }

        var valueUpdateHandler = function() {
            elementValueBeforeEvent = null;
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
        }

        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
            ko.utils.registerEventHandler(element, "focus", function () { propertyChangedFired = false });
            ko.utils.registerEventHandler(element, "blur", function() {
                if (propertyChangedFired) {
                    valueUpdateHandler();
                }
            });
        }

        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;
            if (ko.utils.stringStartsWith(eventName, "after")) {
                handler = function() {
                    // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
                    // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
                    // at the earliest asynchronous opportunity. We store this temporary information so that
                    // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
                    // we can overwrite that model value change with the value the user just typed. Otherwise,
                    // techniques like rateLimit can trigger model changes at critical moments that will
                    // override the user's inputs, causing keystrokes to be lost.
                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                    ko.utils.setTimeout(valueUpdateHandler, 0);
                };
                eventName = eventName.substring("after".length);
            }
            ko.utils.registerEventHandler(element, eventName, handler);
        });

        var updateFromModel = function () {
            var newValue = ko.utils.unwrapObservable(valueAccessor());
            var elementValue = ko.selectExtensions.readValue(element);

            if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                ko.utils.setTimeout(updateFromModel, 0);
                return;
            }

            var valueHasChanged = (newValue !== elementValue);

            if (valueHasChanged) {
                if (ko.utils.tagNameLower(element) === "select") {
                    var allowUnset = allBindings.get('valueAllowUnset');
                    var applyValueAction = function () {
                        ko.selectExtensions.writeValue(element, newValue, allowUnset);
                    };
                    applyValueAction();

                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                        // because you're not allowed to have a model value that disagrees with a visible UI selection.
                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                    } else {
                        // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                        // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                        // to apply the value as well.
                        ko.utils.setTimeout(applyValueAction, 0);
                    }
                } else {
                    ko.selectExtensions.writeValue(element, newValue);
                }
            }
        };

        ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
    },
    'update': function() {} // Keep for backwards compatibility with code that may have wrapped value binding
};
ko.expressionRewriting.twoWayBindings['value'] = true;
ko.bindingHandlers['visible'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");
        if (value && !isCurrentlyVisible)
            element.style.display = "";
        else if ((!value) && isCurrentlyVisible)
            element.style.display = "none";
    }
};
// 'click' is just a shorthand for the usual full-length event:{click:handler}
makeEventHandlerShortcut('click');
// If you want to make a custom template engine,
//
// [1] Inherit from this class (like ko.nativeTemplateEngine does)
// [2] Override 'renderTemplateSource', supplying a function with this signature:
//
//        function (templateSource, bindingContext, options) {
//            // - templateSource.text() is the text of the template you should render
//            // - bindingContext.$data is the data you should pass into the template
//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
//            //     and bindingContext.$root available in the template too
//            // - options gives you access to any other properties set on "data-bind: { template: options }"
//            // - templateDocument is the document object of the template
//            //
//            // Return value: an array of DOM nodes
//        }
//
// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
//
//        function (script) {
//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
//        }
//
//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

ko.templateEngine = function () { };

ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
    throw new Error("Override renderTemplateSource");
};

ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
    throw new Error("Override createJavaScriptEvaluatorBlock");
};

ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem)
            throw new Error("Cannot find template with ID " + template);
        return new ko.templateSources.domElement(elem);
    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
        // Anonymous template
        return new ko.templateSources.anonymousTemplate(template);
    } else
        throw new Error("Unknown template type: " + template);
};

ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
};

ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
    // Skip rewriting if requested
    if (this['allowTemplateRewriting'] === false)
        return true;
    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
};

ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    var rewritten = rewriterCallback(templateSource['text']());
    templateSource['text'](rewritten);
    templateSource['data']("isRewritten", true);
};

ko.exportSymbol('templateEngine', ko.templateEngine);

ko.templateRewriting = (function () {
    var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

    function validateDataBindValuesForRewriting(keyValueArray) {
        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
        for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];
            if (allValidators.hasOwnProperty(key)) {
                var validator = allValidators[key];

                if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                        throw new Error(possibleErrorMessage);
                } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                }
            }
        }
    }

    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
        validateDataBindValuesForRewriting(dataBindKeyValueArray);
        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors':true});

        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
        // extra indirection.
        var applyBindingsToNextSiblingScript =
            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
    }

    return {
        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                }, templateDocument);
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[4], /* tagToRetain: */ arguments[1], /* nodeName: */ arguments[2], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", /* nodeName: */ "#comment", templateEngine);
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
                var nodeToBind = domNode.nextSibling;
                if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                }
            });
        }
    }
})();


// Exported only because it has to be referenced by string lookup from within rewritten template
ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
(function() {
    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
    //
    // Two are provided by default:
    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
    //                                           without reading/writing the actual element text content, since it will be overwritten
    //                                           with the rendered template output.
    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
    // Template sources need to have the following functions:
    //   text() 			- returns the template text from your storage location
    //   text(value)		- writes the supplied template text to your storage location
    //   data(key)			- reads values stored using data(key, value) - see below
    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
    //
    // Optionally, template sources can also have the following functions:
    //   nodes()            - returns a DOM element containing the nodes of this template, where available
    //   nodes(value)       - writes the given DOM element to your storage location
    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
    //
    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

    ko.templateSources = {};

    // ---- ko.templateSources.domElement -----

    // template types
    var templateScript = 1,
        templateTextArea = 2,
        templateTemplate = 3,
        templateElement = 4;

    ko.templateSources.domElement = function(element) {
        this.domElement = element;

        if (element) {
            var tagNameLower = ko.utils.tagNameLower(element);
            this.templateType =
                tagNameLower === "script" ? templateScript :
                tagNameLower === "textarea" ? templateTextArea :
                    // For browsers with proper <template> element support, where the .content property gives a document fragment
                tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate :
                templateElement;
        }
    }

    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
        var elemContentsProperty = this.templateType === templateScript ? "text"
                                 : this.templateType === templateTextArea ? "value"
                                 : "innerHTML";

        if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
        } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML")
                ko.utils.setHtml(this.domElement, valueToWrite);
            else
                this.domElement[elemContentsProperty] = valueToWrite;
        }
    };

    var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
        if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
        } else {
            ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
        }
    };

    var templatesDomDataKey = ko.utils.domData.nextKey();
    function getTemplateDomData(element) {
        return ko.utils.domData.get(element, templatesDomDataKey) || {};
    }
    function setTemplateDomData(element, data) {
        ko.utils.domData.set(element, templatesDomDataKey, data);
    }

    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
        var element = this.domElement;
        if (arguments.length == 0) {
            var templateData = getTemplateDomData(element),
                containerData = templateData.containerData;
            return containerData || (
                this.templateType === templateTemplate ? element.content :
                this.templateType === templateElement ? element :
                undefined);
        } else {
            var valueToWrite = arguments[0];
            setTemplateDomData(element, {containerData: valueToWrite});
        }
    };

    // ---- ko.templateSources.anonymousTemplate -----
    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

    ko.templateSources.anonymousTemplate = function(element) {
        this.domElement = element;
    }
    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
    ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = getTemplateDomData(this.domElement);
            if (templateData.textData === undefined && templateData.containerData)
                templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
        } else {
            var valueToWrite = arguments[0];
            setTemplateDomData(this.domElement, {textData: valueToWrite});
        }
    };

    ko.exportSymbol('templateSources', ko.templateSources);
    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
})();
(function () {
    var _templateEngine;
    ko.setTemplateEngine = function (templateEngine) {
        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
            throw new Error("templateEngine must inherit from ko.templateEngine");
        _templateEngine = templateEngine;
    }

    function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            action(node, nextInQueue);
        }
    }

    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

        if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0],
                lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                parentNode = firstNode.parentNode,
                provider = ko.bindingProvider['instance'],
                preprocessNode = provider['preprocessNode'];

            if (preprocessNode) {
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
                    var nodePreviousSibling = node.previousSibling;
                    var newNodes = preprocessNode.call(provider, node);
                    if (newNodes) {
                        if (node === firstNode)
                            firstNode = newNodes[0] || nextNodeInRange;
                        if (node === lastNode)
                            lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                    }
                });

                // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
                // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
                // first node needs to be in the array).
                continuousNodeArray.length = 0;
                if (!firstNode) { // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                    return;
                }
                if (firstNode === lastNode) {
                    continuousNodeArray.push(firstNode);
                } else {
                    continuousNodeArray.push(firstNode, lastNode);
                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                }
            }

            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            });

            // Make sure any changes done by applyBindings or unmemoize are reflected in the array
            ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
        }
    }

    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
                                        : null;
    }

    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
        options = options || {};
        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
        var templateDocument = (firstTargetNode || template || {}).ownerDocument;
        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

        // Loosely check result is an array of DOM nodes
        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
            throw new Error("Template engine must return an array of DOM nodes");

        var haveAddedNodesToParent = false;
        switch (renderMode) {
            case "replaceChildren":
                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "replaceNode":
                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "ignoreTargetNode": break;
            default:
                throw new Error("Unknown renderMode: " + renderMode);
        }

        if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender'])
                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
        }

        return renderedNodesArray;
    }

    function resolveTemplateName(template, data, context) {
        // The template can be specified as:
        if (ko.isObservable(template)) {
            // 1. An observable, with string value
            return template();
        } else if (typeof template === 'function') {
            // 2. A function of (data, context) returning a string
            return template(data, context);
        } else {
            // 3. A string
            return template;
        }
    }

    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
        options = options || {};
        if ((options['templateEngine'] || _templateEngine) == undefined)
            throw new Error("Set a template engine before calling renderTemplate");
        renderMode = renderMode || "replaceChildren";

        if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                function () {
                    // Ensure we've got a proper binding context to work with
                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
                        ? dataOrBindingContext
                        : new ko.bindingContext(dataOrBindingContext, null, null, null, { "exportDependencies": true });

                    var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                        renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

                    if (renderMode == "replaceNode") {
                        targetNodeOrNodeArray = renderedNodesArray;
                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    }
                },
                null,
                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
            );
        } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
        }
    };

    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
        var arrayItemContext;

        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
        var executeTemplateForArrayItem = function (arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
                context['$index'] = index;
            });

            var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
        }

        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender'])
                options['afterRender'](addedNodesArray, arrayValue);

            // release the "cache" variable, so that it can be collected by
            // the GC when its value isn't used from within the bindings anymore.
            arrayItemContext = null;
        };

        return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

        }, null, { disposeWhenNodeIsRemoved: targetNode });
    };

    var templateComputedDomDataKey = ko.utils.domData.nextKey();
    function disposeOldComputedAndStoreNewOne(element, newComputed) {
        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
            oldComputed.dispose();
        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
    }

    ko.bindingHandlers['template'] = {
        'init': function(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
            if (typeof bindingValue == "string" || bindingValue['name']) {
                // It's a named template - clear the element
                ko.virtualElements.emptyNode(element);
            } else if ('nodes' in bindingValue) {
                // We've been given an array of DOM nodes. Save them as the template source.
                // There is no known use case for the node array being an observable array (if the output
                // varies, put that behavior *into* your template - that's what templates are for), and
                // the implementation would be a mess, so assert that it's not observable.
                var nodes = bindingValue['nodes'] || [];
                if (ko.isObservable(nodes)) {
                    throw new Error('The "nodes" option must be a plain, non-observable array.');
                }
                var container = ko.utils.moveCleanedNodesToContainerElement(nodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            } else {
                // It's an anonymous template - store the element contents, then clear the element
                var templateNodes = ko.virtualElements.childNodes(element),
                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }
            return { 'controlsDescendantBindings': true };
        },
        'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor(),
                options = ko.utils.unwrapObservable(value),
                shouldDisplay = true,
                templateComputed = null,
                templateName;

            if (typeof options == "string") {
                templateName = value;
                options = {};
            } else {
                templateName = options['name'];

                // Support "if"/"ifnot" conditions
                if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
            }

            if ('foreach' in options) {
                // Render once for each data point (treating data set as empty if shouldDisplay==false)
                var dataArray = (shouldDisplay && options['foreach']) || [];
                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
                ko.virtualElements.emptyNode(element);
            } else {
                // Render once for this single data point (or use the viewModel if no data was provided)
                var innerBindingContext = ('data' in options) ?
                    bindingContext.createStaticChildContext(options['data'], options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            }

            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
            disposeOldComputedAndStoreNewOne(element, templateComputed);
        }
    };

    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
            return null; // Named templates can be rewritten, so return "no error"
        return "This template engine does not support anonymous templates nested within its templates";
    };

    ko.virtualElements.allowedBindings['template'] = true;
})();

ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
ko.exportSymbol('renderTemplate', ko.renderTemplate);
// Go through the items that have been added and deleted and try to find matches between them.
ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
    if (left.length && right.length) {
        var failedCompares, l, r, leftItem, rightItem;
        for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
            for (r = 0; rightItem = right[r]; ++r) {
                if (leftItem['value'] === rightItem['value']) {
                    leftItem['moved'] = rightItem['index'];
                    rightItem['moved'] = leftItem['index'];
                    right.splice(r, 1);         // This item is marked as moved; so remove it from right list
                    failedCompares = r = 0;     // Reset failed compares count because we're checking for consecutive failures
                    break;
                }
            }
            failedCompares += r;
        }
    }
};

ko.utils.compareArrays = (function () {
    var statusNotInOld = 'added', statusNotInNew = 'deleted';

    // Simple calculation based on Levenshtein distance.
    function compareArrays(oldArray, newArray, options) {
        // For backward compatibility, if the third arg is actually a bool, interpret
        // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
        options = (typeof options === 'boolean') ? { 'dontLimitMoves': options } : (options || {});
        oldArray = oldArray || [];
        newArray = newArray || [];

        if (oldArray.length < newArray.length)
            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
        else
            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
    }

    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
        var myMin = Math.min,
            myMax = Math.max,
            editDistanceMatrix = [],
            smlIndex, smlIndexMax = smlArray.length,
            bigIndex, bigIndexMax = bigArray.length,
            compareRange = (bigIndexMax - smlIndexMax) || 1,
            maxDistance = smlIndexMax + bigIndexMax + 1,
            thisRow, lastRow,
            bigIndexMaxForRow, bigIndexMinForRow;

        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);
            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                else if (!smlIndex)  // Top row - transform empty array into new array via additions
                    thisRow[bigIndex] = bigIndex + 1;
                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
                else {
                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
        }

        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
                notInSml.push(editScript[editScript.length] = {     // added
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                notInBig.push(editScript[editScript.length] = {     // deleted
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex });
            } else {
                --bigIndex;
                --smlIndex;
                if (!options['sparse']) {
                    editScript.push({
                        'status': "retained",
                        'value': bigArray[bigIndex] });
                }
            }
        }

        // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
        // smlIndexMax keeps the time complexity of this algorithm linear.
        ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);

        return editScript.reverse();
    }

    return compareArrays;
})();

ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
(function () {
    // Objective:
    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
    //   previously mapped - retain those nodes, and just insert/delete other ones

    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
    // You can use this, for example, to activate bindings on those nodes.

    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
        // Map this array value inside a dependentObservable so we re-map when any dependency changes
        var mappedNodes = [];
        var dependentObservable = ko.dependentObservable(function() {
            var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

            // On subsequent evaluations, just replace the previously-inserted DOM nodes
            if (mappedNodes.length > 0) {
                ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            }

            // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed
            mappedNodes.length = 0;
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes); } });
        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
    }

    var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
        deletedItemDummyValue = ko.utils.domData.nextKey();

    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
        // Compare the provided array against the previous one
        array = array || [];
        options = options || {};
        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
        var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

        // Build the new mapping result
        var newMappingResult = [];
        var lastMappingResultIndex = 0;
        var newMappingResultIndex = 0;

        var nodesToDelete = [];
        var itemsToProcess = [];
        var itemsForBeforeRemoveCallbacks = [];
        var itemsForMoveCallbacks = [];
        var itemsForAfterAddCallbacks = [];
        var mapData;

        function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition)
                itemsForMoveCallbacks[editScriptIndex] = mapData;
            // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
            mapData.indexObservable(newMappingResultIndex++);
            ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
        }

        function callCallback(callback, items) {
            if (callback) {
                for (var i = 0, n = items.length; i < n; i++) {
                    if (items[i]) {
                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                            callback(node, i, items[i].arrayEntry);
                        });
                    }
                }
            }
        }

        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];
            switch (editScriptItem['status']) {
                case "deleted":
                    if (movedIndex === undefined) {
                        mapData = lastMappingResult[lastMappingResultIndex];

                        // Stop tracking changes to the mapping for these nodes
                        if (mapData.dependentObservable) {
                            mapData.dependentObservable.dispose();
                            mapData.dependentObservable = undefined;
                        }

                        // Queue these nodes for later removal
                        if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
                            if (options['beforeRemove']) {
                                newMappingResult.push(mapData);
                                itemsToProcess.push(mapData);
                                if (mapData.arrayEntry === deletedItemDummyValue) {
                                    mapData = null;
                                } else {
                                    itemsForBeforeRemoveCallbacks[i] = mapData;
                                }
                            }
                            if (mapData) {
                                nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
                            }
                        }
                    }
                    lastMappingResultIndex++;
                    break;

                case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;

                case "added":
                    if (movedIndex !== undefined) {
                        itemMovedOrRetained(i, movedIndex);
                    } else {
                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                        if (!isFirstExecution)
                            itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
            }
        }

        // Store a copy of the array items we just considered so we can difference it next time
        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);

        // Call beforeMove first before any changes have been made to the DOM
        callCallback(options['beforeMove'], itemsForMoveCallbacks);

        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes)
                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

            // Put nodes in the right place if they aren't there already
            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
            }

            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
            if (!mapData.initialized && callbackAfterAddingNodes) {
                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                mapData.initialized = true;
            }
        }

        // If there's a beforeRemove callback, call it after reordering.
        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
        // Perhaps we'll make that change in the future if this scenario becomes more common.
        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

        // Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
        // as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
        // with an actual item in the array and appear as "retained" or "moved".
        for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
            if (itemsForBeforeRemoveCallbacks[i]) {
                itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
            }
        }

        // Finally call afterMove and afterAdd callbacks
        callCallback(options['afterMove'], itemsForMoveCallbacks);
        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
    }
})();

ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
ko.nativeTemplateEngine = function () {
    this['allowTemplateRewriting'] = false;
}

ko.nativeTemplateEngine.prototype = new ko.templateEngine();
ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

    if (templateNodes) {
        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
    } else {
        var templateText = templateSource['text']();
        return ko.utils.parseHtmlFragment(templateText, templateDocument);
    }
};

ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
(function() {
    ko.jqueryTmplTemplateEngine = function () {
        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
        // doesn't expose a version number, so we have to infer it.
        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
        // which KO internally refers to as version "2", so older versions are no longer detected.
        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
            if (!jQueryInstance || !(jQueryInstance['tmpl']))
                return 0;
            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
            try {
                if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
                    return 2; // Final version of jquery.tmpl
                }
            } catch(ex) { /* Apparently not the version we were looking for */ }

            return 1; // Any older version that we don't support
        })();

        function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2)
                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
        }

        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
        }

        this['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            templateDocument = templateDocument || document;
            options = options || {};
            ensureHasReferencedJQueryTemplates();

            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
            var precompiled = templateSource['data']('precompiled');
            if (!precompiled) {
                var templateText = templateSource['text']() || "";
                // Wrap in "with($whatever.koBindingContext) { ... }"
                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                precompiled = jQueryInstance['template'](null, templateText);
                templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
            var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](templateDocument.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
            return resultNodes;
        };

        this['createJavaScriptEvaluatorBlock'] = function(script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
        };

        this['addTemplate'] = function(templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
        };

        if (jQueryTmplVersion > 0) {
            jQueryInstance['tmpl']['tag']['ko_code'] = {
                open: "__.push($1 || '');"
            };
            jQueryInstance['tmpl']['tag']['ko_with'] = {
                open: "with($1) {",
                close: "} "
            };
        }
    };

    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
    ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

    // Use this one by default *only if jquery.tmpl is referenced*
    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
})();
}));
}());
})();


/***/ }),

/***/ "./node_modules/load-google-maps-api/index.js":
/*!****************************************************!*\
  !*** ./node_modules/load-google-maps-api/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['channel', 'client', 'key', 'language', 'region', 'v']

module.exports = function (options) {
  options = options || {}

  return new Promise(function (resolve, reject) {
    // Check if the Google Maps API has already been loaded
    if (window.google && window.google.maps) {
      return resolve(window.google.maps)
    }

    // Reject the promise after a timeout
    var timeoutId = setTimeout(function () {
      window[CALLBACK_NAME] = function () {} // Set the on load callback to a no-op
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback
    window[CALLBACK_NAME] = function () {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function (key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag
    document.body.appendChild(scriptElement)
  })
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*jshint esversion: 6 */


var _loadGoogleMapsApi = __webpack_require__(/*! load-google-maps-api */ "./node_modules/load-google-maps-api/index.js");

var _loadGoogleMapsApi2 = _interopRequireDefault(_loadGoogleMapsApi);

var _knockout = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.debug.js");

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getSurfSpots = function getSurfSpots() {
    return fetch('http://api.spitcast.com/api/spot/all').then(function (res) {
        return res.json();
    });
};

var GoogleMaps = function () {
    /*
    This class wraps the load-google-maps-api so that we can
    access the map functionality in an easy way.
    */
    function GoogleMaps(key, element) {
        _classCallCheck(this, GoogleMaps);

        this.map = null;
        this.googleMaps = null;
        this.markers = [];
        this.key = key;
        this.element = element;
        this.sv = null;

        this.setStreetView = this.setStreetView.bind(this);
        this.zoomInToLocation = this.zoomInToLocation.bind(this);
    }

    _createClass(GoogleMaps, [{
        key: 'loadMaps',
        value: function loadMaps() {
            var _this = this;

            /*
            Needed to provide some kind of promise so that we know when the
            map is loaded.
            */
            var key = this.key;
            var element = this.element;
            return (0, _loadGoogleMapsApi2.default)({ 'key': key }).then(function (googleMaps) {
                _this.googleMaps = googleMaps;
                _this.map = new _this.googleMaps.Map(element, {
                    center: { lat: 37.769, lng: -122.446 },
                    zoom: 6,
                    streetViewControl: false,
                    mapTypeId: 'hybrid'
                });
                _this.markers = [];
                _this.sv = new googleMaps.StreetViewService();
            }, function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'addMarker',
        value: function addMarker(location, contentString, key) {
            /*
            This adds a marker to the map and makes a key that we can later
            get the marker from.
            */
            var googleMaps = this.googleMaps;
            var zoomInToLocation = this.zoomInToLocation;
            var self = this;
            var marker = new googleMaps.Marker({
                position: location,
                map: this.map
            });
            var infoWindow = new googleMaps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function () {
                self.closeAllInfoWindows();
                infoWindow.open(this.map, marker);
                zoomInToLocation(marker.getPosition());
                self.toggleBounce(key);
            });

            this.markers.push({ marker: marker, key: key, infoWindow: infoWindow });
        }
    }, {
        key: 'getMarker',
        value: function getMarker(key) {
            var marker = this.markers.filter(function (marker) {
                return marker.key == key;
            });
            console.log(marker);
            return marker[0];
        }
    }, {
        key: 'openInfoWindow',
        value: function openInfoWindow(key) {
            var marker = this.markers.filter(function (marker) {
                return marker.key == key;
            });
            console.log(marker);
            marker[0].infoWindow.open(this.map, marker[0].marker);
        }
    }, {
        key: 'closeAllInfoWindows',
        value: function closeAllInfoWindows() {
            this.markers.map(function (marker) {
                marker.infoWindow.close();
            });
        }
    }, {
        key: 'setStreetView',
        value: function setStreetView(location) {
            var _this2 = this;

            this.sv.getPanorama({ location: location, radius: 1000 }, function (data, status) {
                var streetView = _this2.map.getStreetView();
                streetView.setPosition(data.location.latLng);
                streetView.setVisible(true);
            });
        }
    }, {
        key: 'zoomInToLocation',
        value: function zoomInToLocation(location) {
            var zoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;

            this.map.setZoom(zoom);
            this.map.setCenter(location);
        }
    }, {
        key: 'clearMarkers',
        value: function clearMarkers() {
            this.markers.map(function (marker) {
                marker.marker.setMap(null);
            });
            this.markers = [];
        }
    }, {
        key: 'toggleBounce',
        value: function toggleBounce(markerKey) {
            var marker = this.markers.filter(function (marker) {
                return marker.key == markerKey;
            })[0].marker;
            if (marker.getAnimation() != null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(this.googleMaps.Animation.BOUNCE);
                setTimeout(function () {
                    return marker.setAnimation(null);
                }, 5000);
            }
        }
    }]);

    return GoogleMaps;
}();

function Spot(data) {
    this.spot_name = _knockout2.default.observable(data.spot_name);
    this.county_name = _knockout2.default.observable(data.county_name);
    this.latitude = _knockout2.default.observable(data.latitude);
    this.longitude = _knockout2.default.observable(data.longitude);
}

function SurfSpotMapViewModel() {
    var _this3 = this;

    /*
    This is the ViewModel for Knockout js. It uses the spit cast api to get the data,
    display the data, and filter the data. It also uses the Google Maps Wrapper class to
    interface with the map/
    */
    var self = this;
    // Need to initialize the map and do some ajax requests to initialize the data
    this.surfSpotMap = new GoogleMaps('AIzaSyCIw77AT33fN4gObr96dtGWKuyYfmO5Tx8', document.getElementById('map'));
    this.spots = _knockout2.default.observableArray([]);
    getSurfSpots().then(function (result) {
        var mappedSpots = result.map(function (item) {
            return new Spot(item);
        });
        _this3.spots(mappedSpots);
        _this3.surfSpotMap.loadMaps().then(function () {
            mappedSpots.map(function (surfSpot) {
                var spotDescription = "<div>" + "<h4>Name: " + surfSpot.spot_name() + "</h4>" + "<h5>County: " + surfSpot.county_name() + "</h5>" + "</div>";
                _this3.surfSpotMap.addMarker({ lat: surfSpot.latitude(), lng: surfSpot.longitude() }, spotDescription, surfSpot.spot_name());
            });
        });
    }, function (error) {
        alert('There was an error getting the API');
    });
    this.countyNames = _knockout2.default.computed(function () {
        var allSpots = _this3.spots();
        var countyNames = ['All'];
        allSpots.map(function (spot) {
            if (!countyNames.includes(spot.county_name())) {
                countyNames.push(spot.county_name());
            }
        });
        return countyNames;
    });
    this.selectedCounty = _knockout2.default.observable('All');

    this.filteredSpots = _knockout2.default.computed(function () {
        if (_this3.selectedCounty() == 'All') {
            return _this3.spots();
        } else {
            return _this3.spots().filter(function (spot) {
                return spot.county_name() == _this3.selectedCounty();
            });
        }
    });
    // This renders the markers anytime selectedCounty Changes
    this.renderMarkers = _knockout2.default.computed(function () {
        if (_this3.surfSpotMap.googleMaps !== null) {
            _this3.surfSpotMap.clearMarkers();
            _this3.filteredSpots().map(function (surfSpot) {
                var spotDescription = "<div>" + "<h2>Name: " + surfSpot.spot_name() + "</h2>" + "<h3>County: " + surfSpot.county_name() + "</h3>" + "</div>";
                _this3.surfSpotMap.addMarker({ lat: surfSpot.latitude(), lng: surfSpot.longitude() }, spotDescription, surfSpot.spot_name());
            });
            var filSpots = self.filteredSpots();
            console.log(filSpots.length / 2);
            self.surfSpotMap.zoomInToLocation({
                lat: filSpots[Math.floor(filSpots.length / 2)].latitude(),
                lng: filSpots[Math.floor(filSpots.length / 2)].longitude()
            }, 10);
        }
        console.log(_this3.selectedCounty());
    });

    this.ZoomToSpot = function (spot) {
        document.getElementById('menu').click();
        console.log(self.surfSpotMap.getMarker(spot.spot_name()));
        self.surfSpotMap.closeAllInfoWindows();
        self.surfSpotMap.openInfoWindow(spot.spot_name());
        self.surfSpotMap.toggleBounce(spot.spot_name());
        self.surfSpotMap.zoomInToLocation({
            lat: spot.latitude(), lng: spot.longitude()
        });
    };

    this.goToStreetView = function (spot) {
        self.surfSpotMap.setStreetView({
            lat: spot.latitude(), lng: spot.longitude()
        });
    };
}

_knockout2.default.applyBindings(new SurfSpotMapViewModel());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtZ29vZ2xlLW1hcHMtYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRTdXJmU3BvdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiR29vZ2xlTWFwcyIsImtleSIsImVsZW1lbnQiLCJtYXAiLCJnb29nbGVNYXBzIiwibWFya2VycyIsInN2Iiwic2V0U3RyZWV0VmlldyIsImJpbmQiLCJ6b29tSW5Ub0xvY2F0aW9uIiwiTWFwIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsInN0cmVldFZpZXdDb250cm9sIiwibWFwVHlwZUlkIiwiU3RyZWV0Vmlld1NlcnZpY2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImNvbnRlbnRTdHJpbmciLCJzZWxmIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJpbmZvV2luZG93IiwiSW5mb1dpbmRvdyIsImNvbnRlbnQiLCJhZGRMaXN0ZW5lciIsImNsb3NlQWxsSW5mb1dpbmRvd3MiLCJvcGVuIiwiZ2V0UG9zaXRpb24iLCJ0b2dnbGVCb3VuY2UiLCJwdXNoIiwiZmlsdGVyIiwiY2xvc2UiLCJnZXRQYW5vcmFtYSIsInJhZGl1cyIsImRhdGEiLCJzdGF0dXMiLCJzdHJlZXRWaWV3IiwiZ2V0U3RyZWV0VmlldyIsInNldFBvc2l0aW9uIiwibGF0TG5nIiwic2V0VmlzaWJsZSIsInNldFpvb20iLCJzZXRDZW50ZXIiLCJzZXRNYXAiLCJtYXJrZXJLZXkiLCJnZXRBbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJBbmltYXRpb24iLCJCT1VOQ0UiLCJzZXRUaW1lb3V0IiwiU3BvdCIsInNwb3RfbmFtZSIsImtvIiwib2JzZXJ2YWJsZSIsImNvdW50eV9uYW1lIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJTdXJmU3BvdE1hcFZpZXdNb2RlbCIsInN1cmZTcG90TWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNwb3RzIiwib2JzZXJ2YWJsZUFycmF5IiwicmVzdWx0IiwibWFwcGVkU3BvdHMiLCJpdGVtIiwibG9hZE1hcHMiLCJzdXJmU3BvdCIsInNwb3REZXNjcmlwdGlvbiIsImFkZE1hcmtlciIsImFsZXJ0IiwiY291bnR5TmFtZXMiLCJjb21wdXRlZCIsImFsbFNwb3RzIiwic3BvdCIsImluY2x1ZGVzIiwic2VsZWN0ZWRDb3VudHkiLCJmaWx0ZXJlZFNwb3RzIiwicmVuZGVyTWFya2VycyIsImNsZWFyTWFya2VycyIsImZpbFNwb3RzIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwiWm9vbVRvU3BvdCIsImNsaWNrIiwiZ2V0TWFya2VyIiwib3BlbkluZm9XaW5kb3ciLCJnb1RvU3RyZWV0VmlldyIsImFwcGx5QmluZGluZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSwyREFBMkQscUNBQXFDLEVBQUU7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxh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QUFDQTtBQUNBLGFBQWE7QUFDYiw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0NBQW9DLEVBQUU7QUFDNUQsa0NBQWtDLHdEQUF3RCxFQUFFO0FBQzVGLGtDQUFrQyx3RUFBd0U7QUFDMUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIseUJBQXlCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMklBQTJJLG1DQUFtQztBQUM5Syx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQSwySUFBMkksbUNBQW1DO0FBQzlLO0FBQ0EsZ0RBQWdELFFBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsa0JBQWtCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0QjtBQUM1RDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwyRkFBMkYsd0JBQXdCO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlGQUFpRixZQUFZO0FBQzdGLEtBQUs7QUFDTCx1REFBdUQsOEJBQThCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0RBQStEO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE9BQU87QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBC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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0VBQXdFLDJEQUEyRDs7QUFFbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0Esb0ZBQW9GLDZCQUE2QjtBQUNqSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYzLjQuMlxuICogKGMpIFRoZSBLbm9ja291dC5qcyB0ZWFtIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuICogTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqL1xuXG4oZnVuY3Rpb24oKXtcbnZhciBERUJVRz10cnVlO1xuKGZ1bmN0aW9uKHVuZGVmaW5lZCl7XG4gICAgLy8gKDAsIGV2YWwpKCd0aGlzJykgaXMgYSByb2J1c3Qgd2F5IG9mIGdldHRpbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICAvLyBGb3IgZGV0YWlscywgc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQxMTk5ODgvcmV0dXJuLXRoaXMtMC1ldmFsdGhpcy8xNDEyMDAyMyMxNDEyMDAyM1xuICAgIHZhciB3aW5kb3cgPSB0aGlzIHx8ICgwLCBldmFsKSgndGhpcycpLFxuICAgICAgICBkb2N1bWVudCA9IHdpbmRvd1snZG9jdW1lbnQnXSxcbiAgICAgICAgbmF2aWdhdG9yID0gd2luZG93WyduYXZpZ2F0b3InXSxcbiAgICAgICAgalF1ZXJ5SW5zdGFuY2UgPSB3aW5kb3dbXCJqUXVlcnlcIl0sXG4gICAgICAgIEpTT04gPSB3aW5kb3dbXCJKU09OXCJdO1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAvLyBTdXBwb3J0IHRocmVlIG1vZHVsZSBsb2FkaW5nIHNjZW5hcmlvc1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgICAgLy8gWzFdIEFNRCBhbm9ueW1vdXMgbW9kdWxlXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVxdWlyZSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBbMl0gQ29tbW9uSlMvTm9kZS5qc1xuICAgICAgICBmYWN0b3J5KG1vZHVsZVsnZXhwb3J0cyddIHx8IGV4cG9ydHMpOyAgLy8gbW9kdWxlLmV4cG9ydHMgaXMgZm9yIE5vZGUuanNcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBbM10gTm8gbW9kdWxlIGxvYWRlciAocGxhaW4gPHNjcmlwdD4gdGFnKSAtIHB1dCBkaXJlY3RseSBpbiBnbG9iYWwgbmFtZXNwYWNlXG4gICAgICAgIGZhY3Rvcnkod2luZG93WydrbyddID0ge30pO1xuICAgIH1cbn0oZnVuY3Rpb24oa29FeHBvcnRzLCBhbWRSZXF1aXJlKXtcbi8vIEludGVybmFsbHksIGFsbCBLTyBvYmplY3RzIGFyZSBhdHRhY2hlZCB0byBrb0V4cG9ydHMgKGV2ZW4gdGhlIG5vbi1leHBvcnRlZCBvbmVzIHdob3NlIG5hbWVzIHdpbGwgYmUgbWluaWZpZWQgYnkgdGhlIGNsb3N1cmUgY29tcGlsZXIpLlxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhlIGZvbGxvd2luZyBcImtvXCIgdmFyaWFibGUgbWF5IGJlIG1hZGUgZGlzdGluY3QgZnJvbSBcImtvRXhwb3J0c1wiIHNvIHRoYXQgcHJpdmF0ZSBvYmplY3RzIGFyZSBub3QgZXh0ZXJuYWxseSByZWFjaGFibGUuXG52YXIga28gPSB0eXBlb2Yga29FeHBvcnRzICE9PSAndW5kZWZpbmVkJyA/IGtvRXhwb3J0cyA6IHt9O1xuLy8gR29vZ2xlIENsb3N1cmUgQ29tcGlsZXIgaGVscGVycyAodXNlZCBvbmx5IHRvIG1ha2UgdGhlIG1pbmlmaWVkIGZpbGUgc21hbGxlcilcbmtvLmV4cG9ydFN5bWJvbCA9IGZ1bmN0aW9uKGtvUGF0aCwgb2JqZWN0KSB7XG4gICAgdmFyIHRva2VucyA9IGtvUGF0aC5zcGxpdChcIi5cIik7XG5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCBcImtvXCIgbWF5IGJlY29tZSBkaXN0aW5jdCBmcm9tIFwia29FeHBvcnRzXCIgKHNvIHRoYXQgbm9uLWV4cG9ydGVkIG9iamVjdHMgYXJlIG5vdCByZWFjaGFibGUpXG4gICAgLy8gQXQgdGhhdCBwb2ludCwgXCJ0YXJnZXRcIiB3b3VsZCBiZSBzZXQgdG86ICh0eXBlb2Yga29FeHBvcnRzICE9PSBcInVuZGVmaW5lZFwiID8ga29FeHBvcnRzIDoga28pXG4gICAgdmFyIHRhcmdldCA9IGtvO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoIC0gMTsgaSsrKVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXRbdG9rZW5zW2ldXTtcbiAgICB0YXJnZXRbdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXV0gPSBvYmplY3Q7XG59O1xua28uZXhwb3J0UHJvcGVydHkgPSBmdW5jdGlvbihvd25lciwgcHVibGljTmFtZSwgb2JqZWN0KSB7XG4gICAgb3duZXJbcHVibGljTmFtZV0gPSBvYmplY3Q7XG59O1xua28udmVyc2lvbiA9IFwiMy40LjJcIjtcblxua28uZXhwb3J0U3ltYm9sKCd2ZXJzaW9uJywga28udmVyc2lvbik7XG4vLyBGb3IgYW55IG9wdGlvbnMgdGhhdCBtYXkgYWZmZWN0IHZhcmlvdXMgYXJlYXMgb2YgS25vY2tvdXQgYW5kIGFyZW4ndCBkaXJlY3RseSBhc3NvY2lhdGVkIHdpdGggZGF0YSBiaW5kaW5nLlxua28ub3B0aW9ucyA9IHtcbiAgICAnZGVmZXJVcGRhdGVzJzogZmFsc2UsXG4gICAgJ3VzZU9ubHlOYXRpdmVFdmVudHMnOiBmYWxzZVxufTtcblxuLy9rby5leHBvcnRTeW1ib2woJ29wdGlvbnMnLCBrby5vcHRpb25zKTsgICAvLyAnb3B0aW9ucycgaXNuJ3QgbWluaWZpZWRcbmtvLnV0aWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBvYmplY3RGb3JFYWNoKG9iaiwgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKHByb3AsIG9ialtwcm9wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgZm9yKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2Yob2JqLCBwcm90bykge1xuICAgICAgICBvYmouX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIGNhblNldFByb3RvdHlwZSA9ICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICB2YXIgY2FuVXNlU3ltYm9scyA9ICFERUJVRyAmJiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nO1xuXG4gICAgLy8gUmVwcmVzZW50IHRoZSBrbm93biBldmVudCB0eXBlcyBpbiBhIGNvbXBhY3Qgd2F5LCB0aGVuIGF0IHJ1bnRpbWUgdHJhbnNmb3JtIGl0IGludG8gYSBoYXNoIHdpdGggZXZlbnQgbmFtZSBhcyBrZXkgKGZvciBmYXN0IGxvb2t1cClcbiAgICB2YXIga25vd25FdmVudHMgPSB7fSwga25vd25FdmVudFR5cGVzQnlFdmVudE5hbWUgPSB7fTtcbiAgICB2YXIga2V5RXZlbnRUeXBlTmFtZSA9IChuYXZpZ2F0b3IgJiYgL0ZpcmVmb3hcXC8yL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgPyAnS2V5Ym9hcmRFdmVudCcgOiAnVUlFdmVudHMnO1xuICAgIGtub3duRXZlbnRzW2tleUV2ZW50VHlwZU5hbWVdID0gWydrZXl1cCcsICdrZXlkb3duJywgJ2tleXByZXNzJ107XG4gICAga25vd25FdmVudHNbJ01vdXNlRXZlbnRzJ10gPSBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlbW92ZScsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ107XG4gICAgb2JqZWN0Rm9yRWFjaChrbm93bkV2ZW50cywgZnVuY3Rpb24oZXZlbnRUeXBlLCBrbm93bkV2ZW50c0ZvclR5cGUpIHtcbiAgICAgICAgaWYgKGtub3duRXZlbnRzRm9yVHlwZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0ga25vd25FdmVudHNGb3JUeXBlLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBrbm93bkV2ZW50VHlwZXNCeUV2ZW50TmFtZVtrbm93bkV2ZW50c0ZvclR5cGVbaV1dID0gZXZlbnRUeXBlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGV2ZW50c1RoYXRNdXN0QmVSZWdpc3RlcmVkVXNpbmdBdHRhY2hFdmVudCA9IHsgJ3Byb3BlcnR5Y2hhbmdlJzogdHJ1ZSB9OyAvLyBXb3JrYXJvdW5kIGZvciBhbiBJRTkgaXNzdWUgLSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzQwNlxuXG4gICAgLy8gRGV0ZWN0IElFIHZlcnNpb25zIGZvciBidWcgd29ya2Fyb3VuZHMgKHVzZXMgSUUgY29uZGl0aW9uYWxzLCBub3QgVUEgc3RyaW5nLCBmb3Igcm9idXN0bmVzcylcbiAgICAvLyBOb3RlIHRoYXQsIHNpbmNlIElFIDEwIGRvZXMgbm90IHN1cHBvcnQgY29uZGl0aW9uYWwgY29tbWVudHMsIHRoZSBmb2xsb3dpbmcgbG9naWMgb25seSBkZXRlY3RzIElFIDwgMTAuXG4gICAgLy8gQ3VycmVudGx5IHRoaXMgaXMgYnkgZGVzaWduLCBzaW5jZSBJRSAxMCsgYmVoYXZlcyBjb3JyZWN0bHkgd2hlbiB0cmVhdGVkIGFzIGEgc3RhbmRhcmQgYnJvd3Nlci5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGZ1dHVyZSBuZWVkIHRvIGRldGVjdCBzcGVjaWZpYyB2ZXJzaW9ucyBvZiBJRTEwKywgd2Ugd2lsbCBhbWVuZCB0aGlzLlxuICAgIHZhciBpZVZlcnNpb24gPSBkb2N1bWVudCAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gMywgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGlFbGVtcyA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpO1xuXG4gICAgICAgIC8vIEtlZXAgY29uc3RydWN0aW5nIGNvbmRpdGlvbmFsIEhUTUwgYmxvY2tzIHVudGlsIHdlIGhpdCBvbmUgdGhhdCByZXNvbHZlcyB0byBhbiBlbXB0eSBmcmFnbWVudFxuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgZ3QgSUUgJyArICgrK3ZlcnNpb24pICsgJ10+PGk+PC9pPjwhW2VuZGlmXS0tPicsXG4gICAgICAgICAgICBpRWxlbXNbMF1cbiAgICAgICAgKSB7fVxuICAgICAgICByZXR1cm4gdmVyc2lvbiA+IDQgPyB2ZXJzaW9uIDogdW5kZWZpbmVkO1xuICAgIH0oKSk7XG4gICAgdmFyIGlzSWU2ID0gaWVWZXJzaW9uID09PSA2LFxuICAgICAgICBpc0llNyA9IGllVmVyc2lvbiA9PT0gNztcblxuICAgIGZ1bmN0aW9uIGlzQ2xpY2tPbkNoZWNrYWJsZUVsZW1lbnQoZWxlbWVudCwgZXZlbnRUeXBlKSB7XG4gICAgICAgIGlmICgoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpICE9PSBcImlucHV0XCIpIHx8ICFlbGVtZW50LnR5cGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50VHlwZS50b0xvd2VyQ2FzZSgpICE9IFwiY2xpY2tcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgaW5wdXRUeXBlID0gZWxlbWVudC50eXBlO1xuICAgICAgICByZXR1cm4gKGlucHV0VHlwZSA9PSBcImNoZWNrYm94XCIpIHx8IChpbnB1dFR5cGUgPT0gXCJyYWRpb1wiKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgZGV0YWlscyBvbiB0aGUgcGF0dGVybiBmb3IgY2hhbmdpbmcgbm9kZSBjbGFzc2VzXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20va25vY2tvdXQva25vY2tvdXQvaXNzdWVzLzE1OTdcbiAgICB2YXIgY3NzQ2xhc3NOYW1lUmVnZXggPSAvXFxTKy9nO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRG9tTm9kZUNzc0NsYXNzKG5vZGUsIGNsYXNzTmFtZXMsIHNob3VsZEhhdmVDbGFzcykge1xuICAgICAgICB2YXIgYWRkT3JSZW1vdmVGbjtcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5jbGFzc0xpc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgYWRkT3JSZW1vdmVGbiA9IG5vZGUuY2xhc3NMaXN0W3Nob3VsZEhhdmVDbGFzcyA/ICdhZGQnIDogJ3JlbW92ZSddO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChjbGFzc05hbWVzLm1hdGNoKGNzc0NsYXNzTmFtZVJlZ2V4KSwgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlRm4uY2FsbChub2RlLmNsYXNzTGlzdCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuY2xhc3NOYW1lWydiYXNlVmFsJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gU1ZHIHRhZyAuY2xhc3NOYW1lcyBpcyBhbiBTVkdBbmltYXRlZFN0cmluZyBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIHRvZ2dsZU9iamVjdENsYXNzUHJvcGVydHlTdHJpbmcobm9kZS5jbGFzc05hbWUsICdiYXNlVmFsJywgY2xhc3NOYW1lcywgc2hvdWxkSGF2ZUNsYXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9kZS5jbGFzc05hbWUgb3VnaHQgdG8gYmUgYSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgdG9nZ2xlT2JqZWN0Q2xhc3NQcm9wZXJ0eVN0cmluZyhub2RlLCAnY2xhc3NOYW1lJywgY2xhc3NOYW1lcywgc2hvdWxkSGF2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU9iamVjdENsYXNzUHJvcGVydHlTdHJpbmcob2JqLCBwcm9wLCBjbGFzc05hbWVzLCBzaG91bGRIYXZlQ2xhc3MpIHtcbiAgICAgICAgLy8gb2JqL3Byb3AgaXMgZWl0aGVyIGEgbm9kZS8nY2xhc3NOYW1lJyBvciBhIFNWR0FuaW1hdGVkU3RyaW5nLydiYXNlVmFsJy5cbiAgICAgICAgdmFyIGN1cnJlbnRDbGFzc05hbWVzID0gb2JqW3Byb3BdLm1hdGNoKGNzc0NsYXNzTmFtZVJlZ2V4KSB8fCBbXTtcbiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGNsYXNzTmFtZXMubWF0Y2goY3NzQ2xhc3NOYW1lUmVnZXgpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFkZE9yUmVtb3ZlSXRlbShjdXJyZW50Q2xhc3NOYW1lcywgY2xhc3NOYW1lLCBzaG91bGRIYXZlQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqW3Byb3BdID0gY3VycmVudENsYXNzTmFtZXMuam9pbihcIiBcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3Q6IFsnYXV0aGVudGljaXR5X3Rva2VuJywgL15fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbihfLiopPyQvXSxcblxuICAgICAgICBhcnJheUZvckVhY2g6IGZ1bmN0aW9uIChhcnJheSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBhY3Rpb24oYXJyYXlbaV0sIGkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5SW5kZXhPZjogZnVuY3Rpb24gKGFycmF5LCBpdGVtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgaXRlbSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5Rmlyc3Q6IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlLCBwcmVkaWNhdGVPd25lcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHByZWRpY2F0ZU93bmVyLCBhcnJheVtpXSwgaSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5UmVtb3ZlSXRlbTogZnVuY3Rpb24gKGFycmF5LCBpdGVtVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheSwgaXRlbVRvUmVtb3ZlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5R2V0RGlzdGluY3RWYWx1ZXM6IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgYXJyYXkgPSBhcnJheSB8fCBbXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihyZXN1bHQsIGFycmF5W2ldKSA8IDApXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXJyYXlNYXA6IGZ1bmN0aW9uIChhcnJheSwgbWFwcGluZykge1xuICAgICAgICAgICAgYXJyYXkgPSBhcnJheSB8fCBbXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hcHBpbmcoYXJyYXlbaV0sIGkpKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXJyYXlGaWx0ZXI6IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlKSB7XG4gICAgICAgICAgICBhcnJheSA9IGFycmF5IHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpXSwgaSkpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXJyYXlQdXNoQWxsOiBmdW5jdGlvbiAoYXJyYXksIHZhbHVlc1RvUHVzaCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlc1RvUHVzaCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHZhbHVlc1RvUHVzaCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB2YWx1ZXNUb1B1c2gubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHZhbHVlc1RvUHVzaFtpXSk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkT3JSZW1vdmVJdGVtOiBmdW5jdGlvbihhcnJheSwgdmFsdWUsIGluY2x1ZGVkKSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdFbnRyeUluZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKGFycmF5KSwgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nRW50cnlJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZWQpXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGVkKVxuICAgICAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoZXhpc3RpbmdFbnRyeUluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjYW5TZXRQcm90b3R5cGU6IGNhblNldFByb3RvdHlwZSxcblxuICAgICAgICBleHRlbmQ6IGV4dGVuZCxcblxuICAgICAgICBzZXRQcm90b3R5cGVPZjogc2V0UHJvdG90eXBlT2YsXG5cbiAgICAgICAgc2V0UHJvdG90eXBlT2ZPckV4dGVuZDogY2FuU2V0UHJvdG90eXBlID8gc2V0UHJvdG90eXBlT2YgOiBleHRlbmQsXG5cbiAgICAgICAgb2JqZWN0Rm9yRWFjaDogb2JqZWN0Rm9yRWFjaCxcblxuICAgICAgICBvYmplY3RNYXA6IGZ1bmN0aW9uKHNvdXJjZSwgbWFwcGluZykge1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBtYXBwaW5nKHNvdXJjZVtwcm9wXSwgcHJvcCwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGVtcHR5RG9tTm9kZTogZnVuY3Rpb24gKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHdoaWxlIChkb21Ob2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKGRvbU5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZUNsZWFuZWROb2Rlc1RvQ29udGFpbmVyRWxlbWVudDogZnVuY3Rpb24obm9kZXMpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBpdCdzIGEgcmVhbCBhcnJheSwgYXMgd2UncmUgYWJvdXQgdG8gcmVwYXJlbnQgdGhlIG5vZGVzIGFuZFxuICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGUgdW5kZXJseWluZyBjb2xsZWN0aW9uIHRvIGNoYW5nZSB3aGlsZSB3ZSdyZSBkb2luZyB0aGF0LlxuICAgICAgICAgICAgdmFyIG5vZGVzQXJyYXkgPSBrby51dGlscy5tYWtlQXJyYXkobm9kZXMpO1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRG9jdW1lbnQgPSAobm9kZXNBcnJheVswXSAmJiBub2Rlc0FycmF5WzBdLm93bmVyRG9jdW1lbnQpIHx8IGRvY3VtZW50O1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGVtcGxhdGVEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbm9kZXNBcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoa28uY2xlYW5Ob2RlKG5vZGVzQXJyYXlbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xvbmVOb2RlczogZnVuY3Rpb24gKG5vZGVzQXJyYXksIHNob3VsZENsZWFuTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gbm9kZXNBcnJheS5sZW5ndGgsIG5ld05vZGVzQXJyYXkgPSBbXTsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZWROb2RlID0gbm9kZXNBcnJheVtpXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXNBcnJheS5wdXNoKHNob3VsZENsZWFuTm9kZXMgPyBrby5jbGVhbk5vZGUoY2xvbmVkTm9kZSkgOiBjbG9uZWROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdOb2Rlc0FycmF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldERvbU5vZGVDaGlsZHJlbjogZnVuY3Rpb24gKGRvbU5vZGUsIGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmVtcHR5RG9tTm9kZShkb21Ob2RlKTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBjaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgZG9tTm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXBsYWNlRG9tTm9kZXM6IGZ1bmN0aW9uIChub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXksIG5ld05vZGVzQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBub2Rlc1RvUmVwbGFjZUFycmF5ID0gbm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5Lm5vZGVUeXBlID8gW25vZGVUb1JlcGxhY2VPck5vZGVBcnJheV0gOiBub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXk7XG4gICAgICAgICAgICBpZiAobm9kZXNUb1JlcGxhY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gbm9kZXNUb1JlcGxhY2VBcnJheVswXTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gaW5zZXJ0aW9uUG9pbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5ld05vZGVzQXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld05vZGVzQXJyYXlbaV0sIGluc2VydGlvblBvaW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzVG9SZXBsYWNlQXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnJlbW92ZU5vZGUobm9kZXNUb1JlcGxhY2VBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZpeFVwQ29udGludW91c05vZGVBcnJheTogZnVuY3Rpb24oY29udGludW91c05vZGVBcnJheSwgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gQmVmb3JlIGFjdGluZyBvbiBhIHNldCBvZiBub2RlcyB0aGF0IHdlcmUgcHJldmlvdXNseSBvdXRwdXR0ZWQgYnkgYSB0ZW1wbGF0ZSBmdW5jdGlvbiwgd2UgaGF2ZSB0byByZWNvbmNpbGVcbiAgICAgICAgICAgIC8vIHRoZW0gYWdhaW5zdCB3aGF0IGlzIGluIHRoZSBET00gcmlnaHQgbm93LiBJdCBtYXkgYmUgdGhhdCBzb21lIG9mIHRoZSBub2RlcyBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkLCBvciB0aGF0XG4gICAgICAgICAgICAvLyBuZXcgbm9kZXMgbWlnaHQgaGF2ZSBiZWVuIGluc2VydGVkIGluIHRoZSBtaWRkbGUsIGZvciBleGFtcGxlIGJ5IGEgYmluZGluZy4gQWxzbywgdGhlcmUgbWF5IHByZXZpb3VzbHkgaGF2ZSBiZWVuXG4gICAgICAgICAgICAvLyBsZWFkaW5nIGNvbW1lbnQgbm9kZXMgKGNyZWF0ZWQgYnkgcmV3cml0dGVuIHN0cmluZy1iYXNlZCB0ZW1wbGF0ZXMpIHRoYXQgaGF2ZSBzaW5jZSBiZWVuIHJlbW92ZWQgZHVyaW5nIGJpbmRpbmcuXG4gICAgICAgICAgICAvLyBTbywgdGhpcyBmdW5jdGlvbiB0cmFuc2xhdGVzIHRoZSBvbGQgXCJtYXBcIiBvdXRwdXQgYXJyYXkgaW50byBpdHMgYmVzdCBndWVzcyBvZiB0aGUgc2V0IG9mIGN1cnJlbnQgRE9NIG5vZGVzLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFJ1bGVzOlxuICAgICAgICAgICAgLy8gICBbQV0gQW55IGxlYWRpbmcgbm9kZXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBzaG91bGQgYmUgaWdub3JlZFxuICAgICAgICAgICAgLy8gICAgICAgVGhlc2UgbW9zdCBsaWtlbHkgY29ycmVzcG9uZCB0byBtZW1vaXphdGlvbiBub2RlcyB0aGF0IHdlcmUgYWxyZWFkeSByZW1vdmVkIGR1cmluZyBiaW5kaW5nXG4gICAgICAgICAgICAvLyAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2tub2Nrb3V0L2tub2Nrb3V0L3B1bGwvNDQwXG4gICAgICAgICAgICAvLyAgIFtCXSBBbnkgdHJhaWxpbmcgbm9kZXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgICAgICAgICAvLyAgICAgICBUaGlzIHByZXZlbnRzIHRoZSBjb2RlIGhlcmUgZnJvbSBhZGRpbmcgdW5yZWxhdGVkIG5vZGVzIHRvIHRoZSBhcnJheSB3aGlsZSBwcm9jZXNzaW5nIHJ1bGUgW0NdXG4gICAgICAgICAgICAvLyAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2tub2Nrb3V0L2tub2Nrb3V0L3B1bGwvMTkwM1xuICAgICAgICAgICAgLy8gICBbQ10gV2Ugd2FudCB0byBvdXRwdXQgYSBjb250aW51b3VzIHNlcmllcyBvZiBub2Rlcy4gU28sIGlnbm9yZSBhbnkgbm9kZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkLFxuICAgICAgICAgICAgLy8gICAgICAgYW5kIGluY2x1ZGUgYW55IG5vZGVzIHRoYXQgaGF2ZSBiZWVuIGluc2VydGVkIGFtb25nIHRoZSBwcmV2aW91cyBjb2xsZWN0aW9uXG5cbiAgICAgICAgICAgIGlmIChjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBwYXJlbnQgbm9kZSBjYW4gYmUgYSB2aXJ0dWFsIGVsZW1lbnQ7IHNvIGdldCB0aGUgcmVhbCBwYXJlbnQgbm9kZVxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSAocGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gOCAmJiBwYXJlbnROb2RlLnBhcmVudE5vZGUpIHx8IHBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICAvLyBSdWxlIFtBXVxuICAgICAgICAgICAgICAgIHdoaWxlIChjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCAmJiBjb250aW51b3VzTm9kZUFycmF5WzBdLnBhcmVudE5vZGUgIT09IHBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkuc3BsaWNlKDAsIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVsZSBbQl1cbiAgICAgICAgICAgICAgICB3aGlsZSAoY29udGludW91c05vZGVBcnJheS5sZW5ndGggPiAxICYmIGNvbnRpbnVvdXNOb2RlQXJyYXlbY29udGludW91c05vZGVBcnJheS5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBwYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aC0tO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVsZSBbQ11cbiAgICAgICAgICAgICAgICBpZiAoY29udGludW91c05vZGVBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gY29udGludW91c05vZGVBcnJheVswXSwgbGFzdCA9IGNvbnRpbnVvdXNOb2RlQXJyYXlbY29udGludW91c05vZGVBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgbmV3IGNvbnRpbnVvdXMgbm9kZSBzZXRcbiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5wdXNoKGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250aW51b3VzTm9kZUFycmF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldE9wdGlvbk5vZGVTZWxlY3Rpb25TdGF0ZTogZnVuY3Rpb24gKG9wdGlvbk5vZGUsIGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIElFNiBzb21ldGltZXMgdGhyb3dzIFwidW5rbm93biBlcnJvclwiIGlmIHlvdSB0cnkgdG8gd3JpdGUgdG8gLnNlbGVjdGVkIGRpcmVjdGx5LCB3aGVyZWFzIEZpcmVmb3ggc3RydWdnbGVzIHdpdGggc2V0QXR0cmlidXRlLiBQaWNrIG9uZSBiYXNlZCBvbiBicm93c2VyLlxuICAgICAgICAgICAgaWYgKGllVmVyc2lvbiA8IDcpXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBpc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLnNlbGVjdGVkID0gaXNTZWxlY3RlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJpbmdUcmltOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICAgICAgICAgIHN0cmluZy50cmltID9cbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nLnRyaW0oKSA6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZy50b1N0cmluZygpLnJlcGxhY2UoL15bXFxzXFx4YTBdK3xbXFxzXFx4YTBdKyQvZywgJycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cmluZ1N0YXJ0c1dpdGg6IGZ1bmN0aW9uIChzdHJpbmcsIHN0YXJ0c1dpdGgpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHN0YXJ0c1dpdGgubGVuZ3RoID4gc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzdGFydHNXaXRoLmxlbmd0aCkgPT09IHN0YXJ0c1dpdGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZG9tTm9kZUlzQ29udGFpbmVkQnk6IGZ1bmN0aW9uIChub2RlLCBjb250YWluZWRCeU5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBjb250YWluZWRCeU5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMTEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBGaXhlcyBpc3N1ZSAjMTE2MiAtIGNhbid0IHVzZSBub2RlLmNvbnRhaW5zIGZvciBkb2N1bWVudCBmcmFnbWVudHMgb24gSUU4XG4gICAgICAgICAgICBpZiAoY29udGFpbmVkQnlOb2RlLmNvbnRhaW5zKVxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZWRCeU5vZGUuY29udGFpbnMobm9kZS5ub2RlVHlwZSA9PT0gMyA/IG5vZGUucGFyZW50Tm9kZSA6IG5vZGUpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lZEJ5Tm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gKGNvbnRhaW5lZEJ5Tm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlKSAmIDE2KSA9PSAxNjtcbiAgICAgICAgICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT0gY29udGFpbmVkQnlOb2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50OiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbU5vZGVJc0NvbnRhaW5lZEJ5KG5vZGUsIG5vZGUub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFueURvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudDogZnVuY3Rpb24obm9kZXMpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWtvLnV0aWxzLmFycmF5Rmlyc3Qobm9kZXMsIGtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFnTmFtZUxvd2VyOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBGb3IgSFRNTCBlbGVtZW50cywgdGFnTmFtZSB3aWxsIGFsd2F5cyBiZSB1cHBlciBjYXNlOyBmb3IgWEhUTUwgZWxlbWVudHMsIGl0J2xsIGJlIGxvd2VyIGNhc2UuXG4gICAgICAgICAgICAvLyBQb3NzaWJsZSBmdXR1cmUgb3B0aW1pemF0aW9uOiBJZiB3ZSBrbm93IGl0J3MgYW4gZWxlbWVudCBmcm9tIGFuIFhIVE1MIGRvY3VtZW50IChub3QgSFRNTCksXG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSAudG9Mb3dlckNhc2UoKSBhcyBpdCB3aWxsIGFsd2F5cyBiZSBsb3dlciBjYXNlIGFueXdheS5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXRjaEZ1bmN0aW9uRXJyb3JzOiBmdW5jdGlvbiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBrb1snb25FcnJvciddID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAga29bJ29uRXJyb3InXSAmJiBrb1snb25FcnJvciddKGUpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gOiBkZWxlZ2F0ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoa28udXRpbHMuY2F0Y2hGdW5jdGlvbkVycm9ycyhoYW5kbGVyKSwgdGltZW91dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmZXJFcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBrb1snb25FcnJvciddICYmIGtvWydvbkVycm9yJ10oZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGtvLnV0aWxzLmNhdGNoRnVuY3Rpb25FcnJvcnMoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIHZhciBtdXN0VXNlQXR0YWNoRXZlbnQgPSBpZVZlcnNpb24gJiYgZXZlbnRzVGhhdE11c3RCZVJlZ2lzdGVyZWRVc2luZ0F0dGFjaEV2ZW50W2V2ZW50VHlwZV07XG4gICAgICAgICAgICBpZiAoIWtvLm9wdGlvbnNbJ3VzZU9ubHlOYXRpdmVFdmVudHMnXSAmJiAhbXVzdFVzZUF0dGFjaEV2ZW50ICYmIGpRdWVyeUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UoZWxlbWVudClbJ2JpbmQnXShldmVudFR5cGUsIHdyYXBwZWRIYW5kbGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW11c3RVc2VBdHRhY2hFdmVudCAmJiB0eXBlb2YgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwcGVkSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuYXR0YWNoRXZlbnQgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHZhciBhdHRhY2hFdmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHsgd3JhcHBlZEhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCk7IH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50TmFtZSA9IFwib25cIiArIGV2ZW50VHlwZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGF0dGFjaEV2ZW50TmFtZSwgYXR0YWNoRXZlbnRIYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgIC8vIElFIGRvZXMgbm90IGRpc3Bvc2UgYXR0YWNoRXZlbnQgaGFuZGxlcnMgYXV0b21hdGljYWxseSAodW5saWtlIHdpdGggYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgICAgICAvLyBzbyB0byBhdm9pZCBsZWFrcywgd2UgaGF2ZSB0byByZW1vdmUgdGhlbSBtYW51YWxseS4gU2VlIGJ1ZyAjODU2XG4gICAgICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudChhdHRhY2hFdmVudE5hbWUsIGF0dGFjaEV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhZGRFdmVudExpc3RlbmVyIG9yIGF0dGFjaEV2ZW50XCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWdnZXJFdmVudDogZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpO1xuXG4gICAgICAgICAgICAvLyBGb3IgY2xpY2sgZXZlbnRzIG9uIGNoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMsIGpRdWVyeSB0b2dnbGVzIHRoZSBlbGVtZW50IGNoZWNrZWQgc3RhdGUgKmFmdGVyKiB0aGVcbiAgICAgICAgICAgIC8vIGV2ZW50IGhhbmRsZXIgcnVucyBpbnN0ZWFkIG9mICpiZWZvcmUqLiAoVGhpcyB3YXMgZml4ZWQgaW4gMS45IGZvciBjaGVja2JveGVzIGJ1dCBub3QgZm9yIHJhZGlvIGJ1dHRvbnMuKVxuICAgICAgICAgICAgLy8gSUUgZG9lc24ndCBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgd2hlbiB5b3UgdHJpZ2dlciB0aGUgY2xpY2sgZXZlbnQgdXNpbmcgXCJmaXJlRXZlbnRcIi5cbiAgICAgICAgICAgIC8vIEluIGJvdGggY2FzZXMsIHdlJ2xsIHVzZSB0aGUgY2xpY2sgbWV0aG9kIGluc3RlYWQuXG4gICAgICAgICAgICB2YXIgdXNlQ2xpY2tXb3JrYXJvdW5kID0gaXNDbGlja09uQ2hlY2thYmxlRWxlbWVudChlbGVtZW50LCBldmVudFR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWtvLm9wdGlvbnNbJ3VzZU9ubHlOYXRpdmVFdmVudHMnXSAmJiBqUXVlcnlJbnN0YW5jZSAmJiAhdXNlQ2xpY2tXb3JrYXJvdW5kKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UoZWxlbWVudClbJ3RyaWdnZXInXShldmVudFR5cGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRXZlbnQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc3BhdGNoRXZlbnQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudENhdGVnb3J5ID0ga25vd25FdmVudFR5cGVzQnlFdmVudE5hbWVbZXZlbnRUeXBlXSB8fCBcIkhUTUxFdmVudHNcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoZXZlbnRDYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudChldmVudFR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1c2VDbGlja1dvcmthcm91bmQgJiYgZWxlbWVudC5jbGljaykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuZmlyZUV2ZW50ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZpcmVFdmVudChcIm9uXCIgKyBldmVudFR5cGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1bndyYXBPYnNlcnZhYmxlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby5pc09ic2VydmFibGUodmFsdWUpID8gdmFsdWUoKSA6IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBlZWtPYnNlcnZhYmxlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby5pc09ic2VydmFibGUodmFsdWUpID8gdmFsdWUucGVlaygpIDogdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlRG9tTm9kZUNzc0NsYXNzOiB0b2dnbGVEb21Ob2RlQ3NzQ2xhc3MsXG5cbiAgICAgICAgc2V0VGV4dENvbnRlbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHRleHRDb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICgodmFsdWUgPT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdGhlcmUgdG8gYmUgZXhhY3RseSBvbmUgY2hpbGQ6IGEgdGV4dCBub2RlLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGNoaWxkcmVuLCBtb3JlIHRoYW4gb25lLCBvciBpZiBpdCdzIG5vdCBhIHRleHQgbm9kZSxcbiAgICAgICAgICAgIC8vIHdlJ2xsIGNsZWFyIGV2ZXJ5dGhpbmcgYW5kIGNyZWF0ZSBhIHNpbmdsZSB0ZXh0IG5vZGUuXG4gICAgICAgICAgICB2YXIgaW5uZXJUZXh0Tm9kZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFpbm5lclRleHROb2RlIHx8IGlubmVyVGV4dE5vZGUubm9kZVR5cGUgIT0gMyB8fCBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcoaW5uZXJUZXh0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKGVsZW1lbnQsIFtlbGVtZW50Lm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlubmVyVGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrby51dGlscy5mb3JjZVJlZnJlc2goZWxlbWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RWxlbWVudE5hbWU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgSUUgNi83IGlzc3VlXG4gICAgICAgICAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTk3XG4gICAgICAgICAgICAvLyAtIGh0dHA6Ly93d3cubWF0dHM0MTEuY29tL3Bvc3Qvc2V0dGluZ190aGVfbmFtZV9hdHRyaWJ1dGVfaW5faWVfZG9tL1xuICAgICAgICAgICAgaWYgKGllVmVyc2lvbiA8PSA3KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5tZXJnZUF0dHJpYnV0ZXMoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIiArIGVsZW1lbnQubmFtZSArIFwiJy8+XCIpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGUpIHt9IC8vIEZvciBJRTkgd2l0aCBkb2MgbW9kZSBcIklFOSBTdGFuZGFyZHNcIiBhbmQgYnJvd3NlciBtb2RlIFwiSUU5IENvbXBhdGliaWxpdHkgVmlld1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9yY2VSZWZyZXNoOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBhbiBJRTkgcmVuZGVyaW5nIGJ1ZyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMjA5XG4gICAgICAgICAgICBpZiAoaWVWZXJzaW9uID49IDkpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgdGV4dCBub2RlcyBhbmQgY29tbWVudCBub2RlcyAobW9zdCBsaWtlbHkgdmlydHVhbCBlbGVtZW50cyksIHdlIHdpbGwgaGF2ZSB0byByZWZyZXNoIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IG5vZGUubm9kZVR5cGUgPT0gMSA/IG5vZGUgOiBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuem9vbSA9IGVsZW0uc3R5bGUuem9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbnN1cmVTZWxlY3RFbGVtZW50SXNSZW5kZXJlZENvcnJlY3RseTogZnVuY3Rpb24oc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUU5IHJlbmRlcmluZyBidWcgLSBpdCBkb2Vzbid0IHJlbGlhYmx5IGRpc3BsYXkgYWxsIHRoZSB0ZXh0IGluIGR5bmFtaWNhbGx5LWFkZGVkIHNlbGVjdCBib3hlcyB1bmxlc3MgeW91IGZvcmNlIGl0IHRvIHJlLXJlbmRlciBieSB1cGRhdGluZyB0aGUgd2lkdGguXG4gICAgICAgICAgICAvLyAoU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMzEyLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU5MDg0OTQvc2VsZWN0LW9ubHktc2hvd3MtZmlyc3QtY2hhci1vZi1zZWxlY3RlZC1vcHRpb24pXG4gICAgICAgICAgICAvLyBBbHNvIGZpeGVzIElFNyBhbmQgSUU4IGJ1ZyB0aGF0IGNhdXNlcyBzZWxlY3RzIHRvIGJlIHplcm8gd2lkdGggaWYgZW5jbG9zZWQgYnkgJ2lmJyBvciAnd2l0aCcuIChTZWUgaXNzdWUgIzgzOSlcbiAgICAgICAgICAgIGlmIChpZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IHNlbGVjdEVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtaW4pO1xuICAgICAgICAgICAgbWF4ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKylcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFrZUFycmF5OiBmdW5jdGlvbihhcnJheUxpa2VPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXlMaWtlT2JqZWN0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5TGlrZU9iamVjdFtpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVTeW1ib2xPclN0cmluZzogZnVuY3Rpb24oaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIGNhblVzZVN5bWJvbHMgPyBTeW1ib2woaWRlbnRpZmllcikgOiBpZGVudGlmaWVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzSWU2IDogaXNJZTYsXG4gICAgICAgIGlzSWU3IDogaXNJZTcsXG4gICAgICAgIGllVmVyc2lvbiA6IGllVmVyc2lvbixcblxuICAgICAgICBnZXRGb3JtRmllbGRzOiBmdW5jdGlvbihmb3JtLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZHMgPSBrby51dGlscy5tYWtlQXJyYXkoZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpKS5jb25jYXQoa28udXRpbHMubWFrZUFycmF5KGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpO1xuICAgICAgICAgICAgdmFyIGlzTWF0Y2hpbmdGaWVsZCA9ICh0eXBlb2YgZmllbGROYW1lID09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24oZmllbGQpIHsgcmV0dXJuIGZpZWxkLm5hbWUgPT09IGZpZWxkTmFtZSB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbihmaWVsZCkgeyByZXR1cm4gZmllbGROYW1lLnRlc3QoZmllbGQubmFtZSkgfTsgLy8gVHJlYXQgZmllbGROYW1lIGFzIHJlZ2V4IG9yIG9iamVjdCBjb250YWluaW5nIHByZWRpY2F0ZVxuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBmaWVsZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaGluZ0ZpZWxkKGZpZWxkc1tpXSkpXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChmaWVsZHNbaV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlSnNvbjogZnVuY3Rpb24gKGpzb25TdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvblN0cmluZyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAganNvblN0cmluZyA9IGtvLnV0aWxzLnN0cmluZ1RyaW0oanNvblN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKGpzb25TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04gJiYgSlNPTi5wYXJzZSkgLy8gVXNlIG5hdGl2ZSBwYXJzaW5nIHdoZXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiICsganNvblN0cmluZykpKCk7IC8vIEZhbGxiYWNrIG9uIGxlc3Mgc2FmZSBwYXJzaW5nIGZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cmluZ2lmeUpzb246IGZ1bmN0aW9uIChkYXRhLCByZXBsYWNlciwgc3BhY2UpIHsgICAvLyByZXBsYWNlciBhbmQgc3BhY2UgYXJlIG9wdGlvbmFsXG4gICAgICAgICAgICBpZiAoIUpTT04gfHwgIUpTT04uc3RyaW5naWZ5KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoZGF0YSksIHJlcGxhY2VyLCBzcGFjZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zdEpzb246IGZ1bmN0aW9uICh1cmxPckZvcm0sIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG9wdGlvbnNbJ3BhcmFtcyddIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGluY2x1ZGVGaWVsZHMgPSBvcHRpb25zWydpbmNsdWRlRmllbGRzJ10gfHwgdGhpcy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdDtcbiAgICAgICAgICAgIHZhciB1cmwgPSB1cmxPckZvcm07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgZ2l2ZW4gYSBmb3JtLCB1c2UgaXRzICdhY3Rpb24nIFVSTCBhbmQgcGljayBvdXQgYW55IHJlcXVlc3RlZCBmaWVsZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmKCh0eXBlb2YgdXJsT3JGb3JtID09ICdvYmplY3QnKSAmJiAoa28udXRpbHMudGFnTmFtZUxvd2VyKHVybE9yRm9ybSkgPT09IFwiZm9ybVwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEZvcm0gPSB1cmxPckZvcm07XG4gICAgICAgICAgICAgICAgdXJsID0gb3JpZ2luYWxGb3JtLmFjdGlvbjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5jbHVkZUZpZWxkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0ga28udXRpbHMuZ2V0Rm9ybUZpZWxkcyhvcmlnaW5hbEZvcm0sIGluY2x1ZGVGaWVsZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gZmllbGRzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2ZpZWxkc1tqXS5uYW1lXSA9IGZpZWxkc1tqXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGEgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSB1cmw7XG4gICAgICAgICAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSAnZGF0YScgdGhpcyBpcyBhIG1vZGVsIG9iamVjdCwgd2UgaW5jbHVkZSBhbGwgcHJvcGVydGllcyBpbmNsdWRpbmcgdGhvc2UgaW5oZXJpdGVkIGZyb20gaXRzIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0ga28udXRpbHMuc3RyaW5naWZ5SnNvbihrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqZWN0Rm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgICAgb3B0aW9uc1snc3VibWl0dGVyJ10gPyBvcHRpb25zWydzdWJtaXR0ZXInXShmb3JtKSA6IGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZvcm0pOyB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMnLCBrby51dGlscyk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5Rm9yRWFjaCcsIGtvLnV0aWxzLmFycmF5Rm9yRWFjaCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5Rmlyc3QnLCBrby51dGlscy5hcnJheUZpcnN0KTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYXJyYXlGaWx0ZXInLCBrby51dGlscy5hcnJheUZpbHRlcik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXMnLCBrby51dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYXJyYXlJbmRleE9mJywga28udXRpbHMuYXJyYXlJbmRleE9mKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYXJyYXlNYXAnLCBrby51dGlscy5hcnJheU1hcCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5UHVzaEFsbCcsIGtvLnV0aWxzLmFycmF5UHVzaEFsbCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5UmVtb3ZlSXRlbScsIGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbSk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmV4dGVuZCcsIGtvLnV0aWxzLmV4dGVuZCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0Jywga28udXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3QpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5nZXRGb3JtRmllbGRzJywga28udXRpbHMuZ2V0Rm9ybUZpZWxkcyk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnBlZWtPYnNlcnZhYmxlJywga28udXRpbHMucGVla09ic2VydmFibGUpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5wb3N0SnNvbicsIGtvLnV0aWxzLnBvc3RKc29uKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucGFyc2VKc29uJywga28udXRpbHMucGFyc2VKc29uKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXInLCBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnN0cmluZ2lmeUpzb24nLCBrby51dGlscy5zdHJpbmdpZnlKc29uKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucmFuZ2UnLCBrby51dGlscy5yYW5nZSk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcycsIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnRyaWdnZXJFdmVudCcsIGtvLnV0aWxzLnRyaWdnZXJFdmVudCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnVud3JhcE9ic2VydmFibGUnLCBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMub2JqZWN0Rm9yRWFjaCcsIGtvLnV0aWxzLm9iamVjdEZvckVhY2gpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hZGRPclJlbW92ZUl0ZW0nLCBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0pO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5zZXRUZXh0Q29udGVudCcsIGtvLnV0aWxzLnNldFRleHRDb250ZW50KTtcbmtvLmV4cG9ydFN5bWJvbCgndW53cmFwJywga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSk7IC8vIENvbnZlbmllbnQgc2hvcnRoYW5kLCBiZWNhdXNlIHRoaXMgaXMgdXNlZCBzbyBjb21tb25seVxuXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZVsnYmluZCddKSB7XG4gICAgLy8gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgaXMgYSBzdGFuZGFyZCBwYXJ0IG9mIEVDTUFTY3JpcHQgNXRoIEVkaXRpb24gKERlY2VtYmVyIDIwMDksIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9wdWJsaWNhdGlvbnMvZmlsZXMvRUNNQS1TVC9FQ01BLTI2Mi5wZGYpXG4gICAgLy8gSW4gY2FzZSB0aGUgYnJvd3NlciBkb2Vzbid0IGltcGxlbWVudCBpdCBuYXRpdmVseSwgcHJvdmlkZSBhIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24uIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBwcm90b3R5cGUuanNcbiAgICBGdW5jdGlvbi5wcm90b3R5cGVbJ2JpbmQnXSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuY3Rpb24gPSB0aGlzO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseShvYmplY3QsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnRpYWxBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBwYXJ0aWFsQXJncy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseShvYmplY3QsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmtvLnV0aWxzLmRvbURhdGEgPSBuZXcgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdW5pcXVlSWQgPSAwO1xuICAgIHZhciBkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lID0gXCJfX2tvX19cIiArIChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuICAgIHZhciBkYXRhU3RvcmUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGdldEFsbChub2RlLCBjcmVhdGVJZk5vdEZvdW5kKSB7XG4gICAgICAgIHZhciBkYXRhU3RvcmVLZXkgPSBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdO1xuICAgICAgICB2YXIgaGFzRXhpc3RpbmdEYXRhU3RvcmUgPSBkYXRhU3RvcmVLZXkgJiYgKGRhdGFTdG9yZUtleSAhPT0gXCJudWxsXCIpICYmIGRhdGFTdG9yZVtkYXRhU3RvcmVLZXldO1xuICAgICAgICBpZiAoIWhhc0V4aXN0aW5nRGF0YVN0b3JlKSB7XG4gICAgICAgICAgICBpZiAoIWNyZWF0ZUlmTm90Rm91bmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGRhdGFTdG9yZUtleSA9IG5vZGVbZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZV0gPSBcImtvXCIgKyB1bmlxdWVJZCsrO1xuICAgICAgICAgICAgZGF0YVN0b3JlW2RhdGFTdG9yZUtleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YVN0b3JlW2RhdGFTdG9yZUtleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAobm9kZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0YUZvck5vZGUgPSBnZXRBbGwobm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbERhdGFGb3JOb2RlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhbGxEYXRhRm9yTm9kZVtrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChub2RlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgZG9tRGF0YSBrZXkgaWYgd2UgYXJlIGFjdHVhbGx5IGRlbGV0aW5nIGEgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZ2V0QWxsKG5vZGUsIGZhbHNlKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0YUZvck5vZGUgPSBnZXRBbGwobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBhbGxEYXRhRm9yTm9kZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGRhdGFTdG9yZUtleSA9IG5vZGVbZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBpZiAoZGF0YVN0b3JlS2V5KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFTdG9yZVtkYXRhU3RvcmVLZXldO1xuICAgICAgICAgICAgICAgIG5vZGVbZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBFeHBvc2luZyBcImRpZCBjbGVhblwiIGZsYWcgcHVyZWx5IHNvIHNwZWNzIGNhbiBpbmZlciB3aGV0aGVyIHRoaW5ncyBoYXZlIGJlZW4gY2xlYW5lZCB1cCBhcyBpbnRlbmRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5leHRLZXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAodW5pcXVlSWQrKykgKyBkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tRGF0YScsIGtvLnV0aWxzLmRvbURhdGEpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21EYXRhLmNsZWFyJywga28udXRpbHMuZG9tRGF0YS5jbGVhcik7IC8vIEV4cG9ydGluZyBvbmx5IHNvIHNwZWNzIGNhbiBjbGVhciB1cCBhZnRlciB0aGVtc2VsdmVzIGZ1bGx5XG5cbmtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbCA9IG5ldyAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG4gICAgdmFyIGNsZWFuYWJsZU5vZGVUeXBlcyA9IHsgMTogdHJ1ZSwgODogdHJ1ZSwgOTogdHJ1ZSB9OyAgICAgICAvLyBFbGVtZW50LCBDb21tZW50LCBEb2N1bWVudFxuICAgIHZhciBjbGVhbmFibGVOb2RlVHlwZXNXaXRoRGVzY2VuZGFudHMgPSB7IDE6IHRydWUsIDk6IHRydWUgfTsgLy8gRWxlbWVudCwgRG9jdW1lbnRcblxuICAgIGZ1bmN0aW9uIGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGNyZWF0ZUlmTm90Rm91bmQpIHtcbiAgICAgICAgdmFyIGFsbERpc3Bvc2VDYWxsYmFja3MgPSBrby51dGlscy5kb21EYXRhLmdldChub2RlLCBkb21EYXRhS2V5KTtcbiAgICAgICAgaWYgKChhbGxEaXNwb3NlQ2FsbGJhY2tzID09PSB1bmRlZmluZWQpICYmIGNyZWF0ZUlmTm90Rm91bmQpIHtcbiAgICAgICAgICAgIGFsbERpc3Bvc2VDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIGRvbURhdGFLZXksIGFsbERpc3Bvc2VDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGxEaXNwb3NlQ2FsbGJhY2tzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95Q2FsbGJhY2tzQ29sbGVjdGlvbihub2RlKSB7XG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIGRvbURhdGFLZXksIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW5TaW5nbGVOb2RlKG5vZGUpIHtcbiAgICAgICAgLy8gUnVuIGFsbCB0aGUgZGlzcG9zZSBjYWxsYmFja3NcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApOyAvLyBDbG9uZSwgYXMgdGhlIGFycmF5IG1heSBiZSBtb2RpZmllZCBkdXJpbmcgaXRlcmF0aW9uICh0eXBpY2FsbHksIGNhbGxiYWNrcyB3aWxsIHJlbW92ZSB0aGVtc2VsdmVzKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXJhc2UgdGhlIERPTSBkYXRhXG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuY2xlYXIobm9kZSk7XG5cbiAgICAgICAgLy8gUGVyZm9ybSBjbGVhbnVwIG5lZWRlZCBieSBleHRlcm5hbCBsaWJyYXJpZXMgKGN1cnJlbnRseSBvbmx5IGpRdWVyeSwgYnV0IGNhbiBiZSBleHRlbmRlZClcbiAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsW1wiY2xlYW5FeHRlcm5hbERhdGFcIl0obm9kZSk7XG5cbiAgICAgICAgLy8gQ2xlYXIgYW55IGltbWVkaWF0ZS1jaGlsZCBjb21tZW50IG5vZGVzLCBhcyB0aGVzZSB3b3VsZG4ndCBoYXZlIGJlZW4gZm91bmQgYnlcbiAgICAgICAgLy8gbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgaW4gY2xlYW5Ob2RlKCkgKGNvbW1lbnQgbm9kZXMgYXJlbid0IGVsZW1lbnRzKVxuICAgICAgICBpZiAoY2xlYW5hYmxlTm9kZVR5cGVzV2l0aERlc2NlbmRhbnRzW25vZGUubm9kZVR5cGVdKVxuICAgICAgICAgICAgY2xlYW5JbW1lZGlhdGVDb21tZW50VHlwZUNoaWxkcmVuKG5vZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFuSW1tZWRpYXRlQ29tbWVudFR5cGVDaGlsZHJlbihub2RlV2l0aENoaWxkcmVuKSB7XG4gICAgICAgIHZhciBjaGlsZCwgbmV4dENoaWxkID0gbm9kZVdpdGhDaGlsZHJlbi5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY2hpbGQgPSBuZXh0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5leHRDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSA4KVxuICAgICAgICAgICAgICAgIGNsZWFuU2luZ2xlTm9kZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGREaXNwb3NlQ2FsbGJhY2sgOiBmdW5jdGlvbihub2RlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgZ2V0RGlzcG9zZUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSwgdHJ1ZSkucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRGlzcG9zZUNhbGxiYWNrIDogZnVuY3Rpb24obm9kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3NDb2xsZWN0aW9uID0gZ2V0RGlzcG9zZUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0oY2FsbGJhY2tzQ29sbGVjdGlvbiwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NDb2xsZWN0aW9uLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICBkZXN0cm95Q2FsbGJhY2tzQ29sbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhbk5vZGUgOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBjbGVhbiB0aGlzIG5vZGUsIHdoZXJlIGFwcGxpY2FibGVcbiAgICAgICAgICAgIGlmIChjbGVhbmFibGVOb2RlVHlwZXNbbm9kZS5ub2RlVHlwZV0pIHtcbiAgICAgICAgICAgICAgICBjbGVhblNpbmdsZU5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgICAgICAvLyAuLi4gdGhlbiBpdHMgZGVzY2VuZGFudHMsIHdoZXJlIGFwcGxpY2FibGVcbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5hYmxlTm9kZVR5cGVzV2l0aERlc2NlbmRhbnRzW25vZGUubm9kZVR5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBkZXNjZW5kYW50cyBsaXN0IGluIGNhc2UgaXQgY2hhbmdlcyBkdXJpbmcgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjZW5kYW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheVB1c2hBbGwoZGVzY2VuZGFudHMsIG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBkZXNjZW5kYW50cy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhblNpbmdsZU5vZGUoZGVzY2VuZGFudHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZU5vZGUgOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBrby5jbGVhbk5vZGUobm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBcImNsZWFuRXh0ZXJuYWxEYXRhXCIgOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBzdXBwb3J0IGZvciBqUXVlcnkgaGVyZSBiZWNhdXNlIGl0J3Mgc28gY29tbW9ubHkgdXNlZC5cbiAgICAgICAgICAgIC8vIE1hbnkgalF1ZXJ5IHBsdWdpbnMgKGluY2x1ZGluZyBqcXVlcnkudG1wbCkgc3RvcmUgZGF0YSB1c2luZyBqUXVlcnkncyBlcXVpdmFsZW50IG9mIGRvbURhdGFcbiAgICAgICAgICAgIC8vIHNvIG5vdGlmeSBpdCB0byB0ZWFyIGRvd24gYW55IHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5vZGUgJiBkZXNjZW5kYW50cyBoZXJlLlxuICAgICAgICAgICAgaWYgKGpRdWVyeUluc3RhbmNlICYmICh0eXBlb2YgalF1ZXJ5SW5zdGFuY2VbJ2NsZWFuRGF0YSddID09IFwiZnVuY3Rpb25cIikpXG4gICAgICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2VbJ2NsZWFuRGF0YSddKFtub2RlXSk7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbmtvLmNsZWFuTm9kZSA9IGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5jbGVhbk5vZGU7IC8vIFNob3J0aGFuZCBuYW1lIGZvciBjb252ZW5pZW5jZVxua28ucmVtb3ZlTm9kZSA9IGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVOb2RlOyAvLyBTaG9ydGhhbmQgbmFtZSBmb3IgY29udmVuaWVuY2VcbmtvLmV4cG9ydFN5bWJvbCgnY2xlYW5Ob2RlJywga28uY2xlYW5Ob2RlKTtcbmtvLmV4cG9ydFN5bWJvbCgncmVtb3ZlTm9kZScsIGtvLnJlbW92ZU5vZGUpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21Ob2RlRGlzcG9zYWwnLCBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrJywga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2snLCBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vbmUgPSBbMCwgXCJcIiwgXCJcIl0sXG4gICAgICAgIHRhYmxlID0gWzEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCJdLFxuICAgICAgICB0Ym9keSA9IFsyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiXSxcbiAgICAgICAgdHIgPSBbMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sXG4gICAgICAgIHNlbGVjdCA9IFsxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIl0sXG4gICAgICAgIGxvb2t1cCA9IHtcbiAgICAgICAgICAgICd0aGVhZCc6IHRhYmxlLFxuICAgICAgICAgICAgJ3Rib2R5JzogdGFibGUsXG4gICAgICAgICAgICAndGZvb3QnOiB0YWJsZSxcbiAgICAgICAgICAgICd0cic6IHRib2R5LFxuICAgICAgICAgICAgJ3RkJzogdHIsXG4gICAgICAgICAgICAndGgnOiB0cixcbiAgICAgICAgICAgICdvcHRpb24nOiBzZWxlY3QsXG4gICAgICAgICAgICAnb3B0Z3JvdXAnOiBzZWxlY3RcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCBmb3Igb2xkIElFIGlmIHlvdSdyZSAqbm90KiB1c2luZyBlaXRoZXIgalF1ZXJ5IG9yIGlubmVyU2hpdi4gRG9lc24ndCBhZmZlY3Qgb3RoZXIgY2FzZXMuXG4gICAgICAgIG1heVJlcXVpcmVDcmVhdGVFbGVtZW50SGFjayA9IGtvLnV0aWxzLmllVmVyc2lvbiA8PSA4O1xuXG4gICAgZnVuY3Rpb24gZ2V0V3JhcCh0YWdzKSB7XG4gICAgICAgIHZhciBtID0gdGFncy5tYXRjaCgvXjwoW2Etel0rKVsgPl0vKTtcbiAgICAgICAgcmV0dXJuIChtICYmIGxvb2t1cFttWzFdXSkgfHwgbm9uZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaW1wbGVIdG1sUGFyc2UoaHRtbCwgZG9jdW1lbnRDb250ZXh0KSB7XG4gICAgICAgIGRvY3VtZW50Q29udGV4dCB8fCAoZG9jdW1lbnRDb250ZXh0ID0gZG9jdW1lbnQpO1xuICAgICAgICB2YXIgd2luZG93Q29udGV4dCA9IGRvY3VtZW50Q29udGV4dFsncGFyZW50V2luZG93J10gfHwgZG9jdW1lbnRDb250ZXh0WydkZWZhdWx0VmlldyddIHx8IHdpbmRvdztcblxuICAgICAgICAvLyBCYXNlZCBvbiBqUXVlcnkncyBcImNsZWFuXCIgZnVuY3Rpb24sIGJ1dCBvbmx5IGFjY291bnRpbmcgZm9yIHRhYmxlLXJlbGF0ZWQgZWxlbWVudHMuXG4gICAgICAgIC8vIElmIHlvdSBoYXZlIHJlZmVyZW5jZWQgalF1ZXJ5LCB0aGlzIHdvbid0IGJlIHVzZWQgYW55d2F5IC0gS08gd2lsbCB1c2UgalF1ZXJ5J3MgXCJjbGVhblwiIGZ1bmN0aW9uIGRpcmVjdGx5XG5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoZXJlJ3Mgc3RpbGwgYW4gaXNzdWUgaW4gSUUgPCA5IHdoZXJlYnkgaXQgd2lsbCBkaXNjYXJkIGNvbW1lbnQgbm9kZXMgdGhhdCBhcmUgdGhlIGZpcnN0IGNoaWxkIG9mXG4gICAgICAgIC8vIGEgZGVzY2VuZGFudCBub2RlLiBGb3IgZXhhbXBsZTogXCI8ZGl2PjwhLS0gbXljb21tZW50IC0tPmFiYzwvZGl2PlwiIHdpbGwgZ2V0IHBhcnNlZCBhcyBcIjxkaXY+YWJjPC9kaXY+XCJcbiAgICAgICAgLy8gVGhpcyB3b24ndCBhZmZlY3QgYW55b25lIHdobyBoYXMgcmVmZXJlbmNlZCBqUXVlcnksIGFuZCB0aGVyZSdzIGFsd2F5cyB0aGUgd29ya2Fyb3VuZCBvZiBpbnNlcnRpbmcgYSBkdW1teSBub2RlXG4gICAgICAgIC8vIChwb3NzaWJseSBhIHRleHQgbm9kZSkgaW4gZnJvbnQgb2YgdGhlIGNvbW1lbnQuIFNvLCBLTyBkb2VzIG5vdCBhdHRlbXB0IHRvIHdvcmthcm91bmQgdGhpcyBJRSBpc3N1ZSBhdXRvbWF0aWNhbGx5IGF0IHByZXNlbnQuXG5cbiAgICAgICAgLy8gVHJpbSB3aGl0ZXNwYWNlLCBvdGhlcndpc2UgaW5kZXhPZiB3b24ndCB3b3JrIGFzIGV4cGVjdGVkXG4gICAgICAgIHZhciB0YWdzID0ga28udXRpbHMuc3RyaW5nVHJpbShodG1sKS50b0xvd2VyQ2FzZSgpLCBkaXYgPSBkb2N1bWVudENvbnRleHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgICAgIHdyYXAgPSBnZXRXcmFwKHRhZ3MpLFxuICAgICAgICAgICAgZGVwdGggPSB3cmFwWzBdO1xuXG4gICAgICAgIC8vIEdvIHRvIGh0bWwgYW5kIGJhY2ssIHRoZW4gcGVlbCBvZmYgZXh0cmEgd3JhcHBlcnNcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGFsd2F5cyBwcmVmaXggd2l0aCBzb21lIGR1bW15IHRleHQsIGJlY2F1c2Ugb3RoZXJ3aXNlLCBJRTw5IHdpbGwgc3RyaXAgb3V0IGxlYWRpbmcgY29tbWVudCBub2RlcyBpbiBkZXNjZW5kYW50cy4gVG90YWwgbWFkbmVzcy5cbiAgICAgICAgdmFyIG1hcmt1cCA9IFwiaWdub3JlZDxkaXY+XCIgKyB3cmFwWzFdICsgaHRtbCArIHdyYXBbMl0gKyBcIjwvZGl2PlwiO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd0NvbnRleHRbJ2lubmVyU2hpdiddID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGlubmVyU2hpdiBpcyBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBodG1sNXNoaXYuIFdlIHNob3VsZCBjb25zaWRlciBhZGRpbmdcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgZm9yIGh0bWw1c2hpdiAoZXhjZXB0IGlmIG5vIGV4cGxpY2l0IHN1cHBvcnQgaXMgbmVlZGVkLCBlLmcuLCBpZiBodG1sNXNoaXZcbiAgICAgICAgICAgIC8vIHNvbWVob3cgc2hpbXMgdGhlIG5hdGl2ZSBBUElzIHNvIGl0IGp1c3Qgd29ya3MgYW55d2F5KVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHdpbmRvd0NvbnRleHRbJ2lubmVyU2hpdiddKG1hcmt1cCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1heVJlcXVpcmVDcmVhdGVFbGVtZW50SGFjaykge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdteS1lbGVtZW50JykgdHJpY2sgdG8gZW5hYmxlIGN1c3RvbSBlbGVtZW50cyBpbiBJRTYtOFxuICAgICAgICAgICAgICAgIC8vIG9ubHkgd29ya3MgaWYgd2UgYXNzaWduIGlubmVySFRNTCBvbiBhbiBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGRvY3VtZW50LlxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q29udGV4dC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwO1xuXG4gICAgICAgICAgICBpZiAobWF5UmVxdWlyZUNyZWF0ZUVsZW1lbnRIYWNrKSB7XG4gICAgICAgICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1vdmUgdG8gdGhlIHJpZ2h0IGRlcHRoXG4gICAgICAgIHdoaWxlIChkZXB0aC0tKVxuICAgICAgICAgICAgZGl2ID0gZGl2Lmxhc3RDaGlsZDtcblxuICAgICAgICByZXR1cm4ga28udXRpbHMubWFrZUFycmF5KGRpdi5sYXN0Q2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24galF1ZXJ5SHRtbFBhcnNlKGh0bWwsIGRvY3VtZW50Q29udGV4dCkge1xuICAgICAgICAvLyBqUXVlcnkncyBcInBhcnNlSFRNTFwiIGZ1bmN0aW9uIHdhcyBpbnRyb2R1Y2VkIGluIGpRdWVyeSAxLjguMCBhbmQgaXMgYSBkb2N1bWVudGVkIHB1YmxpYyBBUEkuXG4gICAgICAgIGlmIChqUXVlcnlJbnN0YW5jZVsncGFyc2VIVE1MJ10pIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnlJbnN0YW5jZVsncGFyc2VIVE1MJ10oaHRtbCwgZG9jdW1lbnRDb250ZXh0KSB8fCBbXTsgLy8gRW5zdXJlIHdlIGFsd2F5cyByZXR1cm4gYW4gYXJyYXkgYW5kIG5ldmVyIG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciBqUXVlcnkgPCAxLjguMCwgd2UgZmFsbCBiYWNrIG9uIHRoZSB1bmRvY3VtZW50ZWQgaW50ZXJuYWwgXCJjbGVhblwiIGZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIGVsZW1zID0galF1ZXJ5SW5zdGFuY2VbJ2NsZWFuJ10oW2h0bWxdLCBkb2N1bWVudENvbnRleHQpO1xuXG4gICAgICAgICAgICAvLyBBcyBvZiBqUXVlcnkgMS43LjEsIGpRdWVyeSBwYXJzZXMgdGhlIEhUTUwgYnkgYXBwZW5kaW5nIGl0IHRvIHNvbWUgZHVtbXkgcGFyZW50IG5vZGVzIGhlbGQgaW4gYW4gaW4tbWVtb3J5IGRvY3VtZW50IGZyYWdtZW50LlxuICAgICAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgaXQgbmV2ZXIgY2xlYXJzIHRoZSBkdW1teSBwYXJlbnQgbm9kZXMgZnJvbSB0aGUgZG9jdW1lbnQgZnJhZ21lbnQsIHNvIGl0IGxlYWtzIG1lbW9yeSBvdmVyIHRpbWUuXG4gICAgICAgICAgICAvLyBGaXggdGhpcyBieSBmaW5kaW5nIHRoZSB0b3AtbW9zdCBkdW1teSBwYXJlbnQgZWxlbWVudCwgYW5kIGRldGFjaGluZyBpdCBmcm9tIGl0cyBvd25lciBmcmFnbWVudC5cbiAgICAgICAgICAgIGlmIChlbGVtcyAmJiBlbGVtc1swXSkge1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIHRvcC1tb3N0IHBhcmVudCBlbGVtZW50IHRoYXQncyBhIGRpcmVjdCBjaGlsZCBvZiBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBlbGVtc1swXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMTEgLyogaS5lLiwgRG9jdW1lbnRGcmFnbWVudCAqLylcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAvLyAuLi4gdGhlbiBkZXRhY2ggaXRcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50ID0gZnVuY3Rpb24oaHRtbCwgZG9jdW1lbnRDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBqUXVlcnlJbnN0YW5jZSA/XG4gICAgICAgICAgICBqUXVlcnlIdG1sUGFyc2UoaHRtbCwgZG9jdW1lbnRDb250ZXh0KSA6ICAgLy8gQXMgYmVsb3csIGJlbmVmaXQgZnJvbSBqUXVlcnkncyBvcHRpbWlzYXRpb25zIHdoZXJlIHBvc3NpYmxlXG4gICAgICAgICAgICBzaW1wbGVIdG1sUGFyc2UoaHRtbCwgZG9jdW1lbnRDb250ZXh0KTsgIC8vIC4uLiBvdGhlcndpc2UsIHRoaXMgc2ltcGxlIGxvZ2ljIHdpbGwgZG8gaW4gbW9zdCBjb21tb24gY2FzZXMuXG4gICAgfTtcblxuICAgIGtvLnV0aWxzLnNldEh0bWwgPSBmdW5jdGlvbihub2RlLCBodG1sKSB7XG4gICAgICAgIGtvLnV0aWxzLmVtcHR5RG9tTm9kZShub2RlKTtcblxuICAgICAgICAvLyBUaGVyZSdzIG5vIGxlZ2l0aW1hdGUgcmVhc29uIHRvIGRpc3BsYXkgYSBzdHJpbmdpZmllZCBvYnNlcnZhYmxlIHdpdGhvdXQgdW53cmFwcGluZyBpdCwgc28gd2UnbGwgdW53cmFwIGl0XG4gICAgICAgIGh0bWwgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGh0bWwpO1xuXG4gICAgICAgIGlmICgoaHRtbCAhPT0gbnVsbCkgJiYgKGh0bWwgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCAhPSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBqUXVlcnkgY29udGFpbnMgYSBsb3Qgb2Ygc29waGlzdGljYXRlZCBjb2RlIHRvIHBhcnNlIGFyYml0cmFyeSBIVE1MIGZyYWdtZW50cyxcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIDx0cj4gZWxlbWVudHMgd2hpY2ggYXJlIG5vdCBub3JtYWxseSBhbGxvd2VkIHRvIGV4aXN0IG9uIHRoZWlyIG93bi5cbiAgICAgICAgICAgIC8vIElmIHlvdSd2ZSByZWZlcmVuY2VkIGpRdWVyeSB3ZSdsbCB1c2UgdGhhdCByYXRoZXIgdGhhbiBkdXBsaWNhdGluZyBpdHMgY29kZS5cbiAgICAgICAgICAgIGlmIChqUXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlKG5vZGUpWydodG1sJ10oaHRtbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIC4uLiBvdGhlcndpc2UsIHVzZSBLTydzIG93biBwYXJzaW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWROb2RlcyA9IGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KGh0bWwsIG5vZGUub3duZXJEb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChwYXJzZWROb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCd1dGlscy5wYXJzZUh0bWxGcmFnbWVudCcsIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuc2V0SHRtbCcsIGtvLnV0aWxzLnNldEh0bWwpO1xuXG5rby5tZW1vaXphdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lbW9zID0ge307XG5cbiAgICBmdW5jdGlvbiByYW5kb21NYXg4SGV4Q2hhcnMoKSB7XG4gICAgICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKCkge1xuICAgICAgICByZXR1cm4gcmFuZG9tTWF4OEhleENoYXJzKCkgKyByYW5kb21NYXg4SGV4Q2hhcnMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZE1lbW9Ob2Rlcyhyb290Tm9kZSwgYXBwZW5kVG9BcnJheSkge1xuICAgICAgICBpZiAoIXJvb3ROb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT0gOCkge1xuICAgICAgICAgICAgdmFyIG1lbW9JZCA9IGtvLm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHQocm9vdE5vZGUubm9kZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChtZW1vSWQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBhcHBlbmRUb0FycmF5LnB1c2goeyBkb21Ob2RlOiByb290Tm9kZSwgbWVtb0lkOiBtZW1vSWQgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNoaWxkTm9kZXMgPSByb290Tm9kZS5jaGlsZE5vZGVzLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgZmluZE1lbW9Ob2RlcyhjaGlsZE5vZGVzW2ldLCBhcHBlbmRUb0FycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lbW9pemU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBvbmx5IHBhc3MgYSBmdW5jdGlvbiB0byBrby5tZW1vaXphdGlvbi5tZW1vaXplKClcIik7XG4gICAgICAgICAgICB2YXIgbWVtb0lkID0gZ2VuZXJhdGVSYW5kb21JZCgpO1xuICAgICAgICAgICAgbWVtb3NbbWVtb0lkXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIFwiPCEtLVtrb19tZW1vOlwiICsgbWVtb0lkICsgXCJdLS0+XCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5tZW1vaXplOiBmdW5jdGlvbiAobWVtb0lkLCBjYWxsYmFja1BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gbWVtb3NbbWVtb0lkXTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIiArIG1lbW9JZCArIFwiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBjYWxsYmFja1BhcmFtcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgZGVsZXRlIG1lbW9zW21lbW9JZF07IH1cbiAgICAgICAgfSxcblxuICAgICAgICB1bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHM6IGZ1bmN0aW9uIChkb21Ob2RlLCBleHRyYUNhbGxiYWNrUGFyYW1zQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBtZW1vcyA9IFtdO1xuICAgICAgICAgICAgZmluZE1lbW9Ob2Rlcyhkb21Ob2RlLCBtZW1vcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG1lbW9zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbWVtb3NbaV0uZG9tTm9kZTtcbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRQYXJhbXMgPSBbbm9kZV07XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhQ2FsbGJhY2tQYXJhbXNBcnJheSlcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGNvbWJpbmVkUGFyYW1zLCBleHRyYUNhbGxiYWNrUGFyYW1zQXJyYXkpO1xuICAgICAgICAgICAgICAgIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZShtZW1vc1tpXS5tZW1vSWQsIGNvbWJpbmVkUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9IFwiXCI7IC8vIE5ldXRlciB0aGlzIG5vZGUgc28gd2UgZG9uJ3QgdHJ5IHRvIHVubWVtb2l6ZSBpdCBhZ2FpblxuICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTsgLy8gSWYgcG9zc2libGUsIGVyYXNlIGl0IHRvdGFsbHkgKG5vdCBhbHdheXMgcG9zc2libGUgLSBzb21lb25lIGVsc2UgbWlnaHQganVzdCBob2xkIGEgcmVmZXJlbmNlIHRvIGl0IHRoZW4gY2FsbCB1bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHMgYWdhaW4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VNZW1vVGV4dDogZnVuY3Rpb24gKG1lbW9UZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBtZW1vVGV4dC5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uJywga28ubWVtb2l6YXRpb24pO1xua28uZXhwb3J0U3ltYm9sKCdtZW1vaXphdGlvbi5tZW1vaXplJywga28ubWVtb2l6YXRpb24ubWVtb2l6ZSk7XG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnVubWVtb2l6ZScsIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZSk7XG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnBhcnNlTWVtb1RleHQnLCBrby5tZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0KTtcbmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzJywga28ubWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzKTtcbmtvLnRhc2tzID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NoZWR1bGVyLFxuICAgICAgICB0YXNrUXVldWUgPSBbXSxcbiAgICAgICAgdGFza1F1ZXVlTGVuZ3RoID0gMCxcbiAgICAgICAgbmV4dEhhbmRsZSA9IDEsXG4gICAgICAgIG5leHRJbmRleFRvUHJvY2VzcyA9IDA7XG5cbiAgICBpZiAod2luZG93WydNdXRhdGlvbk9ic2VydmVyJ10pIHtcbiAgICAgICAgLy8gQ2hyb21lIDI3KywgRmlyZWZveCAxNCssIElFIDExKywgT3BlcmEgMTUrLCBTYWZhcmkgNi4xK1xuICAgICAgICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQgKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdiAqIExpY2Vuc2U6IE1JVFxuICAgICAgICBzY2hlZHVsZXIgPSAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKS5vYnNlcnZlKGRpdiwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpOyB9O1xuICAgICAgICB9KShzY2hlZHVsZWRQcm9jZXNzKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50ICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBJRSA2LTEwXG4gICAgICAgIC8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL1l1enVKUy9zZXRJbW1lZGlhdGUgKiBDb3B5cmlnaHQgKGMpIDIwMTIgQmFybmVzYW5kbm9ibGUuY29tLCBsbGMsIERvbmF2b24gV2VzdCwgYW5kIERvbWVuaWMgRGVuaWNvbGEgKiBMaWNlbnNlOiBNSVRcbiAgICAgICAgc2NoZWR1bGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICAgICAgICBpZiAodGFza1F1ZXVlTGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBFYWNoIG1hcmsgcmVwcmVzZW50cyB0aGUgZW5kIG9mIGEgbG9naWNhbCBncm91cCBvZiB0YXNrcyBhbmQgdGhlIG51bWJlciBvZiB0aGVzZSBncm91cHMgaXNcbiAgICAgICAgICAgIC8vIGxpbWl0ZWQgdG8gcHJldmVudCB1bmNoZWNrZWQgcmVjdXJzaW9uLlxuICAgICAgICAgICAgdmFyIG1hcmsgPSB0YXNrUXVldWVMZW5ndGgsIGNvdW50TWFya3MgPSAwO1xuXG4gICAgICAgICAgICAvLyBuZXh0SW5kZXhUb1Byb2Nlc3Mga2VlcHMgdHJhY2sgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSBxdWV1ZTsgcHJvY2Vzc1Rhc2tzIGNhbiBiZSBjYWxsZWQgcmVjdXJzaXZlbHkgd2l0aG91dCBpc3N1ZVxuICAgICAgICAgICAgZm9yICh2YXIgdGFzazsgbmV4dEluZGV4VG9Qcm9jZXNzIDwgdGFza1F1ZXVlTGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzayA9IHRhc2tRdWV1ZVtuZXh0SW5kZXhUb1Byb2Nlc3MrK10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleFRvUHJvY2VzcyA+IG1hcmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgrK2NvdW50TWFya3MgPj0gNTAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleFRvUHJvY2VzcyA9IHRhc2tRdWV1ZUxlbmd0aDsgICAvLyBza2lwIGFsbCB0YXNrcyByZW1haW5pbmcgaW4gdGhlIHF1ZXVlIHNpbmNlIGFueSBvZiB0aGVtIGNvdWxkIGJlIGNhdXNpbmcgdGhlIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmRlZmVyRXJyb3IoRXJyb3IoXCInVG9vIG11Y2ggcmVjdXJzaW9uJyBhZnRlciBwcm9jZXNzaW5nIFwiICsgY291bnRNYXJrcyArIFwiIHRhc2sgZ3JvdXBzLlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrID0gdGFza1F1ZXVlTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kZWZlckVycm9yKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlZFByb2Nlc3MoKSB7XG4gICAgICAgIHByb2Nlc3NUYXNrcygpO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBxdWV1ZVxuICAgICAgICBuZXh0SW5kZXhUb1Byb2Nlc3MgPSB0YXNrUXVldWVMZW5ndGggPSB0YXNrUXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2tQcm9jZXNzaW5nKCkge1xuICAgICAgICBrby50YXNrc1snc2NoZWR1bGVyJ10oc2NoZWR1bGVkUHJvY2Vzcyk7XG4gICAgfVxuXG4gICAgdmFyIHRhc2tzID0ge1xuICAgICAgICAnc2NoZWR1bGVyJzogc2NoZWR1bGVyLCAgICAgLy8gQWxsb3cgb3ZlcnJpZGluZyB0aGUgc2NoZWR1bGVyXG5cbiAgICAgICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICBpZiAoIXRhc2tRdWV1ZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlVGFza1Byb2Nlc3NpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFza1F1ZXVlW3Rhc2tRdWV1ZUxlbmd0aCsrXSA9IGZ1bmM7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFuZGxlIC0gKG5leHRIYW5kbGUgLSB0YXNrUXVldWVMZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IG5leHRJbmRleFRvUHJvY2VzcyAmJiBpbmRleCA8IHRhc2tRdWV1ZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVtpbmRleF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEZvciB0ZXN0aW5nIG9ubHk6IHJlc2V0IHRoZSBxdWV1ZSBhbmQgcmV0dXJuIHRoZSBwcmV2aW91cyBxdWV1ZSBsZW5ndGhcbiAgICAgICAgJ3Jlc2V0Rm9yVGVzdGluZyc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSB0YXNrUXVldWVMZW5ndGggLSBuZXh0SW5kZXhUb1Byb2Nlc3M7XG4gICAgICAgICAgICBuZXh0SW5kZXhUb1Byb2Nlc3MgPSB0YXNrUXVldWVMZW5ndGggPSB0YXNrUXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcnVuRWFybHk6IHByb2Nlc3NUYXNrc1xuICAgIH07XG5cbiAgICByZXR1cm4gdGFza3M7XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3Rhc2tzJywga28udGFza3MpO1xua28uZXhwb3J0U3ltYm9sKCd0YXNrcy5zY2hlZHVsZScsIGtvLnRhc2tzLnNjaGVkdWxlKTtcbi8va28uZXhwb3J0U3ltYm9sKCd0YXNrcy5jYW5jZWwnLCBrby50YXNrcy5jYW5jZWwpOyAgXCJjYW5jZWxcIiBpc24ndCBtaW5pZmllZFxua28uZXhwb3J0U3ltYm9sKCd0YXNrcy5ydW5FYXJseScsIGtvLnRhc2tzLnJ1bkVhcmx5KTtcbmtvLmV4dGVuZGVycyA9IHtcbiAgICAndGhyb3R0bGUnOiBmdW5jdGlvbih0YXJnZXQsIHRpbWVvdXQpIHtcbiAgICAgICAgLy8gVGhyb3R0bGluZyBtZWFucyB0d28gdGhpbmdzOlxuXG4gICAgICAgIC8vICgxKSBGb3IgZGVwZW5kZW50IG9ic2VydmFibGVzLCB3ZSB0aHJvdHRsZSAqZXZhbHVhdGlvbnMqIHNvIHRoYXQsIG5vIG1hdHRlciBob3cgZmFzdCBpdHMgZGVwZW5kZW5jaWVzXG4gICAgICAgIC8vICAgICBub3RpZnkgdXBkYXRlcywgdGhlIHRhcmdldCBkb2Vzbid0IHJlLWV2YWx1YXRlIChhbmQgaGVuY2UgZG9lc24ndCBub3RpZnkpIGZhc3RlciB0aGFuIGEgY2VydGFpbiByYXRlXG4gICAgICAgIHRhcmdldFsndGhyb3R0bGVFdmFsdWF0aW9uJ10gPSB0aW1lb3V0O1xuXG4gICAgICAgIC8vICgyKSBGb3Igd3JpdGFibGUgdGFyZ2V0cyAob2JzZXJ2YWJsZXMsIG9yIHdyaXRhYmxlIGRlcGVuZGVudCBvYnNlcnZhYmxlcyksIHdlIHRocm90dGxlICp3cml0ZXMqXG4gICAgICAgIC8vICAgICBzbyB0aGUgdGFyZ2V0IGNhbm5vdCBjaGFuZ2UgdmFsdWUgc3luY2hyb25vdXNseSBvciBmYXN0ZXIgdGhhbiBhIGNlcnRhaW4gcmF0ZVxuICAgICAgICB2YXIgd3JpdGVUaW1lb3V0SW5zdGFuY2UgPSBudWxsO1xuICAgICAgICByZXR1cm4ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSh7XG4gICAgICAgICAgICAncmVhZCc6IHRhcmdldCxcbiAgICAgICAgICAgICd3cml0ZSc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHdyaXRlVGltZW91dEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB3cml0ZVRpbWVvdXRJbnN0YW5jZSA9IGtvLnV0aWxzLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAncmF0ZUxpbWl0JzogZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB0aW1lb3V0LCBtZXRob2QsIGxpbWl0RnVuY3Rpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gb3B0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBvcHRpb25zWyd0aW1lb3V0J107XG4gICAgICAgICAgICBtZXRob2QgPSBvcHRpb25zWydtZXRob2QnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJhdGVMaW1pdCBzdXBlcnNlZGVzIGRlZmVycmVkIHVwZGF0ZXNcbiAgICAgICAgdGFyZ2V0Ll9kZWZlclVwZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgICBsaW1pdEZ1bmN0aW9uID0gbWV0aG9kID09ICdub3RpZnlXaGVuQ2hhbmdlc1N0b3AnID8gIGRlYm91bmNlIDogdGhyb3R0bGU7XG4gICAgICAgIHRhcmdldC5saW1pdChmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGxpbWl0RnVuY3Rpb24oY2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgJ2RlZmVycmVkJzogZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcXCdkZWZlcnJlZFxcJyBleHRlbmRlciBvbmx5IGFjY2VwdHMgdGhlIHZhbHVlIFxcJ3RydWVcXCcsIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZCB0byB0dXJuIGRlZmVycmFsIG9mZiBvbmNlIGVuYWJsZWQuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFyZ2V0Ll9kZWZlclVwZGF0ZXMpIHtcbiAgICAgICAgICAgIHRhcmdldC5fZGVmZXJVcGRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhcmdldC5saW1pdChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVVcGRhdGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby50YXNrcy5jYW5jZWwoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IGtvLnRhc2tzLnNjaGVkdWxlKGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVVcGRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbJ25vdGlmeVN1YnNjcmliZXJzJ10odW5kZWZpbmVkLCAnZGlydHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlVXBkYXRlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgICdub3RpZnknOiBmdW5jdGlvbih0YXJnZXQsIG5vdGlmeVdoZW4pIHtcbiAgICAgICAgdGFyZ2V0W1wiZXF1YWxpdHlDb21wYXJlclwiXSA9IG5vdGlmeVdoZW4gPT0gXCJhbHdheXNcIiA/XG4gICAgICAgICAgICBudWxsIDogIC8vIG51bGwgZXF1YWxpdHlDb21wYXJlciBtZWFucyB0byBhbHdheXMgbm90aWZ5XG4gICAgICAgICAgICB2YWx1ZXNBcmVQcmltaXRpdmVBbmRFcXVhbDtcbiAgICB9XG59O1xuXG52YXIgcHJpbWl0aXZlVHlwZXMgPSB7ICd1bmRlZmluZWQnOjEsICdib29sZWFuJzoxLCAnbnVtYmVyJzoxLCAnc3RyaW5nJzoxIH07XG5mdW5jdGlvbiB2YWx1ZXNBcmVQcmltaXRpdmVBbmRFcXVhbChhLCBiKSB7XG4gICAgdmFyIG9sZFZhbHVlSXNQcmltaXRpdmUgPSAoYSA9PT0gbnVsbCkgfHwgKHR5cGVvZihhKSBpbiBwcmltaXRpdmVUeXBlcyk7XG4gICAgcmV0dXJuIG9sZFZhbHVlSXNQcmltaXRpdmUgPyAoYSA9PT0gYikgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIHRpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dEluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGltZW91dEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aW1lb3V0SW5zdGFuY2UgPSBrby51dGlscy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHRpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dEluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SW5zdGFuY2UpO1xuICAgICAgICB0aW1lb3V0SW5zdGFuY2UgPSBrby51dGlscy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBseUV4dGVuZGVycyhyZXF1ZXN0ZWRFeHRlbmRlcnMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAocmVxdWVzdGVkRXh0ZW5kZXJzKSB7XG4gICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2gocmVxdWVzdGVkRXh0ZW5kZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXh0ZW5kZXJIYW5kbGVyID0ga28uZXh0ZW5kZXJzW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4dGVuZGVySGFuZGxlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXh0ZW5kZXJIYW5kbGVyKHRhcmdldCwgdmFsdWUpIHx8IHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmtvLmV4cG9ydFN5bWJvbCgnZXh0ZW5kZXJzJywga28uZXh0ZW5kZXJzKTtcblxua28uc3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldCwgY2FsbGJhY2ssIGRpc3Bvc2VDYWxsYmFjaykge1xuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5kaXNwb3NlQ2FsbGJhY2sgPSBkaXNwb3NlQ2FsbGJhY2s7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAga28uZXhwb3J0UHJvcGVydHkodGhpcywgJ2Rpc3Bvc2UnLCB0aGlzLmRpc3Bvc2UpO1xufTtcbmtvLnN1YnNjcmlwdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuZGlzcG9zZUNhbGxiYWNrKCk7XG59O1xuXG5rby5zdWJzY3JpYmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAga28udXRpbHMuc2V0UHJvdG90eXBlT2ZPckV4dGVuZCh0aGlzLCBrb19zdWJzY3JpYmFibGVfZm4pO1xuICAgIGtvX3N1YnNjcmliYWJsZV9mbi5pbml0KHRoaXMpO1xufVxuXG52YXIgZGVmYXVsdEV2ZW50ID0gXCJjaGFuZ2VcIjtcblxuLy8gTW92ZWQgb3V0IG9mIFwibGltaXRcIiB0byBhdm9pZCB0aGUgZXh0cmEgY2xvc3VyZVxuZnVuY3Rpb24gbGltaXROb3RpZnlTdWJzY3JpYmVycyh2YWx1ZSwgZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50IHx8IGV2ZW50ID09PSBkZWZhdWx0RXZlbnQpIHtcbiAgICAgICAgdGhpcy5fbGltaXRDaGFuZ2UodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdiZWZvcmVDaGFuZ2UnKSB7XG4gICAgICAgIHRoaXMuX2xpbWl0QmVmb3JlQ2hhbmdlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vcmlnTm90aWZ5U3Vic2NyaWJlcnModmFsdWUsIGV2ZW50KTtcbiAgICB9XG59XG5cbnZhciBrb19zdWJzY3JpYmFibGVfZm4gPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuX3N1YnNjcmlwdGlvbnMgPSB7IFwiY2hhbmdlXCI6IFtdIH07XG4gICAgICAgIGluc3RhbmNlLl92ZXJzaW9uTnVtYmVyID0gMTtcbiAgICB9LFxuXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoY2FsbGJhY2ssIGNhbGxiYWNrVGFyZ2V0LCBldmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBkZWZhdWx0RXZlbnQ7XG4gICAgICAgIHZhciBib3VuZENhbGxiYWNrID0gY2FsbGJhY2tUYXJnZXQgPyBjYWxsYmFjay5iaW5kKGNhbGxiYWNrVGFyZ2V0KSA6IGNhbGxiYWNrO1xuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcga28uc3Vic2NyaXB0aW9uKHNlbGYsIGJvdW5kQ2FsbGJhY2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbShzZWxmLl9zdWJzY3JpcHRpb25zW2V2ZW50XSwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlKVxuICAgICAgICAgICAgICAgIHNlbGYuYWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5iZWZvcmVTdWJzY3JpcHRpb25BZGQpXG4gICAgICAgICAgICBzZWxmLmJlZm9yZVN1YnNjcmlwdGlvbkFkZChldmVudCk7XG5cbiAgICAgICAgaWYgKCFzZWxmLl9zdWJzY3JpcHRpb25zW2V2ZW50XSlcbiAgICAgICAgICAgIHNlbGYuX3N1YnNjcmlwdGlvbnNbZXZlbnRdID0gW107XG4gICAgICAgIHNlbGYuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLnB1c2goc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH0sXG5cbiAgICBcIm5vdGlmeVN1YnNjcmliZXJzXCI6IGZ1bmN0aW9uICh2YWx1ZVRvTm90aWZ5LCBldmVudCkge1xuICAgICAgICBldmVudCA9IGV2ZW50IHx8IGRlZmF1bHRFdmVudDtcbiAgICAgICAgaWYgKGV2ZW50ID09PSBkZWZhdWx0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmVyc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1N1YnNjcmlwdGlvbnNGb3JFdmVudChldmVudCkpIHtcbiAgICAgICAgICAgIHZhciBzdWJzID0gZXZlbnQgPT09IGRlZmF1bHRFdmVudCAmJiB0aGlzLl9jaGFuZ2VTdWJzY3JpcHRpb25zIHx8IHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLnNsaWNlKDApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmJlZ2luKCk7IC8vIEJlZ2luIHN1cHByZXNzaW5nIGRlcGVuZGVuY3kgZGV0ZWN0aW9uIChieSBzZXR0aW5nIHRoZSB0b3AgZnJhbWUgdG8gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBzdWJzY3JpcHRpb247IHN1YnNjcmlwdGlvbiA9IHN1YnNbaV07ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGEgc3Vic2NyaXB0aW9uIHdhcyBkaXNwb3NlZCBkdXJpbmcgdGhlIGFycmF5Rm9yRWFjaCBjeWNsZSwgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGlzRGlzcG9zZWQgb24gZWFjaCBzdWJzY3JpcHRpb24gYmVmb3JlIGludm9raW5nIGl0cyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbi5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKHZhbHVlVG9Ob3RpZnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5lbmQoKTsgLy8gRW5kIHN1cHByZXNzaW5nIGRlcGVuZGVuY3kgZGV0ZWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0VmVyc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbk51bWJlcjtcbiAgICB9LFxuXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKHZlcnNpb25Ub0NoZWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZlcnNpb24oKSAhPT0gdmVyc2lvblRvQ2hlY2s7XG4gICAgfSxcblxuICAgIHVwZGF0ZVZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKyt0aGlzLl92ZXJzaW9uTnVtYmVyO1xuICAgIH0sXG5cbiAgICBsaW1pdDogZnVuY3Rpb24obGltaXRGdW5jdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHNlbGZJc09ic2VydmFibGUgPSBrby5pc09ic2VydmFibGUoc2VsZiksXG4gICAgICAgICAgICBpZ25vcmVCZWZvcmVDaGFuZ2UsIG5vdGlmeU5leHRDaGFuZ2UsIHByZXZpb3VzVmFsdWUsIHBlbmRpbmdWYWx1ZSwgYmVmb3JlQ2hhbmdlID0gJ2JlZm9yZUNoYW5nZSc7XG5cbiAgICAgICAgaWYgKCFzZWxmLl9vcmlnTm90aWZ5U3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgIHNlbGYuX29yaWdOb3RpZnlTdWJzY3JpYmVycyA9IHNlbGZbXCJub3RpZnlTdWJzY3JpYmVyc1wiXTtcbiAgICAgICAgICAgIHNlbGZbXCJub3RpZnlTdWJzY3JpYmVyc1wiXSA9IGxpbWl0Tm90aWZ5U3Vic2NyaWJlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmluaXNoID0gbGltaXRGdW5jdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX25vdGlmaWNhdGlvbklzUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJZiBhbiBvYnNlcnZhYmxlIHByb3ZpZGVkIGEgcmVmZXJlbmNlIHRvIGl0c2VsZiwgYWNjZXNzIGl0IHRvIGdldCB0aGUgbGF0ZXN0IHZhbHVlLlxuICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgY29tcHV0ZWQgb2JzZXJ2YWJsZXMgdG8gZGVsYXkgY2FsY3VsYXRpbmcgdGhlaXIgdmFsdWUgdW50aWwgbmVlZGVkLlxuICAgICAgICAgICAgaWYgKHNlbGZJc09ic2VydmFibGUgJiYgcGVuZGluZ1ZhbHVlID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1ZhbHVlID0gc2VsZi5fZXZhbElmQ2hhbmdlZCA/IHNlbGYuX2V2YWxJZkNoYW5nZWQoKSA6IHNlbGYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaG91bGROb3RpZnkgPSBub3RpZnlOZXh0Q2hhbmdlIHx8IHNlbGYuaXNEaWZmZXJlbnQocHJldmlvdXNWYWx1ZSwgcGVuZGluZ1ZhbHVlKTtcblxuICAgICAgICAgICAgbm90aWZ5TmV4dENoYW5nZSA9IGlnbm9yZUJlZm9yZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKHByZXZpb3VzVmFsdWUgPSBwZW5kaW5nVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxmLl9saW1pdENoYW5nZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLl9jaGFuZ2VTdWJzY3JpcHRpb25zID0gc2VsZi5fc3Vic2NyaXB0aW9uc1tkZWZhdWx0RXZlbnRdLnNsaWNlKDApO1xuICAgICAgICAgICAgc2VsZi5fbm90aWZpY2F0aW9uSXNQZW5kaW5nID0gaWdub3JlQmVmb3JlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNlbGYuX2xpbWl0QmVmb3JlQ2hhbmdlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghaWdub3JlQmVmb3JlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNlbGYuX29yaWdOb3RpZnlTdWJzY3JpYmVycyh2YWx1ZSwgYmVmb3JlQ2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5fbm90aWZ5TmV4dENoYW5nZUlmVmFsdWVJc0RpZmZlcmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNEaWZmZXJlbnQocHJldmlvdXNWYWx1ZSwgc2VsZi5wZWVrKHRydWUgLypldmFsdWF0ZSovKSkpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlOZXh0Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgaGFzU3Vic2NyaXB0aW9uc0ZvckV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uc1tldmVudF0gJiYgdGhpcy5fc3Vic2NyaXB0aW9uc1tldmVudF0ubGVuZ3RoO1xuICAgIH0sXG5cbiAgICBnZXRTdWJzY3JpcHRpb25zQ291bnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XSAmJiB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XS5sZW5ndGggfHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IDA7XG4gICAgICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHRoaXMuX3N1YnNjcmlwdGlvbnMsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgIT09ICdkaXJ0eScpXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IHN1YnNjcmlwdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaXNEaWZmZXJlbnQ6IGZ1bmN0aW9uKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gIXRoaXNbJ2VxdWFsaXR5Q29tcGFyZXInXSB8fCAhdGhpc1snZXF1YWxpdHlDb21wYXJlciddKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfSxcblxuICAgIGV4dGVuZDogYXBwbHlFeHRlbmRlcnNcbn07XG5cbmtvLmV4cG9ydFByb3BlcnR5KGtvX3N1YnNjcmliYWJsZV9mbiwgJ3N1YnNjcmliZScsIGtvX3N1YnNjcmliYWJsZV9mbi5zdWJzY3JpYmUpO1xua28uZXhwb3J0UHJvcGVydHkoa29fc3Vic2NyaWJhYmxlX2ZuLCAnZXh0ZW5kJywga29fc3Vic2NyaWJhYmxlX2ZuLmV4dGVuZCk7XG5rby5leHBvcnRQcm9wZXJ0eShrb19zdWJzY3JpYmFibGVfZm4sICdnZXRTdWJzY3JpcHRpb25zQ291bnQnLCBrb19zdWJzY3JpYmFibGVfZm4uZ2V0U3Vic2NyaXB0aW9uc0NvdW50KTtcblxuLy8gRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBwcm90byBhc3NpZ25tZW50LCB3ZSBvdmVyd3JpdGUgdGhlIHByb3RvdHlwZSBvZiBlYWNoXG4vLyBvYnNlcnZhYmxlIGluc3RhbmNlLiBTaW5jZSBvYnNlcnZhYmxlcyBhcmUgZnVuY3Rpb25zLCB3ZSBuZWVkIEZ1bmN0aW9uLnByb3RvdHlwZVxuLy8gdG8gc3RpbGwgYmUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbi5cbmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZihrb19zdWJzY3JpYmFibGVfZm4sIEZ1bmN0aW9uLnByb3RvdHlwZSk7XG59XG5cbmtvLnN1YnNjcmliYWJsZVsnZm4nXSA9IGtvX3N1YnNjcmliYWJsZV9mbjtcblxuXG5rby5pc1N1YnNjcmliYWJsZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSAhPSBudWxsICYmIHR5cGVvZiBpbnN0YW5jZS5zdWJzY3JpYmUgPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBpbnN0YW5jZVtcIm5vdGlmeVN1YnNjcmliZXJzXCJdID09IFwiZnVuY3Rpb25cIjtcbn07XG5cbmtvLmV4cG9ydFN5bWJvbCgnc3Vic2NyaWJhYmxlJywga28uc3Vic2NyaWJhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNTdWJzY3JpYmFibGUnLCBrby5pc1N1YnNjcmliYWJsZSk7XG5cbmtvLmNvbXB1dGVkQ29udGV4dCA9IGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvdXRlckZyYW1lcyA9IFtdLFxuICAgICAgICBjdXJyZW50RnJhbWUsXG4gICAgICAgIGxhc3RJZCA9IDA7XG5cbiAgICAvLyBSZXR1cm4gYSB1bmlxdWUgSUQgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYW4gb2JzZXJ2YWJsZSBmb3IgZGVwZW5kZW5jeSB0cmFja2luZy5cbiAgICAvLyBUaGVvcmV0aWNhbGx5LCB5b3UgY291bGQgZXZlbnR1YWxseSBvdmVyZmxvdyB0aGUgbnVtYmVyIHN0b3JhZ2Ugc2l6ZSwgcmVzdWx0aW5nXG4gICAgLy8gaW4gZHVwbGljYXRlIElEcy4gQnV0IGluIEphdmFTY3JpcHQsIHRoZSBsYXJnZXN0IGV4YWN0IGludGVncmFsIHZhbHVlIGlzIDJeNTNcbiAgICAvLyBvciA5LDAwNywxOTksMjU0LDc0MCw5OTIuIElmIHlvdSBjcmVhdGVkIDEsMDAwLDAwMCBJRHMgcGVyIHNlY29uZCwgaXQgd291bGRcbiAgICAvLyB0YWtlIG92ZXIgMjg1IHllYXJzIHRvIHJlYWNoIHRoYXQgbnVtYmVyLlxuICAgIC8vIFJlZmVyZW5jZSBodHRwOi8vYmxvZy52amV1eC5jb20vMjAxMC9qYXZhc2NyaXB0L2phdmFzY3JpcHQtbWF4X2ludC1udW1iZXItbGltaXRzLmh0bWxcbiAgICBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuICsrbGFzdElkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZ2luKG9wdGlvbnMpIHtcbiAgICAgICAgb3V0ZXJGcmFtZXMucHVzaChjdXJyZW50RnJhbWUpO1xuICAgICAgICBjdXJyZW50RnJhbWUgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgY3VycmVudEZyYW1lID0gb3V0ZXJGcmFtZXMucG9wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmVnaW46IGJlZ2luLFxuXG4gICAgICAgIGVuZDogZW5kLFxuXG4gICAgICAgIHJlZ2lzdGVyRGVwZW5kZW5jeTogZnVuY3Rpb24gKHN1YnNjcmliYWJsZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICgha28uaXNTdWJzY3JpYmFibGUoc3Vic2NyaWJhYmxlKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZS5jYWxsYmFjay5jYWxsKGN1cnJlbnRGcmFtZS5jYWxsYmFja1RhcmdldCwgc3Vic2NyaWJhYmxlLCBzdWJzY3JpYmFibGUuX2lkIHx8IChzdWJzY3JpYmFibGUuX2lkID0gZ2V0SWQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGlnbm9yZTogZnVuY3Rpb24gKGNhbGxiYWNrLCBjYWxsYmFja1RhcmdldCwgY2FsbGJhY2tBcmdzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJlZ2luKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrVGFyZ2V0LCBjYWxsYmFja0FyZ3MgfHwgW10pO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXREZXBlbmRlbmNpZXNDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lLmNvbXB1dGVkLmdldERlcGVuZGVuY2llc0NvdW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNJbml0aWFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRGcmFtZS5pc0luaXRpYWw7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCdjb21wdXRlZENvbnRleHQnLCBrby5jb21wdXRlZENvbnRleHQpO1xua28uZXhwb3J0U3ltYm9sKCdjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnQnLCBrby5jb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnQpO1xua28uZXhwb3J0U3ltYm9sKCdjb21wdXRlZENvbnRleHQuaXNJbml0aWFsJywga28uY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnaWdub3JlRGVwZW5kZW5jaWVzJywga28uaWdub3JlRGVwZW5kZW5jaWVzID0ga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUpO1xudmFyIG9ic2VydmFibGVMYXRlc3RWYWx1ZSA9IGtvLnV0aWxzLmNyZWF0ZVN5bWJvbE9yU3RyaW5nKCdfbGF0ZXN0VmFsdWUnKTtcblxua28ub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFdyaXRlXG5cbiAgICAgICAgICAgIC8vIElnbm9yZSB3cml0ZXMgaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5pc0RpZmZlcmVudChvYnNlcnZhYmxlW29ic2VydmFibGVMYXRlc3RWYWx1ZV0sIGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGVbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIFBlcm1pdHMgY2hhaW5lZCBhc3NpZ25tZW50c1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVhZFxuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5yZWdpc3RlckRlcGVuZGVuY3kob2JzZXJ2YWJsZSk7IC8vIFRoZSBjYWxsZXIgb25seSBuZWVkcyB0byBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIGlmIHRoZXkgZGlkIGEgXCJyZWFkXCIgb3BlcmF0aW9uXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVtvYnNlcnZhYmxlTGF0ZXN0VmFsdWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2JzZXJ2YWJsZVtvYnNlcnZhYmxlTGF0ZXN0VmFsdWVdID0gaW5pdGlhbFZhbHVlO1xuXG4gICAgLy8gSW5oZXJpdCBmcm9tICdzdWJzY3JpYmFibGUnXG4gICAgaWYgKCFrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICAgICAgLy8gJ3N1YnNjcmliYWJsZScgd29uJ3QgYmUgb24gdGhlIHByb3RvdHlwZSBjaGFpbiB1bmxlc3Mgd2UgcHV0IGl0IHRoZXJlIGRpcmVjdGx5XG4gICAgICAgIGtvLnV0aWxzLmV4dGVuZChvYnNlcnZhYmxlLCBrby5zdWJzY3JpYmFibGVbJ2ZuJ10pO1xuICAgIH1cbiAgICBrby5zdWJzY3JpYmFibGVbJ2ZuJ10uaW5pdChvYnNlcnZhYmxlKTtcblxuICAgIC8vIEluaGVyaXQgZnJvbSAnb2JzZXJ2YWJsZSdcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZk9yRXh0ZW5kKG9ic2VydmFibGUsIG9ic2VydmFibGVGbik7XG5cbiAgICBpZiAoa28ub3B0aW9uc1snZGVmZXJVcGRhdGVzJ10pIHtcbiAgICAgICAga28uZXh0ZW5kZXJzWydkZWZlcnJlZCddKG9ic2VydmFibGUsIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBvYnNlcnZhYmxlO1xufVxuXG4vLyBEZWZpbmUgcHJvdG90eXBlIGZvciBvYnNlcnZhYmxlc1xudmFyIG9ic2VydmFibGVGbiA9IHtcbiAgICAnZXF1YWxpdHlDb21wYXJlcic6IHZhbHVlc0FyZVByaW1pdGl2ZUFuZEVxdWFsLFxuICAgIHBlZWs6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1tvYnNlcnZhYmxlTGF0ZXN0VmFsdWVdOyB9LFxuICAgIHZhbHVlSGFzTXV0YXRlZDogZnVuY3Rpb24gKCkgeyB0aGlzWydub3RpZnlTdWJzY3JpYmVycyddKHRoaXNbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXSk7IH0sXG4gICAgdmFsdWVXaWxsTXV0YXRlOiBmdW5jdGlvbiAoKSB7IHRoaXNbJ25vdGlmeVN1YnNjcmliZXJzJ10odGhpc1tvYnNlcnZhYmxlTGF0ZXN0VmFsdWVdLCAnYmVmb3JlQ2hhbmdlJyk7IH1cbn07XG5cbi8vIE5vdGUgdGhhdCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb3RvIGFzc2lnbm1lbnQsIHRoZVxuLy8gaW5oZXJpdGFuY2UgY2hhaW4gaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGUga28ub2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuaWYgKGtvLnV0aWxzLmNhblNldFByb3RvdHlwZSkge1xuICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mKG9ic2VydmFibGVGbiwga28uc3Vic2NyaWJhYmxlWydmbiddKTtcbn1cblxudmFyIHByb3RvUHJvcGVydHkgPSBrby5vYnNlcnZhYmxlLnByb3RvUHJvcGVydHkgPSAnX19rb19wcm90b19fJztcbm9ic2VydmFibGVGbltwcm90b1Byb3BlcnR5XSA9IGtvLm9ic2VydmFibGU7XG5cbmtvLmhhc1Byb3RvdHlwZSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBwcm90b3R5cGUpIHtcbiAgICBpZiAoKGluc3RhbmNlID09PSBudWxsKSB8fCAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkgfHwgKGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSB1bmRlZmluZWQpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSBwcm90b3R5cGUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0sIHByb3RvdHlwZSk7IC8vIFdhbGsgdGhlIHByb3RvdHlwZSBjaGFpblxufTtcblxua28uaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZSwga28ub2JzZXJ2YWJsZSk7XG59XG5rby5pc1dyaXRlYWJsZU9ic2VydmFibGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyBPYnNlcnZhYmxlXG4gICAgaWYgKCh0eXBlb2YgaW5zdGFuY2UgPT0gJ2Z1bmN0aW9uJykgJiYgaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0gPT09IGtvLm9ic2VydmFibGUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vIFdyaXRlYWJsZSBkZXBlbmRlbnQgb2JzZXJ2YWJsZVxuICAgIGlmICgodHlwZW9mIGluc3RhbmNlID09ICdmdW5jdGlvbicpICYmIChpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSkgJiYgKGluc3RhbmNlLmhhc1dyaXRlRnVuY3Rpb24pKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBbnl0aGluZyBlbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5rby5leHBvcnRTeW1ib2woJ29ic2VydmFibGUnLCBrby5vYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNPYnNlcnZhYmxlJywga28uaXNPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNXcml0ZWFibGVPYnNlcnZhYmxlJywga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNXcml0YWJsZU9ic2VydmFibGUnLCBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUpO1xua28uZXhwb3J0U3ltYm9sKCdvYnNlcnZhYmxlLmZuJywgb2JzZXJ2YWJsZUZuKTtcbmtvLmV4cG9ydFByb3BlcnR5KG9ic2VydmFibGVGbiwgJ3BlZWsnLCBvYnNlcnZhYmxlRm4ucGVlayk7XG5rby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlRm4sICd2YWx1ZUhhc011dGF0ZWQnLCBvYnNlcnZhYmxlRm4udmFsdWVIYXNNdXRhdGVkKTtcbmtvLmV4cG9ydFByb3BlcnR5KG9ic2VydmFibGVGbiwgJ3ZhbHVlV2lsbE11dGF0ZScsIG9ic2VydmFibGVGbi52YWx1ZVdpbGxNdXRhdGUpO1xua28ub2JzZXJ2YWJsZUFycmF5ID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMpIHtcbiAgICBpbml0aWFsVmFsdWVzID0gaW5pdGlhbFZhbHVlcyB8fCBbXTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlcyAhPSAnb2JqZWN0JyB8fCAhKCdsZW5ndGgnIGluIGluaXRpYWxWYWx1ZXMpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYXJndW1lbnQgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIGFuIG9ic2VydmFibGUgYXJyYXkgbXVzdCBiZSBhbiBhcnJheSwgb3IgbnVsbCwgb3IgdW5kZWZpbmVkLlwiKTtcblxuICAgIHZhciByZXN1bHQgPSBrby5vYnNlcnZhYmxlKGluaXRpYWxWYWx1ZXMpO1xuICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mT3JFeHRlbmQocmVzdWx0LCBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10pO1xuICAgIHJldHVybiByZXN1bHQuZXh0ZW5kKHsndHJhY2tBcnJheUNoYW5nZXMnOnRydWV9KTtcbn07XG5cbmtvLm9ic2VydmFibGVBcnJheVsnZm4nXSA9IHtcbiAgICAncmVtb3ZlJzogZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgcmVtb3ZlZFZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiICYmICFrby5pc09ic2VydmFibGUodmFsdWVPclByZWRpY2F0ZSkgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gdmFsdWVPclByZWRpY2F0ZTsgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmRlcmx5aW5nQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVybHlpbmdBcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbW92ZWRWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdW5kZXJseWluZ0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZWRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW1vdmVkVmFsdWVzO1xuICAgIH0sXG5cbiAgICAncmVtb3ZlQWxsJzogZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgeW91IHBhc3NlZCB6ZXJvIGFyZ3MsIHdlIHJlbW92ZSBldmVyeXRoaW5nXG4gICAgICAgIGlmIChhcnJheU9mVmFsdWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBhbGxWYWx1ZXMgPSB1bmRlcmx5aW5nQXJyYXkuc2xpY2UoMCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgdW5kZXJseWluZ0FycmF5LnNwbGljZSgwLCB1bmRlcmx5aW5nQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgICAgICAgICByZXR1cm4gYWxsVmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHlvdSBwYXNzZWQgYW4gYXJnLCB3ZSBpbnRlcnByZXQgaXQgYXMgYW4gYXJyYXkgb2YgZW50cmllcyB0byByZW1vdmVcbiAgICAgICAgaWYgKCFhcnJheU9mVmFsdWVzKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gdGhpc1sncmVtb3ZlJ10oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZWYWx1ZXMsIHZhbHVlKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgJ2Rlc3Ryb3knOiBmdW5jdGlvbiAodmFsdWVPclByZWRpY2F0ZSkge1xuICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIHZhciBwcmVkaWNhdGUgPSB0eXBlb2YgdmFsdWVPclByZWRpY2F0ZSA9PSBcImZ1bmN0aW9uXCIgJiYgIWtvLmlzT2JzZXJ2YWJsZSh2YWx1ZU9yUHJlZGljYXRlKSA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSB2YWx1ZU9yUHJlZGljYXRlOyB9O1xuICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gdW5kZXJseWluZ0FycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bmRlcmx5aW5nQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKHZhbHVlKSlcbiAgICAgICAgICAgICAgICB1bmRlcmx5aW5nQXJyYXlbaV1bXCJfZGVzdHJveVwiXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICB9LFxuXG4gICAgJ2Rlc3Ryb3lBbGwnOiBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykge1xuICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIHplcm8gYXJncywgd2UgZGVzdHJveSBldmVyeXRoaW5nXG4gICAgICAgIGlmIChhcnJheU9mVmFsdWVzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpc1snZGVzdHJveSddKGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZSB9KTtcblxuICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIGFuIGFyZywgd2UgaW50ZXJwcmV0IGl0IGFzIGFuIGFycmF5IG9mIGVudHJpZXMgdG8gZGVzdHJveVxuICAgICAgICBpZiAoIWFycmF5T2ZWYWx1ZXMpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiB0aGlzWydkZXN0cm95J10oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZWYWx1ZXMsIHZhbHVlKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgJ2luZGV4T2YnOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcygpO1xuICAgICAgICByZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKHVuZGVybHlpbmdBcnJheSwgaXRlbSk7XG4gICAgfSxcblxuICAgICdyZXBsYWNlJzogZnVuY3Rpb24ob2xkSXRlbSwgbmV3SXRlbSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzWydpbmRleE9mJ10ob2xkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wZWVrKClbaW5kZXhdID0gbmV3SXRlbTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBOb3RlIHRoYXQgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBwcm90byBhc3NpZ25tZW50LCB0aGVcbi8vIGluaGVyaXRhbmNlIGNoYWluIGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhlIGtvLm9ic2VydmFibGVBcnJheSBjb25zdHJ1Y3RvclxuaWYgKGtvLnV0aWxzLmNhblNldFByb3RvdHlwZSkge1xuICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mKGtvLm9ic2VydmFibGVBcnJheVsnZm4nXSwga28ub2JzZXJ2YWJsZVsnZm4nXSk7XG59XG5cbi8vIFBvcHVsYXRlIGtvLm9ic2VydmFibGVBcnJheS5mbiB3aXRoIHJlYWQvd3JpdGUgZnVuY3Rpb25zIGZyb20gbmF0aXZlIGFycmF5c1xuLy8gSW1wb3J0YW50OiBEbyBub3QgYWRkIGFueSBhZGRpdGlvbmFsIGZ1bmN0aW9ucyBoZXJlIHRoYXQgbWF5IHJlYXNvbmFibHkgYmUgdXNlZCB0byAqcmVhZCogZGF0YSBmcm9tIHRoZSBhcnJheVxuLy8gYmVjYXVzZSB3ZSdsbCBldmFsIHRoZW0gd2l0aG91dCBjYXVzaW5nIHN1YnNjcmlwdGlvbnMsIHNvIGtvLmNvbXB1dGVkIG91dHB1dCBjb3VsZCBlbmQgdXAgZ2V0dGluZyBzdGFsZVxua28udXRpbHMuYXJyYXlGb3JFYWNoKFtcInBvcFwiLCBcInB1c2hcIiwgXCJyZXZlcnNlXCIsIFwic2hpZnRcIiwgXCJzb3J0XCIsIFwic3BsaWNlXCIsIFwidW5zaGlmdFwiXSwgZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ11bbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZSBcInBlZWtcIiB0byBhdm9pZCBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbiBpbiBhbnkgY29tcHV0ZWQgdGhhdCB3ZSdyZSBleGVjdXRpbmcgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICAgICAgLy8gKGZvciBjb25zaXN0ZW5jeSB3aXRoIG11dGF0aW5nIHJlZ3VsYXIgb2JzZXJ2YWJsZXMpXG4gICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZURpZmZGb3JLbm93bk9wZXJhdGlvbih1bmRlcmx5aW5nQXJyYXksIG1ldGhvZE5hbWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBtZXRob2RDYWxsUmVzdWx0ID0gdW5kZXJseWluZ0FycmF5W21ldGhvZE5hbWVdLmFwcGx5KHVuZGVybHlpbmdBcnJheSwgYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICAgICAgLy8gVGhlIG5hdGl2ZSBzb3J0IGFuZCByZXZlcnNlIG1ldGhvZHMgcmV0dXJuIGEgcmVmZXJlbmNlIHRvIHRoZSBhcnJheSwgYnV0IGl0IG1ha2VzIG1vcmUgc2Vuc2UgdG8gcmV0dXJuIHRoZSBvYnNlcnZhYmxlIGFycmF5IGluc3RlYWQuXG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0ID09PSB1bmRlcmx5aW5nQXJyYXkgPyB0aGlzIDogbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xufSk7XG5cbi8vIFBvcHVsYXRlIGtvLm9ic2VydmFibGVBcnJheS5mbiB3aXRoIHJlYWQtb25seSBmdW5jdGlvbnMgZnJvbSBuYXRpdmUgYXJyYXlzXG5rby51dGlscy5hcnJheUZvckVhY2goW1wic2xpY2VcIl0sIGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAga28ub2JzZXJ2YWJsZUFycmF5WydmbiddW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcygpO1xuICAgICAgICByZXR1cm4gdW5kZXJseWluZ0FycmF5W21ldGhvZE5hbWVdLmFwcGx5KHVuZGVybHlpbmdBcnJheSwgYXJndW1lbnRzKTtcbiAgICB9O1xufSk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnb2JzZXJ2YWJsZUFycmF5Jywga28ub2JzZXJ2YWJsZUFycmF5KTtcbnZhciBhcnJheUNoYW5nZUV2ZW50TmFtZSA9ICdhcnJheUNoYW5nZSc7XG5rby5leHRlbmRlcnNbJ3RyYWNrQXJyYXlDaGFuZ2VzJ10gPSBmdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAvLyBVc2UgdGhlIHByb3ZpZGVkIG9wdGlvbnMtLWVhY2ggY2FsbCB0byB0cmFja0FycmF5Q2hhbmdlcyBvdmVyd3JpdGVzIHRoZSBwcmV2aW91c2x5IHNldCBvcHRpb25zXG4gICAgdGFyZ2V0LmNvbXBhcmVBcnJheU9wdGlvbnMgPSB7fTtcbiAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGtvLnV0aWxzLmV4dGVuZCh0YXJnZXQuY29tcGFyZUFycmF5T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRhcmdldC5jb21wYXJlQXJyYXlPcHRpb25zWydzcGFyc2UnXSA9IHRydWU7XG5cbiAgICAvLyBPbmx5IG1vZGlmeSB0aGUgdGFyZ2V0IG9ic2VydmFibGUgb25jZVxuICAgIGlmICh0YXJnZXQuY2FjaGVEaWZmRm9yS25vd25PcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdHJhY2tpbmdDaGFuZ2VzID0gZmFsc2UsXG4gICAgICAgIGNhY2hlZERpZmYgPSBudWxsLFxuICAgICAgICBhcnJheUNoYW5nZVN1YnNjcmlwdGlvbixcbiAgICAgICAgcGVuZGluZ05vdGlmaWNhdGlvbnMgPSAwLFxuICAgICAgICB1bmRlcmx5aW5nTm90aWZ5U3Vic2NyaWJlcnNGdW5jdGlvbixcbiAgICAgICAgdW5kZXJseWluZ0JlZm9yZVN1YnNjcmlwdGlvbkFkZEZ1bmN0aW9uID0gdGFyZ2V0LmJlZm9yZVN1YnNjcmlwdGlvbkFkZCxcbiAgICAgICAgdW5kZXJseWluZ0FmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlRnVuY3Rpb24gPSB0YXJnZXQuYWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmU7XG5cbiAgICAvLyBXYXRjaCBcInN1YnNjcmliZVwiIGNhbGxzLCBhbmQgZm9yIGFycmF5IGNoYW5nZSBldmVudHMsIGVuc3VyZSBjaGFuZ2UgdHJhY2tpbmcgaXMgZW5hYmxlZFxuICAgIHRhcmdldC5iZWZvcmVTdWJzY3JpcHRpb25BZGQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdCZWZvcmVTdWJzY3JpcHRpb25BZGRGdW5jdGlvbilcbiAgICAgICAgICAgIHVuZGVybHlpbmdCZWZvcmVTdWJzY3JpcHRpb25BZGRGdW5jdGlvbi5jYWxsKHRhcmdldCwgZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQgPT09IGFycmF5Q2hhbmdlRXZlbnROYW1lKSB7XG4gICAgICAgICAgICB0cmFja0NoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gV2F0Y2ggXCJkaXNwb3NlXCIgY2FsbHMsIGFuZCBmb3IgYXJyYXkgY2hhbmdlIGV2ZW50cywgZW5zdXJlIGNoYW5nZSB0cmFja2luZyBpcyBkaXNhYmxlZCB3aGVuIGFsbCBhcmUgZGlzcG9zZWRcbiAgICB0YXJnZXQuYWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdBZnRlclN1YnNjcmlwdGlvblJlbW92ZUZ1bmN0aW9uKVxuICAgICAgICAgICAgdW5kZXJseWluZ0FmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlRnVuY3Rpb24uY2FsbCh0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgaWYgKGV2ZW50ID09PSBhcnJheUNoYW5nZUV2ZW50TmFtZSAmJiAhdGFyZ2V0Lmhhc1N1YnNjcmlwdGlvbnNGb3JFdmVudChhcnJheUNoYW5nZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIGlmICh1bmRlcmx5aW5nTm90aWZ5U3Vic2NyaWJlcnNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHRhcmdldFsnbm90aWZ5U3Vic2NyaWJlcnMnXSA9IHVuZGVybHlpbmdOb3RpZnlTdWJzY3JpYmVyc0Z1bmN0aW9uO1xuICAgICAgICAgICAgICAgIHVuZGVybHlpbmdOb3RpZnlTdWJzY3JpYmVyc0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyYXlDaGFuZ2VTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgdHJhY2tpbmdDaGFuZ2VzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdHJhY2tDaGFuZ2VzKCkge1xuICAgICAgICAvLyBDYWxsaW5nICd0cmFja0NoYW5nZXMnIG11bHRpcGxlIHRpbWVzIGlzIHRoZSBzYW1lIGFzIGNhbGxpbmcgaXQgb25jZVxuICAgICAgICBpZiAodHJhY2tpbmdDaGFuZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cmFja2luZ0NoYW5nZXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIEludGVyY2VwdCBcIm5vdGlmeVN1YnNjcmliZXJzXCIgdG8gdHJhY2sgaG93IG1hbnkgdGltZXMgaXQgd2FzIGNhbGxlZC5cbiAgICAgICAgdW5kZXJseWluZ05vdGlmeVN1YnNjcmliZXJzRnVuY3Rpb24gPSB0YXJnZXRbJ25vdGlmeVN1YnNjcmliZXJzJ107XG4gICAgICAgIHRhcmdldFsnbm90aWZ5U3Vic2NyaWJlcnMnXSA9IGZ1bmN0aW9uKHZhbHVlVG9Ob3RpZnksIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50IHx8IGV2ZW50ID09PSBkZWZhdWx0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICArK3BlbmRpbmdOb3RpZmljYXRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVybHlpbmdOb3RpZnlTdWJzY3JpYmVyc0Z1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRWFjaCB0aW1lIHRoZSBhcnJheSBjaGFuZ2VzIHZhbHVlLCBjYXB0dXJlIGEgY2xvbmUgc28gdGhhdCBvbiB0aGUgbmV4dFxuICAgICAgICAvLyBjaGFuZ2UgaXQncyBwb3NzaWJsZSB0byBwcm9kdWNlIGEgZGlmZlxuICAgICAgICB2YXIgcHJldmlvdXNDb250ZW50cyA9IFtdLmNvbmNhdCh0YXJnZXQucGVlaygpIHx8IFtdKTtcbiAgICAgICAgY2FjaGVkRGlmZiA9IG51bGw7XG4gICAgICAgIGFycmF5Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGFyZ2V0LnN1YnNjcmliZShmdW5jdGlvbihjdXJyZW50Q29udGVudHMpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGNvbnRlbnRzIGFuZCBlbnN1cmUgaXQncyBhbiBhcnJheVxuICAgICAgICAgICAgY3VycmVudENvbnRlbnRzID0gW10uY29uY2F0KGN1cnJlbnRDb250ZW50cyB8fCBbXSk7XG5cbiAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGRpZmYgYW5kIGlzc3VlIG5vdGlmaWNhdGlvbnMsIGJ1dCBvbmx5IGlmIHNvbWVvbmUgaXMgbGlzdGVuaW5nXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1N1YnNjcmlwdGlvbnNGb3JFdmVudChhcnJheUNoYW5nZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlcyA9IGdldENoYW5nZXMocHJldmlvdXNDb250ZW50cywgY3VycmVudENvbnRlbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWxpbWluYXRlIHJlZmVyZW5jZXMgdG8gdGhlIG9sZCwgcmVtb3ZlZCBpdGVtcywgc28gdGhleSBjYW4gYmUgR0NlZFxuICAgICAgICAgICAgcHJldmlvdXNDb250ZW50cyA9IGN1cnJlbnRDb250ZW50cztcbiAgICAgICAgICAgIGNhY2hlZERpZmYgPSBudWxsO1xuICAgICAgICAgICAgcGVuZGluZ05vdGlmaWNhdGlvbnMgPSAwO1xuXG4gICAgICAgICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFsnbm90aWZ5U3Vic2NyaWJlcnMnXShjaGFuZ2VzLCBhcnJheUNoYW5nZUV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENoYW5nZXMocHJldmlvdXNDb250ZW50cywgY3VycmVudENvbnRlbnRzKSB7XG4gICAgICAgIC8vIFdlIHRyeSB0byByZS11c2UgY2FjaGVkIGRpZmZzLlxuICAgICAgICAvLyBUaGUgc2NlbmFyaW9zIHdoZXJlIHBlbmRpbmdOb3RpZmljYXRpb25zID4gMSBhcmUgd2hlbiB1c2luZyByYXRlLWxpbWl0aW5nIG9yIHRoZSBEZWZlcnJlZCBVcGRhdGVzXG4gICAgICAgIC8vIHBsdWdpbiwgd2hpY2ggd2l0aG91dCB0aGlzIGNoZWNrIHdvdWxkIG5vdCBiZSBjb21wYXRpYmxlIHdpdGggYXJyYXlDaGFuZ2Ugbm90aWZpY2F0aW9ucy4gTm9ybWFsbHksXG4gICAgICAgIC8vIG5vdGlmaWNhdGlvbnMgYXJlIGlzc3VlZCBpbW1lZGlhdGVseSBzbyB3ZSB3b3VsZG4ndCBiZSBxdWV1ZWluZyB1cCBtb3JlIHRoYW4gb25lLlxuICAgICAgICBpZiAoIWNhY2hlZERpZmYgfHwgcGVuZGluZ05vdGlmaWNhdGlvbnMgPiAxKSB7XG4gICAgICAgICAgICBjYWNoZWREaWZmID0ga28udXRpbHMuY29tcGFyZUFycmF5cyhwcmV2aW91c0NvbnRlbnRzLCBjdXJyZW50Q29udGVudHMsIHRhcmdldC5jb21wYXJlQXJyYXlPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZWREaWZmO1xuICAgIH1cblxuICAgIHRhcmdldC5jYWNoZURpZmZGb3JLbm93bk9wZXJhdGlvbiA9IGZ1bmN0aW9uKHJhd0FycmF5LCBvcGVyYXRpb25OYW1lLCBhcmdzKSB7XG4gICAgICAgIC8vIE9ubHkgcnVuIGlmIHdlJ3JlIGN1cnJlbnRseSB0cmFja2luZyBjaGFuZ2VzIGZvciB0aGlzIG9ic2VydmFibGUgYXJyYXlcbiAgICAgICAgLy8gYW5kIHRoZXJlIGFyZW4ndCBhbnkgcGVuZGluZyBkZWZlcnJlZCBub3RpZmljYXRpb25zLlxuICAgICAgICBpZiAoIXRyYWNraW5nQ2hhbmdlcyB8fCBwZW5kaW5nTm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaWZmID0gW10sXG4gICAgICAgICAgICBhcnJheUxlbmd0aCA9IHJhd0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gcHVzaERpZmYoc3RhdHVzLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWZmW2RpZmYubGVuZ3RoXSA9IHsgJ3N0YXR1cyc6IHN0YXR1cywgJ3ZhbHVlJzogdmFsdWUsICdpbmRleCc6IGluZGV4IH07XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvcGVyYXRpb25OYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBhcnJheUxlbmd0aDtcbiAgICAgICAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcmdzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hEaWZmKCdhZGRlZCcsIGFyZ3NbaW5kZXhdLCBvZmZzZXQgKyBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwb3AnOlxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGFycmF5TGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNhc2UgJ3NoaWZ0JzpcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaERpZmYoJ2RlbGV0ZWQnLCByYXdBcnJheVtvZmZzZXRdLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAvLyBOZWdhdGl2ZSBzdGFydCBpbmRleCBtZWFucyAnZnJvbSBlbmQgb2YgYXJyYXknLiBBZnRlciB0aGF0IHdlIGNsYW1wIHRvIFswLi4uYXJyYXlMZW5ndGhdLlxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zcGxpY2VcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGFyZ3NbMF0gPCAwID8gYXJyYXlMZW5ndGggKyBhcmdzWzBdIDogYXJnc1swXSksIGFycmF5TGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGVsZXRlSW5kZXggPSBhcmdzTGVuZ3RoID09PSAxID8gYXJyYXlMZW5ndGggOiBNYXRoLm1pbihzdGFydEluZGV4ICsgKGFyZ3NbMV0gfHwgMCksIGFycmF5TGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQWRkSW5kZXggPSBzdGFydEluZGV4ICsgYXJnc0xlbmd0aCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gTWF0aC5tYXgoZW5kRGVsZXRlSW5kZXgsIGVuZEFkZEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25zID0gW10sIGRlbGV0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gc3RhcnRJbmRleCwgYXJnc0luZGV4ID0gMjsgaW5kZXggPCBlbmRJbmRleDsgKytpbmRleCwgKythcmdzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgZW5kRGVsZXRlSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGlvbnMucHVzaChwdXNoRGlmZignZGVsZXRlZCcsIHJhd0FycmF5W2luZGV4XSwgaW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgZW5kQWRkSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMucHVzaChwdXNoRGlmZignYWRkZWQnLCBhcmdzW2FyZ3NJbmRleF0sIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmZpbmRNb3Zlc0luQXJyYXlDb21wYXJpc29uKGRlbGV0aW9ucywgYWRkaXRpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FjaGVkRGlmZiA9IGRpZmY7XG4gICAgfTtcbn07XG52YXIgY29tcHV0ZWRTdGF0ZSA9IGtvLnV0aWxzLmNyZWF0ZVN5bWJvbE9yU3RyaW5nKCdfc3RhdGUnKTtcblxua28uY29tcHV0ZWQgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gU2luZ2xlLXBhcmFtZXRlciBzeW50YXggLSBldmVyeXRoaW5nIGlzIG9uIHRoaXMgXCJvcHRpb25zXCIgcGFyYW1cbiAgICAgICAgb3B0aW9ucyA9IGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE11bHRpLXBhcmFtZXRlciBzeW50YXggLSBjb25zdHJ1Y3QgdGhlIG9wdGlvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbXMgcGFzc2VkXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbXCJyZWFkXCJdID0gZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW1wicmVhZFwiXSAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRocm93IEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpO1xuXG4gICAgdmFyIHdyaXRlRnVuY3Rpb24gPSBvcHRpb25zW1wid3JpdGVcIl07XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBsYXRlc3RWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1N0YWxlOiB0cnVlLFxuICAgICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgICBpc0JlaW5nRXZhbHVhdGVkOiBmYWxzZSxcbiAgICAgICAgc3VwcHJlc3NEaXNwb3NhbFVudGlsRGlzcG9zZVdoZW5SZXR1cm5zRmFsc2U6IGZhbHNlLFxuICAgICAgICBpc0Rpc3Bvc2VkOiBmYWxzZSxcbiAgICAgICAgcHVyZTogZmFsc2UsXG4gICAgICAgIGlzU2xlZXBpbmc6IGZhbHNlLFxuICAgICAgICByZWFkRnVuY3Rpb246IG9wdGlvbnNbXCJyZWFkXCJdLFxuICAgICAgICBldmFsdWF0b3JGdW5jdGlvblRhcmdldDogZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQgfHwgb3B0aW9uc1tcIm93bmVyXCJdLFxuICAgICAgICBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IG9wdGlvbnNbXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgfHwgbnVsbCxcbiAgICAgICAgZGlzcG9zZVdoZW46IG9wdGlvbnNbXCJkaXNwb3NlV2hlblwiXSB8fCBvcHRpb25zLmRpc3Bvc2VXaGVuLFxuICAgICAgICBkb21Ob2RlRGlzcG9zYWxDYWxsYmFjazogbnVsbCxcbiAgICAgICAgZGVwZW5kZW5jeVRyYWNraW5nOiB7fSxcbiAgICAgICAgZGVwZW5kZW5jaWVzQ291bnQ6IDAsXG4gICAgICAgIGV2YWx1YXRpb25UaW1lb3V0SW5zdGFuY2U6IG51bGxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29tcHV0ZWRPYnNlcnZhYmxlKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JpdGVGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV3JpdGluZyBhIHZhbHVlXG4gICAgICAgICAgICAgICAgd3JpdGVGdW5jdGlvbi5hcHBseShzdGF0ZS5ldmFsdWF0b3JGdW5jdGlvblRhcmdldCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHdyaXRlIGEgdmFsdWUgdG8gYSBrby5jb21wdXRlZCB1bmxlc3MgeW91IHNwZWNpZnkgYSAnd3JpdGUnIG9wdGlvbi4gSWYgeW91IHdpc2ggdG8gcmVhZCB0aGUgY3VycmVudCB2YWx1ZSwgZG9uJ3QgcGFzcyBhbnkgcGFyYW1ldGVycy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gUGVybWl0cyBjaGFpbmVkIGFzc2lnbm1lbnRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWFkaW5nIHRoZSB2YWx1ZVxuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5yZWdpc3RlckRlcGVuZGVuY3koY29tcHV0ZWRPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pc0RpcnR5IHx8IChzdGF0ZS5pc1NsZWVwaW5nICYmIGNvbXB1dGVkT2JzZXJ2YWJsZS5oYXZlRGVwZW5kZW5jaWVzQ2hhbmdlZCgpKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5ldmFsdWF0ZUltbWVkaWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmxhdGVzdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWRPYnNlcnZhYmxlW2NvbXB1dGVkU3RhdGVdID0gc3RhdGU7XG4gICAgY29tcHV0ZWRPYnNlcnZhYmxlLmhhc1dyaXRlRnVuY3Rpb24gPSB0eXBlb2Ygd3JpdGVGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiO1xuXG4gICAgLy8gSW5oZXJpdCBmcm9tICdzdWJzY3JpYmFibGUnXG4gICAgaWYgKCFrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICAgICAgLy8gJ3N1YnNjcmliYWJsZScgd29uJ3QgYmUgb24gdGhlIHByb3RvdHlwZSBjaGFpbiB1bmxlc3Mgd2UgcHV0IGl0IHRoZXJlIGRpcmVjdGx5XG4gICAgICAgIGtvLnV0aWxzLmV4dGVuZChjb21wdXRlZE9ic2VydmFibGUsIGtvLnN1YnNjcmliYWJsZVsnZm4nXSk7XG4gICAgfVxuICAgIGtvLnN1YnNjcmliYWJsZVsnZm4nXS5pbml0KGNvbXB1dGVkT2JzZXJ2YWJsZSk7XG5cbiAgICAvLyBJbmhlcml0IGZyb20gJ2NvbXB1dGVkJ1xuICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mT3JFeHRlbmQoY29tcHV0ZWRPYnNlcnZhYmxlLCBjb21wdXRlZEZuKTtcblxuICAgIGlmIChvcHRpb25zWydwdXJlJ10pIHtcbiAgICAgICAgc3RhdGUucHVyZSA9IHRydWU7XG4gICAgICAgIHN0YXRlLmlzU2xlZXBpbmcgPSB0cnVlOyAgICAgLy8gU3RhcnRzIG9mZiBzbGVlcGluZzsgd2lsbCBhd2FrZSBvbiB0aGUgZmlyc3Qgc3Vic2NyaXB0aW9uXG4gICAgICAgIGtvLnV0aWxzLmV4dGVuZChjb21wdXRlZE9ic2VydmFibGUsIHB1cmVDb21wdXRlZE92ZXJyaWRlcyk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zWydkZWZlckV2YWx1YXRpb24nXSkge1xuICAgICAgICBrby51dGlscy5leHRlbmQoY29tcHV0ZWRPYnNlcnZhYmxlLCBkZWZlckV2YWx1YXRpb25PdmVycmlkZXMpO1xuICAgIH1cblxuICAgIGlmIChrby5vcHRpb25zWydkZWZlclVwZGF0ZXMnXSkge1xuICAgICAgICBrby5leHRlbmRlcnNbJ2RlZmVycmVkJ10oY29tcHV0ZWRPYnNlcnZhYmxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgLy8gIzE3MzEgLSBBaWQgZGVidWdnaW5nIGJ5IGV4cG9zaW5nIHRoZSBjb21wdXRlZCdzIG9wdGlvbnNcbiAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlW1wiX29wdGlvbnNcIl0gPSBvcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQpIHtcbiAgICAgICAgLy8gU2luY2UgdGhpcyBjb21wdXRlZCBpcyBhc3NvY2lhdGVkIHdpdGggYSBET00gbm9kZSwgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzcG9zZSB0aGUgY29tcHV0ZWRcbiAgICAgICAgLy8gdW50aWwgdGhlIERPTSBub2RlIGlzICpyZW1vdmVkKiBmcm9tIHRoZSBkb2N1bWVudCAoYXMgb3Bwb3NlZCB0byBuZXZlciBoYXZpbmcgYmVlbiBpbiB0aGUgZG9jdW1lbnQpLFxuICAgICAgICAvLyB3ZSdsbCBwcmV2ZW50IGRpc3Bvc2FsIHVudGlsIFwiZGlzcG9zZVdoZW5cIiBmaXJzdCByZXR1cm5zIGZhbHNlLlxuICAgICAgICBzdGF0ZS5zdXBwcmVzc0Rpc3Bvc2FsVW50aWxEaXNwb3NlV2hlblJldHVybnNGYWxzZSA9IHRydWU7XG5cbiAgICAgICAgLy8gZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiB0cnVlIGNhbiBiZSB1c2VkIHRvIG9wdCBpbnRvIHRoZSBcIm9ubHkgZGlzcG9zZSBhZnRlciBmaXJzdCBmYWxzZSByZXN1bHRcIlxuICAgICAgICAvLyBiZWhhdmlvdXIgZXZlbiBpZiB0aGVyZSdzIG5vIHNwZWNpZmljIG5vZGUgdG8gd2F0Y2guIEluIHRoYXQgY2FzZSwgY2xlYXIgdGhlIG9wdGlvbiBzbyB3ZSBkb24ndCB0cnlcbiAgICAgICAgLy8gdG8gd2F0Y2ggZm9yIGEgbm9uLW5vZGUncyBkaXNwb3NhbC4gVGhpcyB0ZWNobmlxdWUgaXMgaW50ZW5kZWQgZm9yIEtPJ3MgaW50ZXJuYWwgdXNlIG9ubHkgYW5kIHNob3VsZG4ndFxuICAgICAgICAvLyBiZSBkb2N1bWVudGVkIG9yIHVzZWQgYnkgYXBwbGljYXRpb24gY29kZSwgYXMgaXQncyBsaWtlbHkgdG8gY2hhbmdlIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgS08uXG4gICAgICAgIGlmICghc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXZhbHVhdGUsIHVubGVzcyBzbGVlcGluZyBvciBkZWZlckV2YWx1YXRpb24gaXMgdHJ1ZVxuICAgIGlmICghc3RhdGUuaXNTbGVlcGluZyAmJiAhb3B0aW9uc1snZGVmZXJFdmFsdWF0aW9uJ10pIHtcbiAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmV2YWx1YXRlSW1tZWRpYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGEgRE9NIG5vZGUgZGlzcG9zYWwgY2FsbGJhY2sgc28gdGhhdCB0aGUgY29tcHV0ZWQgd2lsbCBiZSBwcm9hY3RpdmVseSBkaXNwb3NlZCBhcyBzb29uIGFzIHRoZSBub2RlIGlzXG4gICAgLy8gcmVtb3ZlZCB1c2luZyBrby5yZW1vdmVOb2RlLiBCdXQgc2tpcCBpZiBpc0FjdGl2ZSBpcyBmYWxzZSAodGhlcmUgd2lsbCBuZXZlciBiZSBhbnkgZGVwZW5kZW5jaWVzIHRvIGRpc3Bvc2UpLlxuICAgIGlmIChzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgJiYgY29tcHV0ZWRPYnNlcnZhYmxlLmlzQWN0aXZlKCkpIHtcbiAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQsIHN0YXRlLmRvbU5vZGVEaXNwb3NhbENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXB1dGVkT2JzZXJ2YWJsZTtcbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb24gdGhhdCBkaXNwb3NlcyBhIGdpdmVuIGRlcGVuZGVuY3lUcmFja2luZyBlbnRyeVxuZnVuY3Rpb24gY29tcHV0ZWREaXNwb3NlRGVwZW5kZW5jeUNhbGxiYWNrKGlkLCBlbnRyeVRvRGlzcG9zZSkge1xuICAgIGlmIChlbnRyeVRvRGlzcG9zZSAhPT0gbnVsbCAmJiBlbnRyeVRvRGlzcG9zZS5kaXNwb3NlKSB7XG4gICAgICAgIGVudHJ5VG9EaXNwb3NlLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgZWFjaCB0aW1lIGEgZGVwZW5kZW5jeSBpcyBkZXRlY3RlZCB3aGlsZSBldmFsdWF0aW5nIGEgY29tcHV0ZWQuXG4vLyBJdCdzIGZhY3RvcmVkIG91dCBhcyBhIHNoYXJlZCBmdW5jdGlvbiB0byBhdm9pZCBjcmVhdGluZyB1bm5lY2Vzc2FyeSBmdW5jdGlvbiBpbnN0YW5jZXMgZHVyaW5nIGV2YWx1YXRpb24uXG5mdW5jdGlvbiBjb21wdXRlZEJlZ2luRGVwZW5kZW5jeURldGVjdGlvbkNhbGxiYWNrKHN1YnNjcmliYWJsZSwgaWQpIHtcbiAgICB2YXIgY29tcHV0ZWRPYnNlcnZhYmxlID0gdGhpcy5jb21wdXRlZE9ic2VydmFibGUsXG4gICAgICAgIHN0YXRlID0gY29tcHV0ZWRPYnNlcnZhYmxlW2NvbXB1dGVkU3RhdGVdO1xuICAgIGlmICghc3RhdGUuaXNEaXNwb3NlZCkge1xuICAgICAgICBpZiAodGhpcy5kaXNwb3NhbENvdW50ICYmIHRoaXMuZGlzcG9zYWxDYW5kaWRhdGVzW2lkXSkge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FudCB0byBkaXNwb3NlIHRoaXMgc3Vic2NyaXB0aW9uLCBhcyBpdCdzIHN0aWxsIGJlaW5nIHVzZWRcbiAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5hZGREZXBlbmRlbmN5VHJhY2tpbmcoaWQsIHN1YnNjcmliYWJsZSwgdGhpcy5kaXNwb3NhbENhbmRpZGF0ZXNbaWRdKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zYWxDYW5kaWRhdGVzW2lkXSA9IG51bGw7IC8vIE5vIG5lZWQgdG8gYWN0dWFsbHkgZGVsZXRlIHRoZSBwcm9wZXJ0eSAtIGRpc3Bvc2FsQ2FuZGlkYXRlcyBpcyBhIHRyYW5zaWVudCBvYmplY3QgYW55d2F5XG4gICAgICAgICAgICAtLXRoaXMuZGlzcG9zYWxDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nW2lkXSkge1xuICAgICAgICAgICAgLy8gQnJhbmQgbmV3IHN1YnNjcmlwdGlvbiAtIGFkZCBpdFxuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmFkZERlcGVuZGVuY3lUcmFja2luZyhpZCwgc3Vic2NyaWJhYmxlLCBzdGF0ZS5pc1NsZWVwaW5nID8geyBfdGFyZ2V0OiBzdWJzY3JpYmFibGUgfSA6IGNvbXB1dGVkT2JzZXJ2YWJsZS5zdWJzY3JpYmVUb0RlcGVuZGVuY3koc3Vic2NyaWJhYmxlKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIG9ic2VydmFibGUgd2UndmUgYWNjZXNzZWQgaGFzIGEgcGVuZGluZyBub3RpZmljYXRpb24sIGVuc3VyZSB3ZSBnZXQgbm90aWZpZWQgb2YgdGhlIGFjdHVhbCBmaW5hbCB2YWx1ZSAoYnlwYXNzIGVxdWFsaXR5IGNoZWNrcylcbiAgICAgICAgaWYgKHN1YnNjcmliYWJsZS5fbm90aWZpY2F0aW9uSXNQZW5kaW5nKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmFibGUuX25vdGlmeU5leHRDaGFuZ2VJZlZhbHVlSXNEaWZmZXJlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGNvbXB1dGVkRm4gPSB7XG4gICAgXCJlcXVhbGl0eUNvbXBhcmVyXCI6IHZhbHVlc0FyZVByaW1pdGl2ZUFuZEVxdWFsLFxuICAgIGdldERlcGVuZGVuY2llc0NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NvbXB1dGVkU3RhdGVdLmRlcGVuZGVuY2llc0NvdW50O1xuICAgIH0sXG4gICAgYWRkRGVwZW5kZW5jeVRyYWNraW5nOiBmdW5jdGlvbiAoaWQsIHRhcmdldCwgdHJhY2tpbmdPYmopIHtcbiAgICAgICAgaWYgKHRoaXNbY29tcHV0ZWRTdGF0ZV0ucHVyZSAmJiB0YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSAncHVyZScgY29tcHV0ZWQgbXVzdCBub3QgYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1tjb21wdXRlZFN0YXRlXS5kZXBlbmRlbmN5VHJhY2tpbmdbaWRdID0gdHJhY2tpbmdPYmo7XG4gICAgICAgIHRyYWNraW5nT2JqLl9vcmRlciA9IHRoaXNbY29tcHV0ZWRTdGF0ZV0uZGVwZW5kZW5jaWVzQ291bnQrKztcbiAgICAgICAgdHJhY2tpbmdPYmouX3ZlcnNpb24gPSB0YXJnZXQuZ2V0VmVyc2lvbigpO1xuICAgIH0sXG4gICAgaGF2ZURlcGVuZGVuY2llc0NoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkLCBkZXBlbmRlbmN5LCBkZXBlbmRlbmN5VHJhY2tpbmcgPSB0aGlzW2NvbXB1dGVkU3RhdGVdLmRlcGVuZGVuY3lUcmFja2luZztcbiAgICAgICAgZm9yIChpZCBpbiBkZXBlbmRlbmN5VHJhY2tpbmcpIHtcbiAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VHJhY2tpbmcuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeSA9IGRlcGVuZGVuY3lUcmFja2luZ1tpZF07XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLl9ldmFsRGVsYXllZCAmJiBkZXBlbmRlbmN5Ll90YXJnZXQuX25vdGlmaWNhdGlvbklzUGVuZGluZykgfHwgZGVwZW5kZW5jeS5fdGFyZ2V0Lmhhc0NoYW5nZWQoZGVwZW5kZW5jeS5fdmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXJrRGlydHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUHJvY2VzcyBcImRpcnR5XCIgZXZlbnRzIGlmIHdlIGNhbiBoYW5kbGUgZGVsYXllZCBub3RpZmljYXRpb25zXG4gICAgICAgIGlmICh0aGlzLl9ldmFsRGVsYXllZCAmJiAhdGhpc1tjb21wdXRlZFN0YXRlXS5pc0JlaW5nRXZhbHVhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmFsRGVsYXllZChmYWxzZSAvKmlzQ2hhbmdlKi8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2NvbXB1dGVkU3RhdGVdO1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEaXJ0eSB8fCBzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudCA+IDA7XG4gICAgfSxcbiAgICByZXNwb25kVG9DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSWdub3JlIFwiY2hhbmdlXCIgZXZlbnRzIGlmIHdlJ3ZlIGFscmVhZHkgc2NoZWR1bGVkIGEgZGVsYXllZCBub3RpZmljYXRpb25cbiAgICAgICAgaWYgKCF0aGlzLl9ub3RpZmljYXRpb25Jc1BlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZXZhbHVhdGVQb3NzaWJseUFzeW5jKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpc1tjb21wdXRlZFN0YXRlXS5pc0RpcnR5KSB7XG4gICAgICAgICAgICB0aGlzW2NvbXB1dGVkU3RhdGVdLmlzU3RhbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdWJzY3JpYmVUb0RlcGVuZGVuY3k6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldC5fZGVmZXJVcGRhdGVzICYmICF0aGlzW2NvbXB1dGVkU3RhdGVdLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCkge1xuICAgICAgICAgICAgdmFyIGRpcnR5U3ViID0gdGFyZ2V0LnN1YnNjcmliZSh0aGlzLm1hcmtEaXJ0eSwgdGhpcywgJ2RpcnR5JyksXG4gICAgICAgICAgICAgICAgY2hhbmdlU3ViID0gdGFyZ2V0LnN1YnNjcmliZSh0aGlzLnJlc3BvbmRUb0NoYW5nZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIF90YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcnR5U3ViLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3ViLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzY3JpYmUodGhpcy5ldmFsdWF0ZVBvc3NpYmx5QXN5bmMsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmFsdWF0ZVBvc3NpYmx5QXN5bmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkT2JzZXJ2YWJsZSA9IHRoaXMsXG4gICAgICAgICAgICB0aHJvdHRsZUV2YWx1YXRpb25UaW1lb3V0ID0gY29tcHV0ZWRPYnNlcnZhYmxlWyd0aHJvdHRsZUV2YWx1YXRpb24nXTtcbiAgICAgICAgaWYgKHRocm90dGxlRXZhbHVhdGlvblRpbWVvdXQgJiYgdGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCA+PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpc1tjb21wdXRlZFN0YXRlXS5ldmFsdWF0aW9uVGltZW91dEluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXNbY29tcHV0ZWRTdGF0ZV0uZXZhbHVhdGlvblRpbWVvdXRJbnN0YW5jZSA9IGtvLnV0aWxzLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5ldmFsdWF0ZUltbWVkaWF0ZSh0cnVlIC8qbm90aWZ5Q2hhbmdlKi8pO1xuICAgICAgICAgICAgfSwgdGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZWRPYnNlcnZhYmxlLl9ldmFsRGVsYXllZCkge1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLl9ldmFsRGVsYXllZCh0cnVlIC8qaXNDaGFuZ2UqLyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUuZXZhbHVhdGVJbW1lZGlhdGUodHJ1ZSAvKm5vdGlmeUNoYW5nZSovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZhbHVhdGVJbW1lZGlhdGU6IGZ1bmN0aW9uIChub3RpZnlDaGFuZ2UpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkT2JzZXJ2YWJsZSA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IGNvbXB1dGVkT2JzZXJ2YWJsZVtjb21wdXRlZFN0YXRlXSxcbiAgICAgICAgICAgIGRpc3Bvc2VXaGVuID0gc3RhdGUuZGlzcG9zZVdoZW4sXG4gICAgICAgICAgICBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlLmlzQmVpbmdFdmFsdWF0ZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmFsdWF0aW9uIG9mIGEga28uY29tcHV0ZWQgY2F1c2VzIHNpZGUgZWZmZWN0cywgaXQncyBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgdHJpZ2dlciBpdHMgb3duIHJlLWV2YWx1YXRpb24uXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBkZXNpcmFibGUgKGl0J3MgaGFyZCBmb3IgYSBkZXZlbG9wZXIgdG8gcmVhbGlzZSBhIGNoYWluIG9mIGRlcGVuZGVuY2llcyBtaWdodCBjYXVzZSB0aGlzLCBhbmQgdGhleSBhbG1vc3RcbiAgICAgICAgICAgIC8vIGNlcnRhaW5seSBkaWRuJ3QgaW50ZW5kIGluZmluaXRlIHJlLWV2YWx1YXRpb25zKS4gU28sIGZvciBwcmVkaWN0YWJpbGl0eSwgd2Ugc2ltcGx5IHByZXZlbnQga28uY29tcHV0ZWRzIGZyb20gY2F1c2luZ1xuICAgICAgICAgICAgLy8gdGhlaXIgb3duIHJlLWV2YWx1YXRpb24uIEZ1cnRoZXIgZGlzY3Vzc2lvbiBhdCBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zODdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvIG5vdCBldmFsdWF0ZSAoYW5kIHBvc3NpYmx5IGNhcHR1cmUgbmV3IGRlcGVuZGVuY2llcykgaWYgZGlzcG9zZWRcbiAgICAgICAgaWYgKHN0YXRlLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgJiYgIWtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQpIHx8IGRpc3Bvc2VXaGVuICYmIGRpc3Bvc2VXaGVuKCkpIHtcbiAgICAgICAgICAgIC8vIFNlZSBjb21tZW50IGFib3ZlIGFib3V0IHN1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnN1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdCBqdXN0IGRpZCByZXR1cm4gZmFsc2UsIHNvIHdlIGNhbiBzdG9wIHN1cHByZXNzaW5nIG5vd1xuICAgICAgICAgICAgc3RhdGUuc3VwcHJlc3NEaXNwb3NhbFVudGlsRGlzcG9zZVdoZW5SZXR1cm5zRmFsc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmlzQmVpbmdFdmFsdWF0ZWQgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRoaXMuZXZhbHVhdGVJbW1lZGlhdGVfQ2FsbFJlYWRXaXRoRGVwZW5kZW5jeURldGVjdGlvbihub3RpZnlDaGFuZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc3RhdGUuaXNCZWluZ0V2YWx1YXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudCkge1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH0sXG4gICAgZXZhbHVhdGVJbW1lZGlhdGVfQ2FsbFJlYWRXaXRoRGVwZW5kZW5jeURldGVjdGlvbjogZnVuY3Rpb24gKG5vdGlmeUNoYW5nZSkge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlYWxseSBqdXN0IHBhcnQgb2YgdGhlIGV2YWx1YXRlSW1tZWRpYXRlIGxvZ2ljLiBZb3Ugd291bGQgbmV2ZXIgY2FsbCBpdCBmcm9tIGFueXdoZXJlIGVsc2UuXG4gICAgICAgIC8vIEZhY3RvcmluZyBpdCBvdXQgaW50byBhIHNlcGFyYXRlIGZ1bmN0aW9uIG1lYW5zIGl0IGNhbiBiZSBpbmRlcGVuZGVudCBvZiB0aGUgdHJ5L2NhdGNoIGJsb2NrIGluIGV2YWx1YXRlSW1tZWRpYXRlLFxuICAgICAgICAvLyB3aGljaCBjb250cmlidXRlcyB0byBzYXZpbmcgYWJvdXQgNDAlIG9mZiB0aGUgQ1BVIG92ZXJoZWFkIG9mIGNvbXB1dGVkIGV2YWx1YXRpb24gKG9uIFY4IGF0IGxlYXN0KS5cblxuICAgICAgICB2YXIgY29tcHV0ZWRPYnNlcnZhYmxlID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlID0gY29tcHV0ZWRPYnNlcnZhYmxlW2NvbXB1dGVkU3RhdGVdLFxuICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSwgd2UgYXNzdW1lIHRoYXQgbm9uZSBvZiB0aGUgc3Vic2NyaXB0aW9ucyBhcmUgc3RpbGwgYmVpbmcgdXNlZCAoaS5lLiwgYWxsIGFyZSBjYW5kaWRhdGVzIGZvciBkaXNwb3NhbCkuXG4gICAgICAgIC8vIFRoZW4sIGR1cmluZyBldmFsdWF0aW9uLCB3ZSBjcm9zcyBvZmYgYW55IHRoYXQgYXJlIGluIGZhY3Qgc3RpbGwgYmVpbmcgdXNlZC5cbiAgICAgICAgdmFyIGlzSW5pdGlhbCA9IHN0YXRlLnB1cmUgPyB1bmRlZmluZWQgOiAhc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQsICAgLy8gSWYgd2UncmUgZXZhbHVhdGluZyB3aGVuIHRoZXJlIGFyZSBubyBwcmV2aW91cyBkZXBlbmRlbmNpZXMsIGl0IG11c3QgYmUgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIGRlcGVuZGVuY3lEZXRlY3Rpb25Db250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZTogY29tcHV0ZWRPYnNlcnZhYmxlLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2FsQ2FuZGlkYXRlczogc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2FsQ291bnQ6IHN0YXRlLmRlcGVuZGVuY2llc0NvdW50XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uYmVnaW4oe1xuICAgICAgICAgICAgY2FsbGJhY2tUYXJnZXQ6IGRlcGVuZGVuY3lEZXRlY3Rpb25Db250ZXh0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNvbXB1dGVkQmVnaW5EZXBlbmRlbmN5RGV0ZWN0aW9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBjb21wdXRlZDogY29tcHV0ZWRPYnNlcnZhYmxlLFxuICAgICAgICAgICAgaXNJbml0aWFsOiBpc0luaXRpYWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nID0ge307XG4gICAgICAgIHN0YXRlLmRlcGVuZGVuY2llc0NvdW50ID0gMDtcblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmV2YWx1YXRlSW1tZWRpYXRlX0NhbGxSZWFkVGhlbkVuZERlcGVuZGVuY3lEZXRlY3Rpb24oc3RhdGUsIGRlcGVuZGVuY3lEZXRlY3Rpb25Db250ZXh0KTtcblxuICAgICAgICBpZiAoY29tcHV0ZWRPYnNlcnZhYmxlLmlzRGlmZmVyZW50KHN0YXRlLmxhdGVzdFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGUuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZVtcIm5vdGlmeVN1YnNjcmliZXJzXCJdKHN0YXRlLmxhdGVzdFZhbHVlLCBcImJlZm9yZUNoYW5nZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUubGF0ZXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmIChERUJVRykgY29tcHV0ZWRPYnNlcnZhYmxlLl9sYXRlc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS51cGRhdGVWZXJzaW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vdGlmeUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZVtcIm5vdGlmeVN1YnNjcmliZXJzXCJdKHN0YXRlLmxhdGVzdFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNJbml0aWFsKSB7XG4gICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShzdGF0ZS5sYXRlc3RWYWx1ZSwgXCJhd2FrZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH0sXG4gICAgZXZhbHVhdGVJbW1lZGlhdGVfQ2FsbFJlYWRUaGVuRW5kRGVwZW5kZW5jeURldGVjdGlvbjogZnVuY3Rpb24gKHN0YXRlLCBkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dCkge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlYWxseSBwYXJ0IG9mIHRoZSBldmFsdWF0ZUltbWVkaWF0ZV9DYWxsUmVhZFdpdGhEZXBlbmRlbmN5RGV0ZWN0aW9uIGxvZ2ljLlxuICAgICAgICAvLyBZb3UnZCBuZXZlciBjYWxsIGl0IGZyb20gYW55d2hlcmUgZWxzZS4gRmFjdG9yaW5nIGl0IG91dCBtZWFucyB0aGF0IGV2YWx1YXRlSW1tZWRpYXRlX0NhbGxSZWFkV2l0aERlcGVuZGVuY3lEZXRlY3Rpb25cbiAgICAgICAgLy8gY2FuIGJlIGluZGVwZW5kZW50IG9mIHRyeS9maW5hbGx5IGJsb2Nrcywgd2hpY2ggY29udHJpYnV0ZXMgdG8gc2F2aW5nIGFib3V0IDQwJSBvZmYgdGhlIENQVVxuICAgICAgICAvLyBvdmVyaGVhZCBvZiBjb21wdXRlZCBldmFsdWF0aW9uIChvbiBWOCBhdCBsZWFzdCkuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWFkRnVuY3Rpb24gPSBzdGF0ZS5yZWFkRnVuY3Rpb247XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQgPyByZWFkRnVuY3Rpb24uY2FsbChzdGF0ZS5ldmFsdWF0b3JGdW5jdGlvblRhcmdldCkgOiByZWFkRnVuY3Rpb24oKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uZW5kKCk7XG5cbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHN1YnNjcmlwdGlvbiBubyBsb25nZXIgYmVpbmcgdXNlZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGFjdGl2ZSBzdWJzY3JpcHRpb25zIGxpc3QgYW5kIGRpc3Bvc2UgaXRcbiAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dC5kaXNwb3NhbENvdW50ICYmICFzdGF0ZS5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dC5kaXNwb3NhbENhbmRpZGF0ZXMsIGNvbXB1dGVkRGlzcG9zZURlcGVuZGVuY3lDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLmlzU3RhbGUgPSBzdGF0ZS5pc0RpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBlZWs6IGZ1bmN0aW9uIChldmFsdWF0ZSkge1xuICAgICAgICAvLyBCeSBkZWZhdWx0LCBwZWVrIHdvbid0IHJlLWV2YWx1YXRlLCBleGNlcHQgd2hpbGUgdGhlIGNvbXB1dGVkIGlzIHNsZWVwaW5nIG9yIHRvIGdldCB0aGUgaW5pdGlhbCB2YWx1ZSB3aGVuIFwiZGVmZXJFdmFsdWF0aW9uXCIgaXMgc2V0LlxuICAgICAgICAvLyBQYXNzIGluIHRydWUgdG8gZXZhbHVhdGUgaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2NvbXB1dGVkU3RhdGVdO1xuICAgICAgICBpZiAoKHN0YXRlLmlzRGlydHkgJiYgKGV2YWx1YXRlIHx8ICFzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudCkpIHx8IChzdGF0ZS5pc1NsZWVwaW5nICYmIHRoaXMuaGF2ZURlcGVuZGVuY2llc0NoYW5nZWQoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZXZhbHVhdGVJbW1lZGlhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGUubGF0ZXN0VmFsdWU7XG4gICAgfSxcbiAgICBsaW1pdDogZnVuY3Rpb24gKGxpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIGxpbWl0IGZ1bmN0aW9uIHdpdGggb25lIHRoYXQgZGVsYXlzIGV2YWx1YXRpb24gYXMgd2VsbFxuICAgICAgICBrby5zdWJzY3JpYmFibGVbJ2ZuJ10ubGltaXQuY2FsbCh0aGlzLCBsaW1pdEZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy5fZXZhbElmQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2NvbXB1dGVkU3RhdGVdLmlzU3RhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlSW1tZWRpYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbY29tcHV0ZWRTdGF0ZV0uaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbY29tcHV0ZWRTdGF0ZV0ubGF0ZXN0VmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2YWxEZWxheWVkID0gZnVuY3Rpb24gKGlzQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl9saW1pdEJlZm9yZUNoYW5nZSh0aGlzW2NvbXB1dGVkU3RhdGVdLmxhdGVzdFZhbHVlKTtcblxuICAgICAgICAgICAgLy8gTWFyayBhcyBkaXJ0eVxuICAgICAgICAgICAgdGhpc1tjb21wdXRlZFN0YXRlXS5pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXNbY29tcHV0ZWRTdGF0ZV0uaXNTdGFsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBhc3MgdGhlIG9ic2VydmFibGUgdG8gdGhlIFwibGltaXRcIiBjb2RlLCB3aGljaCB3aWxsIGV2YWx1YXRlIGl0IHdoZW5cbiAgICAgICAgICAgIC8vIGl0J3MgdGltZSB0byBkbyB0aGUgbm90aWZpY2F0aW9uLlxuICAgICAgICAgICAgdGhpcy5fbGltaXRDaGFuZ2UodGhpcyk7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbY29tcHV0ZWRTdGF0ZV07XG4gICAgICAgIGlmICghc3RhdGUuaXNTbGVlcGluZyAmJiBzdGF0ZS5kZXBlbmRlbmN5VHJhY2tpbmcpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nLCBmdW5jdGlvbiAoaWQsIGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeS5kaXNwb3NlKVxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgJiYgc3RhdGUuZG9tTm9kZURpc3Bvc2FsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2soc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkLCBzdGF0ZS5kb21Ob2RlRGlzcG9zYWxDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nID0gbnVsbDtcbiAgICAgICAgc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQgPSAwO1xuICAgICAgICBzdGF0ZS5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuaXNTdGFsZSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5pc0RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmlzU2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkID0gbnVsbDtcbiAgICB9XG59O1xuXG52YXIgcHVyZUNvbXB1dGVkT3ZlcnJpZGVzID0ge1xuICAgIGJlZm9yZVN1YnNjcmlwdGlvbkFkZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIElmIGFzbGVlcCwgd2FrZSB1cCB0aGUgY29tcHV0ZWQgYnkgc3Vic2NyaWJpbmcgdG8gYW55IGRlcGVuZGVuY2llcy5cbiAgICAgICAgdmFyIGNvbXB1dGVkT2JzZXJ2YWJsZSA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IGNvbXB1dGVkT2JzZXJ2YWJsZVtjb21wdXRlZFN0YXRlXTtcbiAgICAgICAgaWYgKCFzdGF0ZS5pc0Rpc3Bvc2VkICYmIHN0YXRlLmlzU2xlZXBpbmcgJiYgZXZlbnQgPT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHN0YXRlLmlzU2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pc1N0YWxlIHx8IGNvbXB1dGVkT2JzZXJ2YWJsZS5oYXZlRGVwZW5kZW5jaWVzQ2hhbmdlZCgpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVkT2JzZXJ2YWJsZS5ldmFsdWF0ZUltbWVkaWF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS51cGRhdGVWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCBwdXQgdGhlIGRlcGVuZGVuY2llcyBpbiBvcmRlclxuICAgICAgICAgICAgICAgIHZhciBkZXBlbmRlY2llc09yZGVyID0gW107XG4gICAgICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChzdGF0ZS5kZXBlbmRlbmN5VHJhY2tpbmcsIGZ1bmN0aW9uIChpZCwgZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlY2llc09yZGVyW2RlcGVuZGVuY3kuX29yZGVyXSA9IGlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIE5leHQsIHN1YnNjcmliZSB0byBlYWNoIG9uZVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChkZXBlbmRlY2llc09yZGVyLCBmdW5jdGlvbiAoaWQsIG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5ID0gc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nW2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGNvbXB1dGVkT2JzZXJ2YWJsZS5zdWJzY3JpYmVUb0RlcGVuZGVuY3koZGVwZW5kZW5jeS5fdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9vcmRlciA9IG9yZGVyO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3ZlcnNpb24gPSBkZXBlbmRlbmN5Ll92ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZXBlbmRlbmN5VHJhY2tpbmdbaWRdID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5pc0Rpc3Bvc2VkKSB7ICAgICAvLyB0ZXN0IHNpbmNlIGV2YWx1YXRpbmcgY291bGQgdHJpZ2dlciBkaXNwb3NhbFxuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZVtcIm5vdGlmeVN1YnNjcmliZXJzXCJdKHN0YXRlLmxhdGVzdFZhbHVlLCBcImF3YWtlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhZnRlclN1YnNjcmlwdGlvblJlbW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbY29tcHV0ZWRTdGF0ZV07XG4gICAgICAgIGlmICghc3RhdGUuaXNEaXNwb3NlZCAmJiBldmVudCA9PSAnY2hhbmdlJyAmJiAhdGhpcy5oYXNTdWJzY3JpcHRpb25zRm9yRXZlbnQoJ2NoYW5nZScpKSB7XG4gICAgICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZywgZnVuY3Rpb24gKGlkLCBkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3kuZGlzcG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZXBlbmRlbmN5VHJhY2tpbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RhcmdldDogZGVwZW5kZW5jeS5fdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgX29yZGVyOiBkZXBlbmRlbmN5Ll9vcmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92ZXJzaW9uOiBkZXBlbmRlbmN5Ll92ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3kuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUuaXNTbGVlcGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzW1wibm90aWZ5U3Vic2NyaWJlcnNcIl0odW5kZWZpbmVkLCBcImFzbGVlcFwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmVyc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBCZWNhdXNlIGEgcHVyZSBjb21wdXRlZCBpcyBub3QgYXV0b21hdGljYWxseSB1cGRhdGVkIHdoaWxlIGl0IGlzIHNsZWVwaW5nLCB3ZSBjYW4ndFxuICAgICAgICAvLyBzaW1wbHkgcmV0dXJuIHRoZSB2ZXJzaW9uIG51bWJlci4gSW5zdGVhZCwgd2UgY2hlY2sgaWYgYW55IG9mIHRoZSBkZXBlbmRlbmNpZXMgaGF2ZVxuICAgICAgICAvLyBjaGFuZ2VkIGFuZCBjb25kaXRpb25hbGx5IHJlLWV2YWx1YXRlIHRoZSBjb21wdXRlZCBvYnNlcnZhYmxlLlxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2NvbXB1dGVkU3RhdGVdO1xuICAgICAgICBpZiAoc3RhdGUuaXNTbGVlcGluZyAmJiAoc3RhdGUuaXNTdGFsZSB8fCB0aGlzLmhhdmVEZXBlbmRlbmNpZXNDaGFuZ2VkKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmV2YWx1YXRlSW1tZWRpYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtvLnN1YnNjcmliYWJsZVsnZm4nXS5nZXRWZXJzaW9uLmNhbGwodGhpcyk7XG4gICAgfVxufTtcblxudmFyIGRlZmVyRXZhbHVhdGlvbk92ZXJyaWRlcyA9IHtcbiAgICBiZWZvcmVTdWJzY3JpcHRpb25BZGQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgZm9yY2UgYSBjb21wdXRlZCB3aXRoIGRlZmVyRXZhbHVhdGlvbiB0byBldmFsdWF0ZSB3aGVuIHRoZSBmaXJzdCBzdWJzY3JpcHRpb24gaXMgcmVnaXN0ZXJlZC5cbiAgICAgICAgaWYgKGV2ZW50ID09ICdjaGFuZ2UnIHx8IGV2ZW50ID09ICdiZWZvcmVDaGFuZ2UnKSB7XG4gICAgICAgICAgICB0aGlzLnBlZWsoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIE5vdGUgdGhhdCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb3RvIGFzc2lnbm1lbnQsIHRoZVxuLy8gaW5oZXJpdGFuY2UgY2hhaW4gaXMgY3JlYXRlZCBtYW51YWxseSBpbiB0aGUga28uY29tcHV0ZWQgY29uc3RydWN0b3JcbmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZihjb21wdXRlZEZuLCBrby5zdWJzY3JpYmFibGVbJ2ZuJ10pO1xufVxuXG4vLyBTZXQgdGhlIHByb3RvIGNoYWluIHZhbHVlcyBmb3Iga28uaGFzUHJvdG90eXBlXG52YXIgcHJvdG9Qcm9wID0ga28ub2JzZXJ2YWJsZS5wcm90b1Byb3BlcnR5OyAvLyA9PSBcIl9fa29fcHJvdG9fX1wiXG5rby5jb21wdXRlZFtwcm90b1Byb3BdID0ga28ub2JzZXJ2YWJsZTtcbmNvbXB1dGVkRm5bcHJvdG9Qcm9wXSA9IGtvLmNvbXB1dGVkO1xuXG5rby5pc0NvbXB1dGVkID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZSwga28uY29tcHV0ZWQpO1xufTtcblxua28uaXNQdXJlQ29tcHV0ZWQgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4ga28uaGFzUHJvdG90eXBlKGluc3RhbmNlLCBrby5jb21wdXRlZClcbiAgICAgICAgJiYgaW5zdGFuY2VbY29tcHV0ZWRTdGF0ZV0gJiYgaW5zdGFuY2VbY29tcHV0ZWRTdGF0ZV0ucHVyZTtcbn07XG5cbmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWQnLCBrby5jb21wdXRlZCk7XG5rby5leHBvcnRTeW1ib2woJ2RlcGVuZGVudE9ic2VydmFibGUnLCBrby5jb21wdXRlZCk7ICAgIC8vIGV4cG9ydCBrby5kZXBlbmRlbnRPYnNlcnZhYmxlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoMS54KVxua28uZXhwb3J0U3ltYm9sKCdpc0NvbXB1dGVkJywga28uaXNDb21wdXRlZCk7XG5rby5leHBvcnRTeW1ib2woJ2lzUHVyZUNvbXB1dGVkJywga28uaXNQdXJlQ29tcHV0ZWQpO1xua28uZXhwb3J0U3ltYm9sKCdjb21wdXRlZC5mbicsIGNvbXB1dGVkRm4pO1xua28uZXhwb3J0UHJvcGVydHkoY29tcHV0ZWRGbiwgJ3BlZWsnLCBjb21wdXRlZEZuLnBlZWspO1xua28uZXhwb3J0UHJvcGVydHkoY29tcHV0ZWRGbiwgJ2Rpc3Bvc2UnLCBjb21wdXRlZEZuLmRpc3Bvc2UpO1xua28uZXhwb3J0UHJvcGVydHkoY29tcHV0ZWRGbiwgJ2lzQWN0aXZlJywgY29tcHV0ZWRGbi5pc0FjdGl2ZSk7XG5rby5leHBvcnRQcm9wZXJ0eShjb21wdXRlZEZuLCAnZ2V0RGVwZW5kZW5jaWVzQ291bnQnLCBjb21wdXRlZEZuLmdldERlcGVuZGVuY2llc0NvdW50KTtcblxua28ucHVyZUNvbXB1dGVkID0gZnVuY3Rpb24gKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGtvLmNvbXB1dGVkKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCwgeydwdXJlJzp0cnVlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnMgPSBrby51dGlscy5leHRlbmQoe30sIGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zKTsgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgcGFyYW1ldGVyIG9iamVjdFxuICAgICAgICBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9uc1sncHVyZSddID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGtvLmNvbXB1dGVkKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zLCBldmFsdWF0b3JGdW5jdGlvblRhcmdldCk7XG4gICAgfVxufVxua28uZXhwb3J0U3ltYm9sKCdwdXJlQ29tcHV0ZWQnLCBrby5wdXJlQ29tcHV0ZWQpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1heE5lc3RlZE9ic2VydmFibGVEZXB0aCA9IDEwOyAvLyBFc2NhcGUgdGhlICh1bmxpa2VseSkgcGF0aGFsb2dpY2FsIGNhc2Ugd2hlcmUgYW4gb2JzZXJ2YWJsZSdzIGN1cnJlbnQgdmFsdWUgaXMgaXRzZWxmIChvciBzaW1pbGFyIHJlZmVyZW5jZSBjeWNsZSlcblxuICAgIGtvLnRvSlMgPSBmdW5jdGlvbihyb290T2JqZWN0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28udG9KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpO1xuXG4gICAgICAgIC8vIFdlIGp1c3QgdW53cmFwIGV2ZXJ5dGhpbmcgYXQgZXZlcnkgbGV2ZWwgaW4gdGhlIG9iamVjdCBncmFwaFxuICAgICAgICByZXR1cm4gbWFwSnNPYmplY3RHcmFwaChyb290T2JqZWN0LCBmdW5jdGlvbih2YWx1ZVRvTWFwKSB7XG4gICAgICAgICAgICAvLyBMb29wIGJlY2F1c2UgYW4gb2JzZXJ2YWJsZSdzIHZhbHVlIG1pZ2h0IGluIHR1cm4gYmUgYW5vdGhlciBvYnNlcnZhYmxlIHdyYXBwZXJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBrby5pc09ic2VydmFibGUodmFsdWVUb01hcCkgJiYgKGkgPCBtYXhOZXN0ZWRPYnNlcnZhYmxlRGVwdGgpOyBpKyspXG4gICAgICAgICAgICAgICAgdmFsdWVUb01hcCA9IHZhbHVlVG9NYXAoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvTWFwO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAga28udG9KU09OID0gZnVuY3Rpb24ocm9vdE9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKSB7ICAgICAvLyByZXBsYWNlciBhbmQgc3BhY2UgYXJlIG9wdGlvbmFsXG4gICAgICAgIHZhciBwbGFpbkphdmFTY3JpcHRPYmplY3QgPSBrby50b0pTKHJvb3RPYmplY3QpO1xuICAgICAgICByZXR1cm4ga28udXRpbHMuc3RyaW5naWZ5SnNvbihwbGFpbkphdmFTY3JpcHRPYmplY3QsIHJlcGxhY2VyLCBzcGFjZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1hcEpzT2JqZWN0R3JhcGgocm9vdE9iamVjdCwgbWFwSW5wdXRDYWxsYmFjaywgdmlzaXRlZE9iamVjdHMpIHtcbiAgICAgICAgdmlzaXRlZE9iamVjdHMgPSB2aXNpdGVkT2JqZWN0cyB8fCBuZXcgb2JqZWN0TG9va3VwKCk7XG5cbiAgICAgICAgcm9vdE9iamVjdCA9IG1hcElucHV0Q2FsbGJhY2socm9vdE9iamVjdCk7XG4gICAgICAgIHZhciBjYW5IYXZlUHJvcGVydGllcyA9ICh0eXBlb2Ygcm9vdE9iamVjdCA9PSBcIm9iamVjdFwiKSAmJiAocm9vdE9iamVjdCAhPT0gbnVsbCkgJiYgKHJvb3RPYmplY3QgIT09IHVuZGVmaW5lZCkgJiYgKCEocm9vdE9iamVjdCBpbnN0YW5jZW9mIFJlZ0V4cCkpICYmICghKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBEYXRlKSkgJiYgKCEocm9vdE9iamVjdCBpbnN0YW5jZW9mIFN0cmluZykpICYmICghKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBOdW1iZXIpKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgQm9vbGVhbikpO1xuICAgICAgICBpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKVxuICAgICAgICAgICAgcmV0dXJuIHJvb3RPYmplY3Q7XG5cbiAgICAgICAgdmFyIG91dHB1dFByb3BlcnRpZXMgPSByb290T2JqZWN0IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgICB2aXNpdGVkT2JqZWN0cy5zYXZlKHJvb3RPYmplY3QsIG91dHB1dFByb3BlcnRpZXMpO1xuXG4gICAgICAgIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uKGluZGV4ZXIpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbWFwSW5wdXRDYWxsYmFjayhyb290T2JqZWN0W2luZGV4ZXJdKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcHJvcGVydHlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0UHJvcGVydGllc1tpbmRleGVyXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c2x5TWFwcGVkVmFsdWUgPSB2aXNpdGVkT2JqZWN0cy5nZXQocHJvcGVydHlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFByb3BlcnRpZXNbaW5kZXhlcl0gPSAocHJldmlvdXNseU1hcHBlZFZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByZXZpb3VzbHlNYXBwZWRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXBKc09iamVjdEdyYXBoKHByb3BlcnR5VmFsdWUsIG1hcElucHV0Q2FsbGJhY2ssIHZpc2l0ZWRPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXRQcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIHZpc2l0b3JDYWxsYmFjaykge1xuICAgICAgICBpZiAocm9vdE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RPYmplY3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKGkpO1xuXG4gICAgICAgICAgICAvLyBGb3IgYXJyYXlzLCBhbHNvIHJlc3BlY3QgdG9KU09OIHByb3BlcnR5IGZvciBjdXN0b20gbWFwcGluZ3MgKGZpeGVzICMyNzgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3RPYmplY3RbJ3RvSlNPTiddID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKCd0b0pTT04nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiByb290T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb2JqZWN0TG9va3VwKCkge1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB9O1xuXG4gICAgb2JqZWN0TG9va3VwLnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IG9iamVjdExvb2t1cCxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2YodGhpcy5rZXlzLCBrZXkpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMClcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tleGlzdGluZ0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKHRoaXMua2V5cywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdJbmRleCA+PSAwKSA/IHRoaXMudmFsdWVzW2V4aXN0aW5nSW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndG9KUycsIGtvLnRvSlMpO1xua28uZXhwb3J0U3ltYm9sKCd0b0pTT04nLCBrby50b0pTT04pO1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eSA9ICdfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXyc7XG5cbiAgICAvLyBOb3JtYWxseSwgU0VMRUNUIGVsZW1lbnRzIGFuZCB0aGVpciBPUFRJT05zIGNhbiBvbmx5IHRha2UgdmFsdWUgb2YgdHlwZSAnc3RyaW5nJyAoYmVjYXVzZSB0aGUgdmFsdWVzXG4gICAgLy8gYXJlIHN0b3JlZCBvbiBET00gYXR0cmlidXRlcykuIGtvLnNlbGVjdEV4dGVuc2lvbnMgcHJvdmlkZXMgYSB3YXkgZm9yIFNFTEVDVHMvT1BUSU9OcyB0byBoYXZlIHZhbHVlc1xuICAgIC8vIHRoYXQgYXJlIGFyYml0cmFyeSBvYmplY3RzLiBUaGlzIGlzIHZlcnkgY29udmVuaWVudCB3aGVuIGltcGxlbWVudGluZyB0aGluZ3MgbGlrZSBjYXNjYWRpbmcgZHJvcGRvd25zLlxuICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMgPSB7XG4gICAgICAgIHJlYWRWYWx1ZSA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQoZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzLm9wdGlvbnMub3B0aW9uVmFsdWVEb21EYXRhS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmllVmVyc2lvbiA8PSA3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IChlbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUoJ3ZhbHVlJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlKCd2YWx1ZScpLnNwZWNpZmllZCA/IGVsZW1lbnQudmFsdWUgOiBlbGVtZW50LnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA+PSAwID8ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudC5vcHRpb25zW2VsZW1lbnQuc2VsZWN0ZWRJbmRleF0pIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdyaXRlVmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlLCBhbGxvd1Vuc2V0KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCBrby5iaW5kaW5nSGFuZGxlcnMub3B0aW9ucy5vcHRpb25WYWx1ZURvbURhdGFLZXksIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RvbURhdGFFeHBhbmRvUHJvcGVydHkgaW4gZWxlbWVudCkgeyAvLyBJRSA8PSA4IHRocm93cyBlcnJvcnMgaWYgeW91IGRlbGV0ZSBub24tZXhpc3RlbnQgcHJvcGVydGllcyBmcm9tIGEgRE9NIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnRbaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgYXJiaXRyYXJ5IG9iamVjdCB1c2luZyBEb21EYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQoZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzLm9wdGlvbnMub3B0aW9uVmFsdWVEb21EYXRhS2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFtoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5XSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIHRyZWF0bWVudCBvZiBudW1iZXJzIGlzIGp1c3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIEtPIDEuMi4xIHdyb3RlIG51bWVyaWNhbCB2YWx1ZXMgdG8gZWxlbWVudC52YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gdmFsdWUgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgICAgICAgLy8gQSBibGFuayBzdHJpbmcgb3IgbnVsbCB2YWx1ZSB3aWxsIHNlbGVjdCB0aGUgY2FwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoLCBvcHRpb25WYWx1ZTsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5jbHVkZSBzcGVjaWFsIGNoZWNrIHRvIGhhbmRsZSBzZWxlY3RpbmcgYSBjYXB0aW9uIHdpdGggYSBibGFuayBzdHJpbmcgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25WYWx1ZSA9PSB2YWx1ZSB8fCAob3B0aW9uVmFsdWUgPT0gXCJcIiAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93VW5zZXQgfHwgc2VsZWN0aW9uID49IDAgfHwgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbWVudC5zaXplID4gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbHVlID09PSBudWxsKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCdzZWxlY3RFeHRlbnNpb25zJywga28uc2VsZWN0RXh0ZW5zaW9ucyk7XG5rby5leHBvcnRTeW1ib2woJ3NlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlJywga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUpO1xua28uZXhwb3J0U3ltYm9sKCdzZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUnLCBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUpO1xua28uZXhwcmVzc2lvblJld3JpdGluZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGphdmFTY3JpcHRSZXNlcnZlZFdvcmRzID0gW1widHJ1ZVwiLCBcImZhbHNlXCIsIFwibnVsbFwiLCBcInVuZGVmaW5lZFwiXTtcblxuICAgIC8vIE1hdGNoZXMgc29tZXRoaW5nIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvLS1laXRoZXIgYW4gaXNvbGF0ZWQgaWRlbnRpZmllciBvciBzb21ldGhpbmcgZW5kaW5nIHdpdGggYSBwcm9wZXJ0eSBhY2Nlc3NvclxuICAgIC8vIFRoaXMgaXMgZGVzaWduZWQgdG8gYmUgc2ltcGxlIGFuZCBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMsIGJ1dCBjb3VsZCBwcm9kdWNlIGZhbHNlIHBvc2l0aXZlcyAoZS5nLiwgYStiLmMpLlxuICAgIC8vIFRoaXMgYWxzbyB3aWxsIG5vdCBwcm9wZXJseSBoYW5kbGUgbmVzdGVkIGJyYWNrZXRzIChlLmcuLCBvYmoxW29iajJbJ3Byb3AnXV07IHNlZSAjOTExKS5cbiAgICB2YXIgamF2YVNjcmlwdEFzc2lnbm1lbnRUYXJnZXQgPSAvXig/OlskX2Etel1bJFxcd10qfCguKykoXFwuXFxzKlskX2Etel1bJFxcd10qfFxcWy4rXFxdKSkkL2k7XG5cbiAgICBmdW5jdGlvbiBnZXRXcml0ZWFibGVWYWx1ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChrby51dGlscy5hcnJheUluZGV4T2YoamF2YVNjcmlwdFJlc2VydmVkV29yZHMsIGV4cHJlc3Npb24pID49IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBtYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2goamF2YVNjcmlwdEFzc2lnbm1lbnRUYXJnZXQpO1xuICAgICAgICByZXR1cm4gbWF0Y2ggPT09IG51bGwgPyBmYWxzZSA6IG1hdGNoWzFdID8gKCdPYmplY3QoJyArIG1hdGNoWzFdICsgJyknICsgbWF0Y2hbMl0pIDogZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgd2lsbCBiZSB1c2VkIHRvIHNwbGl0IGFuIG9iamVjdC1saXRlcmFsIHN0cmluZyBpbnRvIHRva2Vuc1xuXG4gICAgICAgIC8vIFRoZXNlIHR3byBtYXRjaCBzdHJpbmdzLCBlaXRoZXIgd2l0aCBkb3VibGUgcXVvdGVzIG9yIHNpbmdsZSBxdW90ZXNcbiAgICB2YXIgc3RyaW5nRG91YmxlID0gJ1wiKD86W15cIlxcXFxcXFxcXXxcXFxcXFxcXC4pKlwiJyxcbiAgICAgICAgc3RyaW5nU2luZ2xlID0gXCInKD86W14nXFxcXFxcXFxdfFxcXFxcXFxcLikqJ1wiLFxuICAgICAgICAvLyBNYXRjaGVzIGEgcmVndWxhciBleHByZXNzaW9uICh0ZXh0IGVuY2xvc2VkIGJ5IHNsYXNoZXMpLCBidXQgd2lsbCBhbHNvIG1hdGNoIHNldHMgb2YgZGl2aXNpb25zXG4gICAgICAgIC8vIGFzIGEgcmVndWxhciBleHByZXNzaW9uICh0aGlzIGlzIGhhbmRsZWQgYnkgdGhlIHBhcnNpbmcgbG9vcCBiZWxvdykuXG4gICAgICAgIHN0cmluZ1JlZ2V4cCA9ICcvKD86W14vXFxcXFxcXFxdfFxcXFxcXFxcLikqL1xcdyonLFxuICAgICAgICAvLyBUaGVzZSBjaGFyYWN0ZXJzIGhhdmUgc3BlY2lhbCBtZWFuaW5nIHRvIHRoZSBwYXJzZXIgYW5kIG11c3Qgbm90IGFwcGVhciBpbiB0aGUgbWlkZGxlIG9mIGFcbiAgICAgICAgLy8gdG9rZW4sIGV4Y2VwdCBhcyBwYXJ0IG9mIGEgc3RyaW5nLlxuICAgICAgICBzcGVjaWFscyA9ICcsXCJcXCd7fSgpLzpbXFxcXF0nLFxuICAgICAgICAvLyBNYXRjaCB0ZXh0IChhdCBsZWFzdCB0d28gY2hhcmFjdGVycykgdGhhdCBkb2VzIG5vdCBjb250YWluIGFueSBvZiB0aGUgYWJvdmUgc3BlY2lhbCBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBhbHRob3VnaCBzb21lIG9mIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQgdG8gc3RhcnQgaXQgKGFsbCBidXQgdGhlIGNvbG9uIGFuZCBjb21tYSkuXG4gICAgICAgIC8vIFRoZSB0ZXh0IGNhbiBjb250YWluIHNwYWNlcywgYnV0IGxlYWRpbmcgb3IgdHJhaWxpbmcgc3BhY2VzIGFyZSBza2lwcGVkLlxuICAgICAgICBldmVyeVRoaW5nRWxzZSA9ICdbXlxcXFxzOiwvXVteJyArIHNwZWNpYWxzICsgJ10qW15cXFxccycgKyBzcGVjaWFscyArICddJyxcbiAgICAgICAgLy8gTWF0Y2ggYW55IG5vbi1zcGFjZSBjaGFyYWN0ZXIgbm90IG1hdGNoZWQgYWxyZWFkeS4gVGhpcyB3aWxsIG1hdGNoIGNvbG9ucyBhbmQgY29tbWFzLCBzaW5jZSB0aGV5J3JlXG4gICAgICAgIC8vIG5vdCBtYXRjaGVkIGJ5IFwiZXZlcnlUaGluZ0Vsc2VcIiwgYnV0IHdpbGwgYWxzbyBtYXRjaCBhbnkgb3RoZXIgc2luZ2xlIGNoYXJhY3RlciB0aGF0IHdhc24ndCBhbHJlYWR5XG4gICAgICAgIC8vIG1hdGNoZWQgKGZvciBleGFtcGxlOiBpbiBcImE6IDEsIGI6IDJcIiwgZWFjaCBvZiB0aGUgbm9uLXNwYWNlIGNoYXJhY3RlcnMgd2lsbCBiZSBtYXRjaGVkIGJ5IG9uZU5vdFNwYWNlKS5cbiAgICAgICAgb25lTm90U3BhY2UgPSAnW15cXFxcc10nLFxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYWN0dWFsIHJlZ3VsYXIgZXhwcmVzc2lvbiBieSBvci1pbmcgdGhlIGFib3ZlIHN0cmluZ3MuIFRoZSBvcmRlciBpcyBpbXBvcnRhbnQuXG4gICAgICAgIGJpbmRpbmdUb2tlbiA9IFJlZ0V4cChzdHJpbmdEb3VibGUgKyAnfCcgKyBzdHJpbmdTaW5nbGUgKyAnfCcgKyBzdHJpbmdSZWdleHAgKyAnfCcgKyBldmVyeVRoaW5nRWxzZSArICd8JyArIG9uZU5vdFNwYWNlLCAnZycpLFxuXG4gICAgICAgIC8vIE1hdGNoIGVuZCBvZiBwcmV2aW91cyB0b2tlbiB0byBkZXRlcm1pbmUgd2hldGhlciBhIHNsYXNoIGlzIGEgZGl2aXNpb24gb3IgcmVnZXguXG4gICAgICAgIGRpdmlzaW9uTG9va0JlaGluZCA9IC9bXFxdKVwiJ0EtWmEtejAtOV8kXSskLyxcbiAgICAgICAga2V5d29yZFJlZ2V4TG9va0JlaGluZCA9IHsnaW4nOjEsJ3JldHVybic6MSwndHlwZW9mJzoxfTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlT2JqZWN0TGl0ZXJhbChvYmplY3RMaXRlcmFsU3RyaW5nKSB7XG4gICAgICAgIC8vIFRyaW0gbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzIGZyb20gdGhlIHN0cmluZ1xuICAgICAgICB2YXIgc3RyID0ga28udXRpbHMuc3RyaW5nVHJpbShvYmplY3RMaXRlcmFsU3RyaW5nKTtcblxuICAgICAgICAvLyBUcmltIGJyYWNlcyAneycgc3Vycm91bmRpbmcgdGhlIHdob2xlIG9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChzdHIuY2hhckNvZGVBdCgwKSA9PT0gMTIzKSBzdHIgPSBzdHIuc2xpY2UoMSwgLTEpO1xuXG4gICAgICAgIC8vIFNwbGl0IGludG8gdG9rZW5zXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSwgdG9rcyA9IHN0ci5tYXRjaChiaW5kaW5nVG9rZW4pLCBrZXksIHZhbHVlcyA9IFtdLCBkZXB0aCA9IDA7XG5cbiAgICAgICAgaWYgKHRva3MpIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCBhIGNvbW1hIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCBhIHNlcGFyYXRlIGNvZGUgYmxvY2sgdG8gZGVhbCB3aXRoIHRoZSBsYXN0IGl0ZW1cbiAgICAgICAgICAgIHRva3MucHVzaCgnLCcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgdG9rOyB0b2sgPSB0b2tzW2ldOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRvay5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIC8vIEEgY29tbWEgc2lnbmFscyB0aGUgZW5kIG9mIGEga2V5L3ZhbHVlIHBhaXIgaWYgZGVwdGggaXMgemVyb1xuICAgICAgICAgICAgICAgIGlmIChjID09PSA0NCkgeyAvLyBcIixcIlxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goKGtleSAmJiB2YWx1ZXMubGVuZ3RoKSA/IHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlcy5qb2luKCcnKX0gOiB7J3Vua25vd24nOiBrZXkgfHwgdmFsdWVzLmpvaW4oJycpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBkZXB0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2ltcGx5IHNraXAgdGhlIGNvbG9uIHRoYXQgc2VwYXJhdGVzIHRoZSBuYW1lIGFuZCB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gNTgpIHsgLy8gXCI6XCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXB0aCAmJiAha2V5ICYmIHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHZhbHVlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSBzZXQgb2Ygc2xhc2hlcyBpcyBpbml0aWFsbHkgbWF0Y2hlZCBhcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiwgYnV0IGNvdWxkIGJlIGRpdmlzaW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSA0NyAmJiBpICYmIHRvay5sZW5ndGggPiAxKSB7ICAvLyBcIi9cIlxuICAgICAgICAgICAgICAgICAgICAvLyBMb29rIGF0IHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIHRva2VuIHRvIGRldGVybWluZSBpZiB0aGUgc2xhc2ggaXMgYWN0dWFsbHkgZGl2aXNpb25cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdG9rc1tpLTFdLm1hdGNoKGRpdmlzaW9uTG9va0JlaGluZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiAha2V5d29yZFJlZ2V4TG9va0JlaGluZFttYXRjaFswXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBzbGFzaCBpcyBhY3R1YWxseSBhIGRpdmlzaW9uIHB1bmN0dWF0b3I7IHJlLXBhcnNlIHRoZSByZW1haW5kZXIgb2YgdGhlIHN0cmluZyAobm90IGluY2x1ZGluZyB0aGUgc2xhc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKHN0ci5pbmRleE9mKHRvaykgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva3MgPSBzdHIubWF0Y2goYmluZGluZ1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva3MucHVzaCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCBqdXN0IHRoZSBzbGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rID0gJy8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IGRlcHRoIGZvciBwYXJlbnRoZXNlcywgYnJhY2VzLCBhbmQgYnJhY2tldHMgc28gdGhhdCBpbnRlcmlvciBjb21tYXMgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IDQwIHx8IGMgPT09IDEyMyB8fCBjID09PSA5MSkgeyAvLyAnKCcsICd7JywgJ1snXG4gICAgICAgICAgICAgICAgICAgICsrZGVwdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSA0MSB8fCBjID09PSAxMjUgfHwgYyA9PT0gOTMpIHsgLy8gJyknLCAnfScsICddJ1xuICAgICAgICAgICAgICAgICAgICAtLWRlcHRoO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBrZXkgd2lsbCBiZSB0aGUgZmlyc3QgdG9rZW47IGlmIGl0J3MgYSBzdHJpbmcsIHRyaW0gdGhlIHF1b3Rlc1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWtleSAmJiAhdmFsdWVzLmxlbmd0aCAmJiAoYyA9PT0gMzQgfHwgYyA9PT0gMzkpKSB7IC8vICdcIicsIFwiJ1wiXG4gICAgICAgICAgICAgICAgICAgIHRvayA9IHRvay5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRvayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBUd28td2F5IGJpbmRpbmdzIGluY2x1ZGUgYSB3cml0ZSBmdW5jdGlvbiB0aGF0IGFsbG93IHRoZSBoYW5kbGVyIHRvIHVwZGF0ZSB0aGUgdmFsdWUgZXZlbiBpZiBpdCdzIG5vdCBhbiBvYnNlcnZhYmxlLlxuICAgIHZhciB0d29XYXlCaW5kaW5ncyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gcHJlUHJvY2Vzc0JpbmRpbmdzKGJpbmRpbmdzU3RyaW5nT3JLZXlWYWx1ZUFycmF5LCBiaW5kaW5nT3B0aW9ucykge1xuICAgICAgICBiaW5kaW5nT3B0aW9ucyA9IGJpbmRpbmdPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NLZXlWYWx1ZShrZXksIHZhbCkge1xuICAgICAgICAgICAgdmFyIHdyaXRhYmxlVmFsO1xuICAgICAgICAgICAgZnVuY3Rpb24gY2FsbFByZXByb2Nlc3NIb29rKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiAob2JqICYmIG9ialsncHJlcHJvY2VzcyddKSA/ICh2YWwgPSBvYmpbJ3ByZXByb2Nlc3MnXSh2YWwsIGtleSwgcHJvY2Vzc0tleVZhbHVlKSkgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFiaW5kaW5nUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsUHJlcHJvY2Vzc0hvb2soa29bJ2dldEJpbmRpbmdIYW5kbGVyJ10oa2V5KSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmICh0d29XYXlCaW5kaW5nc1trZXldICYmICh3cml0YWJsZVZhbCA9IGdldFdyaXRlYWJsZVZhbHVlKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0d28td2F5IGJpbmRpbmdzLCBwcm92aWRlIGEgd3JpdGUgbWV0aG9kIGluIGNhc2UgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzbid0IGEgd3JpdGFibGUgb2JzZXJ2YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MucHVzaChcIidcIiArIGtleSArIFwiJzpmdW5jdGlvbihfeil7XCIgKyB3cml0YWJsZVZhbCArIFwiPV96fVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIHdyYXBwZWQgaW4gYSBmdW5jdGlvbiBzbyB0aGF0IGVhY2ggdmFsdWUgY2FuIGJlIGFjY2Vzc2VkIGluZGVwZW5kZW50bHlcbiAgICAgICAgICAgIGlmIChtYWtlVmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAnZnVuY3Rpb24oKXtyZXR1cm4gJyArIHZhbCArICcgfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRTdHJpbmdzLnB1c2goXCInXCIgKyBrZXkgKyBcIic6XCIgKyB2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdFN0cmluZ3MgPSBbXSxcbiAgICAgICAgICAgIHByb3BlcnR5QWNjZXNzb3JSZXN1bHRTdHJpbmdzID0gW10sXG4gICAgICAgICAgICBtYWtlVmFsdWVBY2Nlc3NvcnMgPSBiaW5kaW5nT3B0aW9uc1sndmFsdWVBY2Nlc3NvcnMnXSxcbiAgICAgICAgICAgIGJpbmRpbmdQYXJhbXMgPSBiaW5kaW5nT3B0aW9uc1snYmluZGluZ1BhcmFtcyddLFxuICAgICAgICAgICAga2V5VmFsdWVBcnJheSA9IHR5cGVvZiBiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheSA9PT0gXCJzdHJpbmdcIiA/XG4gICAgICAgICAgICAgICAgcGFyc2VPYmplY3RMaXRlcmFsKGJpbmRpbmdzU3RyaW5nT3JLZXlWYWx1ZUFycmF5KSA6IGJpbmRpbmdzU3RyaW5nT3JLZXlWYWx1ZUFycmF5O1xuXG4gICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChrZXlWYWx1ZUFycmF5LCBmdW5jdGlvbihrZXlWYWx1ZSkge1xuICAgICAgICAgICAgcHJvY2Vzc0tleVZhbHVlKGtleVZhbHVlLmtleSB8fCBrZXlWYWx1ZVsndW5rbm93biddLCBrZXlWYWx1ZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFjY2Vzc29yUmVzdWx0U3RyaW5ncy5sZW5ndGgpXG4gICAgICAgICAgICBwcm9jZXNzS2V5VmFsdWUoJ19rb19wcm9wZXJ0eV93cml0ZXJzJywgXCJ7XCIgKyBwcm9wZXJ0eUFjY2Vzc29yUmVzdWx0U3RyaW5ncy5qb2luKFwiLFwiKSArIFwiIH1cIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZ3Muam9pbihcIixcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzOiBbXSxcblxuICAgICAgICB0d29XYXlCaW5kaW5nczogdHdvV2F5QmluZGluZ3MsXG5cbiAgICAgICAgcGFyc2VPYmplY3RMaXRlcmFsOiBwYXJzZU9iamVjdExpdGVyYWwsXG5cbiAgICAgICAgcHJlUHJvY2Vzc0JpbmRpbmdzOiBwcmVQcm9jZXNzQmluZGluZ3MsXG5cbiAgICAgICAga2V5VmFsdWVBcnJheUNvbnRhaW5zS2V5OiBmdW5jdGlvbihrZXlWYWx1ZUFycmF5LCBrZXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5VmFsdWVBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVBcnJheVtpXVsna2V5J10gPT0ga2V5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJbnRlcm5hbCwgcHJpdmF0ZSBLTyB1dGlsaXR5IGZvciB1cGRhdGluZyBtb2RlbCBwcm9wZXJ0aWVzIGZyb20gd2l0aGluIGJpbmRpbmdzXG4gICAgICAgIC8vIHByb3BlcnR5OiAgICAgICAgICAgIElmIHRoZSBwcm9wZXJ0eSBiZWluZyB1cGRhdGVkIGlzIChvciBtaWdodCBiZSkgYW4gb2JzZXJ2YWJsZSwgcGFzcyBpdCBoZXJlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIElmIGl0IHR1cm5zIG91dCB0byBiZSBhIHdyaXRhYmxlIG9ic2VydmFibGUsIGl0IHdpbGwgYmUgd3JpdHRlbiB0byBkaXJlY3RseVxuICAgICAgICAvLyBhbGxCaW5kaW5nczogICAgICAgICBBbiBvYmplY3Qgd2l0aCBhIGdldCBtZXRob2QgdG8gcmV0cmlldmUgYmluZGluZ3MgaW4gdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBzZWFyY2hlZCBmb3IgYSAnX2tvX3Byb3BlcnR5X3dyaXRlcnMnIHByb3BlcnR5IGluIGNhc2UgeW91J3JlIHdyaXRpbmcgdG8gYSBub24tb2JzZXJ2YWJsZVxuICAgICAgICAvLyBrZXk6ICAgICAgICAgICAgICAgICBUaGUga2V5IGlkZW50aWZ5aW5nIHRoZSBwcm9wZXJ0eSB0byBiZSB3cml0dGVuLiBFeGFtcGxlOiBmb3IgeyBoYXNGb2N1czogbXlWYWx1ZSB9LCB3cml0ZSB0byAnbXlWYWx1ZScgYnkgc3BlY2lmeWluZyB0aGUga2V5ICdoYXNGb2N1cydcbiAgICAgICAgLy8gdmFsdWU6ICAgICAgICAgICAgICAgVGhlIHZhbHVlIHRvIGJlIHdyaXR0ZW5cbiAgICAgICAgLy8gY2hlY2tJZkRpZmZlcmVudDogICAgSWYgdHJ1ZSwgYW5kIGlmIHRoZSBwcm9wZXJ0eSBiZWluZyB3cml0dGVuIGlzIGEgd3JpdGFibGUgb2JzZXJ2YWJsZSwgdGhlIHZhbHVlIHdpbGwgb25seSBiZSB3cml0dGVuIGlmXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIGl0IGlzICE9PSBleGlzdGluZyB2YWx1ZSBvbiB0aGF0IHdyaXRhYmxlIG9ic2VydmFibGVcbiAgICAgICAgd3JpdGVWYWx1ZVRvUHJvcGVydHk6IGZ1bmN0aW9uKHByb3BlcnR5LCBhbGxCaW5kaW5ncywga2V5LCB2YWx1ZSwgY2hlY2tJZkRpZmZlcmVudCkge1xuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSB8fCAha28uaXNPYnNlcnZhYmxlKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wV3JpdGVycyA9IGFsbEJpbmRpbmdzLmdldCgnX2tvX3Byb3BlcnR5X3dyaXRlcnMnKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcFdyaXRlcnMgJiYgcHJvcFdyaXRlcnNba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgcHJvcFdyaXRlcnNba2V5XSh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShwcm9wZXJ0eSkgJiYgKCFjaGVja0lmRGlmZmVyZW50IHx8IHByb3BlcnR5LnBlZWsoKSAhPT0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnZXhwcmVzc2lvblJld3JpdGluZycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcpO1xua28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzKTtcbmtvLmV4cG9ydFN5bWJvbCgnZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwnLCBrby5leHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbCk7XG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzJywga28uZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3MpO1xuXG4vLyBNYWtpbmcgYmluZGluZ3MgZXhwbGljaXRseSBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgXCJ0d28gd2F5XCIgaXNuJ3QgaWRlYWwgaW4gdGhlIGxvbmcgdGVybSAoaXQgd291bGQgYmUgYmV0dGVyIGlmXG4vLyBhbGwgYmluZGluZ3MgY291bGQgdXNlIGFuIG9mZmljaWFsICdwcm9wZXJ0eSB3cml0ZXInIEFQSSB3aXRob3V0IG5lZWRpbmcgdG8gZGVjbGFyZSB0aGF0IHRoZXkgbWlnaHQpLiBIb3dldmVyLFxuLy8gc2luY2UgdGhpcyBpcyBub3QsIGFuZCBoYXMgbmV2ZXIgYmVlbiwgYSBwdWJsaWMgQVBJIChfa29fcHJvcGVydHlfd3JpdGVycyB3YXMgbmV2ZXIgZG9jdW1lbnRlZCksIGl0J3MgYWNjZXB0YWJsZVxuLy8gYXMgYW4gaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsIGluIHRoZSBzaG9ydCB0ZXJtLlxuLy8gRm9yIHRob3NlIGRldmVsb3BlcnMgd2hvIHJlbHkgb24gX2tvX3Byb3BlcnR5X3dyaXRlcnMgaW4gdGhlaXIgY3VzdG9tIGJpbmRpbmdzLCB3ZSBleHBvc2UgX3R3b1dheUJpbmRpbmdzIGFzIGFuXG4vLyB1bmRvY3VtZW50ZWQgZmVhdHVyZSB0aGF0IG1ha2VzIGl0IHJlbGF0aXZlbHkgZWFzeSB0byB1cGdyYWRlIHRvIEtPIDMuMC4gSG93ZXZlciwgdGhpcyBpcyBzdGlsbCBub3QgYW4gb2ZmaWNpYWxcbi8vIHB1YmxpYyBBUEksIGFuZCB3ZSByZXNlcnZlIHRoZSByaWdodCB0byByZW1vdmUgaXQgYXQgYW55IHRpbWUgaWYgd2UgY3JlYXRlIGEgcmVhbCBwdWJsaWMgcHJvcGVydHkgd3JpdGVycyBBUEkuXG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcuX3R3b1dheUJpbmRpbmdzJywga28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5ncyk7XG5cbi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBkZWZpbmUgdGhlIGZvbGxvd2luZyBhbGlhc2VzLiAoUHJldmlvdXNseSwgdGhlc2UgZnVuY3Rpb24gbmFtZXMgd2VyZSBtaXNsZWFkaW5nIGJlY2F1c2Vcbi8vIHRoZXkgcmVmZXJyZWQgdG8gSlNPTiBzcGVjaWZpY2FsbHksIGV2ZW4gdGhvdWdoIHRoZXkgYWN0dWFsbHkgd29yayB3aXRoIGFyYml0cmFyeSBKYXZhU2NyaXB0IG9iamVjdCBsaXRlcmFsIGV4cHJlc3Npb25zLilcbmtvLmV4cG9ydFN5bWJvbCgnanNvbkV4cHJlc3Npb25SZXdyaXRpbmcnLCBrby5leHByZXNzaW9uUmV3cml0aW5nKTtcbmtvLmV4cG9ydFN5bWJvbCgnanNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvbicsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKTtcbihmdW5jdGlvbigpIHtcbiAgICAvLyBcIlZpcnR1YWwgZWxlbWVudHNcIiBpcyBhbiBhYnN0cmFjdGlvbiBvbiB0b3Agb2YgdGhlIHVzdWFsIERPTSBBUEkgd2hpY2ggdW5kZXJzdGFuZHMgdGhlIG5vdGlvbiB0aGF0IGNvbW1lbnQgbm9kZXNcbiAgICAvLyBtYXkgYmUgdXNlZCB0byByZXByZXNlbnQgaGllcmFyY2h5IChpbiBhZGRpdGlvbiB0byB0aGUgRE9NJ3MgbmF0dXJhbCBoaWVyYXJjaHkpLlxuICAgIC8vIElmIHlvdSBjYWxsIHRoZSBET00tbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucyBvbiBrby52aXJ0dWFsRWxlbWVudHMsIHlvdSB3aWxsIGJlIGFibGUgdG8gcmVhZCBhbmQgd3JpdGUgdGhlIHN0YXRlXG4gICAgLy8gb2YgdGhhdCB2aXJ0dWFsIGhpZXJhcmNoeVxuICAgIC8vXG4gICAgLy8gVGhlIHBvaW50IG9mIGFsbCB0aGlzIGlzIHRvIHN1cHBvcnQgY29udGFpbmVybGVzcyB0ZW1wbGF0ZXMgKGUuZy4sIDwhLS0ga28gZm9yZWFjaDpzb21lQ29sbGVjdGlvbiAtLT5ibGFoPCEtLSAva28gLS0+KVxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHNjYXR0ZXIgc3BlY2lhbCBjYXNlcyBhbGwgb3ZlciB0aGUgYmluZGluZyBhbmQgdGVtcGxhdGluZyBjb2RlLlxuXG4gICAgLy8gSUUgOSBjYW5ub3QgcmVsaWFibHkgcmVhZCB0aGUgXCJub2RlVmFsdWVcIiBwcm9wZXJ0eSBvZiBhIGNvbW1lbnQgbm9kZSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTg2KVxuICAgIC8vIGJ1dCBpdCBkb2VzIGdpdmUgdGhlbSBhIG5vbnN0YW5kYXJkIGFsdGVybmF0aXZlIHByb3BlcnR5IGNhbGxlZCBcInRleHRcIiB0aGF0IGl0IGNhbiByZWFkIHJlbGlhYmx5LiBPdGhlciBicm93c2VycyBkb24ndCBoYXZlIHRoYXQgcHJvcGVydHkuXG4gICAgLy8gU28sIHVzZSBub2RlLnRleHQgd2hlcmUgYXZhaWxhYmxlLCBhbmQgbm9kZS5ub2RlVmFsdWUgZWxzZXdoZXJlXG4gICAgdmFyIGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0ID09PSBcIjwhLS10ZXN0LS0+XCI7XG5cbiAgICB2YXIgc3RhcnRDb21tZW50UmVnZXggPSBjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gL148IS0tXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqLS0+JC8gOiAvXlxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKiQvO1xuICAgIHZhciBlbmRDb21tZW50UmVnZXggPSAgIGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyAvXjwhLS1cXHMqXFwva29cXHMqLS0+JC8gOiAvXlxccypcXC9rb1xccyokLztcbiAgICB2YXIgaHRtbFRhZ3NXaXRoT3B0aW9uYWxseUNsb3NpbmdDaGlsZHJlbiA9IHsgJ3VsJzogdHJ1ZSwgJ29sJzogdHJ1ZSB9O1xuXG4gICAgZnVuY3Rpb24gaXNTdGFydENvbW1lbnQobm9kZSkge1xuICAgICAgICByZXR1cm4gKG5vZGUubm9kZVR5cGUgPT0gOCkgJiYgc3RhcnRDb21tZW50UmVnZXgudGVzdChjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gbm9kZS50ZXh0IDogbm9kZS5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRW5kQ29tbWVudChub2RlKSB7XG4gICAgICAgIHJldHVybiAobm9kZS5ub2RlVHlwZSA9PSA4KSAmJiBlbmRDb21tZW50UmVnZXgudGVzdChjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gbm9kZS50ZXh0IDogbm9kZS5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxDaGlsZHJlbihzdGFydENvbW1lbnQsIGFsbG93VW5iYWxhbmNlZCkge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBzdGFydENvbW1lbnQ7XG4gICAgICAgIHZhciBkZXB0aCA9IDE7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgaWYgKGlzRW5kQ29tbWVudChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGlzU3RhcnRDb21tZW50KGN1cnJlbnROb2RlKSlcbiAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dVbmJhbGFuY2VkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgY2xvc2luZyBjb21tZW50IHRhZyB0byBtYXRjaDogXCIgKyBzdGFydENvbW1lbnQubm9kZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KHN0YXJ0Q29tbWVudCwgYWxsb3dVbmJhbGFuY2VkKSB7XG4gICAgICAgIHZhciBhbGxWaXJ0dWFsQ2hpbGRyZW4gPSBnZXRWaXJ0dWFsQ2hpbGRyZW4oc3RhcnRDb21tZW50LCBhbGxvd1VuYmFsYW5jZWQpO1xuICAgICAgICBpZiAoYWxsVmlydHVhbENoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoYWxsVmlydHVhbENoaWxkcmVuLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFZpcnR1YWxDaGlsZHJlblthbGxWaXJ0dWFsQ2hpbGRyZW4ubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnRDb21tZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBNdXN0IGhhdmUgbm8gbWF0Y2hpbmcgZW5kIGNvbW1lbnQsIGFuZCBhbGxvd1VuYmFsYW5jZWQgaXMgdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVuYmFsYW5jZWRDaGlsZFRhZ3Mobm9kZSkge1xuICAgICAgICAvLyBlLmcuLCBmcm9tIDxkaXY+T0s8L2Rpdj48IS0tIGtvIGJsYWggLS0+PHNwYW4+QW5vdGhlcjwvc3Bhbj4sIHJldHVybnM6IDwhLS0ga28gYmxhaCAtLT48c3Bhbj5Bbm90aGVyPC9zcGFuPlxuICAgICAgICAvLyAgICAgICBmcm9tIDxkaXY+T0s8L2Rpdj48IS0tIC9rbyAtLT48IS0tIC9rbyAtLT4sICAgICAgICAgICAgIHJldHVybnM6IDwhLS0gL2tvIC0tPjwhLS0gL2tvIC0tPlxuICAgICAgICB2YXIgY2hpbGROb2RlID0gbm9kZS5maXJzdENoaWxkLCBjYXB0dXJlUmVtYWluaW5nID0gbnVsbDtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlUmVtYWluaW5nKSAgICAgICAgICAgICAgICAgICAvLyBXZSBhbHJlYWR5IGhpdCBhbiB1bmJhbGFuY2VkIG5vZGUgYW5kIGFyZSBub3cganVzdCBzY29vcGluZyB1cCBhbGwgc3Vic2VxdWVudCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0YXJ0Q29tbWVudChjaGlsZE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZ0VuZENvbW1lbnQgPSBnZXRNYXRjaGluZ0VuZENvbW1lbnQoY2hpbGROb2RlLCAvKiBhbGxvd1VuYmFsYW5jZWQ6ICovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdFbmRDb21tZW50KSAgICAgICAgICAgICAvLyBJdCdzIGEgYmFsYW5jZWQgdGFnLCBzbyBza2lwIGltbWVkaWF0ZWx5IHRvIHRoZSBlbmQgb2YgdGhpcyB2aXJ0dWFsIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlID0gbWF0Y2hpbmdFbmRDb21tZW50O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nID0gW2NoaWxkTm9kZV07IC8vIEl0J3MgdW5iYWxhbmNlZCwgc28gc3RhcnQgY2FwdHVyaW5nIGZyb20gdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFbmRDb21tZW50KGNoaWxkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZVJlbWFpbmluZyA9IFtjaGlsZE5vZGVdOyAgICAgLy8gSXQncyB1bmJhbGFuY2VkIChpZiBpdCB3YXNuJ3QsIHdlJ2QgaGF2ZSBza2lwcGVkIG92ZXIgaXQgYWxyZWFkeSksIHNvIHN0YXJ0IGNhcHR1cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcHR1cmVSZW1haW5pbmc7XG4gICAgfVxuXG4gICAga28udmlydHVhbEVsZW1lbnRzID0ge1xuICAgICAgICBhbGxvd2VkQmluZGluZ3M6IHt9LFxuXG4gICAgICAgIGNoaWxkTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1N0YXJ0Q29tbWVudChub2RlKSA/IGdldFZpcnR1YWxDaGlsZHJlbihub2RlKSA6IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eU5vZGU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghaXNTdGFydENvbW1lbnQobm9kZSkpXG4gICAgICAgICAgICAgICAga28udXRpbHMuZW1wdHlEb21Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpcnR1YWxDaGlsZHJlbiA9IGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdmlydHVhbENoaWxkcmVuLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAga28ucmVtb3ZlTm9kZSh2aXJ0dWFsQ2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldERvbU5vZGVDaGlsZHJlbjogZnVuY3Rpb24obm9kZSwgY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgaWYgKCFpc1N0YXJ0Q29tbWVudChub2RlKSlcbiAgICAgICAgICAgICAgICBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW4obm9kZSwgY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBlbmRDb21tZW50Tm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7IC8vIE11c3QgYmUgdGhlIG5leHQgc2libGluZywgYXMgd2UganVzdCBlbXB0aWVkIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGVuZENvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZXNbaV0sIGVuZENvbW1lbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbihjb250YWluZXJOb2RlLCBub2RlVG9QcmVwZW5kKSB7XG4gICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KGNvbnRhaW5lck5vZGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lck5vZGUuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvUHJlcGVuZCwgY29udGFpbmVyTm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQobm9kZVRvUHJlcGVuZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGNvbW1lbnRzIG11c3QgYWx3YXlzIGhhdmUgYSBwYXJlbnQgYW5kIGF0IGxlYXN0IG9uZSBmb2xsb3dpbmcgc2libGluZyAodGhlIGVuZCBjb21tZW50KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvUHJlcGVuZCwgY29udGFpbmVyTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uKGNvbnRhaW5lck5vZGUsIG5vZGVUb0luc2VydCwgaW5zZXJ0QWZ0ZXJOb2RlKSB7XG4gICAgICAgICAgICBpZiAoIWluc2VydEFmdGVyTm9kZSkge1xuICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKGNvbnRhaW5lck5vZGUsIG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1N0YXJ0Q29tbWVudChjb250YWluZXJOb2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIEluc2VydCBhZnRlciBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QWZ0ZXJOb2RlLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmluc2VydEJlZm9yZShub2RlVG9JbnNlcnQsIGluc2VydEFmdGVyTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENoaWxkcmVuIG9mIHN0YXJ0IGNvbW1lbnRzIG11c3QgYWx3YXlzIGhhdmUgYSBwYXJlbnQgYW5kIGF0IGxlYXN0IG9uZSBmb2xsb3dpbmcgc2libGluZyAodGhlIGVuZCBjb21tZW50KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvSW5zZXJ0LCBpbnNlcnRBZnRlck5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZpcnN0Q2hpbGQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghaXNTdGFydENvbW1lbnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmICghbm9kZS5uZXh0U2libGluZyB8fCBpc0VuZENvbW1lbnQobm9kZS5uZXh0U2libGluZykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0U2libGluZzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgaWYgKGlzU3RhcnRDb21tZW50KG5vZGUpKVxuICAgICAgICAgICAgICAgIG5vZGUgPSBnZXRNYXRjaGluZ0VuZENvbW1lbnQobm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyAmJiBpc0VuZENvbW1lbnQobm9kZS5uZXh0U2libGluZykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNCaW5kaW5nVmFsdWU6IGlzU3RhcnRDb21tZW50LFxuXG4gICAgICAgIHZpcnR1YWxOb2RlQmluZGluZ1ZhbHVlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICB2YXIgcmVnZXhNYXRjaCA9IChjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gbm9kZS50ZXh0IDogbm9kZS5ub2RlVmFsdWUpLm1hdGNoKHN0YXJ0Q29tbWVudFJlZ2V4KTtcbiAgICAgICAgICAgIHJldHVybiByZWdleE1hdGNoID8gcmVnZXhNYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmU6IGZ1bmN0aW9uKGVsZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xNTVcbiAgICAgICAgICAgIC8vIChJRSA8PSA4IG9yIElFIDkgcXVpcmtzIG1vZGUgcGFyc2VzIHlvdXIgSFRNTCB3ZWlyZGx5LCB0cmVhdGluZyBjbG9zaW5nIDwvbGk+IHRhZ3MgYXMgaWYgdGhleSBkb24ndCBleGlzdCwgdGhlcmVieSBtb3ZpbmcgY29tbWVudCBub2Rlc1xuICAgICAgICAgICAgLy8gdGhhdCBhcmUgZGlyZWN0IGRlc2NlbmRhbnRzIG9mIDx1bD4gaW50byB0aGUgcHJlY2VkaW5nIDxsaT4pXG4gICAgICAgICAgICBpZiAoIWh0bWxUYWdzV2l0aE9wdGlvbmFsbHlDbG9zaW5nQ2hpbGRyZW5ba28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnRWZXJpZmllZCldKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gU2NhbiBpbW1lZGlhdGUgY2hpbGRyZW4gdG8gc2VlIGlmIHRoZXkgY29udGFpbiB1bmJhbGFuY2VkIGNvbW1lbnQgdGFncy4gSWYgdGhleSBkbywgdGhvc2UgY29tbWVudCB0YWdzXG4gICAgICAgICAgICAvLyBtdXN0IGJlIGludGVuZGVkIHRvIGFwcGVhciAqYWZ0ZXIqIHRoYXQgY2hpbGQsIHNvIG1vdmUgdGhlbSB0aGVyZS5cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBlbGVtZW50VmVyaWZpZWQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmJhbGFuY2VkVGFncyA9IGdldFVuYmFsYW5jZWRDaGlsZFRhZ3MoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmJhbGFuY2VkVGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpeCB1cCB0aGUgRE9NIGJ5IG1vdmluZyB0aGUgdW5iYWxhbmNlZCB0YWdzIHRvIHdoZXJlIHRoZXkgbW9zdCBsaWtlbHkgd2VyZSBpbnRlbmRlZCB0byBiZSBwbGFjZWQgLSAqYWZ0ZXIqIHRoZSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlVG9JbnNlcnRCZWZvcmUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmJhbGFuY2VkVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvSW5zZXJ0QmVmb3JlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZlcmlmaWVkLmluc2VydEJlZm9yZSh1bmJhbGFuY2VkVGFnc1tpXSwgbm9kZVRvSW5zZXJ0QmVmb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZlcmlmaWVkLmFwcGVuZENoaWxkKHVuYmFsYW5jZWRUYWdzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cycsIGtvLnZpcnR1YWxFbGVtZW50cyk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3MnLCBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzKTtcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZScsIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUpO1xuLy9rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkJywga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQpOyAgICAgLy8gZmlyc3RDaGlsZCBpcyBub3QgbWluaWZpZWRcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyJywga28udmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyKTtcbi8va28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcnLCBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcpOyAgIC8vIG5leHRTaWJsaW5nIGlzIG5vdCBtaW5pZmllZFxua28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMucHJlcGVuZCcsIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKTtcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbicsIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4pO1xuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUgPSBcImRhdGEtYmluZFwiO1xuXG4gICAga28uYmluZGluZ1Byb3ZpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ0NhY2hlID0ge307XG4gICAgfTtcblxuICAgIGtvLnV0aWxzLmV4dGVuZChrby5iaW5kaW5nUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgICAgICdub2RlSGFzQmluZGluZ3MnOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKGRlZmF1bHRCaW5kaW5nQXR0cmlidXRlTmFtZSkgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwga28uY29tcG9uZW50c1snZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUnXShub2RlKTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6IC8vIENvbW1lbnQgbm9kZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udmlydHVhbEVsZW1lbnRzLmhhc0JpbmRpbmdWYWx1ZShub2RlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2dldEJpbmRpbmdzJzogZnVuY3Rpb24obm9kZSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBiaW5kaW5nc1N0cmluZyA9IHRoaXNbJ2dldEJpbmRpbmdzU3RyaW5nJ10obm9kZSwgYmluZGluZ0NvbnRleHQpLFxuICAgICAgICAgICAgICAgIHBhcnNlZEJpbmRpbmdzID0gYmluZGluZ3NTdHJpbmcgPyB0aGlzWydwYXJzZUJpbmRpbmdzU3RyaW5nJ10oYmluZGluZ3NTdHJpbmcsIGJpbmRpbmdDb250ZXh0LCBub2RlKSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4ga28uY29tcG9uZW50cy5hZGRCaW5kaW5nc0ZvckN1c3RvbUVsZW1lbnQocGFyc2VkQmluZGluZ3MsIG5vZGUsIGJpbmRpbmdDb250ZXh0LCAvKiB2YWx1ZUFjY2Vzc29ycyAqLyBmYWxzZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2dldEJpbmRpbmdBY2Nlc3NvcnMnOiBmdW5jdGlvbihub2RlLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGJpbmRpbmdzU3RyaW5nID0gdGhpc1snZ2V0QmluZGluZ3NTdHJpbmcnXShub2RlLCBiaW5kaW5nQ29udGV4dCksXG4gICAgICAgICAgICAgICAgcGFyc2VkQmluZGluZ3MgPSBiaW5kaW5nc1N0cmluZyA/IHRoaXNbJ3BhcnNlQmluZGluZ3NTdHJpbmcnXShiaW5kaW5nc1N0cmluZywgYmluZGluZ0NvbnRleHQsIG5vZGUsIHsgJ3ZhbHVlQWNjZXNzb3JzJzogdHJ1ZSB9KSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4ga28uY29tcG9uZW50cy5hZGRCaW5kaW5nc0ZvckN1c3RvbUVsZW1lbnQocGFyc2VkQmluZGluZ3MsIG5vZGUsIGJpbmRpbmdDb250ZXh0LCAvKiB2YWx1ZUFjY2Vzc29ycyAqLyB0cnVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoaXMgZGVmYXVsdCBwcm92aWRlci5cbiAgICAgICAgLy8gSXQncyBub3QgcGFydCBvZiB0aGUgaW50ZXJmYWNlIGRlZmluaXRpb24gZm9yIGEgZ2VuZXJhbCBiaW5kaW5nIHByb3ZpZGVyLlxuICAgICAgICAnZ2V0QmluZGluZ3NTdHJpbmcnOiBmdW5jdGlvbihub2RlLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoZGVmYXVsdEJpbmRpbmdBdHRyaWJ1dGVOYW1lKTsgICAvLyBFbGVtZW50XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4ga28udmlydHVhbEVsZW1lbnRzLnZpcnR1YWxOb2RlQmluZGluZ1ZhbHVlKG5vZGUpOyAvLyBDb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoaXMgZGVmYXVsdCBwcm92aWRlci5cbiAgICAgICAgLy8gSXQncyBub3QgcGFydCBvZiB0aGUgaW50ZXJmYWNlIGRlZmluaXRpb24gZm9yIGEgZ2VuZXJhbCBiaW5kaW5nIHByb3ZpZGVyLlxuICAgICAgICAncGFyc2VCaW5kaW5nc1N0cmluZyc6IGZ1bmN0aW9uKGJpbmRpbmdzU3RyaW5nLCBiaW5kaW5nQ29udGV4dCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgYmluZGluZ0Z1bmN0aW9uID0gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3JWaWFDYWNoZShiaW5kaW5nc1N0cmluZywgdGhpcy5iaW5kaW5nQ2FjaGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nRnVuY3Rpb24oYmluZGluZ0NvbnRleHQsIG5vZGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBleC5tZXNzYWdlID0gXCJVbmFibGUgdG8gcGFyc2UgYmluZGluZ3MuXFxuQmluZGluZ3MgdmFsdWU6IFwiICsgYmluZGluZ3NTdHJpbmcgKyBcIlxcbk1lc3NhZ2U6IFwiICsgZXgubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddID0gbmV3IGtvLmJpbmRpbmdQcm92aWRlcigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3JWaWFDYWNoZShiaW5kaW5nc1N0cmluZywgY2FjaGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNhY2hlS2V5ID0gYmluZGluZ3NTdHJpbmcgKyAob3B0aW9ucyAmJiBvcHRpb25zWyd2YWx1ZUFjY2Vzc29ycyddIHx8ICcnKTtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NhY2hlS2V5XVxuICAgICAgICAgICAgfHwgKGNhY2hlW2NhY2hlS2V5XSA9IGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yKGJpbmRpbmdzU3RyaW5nLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3IoYmluZGluZ3NTdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIHNvdXJjZSBmb3IgYSBmdW5jdGlvbiB0aGF0IGV2YWx1YXRlcyBcImV4cHJlc3Npb25cIlxuICAgICAgICAvLyBGb3IgZWFjaCBzY29wZSB2YXJpYWJsZSwgYWRkIGFuIGV4dHJhIGxldmVsIG9mIFwid2l0aFwiIG5lc3RpbmdcbiAgICAgICAgLy8gRXhhbXBsZSByZXN1bHQ6IHdpdGgoc2MxKSB7IHdpdGgoc2MwKSB7IHJldHVybiAoZXhwcmVzc2lvbikgfSB9XG4gICAgICAgIHZhciByZXdyaXR0ZW5CaW5kaW5ncyA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKGJpbmRpbmdzU3RyaW5nLCBvcHRpb25zKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uQm9keSA9IFwid2l0aCgkY29udGV4dCl7d2l0aCgkZGF0YXx8e30pe3JldHVybntcIiArIHJld3JpdHRlbkJpbmRpbmdzICsgXCJ9fX1cIjtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIiRjb250ZXh0XCIsIFwiJGVsZW1lbnRcIiwgZnVuY3Rpb25Cb2R5KTtcbiAgICB9XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ2JpbmRpbmdQcm92aWRlcicsIGtvLmJpbmRpbmdQcm92aWRlcik7XG4oZnVuY3Rpb24gKCkge1xuICAgIGtvLmJpbmRpbmdIYW5kbGVycyA9IHt9O1xuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBlbGVtZW50IHR5cGVzIHdpbGwgbm90IGJlIHJlY3Vyc2VkIGludG8gZHVyaW5nIGJpbmRpbmcuXG4gICAgdmFyIGJpbmRpbmdEb2VzTm90UmVjdXJzZUludG9FbGVtZW50VHlwZXMgPSB7XG4gICAgICAgIC8vIERvbid0IHdhbnQgYmluZGluZ3MgdGhhdCBvcGVyYXRlIG9uIHRleHQgbm9kZXMgdG8gbXV0YXRlIDxzY3JpcHQ+IGFuZCA8dGV4dGFyZWE+IGNvbnRlbnRzLFxuICAgICAgICAvLyBiZWNhdXNlIGl0J3MgdW5leHBlY3RlZCBhbmQgYSBwb3RlbnRpYWwgWFNTIGlzc3VlLlxuICAgICAgICAvLyBBbHNvIGJpbmRpbmdzIHNob3VsZCBub3Qgb3BlcmF0ZSBvbiA8dGVtcGxhdGU+IGVsZW1lbnRzIHNpbmNlIHRoaXMgYnJlYWtzIGluIEludGVybmV0IEV4cGxvcmVyXG4gICAgICAgIC8vIGFuZCBiZWNhdXNlIHN1Y2ggZWxlbWVudHMnIGNvbnRlbnRzIGFyZSBhbHdheXMgaW50ZW5kZWQgdG8gYmUgYm91bmQgaW4gYSBkaWZmZXJlbnQgY29udGV4dFxuICAgICAgICAvLyBmcm9tIHdoZXJlIHRoZXkgYXBwZWFyIGluIHRoZSBkb2N1bWVudC5cbiAgICAgICAgJ3NjcmlwdCc6IHRydWUsXG4gICAgICAgICd0ZXh0YXJlYSc6IHRydWUsXG4gICAgICAgICd0ZW1wbGF0ZSc6IHRydWVcbiAgICB9O1xuXG4gICAgLy8gVXNlIGFuIG92ZXJyaWRhYmxlIG1ldGhvZCBmb3IgcmV0cmlldmluZyBiaW5kaW5nIGhhbmRsZXJzIHNvIHRoYXQgYSBwbHVnaW5zIG1heSBzdXBwb3J0IGR5bmFtaWNhbGx5IGNyZWF0ZWQgaGFuZGxlcnNcbiAgICBrb1snZ2V0QmluZGluZ0hhbmRsZXInXSA9IGZ1bmN0aW9uKGJpbmRpbmdLZXkpIHtcbiAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1tiaW5kaW5nS2V5XTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGtvLmJpbmRpbmdDb250ZXh0IGNvbnN0cnVjdG9yIGlzIG9ubHkgY2FsbGVkIGRpcmVjdGx5IHRvIGNyZWF0ZSB0aGUgcm9vdCBjb250ZXh0LiBGb3IgY2hpbGRcbiAgICAvLyBjb250ZXh0cywgdXNlIGJpbmRpbmdDb250ZXh0LmNyZWF0ZUNoaWxkQ29udGV4dCBvciBiaW5kaW5nQ29udGV4dC5leHRlbmQuXG4gICAga28uYmluZGluZ0NvbnRleHQgPSBmdW5jdGlvbihkYXRhSXRlbU9yQWNjZXNzb3IsIHBhcmVudENvbnRleHQsIGRhdGFJdGVtQWxpYXMsIGV4dGVuZENhbGxiYWNrLCBvcHRpb25zKSB7XG5cbiAgICAgICAgLy8gVGhlIGJpbmRpbmcgY29udGV4dCBvYmplY3QgaW5jbHVkZXMgc3RhdGljIHByb3BlcnRpZXMgZm9yIHRoZSBjdXJyZW50LCBwYXJlbnQsIGFuZCByb290IHZpZXcgbW9kZWxzLlxuICAgICAgICAvLyBJZiBhIHZpZXcgbW9kZWwgaXMgYWN0dWFsbHkgc3RvcmVkIGluIGFuIG9ic2VydmFibGUsIHRoZSBjb3JyZXNwb25kaW5nIGJpbmRpbmcgY29udGV4dCBvYmplY3QsIGFuZFxuICAgICAgICAvLyBhbnkgY2hpbGQgY29udGV4dHMsIG11c3QgYmUgdXBkYXRlZCB3aGVuIHRoZSB2aWV3IG1vZGVsIGlzIGNoYW5nZWQuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoKSB7XG4gICAgICAgICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lLCB0aGUgY29udGV4dCB3aWxsIGRpcmVjdGx5IGdldCBhIHZpZXcgbW9kZWwgb2JqZWN0LCBidXQgaWYgYSBmdW5jdGlvbiBpcyBnaXZlbixcbiAgICAgICAgICAgIC8vIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSB2aWV3IG1vZGVsLiBJZiB0aGUgZnVuY3Rpb24gYWNjZXNzZXMgYW55IG9ic2VydmFibGVzIG9yIHJldHVybnNcbiAgICAgICAgICAgIC8vIGFuIG9ic2VydmFibGUsIHRoZSBkZXBlbmRlbmN5IGlzIHRyYWNrZWQsIGFuZCB0aG9zZSBvYnNlcnZhYmxlcyBjYW4gbGF0ZXIgY2F1c2UgdGhlIGJpbmRpbmdcbiAgICAgICAgICAgIC8vIGNvbnRleHQgdG8gYmUgdXBkYXRlZC5cbiAgICAgICAgICAgIHZhciBkYXRhSXRlbU9yT2JzZXJ2YWJsZSA9IGlzRnVuYyA/IGRhdGFJdGVtT3JBY2Nlc3NvcigpIDogZGF0YUl0ZW1PckFjY2Vzc29yLFxuICAgICAgICAgICAgICAgIGRhdGFJdGVtID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhSXRlbU9yT2JzZXJ2YWJsZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBhIFwicGFyZW50XCIgY29udGV4dCBpcyBnaXZlbiwgcmVnaXN0ZXIgYSBkZXBlbmRlbmN5IG9uIHRoZSBwYXJlbnQgY29udGV4dC4gVGh1cyB3aGVuZXZlciB0aGVcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQgY29udGV4dCBpcyB1cGRhdGVkLCB0aGlzIGNvbnRleHQgd2lsbCBhbHNvIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENvbnRleHQuX3N1YnNjcmliYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udGV4dC5fc3Vic2NyaWJhYmxlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb3B5ICRyb290IGFuZCBhbnkgY3VzdG9tIHByb3BlcnRpZXMgZnJvbSB0aGUgcGFyZW50IGNvbnRleHRcbiAgICAgICAgICAgICAgICBrby51dGlscy5leHRlbmQoc2VsZiwgcGFyZW50Q29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHRoZSBhYm92ZSBjb3B5IG92ZXJ3cml0ZXMgb3VyIG93biBwcm9wZXJ0aWVzLCB3ZSBuZWVkIHRvIHJlc2V0IHRoZW0uXG4gICAgICAgICAgICAgICAgc2VsZi5fc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmWyckcGFyZW50cyddID0gW107XG4gICAgICAgICAgICAgICAgc2VsZlsnJHJvb3QnXSA9IGRhdGFJdGVtO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhwb3J0ICdrbycgaW4gdGhlIGJpbmRpbmcgY29udGV4dCBzbyBpdCB3aWxsIGJlIGF2YWlsYWJsZSBpbiBiaW5kaW5ncyBhbmQgdGVtcGxhdGVzXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiAna28nIGlzbid0IGV4cG9ydGVkIGFzIGEgZ2xvYmFsLCBzdWNoIGFzIHdoZW4gdXNpbmcgYW4gQU1EIGxvYWRlci5cbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy80OTBcbiAgICAgICAgICAgICAgICBzZWxmWydrbyddID0ga287XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmWyckcmF3RGF0YSddID0gZGF0YUl0ZW1Pck9ic2VydmFibGU7XG4gICAgICAgICAgICBzZWxmWyckZGF0YSddID0gZGF0YUl0ZW07XG4gICAgICAgICAgICBpZiAoZGF0YUl0ZW1BbGlhcylcbiAgICAgICAgICAgICAgICBzZWxmW2RhdGFJdGVtQWxpYXNdID0gZGF0YUl0ZW07XG5cbiAgICAgICAgICAgIC8vIFRoZSBleHRlbmRDYWxsYmFjayBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgY2hpbGQgY29udGV4dCBvciBleHRlbmRpbmcgYSBjb250ZXh0LlxuICAgICAgICAgICAgLy8gSXQgaGFuZGxlcyB0aGUgc3BlY2lmaWMgYWN0aW9ucyBuZWVkZWQgdG8gZmluaXNoIHNldHRpbmcgdXAgdGhlIGJpbmRpbmcgY29udGV4dC4gQWN0aW9ucyBpbiB0aGlzXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBjb3VsZCBhbHNvIGFkZCBkZXBlbmRlbmNpZXMgdG8gdGhpcyBiaW5kaW5nIGNvbnRleHQuXG4gICAgICAgICAgICBpZiAoZXh0ZW5kQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgZXh0ZW5kQ2FsbGJhY2soc2VsZiwgcGFyZW50Q29udGV4dCwgZGF0YUl0ZW0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZlsnJGRhdGEnXTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkaXNwb3NlV2hlbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlcyAmJiAha28udXRpbHMuYW55RG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KG5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGlzRnVuYyA9IHR5cGVvZihkYXRhSXRlbU9yQWNjZXNzb3IpID09IFwiZnVuY3Rpb25cIiAmJiAha28uaXNPYnNlcnZhYmxlKGRhdGFJdGVtT3JBY2Nlc3NvciksXG4gICAgICAgICAgICBub2RlcyxcbiAgICAgICAgICAgIHN1YnNjcmliYWJsZTtcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zWydleHBvcnREZXBlbmRlbmNpZXMnXSkge1xuICAgICAgICAgICAgLy8gVGhlIFwiZXhwb3J0RGVwZW5kZW5jaWVzXCIgb3B0aW9uIG1lYW5zIHRoYXQgdGhlIGNhbGxpbmcgY29kZSB3aWxsIHRyYWNrIGFueSBkZXBlbmRlbmNpZXMgYW5kIHJlLWNyZWF0ZVxuICAgICAgICAgICAgLy8gdGhlIGJpbmRpbmcgY29udGV4dCB3aGVuIHRoZXkgY2hhbmdlLlxuICAgICAgICAgICAgdXBkYXRlQ29udGV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSh1cGRhdGVDb250ZXh0LCBudWxsLCB7IGRpc3Bvc2VXaGVuOiBkaXNwb3NlV2hlbiwgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgYmluZGluZyBjb250ZXh0IGhhcyBiZWVuIGluaXRpYWxpemVkLCBhbmQgdGhlIFwic3Vic2NyaWJhYmxlXCIgY29tcHV0ZWQgb2JzZXJ2YWJsZSBpc1xuICAgICAgICAgICAgLy8gc3Vic2NyaWJlZCB0byBhbnkgb2JzZXJ2YWJsZXMgdGhhdCB3ZXJlIGFjY2Vzc2VkIGluIHRoZSBwcm9jZXNzLiBJZiB0aGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrLCB0aGVcbiAgICAgICAgICAgIC8vIGNvbXB1dGVkIHdpbGwgYmUgaW5hY3RpdmUsIGFuZCB3ZSBjYW4gc2FmZWx5IHRocm93IGl0IGF3YXkuIElmIGl0J3MgYWN0aXZlLCB0aGUgY29tcHV0ZWQgaXMgc3RvcmVkIGluXG4gICAgICAgICAgICAvLyB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJhYmxlLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9zdWJzY3JpYmFibGUgPSBzdWJzY3JpYmFibGU7XG5cbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgbm90aWZ5IGJlY2F1c2UgZXZlbiBpZiB0aGUgbW9kZWwgKCRkYXRhKSBoYXNuJ3QgY2hhbmdlZCwgb3RoZXIgY29udGV4dCBwcm9wZXJ0aWVzIG1pZ2h0IGhhdmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgIHN1YnNjcmliYWJsZVsnZXF1YWxpdHlDb21wYXJlciddID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBkaXNwb3NlIG9mIHRoaXMgY29tcHV0ZWQgb2JzZXJ2YWJsZSB3aGVuIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZC4gVGhpcyB3b3VsZCBiZVxuICAgICAgICAgICAgICAgIC8vIGVhc3kgaWYgd2UgaGFkIGEgc2luZ2xlIG5vZGUgdG8gd2F0Y2gsIGJ1dCBiaW5kaW5nIGNvbnRleHRzIGNhbiBiZSB1c2VkIGJ5IG1hbnkgZGlmZmVyZW50IG5vZGVzLCBhbmRcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW5ub3QgYXNzdW1lIHRoYXQgdGhvc2Ugbm9kZXMgaGF2ZSBhbnkgcmVsYXRpb24gdG8gZWFjaCBvdGhlci4gU28gaW5zdGVhZCB3ZSB0cmFjayBhbnkgbm9kZSB0aGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRleHQgaXMgYXR0YWNoZWQgdG8sIGFuZCBkaXNwb3NlIHRoZSBjb21wdXRlZCB3aGVuIGFsbCBvZiB0aG9zZSBub2RlcyBoYXZlIGJlZW4gY2xlYW5lZC5cblxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvICpzdWJzY3JpYmFibGUqIGluc3RlYWQgb2YgKnNlbGYqIGJlY2F1c2UgYW55IHByb3BlcnRpZXMgYWRkZWQgdG8gKnNlbGYqIG1heSBiZSBvdmVyd3JpdHRlbiBvbiB1cGRhdGVzXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmFibGUuX2FkZE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2sobm9kZSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKG5vZGVzLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9zdWJzY3JpYmFibGUgPSBzdWJzY3JpYmFibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRlbmQgdGhlIGJpbmRpbmcgY29udGV4dCBoaWVyYXJjaHkgd2l0aCBhIG5ldyB2aWV3IG1vZGVsIG9iamVjdC4gSWYgdGhlIHBhcmVudCBjb250ZXh0IGlzIHdhdGNoaW5nXG4gICAgLy8gYW55IG9ic2VydmFibGVzLCB0aGUgbmV3IGNoaWxkIGNvbnRleHQgd2lsbCBhdXRvbWF0aWNhbGx5IGdldCBhIGRlcGVuZGVuY3kgb24gdGhlIHBhcmVudCBjb250ZXh0LlxuICAgIC8vIEJ1dCB0aGlzIGRvZXMgbm90IG1lYW4gdGhhdCB0aGUgJGRhdGEgdmFsdWUgb2YgdGhlIGNoaWxkIGNvbnRleHQgd2lsbCBhbHNvIGdldCB1cGRhdGVkLiBJZiB0aGUgY2hpbGRcbiAgICAvLyB2aWV3IG1vZGVsIGFsc28gZGVwZW5kcyBvbiB0aGUgcGFyZW50IHZpZXcgbW9kZWwsIHlvdSBtdXN0IHByb3ZpZGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNvcnJlY3RcbiAgICAvLyB2aWV3IG1vZGVsIG9uIGVhY2ggdXBkYXRlLlxuICAgIGtvLmJpbmRpbmdDb250ZXh0LnByb3RvdHlwZVsnY3JlYXRlQ2hpbGRDb250ZXh0J10gPSBmdW5jdGlvbiAoZGF0YUl0ZW1PckFjY2Vzc29yLCBkYXRhSXRlbUFsaWFzLCBleHRlbmRDYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGtvLmJpbmRpbmdDb250ZXh0KGRhdGFJdGVtT3JBY2Nlc3NvciwgdGhpcywgZGF0YUl0ZW1BbGlhcywgZnVuY3Rpb24oc2VsZiwgcGFyZW50Q29udGV4dCkge1xuICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBjb250ZXh0IGhpZXJhcmNoeSBieSBzZXR0aW5nIHRoZSBhcHByb3ByaWF0ZSBwb2ludGVyc1xuICAgICAgICAgICAgc2VsZlsnJHBhcmVudENvbnRleHQnXSA9IHBhcmVudENvbnRleHQ7XG4gICAgICAgICAgICBzZWxmWyckcGFyZW50J10gPSBwYXJlbnRDb250ZXh0WyckZGF0YSddO1xuICAgICAgICAgICAgc2VsZlsnJHBhcmVudHMnXSA9IChwYXJlbnRDb250ZXh0WyckcGFyZW50cyddIHx8IFtdKS5zbGljZSgwKTtcbiAgICAgICAgICAgIHNlbGZbJyRwYXJlbnRzJ10udW5zaGlmdChzZWxmWyckcGFyZW50J10pO1xuICAgICAgICAgICAgaWYgKGV4dGVuZENhbGxiYWNrKVxuICAgICAgICAgICAgICAgIGV4dGVuZENhbGxiYWNrKHNlbGYpO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLy8gRXh0ZW5kIHRoZSBiaW5kaW5nIGNvbnRleHQgd2l0aCBuZXcgY3VzdG9tIHByb3BlcnRpZXMuIFRoaXMgZG9lc24ndCBjaGFuZ2UgdGhlIGNvbnRleHQgaGllcmFyY2h5LlxuICAgIC8vIFNpbWlsYXJseSB0byBcImNoaWxkXCIgY29udGV4dHMsIHByb3ZpZGUgYSBmdW5jdGlvbiBoZXJlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBjb3JyZWN0IHZhbHVlcyBhcmUgc2V0XG4gICAgLy8gd2hlbiBhbiBvYnNlcnZhYmxlIHZpZXcgbW9kZWwgaXMgdXBkYXRlZC5cbiAgICBrby5iaW5kaW5nQ29udGV4dC5wcm90b3R5cGVbJ2V4dGVuZCddID0gZnVuY3Rpb24ocHJvcGVydGllcykge1xuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IGNvbnRleHQgcmVmZXJlbmNlcyBhbiBvYnNlcnZhYmxlIHZpZXcgbW9kZWwsIFwiX3N1YnNjcmliYWJsZVwiIHdpbGwgYWx3YXlzIGJlIHRoZVxuICAgICAgICAvLyBsYXRlc3QgdmlldyBtb2RlbCBvYmplY3QuIElmIG5vdCwgXCJfc3Vic2NyaWJhYmxlXCIgaXNuJ3Qgc2V0LCBhbmQgd2UgY2FuIHVzZSB0aGUgc3RhdGljIFwiJGRhdGFcIiB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIG5ldyBrby5iaW5kaW5nQ29udGV4dCh0aGlzLl9zdWJzY3JpYmFibGUgfHwgdGhpc1snJGRhdGEnXSwgdGhpcywgbnVsbCwgZnVuY3Rpb24oc2VsZiwgcGFyZW50Q29udGV4dCkge1xuICAgICAgICAgICAgLy8gVGhpcyBcImNoaWxkXCIgY29udGV4dCBkb2Vzbid0IGRpcmVjdGx5IHRyYWNrIGEgcGFyZW50IG9ic2VydmFibGUgdmlldyBtb2RlbCxcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSAkcmF3RGF0YSB2YWx1ZSB0byBtYXRjaCB0aGUgcGFyZW50LlxuICAgICAgICAgICAgc2VsZlsnJHJhd0RhdGEnXSA9IHBhcmVudENvbnRleHRbJyRyYXdEYXRhJ107XG4gICAgICAgICAgICBrby51dGlscy5leHRlbmQoc2VsZiwgdHlwZW9mKHByb3BlcnRpZXMpID09IFwiZnVuY3Rpb25cIiA/IHByb3BlcnRpZXMoKSA6IHByb3BlcnRpZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAga28uYmluZGluZ0NvbnRleHQucHJvdG90eXBlLmNyZWF0ZVN0YXRpY0NoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIChkYXRhSXRlbU9yQWNjZXNzb3IsIGRhdGFJdGVtQWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGRhdGFJdGVtT3JBY2Nlc3NvciwgZGF0YUl0ZW1BbGlhcywgbnVsbCwgeyBcImV4cG9ydERlcGVuZGVuY2llc1wiOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRoZSB2YWx1ZUFjY2Vzb3IgZnVuY3Rpb24gZm9yIGEgYmluZGluZyB2YWx1ZVxuICAgIGZ1bmN0aW9uIG1ha2VWYWx1ZUFjY2Vzc29yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlQWNjZXNzb3IgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBldmFsdWF0ZVZhbHVlQWNjZXNzb3IodmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gdmFsdWVBY2Nlc3NvcigpO1xuICAgIH1cblxuICAgIC8vIEdpdmVuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGJpbmRpbmdzLCBjcmVhdGUgYW5kIHJldHVybiBhIG5ldyBvYmplY3QgdGhhdCBjb250YWluc1xuICAgIC8vIGJpbmRpbmcgdmFsdWUtYWNjZXNzb3JzIGZ1bmN0aW9ucy4gRWFjaCBhY2Nlc3NvciBmdW5jdGlvbiBjYWxscyB0aGUgb3JpZ2luYWwgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IGl0IGFsd2F5cyBnZXRzIHRoZSBsYXRlc3QgdmFsdWUgYW5kIGFsbCBkZXBlbmRlbmNpZXMgYXJlIGNhcHR1cmVkLiBUaGlzIGlzIHVzZWRcbiAgICAvLyBieSBrby5hcHBseUJpbmRpbmdzVG9Ob2RlIGFuZCBnZXRCaW5kaW5nc0FuZE1ha2VBY2Nlc3NvcnMuXG4gICAgZnVuY3Rpb24gbWFrZUFjY2Vzc29yc0Zyb21GdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4ga28udXRpbHMub2JqZWN0TWFwKGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGNhbGxiYWNrKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpW2tleV07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBHaXZlbiBhIGJpbmRpbmdzIGZ1bmN0aW9uIG9yIG9iamVjdCwgY3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgb2JqZWN0IHRoYXQgY29udGFpbnNcbiAgICAvLyBiaW5kaW5nIHZhbHVlLWFjY2Vzc29ycyBmdW5jdGlvbnMuIFRoaXMgaXMgdXNlZCBieSBrby5hcHBseUJpbmRpbmdzVG9Ob2RlLlxuICAgIGZ1bmN0aW9uIG1ha2VCaW5kaW5nQWNjZXNzb3JzKGJpbmRpbmdzLCBjb250ZXh0LCBub2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmluZGluZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlQWNjZXNzb3JzRnJvbUZ1bmN0aW9uKGJpbmRpbmdzLmJpbmQobnVsbCwgY29udGV4dCwgbm9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm9iamVjdE1hcChiaW5kaW5ncywgbWFrZVZhbHVlQWNjZXNzb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGlmIHRoZSBiaW5kaW5nIHByb3ZpZGVyIGRvZXNuJ3QgaW5jbHVkZSBhIGdldEJpbmRpbmdBY2Nlc3NvcnMgZnVuY3Rpb24uXG4gICAgLy8gSXQgbXVzdCBiZSBjYWxsZWQgd2l0aCAndGhpcycgc2V0IHRvIHRoZSBwcm92aWRlciBpbnN0YW5jZS5cbiAgICBmdW5jdGlvbiBnZXRCaW5kaW5nc0FuZE1ha2VBY2Nlc3NvcnMobm9kZSwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gbWFrZUFjY2Vzc29yc0Zyb21GdW5jdGlvbih0aGlzWydnZXRCaW5kaW5ncyddLmJpbmQodGhpcywgbm9kZSwgY29udGV4dCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGhhdEJpbmRpbmdJc0FsbG93ZWRGb3JWaXJ0dWFsRWxlbWVudHMoYmluZGluZ05hbWUpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbYmluZGluZ05hbWVdO1xuICAgICAgICBpZiAoIXZhbGlkYXRvcilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBiaW5kaW5nICdcIiArIGJpbmRpbmdOYW1lICsgXCInIGNhbm5vdCBiZSB1c2VkIHdpdGggdmlydHVhbCBlbGVtZW50c1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzSW50ZXJuYWwgKGJpbmRpbmdDb250ZXh0LCBlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgYmluZGluZ0NvbnRleHRzTWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDaGlsZCxcbiAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpLFxuICAgICAgICAgICAgcHJvdmlkZXIgPSBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10sXG4gICAgICAgICAgICBwcmVwcm9jZXNzTm9kZSA9IHByb3ZpZGVyWydwcmVwcm9jZXNzTm9kZSddO1xuXG4gICAgICAgIC8vIFByZXByb2Nlc3NpbmcgYWxsb3dzIGEgYmluZGluZyBwcm92aWRlciB0byBtdXRhdGUgYSBub2RlIGJlZm9yZSBiaW5kaW5ncyBhcmUgYXBwbGllZCB0byBpdC4gRm9yIGV4YW1wbGUgaXQnc1xuICAgICAgICAvLyBwb3NzaWJsZSB0byBpbnNlcnQgbmV3IHNpYmxpbmdzIGFmdGVyIGl0LCBhbmQvb3IgcmVwbGFjZSB0aGUgbm9kZSB3aXRoIGEgZGlmZmVyZW50IG9uZS4gVGhpcyBjYW4gYmUgdXNlZCB0b1xuICAgICAgICAvLyBpbXBsZW1lbnQgY3VzdG9tIGJpbmRpbmcgc3ludGF4ZXMsIHN1Y2ggYXMge3sgdmFsdWUgfX0gZm9yIHN0cmluZyBpbnRlcnBvbGF0aW9uLCBvciBjdXN0b20gZWxlbWVudCB0eXBlcyB0aGF0XG4gICAgICAgIC8vIHRyaWdnZXIgaW5zZXJ0aW9uIG9mIDx0ZW1wbGF0ZT4gY29udGVudHMgYXQgdGhhdCBwb2ludCBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGlmIChwcmVwcm9jZXNzTm9kZSkge1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRDaGlsZCA9IG5leHRJblF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgbmV4dEluUXVldWUgPSBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcoY3VycmVudENoaWxkKTtcbiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzTm9kZS5jYWxsKHByb3ZpZGVyLCBjdXJyZW50Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzZXQgbmV4dEluUXVldWUgZm9yIHRoZSBuZXh0IGxvb3BcbiAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRDaGlsZCA9IG5leHRJblF1ZXVlKSB7XG4gICAgICAgICAgICAvLyBLZWVwIGEgcmVjb3JkIG9mIHRoZSBuZXh0IGNoaWxkICpiZWZvcmUqIGFwcGx5aW5nIGJpbmRpbmdzLCBpbiBjYXNlIHRoZSBiaW5kaW5nIHJlbW92ZXMgdGhlIGN1cnJlbnQgY2hpbGQgZnJvbSBpdHMgcG9zaXRpb25cbiAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKGN1cnJlbnRDaGlsZCk7XG4gICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9Ob2RlQW5kRGVzY2VuZGFudHNJbnRlcm5hbChiaW5kaW5nQ29udGV4dCwgY3VycmVudENoaWxkLCBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJpbmRpbmdzVG9Ob2RlQW5kRGVzY2VuZGFudHNJbnRlcm5hbCAoYmluZGluZ0NvbnRleHQsIG5vZGVWZXJpZmllZCwgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkge1xuICAgICAgICB2YXIgc2hvdWxkQmluZERlc2NlbmRhbnRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBQZXJmIG9wdGltaXNhdGlvbjogQXBwbHkgYmluZGluZ3Mgb25seSBpZi4uLlxuICAgICAgICAvLyAoMSkgV2UgbmVlZCB0byBzdG9yZSB0aGUgYmluZGluZyBjb250ZXh0IG9uIHRoaXMgbm9kZSAoYmVjYXVzZSBpdCBtYXkgZGlmZmVyIGZyb20gdGhlIERPTSBwYXJlbnQgbm9kZSdzIGJpbmRpbmcgY29udGV4dClcbiAgICAgICAgLy8gICAgIE5vdGUgdGhhdCB3ZSBjYW4ndCBzdG9yZSBiaW5kaW5nIGNvbnRleHRzIG9uIG5vbi1lbGVtZW50cyAoZS5nLiwgdGV4dCBub2RlcyksIGFzIElFIGRvZXNuJ3QgYWxsb3cgZXhwYW5kbyBwcm9wZXJ0aWVzIGZvciB0aG9zZVxuICAgICAgICAvLyAoMikgSXQgbWlnaHQgaGF2ZSBiaW5kaW5ncyAoZS5nLiwgaXQgaGFzIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZSwgb3IgaXQncyBhIG1hcmtlciBmb3IgYSBjb250YWluZXJsZXNzIHRlbXBsYXRlKVxuICAgICAgICB2YXIgaXNFbGVtZW50ID0gKG5vZGVWZXJpZmllZC5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgIGlmIChpc0VsZW1lbnQpIC8vIFdvcmthcm91bmQgSUUgPD0gOCBIVE1MIHBhcnNpbmcgd2VpcmRuZXNzXG4gICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMubm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmUobm9kZVZlcmlmaWVkKTtcblxuICAgICAgICB2YXIgc2hvdWxkQXBwbHlCaW5kaW5ncyA9IChpc0VsZW1lbnQgJiYgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkgICAgICAgICAgICAgLy8gQ2FzZSAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ11bJ25vZGVIYXNCaW5kaW5ncyddKG5vZGVWZXJpZmllZCk7ICAgICAgIC8vIENhc2UgKDIpXG4gICAgICAgIGlmIChzaG91bGRBcHBseUJpbmRpbmdzKVxuICAgICAgICAgICAgc2hvdWxkQmluZERlc2NlbmRhbnRzID0gYXBwbHlCaW5kaW5nc1RvTm9kZUludGVybmFsKG5vZGVWZXJpZmllZCwgbnVsbCwgYmluZGluZ0NvbnRleHQsIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpWydzaG91bGRCaW5kRGVzY2VuZGFudHMnXTtcblxuICAgICAgICBpZiAoc2hvdWxkQmluZERlc2NlbmRhbnRzICYmICFiaW5kaW5nRG9lc05vdFJlY3Vyc2VJbnRvRWxlbWVudFR5cGVzW2tvLnV0aWxzLnRhZ05hbWVMb3dlcihub2RlVmVyaWZpZWQpXSkge1xuICAgICAgICAgICAgLy8gV2UncmUgcmVjdXJzaW5nIGF1dG9tYXRpY2FsbHkgaW50byAocmVhbCBvciB2aXJ0dWFsKSBjaGlsZCBub2RlcyB3aXRob3V0IGNoYW5naW5nIGJpbmRpbmcgY29udGV4dHMuIFNvLFxuICAgICAgICAgICAgLy8gICogRm9yIGNoaWxkcmVuIG9mIGEgKnJlYWwqIGVsZW1lbnQsIHRoZSBiaW5kaW5nIGNvbnRleHQgaXMgY2VydGFpbmx5IHRoZSBzYW1lIGFzIG9uIHRoZWlyIERPTSAucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIC8vICAgIGhlbmNlIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50IGlzIGZhbHNlXG4gICAgICAgICAgICAvLyAgKiBGb3IgY2hpbGRyZW4gb2YgYSAqdmlydHVhbCogZWxlbWVudCwgd2UgY2FuJ3QgYmUgc3VyZS4gRXZhbHVhdGluZyAucGFyZW50Tm9kZSBvbiB0aG9zZSBjaGlsZHJlbiBtYXlcbiAgICAgICAgICAgIC8vICAgIHNraXAgb3ZlciBhbnkgbnVtYmVyIG9mIGludGVybWVkaWF0ZSB2aXJ0dWFsIGVsZW1lbnRzLCBhbnkgb2Ygd2hpY2ggbWlnaHQgZGVmaW5lIGEgY3VzdG9tIGJpbmRpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vICAgIGhlbmNlIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50IGlzIHRydWVcbiAgICAgICAgICAgIGFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzSW50ZXJuYWwoYmluZGluZ0NvbnRleHQsIG5vZGVWZXJpZmllZCwgLyogYmluZGluZ0NvbnRleHRzTWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQ6ICovICFpc0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kRWxlbWVudERvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTtcblxuXG4gICAgZnVuY3Rpb24gdG9wb2xvZ2ljYWxTb3J0QmluZGluZ3MoYmluZGluZ3MpIHtcbiAgICAgICAgLy8gRGVwdGgtZmlyc3Qgc29ydFxuICAgICAgICB2YXIgcmVzdWx0ID0gW10sICAgICAgICAgICAgICAgIC8vIFRoZSBsaXN0IG9mIGtleS9oYW5kbGVyIHBhaXJzIHRoYXQgd2Ugd2lsbCByZXR1cm5cbiAgICAgICAgICAgIGJpbmRpbmdzQ29uc2lkZXJlZCA9IHt9LCAgICAvLyBBIHRlbXBvcmFyeSByZWNvcmQgb2Ygd2hpY2ggYmluZGluZ3MgYXJlIGFscmVhZHkgaW4gJ3Jlc3VsdCdcbiAgICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lTdGFjayA9IFtdOyAvLyBLZWVwcyB0cmFjayBvZiBhIGRlcHRoLXNlYXJjaCBzbyB0aGF0LCBpZiB0aGVyZSdzIGEgY3ljbGUsIHdlIGtub3cgd2hpY2ggYmluZGluZ3MgY2F1c2VkIGl0XG4gICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goYmluZGluZ3MsIGZ1bmN0aW9uIHB1c2hCaW5kaW5nKGJpbmRpbmdLZXkpIHtcbiAgICAgICAgICAgIGlmICghYmluZGluZ3NDb25zaWRlcmVkW2JpbmRpbmdLZXldKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRpbmcgPSBrb1snZ2V0QmluZGluZ0hhbmRsZXInXShiaW5kaW5nS2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCBhZGQgZGVwZW5kZW5jaWVzIChpZiBhbnkpIG9mIHRoZSBjdXJyZW50IGJpbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdbJ2FmdGVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lTdGFjay5wdXNoKGJpbmRpbmdLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGJpbmRpbmdbJ2FmdGVyJ10sIGZ1bmN0aW9uKGJpbmRpbmdEZXBlbmRlbmN5S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzW2JpbmRpbmdEZXBlbmRlbmN5S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKGN5Y2xpY0RlcGVuZGVuY3lTdGFjaywgYmluZGluZ0RlcGVuZGVuY3lLZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW5ub3QgY29tYmluZSB0aGUgZm9sbG93aW5nIGJpbmRpbmdzLCBiZWNhdXNlIHRoZXkgaGF2ZSBhIGN5Y2xpYyBkZXBlbmRlbmN5OiBcIiArIGN5Y2xpY0RlcGVuZGVuY3lTdGFjay5qb2luKFwiLCBcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEJpbmRpbmcoYmluZGluZ0RlcGVuZGVuY3lLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjeWNsaWNEZXBlbmRlbmN5U3RhY2subGVuZ3RoLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBhZGQgdGhlIGN1cnJlbnQgYmluZGluZ1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IGtleTogYmluZGluZ0tleSwgaGFuZGxlcjogYmluZGluZyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmluZGluZ3NDb25zaWRlcmVkW2JpbmRpbmdLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJpbmRpbmdzVG9Ob2RlSW50ZXJuYWwobm9kZSwgc291cmNlQmluZGluZ3MsIGJpbmRpbmdDb250ZXh0LCBiaW5kaW5nQ29udGV4dE1heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgYXBwbHlCaW5kaW5ncyBjYWxscyBmb3IgdGhlIHNhbWUgbm9kZSwgZXhjZXB0IHdoZW4gYSBiaW5kaW5nIHZhbHVlIGlzIHNwZWNpZmllZFxuICAgICAgICB2YXIgYWxyZWFkeUJvdW5kID0ga28udXRpbHMuZG9tRGF0YS5nZXQobm9kZSwgYm91bmRFbGVtZW50RG9tRGF0YUtleSk7XG4gICAgICAgIGlmICghc291cmNlQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChhbHJlYWR5Qm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIllvdSBjYW5ub3QgYXBwbHkgYmluZGluZ3MgbXVsdGlwbGUgdGltZXMgdG8gdGhlIHNhbWUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBib3VuZEVsZW1lbnREb21EYXRhS2V5LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9wdGltaXphdGlvbjogRG9uJ3Qgc3RvcmUgdGhlIGJpbmRpbmcgY29udGV4dCBvbiB0aGlzIG5vZGUgaWYgaXQncyBkZWZpbml0ZWx5IHRoZSBzYW1lIGFzIG9uIG5vZGUucGFyZW50Tm9kZSwgYmVjYXVzZVxuICAgICAgICAvLyB3ZSBjYW4gZWFzaWx5IHJlY292ZXIgaXQganVzdCBieSBzY2FubmluZyB1cCB0aGUgbm9kZSdzIGFuY2VzdG9ycyBpbiB0aGUgRE9NXG4gICAgICAgIC8vIChub3RlOiBoZXJlLCBwYXJlbnQgbm9kZSBtZWFucyBcInJlYWwgRE9NIHBhcmVudFwiIG5vdCBcInZpcnR1YWwgcGFyZW50XCIsIGFzIHRoZXJlJ3Mgbm8gTygxKSB3YXkgdG8gZmluZCB0aGUgdmlydHVhbCBwYXJlbnQpXG4gICAgICAgIGlmICghYWxyZWFkeUJvdW5kICYmIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICBrby5zdG9yZWRCaW5kaW5nQ29udGV4dEZvck5vZGUobm9kZSwgYmluZGluZ0NvbnRleHQpO1xuXG4gICAgICAgIC8vIFVzZSBiaW5kaW5ncyBpZiBnaXZlbiwgb3RoZXJ3aXNlIGZhbGwgYmFjayBvbiBhc2tpbmcgdGhlIGJpbmRpbmdzIHByb3ZpZGVyIHRvIGdpdmUgdXMgc29tZSBiaW5kaW5nc1xuICAgICAgICB2YXIgYmluZGluZ3M7XG4gICAgICAgIGlmIChzb3VyY2VCaW5kaW5ncyAmJiB0eXBlb2Ygc291cmNlQmluZGluZ3MgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJpbmRpbmdzID0gc291cmNlQmluZGluZ3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10sXG4gICAgICAgICAgICAgICAgZ2V0QmluZGluZ3MgPSBwcm92aWRlclsnZ2V0QmluZGluZ0FjY2Vzc29ycyddIHx8IGdldEJpbmRpbmdzQW5kTWFrZUFjY2Vzc29ycztcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBiaW5kaW5nIGZyb20gdGhlIHByb3ZpZGVyIHdpdGhpbiBhIGNvbXB1dGVkIG9ic2VydmFibGUgc28gdGhhdCB3ZSBjYW4gdXBkYXRlIHRoZSBiaW5kaW5ncyB3aGVuZXZlclxuICAgICAgICAgICAgLy8gdGhlIGJpbmRpbmcgY29udGV4dCBpcyB1cGRhdGVkIG9yIGlmIHRoZSBiaW5kaW5nIHByb3ZpZGVyIGFjY2Vzc2VzIG9ic2VydmFibGVzLlxuICAgICAgICAgICAgdmFyIGJpbmRpbmdzVXBkYXRlciA9IGtvLmRlcGVuZGVudE9ic2VydmFibGUoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzID0gc291cmNlQmluZGluZ3MgPyBzb3VyY2VCaW5kaW5ncyhiaW5kaW5nQ29udGV4dCwgbm9kZSkgOiBnZXRCaW5kaW5ncy5jYWxsKHByb3ZpZGVyLCBub2RlLCBiaW5kaW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGEgZGVwZW5kZW5jeSBvbiB0aGUgYmluZGluZyBjb250ZXh0IHRvIHN1cHBvcnQgb2JzZXJ2YWJsZSB2aWV3IG1vZGVscy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmdzICYmIGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nQ29udGV4dC5fc3Vic2NyaWJhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5ncztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBub2RlIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghYmluZGluZ3MgfHwgIWJpbmRpbmdzVXBkYXRlci5pc0FjdGl2ZSgpKVxuICAgICAgICAgICAgICAgIGJpbmRpbmdzVXBkYXRlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M7XG4gICAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBhY2Nlc3NvciBmb3IgYSBnaXZlbiBiaW5kaW5nLiBXaGVuIGJpbmRpbmdzIGFyZSBzdGF0aWMgKHdvbid0IGJlIHVwZGF0ZWQgYmVjYXVzZSBvZiBhIGJpbmRpbmdcbiAgICAgICAgICAgIC8vIGNvbnRleHQgdXBkYXRlKSwganVzdCByZXR1cm4gdGhlIHZhbHVlIGFjY2Vzc29yIGZyb20gdGhlIGJpbmRpbmcuIE90aGVyd2lzZSwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBhbHdheXMgZ2V0c1xuICAgICAgICAgICAgLy8gdGhlIGxhdGVzdCBiaW5kaW5nIHZhbHVlIGFuZCByZWdpc3RlcnMgYSBkZXBlbmRlbmN5IG9uIHRoZSBiaW5kaW5nIHVwZGF0ZXIuXG4gICAgICAgICAgICB2YXIgZ2V0VmFsdWVBY2Nlc3NvciA9IGJpbmRpbmdzVXBkYXRlclxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24oYmluZGluZ0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKGJpbmRpbmdzVXBkYXRlcigpW2JpbmRpbmdLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oYmluZGluZ0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ3NbYmluZGluZ0tleV07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVXNlIG9mIGFsbEJpbmRpbmdzIGFzIGEgZnVuY3Rpb24gaXMgbWFpbnRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIGJ1dCBpdHMgdXNlIGlzIGRlcHJlY2F0ZWRcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFsbEJpbmRpbmdzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5vYmplY3RNYXAoYmluZGluZ3NVcGRhdGVyID8gYmluZGluZ3NVcGRhdGVyKCkgOiBiaW5kaW5ncywgZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgdGhlIDMueCBhbGxCaW5kaW5ncyBBUElcbiAgICAgICAgICAgIGFsbEJpbmRpbmdzWydnZXQnXSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nc1trZXldICYmIGV2YWx1YXRlVmFsdWVBY2Nlc3NvcihnZXRWYWx1ZUFjY2Vzc29yKGtleSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFsbEJpbmRpbmdzWydoYXMnXSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgaW4gYmluZGluZ3M7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGaXJzdCBwdXQgdGhlIGJpbmRpbmdzIGludG8gdGhlIHJpZ2h0IG9yZGVyXG4gICAgICAgICAgICB2YXIgb3JkZXJlZEJpbmRpbmdzID0gdG9wb2xvZ2ljYWxTb3J0QmluZGluZ3MoYmluZGluZ3MpO1xuXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBzb3J0ZWQgYmluZGluZ3MsIGNhbGxpbmcgaW5pdCBhbmQgdXBkYXRlIGZvciBlYWNoXG4gICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2gob3JkZXJlZEJpbmRpbmdzLCBmdW5jdGlvbihiaW5kaW5nS2V5QW5kSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0b3BvbG9naWNhbFNvcnRCaW5kaW5ncyBoYXMgYWxyZWFkeSBmaWx0ZXJlZCBvdXQgYW55IG5vbmV4aXN0ZW50IGJpbmRpbmcgaGFuZGxlcnMsXG4gICAgICAgICAgICAgICAgLy8gc28gYmluZGluZ0tleUFuZEhhbmRsZXIuaGFuZGxlciB3aWxsIGFsd2F5cyBiZSBub25udWxsLlxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVySW5pdEZuID0gYmluZGluZ0tleUFuZEhhbmRsZXIuaGFuZGxlcltcImluaXRcIl0sXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJVcGRhdGVGbiA9IGJpbmRpbmdLZXlBbmRIYW5kbGVyLmhhbmRsZXJbXCJ1cGRhdGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdLZXkgPSBiaW5kaW5nS2V5QW5kSGFuZGxlci5rZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRoYXRCaW5kaW5nSXNBbGxvd2VkRm9yVmlydHVhbEVsZW1lbnRzKGJpbmRpbmdLZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biBpbml0LCBpZ25vcmluZyBhbnkgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlckluaXRGbiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbml0UmVzdWx0ID0gaGFuZGxlckluaXRGbihub2RlLCBnZXRWYWx1ZUFjY2Vzc29yKGJpbmRpbmdLZXkpLCBhbGxCaW5kaW5ncywgYmluZGluZ0NvbnRleHRbJyRkYXRhJ10sIGJpbmRpbmdDb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgYmluZGluZyBoYW5kbGVyIGNsYWltcyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3MsIG1ha2UgYSBub3RlIG9mIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdFJlc3VsdCAmJiBpbml0UmVzdWx0Wydjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nSGFuZGxlclRoYXRDb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVsdGlwbGUgYmluZGluZ3MgKFwiICsgYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgKyBcIiBhbmQgXCIgKyBiaW5kaW5nS2V5ICsgXCIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nSGFuZGxlclRoYXRDb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyA9IGJpbmRpbmdLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXBkYXRlIGluIGl0cyBvd24gY29tcHV0ZWQgd3JhcHBlclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXJVcGRhdGVGbiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVudE9ic2VydmFibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJVcGRhdGVGbihub2RlLCBnZXRWYWx1ZUFjY2Vzc29yKGJpbmRpbmdLZXkpLCBhbGxCaW5kaW5ncywgYmluZGluZ0NvbnRleHRbJyRkYXRhJ10sIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IG5vZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Lm1lc3NhZ2UgPSBcIlVuYWJsZSB0byBwcm9jZXNzIGJpbmRpbmcgXFxcIlwiICsgYmluZGluZ0tleSArIFwiOiBcIiArIGJpbmRpbmdzW2JpbmRpbmdLZXldICsgXCJcXFwiXFxuTWVzc2FnZTogXCIgKyBleC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnc2hvdWxkQmluZERlc2NlbmRhbnRzJzogYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgPT09IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgc3RvcmVkQmluZGluZ0NvbnRleHREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG4gICAga28uc3RvcmVkQmluZGluZ0NvbnRleHRGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUpXG4gICAgICAgICAgICAgICAgYmluZGluZ0NvbnRleHQuX3N1YnNjcmliYWJsZS5fYWRkTm9kZShub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5kb21EYXRhLmdldChub2RlLCBzdG9yZWRCaW5kaW5nQ29udGV4dERvbURhdGFLZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCAmJiAodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCBpbnN0YW5jZW9mIGtvLmJpbmRpbmdDb250ZXh0KVxuICAgICAgICAgICAgPyB2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0XG4gICAgICAgICAgICA6IG5ldyBrby5iaW5kaW5nQ29udGV4dCh2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KTtcbiAgICB9XG5cbiAgICBrby5hcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGUgPSBmdW5jdGlvbiAobm9kZSwgYmluZGluZ3MsIHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIC8vIElmIGl0J3MgYW4gZWxlbWVudCwgd29ya2Fyb3VuZCBJRSA8PSA4IEhUTUwgcGFyc2luZyB3ZWlyZG5lc3NcbiAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5ub3JtYWxpc2VWaXJ0dWFsRWxlbWVudERvbVN0cnVjdHVyZShub2RlKTtcbiAgICAgICAgcmV0dXJuIGFwcGx5QmluZGluZ3NUb05vZGVJbnRlcm5hbChub2RlLCBiaW5kaW5ncywgZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCksIHRydWUpO1xuICAgIH07XG5cbiAgICBrby5hcHBseUJpbmRpbmdzVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIGJpbmRpbmdzLCB2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCk7XG4gICAgICAgIHJldHVybiBrby5hcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGUobm9kZSwgbWFrZUJpbmRpbmdBY2Nlc3NvcnMoYmluZGluZ3MsIGNvbnRleHQsIG5vZGUpLCBjb250ZXh0KTtcbiAgICB9O1xuXG4gICAga28uYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMgPSBmdW5jdGlvbih2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0LCByb290Tm9kZSkge1xuICAgICAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IDEgfHwgcm9vdE5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsKGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpLCByb290Tm9kZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIGtvLmFwcGx5QmluZGluZ3MgPSBmdW5jdGlvbiAodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCwgcm9vdE5vZGUpIHtcbiAgICAgICAgLy8gSWYgalF1ZXJ5IGlzIGxvYWRlZCBhZnRlciBLbm9ja291dCwgd2Ugd29uJ3QgaW5pdGlhbGx5IGhhdmUgYWNjZXNzIHRvIGl0LiBTbyBzYXZlIGl0IGhlcmUuXG4gICAgICAgIGlmICghalF1ZXJ5SW5zdGFuY2UgJiYgd2luZG93WydqUXVlcnknXSkge1xuICAgICAgICAgICAgalF1ZXJ5SW5zdGFuY2UgPSB3aW5kb3dbJ2pRdWVyeSddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3ROb2RlICYmIChyb290Tm9kZS5ub2RlVHlwZSAhPT0gMSkgJiYgKHJvb3ROb2RlLm5vZGVUeXBlICE9PSA4KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImtvLmFwcGx5QmluZGluZ3M6IGZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgeW91ciB2aWV3IG1vZGVsOyBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIERPTSBub2RlXCIpO1xuICAgICAgICByb290Tm9kZSA9IHJvb3ROb2RlIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5OyAvLyBNYWtlIFwicm9vdE5vZGVcIiBwYXJhbWV0ZXIgb3B0aW9uYWxcblxuICAgICAgICBhcHBseUJpbmRpbmdzVG9Ob2RlQW5kRGVzY2VuZGFudHNJbnRlcm5hbChnZXRCaW5kaW5nQ29udGV4dCh2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSwgcm9vdE5vZGUsIHRydWUpO1xuICAgIH07XG5cbiAgICAvLyBSZXRyaWV2aW5nIGJpbmRpbmcgY29udGV4dCBmcm9tIGFyYml0cmFyeSBub2Rlc1xuICAgIGtvLmNvbnRleHRGb3IgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIC8vIFdlIGNhbiBvbmx5IGRvIHNvbWV0aGluZyBtZWFuaW5nZnVsIGZvciBlbGVtZW50cyBhbmQgY29tbWVudCBub2RlcyAoaW4gcGFydGljdWxhciwgbm90IHRleHQgbm9kZXMsIGFzIElFIGNhbid0IHN0b3JlIGRvbWRhdGEgZm9yIHRoZW0pXG4gICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0ga28uc3RvcmVkQmluZGluZ0NvbnRleHRGb3JOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSByZXR1cm4ga28uY29udGV4dEZvcihub2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBrby5kYXRhRm9yID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IGtvLmNvbnRleHRGb3Iobm9kZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0ID8gY29udGV4dFsnJGRhdGEnXSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAga28uZXhwb3J0U3ltYm9sKCdiaW5kaW5nSGFuZGxlcnMnLCBrby5iaW5kaW5nSGFuZGxlcnMpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5ncycsIGtvLmFwcGx5QmluZGluZ3MpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMnLCBrby5hcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50cyk7XG4gICAga28uZXhwb3J0U3ltYm9sKCdhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGUnLCBrby5hcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGUpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nc1RvTm9kZScsIGtvLmFwcGx5QmluZGluZ3NUb05vZGUpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29udGV4dEZvcicsIGtvLmNvbnRleHRGb3IpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnZGF0YUZvcicsIGtvLmRhdGFGb3IpO1xufSkoKTtcbihmdW5jdGlvbih1bmRlZmluZWQpIHtcbiAgICB2YXIgbG9hZGluZ1N1YnNjcmliYWJsZXNDYWNoZSA9IHt9LCAvLyBUcmFja3MgY29tcG9uZW50IGxvYWRzIHRoYXQgYXJlIGN1cnJlbnRseSBpbiBmbGlnaHRcbiAgICAgICAgbG9hZGVkRGVmaW5pdGlvbnNDYWNoZSA9IHt9OyAgICAvLyBUcmFja3MgY29tcG9uZW50IGxvYWRzIHRoYXQgaGF2ZSBhbHJlYWR5IGNvbXBsZXRlZFxuXG4gICAga28uY29tcG9uZW50cyA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGNhY2hlZERlZmluaXRpb24gPSBnZXRPYmplY3RPd25Qcm9wZXJ0eShsb2FkZWREZWZpbml0aW9uc0NhY2hlLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmIChjYWNoZWREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhbHJlYWR5IGxvYWRlZCBhbmQgY2FjaGVkLiBSZXVzZSB0aGUgc2FtZSBkZWZpbml0aW9uIG9iamVjdC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgZm9yIEFQSSBjb25zaXN0ZW5jeSwgZXZlbiBjYWNoZSBoaXRzIGNvbXBsZXRlIGFzeW5jaHJvbm91c2x5IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiBieXBhc3MgdGhpcyBieSBwdXR0aW5nIHN5bmNocm9ub3VzOnRydWUgb24geW91ciBjb21wb25lbnQgY29uZmlnLlxuICAgICAgICAgICAgICAgIGlmIChjYWNoZWREZWZpbml0aW9uLmlzU3luY2hyb25vdXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoZnVuY3Rpb24oKSB7IC8vIFNlZSBjb21tZW50IGluIGxvYWRlclJlZ2lzdHJ5QmVoYXZpb3JzLmpzIGZvciByZWFzb25pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNhY2hlZERlZmluaXRpb24uZGVmaW5pdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnRhc2tzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjYWNoZWREZWZpbml0aW9uLmRlZmluaXRpb24pOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEpvaW4gdGhlIGxvYWRpbmcgcHJvY2VzcyB0aGF0IGlzIGFscmVhZHkgdW5kZXJ3YXksIG9yIHN0YXJ0IGEgbmV3IG9uZS5cbiAgICAgICAgICAgICAgICBsb2FkQ29tcG9uZW50QW5kTm90aWZ5KGNvbXBvbmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhckNhY2hlZERlZmluaXRpb246IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkZWREZWZpbml0aW9uc0NhY2hlW2NvbXBvbmVudE5hbWVdO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzOiBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldE9iamVjdE93blByb3BlcnR5KG9iaiwgcHJvcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgPyBvYmpbcHJvcE5hbWVdIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDb21wb25lbnRBbmROb3RpZnkoY29tcG9uZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN1YnNjcmliYWJsZSA9IGdldE9iamVjdE93blByb3BlcnR5KGxvYWRpbmdTdWJzY3JpYmFibGVzQ2FjaGUsIGNvbXBvbmVudE5hbWUpLFxuICAgICAgICAgICAgY29tcGxldGVkQXN5bmM7XG4gICAgICAgIGlmICghc3Vic2NyaWJhYmxlKSB7XG4gICAgICAgICAgICAvLyBJdCdzIG5vdCBzdGFydGVkIGxvYWRpbmcgeWV0LiBTdGFydCBsb2FkaW5nLCBhbmQgd2hlbiBpdCdzIGRvbmUsIG1vdmUgaXQgdG8gbG9hZGVkRGVmaW5pdGlvbnNDYWNoZS5cbiAgICAgICAgICAgIHN1YnNjcmliYWJsZSA9IGxvYWRpbmdTdWJzY3JpYmFibGVzQ2FjaGVbY29tcG9uZW50TmFtZV0gPSBuZXcga28uc3Vic2NyaWJhYmxlKCk7XG4gICAgICAgICAgICBzdWJzY3JpYmFibGUuc3Vic2NyaWJlKGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgYmVnaW5Mb2FkaW5nQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIGZ1bmN0aW9uKGRlZmluaXRpb24sIGNvbmZpZykge1xuICAgICAgICAgICAgICAgIHZhciBpc1N5bmNocm9ub3VzQ29tcG9uZW50ID0gISEoY29uZmlnICYmIGNvbmZpZ1snc3luY2hyb25vdXMnXSk7XG4gICAgICAgICAgICAgICAgbG9hZGVkRGVmaW5pdGlvbnNDYWNoZVtjb21wb25lbnROYW1lXSA9IHsgZGVmaW5pdGlvbjogZGVmaW5pdGlvbiwgaXNTeW5jaHJvbm91c0NvbXBvbmVudDogaXNTeW5jaHJvbm91c0NvbXBvbmVudCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkaW5nU3Vic2NyaWJhYmxlc0NhY2hlW2NvbXBvbmVudE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIEFQSSBjb25zaXN0ZW5jeSwgYWxsIGxvYWRzIGNvbXBsZXRlIGFzeW5jaHJvbm91c2x5LiBIb3dldmVyIHdlIHdhbnQgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyBhZGRpbmcgYW4gZXh0cmEgdGFzayBzY2hlZHVsZSBpZiBpdCdzIHVubmVjZXNzYXJ5IChpLmUuLCB0aGUgY29tcGxldGlvbiBpcyBhbHJlYWR5XG4gICAgICAgICAgICAgICAgLy8gYXN5bmMpLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiBieXBhc3MgdGhlICdhbHdheXMgYXN5bmNocm9ub3VzJyBmZWF0dXJlIGJ5IHB1dHRpbmcgdGhlIHN5bmNocm9ub3VzOnRydWVcbiAgICAgICAgICAgICAgICAvLyBmbGFnIG9uIHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24gd2hlbiB5b3UgcmVnaXN0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZEFzeW5jIHx8IGlzU3luY2hyb25vdXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IG5vdGlmeVN1YnNjcmliZXJzIGlnbm9yZXMgYW55IGRlcGVuZGVuY2llcyByZWFkIHdpdGhpbiB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBjb21tZW50IGluIGxvYWRlclJlZ2lzdHJ5QmVoYXZpb3JzLmpzIGZvciByZWFzb25pbmdcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJhYmxlWydub3RpZnlTdWJzY3JpYmVycyddKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnRhc2tzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJhYmxlWydub3RpZnlTdWJzY3JpYmVycyddKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbXBsZXRlZEFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliYWJsZS5zdWJzY3JpYmUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmVnaW5Mb2FkaW5nQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMoJ2dldENvbmZpZycsIFtjb21wb25lbnROYW1lXSwgZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGNvbmZpZywgc28gbm93IGxvYWQgaXRzIGRlZmluaXRpb25cbiAgICAgICAgICAgICAgICBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdsb2FkQ29tcG9uZW50JywgW2NvbXBvbmVudE5hbWUsIGNvbmZpZ10sIGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGVmaW5pdGlvbiwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvbXBvbmVudCBoYXMgbm8gY29uZmlnIC0gaXQncyB1bmtub3duIHRvIGFsbCB0aGUgbG9hZGVycy5cbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYW4gZXJyb3IgKGUuZy4sIGEgbW9kdWxlIGxvYWRpbmcgZXJyb3IpIC0gdGhhdCB3b3VsZCBhYm9ydCB0aGVcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIGFuZCB0aGlzIGNhbGxiYWNrIHdvdWxkIG5vdCBydW4uIEZvciB0aGlzIGNhbGxiYWNrIHRvIHJ1biwgYWxsIGxvYWRlcnMgbXVzdFxuICAgICAgICAgICAgICAgIC8vIGhhdmUgY29uZmlybWVkIHRoZXkgZG9uJ3Qga25vdyBhYm91dCB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycyhtZXRob2ROYW1lLCBhcmdzRXhjZXB0Q2FsbGJhY2ssIGNhbGxiYWNrLCBjYW5kaWRhdGVMb2FkZXJzKSB7XG4gICAgICAgIC8vIE9uIHRoZSBmaXJzdCBjYWxsIGluIHRoZSBzdGFjaywgc3RhcnQgd2l0aCB0aGUgZnVsbCBzZXQgb2YgbG9hZGVyc1xuICAgICAgICBpZiAoIWNhbmRpZGF0ZUxvYWRlcnMpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZUxvYWRlcnMgPSBrby5jb21wb25lbnRzWydsb2FkZXJzJ10uc2xpY2UoMCk7IC8vIFVzZSBhIGNvcHksIGJlY2F1c2Ugd2UnbGwgYmUgbXV0YXRpbmcgdGhpcyBhcnJheVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJ5IHRoZSBuZXh0IGNhbmRpZGF0ZVxuICAgICAgICB2YXIgY3VycmVudENhbmRpZGF0ZUxvYWRlciA9IGNhbmRpZGF0ZUxvYWRlcnMuc2hpZnQoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDYW5kaWRhdGVMb2FkZXIpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2RJbnN0YW5jZSA9IGN1cnJlbnRDYW5kaWRhdGVMb2FkZXJbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICBpZiAobWV0aG9kSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQWJvcnRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbm91c1JldHVyblZhbHVlID0gbWV0aG9kSW5zdGFuY2UuYXBwbHkoY3VycmVudENhbmRpZGF0ZUxvYWRlciwgYXJnc0V4Y2VwdENhbGxiYWNrLmNvbmNhdChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YXNBYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuZGlkYXRlIHJldHVybmVkIGEgdmFsdWUuIFVzZSBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdGhlIG5leHQgY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycyhtZXRob2ROYW1lLCBhcmdzRXhjZXB0Q2FsbGJhY2ssIGNhbGxiYWNrLCBjYW5kaWRhdGVMb2FkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5LCBsb2FkZXJzIG1heSBub3QgcmV0dXJuIGFueXRoaW5nIHN5bmNocm9ub3VzbHkuIFRoaXMgbGVhdmVzIG9wZW4gdGhlIHBvc3NpYmlsaXR5XG4gICAgICAgICAgICAgICAgLy8gdGhhdCB3ZSdsbCBleHRlbmQgdGhlIEFQSSB0byBzdXBwb3J0IHN5bmNocm9ub3VzIHJldHVybiB2YWx1ZXMgaW4gdGhlIGZ1dHVyZS4gSXQgd29uJ3QgYmVcbiAgICAgICAgICAgICAgICAvLyBhIGJyZWFraW5nIGNoYW5nZSwgYmVjYXVzZSBjdXJyZW50bHkgbm8gbG9hZGVyIGlzIGFsbG93ZWQgdG8gcmV0dXJuIGFueXRoaW5nIGV4Y2VwdCB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNocm9ub3VzUmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB3YXNBYm9ydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNZXRob2QgdG8gc3VwcHJlc3MgZXhjZXB0aW9ucyB3aWxsIHJlbWFpbiB1bmRvY3VtZW50ZWQuIFRoaXMgaXMgb25seSB0byBrZWVwXG4gICAgICAgICAgICAgICAgICAgIC8vIEtPJ3Mgc3BlY3MgcnVubmluZyB0aWRpbHksIHNpbmNlIHdlIGNhbiBvYnNlcnZlIHRoZSBsb2FkaW5nIGdvdCBhYm9ydGVkIHdpdGhvdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gaGF2aW5nIGV4Y2VwdGlvbnMgY2x1dHRlcmluZyB1cCB0aGUgY29uc29sZSB0b28uXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudENhbmRpZGF0ZUxvYWRlclsnc3VwcHJlc3NMb2FkZXJFeGNlcHRpb25zJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IGxvYWRlcnMgbXVzdCBzdXBwbHkgdmFsdWVzIGJ5IGludm9raW5nIHRoZSBjYWxsYmFjaywgbm90IGJ5IHJldHVybmluZyB2YWx1ZXMgc3luY2hyb25vdXNseS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjYW5kaWRhdGUgZG9lc24ndCBoYXZlIHRoZSByZWxldmFudCBoYW5kbGVyLiBTeW5jaHJvbm91c2x5IG1vdmUgb24gdG8gdGhlIG5leHQgb25lLlxuICAgICAgICAgICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMobWV0aG9kTmFtZSwgYXJnc0V4Y2VwdENhbGxiYWNrLCBjYWxsYmFjaywgY2FuZGlkYXRlTG9hZGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBjYW5kaWRhdGVzIHJldHVybmVkIGEgdmFsdWVcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVmZXJlbmNlIHRoZSBsb2FkZXJzIHZpYSBzdHJpbmcgbmFtZSBzbyBpdCdzIHBvc3NpYmxlIGZvciBkZXZlbG9wZXJzXG4gICAgLy8gdG8gcmVwbGFjZSB0aGUgd2hvbGUgYXJyYXkgYnkgYXNzaWduaW5nIHRvIGtvLmNvbXBvbmVudHMubG9hZGVyc1xuICAgIGtvLmNvbXBvbmVudHNbJ2xvYWRlcnMnXSA9IFtdO1xuXG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzJywga28uY29tcG9uZW50cyk7XG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmdldCcsIGtvLmNvbXBvbmVudHMuZ2V0KTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2NvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uJywga28uY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb24pO1xufSkoKTtcbihmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuICAgIC8vIFRoZSBkZWZhdWx0IGxvYWRlciBpcyByZXNwb25zaWJsZSBmb3IgdHdvIHRoaW5nczpcbiAgICAvLyAxLiBNYWludGFpbmluZyB0aGUgZGVmYXVsdCBpbi1tZW1vcnkgcmVnaXN0cnkgb2YgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24gb2JqZWN0c1xuICAgIC8vICAgIChpLmUuLCB0aGUgdGhpbmcgeW91J3JlIHdyaXRpbmcgdG8gd2hlbiB5b3UgY2FsbCBrby5jb21wb25lbnRzLnJlZ2lzdGVyKHNvbWVOYW1lLCAuLi4pKVxuICAgIC8vIDIuIEFuc3dlcmluZyByZXF1ZXN0cyBmb3IgY29tcG9uZW50cyBieSBmZXRjaGluZyBjb25maWd1cmF0aW9uIG9iamVjdHNcbiAgICAvLyAgICBmcm9tIHRoYXQgZGVmYXVsdCBpbi1tZW1vcnkgcmVnaXN0cnkgYW5kIHJlc29sdmluZyB0aGVtIGludG8gc3RhbmRhcmRcbiAgICAvLyAgICBjb21wb25lbnQgZGVmaW5pdGlvbiBvYmplY3RzIChvZiB0aGUgZm9ybSB7IGNyZWF0ZVZpZXdNb2RlbDogLi4uLCB0ZW1wbGF0ZTogLi4uIH0pXG4gICAgLy8gQ3VzdG9tIGxvYWRlcnMgbWF5IG92ZXJyaWRlIGVpdGhlciBvZiB0aGVzZSBmYWNpbGl0aWVzLCBpLmUuLFxuICAgIC8vIDEuIFRvIHN1cHBseSBjb25maWd1cmF0aW9uIG9iamVjdHMgZnJvbSBzb21lIG90aGVyIHNvdXJjZSAoZS5nLiwgY29udmVudGlvbnMpXG4gICAgLy8gMi4gT3IsIHRvIHJlc29sdmUgY29uZmlndXJhdGlvbiBvYmplY3RzIGJ5IGxvYWRpbmcgdmlld21vZGVscy90ZW1wbGF0ZXMgdmlhIGFyYml0cmFyeSBsb2dpYy5cblxuICAgIHZhciBkZWZhdWx0Q29uZmlnUmVnaXN0cnkgPSB7fTtcblxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb25maWd1cmF0aW9uIGZvciAnICsgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa28uY29tcG9uZW50cy5pc1JlZ2lzdGVyZWQoY29tcG9uZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50ICcgKyBjb21wb25lbnROYW1lICsgJyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHRDb25maWdSZWdpc3RyeVtjb21wb25lbnROYW1lXSA9IGNvbmZpZztcbiAgICB9O1xuXG4gICAga28uY29tcG9uZW50cy5pc1JlZ2lzdGVyZWQgPSBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnUmVnaXN0cnkuaGFzT3duUHJvcGVydHkoY29tcG9uZW50TmFtZSk7XG4gICAgfTtcblxuICAgIGtvLmNvbXBvbmVudHMudW5yZWdpc3RlciA9IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgZGVsZXRlIGRlZmF1bHRDb25maWdSZWdpc3RyeVtjb21wb25lbnROYW1lXTtcbiAgICAgICAga28uY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb24oY29tcG9uZW50TmFtZSk7XG4gICAgfTtcblxuICAgIGtvLmNvbXBvbmVudHMuZGVmYXVsdExvYWRlciA9IHtcbiAgICAgICAgJ2dldENvbmZpZyc6IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5Lmhhc093blByb3BlcnR5KGNvbXBvbmVudE5hbWUpXG4gICAgICAgICAgICAgICAgPyBkZWZhdWx0Q29uZmlnUmVnaXN0cnlbY29tcG9uZW50TmFtZV1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgICdsb2FkQ29tcG9uZW50JzogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGVycm9yQ2FsbGJhY2sgPSBtYWtlRXJyb3JDYWxsYmFjayhjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIHBvc3NpYmx5R2V0Q29uZmlnRnJvbUFtZChlcnJvckNhbGxiYWNrLCBjb25maWcsIGZ1bmN0aW9uKGxvYWRlZENvbmZpZykge1xuICAgICAgICAgICAgICAgIHJlc29sdmVDb25maWcoY29tcG9uZW50TmFtZSwgZXJyb3JDYWxsYmFjaywgbG9hZGVkQ29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAnbG9hZFRlbXBsYXRlJzogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgdGVtcGxhdGVDb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXNvbHZlVGVtcGxhdGUobWFrZUVycm9yQ2FsbGJhY2soY29tcG9uZW50TmFtZSksIHRlbXBsYXRlQ29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2xvYWRWaWV3TW9kZWwnOiBmdW5jdGlvbihjb21wb25lbnROYW1lLCB2aWV3TW9kZWxDb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXNvbHZlVmlld01vZGVsKG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpLCB2aWV3TW9kZWxDb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlVmlld01vZGVsS2V5ID0gJ2NyZWF0ZVZpZXdNb2RlbCc7XG5cbiAgICAvLyBUYWtlcyBhIGNvbmZpZyBvYmplY3Qgb2YgdGhlIGZvcm0geyB0ZW1wbGF0ZTogLi4uLCB2aWV3TW9kZWw6IC4uLiB9LCBhbmQgYXN5bmNocm9ub3VzbHkgY29udmVydCBpdFxuICAgIC8vIGludG8gdGhlIHN0YW5kYXJkIGNvbXBvbmVudCBkZWZpbml0aW9uIGZvcm1hdDpcbiAgICAvLyAgICB7IHRlbXBsYXRlOiA8QXJyYXlPZkRvbU5vZGVzPiwgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHsgLi4uIH0gfS5cbiAgICAvLyBTaW5jZSBib3RoIHRlbXBsYXRlIGFuZCB2aWV3TW9kZWwgbWF5IG5lZWQgdG8gYmUgcmVzb2x2ZWQgYXN5bmNocm9ub3VzbHksIGJvdGggdGFza3MgYXJlIHBlcmZvcm1lZFxuICAgIC8vIGluIHBhcmFsbGVsLCBhbmQgdGhlIHJlc3VsdHMgam9pbmVkIHdoZW4gYm90aCBhcmUgcmVhZHkuIFdlIGRvbid0IGRlcGVuZCBvbiBhbnkgcHJvbWlzZXMgaW5mcmFzdHJ1Y3R1cmUsXG4gICAgLy8gc28gdGhpcyBpcyBpbXBsZW1lbnRlZCBtYW51YWxseSBiZWxvdy5cbiAgICBmdW5jdGlvbiByZXNvbHZlQ29uZmlnKGNvbXBvbmVudE5hbWUsIGVycm9yQ2FsbGJhY2ssIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9LFxuICAgICAgICAgICAgbWFrZUNhbGxCYWNrV2hlblplcm8gPSAyLFxuICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgtLW1ha2VDYWxsQmFja1doZW5aZXJvID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ29uZmlnID0gY29uZmlnWyd0ZW1wbGF0ZSddLFxuICAgICAgICAgICAgdmlld01vZGVsQ29uZmlnID0gY29uZmlnWyd2aWV3TW9kZWwnXTtcblxuICAgICAgICBpZiAodGVtcGxhdGVDb25maWcpIHtcbiAgICAgICAgICAgIHBvc3NpYmx5R2V0Q29uZmlnRnJvbUFtZChlcnJvckNhbGxiYWNrLCB0ZW1wbGF0ZUNvbmZpZywgZnVuY3Rpb24obG9hZGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAga28uY29tcG9uZW50cy5fZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycygnbG9hZFRlbXBsYXRlJywgW2NvbXBvbmVudE5hbWUsIGxvYWRlZENvbmZpZ10sIGZ1bmN0aW9uKHJlc29sdmVkVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Wyd0ZW1wbGF0ZSddID0gcmVzb2x2ZWRUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnlJc3N1ZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlld01vZGVsQ29uZmlnKSB7XG4gICAgICAgICAgICBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgdmlld01vZGVsQ29uZmlnLCBmdW5jdGlvbihsb2FkZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgICBrby5jb21wb25lbnRzLl9nZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdsb2FkVmlld01vZGVsJywgW2NvbXBvbmVudE5hbWUsIGxvYWRlZENvbmZpZ10sIGZ1bmN0aW9uKHJlc29sdmVkVmlld01vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjcmVhdGVWaWV3TW9kZWxLZXldID0gcmVzb2x2ZWRWaWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgICAgIHRyeUlzc3VlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRlbXBsYXRlKGVycm9yQ2FsbGJhY2ssIHRlbXBsYXRlQ29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlQ29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gTWFya3VwIC0gcGFyc2UgaXRcbiAgICAgICAgICAgIGNhbGxiYWNrKGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KHRlbXBsYXRlQ29uZmlnKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVDb25maWcgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgLy8gQXNzdW1lIGFscmVhZHkgYW4gYXJyYXkgb2YgRE9NIG5vZGVzIC0gcGFzcyB0aHJvdWdoIHVuY2hhbmdlZFxuICAgICAgICAgICAgY2FsbGJhY2sodGVtcGxhdGVDb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRG9jdW1lbnRGcmFnbWVudCh0ZW1wbGF0ZUNvbmZpZykpIHtcbiAgICAgICAgICAgIC8vIERvY3VtZW50IGZyYWdtZW50IC0gdXNlIGl0cyBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgY2FsbGJhY2soa28udXRpbHMubWFrZUFycmF5KHRlbXBsYXRlQ29uZmlnLmNoaWxkTm9kZXMpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZUNvbmZpZ1snZWxlbWVudCddKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRlbXBsYXRlQ29uZmlnWydlbGVtZW50J107XG4gICAgICAgICAgICBpZiAoaXNEb21FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgLy8gRWxlbWVudCBpbnN0YW5jZSAtIGNvcHkgaXRzIGNoaWxkIG5vZGVzXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2xvbmVOb2Rlc0Zyb21UZW1wbGF0ZVNvdXJjZUVsZW1lbnQoZWxlbWVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBFbGVtZW50IElEIC0gZmluZCBpdCwgdGhlbiBjb3B5IGl0cyBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgICAgIHZhciBlbGVtSW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNsb25lTm9kZXNGcm9tVGVtcGxhdGVTb3VyY2VFbGVtZW50KGVsZW1JbnN0YW5jZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soJ0Nhbm5vdCBmaW5kIGVsZW1lbnQgd2l0aCBJRCAnICsgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdVbmtub3duIGVsZW1lbnQgdHlwZTogJyArIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygnVW5rbm93biB0ZW1wbGF0ZSB2YWx1ZTogJyArIHRlbXBsYXRlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVWaWV3TW9kZWwoZXJyb3JDYWxsYmFjaywgdmlld01vZGVsQ29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHZpZXdNb2RlbENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gQ29uc3RydWN0b3IgLSBjb252ZXJ0IHRvIHN0YW5kYXJkIGZhY3RvcnkgZnVuY3Rpb24gZm9ybWF0XG4gICAgICAgICAgICAvLyBCeSBkZXNpZ24sIHRoaXMgZG9lcyAqbm90KiBzdXBwbHkgY29tcG9uZW50SW5mbyB0byB0aGUgY29uc3RydWN0b3IsIGFzIHRoZSBpbnRlbnQgaXMgdGhhdFxuICAgICAgICAgICAgLy8gY29tcG9uZW50SW5mbyBjb250YWlucyBub24tdmlld21vZGVsIGRhdGEgKGUuZy4sIHRoZSBjb21wb25lbnQncyBlbGVtZW50KSB0aGF0IHNob3VsZCBvbmx5XG4gICAgICAgICAgICAvLyBiZSB1c2VkIGluIGZhY3RvcnkgZnVuY3Rpb25zLCBub3Qgdmlld21vZGVsIGNvbnN0cnVjdG9ycy5cbiAgICAgICAgICAgIGNhbGxiYWNrKGZ1bmN0aW9uIChwYXJhbXMgLyosIGNvbXBvbmVudEluZm8gKi8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHZpZXdNb2RlbENvbmZpZyhwYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZpZXdNb2RlbENvbmZpZ1tjcmVhdGVWaWV3TW9kZWxLZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBBbHJlYWR5IGEgZmFjdG9yeSBmdW5jdGlvbiAtIHVzZSBpdCBhcy1pc1xuICAgICAgICAgICAgY2FsbGJhY2sodmlld01vZGVsQ29uZmlnW2NyZWF0ZVZpZXdNb2RlbEtleV0pO1xuICAgICAgICB9IGVsc2UgaWYgKCdpbnN0YW5jZScgaW4gdmlld01vZGVsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBGaXhlZCBvYmplY3QgaW5zdGFuY2UgLSBwcm9tb3RlIHRvIGNyZWF0ZVZpZXdNb2RlbCBmb3JtYXQgZm9yIEFQSSBjb25zaXN0ZW5jeVxuICAgICAgICAgICAgdmFyIGZpeGVkSW5zdGFuY2UgPSB2aWV3TW9kZWxDb25maWdbJ2luc3RhbmNlJ107XG4gICAgICAgICAgICBjYWxsYmFjayhmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgndmlld01vZGVsJyBpbiB2aWV3TW9kZWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIFJlc29sdmVkIEFNRCBtb2R1bGUgd2hvc2UgdmFsdWUgaXMgb2YgdGhlIGZvcm0geyB2aWV3TW9kZWw6IC4uLiB9XG4gICAgICAgICAgICByZXNvbHZlVmlld01vZGVsKGVycm9yQ2FsbGJhY2ssIHZpZXdNb2RlbENvbmZpZ1sndmlld01vZGVsJ10sIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soJ1Vua25vd24gdmlld01vZGVsIHZhbHVlOiAnICsgdmlld01vZGVsQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lTm9kZXNGcm9tVGVtcGxhdGVTb3VyY2VFbGVtZW50KGVsZW1JbnN0YW5jZSkge1xuICAgICAgICBzd2l0Y2ggKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtSW5zdGFuY2UpKSB7XG4gICAgICAgICAgICBjYXNlICdzY3JpcHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudChlbGVtSW5zdGFuY2UudGV4dCk7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KGVsZW1JbnN0YW5jZS52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICd0ZW1wbGF0ZSc6XG4gICAgICAgICAgICAgICAgLy8gRm9yIGJyb3dzZXJzIHdpdGggcHJvcGVyIDx0ZW1wbGF0ZT4gZWxlbWVudCBzdXBwb3J0IChpLmUuLCB3aGVyZSB0aGUgLmNvbnRlbnQgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAvLyBnaXZlcyBhIGRvY3VtZW50IGZyYWdtZW50KSwgdXNlIHRoYXQgZG9jdW1lbnQgZnJhZ21lbnQuXG4gICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRGcmFnbWVudChlbGVtSW5zdGFuY2UuY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmNsb25lTm9kZXMoZWxlbUluc3RhbmNlLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVndWxhciBlbGVtZW50cyBzdWNoIGFzIDxkaXY+LCBhbmQgPHRlbXBsYXRlPiBlbGVtZW50cyBvbiBvbGQgYnJvd3NlcnMgdGhhdCBkb24ndCByZWFsbHlcbiAgICAgICAgLy8gdW5kZXJzdGFuZCA8dGVtcGxhdGU+IGFuZCBqdXN0IHRyZWF0IGl0IGFzIGEgcmVndWxhciBjb250YWluZXJcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmNsb25lTm9kZXMoZWxlbUluc3RhbmNlLmNoaWxkTm9kZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRG9tRWxlbWVudChvYmopIHtcbiAgICAgICAgaWYgKHdpbmRvd1snSFRNTEVsZW1lbnQnXSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoudGFnTmFtZSAmJiBvYmoubm9kZVR5cGUgPT09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RvY3VtZW50RnJhZ21lbnQob2JqKSB7XG4gICAgICAgIGlmICh3aW5kb3dbJ0RvY3VtZW50RnJhZ21lbnQnXSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ1sncmVxdWlyZSddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBpcyB0aGUgdmFsdWUgb2YgYW4gQU1EIG1vZHVsZVxuICAgICAgICAgICAgaWYgKGFtZFJlcXVpcmUgfHwgd2luZG93WydyZXF1aXJlJ10pIHtcbiAgICAgICAgICAgICAgICAoYW1kUmVxdWlyZSB8fCB3aW5kb3dbJ3JlcXVpcmUnXSkoW2NvbmZpZ1sncmVxdWlyZSddXSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRXJyb3JDYWxsYmFjayhjb21wb25lbnROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnOiAnICsgbWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLnJlZ2lzdGVyJywga28uY29tcG9uZW50cy5yZWdpc3Rlcik7XG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmlzUmVnaXN0ZXJlZCcsIGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2NvbXBvbmVudHMudW5yZWdpc3RlcicsIGtvLmNvbXBvbmVudHMudW5yZWdpc3Rlcik7XG5cbiAgICAvLyBFeHBvc2UgdGhlIGRlZmF1bHQgbG9hZGVyIHNvIHRoYXQgZGV2ZWxvcGVycyBjYW4gZGlyZWN0bHkgYXNrIGl0IGZvciBjb25maWd1cmF0aW9uXG4gICAgLy8gb3IgdG8gcmVzb2x2ZSBjb25maWd1cmF0aW9uXG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmRlZmF1bHRMb2FkZXInLCBrby5jb21wb25lbnRzLmRlZmF1bHRMb2FkZXIpO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgdGhlIGRlZmF1bHQgbG9hZGVyIGlzIHRoZSBvbmx5IHJlZ2lzdGVyZWQgY29tcG9uZW50IGxvYWRlclxuICAgIGtvLmNvbXBvbmVudHNbJ2xvYWRlcnMnXS5wdXNoKGtvLmNvbXBvbmVudHMuZGVmYXVsdExvYWRlcik7XG5cbiAgICAvLyBQcml2YXRlbHkgZXhwb3NlIHRoZSB1bmRlcmx5aW5nIGNvbmZpZyByZWdpc3RyeSBmb3IgdXNlIGluIG9sZC1JRSBzaGltXG4gICAga28uY29tcG9uZW50cy5fYWxsUmVnaXN0ZXJlZENvbXBvbmVudHMgPSBkZWZhdWx0Q29uZmlnUmVnaXN0cnk7XG59KSgpO1xuKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgICAvLyBPdmVycmlkYWJsZSBBUEkgZm9yIGRldGVybWluaW5nIHdoaWNoIGNvbXBvbmVudCBuYW1lIGFwcGxpZXMgdG8gYSBnaXZlbiBub2RlLiBCeSBvdmVycmlkaW5nIHRoaXMsXG4gICAgLy8geW91IGNhbiBmb3IgZXhhbXBsZSBtYXAgc3BlY2lmaWMgdGFnTmFtZXMgdG8gY29tcG9uZW50cyB0aGF0IGFyZSBub3QgcHJlcmVnaXN0ZXJlZC5cbiAgICBrby5jb21wb25lbnRzWydnZXRDb21wb25lbnROYW1lRm9yTm9kZSddID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB2YXIgdGFnTmFtZUxvd2VyID0ga28udXRpbHMudGFnTmFtZUxvd2VyKG5vZGUpO1xuICAgICAgICBpZiAoa28uY29tcG9uZW50cy5pc1JlZ2lzdGVyZWQodGFnTmFtZUxvd2VyKSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGF0IHRoaXMgbm9kZSBjYW4gYmUgY29uc2lkZXJlZCBhICpjdXN0b20qIGVsZW1lbnQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20va25vY2tvdXQva25vY2tvdXQvaXNzdWVzLzE2MDNcbiAgICAgICAgICAgIGlmICh0YWdOYW1lTG93ZXIuaW5kZXhPZignLScpICE9IC0xIHx8ICgnJyArIG5vZGUpID09IFwiW29iamVjdCBIVE1MVW5rbm93bkVsZW1lbnRdXCIgfHwgKGtvLnV0aWxzLmllVmVyc2lvbiA8PSA4ICYmIG5vZGUudGFnTmFtZSA9PT0gdGFnTmFtZUxvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWdOYW1lTG93ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28uY29tcG9uZW50cy5hZGRCaW5kaW5nc0ZvckN1c3RvbUVsZW1lbnQgPSBmdW5jdGlvbihhbGxCaW5kaW5ncywgbm9kZSwgYmluZGluZ0NvbnRleHQsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIC8vIERldGVybWluZSBpZiBpdCdzIHJlYWxseSBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGtvLmNvbXBvbmVudHNbJ2dldENvbXBvbmVudE5hbWVGb3JOb2RlJ10obm9kZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIEl0IGRvZXMgcmVwcmVzZW50IGEgY29tcG9uZW50LCBzbyBhZGQgYSBjb21wb25lbnQgYmluZGluZyBmb3IgaXRcbiAgICAgICAgICAgICAgICBhbGxCaW5kaW5ncyA9IGFsbEJpbmRpbmdzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydjb21wb25lbnQnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBzaWxlbnRseSBvdmVyd3JpdGluZyBzb21lIG90aGVyICdjb21wb25lbnQnIGJpbmRpbmcgdGhhdCBtYXkgYWxyZWFkeSBiZSBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgdGhlIFwiY29tcG9uZW50XCIgYmluZGluZyBvbiBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudEJpbmRpbmdWYWx1ZSA9IHsgJ25hbWUnOiBjb21wb25lbnROYW1lLCAncGFyYW1zJzogZ2V0Q29tcG9uZW50UGFyYW1zRnJvbUN1c3RvbUVsZW1lbnQobm9kZSwgYmluZGluZ0NvbnRleHQpIH07XG5cbiAgICAgICAgICAgICAgICBhbGxCaW5kaW5nc1snY29tcG9uZW50J10gPSB2YWx1ZUFjY2Vzc29yc1xuICAgICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50QmluZGluZ1ZhbHVlOyB9XG4gICAgICAgICAgICAgICAgICAgIDogY29tcG9uZW50QmluZGluZ1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbEJpbmRpbmdzO1xuICAgIH1cblxuICAgIHZhciBuYXRpdmVCaW5kaW5nUHJvdmlkZXJJbnN0YW5jZSA9IG5ldyBrby5iaW5kaW5nUHJvdmlkZXIoKTtcblxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudFBhcmFtc0Zyb21DdXN0b21FbGVtZW50KGVsZW0sIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJhbXNBdHRyaWJ1dGUgPSBlbGVtLmdldEF0dHJpYnV0ZSgncGFyYW1zJyk7XG5cbiAgICAgICAgaWYgKHBhcmFtc0F0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG5hdGl2ZUJpbmRpbmdQcm92aWRlckluc3RhbmNlWydwYXJzZUJpbmRpbmdzU3RyaW5nJ10ocGFyYW1zQXR0cmlidXRlLCBiaW5kaW5nQ29udGV4dCwgZWxlbSwgeyAndmFsdWVBY2Nlc3NvcnMnOiB0cnVlLCAnYmluZGluZ1BhcmFtcyc6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgcmF3UGFyYW1Db21wdXRlZFZhbHVlcyA9IGtvLnV0aWxzLm9iamVjdE1hcChwYXJhbXMsIGZ1bmN0aW9uKHBhcmFtVmFsdWUsIHBhcmFtTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28uY29tcHV0ZWQocGFyYW1WYWx1ZSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW0gfSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga28udXRpbHMub2JqZWN0TWFwKHJhd1BhcmFtQ29tcHV0ZWRWYWx1ZXMsIGZ1bmN0aW9uKHBhcmFtVmFsdWVDb21wdXRlZCwgcGFyYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbVZhbHVlID0gcGFyYW1WYWx1ZUNvbXB1dGVkLnBlZWsoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyB0aGUgZXZhbHVhdGlvbiBvZiB0aGUgcGFyYW1ldGVyIHZhbHVlIHVud3JhcCBhbnkgb2JzZXJ2YWJsZXM/XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1WYWx1ZUNvbXB1dGVkLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGl0IGRvZXNuJ3QsIHNvIHRoZXJlJ3Mgbm8gbmVlZCBmb3IgYW55IGNvbXB1dGVkIHdyYXBwZXIuIEp1c3QgcGFzcyB0aHJvdWdoIHRoZSBzdXBwbGllZCB2YWx1ZSBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IFwic29tZVZhbDogZmlyc3ROYW1lLCBhZ2U6IDEyM1wiICh3aGV0aGVyIG9yIG5vdCBmaXJzdE5hbWUgaXMgYW4gb2JzZXJ2YWJsZS9jb21wdXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWWVzIGl0IGRvZXMuIFN1cHBseSBhIGNvbXB1dGVkIHByb3BlcnR5IHRoYXQgdW53cmFwcyBib3RoIHRoZSBvdXRlciAoYmluZGluZyBleHByZXNzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWwgb2Ygb2JzZXJ2YWJpbGl0eSwgYW5kIGFueSBpbm5lciAocmVzdWx0aW5nIG1vZGVsIHZhbHVlKSBsZXZlbCBvZiBvYnNlcnZhYmlsaXR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBtdWx0aXBsZSB1bndyYXBwaW5nLiBJZiB0aGUgdmFsdWUgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3JpdGFibGUgb2JzZXJ2YWJsZSwgdGhlIGNvbXB1dGVkIHdpbGwgYWxzbyBiZSB3cml0YWJsZSBhbmQgcGFzcyB0aGUgdmFsdWUgb24gdG8gdGhlIG9ic2VydmFibGUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28uY29tcHV0ZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWFkJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHBhcmFtVmFsdWVDb21wdXRlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3cml0ZSc6IGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShwYXJhbVZhbHVlKSAmJiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbVZhbHVlQ29tcHV0ZWQoKSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEdpdmUgYWNjZXNzIHRvIHRoZSByYXcgY29tcHV0ZWRzLCBhcyBsb25nIGFzIHRoYXQgd291bGRuJ3Qgb3ZlcndyaXRlIGFueSBjdXN0b20gcGFyYW0gYWxzbyBjYWxsZWQgJyRyYXcnXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGluIGNhc2UgdGhlIGRldmVsb3BlciB3YW50cyB0byByZWFjdCB0byBvdXRlciAoYmluZGluZykgb2JzZXJ2YWJpbGl0eSBzZXBhcmF0ZWx5IGZyb20gaW5uZXJcbiAgICAgICAgICAgIC8vIChtb2RlbCB2YWx1ZSkgb2JzZXJ2YWJpbGl0eSwgb3IgaW4gY2FzZSB0aGUgbW9kZWwgdmFsdWUgb2JzZXJ2YWJsZSBoYXMgc3Vib2JzZXJ2YWJsZXMuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnJHJhdycpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0WyckcmF3J10gPSByYXdQYXJhbUNvbXB1dGVkVmFsdWVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIGNvbnNpc3RlbmN5LCBhYnNlbmNlIG9mIGEgXCJwYXJhbXNcIiBhdHRyaWJ1dGUgaXMgdHJlYXRlZCB0aGUgc2FtZSBhcyB0aGUgcHJlc2VuY2Ugb2ZcbiAgICAgICAgICAgIC8vIGFueSBlbXB0eSBvbmUuIE90aGVyd2lzZSBjb21wb25lbnQgdmlld21vZGVscyBuZWVkIHNwZWNpYWwgY29kZSB0byBjaGVjayB3aGV0aGVyIG9yIG5vdFxuICAgICAgICAgICAgLy8gJ3BhcmFtcycgb3IgJ3BhcmFtcy4kcmF3JyBpcyBudWxsL3VuZGVmaW5lZCBiZWZvcmUgcmVhZGluZyBzdWJwcm9wZXJ0aWVzLCB3aGljaCBpcyBhbm5veWluZy5cbiAgICAgICAgICAgIHJldHVybiB7ICckcmF3Jzoge30gfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29tcGF0aWJpbGl0eSBjb2RlIGZvciBvbGRlciAocHJlLUhUTUw1KSBJRSBicm93c2Vyc1xuXG4gICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA8IDkpIHtcbiAgICAgICAgLy8gV2hlbmV2ZXIgeW91IHByZXJlZ2lzdGVyIGEgY29tcG9uZW50LCBlbmFibGUgaXQgYXMgYSBjdXN0b20gZWxlbWVudCBpbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICAgICAgICBrby5jb21wb25lbnRzWydyZWdpc3RlciddID0gKGZ1bmN0aW9uKG9yaWdpbmFsRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnROYW1lKTsgLy8gQWxsb3dzIElFPDkgdG8gcGFyc2UgbWFya3VwIGNvbnRhaW5pbmcgdGhlIGN1c3RvbSBlbGVtZW50XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoa28uY29tcG9uZW50c1sncmVnaXN0ZXInXSk7XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgeW91IGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50LCBlbmFibGUgYWxsIHByZXJlZ2lzdGVyZWQgY29tcG9uZW50IG5hbWVzIGFzIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIGlubmVyU2hpdi9qUXVlcnkgSFRNTCBwYXJzaW5nIGNvcnJlY3RseSBoYW5kbGUgdGhlIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gKGZ1bmN0aW9uKG9yaWdpbmFsRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RG9jRnJhZyA9IG9yaWdpbmFsRnVuY3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgYWxsQ29tcG9uZW50cyA9IGtvLmNvbXBvbmVudHMuX2FsbFJlZ2lzdGVyZWRDb21wb25lbnRzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbXBvbmVudE5hbWUgaW4gYWxsQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsQ29tcG9uZW50cy5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RG9jRnJhZy5jcmVhdGVFbGVtZW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdEb2NGcmFnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgfVxufSkoKTsoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5cbiAgICB2YXIgY29tcG9uZW50TG9hZGluZ09wZXJhdGlvblVuaXF1ZUlkID0gMDtcblxuICAgIGtvLmJpbmRpbmdIYW5kbGVyc1snY29tcG9uZW50J10gPSB7XG4gICAgICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgaWdub3JlZDEsIGlnbm9yZWQyLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWaWV3TW9kZWwsXG4gICAgICAgICAgICAgICAgY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICBkaXNwb3NlQXNzb2NpYXRlZENvbXBvbmVudFZpZXdNb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWaWV3TW9kZWxEaXNwb3NlID0gY3VycmVudFZpZXdNb2RlbCAmJiBjdXJyZW50Vmlld01vZGVsWydkaXNwb3NlJ107XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZpZXdNb2RlbERpc3Bvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWxEaXNwb3NlLmNhbGwoY3VycmVudFZpZXdNb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFueSBpbi1mbGlnaHQgbG9hZGluZyBvcGVyYXRpb24gaXMgbm8gbG9uZ2VyIHJlbGV2YW50LCBzbyBtYWtlIHN1cmUgd2UgaWdub3JlIGl0cyBjb21wbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMb2FkaW5nT3BlcmF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDaGlsZE5vZGVzID0ga28udXRpbHMubWFrZUFycmF5KGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKGVsZW1lbnQpKTtcblxuICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbGVtZW50LCBkaXNwb3NlQXNzb2NpYXRlZENvbXBvbmVudFZpZXdNb2RlbCk7XG5cbiAgICAgICAgICAgIGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudFBhcmFtcztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZVsnbmFtZSddKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UGFyYW1zID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZVsncGFyYW1zJ10pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBuYW1lIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nT3BlcmF0aW9uSWQgPSBjdXJyZW50TG9hZGluZ09wZXJhdGlvbklkID0gKytjb21wb25lbnRMb2FkaW5nT3BlcmF0aW9uVW5pcXVlSWQ7XG4gICAgICAgICAgICAgICAga28uY29tcG9uZW50cy5nZXQoY29tcG9uZW50TmFtZSwgZnVuY3Rpb24oY29tcG9uZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgY3VycmVudCBsb2FkIG9wZXJhdGlvbiBmb3IgdGhpcyBlbGVtZW50LCBpZ25vcmUgaXQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TG9hZGluZ09wZXJhdGlvbklkICE9PSBsb2FkaW5nT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHByZXZpb3VzIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VBc3NvY2lhdGVkQ29tcG9uZW50Vmlld01vZGVsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGFudGlhdGUgYW5kIGJpbmQgbmV3IGNvbXBvbmVudC4gSW1wbGljaXRseSB0aGlzIGNsZWFucyBhbnkgb2xkIERPTSBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29tcG9uZW50IFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsb25lVGVtcGxhdGVJbnRvRWxlbWVudChjb21wb25lbnROYW1lLCBjb21wb25lbnREZWZpbml0aW9uLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudFZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbChjb21wb25lbnREZWZpbml0aW9uLCBlbGVtZW50LCBvcmlnaW5hbENoaWxkTm9kZXMsIGNvbXBvbmVudFBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJpbmRpbmdDb250ZXh0ID0gYmluZGluZ0NvbnRleHRbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGNvbXBvbmVudFZpZXdNb2RlbCwgLyogZGF0YUl0ZW1BbGlhcyAqLyB1bmRlZmluZWQsIGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eFsnJGNvbXBvbmVudCddID0gY29tcG9uZW50Vmlld01vZGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eFsnJGNvbXBvbmVudFRlbXBsYXRlTm9kZXMnXSA9IG9yaWdpbmFsQ2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsID0gY29tcG9uZW50Vmlld01vZGVsO1xuICAgICAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50cyhjaGlsZEJpbmRpbmdDb250ZXh0LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pO1xuXG4gICAgICAgICAgICByZXR1cm4geyAnY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MnOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1snY29tcG9uZW50J10gPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gY2xvbmVUZW1wbGF0ZUludG9FbGVtZW50KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudERlZmluaXRpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gY29tcG9uZW50RGVmaW5pdGlvblsndGVtcGxhdGUnXTtcbiAgICAgICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnIGhhcyBubyB0ZW1wbGF0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb25lZE5vZGVzQXJyYXkgPSBrby51dGlscy5jbG9uZU5vZGVzKHRlbXBsYXRlKTtcbiAgICAgICAga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbihlbGVtZW50LCBjbG9uZWROb2Rlc0FycmF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoY29tcG9uZW50RGVmaW5pdGlvbiwgZWxlbWVudCwgb3JpZ2luYWxDaGlsZE5vZGVzLCBjb21wb25lbnRQYXJhbXMpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudFZpZXdNb2RlbEZhY3RvcnkgPSBjb21wb25lbnREZWZpbml0aW9uWydjcmVhdGVWaWV3TW9kZWwnXTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFZpZXdNb2RlbEZhY3RvcnlcbiAgICAgICAgICAgID8gY29tcG9uZW50Vmlld01vZGVsRmFjdG9yeS5jYWxsKGNvbXBvbmVudERlZmluaXRpb24sIGNvbXBvbmVudFBhcmFtcywgeyAnZWxlbWVudCc6IGVsZW1lbnQsICd0ZW1wbGF0ZU5vZGVzJzogb3JpZ2luYWxDaGlsZE5vZGVzIH0pXG4gICAgICAgICAgICA6IGNvbXBvbmVudFBhcmFtczsgLy8gVGVtcGxhdGUtb25seSBjb21wb25lbnRcbiAgICB9XG5cbn0pKCk7XG52YXIgYXR0ckh0bWxUb0phdmFzY3JpcHRNYXAgPSB7ICdjbGFzcyc6ICdjbGFzc05hbWUnLCAnZm9yJzogJ2h0bWxGb3InIH07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2F0dHInXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpIHx8IHt9O1xuICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHZhbHVlLCBmdW5jdGlvbihhdHRyTmFtZSwgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGF0dHJWYWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIFRvIGNvdmVyIGNhc2VzIGxpa2UgXCJhdHRyOiB7IGNoZWNrZWQ6c29tZVByb3AgfVwiLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgYXR0cmlidXRlIGVudGlyZWx5XG4gICAgICAgICAgICAvLyB3aGVuIHNvbWVQcm9wIGlzIGEgXCJubyB2YWx1ZVwiLWxpa2UgdmFsdWUgKHN0cmljdGx5IG51bGwsIGZhbHNlLCBvciB1bmRlZmluZWQpXG4gICAgICAgICAgICAvLyAoYmVjYXVzZSB0aGUgYWJzZW5jZSBvZiB0aGUgXCJjaGVja2VkXCIgYXR0ciBpcyBob3cgdG8gbWFyayBhbiBlbGVtZW50IGFzIG5vdCBjaGVja2VkLCBldGMuKVxuICAgICAgICAgICAgdmFyIHRvUmVtb3ZlID0gKGF0dHJWYWx1ZSA9PT0gZmFsc2UpIHx8IChhdHRyVmFsdWUgPT09IG51bGwpIHx8IChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAodG9SZW1vdmUpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJbiBJRSA8PSA3IGFuZCBJRTggUXVpcmtzIE1vZGUsIHlvdSBoYXZlIHRvIHVzZSB0aGUgSmF2YXNjcmlwdCBwcm9wZXJ0eSBuYW1lIGluc3RlYWQgb2YgdGhlXG4gICAgICAgICAgICAvLyBIVE1MIGF0dHJpYnV0ZSBuYW1lIGZvciBjZXJ0YWluIGF0dHJpYnV0ZXMuIElFOCBTdGFuZGFyZHMgTW9kZSBzdXBwb3J0cyB0aGUgY29ycmVjdCBiZWhhdmlvcixcbiAgICAgICAgICAgIC8vIGJ1dCBpbnN0ZWFkIG9mIGZpZ3VyaW5nIG91dCB0aGUgbW9kZSwgd2UnbGwganVzdCBzZXQgdGhlIGF0dHJpYnV0ZSB0aHJvdWdoIHRoZSBKYXZhc2NyaXB0XG4gICAgICAgICAgICAvLyBwcm9wZXJ0eSBmb3IgSUUgPD0gOC5cbiAgICAgICAgICAgIGlmIChrby51dGlscy5pZVZlcnNpb24gPD0gOCAmJiBhdHRyTmFtZSBpbiBhdHRySHRtbFRvSmF2YXNjcmlwdE1hcCkge1xuICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ckh0bWxUb0phdmFzY3JpcHRNYXBbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0b1JlbW92ZSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFthdHRyTmFtZV0gPSBhdHRyVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0b1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyZWF0IFwibmFtZVwiIHNwZWNpYWxseSAtIGFsdGhvdWdoIHlvdSBjYW4gdGhpbmsgb2YgaXQgYXMgYW4gYXR0cmlidXRlLCBpdCBhbHNvIG5lZWRzXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9uIG9sZGVyIHZlcnNpb25zIG9mIElFIChodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zMzMpXG4gICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgYmVpbmcgY2FzZS1zZW5zaXRpdmUgaGVyZSBiZWNhdXNlIFhIVE1MIHdvdWxkIHJlZ2FyZCBcIk5hbWVcIiBhcyBhIGRpZmZlcmVudCB0aGluZ1xuICAgICAgICAgICAgLy8gZW50aXJlbHksIGFuZCB0aGVyZSdzIG5vIHN0cm9uZyByZWFzb24gdG8gYWxsb3cgZm9yIHN1Y2ggY2FzaW5nIGluIEhUTUwuXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0RWxlbWVudE5hbWUoZWxlbWVudCwgdG9SZW1vdmUgPyBcIlwiIDogYXR0clZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuKGZ1bmN0aW9uKCkge1xuXG5rby5iaW5kaW5nSGFuZGxlcnNbJ2NoZWNrZWQnXSA9IHtcbiAgICAnYWZ0ZXInOiBbJ3ZhbHVlJywgJ2F0dHInXSxcbiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykge1xuICAgICAgICB2YXIgY2hlY2tlZFZhbHVlID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVHJlYXQgXCJ2YWx1ZVwiIGxpa2UgXCJjaGVja2VkVmFsdWVcIiB3aGVuIGl0IGlzIGluY2x1ZGVkIHdpdGggXCJjaGVja2VkXCIgYmluZGluZ1xuICAgICAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydoYXMnXSgnY2hlY2tlZFZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhbGxCaW5kaW5ncy5nZXQoJ2NoZWNrZWRWYWx1ZScpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsQmluZGluZ3NbJ2hhcyddKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKCkge1xuICAgICAgICAgICAgLy8gVGhpcyB1cGRhdGVzIHRoZSBtb2RlbCB2YWx1ZSBmcm9tIHRoZSB2aWV3IHZhbHVlLlxuICAgICAgICAgICAgLy8gSXQgcnVucyBpbiByZXNwb25zZSB0byBET00gZXZlbnRzIChjbGljaykgYW5kIGNoYW5nZXMgaW4gY2hlY2tlZFZhbHVlLlxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGVsZW1lbnQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBlbGVtVmFsdWUgPSB1c2VDaGVja2VkVmFsdWUgPyBjaGVja2VkVmFsdWUoKSA6IGlzQ2hlY2tlZDtcblxuICAgICAgICAgICAgLy8gV2hlbiB3ZSdyZSBmaXJzdCBzZXR0aW5nIHVwIHRoaXMgY29tcHV0ZWQsIGRvbid0IGNoYW5nZSBhbnkgbW9kZWwgc3RhdGUuXG4gICAgICAgICAgICBpZiAoa28uY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXZSBjYW4gaWdub3JlIHVuY2hlY2tlZCByYWRpbyBidXR0b25zLCBiZWNhdXNlIHNvbWUgb3RoZXIgcmFkaW9cbiAgICAgICAgICAgIC8vIGJ1dHRvbiB3aWxsIGJlIGdldHRpbmcgY2hlY2tlZCwgYW5kIHRoYXQgb25lIGNhbiB0YWtlIGNhcmUgb2YgdXBkYXRpbmcgc3RhdGUuXG4gICAgICAgICAgICBpZiAoaXNSYWRpbyAmJiAhaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKHZhbHVlQWNjZXNzb3IpO1xuICAgICAgICAgICAgaWYgKHZhbHVlSXNBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciB3cml0YWJsZVZhbHVlID0gcmF3VmFsdWVJc05vbkFycmF5T2JzZXJ2YWJsZSA/IG1vZGVsVmFsdWUucGVlaygpIDogbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAob2xkRWxlbVZhbHVlICE9PSBlbGVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSdyZSByZXNwb25kaW5nIHRvIHRoZSBjaGVja2VkVmFsdWUgY2hhbmdpbmcsIGFuZCB0aGUgZWxlbWVudCBpc1xuICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgY2hlY2tlZCwgcmVwbGFjZSB0aGUgb2xkIGVsZW0gdmFsdWUgd2l0aCB0aGUgbmV3IGVsZW0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIG1vZGVsIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0od3JpdGFibGVWYWx1ZSwgZWxlbVZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFkZE9yUmVtb3ZlSXRlbSh3cml0YWJsZVZhbHVlLCBvbGRFbGVtVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9sZEVsZW1WYWx1ZSA9IGVsZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlJ3JlIHJlc3BvbmRpbmcgdG8gdGhlIHVzZXIgaGF2aW5nIGNoZWNrZWQvdW5jaGVja2VkIGEgY2hlY2tib3gsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZC9yZW1vdmUgdGhlIGVsZW1lbnQgdmFsdWUgdG8gdGhlIG1vZGVsIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0od3JpdGFibGVWYWx1ZSwgZWxlbVZhbHVlLCBpc0NoZWNrZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmF3VmFsdWVJc05vbkFycmF5T2JzZXJ2YWJsZSAmJiBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZSh3cml0YWJsZVZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3MsICdjaGVja2VkJywgZWxlbVZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCkge1xuICAgICAgICAgICAgLy8gVGhpcyB1cGRhdGVzIHRoZSB2aWV3IHZhbHVlIGZyb20gdGhlIG1vZGVsIHZhbHVlLlxuICAgICAgICAgICAgLy8gSXQgcnVucyBpbiByZXNwb25zZSB0byBjaGFuZ2VzIGluIHRoZSBib3VuZCAoY2hlY2tlZCkgdmFsdWUuXG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlSXNBcnJheSkge1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gYSBjaGVja2JveCBpcyBib3VuZCB0byBhbiBhcnJheSwgYmVpbmcgY2hlY2tlZCByZXByZXNlbnRzIGl0cyB2YWx1ZSBiZWluZyBwcmVzZW50IGluIHRoYXQgYXJyYXlcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBrby51dGlscy5hcnJheUluZGV4T2YobW9kZWxWYWx1ZSwgY2hlY2tlZFZhbHVlKCkpID49IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGEgY2hlY2tib3ggaXMgYm91bmQgdG8gYW55IG90aGVyIHZhbHVlIChub3QgYW4gYXJyYXkpLCBiZWluZyBjaGVja2VkIHJlcHJlc2VudHMgdGhlIHZhbHVlIGJlaW5nIHRydWVpc2hcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgcmFkaW8gYnV0dG9ucywgYmVpbmcgY2hlY2tlZCBtZWFucyB0aGF0IHRoZSByYWRpbyBidXR0b24ncyB2YWx1ZSBjb3JyZXNwb25kcyB0byB0aGUgbW9kZWwgdmFsdWVcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSAoY2hlY2tlZFZhbHVlKCkgPT09IG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBpc0NoZWNrYm94ID0gZWxlbWVudC50eXBlID09IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgIGlzUmFkaW8gPSBlbGVtZW50LnR5cGUgPT0gXCJyYWRpb1wiO1xuXG4gICAgICAgIC8vIE9ubHkgYmluZCB0byBjaGVjayBib3hlcyBhbmQgcmFkaW8gYnV0dG9uc1xuICAgICAgICBpZiAoIWlzQ2hlY2tib3ggJiYgIWlzUmFkaW8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYXdWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKSxcbiAgICAgICAgICAgIHZhbHVlSXNBcnJheSA9IGlzQ2hlY2tib3ggJiYgKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocmF3VmFsdWUpIGluc3RhbmNlb2YgQXJyYXkpLFxuICAgICAgICAgICAgcmF3VmFsdWVJc05vbkFycmF5T2JzZXJ2YWJsZSA9ICEodmFsdWVJc0FycmF5ICYmIHJhd1ZhbHVlLnB1c2ggJiYgcmF3VmFsdWUuc3BsaWNlKSxcbiAgICAgICAgICAgIG9sZEVsZW1WYWx1ZSA9IHZhbHVlSXNBcnJheSA/IGNoZWNrZWRWYWx1ZSgpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXNlQ2hlY2tlZFZhbHVlID0gaXNSYWRpbyB8fCB2YWx1ZUlzQXJyYXk7XG5cbiAgICAgICAgLy8gSUUgNiB3b24ndCBhbGxvdyByYWRpbyBidXR0b25zIHRvIGJlIHNlbGVjdGVkIHVubGVzcyB0aGV5IGhhdmUgYSBuYW1lXG4gICAgICAgIGlmIChpc1JhZGlvICYmICFlbGVtZW50Lm5hbWUpXG4gICAgICAgICAgICBrby5iaW5kaW5nSGFuZGxlcnNbJ3VuaXF1ZU5hbWUnXVsnaW5pdCddKGVsZW1lbnQsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZSB9KTtcblxuICAgICAgICAvLyBTZXQgdXAgdHdvIGNvbXB1dGVkcyB0byB1cGRhdGUgdGhlIGJpbmRpbmc6XG5cbiAgICAgICAgLy8gVGhlIGZpcnN0IHJlc3BvbmRzIHRvIGNoYW5nZXMgaW4gdGhlIGNoZWNrZWRWYWx1ZSB2YWx1ZSBhbmQgdG8gZWxlbWVudCBjbGlja3NcbiAgICAgICAga28uY29tcHV0ZWQodXBkYXRlTW9kZWwsIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pO1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImNsaWNrXCIsIHVwZGF0ZU1vZGVsKTtcblxuICAgICAgICAvLyBUaGUgc2Vjb25kIHJlc3BvbmRzIHRvIGNoYW5nZXMgaW4gdGhlIG1vZGVsIHZhbHVlICh0aGUgb25lIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2hlY2tlZCBiaW5kaW5nKVxuICAgICAgICBrby5jb21wdXRlZCh1cGRhdGVWaWV3LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcblxuICAgICAgICByYXdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snY2hlY2tlZCddID0gdHJ1ZTtcblxua28uYmluZGluZ0hhbmRsZXJzWydjaGVja2VkVmFsdWUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcbiAgICB9XG59O1xuXG59KSgpO3ZhciBjbGFzc2VzV3JpdHRlbkJ5QmluZGluZ0tleSA9ICdfX2tvX19jc3NWYWx1ZSc7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2NzcyddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24oY2xhc3NOYW1lLCBzaG91bGRIYXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRIYXZlQ2xhc3MgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHNob3VsZEhhdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAga28udXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBrby51dGlscy5zdHJpbmdUcmltKFN0cmluZyh2YWx1ZSB8fCAnJykpOyAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgdHJ5IHRvIHN0b3JlIG9yIHNldCBhIG5vbi1zdHJpbmcgdmFsdWVcbiAgICAgICAgICAgIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyhlbGVtZW50LCBlbGVtZW50W2NsYXNzZXNXcml0dGVuQnlCaW5kaW5nS2V5XSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxlbWVudFtjbGFzc2VzV3JpdHRlbkJ5QmluZGluZ0tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyhlbGVtZW50LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xua28uYmluZGluZ0hhbmRsZXJzWydlbmFibGUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICBpZiAodmFsdWUgJiYgZWxlbWVudC5kaXNhYmxlZClcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIGVsc2UgaWYgKCghdmFsdWUpICYmICghZWxlbWVudC5kaXNhYmxlZCkpXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59O1xuXG5rby5iaW5kaW5nSGFuZGxlcnNbJ2Rpc2FibGUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAga28uYmluZGluZ0hhbmRsZXJzWydlbmFibGUnXVsndXBkYXRlJ10oZWxlbWVudCwgZnVuY3Rpb24oKSB7IHJldHVybiAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpIH0pO1xuICAgIH1cbn07XG4vLyBGb3IgY2VydGFpbiBjb21tb24gZXZlbnRzIChjdXJyZW50bHkganVzdCAnY2xpY2snKSwgYWxsb3cgYSBzaW1wbGlmaWVkIGRhdGEtYmluZGluZyBzeW50YXhcbi8vIGUuZy4gY2xpY2s6aGFuZGxlciBpbnN0ZWFkIG9mIHRoZSB1c3VhbCBmdWxsLWxlbmd0aCBldmVudDp7Y2xpY2s6aGFuZGxlcn1cbmZ1bmN0aW9uIG1ha2VFdmVudEhhbmRsZXJTaG9ydGN1dChldmVudE5hbWUpIHtcbiAgICBrby5iaW5kaW5nSGFuZGxlcnNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlQWNjZXNzb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgIHJlc3VsdFtldmVudE5hbWVdID0gdmFsdWVBY2Nlc3NvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1snZXZlbnQnXVsnaW5pdCddLmNhbGwodGhpcywgZWxlbWVudCwgbmV3VmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5rby5iaW5kaW5nSGFuZGxlcnNbJ2V2ZW50J10gPSB7XG4gICAgJ2luaXQnIDogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHZhciBldmVudHNUb0hhbmRsZSA9IHZhbHVlQWNjZXNzb3IoKSB8fCB7fTtcbiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChldmVudHNUb0hhbmRsZSwgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgZXZlbnROYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJSZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJGdW5jdGlvbiA9IHZhbHVlQWNjZXNzb3IoKVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXJGdW5jdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGFrZSBhbGwgdGhlIGV2ZW50IGFyZ3MsIGFuZCBwcmVmaXggd2l0aCB0aGUgdmlld21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJnc0ZvckhhbmRsZXIgPSBrby51dGlscy5tYWtlQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbCA9IGJpbmRpbmdDb250ZXh0WyckZGF0YSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc0ZvckhhbmRsZXIudW5zaGlmdCh2aWV3TW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlclJldHVyblZhbHVlID0gaGFuZGxlckZ1bmN0aW9uLmFwcGx5KHZpZXdNb2RlbCwgYXJnc0ZvckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJSZXR1cm5WYWx1ZSAhPT0gdHJ1ZSkgeyAvLyBOb3JtYWxseSB3ZSB3YW50IHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uIERldmVsb3BlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZSBleHBsaWNpdGx5IHJldHVybmluZyB0cnVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgYnViYmxlID0gYWxsQmluZGluZ3MuZ2V0KGV2ZW50TmFtZSArICdCdWJibGUnKSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuLy8gXCJmb3JlYWNoOiBzb21lRXhwcmVzc2lvblwiIGlzIGVxdWl2YWxlbnQgdG8gXCJ0ZW1wbGF0ZTogeyBmb3JlYWNoOiBzb21lRXhwcmVzc2lvbiB9XCJcbi8vIFwiZm9yZWFjaDogeyBkYXRhOiBzb21lRXhwcmVzc2lvbiwgYWZ0ZXJBZGQ6IG15Zm4gfVwiIGlzIGVxdWl2YWxlbnQgdG8gXCJ0ZW1wbGF0ZTogeyBmb3JlYWNoOiBzb21lRXhwcmVzc2lvbiwgYWZ0ZXJBZGQ6IG15Zm4gfVwiXG5rby5iaW5kaW5nSGFuZGxlcnNbJ2ZvcmVhY2gnXSA9IHtcbiAgICBtYWtlVGVtcGxhdGVWYWx1ZUFjY2Vzc29yOiBmdW5jdGlvbih2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLFxuICAgICAgICAgICAgICAgIHVud3JhcHBlZFZhbHVlID0ga28udXRpbHMucGVla09ic2VydmFibGUobW9kZWxWYWx1ZSk7ICAgIC8vIFVud3JhcCB3aXRob3V0IHNldHRpbmcgYSBkZXBlbmRlbmN5IGhlcmVcblxuICAgICAgICAgICAgLy8gSWYgdW53cmFwcGVkVmFsdWUgaXMgdGhlIGFycmF5LCBwYXNzIGluIHRoZSB3cmFwcGVkIHZhbHVlIG9uIGl0cyBvd25cbiAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSB3aWxsIGJlIHVud3JhcHBlZCBhbmQgdHJhY2tlZCB3aXRoaW4gdGhlIHRlbXBsYXRlIGJpbmRpbmdcbiAgICAgICAgICAgIC8vIChTZWUgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy81MjMpXG4gICAgICAgICAgICBpZiAoKCF1bndyYXBwZWRWYWx1ZSkgfHwgdHlwZW9mIHVud3JhcHBlZFZhbHVlLmxlbmd0aCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIHJldHVybiB7ICdmb3JlYWNoJzogbW9kZWxWYWx1ZSwgJ3RlbXBsYXRlRW5naW5lJzoga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUuaW5zdGFuY2UgfTtcblxuICAgICAgICAgICAgLy8gSWYgdW53cmFwcGVkVmFsdWUuZGF0YSBpcyB0aGUgYXJyYXksIHByZXNlcnZlIGFsbCByZWxldmFudCBvcHRpb25zIGFuZCB1bndyYXAgYWdhaW4gdmFsdWUgc28gd2UgZ2V0IHVwZGF0ZXNcbiAgICAgICAgICAgIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdmb3JlYWNoJzogdW53cmFwcGVkVmFsdWVbJ2RhdGEnXSxcbiAgICAgICAgICAgICAgICAnYXMnOiB1bndyYXBwZWRWYWx1ZVsnYXMnXSxcbiAgICAgICAgICAgICAgICAnaW5jbHVkZURlc3Ryb3llZCc6IHVud3JhcHBlZFZhbHVlWydpbmNsdWRlRGVzdHJveWVkJ10sXG4gICAgICAgICAgICAgICAgJ2FmdGVyQWRkJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyQWRkJ10sXG4gICAgICAgICAgICAgICAgJ2JlZm9yZVJlbW92ZSc6IHVud3JhcHBlZFZhbHVlWydiZWZvcmVSZW1vdmUnXSxcbiAgICAgICAgICAgICAgICAnYWZ0ZXJSZW5kZXInOiB1bndyYXBwZWRWYWx1ZVsnYWZ0ZXJSZW5kZXInXSxcbiAgICAgICAgICAgICAgICAnYmVmb3JlTW92ZSc6IHVud3JhcHBlZFZhbHVlWydiZWZvcmVNb3ZlJ10sXG4gICAgICAgICAgICAgICAgJ2FmdGVyTW92ZSc6IHVud3JhcHBlZFZhbHVlWydhZnRlck1vdmUnXSxcbiAgICAgICAgICAgICAgICAndGVtcGxhdGVFbmdpbmUnOiBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXVsnaW5pdCddKGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVyc1snZm9yZWFjaCddLm1ha2VUZW1wbGF0ZVZhbHVlQWNjZXNzb3IodmFsdWVBY2Nlc3NvcikpO1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBrby5iaW5kaW5nSGFuZGxlcnNbJ3RlbXBsYXRlJ11bJ3VwZGF0ZSddKGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVyc1snZm9yZWFjaCddLm1ha2VUZW1wbGF0ZVZhbHVlQWNjZXNzb3IodmFsdWVBY2Nlc3NvciksIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KTtcbiAgICB9XG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNbJ2ZvcmVhY2gnXSA9IGZhbHNlOyAvLyBDYW4ndCByZXdyaXRlIGNvbnRyb2wgZmxvdyBiaW5kaW5nc1xua28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1snZm9yZWFjaCddID0gdHJ1ZTtcbnZhciBoYXNmb2N1c1VwZGF0aW5nUHJvcGVydHkgPSAnX19rb19oYXNmb2N1c1VwZGF0aW5nJztcbnZhciBoYXNmb2N1c0xhc3RWYWx1ZSA9ICdfX2tvX2hhc2ZvY3VzTGFzdFZhbHVlJztcbmtvLmJpbmRpbmdIYW5kbGVyc1snaGFzZm9jdXMnXSA9IHtcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7XG4gICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNDaGFuZ2UgPSBmdW5jdGlvbihpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIC8vIFdoZXJlIHBvc3NpYmxlLCBpZ25vcmUgd2hpY2ggZXZlbnQgd2FzIHJhaXNlZCBhbmQgZGV0ZXJtaW5lIGZvY3VzIHN0YXRlIHVzaW5nIGFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAvLyBhcyB0aGlzIGF2b2lkcyBwaGFudG9tIGZvY3VzL2JsdXIgZXZlbnRzIHJhaXNlZCB3aGVuIGNoYW5naW5nIHRhYnMgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgbm90IGFsbCBLTy10YXJnZXRlZCBicm93c2VycyAoRmlyZWZveCAyKSBzdXBwb3J0IGFjdGl2ZUVsZW1lbnQuIEZvciB0aG9zZSBicm93c2VycyxcbiAgICAgICAgICAgIC8vIHByZXZlbnQgYSBsb3NzIG9mIGZvY3VzIHdoZW4gY2hhbmdpbmcgdGFicy93aW5kb3dzIGJ5IHNldHRpbmcgYSBmbGFnIHRoYXQgcHJldmVudHMgaGFzZm9jdXNcbiAgICAgICAgICAgIC8vIGZyb20gY2FsbGluZyAnYmx1cigpJyBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGxvc2VzIGZvY3VzLlxuICAgICAgICAgICAgLy8gRGlzY3Vzc2lvbiBhdCBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zNTJcbiAgICAgICAgICAgIGVsZW1lbnRbaGFzZm9jdXNVcGRhdGluZ1Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb3duZXJEb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoXCJhY3RpdmVFbGVtZW50XCIgaW4gb3duZXJEb2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IG93bmVyRG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElFOSB0aHJvd3MgaWYgeW91IGFjY2VzcyBhY3RpdmVFbGVtZW50IGR1cmluZyBwYWdlIGxvYWQgKHNlZSBpc3N1ZSAjNzAzKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBvd25lckRvYy5ib2R5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0ZvY3VzZWQgPSAoYWN0aXZlID09PSBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmFsdWVBY2Nlc3NvcigpO1xuICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eShtb2RlbFZhbHVlLCBhbGxCaW5kaW5ncywgJ2hhc2ZvY3VzJywgaXNGb2N1c2VkLCB0cnVlKTtcblxuICAgICAgICAgICAgLy9jYWNoZSB0aGUgbGF0ZXN0IHZhbHVlLCBzbyB3ZSBjYW4gYXZvaWQgdW5uZWNlc3NhcmlseSBjYWxsaW5nIGZvY3VzL2JsdXIgaW4gdGhlIHVwZGF0ZSBmdW5jdGlvblxuICAgICAgICAgICAgZWxlbWVudFtoYXNmb2N1c0xhc3RWYWx1ZV0gPSBpc0ZvY3VzZWQ7XG4gICAgICAgICAgICBlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbmRsZUVsZW1lbnRGb2N1c0luID0gaGFuZGxlRWxlbWVudEZvY3VzQ2hhbmdlLmJpbmQobnVsbCwgdHJ1ZSk7XG4gICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNPdXQgPSBoYW5kbGVFbGVtZW50Rm9jdXNDaGFuZ2UuYmluZChudWxsLCBmYWxzZSk7XG5cbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJmb2N1c1wiLCBoYW5kbGVFbGVtZW50Rm9jdXNJbik7XG4gICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiZm9jdXNpblwiLCBoYW5kbGVFbGVtZW50Rm9jdXNJbik7IC8vIEZvciBJRVxuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImJsdXJcIiwgIGhhbmRsZUVsZW1lbnRGb2N1c091dCk7XG4gICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiZm9jdXNvdXRcIiwgIGhhbmRsZUVsZW1lbnRGb2N1c091dCk7IC8vIEZvciBJRVxuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gISFrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gJiYgZWxlbWVudFtoYXNmb2N1c0xhc3RWYWx1ZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA/IGVsZW1lbnQuZm9jdXMoKSA6IGVsZW1lbnQuYmx1cigpO1xuXG4gICAgICAgICAgICAvLyBJbiBJRSwgdGhlIGJsdXIgbWV0aG9kIGRvZXNuJ3QgYWx3YXlzIGNhdXNlIHRoZSBlbGVtZW50IHRvIGxvc2UgZm9jdXMgKGZvciBleGFtcGxlLCBpZiB0aGUgd2luZG93IGlzIG5vdCBpbiBmb2N1cykuXG4gICAgICAgICAgICAvLyBTZXR0aW5nIGZvY3VzIHRvIHRoZSBib2R5IGVsZW1lbnQgZG9lcyBzZWVtIHRvIGJlIHJlbGlhYmxlIGluIElFLCBidXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBpZiB3ZSBrbm93IHRoYXQgdGhlIGN1cnJlbnRcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgd2FzIGZvY3VzZWQgYWxyZWFkeS5cbiAgICAgICAgICAgIGlmICghdmFsdWUgJiYgZWxlbWVudFtoYXNmb2N1c0xhc3RWYWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGb3IgSUUsIHdoaWNoIGRvZXNuJ3QgcmVsaWFibHkgZmlyZSBcImZvY3VzXCIgb3IgXCJibHVyXCIgZXZlbnRzIHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGtvLnV0aWxzLnRyaWdnZXJFdmVudCwgbnVsbCwgW2VsZW1lbnQsIHZhbHVlID8gXCJmb2N1c2luXCIgOiBcImZvY3Vzb3V0XCJdKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5leHByZXNzaW9uUmV3cml0aW5nLnR3b1dheUJpbmRpbmdzWydoYXNmb2N1cyddID0gdHJ1ZTtcblxua28uYmluZGluZ0hhbmRsZXJzWydoYXNGb2N1cyddID0ga28uYmluZGluZ0hhbmRsZXJzWydoYXNmb2N1cyddOyAvLyBNYWtlIFwiaGFzRm9jdXNcIiBhbiBhbGlhc1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snaGFzRm9jdXMnXSA9IHRydWU7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2h0bWwnXSA9IHtcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBQcmV2ZW50IGJpbmRpbmcgb24gdGhlIGR5bmFtaWNhbGx5LWluamVjdGVkIEhUTUwgKGFzIGRldmVsb3BlcnMgYXJlIHVubGlrZWx5IHRvIGV4cGVjdCB0aGF0LCBhbmQgaXQgaGFzIHNlY3VyaXR5IGltcGxpY2F0aW9ucylcbiAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIC8vIHNldEh0bWwgd2lsbCB1bndyYXAgdGhlIHZhbHVlIGlmIG5lZWRlZFxuICAgICAgICBrby51dGlscy5zZXRIdG1sKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgfVxufTtcbi8vIE1ha2VzIGEgYmluZGluZyBsaWtlIHdpdGggb3IgaWZcbmZ1bmN0aW9uIG1ha2VXaXRoSWZCaW5kaW5nKGJpbmRpbmdLZXksIGlzV2l0aCwgaXNOb3QsIG1ha2VDb250ZXh0Q2FsbGJhY2spIHtcbiAgICBrby5iaW5kaW5nSGFuZGxlcnNbYmluZGluZ0tleV0gPSB7XG4gICAgICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBkaWREaXNwbGF5T25MYXN0VXBkYXRlLFxuICAgICAgICAgICAgICAgIHNhdmVkTm9kZXM7XG4gICAgICAgICAgICBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmF3VmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocmF3VmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gIWlzTm90ICE9PSAhZGF0YVZhbHVlLCAvLyBlcXVpdmFsZW50IHRvIGlzTm90ID8gIWRhdGFWYWx1ZSA6ICEhZGF0YVZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RSZW5kZXIgPSAhc2F2ZWROb2RlcyxcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNSZWZyZXNoID0gaXNGaXJzdFJlbmRlciB8fCBpc1dpdGggfHwgKHNob3VsZERpc3BsYXkgIT09IGRpZERpc3BsYXlPbkxhc3RVcGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgY29weSBvZiB0aGUgaW5uZXIgbm9kZXMgb24gdGhlIGluaXRpYWwgdXBkYXRlLCBidXQgb25seSBpZiB3ZSBoYXZlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIgJiYga28uY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc0NvdW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkTm9kZXMgPSBrby51dGlscy5jbG9uZU5vZGVzKGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKGVsZW1lbnQpLCB0cnVlIC8qIHNob3VsZENsZWFuTm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZERpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4oZWxlbWVudCwga28udXRpbHMuY2xvbmVOb2RlcyhzYXZlZE5vZGVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50cyhtYWtlQ29udGV4dENhbGxiYWNrID8gbWFrZUNvbnRleHRDYWxsYmFjayhiaW5kaW5nQ29udGV4dCwgcmF3VmFsdWUpIDogYmluZGluZ0NvbnRleHQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRpZERpc3BsYXlPbkxhc3RVcGRhdGUgPSBzaG91bGREaXNwbGF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1tiaW5kaW5nS2V5XSA9IGZhbHNlOyAvLyBDYW4ndCByZXdyaXRlIGNvbnRyb2wgZmxvdyBiaW5kaW5nc1xuICAgIGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbYmluZGluZ0tleV0gPSB0cnVlO1xufVxuXG4vLyBDb25zdHJ1Y3QgdGhlIGFjdHVhbCBiaW5kaW5nIGhhbmRsZXJzXG5tYWtlV2l0aElmQmluZGluZygnaWYnKTtcbm1ha2VXaXRoSWZCaW5kaW5nKCdpZm5vdCcsIGZhbHNlIC8qIGlzV2l0aCAqLywgdHJ1ZSAvKiBpc05vdCAqLyk7XG5tYWtlV2l0aElmQmluZGluZygnd2l0aCcsIHRydWUgLyogaXNXaXRoICovLCBmYWxzZSAvKiBpc05vdCAqLyxcbiAgICBmdW5jdGlvbihiaW5kaW5nQ29udGV4dCwgZGF0YVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBiaW5kaW5nQ29udGV4dC5jcmVhdGVTdGF0aWNDaGlsZENvbnRleHQoZGF0YVZhbHVlKTtcbiAgICB9XG4pO1xudmFyIGNhcHRpb25QbGFjZWhvbGRlciA9IHt9O1xua28uYmluZGluZ0hhbmRsZXJzWydvcHRpb25zJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgIT09IFwic2VsZWN0XCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTtcblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIDxvcHRpb24+cy5cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGJpbmRpbmcgcHJvY2Vzc29yIGRvZXNuJ3QgdHJ5IHRvIGJpbmQgdGhlIG9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykge1xuICAgICAgICBmdW5jdGlvbiBzZWxlY3RlZE9wdGlvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuYXJyYXlGaWx0ZXIoZWxlbWVudC5vcHRpb25zLCBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5zZWxlY3RlZDsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0V2FzUHJldmlvdXNseUVtcHR5ID0gZWxlbWVudC5sZW5ndGggPT0gMCxcbiAgICAgICAgICAgIG11bHRpcGxlID0gZWxlbWVudC5tdWx0aXBsZSxcbiAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsVG9wID0gKCFzZWxlY3RXYXNQcmV2aW91c2x5RW1wdHkgJiYgbXVsdGlwbGUpID8gZWxlbWVudC5zY3JvbGxUb3AgOiBudWxsLFxuICAgICAgICAgICAgdW53cmFwcGVkQXJyYXkgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSksXG4gICAgICAgICAgICB2YWx1ZUFsbG93VW5zZXQgPSBhbGxCaW5kaW5ncy5nZXQoJ3ZhbHVlQWxsb3dVbnNldCcpICYmIGFsbEJpbmRpbmdzWydoYXMnXSgndmFsdWUnKSxcbiAgICAgICAgICAgIGluY2x1ZGVEZXN0cm95ZWQgPSBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNJbmNsdWRlRGVzdHJveWVkJyksXG4gICAgICAgICAgICBhcnJheVRvRG9tTm9kZUNoaWxkcmVuT3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgY2FwdGlvblZhbHVlLFxuICAgICAgICAgICAgZmlsdGVyZWRBcnJheSxcbiAgICAgICAgICAgIHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXZhbHVlQWxsb3dVbnNldCkge1xuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTZWxlY3RlZFZhbHVlcyA9IGtvLnV0aWxzLmFycmF5TWFwKHNlbGVjdGVkT3B0aW9ucygpLCBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTZWxlY3RlZFZhbHVlcy5wdXNoKGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodW53cmFwcGVkQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW53cmFwcGVkQXJyYXkubGVuZ3RoID09IFwidW5kZWZpbmVkXCIpIC8vIENvZXJjZSBzaW5nbGUgdmFsdWUgaW50byBhcnJheVxuICAgICAgICAgICAgICAgIHVud3JhcHBlZEFycmF5ID0gW3Vud3JhcHBlZEFycmF5XTtcblxuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBhbnkgZW50cmllcyBtYXJrZWQgYXMgZGVzdHJveWVkXG4gICAgICAgICAgICBmaWx0ZXJlZEFycmF5ID0ga28udXRpbHMuYXJyYXlGaWx0ZXIodW53cmFwcGVkQXJyYXksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jbHVkZURlc3Ryb3llZCB8fCBpdGVtID09PSB1bmRlZmluZWQgfHwgaXRlbSA9PT0gbnVsbCB8fCAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShpdGVtWydfZGVzdHJveSddKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJZiBjYXB0aW9uIGlzIGluY2x1ZGVkLCBhZGQgaXQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBpZiAoYWxsQmluZGluZ3NbJ2hhcyddKCdvcHRpb25zQ2FwdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgY2FwdGlvblZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNDYXB0aW9uJykpO1xuICAgICAgICAgICAgICAgIC8vIElmIGNhcHRpb24gdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQsIGRvbid0IHNob3cgYSBjYXB0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGNhcHRpb25WYWx1ZSAhPT0gbnVsbCAmJiBjYXB0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEFycmF5LnVuc2hpZnQoY2FwdGlvblBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGZhbHN5IHZhbHVlIGlzIHByb3ZpZGVkIChlLmcuIG51bGwpLCB3ZSdsbCBzaW1wbHkgZW1wdHkgdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhcHBseVRvT2JqZWN0KG9iamVjdCwgcHJlZGljYXRlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVkaWNhdGVUeXBlID0gdHlwZW9mIHByZWRpY2F0ZTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGVUeXBlID09IFwiZnVuY3Rpb25cIikgICAgLy8gR2l2ZW4gYSBmdW5jdGlvbjsgcnVuIGl0IGFnYWluc3QgdGhlIGRhdGEgdmFsdWVcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKG9iamVjdCk7XG4gICAgICAgICAgICBlbHNlIGlmIChwcmVkaWNhdGVUeXBlID09IFwic3RyaW5nXCIpIC8vIEdpdmVuIGEgc3RyaW5nOyB0cmVhdCBpdCBhcyBhIHByb3BlcnR5IG5hbWUgb24gdGhlIGRhdGEgdmFsdWVcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0W3ByZWRpY2F0ZV07XG4gICAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHaXZlbiBubyBvcHRpb25zVGV4dCBhcmc7IHVzZSB0aGUgZGF0YSB2YWx1ZSBpdHNlbGZcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgY2FuIHJ1biBhdCB0d28gZGlmZmVyZW50IHRpbWVzOlxuICAgICAgICAvLyBUaGUgZmlyc3QgaXMgd2hlbiB0aGUgd2hvbGUgYXJyYXkgaXMgYmVpbmcgdXBkYXRlZCBkaXJlY3RseSBmcm9tIHRoaXMgYmluZGluZyBoYW5kbGVyLlxuICAgICAgICAvLyBUaGUgc2Vjb25kIGlzIHdoZW4gYW4gb2JzZXJ2YWJsZSB2YWx1ZSBmb3IgYSBzcGVjaWZpYyBhcnJheSBlbnRyeSBpcyB1cGRhdGVkLlxuICAgICAgICAvLyBvbGRPcHRpb25zIHdpbGwgYmUgZW1wdHkgaW4gdGhlIGZpcnN0IGNhc2UsIGJ1dCB3aWxsIGJlIGZpbGxlZCB3aXRoIHRoZSBwcmV2aW91c2x5IGdlbmVyYXRlZCBvcHRpb24gaW4gdGhlIHNlY29uZC5cbiAgICAgICAgdmFyIGl0ZW1VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gb3B0aW9uRm9yQXJyYXlJdGVtKGFycmF5RW50cnksIGluZGV4LCBvbGRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob2xkT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gIXZhbHVlQWxsb3dVbnNldCAmJiBvbGRPcHRpb25zWzBdLnNlbGVjdGVkID8gWyBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShvbGRPcHRpb25zWzBdKSBdIDogW107XG4gICAgICAgICAgICAgICAgaXRlbVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoYXJyYXlFbnRyeSA9PT0gY2FwdGlvblBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0VGV4dENvbnRlbnQob3B0aW9uLCBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNDYXB0aW9uJykpO1xuICAgICAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShvcHRpb24sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGEgdmFsdWUgdG8gdGhlIG9wdGlvbiBlbGVtZW50XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gYXBwbHlUb09iamVjdChhcnJheUVudHJ5LCBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNWYWx1ZScpLCBhcnJheUVudHJ5KTtcbiAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUob3B0aW9uLCBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9wdGlvblZhbHVlKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBzb21lIHRleHQgdG8gdGhlIG9wdGlvbiBlbGVtZW50XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblRleHQgPSBhcHBseVRvT2JqZWN0KGFycmF5RW50cnksIGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc1RleHQnKSwgb3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRleHRDb250ZW50KG9wdGlvbiwgb3B0aW9uVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW29wdGlvbl07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCeSB1c2luZyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaywgd2UgZGVsYXkgdGhlIHJlbW92YWwgdW50aWwgYWZ0ZXIgbmV3IGl0ZW1zIGFyZSBhZGRlZC4gVGhpcyBmaXhlcyBhIHNlbGVjdGlvblxuICAgICAgICAvLyBwcm9ibGVtIGluIElFPD04IGFuZCBGaXJlZm94LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2tub2Nrb3V0L2tub2Nrb3V0L2lzc3Vlcy8xMjA4XG4gICAgICAgIGFycmF5VG9Eb21Ob2RlQ2hpbGRyZW5PcHRpb25zWydiZWZvcmVSZW1vdmUnXSA9XG4gICAgICAgICAgICBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBzZXRTZWxlY3Rpb25DYWxsYmFjayhhcnJheUVudHJ5LCBuZXdPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVVwZGF0ZSAmJiB2YWx1ZUFsbG93VW5zZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgbW9kZWwgdmFsdWUgaXMgYXV0aG9yaXRhdGl2ZSwgc28gbWFrZSBzdXJlIGl0cyB2YWx1ZSBpcyB0aGUgb25lIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUgc2luY2Ugc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZyBkb2VzIHNvIGFscmVhZHkuXG4gICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKGVsZW1lbnQsIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZScpKSwgdHJ1ZSAvKiBhbGxvd1Vuc2V0ICovKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNTZWxlY3RlZFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJRTYgZG9lc24ndCBsaWtlIHVzIHRvIGFzc2lnbiBzZWxlY3Rpb24gdG8gT1BUSU9OIG5vZGVzIGJlZm9yZSB0aGV5J3JlIGFkZGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgICAgICAgICAgICAvLyBUaGF0J3Mgd2h5IHdlIGZpcnN0IGFkZGVkIHRoZW0gd2l0aG91dCBzZWxlY3Rpb24uIE5vdyBpdCdzIHRpbWUgdG8gc2V0IHRoZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBrby51dGlscy5hcnJheUluZGV4T2YocHJldmlvdXNTZWxlY3RlZFZhbHVlcywga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobmV3T3B0aW9uc1swXSkpID49IDA7XG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0T3B0aW9uTm9kZVNlbGVjdGlvblN0YXRlKG5ld09wdGlvbnNbMF0sIGlzU2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBvcHRpb24gd2FzIGNoYW5nZWQgZnJvbSBiZWluZyBzZWxlY3RlZCBkdXJpbmcgYSBzaW5nbGUtaXRlbSB1cGRhdGUsIG5vdGlmeSB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1VcGRhdGUgJiYgIWlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoa28udXRpbHMudHJpZ2dlckV2ZW50LCBudWxsLCBbZWxlbWVudCwgXCJjaGFuZ2VcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHNldFNlbGVjdGlvbkNhbGxiYWNrO1xuICAgICAgICBpZiAoYWxsQmluZGluZ3NbJ2hhcyddKCdvcHRpb25zQWZ0ZXJSZW5kZXInKSAmJiB0eXBlb2YgYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zQWZ0ZXJSZW5kZXInKSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24oYXJyYXlFbnRyeSwgbmV3T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGlvbkNhbGxiYWNrKGFycmF5RW50cnksIG5ld09wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc0FmdGVyUmVuZGVyJyksIG51bGwsIFtuZXdPcHRpb25zWzBdLCBhcnJheUVudHJ5ICE9PSBjYXB0aW9uUGxhY2Vob2xkZXIgPyBhcnJheUVudHJ5IDogdW5kZWZpbmVkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nKGVsZW1lbnQsIGZpbHRlcmVkQXJyYXksIG9wdGlvbkZvckFycmF5SXRlbSwgYXJyYXlUb0RvbU5vZGVDaGlsZHJlbk9wdGlvbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVBbGxvd1Vuc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vZGVsIHZhbHVlIGlzIGF1dGhvcml0YXRpdmUsIHNvIG1ha2Ugc3VyZSBpdHMgdmFsdWUgaXMgdGhlIG9uZSBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShlbGVtZW50LCBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFsbEJpbmRpbmdzLmdldCgndmFsdWUnKSksIHRydWUgLyogYWxsb3dVbnNldCAqLyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIGFzIGEgcmVzdWx0IG9mIHVwZGF0aW5nIHRoZSBvcHRpb25zIGxpc3RcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uQ2hhbmdlZDtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgbXVsdGlwbGUtc2VsZWN0IGJveCwgY29tcGFyZSB0aGUgbmV3IHNlbGVjdGlvbiBjb3VudCB0byB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBub3RoaW5nIHdhcyBzZWxlY3RlZCBiZWZvcmUsIHRoZSBzZWxlY3Rpb24gY2FuJ3QgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aCAmJiBzZWxlY3RlZE9wdGlvbnMoKS5sZW5ndGggPCBwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBzaW5nbGUtc2VsZWN0IGJveCwgY29tcGFyZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIG5vdGhpbmcgd2FzIHNlbGVjdGVkIGJlZm9yZSBvciBub3RoaW5nIGlzIHNlbGVjdGVkIG5vdywganVzdCBsb29rIGZvciBhIGNoYW5nZSBpbiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IChwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aCAmJiBlbGVtZW50LnNlbGVjdGVkSW5kZXggPj0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdKSAhPT0gcHJldmlvdXNTZWxlY3RlZFZhbHVlc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMubGVuZ3RoIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA+PSAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29uc2lzdGVuY3kgYmV0d2VlbiBtb2RlbCB2YWx1ZSBhbmQgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkcm9wZG93biB3YXMgY2hhbmdlZCBzbyB0aGF0IHNlbGVjdGlvbiBpcyBubyBsb25nZXIgdGhlIHNhbWUsXG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5IHRoZSB2YWx1ZSBvciBzZWxlY3RlZE9wdGlvbnMgYmluZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBrby51dGlscy50cmlnZ2VyRXZlbnQoZWxlbWVudCwgXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBJRSBidWdcbiAgICAgICAga28udXRpbHMuZW5zdXJlU2VsZWN0RWxlbWVudElzUmVuZGVyZWRDb3JyZWN0bHkoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU2Nyb2xsVG9wICYmIE1hdGguYWJzKHByZXZpb3VzU2Nyb2xsVG9wIC0gZWxlbWVudC5zY3JvbGxUb3ApID4gMjApXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHByZXZpb3VzU2Nyb2xsVG9wO1xuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ29wdGlvbnMnXS5vcHRpb25WYWx1ZURvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snc2VsZWN0ZWRPcHRpb25zJ10gPSB7XG4gICAgJ2FmdGVyJzogWydvcHRpb25zJywgJ2ZvcmVhY2gnXSxcbiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykge1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCksIHZhbHVlVG9Xcml0ZSA9IFtdO1xuICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb1dyaXRlLnB1c2goa28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KHZhbHVlLCBhbGxCaW5kaW5ncywgJ3NlbGVjdGVkT3B0aW9ucycsIHZhbHVlVG9Xcml0ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIGlmIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgIT0gXCJzZWxlY3RcIilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbHVlcyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIik7XG5cbiAgICAgICAgdmFyIG5ld1ZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpLFxuICAgICAgICAgICAgcHJldmlvdXNTY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcblxuICAgICAgICBpZiAobmV3VmFsdWUgJiYgdHlwZW9mIG5ld1ZhbHVlLmxlbmd0aCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0ga28udXRpbHMuYXJyYXlJbmRleE9mKG5ld1ZhbHVlLCBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShub2RlKSkgPj0gMDtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCAhPSBpc1NlbGVjdGVkKSB7ICAgICAgLy8gVGhpcyBjaGVjayBwcmV2ZW50cyBmbGFzaGluZyBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgaW4gSUVcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuc2V0T3B0aW9uTm9kZVNlbGVjdGlvblN0YXRlKG5vZGUsIGlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBwcmV2aW91c1Njcm9sbFRvcDtcbiAgICB9XG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snc2VsZWN0ZWRPcHRpb25zJ10gPSB0cnVlO1xua28uYmluZGluZ0hhbmRsZXJzWydzdHlsZSddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSB8fCB7fSk7XG4gICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2godmFsdWUsIGZ1bmN0aW9uKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoc3R5bGVWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZVZhbHVlID09PSBudWxsIHx8IHN0eWxlVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzdHlsZVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIEVtcHR5IHN0cmluZyByZW1vdmVzIHRoZSB2YWx1ZSwgd2hlcmVhcyBudWxsL3VuZGVmaW5lZCBoYXZlIG5vIGVmZmVjdFxuICAgICAgICAgICAgICAgIHN0eWxlVmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xua28uYmluZGluZ0hhbmRsZXJzWydzdWJtaXQnXSA9IHtcbiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlQWNjZXNzb3IoKSAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCk7XG4gICAgICAgICAgICB0cnkgeyBoYW5kbGVyUmV0dXJuVmFsdWUgPSB2YWx1ZS5jYWxsKGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBlbGVtZW50KTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJSZXR1cm5WYWx1ZSAhPT0gdHJ1ZSkgeyAvLyBOb3JtYWxseSB3ZSB3YW50IHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uIERldmVsb3BlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZSBleHBsaWNpdGx5IHJldHVybmluZyB0cnVlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1sndGV4dCddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFByZXZlbnQgYmluZGluZyBvbiB0aGUgZHluYW1pY2FsbHktaW5qZWN0ZWQgdGV4dCBub2RlIChhcyBkZXZlbG9wZXJzIGFyZSB1bmxpa2VseSB0byBleHBlY3QgdGhhdCwgYW5kIGl0IGhhcyBzZWN1cml0eSBpbXBsaWNhdGlvbnMpLlxuICAgICAgICAvLyBJdCBzaG91bGQgYWxzbyBtYWtlIHRoaW5ncyBmYXN0ZXIsIGFzIHdlIG5vIGxvbmdlciBoYXZlIHRvIGNvbnNpZGVyIHdoZXRoZXIgdGhlIHRleHQgbm9kZSBtaWdodCBiZSBiaW5kYWJsZS5cbiAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIGtvLnV0aWxzLnNldFRleHRDb250ZW50KGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgfVxufTtcbmtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ3RleHQnXSA9IHRydWU7XG4oZnVuY3Rpb24gKCkge1xuXG5pZiAod2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICB2YXIgcGFyc2VWZXJzaW9uID0gZnVuY3Rpb24gKG1hdGNoZXMpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoZXNbMV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIERldGVjdCB2YXJpb3VzIGJyb3dzZXIgdmVyc2lvbnMgYmVjYXVzZSBzb21lIG9sZCB2ZXJzaW9ucyBkb24ndCBmdWxseSBzdXBwb3J0IHRoZSAnaW5wdXQnIGV2ZW50XG4gICAgdmFyIG9wZXJhVmVyc2lvbiA9IHdpbmRvdy5vcGVyYSAmJiB3aW5kb3cub3BlcmEudmVyc2lvbiAmJiBwYXJzZUludCh3aW5kb3cub3BlcmEudmVyc2lvbigpKSxcbiAgICAgICAgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIHNhZmFyaVZlcnNpb24gPSBwYXJzZVZlcnNpb24odXNlckFnZW50Lm1hdGNoKC9eKD86KD8hY2hyb21lKS4pKnZlcnNpb25cXC8oW14gXSopIHNhZmFyaS9pKSksXG4gICAgICAgIGZpcmVmb3hWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveFxcLyhbXiBdKikvKSk7XG59XG5cbi8vIElFIDggYW5kIDkgaGF2ZSBidWdzIHRoYXQgcHJldmVudCB0aGUgbm9ybWFsIGV2ZW50cyBmcm9tIGZpcmluZyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuLy8gQnV0IGl0IGRvZXMgZmlyZSB0aGUgJ3NlbGVjdGlvbmNoYW5nZScgZXZlbnQgb24gbWFueSBvZiB0aG9zZSwgcHJlc3VtYWJseSBiZWNhdXNlIHRoZVxuLy8gY3Vyc29yIGlzIG1vdmluZyBhbmQgdGhhdCBjb3VudHMgYXMgdGhlIHNlbGVjdGlvbiBjaGFuZ2luZy4gVGhlICdzZWxlY3Rpb25jaGFuZ2UnIGV2ZW50IGlzXG4vLyBmaXJlZCBhdCB0aGUgZG9jdW1lbnQgbGV2ZWwgb25seSBhbmQgZG9lc24ndCBkaXJlY3RseSBpbmRpY2F0ZSB3aGljaCBlbGVtZW50IGNoYW5nZWQuIFdlXG4vLyBzZXQgdXAganVzdCBvbmUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGRvY3VtZW50IGFuZCB1c2UgJ2FjdGl2ZUVsZW1lbnQnIHRvIGRldGVybWluZSB3aGljaFxuLy8gZWxlbWVudCB3YXMgY2hhbmdlZC5cbmlmIChrby51dGlscy5pZVZlcnNpb24gPCAxMCkge1xuICAgIHZhciBzZWxlY3Rpb25DaGFuZ2VSZWdpc3RlcmVkTmFtZSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpLFxuICAgICAgICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyTmFtZSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpO1xuICAgIHZhciBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGhhbmRsZXIgPSB0YXJnZXQgJiYga28udXRpbHMuZG9tRGF0YS5nZXQodGFyZ2V0LCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyTmFtZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlZ2lzdGVyRm9yU2VsZWN0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaGFuZGxlcikge1xuICAgICAgICB2YXIgb3duZXJEb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIGlmICgha28udXRpbHMuZG9tRGF0YS5nZXQob3duZXJEb2MsIHNlbGVjdGlvbkNoYW5nZVJlZ2lzdGVyZWROYW1lKSkge1xuICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQob3duZXJEb2MsIHNlbGVjdGlvbkNoYW5nZVJlZ2lzdGVyZWROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKG93bmVyRG9jLCAnc2VsZWN0aW9uY2hhbmdlJywgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQoZWxlbWVudCwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlck5hbWUsIGhhbmRsZXIpO1xuICAgIH07XG59XG5cbmtvLmJpbmRpbmdIYW5kbGVyc1sndGV4dElucHV0J10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcblxuICAgICAgICB2YXIgcHJldmlvdXNFbGVtZW50VmFsdWUgPSBlbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgdGltZW91dEhhbmRsZSxcbiAgICAgICAgICAgIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50O1xuXG4gICAgICAgIHZhciB1cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSB0aW1lb3V0SGFuZGxlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c0VsZW1lbnRWYWx1ZSAhPT0gZWxlbWVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJvdmlkZSBhIHdheSBmb3IgdGVzdHMgdG8ga25vdyBleGFjdGx5IHdoaWNoIGV2ZW50IHdhcyBwcm9jZXNzZWRcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcgJiYgZXZlbnQpIGVsZW1lbnRbJ19rb190ZXh0SW5wdXRQcm9jZXNzZWRFdmVudCddID0gZXZlbnQudHlwZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRWYWx1ZSA9IGVsZW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KHZhbHVlQWNjZXNzb3IoKSwgYWxsQmluZGluZ3MsICd0ZXh0SW5wdXQnLCBlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBkZWZlclVwZGF0ZU1vZGVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRpbWVvdXRIYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgdmFyaWFibGUgaXMgc2V0ICpvbmx5KiBkdXJpbmcgdGhlIGJyaWVmIGdhcCBiZXR3ZWVuIGFuXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQgZmlyaW5nIGFuZCB0aGUgdXBkYXRlTW9kZWwgZnVuY3Rpb24gcnVubmluZy4gVGhpcyBhbGxvd3MgdXMgdG8gaWdub3JlIG1vZGVsXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlcyB0aGF0IGFyZSBmcm9tIHRoZSBwcmV2aW91cyBzdGF0ZSBvZiB0aGUgZWxlbWVudCwgdXN1YWxseSBkdWUgdG8gdGVjaG5pcXVlc1xuICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgcmF0ZUxpbWl0LiBTdWNoIHVwZGF0ZXMsIGlmIG5vdCBpZ25vcmVkLCBjYW4gY2F1c2Uga2V5c3Ryb2tlcyB0byBiZSBsb3N0LlxuICAgICAgICAgICAgICAgIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IERFQlVHID8gdXBkYXRlTW9kZWwuYmluZChlbGVtZW50LCB7dHlwZTogZXZlbnQudHlwZX0pIDogdXBkYXRlTW9kZWw7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZSA9IGtvLnV0aWxzLnNldFRpbWVvdXQoaGFuZGxlciwgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSUU5IHdpbGwgbWVzcyB1cCB0aGUgRE9NIGlmIHlvdSBoYW5kbGUgZXZlbnRzIHN5bmNocm9ub3VzbHkgd2hpY2ggcmVzdWx0cyBpbiBET00gY2hhbmdlcyAoc3VjaCBhcyBvdGhlciBiaW5kaW5ncyk7XG4gICAgICAgIC8vIHNvIHdlJ2xsIG1ha2Ugc3VyZSBhbGwgdXBkYXRlcyBhcmUgYXN5bmNocm9ub3VzXG4gICAgICAgIHZhciBpZVVwZGF0ZU1vZGVsID0ga28udXRpbHMuaWVWZXJzaW9uID09IDkgPyBkZWZlclVwZGF0ZU1vZGVsIDogdXBkYXRlTW9kZWw7XG5cbiAgICAgICAgdmFyIHVwZGF0ZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsVmFsdWUgPT09IG51bGwgfHwgbW9kZWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBtb2RlbFZhbHVlID09PSBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCkge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRpbWVvdXQodXBkYXRlVmlldywgNCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGVsZW1lbnQgb25seSBpZiB0aGUgZWxlbWVudCBhbmQgbW9kZWwgYXJlIGRpZmZlcmVudC4gT24gc29tZSBicm93c2VycywgdXBkYXRpbmcgdGhlIHZhbHVlXG4gICAgICAgICAgICAvLyB3aWxsIG1vdmUgdGhlIGN1cnNvciB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCwgd2hpY2ggd291bGQgYmUgYmFkIHdoaWxlIHRoZSB1c2VyIGlzIHR5cGluZy5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50VmFsdWUgPSBtb2RlbFZhbHVlOyAgLy8gTWFrZSBzdXJlIHdlIGlnbm9yZSBldmVudHMgKHByb3BlcnR5Y2hhbmdlKSB0aGF0IHJlc3VsdCBmcm9tIHVwZGF0aW5nIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKERFQlVHICYmIGtvLmJpbmRpbmdIYW5kbGVyc1sndGV4dElucHV0J11bJ19mb3JjZVVwZGF0ZU9uJ10pIHtcbiAgICAgICAgICAgIC8vIFByb3ZpZGUgYSB3YXkgZm9yIHRlc3RzIHRvIHNwZWNpZnkgZXhhY3RseSB3aGljaCBldmVudHMgYXJlIGJvdW5kXG4gICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goa28uYmluZGluZ0hhbmRsZXJzWyd0ZXh0SW5wdXQnXVsnX2ZvcmNlVXBkYXRlT24nXSwgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZS5zbGljZSgwLDUpID09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudChldmVudE5hbWUuc2xpY2UoNSksIGRlZmVyVXBkYXRlTW9kZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoZXZlbnROYW1lLCB1cGRhdGVNb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoa28udXRpbHMuaWVWZXJzaW9uIDwgMTApIHtcbiAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA8PSA4IGRvZXNuJ3Qgc3VwcG9ydCB0aGUgJ2lucHV0JyBldmVudCwgYnV0IGRvZXMgaW5jbHVkZSAncHJvcGVydHljaGFuZ2UnIHRoYXQgZmlyZXMgd2hlbmV2ZXJcbiAgICAgICAgICAgICAgICAvLyBhbnkgcHJvcGVydHkgb2YgYW4gZWxlbWVudCBjaGFuZ2VzLiBVbmxpa2UgJ2lucHV0JywgaXQgYWxzbyBmaXJlcyBpZiBhIHByb3BlcnR5IGlzIGNoYW5nZWQgZnJvbSBKYXZhU2NyaXB0IGNvZGUsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHRoYXQncyBhbiBhY2NlcHRhYmxlIGNvbXByb21pc2UgZm9yIHRoaXMgYmluZGluZy4gSUUgOSBkb2VzIHN1cHBvcnQgJ2lucHV0JywgYnV0IHNpbmNlIGl0IGRvZXNuJ3QgZmlyZSBpdFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXNpbmcgYXV0b2NvbXBsZXRlLCB3ZSdsbCB1c2UgJ3Byb3BlcnR5Y2hhbmdlJyBmb3IgaXQgYWxzby5cbiAgICAgICAgICAgICAgICBvbkV2ZW50KCdwcm9wZXJ0eWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGllVXBkYXRlTW9kZWwoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuaWVWZXJzaW9uID09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgOCBoYXMgYSBidWcgd2hlcmUgaXQgZmFpbHMgdG8gZmlyZSAncHJvcGVydHljaGFuZ2UnIG9uIHRoZSBmaXJzdCB1cGRhdGUgZm9sbG93aW5nIGEgdmFsdWUgY2hhbmdlIGZyb21cbiAgICAgICAgICAgICAgICAgICAgLy8gSmF2YVNjcmlwdCBjb2RlLiBJdCBhbHNvIGRvZXNuJ3QgZmlyZSBpZiB5b3UgY2xlYXIgdGhlIGVudGlyZSB2YWx1ZS4gVG8gZml4IHRoaXMsIHdlIGJpbmQgdG8gdGhlIGZvbGxvd2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBldmVudHMgdG9vLlxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdrZXl1cCcsIHVwZGF0ZU1vZGVsKTsgICAgICAvLyBBIHNpbmdsZSBrZXlzdG9rZVxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdrZXlkb3duJywgdXBkYXRlTW9kZWwpOyAgICAvLyBUaGUgZmlyc3QgY2hhcmFjdGVyIHdoZW4gYSBrZXkgaXMgaGVsZCBkb3duXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrby51dGlscy5pZVZlcnNpb24gPj0gOCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA5IGRvZXNuJ3QgZmlyZSB0aGUgJ2lucHV0JyBldmVudCB3aGVuIGRlbGV0aW5nIHRleHQsIGluY2x1ZGluZyB1c2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYmFja3NwYWNlLCBkZWxldGUsIG9yIGN0cmwteCBrZXlzLCBjbGlja2luZyB0aGUgJ3gnIHRvIGNsZWFyIHRoZSBpbnB1dCwgZHJhZ2dpbmcgdGV4dFxuICAgICAgICAgICAgICAgICAgICAvLyBvdXQgb2YgdGhlIGZpZWxkLCBhbmQgY3V0dGluZyBvciBkZWxldGluZyB0ZXh0IHVzaW5nIHRoZSBjb250ZXh0IG1lbnUuICdzZWxlY3Rpb25jaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbiBkZXRlY3QgYWxsIG9mIHRob3NlIGV4Y2VwdCBkcmFnZ2luZyB0ZXh0IG91dCBvZiB0aGUgZmllbGQsIGZvciB3aGljaCB3ZSB1c2UgJ2RyYWdlbmQnLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgYWxzbyBuZWVkZWQgaW4gSUU4IGJlY2F1c2Ugb2YgdGhlIGJ1ZyBkZXNjcmliZWQgYWJvdmUuXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRm9yU2VsZWN0aW9uQ2hhbmdlRXZlbnQoZWxlbWVudCwgaWVVcGRhdGVNb2RlbCk7ICAvLyAnc2VsZWN0aW9uY2hhbmdlJyBjb3ZlcnMgY3V0LCBwYXN0ZSwgZHJvcCwgZGVsZXRlLCBldGMuXG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2RyYWdlbmQnLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFsbCBvdGhlciBzdXBwb3J0ZWQgYnJvd3NlcnMgc3VwcG9ydCB0aGUgJ2lucHV0JyBldmVudCwgd2hpY2ggZmlyZXMgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgIC8vIHRocm91Z2ggdGhlIHVzZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2lucHV0JywgdXBkYXRlTW9kZWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNhZmFyaVZlcnNpb24gPCA1ICYmIGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8NSBkb2Vzbid0IGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgZm9yIDx0ZXh0YXJlYT4gZWxlbWVudHMgKGl0IGRvZXMgZmlyZSAndGV4dElucHV0J1xuICAgICAgICAgICAgICAgICAgICAvLyBidXQgb25seSB3aGVuIHR5cGluZykuIFNvIHdlJ2xsIGp1c3QgY2F0Y2ggYXMgbXVjaCBhcyB3ZSBjYW4gd2l0aCBrZXlkb3duLCBjdXQsIGFuZCBwYXN0ZS5cbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgna2V5ZG93bicsIGRlZmVyVXBkYXRlTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdwYXN0ZScsIGRlZmVyVXBkYXRlTW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdjdXQnLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhVmVyc2lvbiA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDEwIGRvZXNuJ3QgYWx3YXlzIGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgZm9yIGN1dCwgcGFzdGUsIHVuZG8gJiBkcm9wIG9wZXJhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiB0cnkgdG8gY2F0Y2ggc29tZSBvZiB0aG9zZSB1c2luZyAna2V5ZG93bicuXG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2tleWRvd24nLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpcmVmb3hWZXJzaW9uIDwgNC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPD0gMy42IGRvZXNuJ3QgZmlyZSB0aGUgJ2lucHV0JyBldmVudCB3aGVuIHRleHQgaXMgZmlsbGVkIGluIHRocm91Z2ggYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ0RPTUF1dG9Db21wbGV0ZScsIHVwZGF0ZU1vZGVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDw9My41IGRvZXNuJ3QgZmlyZSB0aGUgJ2lucHV0JyBldmVudCB3aGVuIHRleHQgaXMgZHJvcHBlZCBpbnRvIHRoZSBpbnB1dC5cbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgnZHJhZ2Ryb3AnLCB1cGRhdGVNb2RlbCk7ICAgICAgIC8vIDwzLjVcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgnZHJvcCcsIHVwZGF0ZU1vZGVsKTsgICAgICAgICAgIC8vIDMuNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgdG8gdGhlIGNoYW5nZSBldmVudCBzbyB0aGF0IHdlIGNhbiBjYXRjaCBwcm9ncmFtbWF0aWMgdXBkYXRlcyBvZiB0aGUgdmFsdWUgdGhhdCBmaXJlIHRoaXMgZXZlbnQuXG4gICAgICAgIG9uRXZlbnQoJ2NoYW5nZScsIHVwZGF0ZU1vZGVsKTtcblxuICAgICAgICBrby5jb21wdXRlZCh1cGRhdGVWaWV3LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcbiAgICB9XG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1sndGV4dElucHV0J10gPSB0cnVlO1xuXG4vLyB0ZXh0aW5wdXQgaXMgYW4gYWxpYXMgZm9yIHRleHRJbnB1dFxua28uYmluZGluZ0hhbmRsZXJzWyd0ZXh0aW5wdXQnXSA9IHtcbiAgICAvLyBwcmVwcm9jZXNzIGlzIHRoZSBvbmx5IHdheSB0byBzZXQgdXAgYSBmdWxsIGFsaWFzXG4gICAgJ3ByZXByb2Nlc3MnOiBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIGFkZEJpbmRpbmcpIHtcbiAgICAgICAgYWRkQmluZGluZygndGV4dElucHV0JywgdmFsdWUpO1xuICAgIH1cbn07XG5cbn0pKCk7a28uYmluZGluZ0hhbmRsZXJzWyd1bmlxdWVOYW1lJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICBpZiAodmFsdWVBY2Nlc3NvcigpKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwia29fdW5pcXVlX1wiICsgKCsra28uYmluZGluZ0hhbmRsZXJzWyd1bmlxdWVOYW1lJ10uY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGtvLnV0aWxzLnNldEVsZW1lbnROYW1lKGVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddLmN1cnJlbnRJbmRleCA9IDA7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3ZhbHVlJ10gPSB7XG4gICAgJ2FmdGVyJzogWydvcHRpb25zJywgJ2ZvcmVhY2gnXSxcbiAgICAnaW5pdCc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykge1xuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgYmluZGluZyBpcyBwbGFjZWQgb24gYSByYWRpby9jaGVja2JveCwgdGhlbiBqdXN0IHBhc3MgdGhyb3VnaCB0byBjaGVja2VkVmFsdWUgYW5kIHF1aXRcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaW5wdXRcIiAmJiAoZWxlbWVudC50eXBlID09IFwiY2hlY2tib3hcIiB8fCBlbGVtZW50LnR5cGUgPT0gXCJyYWRpb1wiKSkge1xuICAgICAgICAgICAga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlKGVsZW1lbnQsIHsgJ2NoZWNrZWRWYWx1ZSc6IHZhbHVlQWNjZXNzb3IgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbHdheXMgY2F0Y2ggXCJjaGFuZ2VcIiBldmVudDsgcG9zc2libHkgb3RoZXIgZXZlbnRzIHRvbyBpZiBhc2tlZFxuICAgICAgICB2YXIgZXZlbnRzVG9DYXRjaCA9IFtcImNoYW5nZVwiXTtcbiAgICAgICAgdmFyIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2ggPSBhbGxCaW5kaW5ncy5nZXQoXCJ2YWx1ZVVwZGF0ZVwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5Q2hhbmdlZEZpcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdGVkRXZlbnRzVG9DYXRjaCA9PSBcInN0cmluZ1wiKSAvLyBBbGxvdyBib3RoIGluZGl2aWR1YWwgZXZlbnQgbmFtZXMsIGFuZCBhcnJheXMgb2YgZXZlbnQgbmFtZXNcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRFdmVudHNUb0NhdGNoID0gW3JlcXVlc3RlZEV2ZW50c1RvQ2F0Y2hdO1xuICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGV2ZW50c1RvQ2F0Y2gsIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2gpO1xuICAgICAgICAgICAgZXZlbnRzVG9DYXRjaCA9IGtvLnV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXMoZXZlbnRzVG9DYXRjaCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWVVcGRhdGVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCA9IG51bGw7XG4gICAgICAgICAgICBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudCk7XG4gICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KG1vZGVsVmFsdWUsIGFsbEJpbmRpbmdzLCAndmFsdWUnLCBlbGVtZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xMjJcbiAgICAgICAgLy8gSUUgZG9lc24ndCBmaXJlIFwiY2hhbmdlXCIgZXZlbnRzIG9uIHRleHRib3hlcyBpZiB0aGUgdXNlciBzZWxlY3RzIGEgdmFsdWUgZnJvbSBpdHMgYXV0b2NvbXBsZXRlIGxpc3RcbiAgICAgICAgdmFyIGllQXV0b0NvbXBsZXRlSGFja05lZWRlZCA9IGtvLnV0aWxzLmllVmVyc2lvbiAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBcImlucHV0XCIgJiYgZWxlbWVudC50eXBlID09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlbGVtZW50LmF1dG9jb21wbGV0ZSAhPSBcIm9mZlwiICYmICghZWxlbWVudC5mb3JtIHx8IGVsZW1lbnQuZm9ybS5hdXRvY29tcGxldGUgIT0gXCJvZmZcIik7XG4gICAgICAgIGlmIChpZUF1dG9Db21wbGV0ZUhhY2tOZWVkZWQgJiYga28udXRpbHMuYXJyYXlJbmRleE9mKGV2ZW50c1RvQ2F0Y2gsIFwicHJvcGVydHljaGFuZ2VcIikgPT0gLTEpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwicHJvcGVydHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IHRydWUgfSk7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHsgcHJvcGVydHlDaGFuZ2VkRmlyZWQgPSBmYWxzZSB9KTtcbiAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlDaGFuZ2VkRmlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVVcGRhdGVIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goZXZlbnRzVG9DYXRjaCwgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAvLyBUaGUgc3ludGF4IFwiYWZ0ZXI8ZXZlbnRuYW1lPlwiIG1lYW5zIFwicnVuIHRoZSBoYW5kbGVyIGFzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBldmVudFwiXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHVzZWZ1bCwgZm9yIGV4YW1wbGUsIHRvIGNhdGNoIFwia2V5ZG93blwiIGV2ZW50cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgdXBkYXRlZCB0aGUgY29udHJvbFxuICAgICAgICAgICAgLy8gKG90aGVyd2lzZSwga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUodGhpcykgd2lsbCByZWNlaXZlIHRoZSBjb250cm9sJ3MgdmFsdWUgKmJlZm9yZSogdGhlIGtleSBldmVudClcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gdmFsdWVVcGRhdGVIYW5kbGVyO1xuICAgICAgICAgICAgaWYgKGtvLnV0aWxzLnN0cmluZ1N0YXJ0c1dpdGgoZXZlbnROYW1lLCBcImFmdGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgdmFyaWFibGUgaXMgbm9uLW51bGwgKm9ubHkqIGR1cmluZyB0aGUgYnJpZWYgZ2FwIGJldHdlZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYSBrZXlYIGV2ZW50IGZpcmluZyBhbmQgdGhlIHZhbHVlVXBkYXRlSGFuZGxlciBydW5uaW5nLCB3aGljaCBpcyBzY2hlZHVsZWQgdG8gaGFwcGVuXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0IHRoZSBlYXJsaWVzdCBhc3luY2hyb25vdXMgb3Bwb3J0dW5pdHkuIFdlIHN0b3JlIHRoaXMgdGVtcG9yYXJ5IGluZm9ybWF0aW9uIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYsIGJldHdlZW4ga2V5WCBhbmQgdmFsdWVVcGRhdGVIYW5kbGVyLCB0aGUgdW5kZXJseWluZyBtb2RlbCB2YWx1ZSBjaGFuZ2VzIHNlcGFyYXRlbHksXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBvdmVyd3JpdGUgdGhhdCBtb2RlbCB2YWx1ZSBjaGFuZ2Ugd2l0aCB0aGUgdmFsdWUgdGhlIHVzZXIganVzdCB0eXBlZC4gT3RoZXJ3aXNlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZWNobmlxdWVzIGxpa2UgcmF0ZUxpbWl0IGNhbiB0cmlnZ2VyIG1vZGVsIGNoYW5nZXMgYXQgY3JpdGljYWwgbW9tZW50cyB0aGF0IHdpbGxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHVzZXIncyBpbnB1dHMsIGNhdXNpbmcga2V5c3Ryb2tlcyB0byBiZSBsb3N0LlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCA9IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUaW1lb3V0KHZhbHVlVXBkYXRlSGFuZGxlciwgMCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBldmVudE5hbWUuc3Vic3RyaW5nKFwiYWZ0ZXJcIi5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHVwZGF0ZUZyb21Nb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ICE9PSBudWxsICYmIG5ld1ZhbHVlID09PSBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCkge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRpbWVvdXQodXBkYXRlRnJvbU1vZGVsLCAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZUhhc0NoYW5nZWQgPSAobmV3VmFsdWUgIT09IGVsZW1lbnRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxvd1Vuc2V0ID0gYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZUFsbG93VW5zZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGx5VmFsdWVBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUoZWxlbWVudCwgbmV3VmFsdWUsIGFsbG93VW5zZXQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhcHBseVZhbHVlQWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd1Vuc2V0ICYmIG5ld1ZhbHVlICE9PSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgeW91IHRyeSB0byBzZXQgYSBtb2RlbCB2YWx1ZSB0aGF0IGNhbid0IGJlIHJlcHJlc2VudGVkIGluIGFuIGFscmVhZHktcG9wdWxhdGVkIGRyb3Bkb3duLCByZWplY3QgdGhhdCBjaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHlvdSdyZSBub3QgYWxsb3dlZCB0byBoYXZlIGEgbW9kZWwgdmFsdWUgdGhhdCBkaXNhZ3JlZXMgd2l0aCBhIHZpc2libGUgVUkgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoa28udXRpbHMudHJpZ2dlckV2ZW50LCBudWxsLCBbZWxlbWVudCwgXCJjaGFuZ2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUU2IGJ1ZzogSXQgd29uJ3QgcmVsaWFibHkgYXBwbHkgdmFsdWVzIHRvIFNFTEVDVCBub2RlcyBkdXJpbmcgdGhlIHNhbWUgZXhlY3V0aW9uIHRocmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgYWZ0ZXIgeW91J3ZlIGNoYW5nZWQgdGhlIHNldCBvZiBPUFRJT04gbm9kZXMgb24gaXQuIFNvIGZvciB0aGF0IG5vZGUgdHlwZSwgd2UnbGwgc2NoZWR1bGUgYSBzZWNvbmQgdGhyZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhcHBseSB0aGUgdmFsdWUgYXMgd2VsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRpbWVvdXQoYXBwbHlWYWx1ZUFjdGlvbiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUoZWxlbWVudCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBrby5jb21wdXRlZCh1cGRhdGVGcm9tTW9kZWwsIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50IH0pO1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKCkge30gLy8gS2VlcCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBjb2RlIHRoYXQgbWF5IGhhdmUgd3JhcHBlZCB2YWx1ZSBiaW5kaW5nXG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1sndmFsdWUnXSA9IHRydWU7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3Zpc2libGUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICB2YXIgaXNDdXJyZW50bHlWaXNpYmxlID0gIShlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpO1xuICAgICAgICBpZiAodmFsdWUgJiYgIWlzQ3VycmVudGx5VmlzaWJsZSlcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIGVsc2UgaWYgKCghdmFsdWUpICYmIGlzQ3VycmVudGx5VmlzaWJsZSlcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn07XG4vLyAnY2xpY2snIGlzIGp1c3QgYSBzaG9ydGhhbmQgZm9yIHRoZSB1c3VhbCBmdWxsLWxlbmd0aCBldmVudDp7Y2xpY2s6aGFuZGxlcn1cbm1ha2VFdmVudEhhbmRsZXJTaG9ydGN1dCgnY2xpY2snKTtcbi8vIElmIHlvdSB3YW50IHRvIG1ha2UgYSBjdXN0b20gdGVtcGxhdGUgZW5naW5lLFxuLy9cbi8vIFsxXSBJbmhlcml0IGZyb20gdGhpcyBjbGFzcyAobGlrZSBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZSBkb2VzKVxuLy8gWzJdIE92ZXJyaWRlICdyZW5kZXJUZW1wbGF0ZVNvdXJjZScsIHN1cHBseWluZyBhIGZ1bmN0aW9uIHdpdGggdGhpcyBzaWduYXR1cmU6XG4vL1xuLy8gICAgICAgIGZ1bmN0aW9uICh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpIHtcbi8vICAgICAgICAgICAgLy8gLSB0ZW1wbGF0ZVNvdXJjZS50ZXh0KCkgaXMgdGhlIHRleHQgb2YgdGhlIHRlbXBsYXRlIHlvdSBzaG91bGQgcmVuZGVyXG4vLyAgICAgICAgICAgIC8vIC0gYmluZGluZ0NvbnRleHQuJGRhdGEgaXMgdGhlIGRhdGEgeW91IHNob3VsZCBwYXNzIGludG8gdGhlIHRlbXBsYXRlXG4vLyAgICAgICAgICAgIC8vICAgLSB5b3UgbWlnaHQgYWxzbyB3YW50IHRvIG1ha2UgYmluZGluZ0NvbnRleHQuJHBhcmVudCwgYmluZGluZ0NvbnRleHQuJHBhcmVudHMsXG4vLyAgICAgICAgICAgIC8vICAgICBhbmQgYmluZGluZ0NvbnRleHQuJHJvb3QgYXZhaWxhYmxlIGluIHRoZSB0ZW1wbGF0ZSB0b29cbi8vICAgICAgICAgICAgLy8gLSBvcHRpb25zIGdpdmVzIHlvdSBhY2Nlc3MgdG8gYW55IG90aGVyIHByb3BlcnRpZXMgc2V0IG9uIFwiZGF0YS1iaW5kOiB7IHRlbXBsYXRlOiBvcHRpb25zIH1cIlxuLy8gICAgICAgICAgICAvLyAtIHRlbXBsYXRlRG9jdW1lbnQgaXMgdGhlIGRvY3VtZW50IG9iamVjdCBvZiB0aGUgdGVtcGxhdGVcbi8vICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlOiBhbiBhcnJheSBvZiBET00gbm9kZXNcbi8vICAgICAgICB9XG4vL1xuLy8gWzNdIE92ZXJyaWRlICdjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snLCBzdXBwbHlpbmcgYSBmdW5jdGlvbiB3aXRoIHRoaXMgc2lnbmF0dXJlOlxuLy9cbi8vICAgICAgICBmdW5jdGlvbiAoc2NyaXB0KSB7XG4vLyAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZTogV2hhdGV2ZXIgc3ludGF4IG1lYW5zIFwiRXZhbHVhdGUgdGhlIEphdmFTY3JpcHQgc3RhdGVtZW50ICdzY3JpcHQnIGFuZCBvdXRwdXQgdGhlIHJlc3VsdFwiXG4vLyAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoZSBqcXVlcnkudG1wbCB0ZW1wbGF0ZSBlbmdpbmUgY29udmVydHMgJ3NvbWVTY3JpcHQnIHRvICckeyBzb21lU2NyaXB0IH0nXG4vLyAgICAgICAgfVxuLy9cbi8vICAgICBUaGlzIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHlvdSB3YW50IHRvIGFsbG93IGRhdGEtYmluZCBhdHRyaWJ1dGVzIHRvIHJlZmVyZW5jZSBhcmJpdHJhcnkgdGVtcGxhdGUgdmFyaWFibGVzLlxuLy8gICAgIElmIHlvdSBkb24ndCB3YW50IHRvIGFsbG93IHRoYXQsIHlvdSBjYW4gc2V0IHRoZSBwcm9wZXJ0eSAnYWxsb3dUZW1wbGF0ZVJld3JpdGluZycgdG8gZmFsc2UgKGxpa2Uga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgZG9lcylcbi8vICAgICBhbmQgdGhlbiB5b3UgZG9uJ3QgbmVlZCB0byBvdmVycmlkZSAnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJy5cblxua28udGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7IH07XG5cbmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRlbXBsYXRlRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPdmVycmlkZSByZW5kZXJUZW1wbGF0ZVNvdXJjZVwiKTtcbn07XG5cbmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJ10gPSBmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpO1xufTtcblxua28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydtYWtlVGVtcGxhdGVTb3VyY2UnXSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgLy8gTmFtZWQgdGVtcGxhdGVcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGVtcGxhdGVEb2N1bWVudCA9IHRlbXBsYXRlRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHZhciBlbGVtID0gdGVtcGxhdGVEb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZSk7XG4gICAgICAgIGlmICghZWxlbSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIgKyB0ZW1wbGF0ZSk7XG4gICAgICAgIHJldHVybiBuZXcga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQoZWxlbSk7XG4gICAgfSBlbHNlIGlmICgodGVtcGxhdGUubm9kZVR5cGUgPT0gMSkgfHwgKHRlbXBsYXRlLm5vZGVUeXBlID09IDgpKSB7XG4gICAgICAgIC8vIEFub255bW91cyB0ZW1wbGF0ZVxuICAgICAgICByZXR1cm4gbmV3IGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG4gICAgfSBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIgKyB0ZW1wbGF0ZSk7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgdmFyIHRlbXBsYXRlU291cmNlID0gdGhpc1snbWFrZVRlbXBsYXRlU291cmNlJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpO1xuICAgIHJldHVybiB0aGlzWydyZW5kZXJUZW1wbGF0ZVNvdXJjZSddKHRlbXBsYXRlU291cmNlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCk7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ2lzVGVtcGxhdGVSZXdyaXR0ZW4nXSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIC8vIFNraXAgcmV3cml0aW5nIGlmIHJlcXVlc3RlZFxuICAgIGlmICh0aGlzWydhbGxvd1RlbXBsYXRlUmV3cml0aW5nJ10gPT09IGZhbHNlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpc1snbWFrZVRlbXBsYXRlU291cmNlJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpWydkYXRhJ10oXCJpc1Jld3JpdHRlblwiKTtcbn07XG5cbmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsncmV3cml0ZVRlbXBsYXRlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIHJld3JpdGVyQ2FsbGJhY2ssIHRlbXBsYXRlRG9jdW1lbnQpIHtcbiAgICB2YXIgdGVtcGxhdGVTb3VyY2UgPSB0aGlzWydtYWtlVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCk7XG4gICAgdmFyIHJld3JpdHRlbiA9IHJld3JpdGVyQ2FsbGJhY2sodGVtcGxhdGVTb3VyY2VbJ3RleHQnXSgpKTtcbiAgICB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKHJld3JpdHRlbik7XG4gICAgdGVtcGxhdGVTb3VyY2VbJ2RhdGEnXShcImlzUmV3cml0dGVuXCIsIHRydWUpO1xufTtcblxua28uZXhwb3J0U3ltYm9sKCd0ZW1wbGF0ZUVuZ2luZScsIGtvLnRlbXBsYXRlRW5naW5lKTtcblxua28udGVtcGxhdGVSZXdyaXRpbmcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW1vaXplRGF0YUJpbmRpbmdBdHRyaWJ1dGVTeW50YXhSZWdleCA9IC8oPChbYS16XStcXGQqKSg/OlxccysoPyFkYXRhLWJpbmRcXHMqPVxccyopW2EtejAtOVxcLV0rKD86PSg/OlxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJ3xbXj5dKikpPykqXFxzKylkYXRhLWJpbmRcXHMqPVxccyooW1wiJ10pKFtcXHNcXFNdKj8pXFwzL2dpO1xuICAgIHZhciBtZW1vaXplVmlydHVhbENvbnRhaW5lckJpbmRpbmdTeW50YXhSZWdleCA9IC88IS0tXFxzKmtvXFxiXFxzKihbXFxzXFxTXSo/KVxccyotLT4vZztcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRGF0YUJpbmRWYWx1ZXNGb3JSZXdyaXRpbmcoa2V5VmFsdWVBcnJheSkge1xuICAgICAgICB2YXIgYWxsVmFsaWRhdG9ycyA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleVZhbHVlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlWYWx1ZUFycmF5W2ldWydrZXknXTtcbiAgICAgICAgICAgIGlmIChhbGxWYWxpZGF0b3JzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gYWxsVmFsaWRhdG9yc1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVFcnJvck1lc3NhZ2UgPSB2YWxpZGF0b3Ioa2V5VmFsdWVBcnJheVtpXVsndmFsdWUnXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZUVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwb3NzaWJsZUVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIiArIGtleSArIFwiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdE1lbW9pemVkVGFnUmVwbGFjZW1lbnQoZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSwgdGFnVG9SZXRhaW4sIG5vZGVOYW1lLCB0ZW1wbGF0ZUVuZ2luZSkge1xuICAgICAgICB2YXIgZGF0YUJpbmRLZXlWYWx1ZUFycmF5ID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwoZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIHZhbGlkYXRlRGF0YUJpbmRWYWx1ZXNGb3JSZXdyaXRpbmcoZGF0YUJpbmRLZXlWYWx1ZUFycmF5KTtcbiAgICAgICAgdmFyIHJld3JpdHRlbkRhdGFCaW5kQXR0cmlidXRlVmFsdWUgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncyhkYXRhQmluZEtleVZhbHVlQXJyYXksIHsndmFsdWVBY2Nlc3NvcnMnOnRydWV9KTtcblxuICAgICAgICAvLyBGb3Igbm8gb2J2aW91cyByZWFzb24sIE9wZXJhIGZhaWxzIHRvIGV2YWx1YXRlIHJld3JpdHRlbkRhdGFCaW5kQXR0cmlidXRlVmFsdWUgdW5sZXNzIGl0J3Mgd3JhcHBlZCBpbiBhbiBhZGRpdGlvbmFsXG4gICAgICAgIC8vIGFub255bW91cyBmdW5jdGlvbiwgZXZlbiB0aG91Z2ggT3BlcmEncyBidWlsdC1pbiBkZWJ1Z2dlciBjYW4gZXZhbHVhdGUgaXQgYW55d2F5LiBObyBvdGhlciBicm93c2VyIHJlcXVpcmVzIHRoaXNcbiAgICAgICAgLy8gZXh0cmEgaW5kaXJlY3Rpb24uXG4gICAgICAgIHZhciBhcHBseUJpbmRpbmdzVG9OZXh0U2libGluZ1NjcmlwdCA9XG4gICAgICAgICAgICBcImtvLl9fdHJfYW1idG5zKGZ1bmN0aW9uKCRjb250ZXh0LCRlbGVtZW50KXtyZXR1cm4oZnVuY3Rpb24oKXtyZXR1cm57IFwiICsgcmV3cml0dGVuRGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSArIFwiIH0gfSkoKX0sJ1wiICsgbm9kZU5hbWUudG9Mb3dlckNhc2UoKSArIFwiJylcIjtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlRW5naW5lWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXShhcHBseUJpbmRpbmdzVG9OZXh0U2libGluZ1NjcmlwdCkgKyB0YWdUb1JldGFpbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbnN1cmVUZW1wbGF0ZUlzUmV3cml0dGVuOiBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlRW5naW5lLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBsYXRlRW5naW5lWydpc1RlbXBsYXRlUmV3cml0dGVuJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpKVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlRW5naW5lWydyZXdyaXRlVGVtcGxhdGUnXSh0ZW1wbGF0ZSwgZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnRlbXBsYXRlUmV3cml0aW5nLm1lbW9pemVCaW5kaW5nQXR0cmlidXRlU3ludGF4KGh0bWxTdHJpbmcsIHRlbXBsYXRlRW5naW5lKTtcbiAgICAgICAgICAgICAgICB9LCB0ZW1wbGF0ZURvY3VtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZW1vaXplQmluZGluZ0F0dHJpYnV0ZVN5bnRheDogZnVuY3Rpb24gKGh0bWxTdHJpbmcsIHRlbXBsYXRlRW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbFN0cmluZy5yZXBsYWNlKG1lbW9pemVEYXRhQmluZGluZ0F0dHJpYnV0ZVN5bnRheFJlZ2V4LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdE1lbW9pemVkVGFnUmVwbGFjZW1lbnQoLyogZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZTogKi8gYXJndW1lbnRzWzRdLCAvKiB0YWdUb1JldGFpbjogKi8gYXJndW1lbnRzWzFdLCAvKiBub2RlTmFtZTogKi8gYXJndW1lbnRzWzJdLCB0ZW1wbGF0ZUVuZ2luZSk7XG4gICAgICAgICAgICB9KS5yZXBsYWNlKG1lbW9pemVWaXJ0dWFsQ29udGFpbmVyQmluZGluZ1N5bnRheFJlZ2V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0TWVtb2l6ZWRUYWdSZXBsYWNlbWVudCgvKiBkYXRhQmluZEF0dHJpYnV0ZVZhbHVlOiAqLyBhcmd1bWVudHNbMV0sIC8qIHRhZ1RvUmV0YWluOiAqLyBcIjwhLS0ga28gLS0+XCIsIC8qIG5vZGVOYW1lOiAqLyBcIiNjb21tZW50XCIsIHRlbXBsYXRlRW5naW5lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGx5TWVtb2l6ZWRCaW5kaW5nc1RvTmV4dFNpYmxpbmc6IGZ1bmN0aW9uIChiaW5kaW5ncywgbm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby5tZW1vaXphdGlvbi5tZW1vaXplKGZ1bmN0aW9uIChkb21Ob2RlLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlVG9CaW5kID0gZG9tTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAobm9kZVRvQmluZCAmJiBub2RlVG9CaW5kLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZShub2RlVG9CaW5kLCBiaW5kaW5ncywgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuXG4vLyBFeHBvcnRlZCBvbmx5IGJlY2F1c2UgaXQgaGFzIHRvIGJlIHJlZmVyZW5jZWQgYnkgc3RyaW5nIGxvb2t1cCBmcm9tIHdpdGhpbiByZXdyaXR0ZW4gdGVtcGxhdGVcbmtvLmV4cG9ydFN5bWJvbCgnX190cl9hbWJ0bnMnLCBrby50ZW1wbGF0ZVJld3JpdGluZy5hcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nKTtcbihmdW5jdGlvbigpIHtcbiAgICAvLyBBIHRlbXBsYXRlIHNvdXJjZSByZXByZXNlbnRzIGEgcmVhZC93cml0ZSB3YXkgb2YgYWNjZXNzaW5nIGEgdGVtcGxhdGUuIFRoaXMgaXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciB0ZW1wbGF0ZSBsb2FkaW5nL3NhdmluZ1xuICAgIC8vIGxvZ2ljIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZXZlcnkgdGVtcGxhdGUgZW5naW5lIChhbmQgbWVhbnMgdGhleSBjYW4gYWxsIHdvcmsgd2l0aCBhbm9ueW1vdXMgdGVtcGxhdGVzLCBldGMuKVxuICAgIC8vXG4gICAgLy8gVHdvIGFyZSBwcm92aWRlZCBieSBkZWZhdWx0OlxuICAgIC8vICAxLiBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCAgICAgICAtIHJlYWRzL3dyaXRlcyB0aGUgdGV4dCBjb250ZW50IG9mIGFuIGFyYml0cmFyeSBET00gZWxlbWVudFxuICAgIC8vICAyLiBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzRWxlbWVudCAtIHVzZXMga28udXRpbHMuZG9tRGF0YSB0byByZWFkL3dyaXRlIHRleHQgKmFzc29jaWF0ZWQqIHdpdGggdGhlIERPTSBlbGVtZW50LCBidXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IHJlYWRpbmcvd3JpdGluZyB0aGUgYWN0dWFsIGVsZW1lbnQgdGV4dCBjb250ZW50LCBzaW5jZSBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgcmVuZGVyZWQgdGVtcGxhdGUgb3V0cHV0LlxuICAgIC8vIFlvdSBjYW4gaW1wbGVtZW50IHlvdXIgb3duIHRlbXBsYXRlIHNvdXJjZSBpZiB5b3Ugd2FudCB0byBmZXRjaC9zdG9yZSB0ZW1wbGF0ZXMgc29tZXdoZXJlIG90aGVyIHRoYW4gaW4gRE9NIGVsZW1lbnRzLlxuICAgIC8vIFRlbXBsYXRlIHNvdXJjZXMgbmVlZCB0byBoYXZlIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICAgIC8vICAgdGV4dCgpIFx0XHRcdC0gcmV0dXJucyB0aGUgdGVtcGxhdGUgdGV4dCBmcm9tIHlvdXIgc3RvcmFnZSBsb2NhdGlvblxuICAgIC8vICAgdGV4dCh2YWx1ZSlcdFx0LSB3cml0ZXMgdGhlIHN1cHBsaWVkIHRlbXBsYXRlIHRleHQgdG8geW91ciBzdG9yYWdlIGxvY2F0aW9uXG4gICAgLy8gICBkYXRhKGtleSlcdFx0XHQtIHJlYWRzIHZhbHVlcyBzdG9yZWQgdXNpbmcgZGF0YShrZXksIHZhbHVlKSAtIHNlZSBiZWxvd1xuICAgIC8vICAgZGF0YShrZXksIHZhbHVlKVx0LSBhc3NvY2lhdGVzIFwidmFsdWVcIiB3aXRoIHRoaXMgdGVtcGxhdGUgYW5kIHRoZSBrZXkgXCJrZXlcIi4gSXMgdXNlZCB0byBzdG9yZSBpbmZvcm1hdGlvbiBsaWtlIFwiaXNSZXdyaXR0ZW5cIi5cbiAgICAvL1xuICAgIC8vIE9wdGlvbmFsbHksIHRlbXBsYXRlIHNvdXJjZXMgY2FuIGFsc28gaGF2ZSB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAgICAvLyAgIG5vZGVzKCkgICAgICAgICAgICAtIHJldHVybnMgYSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlcyBvZiB0aGlzIHRlbXBsYXRlLCB3aGVyZSBhdmFpbGFibGVcbiAgICAvLyAgIG5vZGVzKHZhbHVlKSAgICAgICAtIHdyaXRlcyB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQgdG8geW91ciBzdG9yYWdlIGxvY2F0aW9uXG4gICAgLy8gSWYgYSBET00gZWxlbWVudCBpcyBhdmFpbGFibGUgZm9yIGEgZ2l2ZW4gdGVtcGxhdGUgc291cmNlLCB0ZW1wbGF0ZSBlbmdpbmVzIGFyZSBlbmNvdXJhZ2VkIHRvIHVzZSBpdCBpbiBwcmVmZXJlbmNlIG92ZXIgdGV4dCgpXG4gICAgLy8gZm9yIGltcHJvdmVkIHNwZWVkLiBIb3dldmVyLCBhbGwgdGVtcGxhdGVTb3VyY2VzIG11c3Qgc3VwcGx5IHRleHQoKSBldmVuIGlmIHRoZXkgZG9uJ3Qgc3VwcGx5IG5vZGVzKCkuXG4gICAgLy9cbiAgICAvLyBPbmNlIHlvdSd2ZSBpbXBsZW1lbnRlZCBhIHRlbXBsYXRlU291cmNlLCBtYWtlIHlvdXIgdGVtcGxhdGUgZW5naW5lIHVzZSBpdCBieSBzdWJjbGFzc2luZyB3aGF0ZXZlciB0ZW1wbGF0ZSBlbmdpbmUgeW91IHdlcmVcbiAgICAvLyB1c2luZyBhbmQgb3ZlcnJpZGluZyBcIm1ha2VUZW1wbGF0ZVNvdXJjZVwiIHRvIHJldHVybiBhbiBpbnN0YW5jZSBvZiB5b3VyIGN1c3RvbSB0ZW1wbGF0ZSBzb3VyY2UuXG5cbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMgPSB7fTtcblxuICAgIC8vIC0tLS0ga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQgLS0tLS1cblxuICAgIC8vIHRlbXBsYXRlIHR5cGVzXG4gICAgdmFyIHRlbXBsYXRlU2NyaXB0ID0gMSxcbiAgICAgICAgdGVtcGxhdGVUZXh0QXJlYSA9IDIsXG4gICAgICAgIHRlbXBsYXRlVGVtcGxhdGUgPSAzLFxuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQgPSA0O1xuXG4gICAga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciB0YWdOYW1lTG93ZXIgPSBrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlVHlwZSA9XG4gICAgICAgICAgICAgICAgdGFnTmFtZUxvd2VyID09PSBcInNjcmlwdFwiID8gdGVtcGxhdGVTY3JpcHQgOlxuICAgICAgICAgICAgICAgIHRhZ05hbWVMb3dlciA9PT0gXCJ0ZXh0YXJlYVwiID8gdGVtcGxhdGVUZXh0QXJlYSA6XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBicm93c2VycyB3aXRoIHByb3BlciA8dGVtcGxhdGU+IGVsZW1lbnQgc3VwcG9ydCwgd2hlcmUgdGhlIC5jb250ZW50IHByb3BlcnR5IGdpdmVzIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgICAgICAgICB0YWdOYW1lTG93ZXIgPT0gXCJ0ZW1wbGF0ZVwiICYmIGVsZW1lbnQuY29udGVudCAmJiBlbGVtZW50LmNvbnRlbnQubm9kZVR5cGUgPT09IDExID8gdGVtcGxhdGVUZW1wbGF0ZSA6XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVFbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQucHJvdG90eXBlWyd0ZXh0J10gPSBmdW5jdGlvbigvKiB2YWx1ZVRvV3JpdGUgKi8pIHtcbiAgICAgICAgdmFyIGVsZW1Db250ZW50c1Byb3BlcnR5ID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT09IHRlbXBsYXRlU2NyaXB0ID8gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy50ZW1wbGF0ZVR5cGUgPT09IHRlbXBsYXRlVGV4dEFyZWEgPyBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpbm5lckhUTUxcIjtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50W2VsZW1Db250ZW50c1Byb3BlcnR5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnRzUHJvcGVydHkgPT09IFwiaW5uZXJIVE1MXCIpXG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0SHRtbCh0aGlzLmRvbUVsZW1lbnQsIHZhbHVlVG9Xcml0ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50W2VsZW1Db250ZW50c1Byb3BlcnR5XSA9IHZhbHVlVG9Xcml0ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YURvbURhdGFQcmVmaXggPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKSArIFwiX1wiO1xuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsnZGF0YSddID0gZnVuY3Rpb24oa2V5IC8qLCB2YWx1ZVRvV3JpdGUgKi8pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5kb21EYXRhLmdldCh0aGlzLmRvbUVsZW1lbnQsIGRhdGFEb21EYXRhUHJlZml4ICsga2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KHRoaXMuZG9tRWxlbWVudCwgZGF0YURvbURhdGFQcmVmaXggKyBrZXksIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRlbXBsYXRlc0RvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTtcbiAgICBmdW5jdGlvbiBnZXRUZW1wbGF0ZURvbURhdGEoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQoZWxlbWVudCwgdGVtcGxhdGVzRG9tRGF0YUtleSkgfHwge307XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFRlbXBsYXRlRG9tRGF0YShlbGVtZW50LCBkYXRhKSB7XG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGVsZW1lbnQsIHRlbXBsYXRlc0RvbURhdGFLZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsnbm9kZXMnXSA9IGZ1bmN0aW9uKC8qIHZhbHVlVG9Xcml0ZSAqLykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRGF0YSA9IGdldFRlbXBsYXRlRG9tRGF0YShlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJEYXRhID0gdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGE7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyRGF0YSB8fCAoXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVR5cGUgPT09IHRlbXBsYXRlVGVtcGxhdGUgPyBlbGVtZW50LmNvbnRlbnQgOlxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVUeXBlID09PSB0ZW1wbGF0ZUVsZW1lbnQgPyBlbGVtZW50IDpcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHNldFRlbXBsYXRlRG9tRGF0YShlbGVtZW50LCB7Y29udGFpbmVyRGF0YTogdmFsdWVUb1dyaXRlfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gLS0tLSBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUgLS0tLS1cbiAgICAvLyBBbm9ueW1vdXMgdGVtcGxhdGVzIGFyZSBub3JtYWxseSBzYXZlZC9yZXRyaWV2ZWQgYXMgRE9NIG5vZGVzIHRocm91Z2ggXCJub2Rlc1wiLlxuICAgIC8vIEZvciBjb21wYXRpYmlsaXR5LCB5b3UgY2FuIGFsc28gcmVhZCBcInRleHRcIjsgaXQgd2lsbCBiZSBzZXJpYWxpemVkIGZyb20gdGhlIG5vZGVzIG9uIGRlbWFuZC5cbiAgICAvLyBXcml0aW5nIHRvIFwidGV4dFwiIGlzIHN0aWxsIHN1cHBvcnRlZCwgYnV0IHRoZW4gdGhlIHRlbXBsYXRlIGRhdGEgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGFzIERPTSBub2Rlcy5cblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlLnByb3RvdHlwZSA9IG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCgpO1xuICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGU7XG4gICAga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlLnByb3RvdHlwZVsndGV4dCddID0gZnVuY3Rpb24oLyogdmFsdWVUb1dyaXRlICovKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZURhdGEgPSBnZXRUZW1wbGF0ZURvbURhdGEodGhpcy5kb21FbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZURhdGEudGV4dERhdGEgPT09IHVuZGVmaW5lZCAmJiB0ZW1wbGF0ZURhdGEuY29udGFpbmVyRGF0YSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZURhdGEudGV4dERhdGEgPSB0ZW1wbGF0ZURhdGEuY29udGFpbmVyRGF0YS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVEYXRhLnRleHREYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHNldFRlbXBsYXRlRG9tRGF0YSh0aGlzLmRvbUVsZW1lbnQsIHt0ZXh0RGF0YTogdmFsdWVUb1dyaXRlfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28uZXhwb3J0U3ltYm9sKCd0ZW1wbGF0ZVNvdXJjZXMnLCBrby50ZW1wbGF0ZVNvdXJjZXMpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQnLCBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCk7XG4gICAga28uZXhwb3J0U3ltYm9sKCd0ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUnLCBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUpO1xufSkoKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90ZW1wbGF0ZUVuZ2luZTtcbiAgICBrby5zZXRUZW1wbGF0ZUVuZ2luZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZUVuZ2luZSkge1xuICAgICAgICBpZiAoKHRlbXBsYXRlRW5naW5lICE9IHVuZGVmaW5lZCkgJiYgISh0ZW1wbGF0ZUVuZ2luZSBpbnN0YW5jZW9mIGtvLnRlbXBsYXRlRW5naW5lKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRlbXBsYXRlRW5naW5lIG11c3QgaW5oZXJpdCBmcm9tIGtvLnRlbXBsYXRlRW5naW5lXCIpO1xuICAgICAgICBfdGVtcGxhdGVFbmdpbmUgPSB0ZW1wbGF0ZUVuZ2luZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZva2VGb3JFYWNoTm9kZUluQ29udGludW91c1JhbmdlKGZpcnN0Tm9kZSwgbGFzdE5vZGUsIGFjdGlvbikge1xuICAgICAgICB2YXIgbm9kZSwgbmV4dEluUXVldWUgPSBmaXJzdE5vZGUsIGZpcnN0T3V0T2ZSYW5nZU5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcobGFzdE5vZGUpO1xuICAgICAgICB3aGlsZSAobmV4dEluUXVldWUgJiYgKChub2RlID0gbmV4dEluUXVldWUpICE9PSBmaXJzdE91dE9mUmFuZ2VOb2RlKSkge1xuICAgICAgICAgICAgbmV4dEluUXVldWUgPSBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgICAgICBhY3Rpb24obm9kZSwgbmV4dEluUXVldWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaW5kaW5nc09uQ29udGludW91c05vZGVBcnJheShjb250aW51b3VzTm9kZUFycmF5LCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAvLyBUbyBiZSB1c2VkIG9uIGFueSBub2RlcyB0aGF0IGhhdmUgYmVlbiByZW5kZXJlZCBieSBhIHRlbXBsYXRlIGFuZCBoYXZlIGJlZW4gaW5zZXJ0ZWQgaW50byBzb21lIHBhcmVudCBlbGVtZW50XG4gICAgICAgIC8vIFdhbGtzIHRocm91Z2ggY29udGludW91c05vZGVBcnJheSAod2hpY2ggKm11c3QqIGJlIGNvbnRpbnVvdXMsIGkuZS4sIGFuIHVuaW50ZXJydXB0ZWQgc2VxdWVuY2Ugb2Ygc2libGluZyBub2RlcywgYmVjYXVzZVxuICAgICAgICAvLyB0aGUgYWxnb3JpdGhtIGZvciB3YWxraW5nIHRoZW0gcmVsaWVzIG9uIHRoaXMpLCBhbmQgZm9yIGVhY2ggdG9wLWxldmVsIGl0ZW0gaW4gdGhlIHZpcnR1YWwtZWxlbWVudCBzZW5zZSxcbiAgICAgICAgLy8gKDEpIERvZXMgYSByZWd1bGFyIFwiYXBwbHlCaW5kaW5nc1wiIHRvIGFzc29jaWF0ZSBiaW5kaW5nQ29udGV4dCB3aXRoIHRoaXMgbm9kZSBhbmQgdG8gYWN0aXZhdGUgYW55IG5vbi1tZW1vaXplZCBiaW5kaW5nc1xuICAgICAgICAvLyAoMikgVW5tZW1vaXplcyBhbnkgbWVtb3MgaW4gdGhlIERPTSBzdWJ0cmVlIChlLmcuLCB0byBhY3RpdmF0ZSBiaW5kaW5ncyB0aGF0IGhhZCBiZWVuIG1lbW9pemVkIGR1cmluZyB0ZW1wbGF0ZSByZXdyaXRpbmcpXG5cbiAgICAgICAgaWYgKGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gY29udGludW91c05vZGVBcnJheVswXSxcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGNvbnRpbnVvdXNOb2RlQXJyYXlbY29udGludW91c05vZGVBcnJheS5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gZmlyc3ROb2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10sXG4gICAgICAgICAgICAgICAgcHJlcHJvY2Vzc05vZGUgPSBwcm92aWRlclsncHJlcHJvY2Vzc05vZGUnXTtcblxuICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NOb2RlKSB7XG4gICAgICAgICAgICAgICAgaW52b2tlRm9yRWFjaE5vZGVJbkNvbnRpbnVvdXNSYW5nZShmaXJzdE5vZGUsIGxhc3ROb2RlLCBmdW5jdGlvbihub2RlLCBuZXh0Tm9kZUluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVQcmV2aW91c1NpYmxpbmcgPSBub2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld05vZGVzID0gcHJlcHJvY2Vzc05vZGUuY2FsbChwcm92aWRlciwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGZpcnN0Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5vZGUgPSBuZXdOb2Rlc1swXSB8fCBuZXh0Tm9kZUluUmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gbGFzdE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBuZXdOb2Rlc1tuZXdOb2Rlcy5sZW5ndGggLSAxXSB8fCBub2RlUHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHByZXByb2Nlc3NOb2RlIGNhbiBjaGFuZ2UgdGhlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIGZpcnN0IGFuZCBsYXN0IG5vZGVzLCB1cGRhdGUgY29udGludW91c05vZGVBcnJheSB0byBtYXRjaC5cbiAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRoZSBmdWxsIHNldCwgaW5jbHVkaW5nIGlubmVyIG5vZGVzLCBiZWNhdXNlIHRoZSB1bm1lbW9pemUgc3RlcCBtaWdodCByZW1vdmUgdGhlIGZpcnN0IG5vZGUgKGFuZCBzbyB0aGUgcmVhbFxuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG5vZGUgbmVlZHMgdG8gYmUgaW4gdGhlIGFycmF5KS5cbiAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdE5vZGUpIHsgLy8gcHJlcHJvY2Vzc05vZGUgbWlnaHQgaGF2ZSByZW1vdmVkIGFsbCB0aGUgbm9kZXMsIGluIHdoaWNoIGNhc2UgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmlyc3ROb2RlID09PSBsYXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5LnB1c2goZmlyc3ROb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5LnB1c2goZmlyc3ROb2RlLCBsYXN0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShjb250aW51b3VzTm9kZUFycmF5LCBwYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE5lZWQgdG8gYXBwbHlCaW5kaW5ncyAqYmVmb3JlKiB1bm1lbW96aWF0aW9uLCBiZWNhdXNlIHVubWVtb2l6YXRpb24gbWlnaHQgaW50cm9kdWNlIGV4dHJhIG5vZGVzICh0aGF0IHdlIGRvbid0IHdhbnQgdG8gcmUtYmluZClcbiAgICAgICAgICAgIC8vIHdoZXJlYXMgYSByZWd1bGFyIGFwcGx5QmluZGluZ3Mgd29uJ3QgaW50cm9kdWNlIG5ldyBtZW1vaXplZCBub2Rlc1xuICAgICAgICAgICAgaW52b2tlRm9yRWFjaE5vZGVJbkNvbnRpbnVvdXNSYW5nZShmaXJzdE5vZGUsIGxhc3ROb2RlLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gOClcbiAgICAgICAgICAgICAgICAgICAga28uYXBwbHlCaW5kaW5ncyhiaW5kaW5nQ29udGV4dCwgbm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlSW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cyhub2RlLCBbYmluZGluZ0NvbnRleHRdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgYW55IGNoYW5nZXMgZG9uZSBieSBhcHBseUJpbmRpbmdzIG9yIHVubWVtb2l6ZSBhcmUgcmVmbGVjdGVkIGluIHRoZSBhcnJheVxuICAgICAgICAgICAga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KGNvbnRpbnVvdXNOb2RlQXJyYXksIHBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkobm9kZU9yTm9kZUFycmF5KSB7XG4gICAgICAgIHJldHVybiBub2RlT3JOb2RlQXJyYXkubm9kZVR5cGUgPyBub2RlT3JOb2RlQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vZGVPck5vZGVBcnJheS5sZW5ndGggPiAwID8gbm9kZU9yTm9kZUFycmF5WzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZSh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUsIHRlbXBsYXRlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGZpcnN0VGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGVPck5vZGVBcnJheSAmJiBnZXRGaXJzdE5vZGVGcm9tUG9zc2libGVBcnJheSh0YXJnZXROb2RlT3JOb2RlQXJyYXkpO1xuICAgICAgICB2YXIgdGVtcGxhdGVEb2N1bWVudCA9IChmaXJzdFRhcmdldE5vZGUgfHwgdGVtcGxhdGUgfHwge30pLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciB0ZW1wbGF0ZUVuZ2luZVRvVXNlID0gKG9wdGlvbnNbJ3RlbXBsYXRlRW5naW5lJ10gfHwgX3RlbXBsYXRlRW5naW5lKTtcbiAgICAgICAga28udGVtcGxhdGVSZXdyaXRpbmcuZW5zdXJlVGVtcGxhdGVJc1Jld3JpdHRlbih0ZW1wbGF0ZSwgdGVtcGxhdGVFbmdpbmVUb1VzZSwgdGVtcGxhdGVEb2N1bWVudCk7XG4gICAgICAgIHZhciByZW5kZXJlZE5vZGVzQXJyYXkgPSB0ZW1wbGF0ZUVuZ2luZVRvVXNlWydyZW5kZXJUZW1wbGF0ZSddKHRlbXBsYXRlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCk7XG5cbiAgICAgICAgLy8gTG9vc2VseSBjaGVjayByZXN1bHQgaXMgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gICAgICAgIGlmICgodHlwZW9mIHJlbmRlcmVkTm9kZXNBcnJheS5sZW5ndGggIT0gXCJudW1iZXJcIikgfHwgKHJlbmRlcmVkTm9kZXNBcnJheS5sZW5ndGggPiAwICYmIHR5cGVvZiByZW5kZXJlZE5vZGVzQXJyYXlbMF0ubm9kZVR5cGUgIT0gXCJudW1iZXJcIikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpO1xuXG4gICAgICAgIHZhciBoYXZlQWRkZWROb2Rlc1RvUGFyZW50ID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAocmVuZGVyTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOlxuICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4odGFyZ2V0Tm9kZU9yTm9kZUFycmF5LCByZW5kZXJlZE5vZGVzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGhhdmVBZGRlZE5vZGVzVG9QYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlcGxhY2VOb2RlXCI6XG4gICAgICAgICAgICAgICAga28udXRpbHMucmVwbGFjZURvbU5vZGVzKHRhcmdldE5vZGVPck5vZGVBcnJheSwgcmVuZGVyZWROb2Rlc0FycmF5KTtcbiAgICAgICAgICAgICAgICBoYXZlQWRkZWROb2Rlc1RvUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpZ25vcmVUYXJnZXROb2RlXCI6IGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHJlbmRlck1vZGU6IFwiICsgcmVuZGVyTW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCkge1xuICAgICAgICAgICAgYWN0aXZhdGVCaW5kaW5nc09uQ29udGludW91c05vZGVBcnJheShyZW5kZXJlZE5vZGVzQXJyYXksIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydhZnRlclJlbmRlciddKVxuICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKG9wdGlvbnNbJ2FmdGVyUmVuZGVyJ10sIG51bGwsIFtyZW5kZXJlZE5vZGVzQXJyYXksIGJpbmRpbmdDb250ZXh0WyckZGF0YSddXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyZWROb2Rlc0FycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVUZW1wbGF0ZU5hbWUodGVtcGxhdGUsIGRhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgLy8gVGhlIHRlbXBsYXRlIGNhbiBiZSBzcGVjaWZpZWQgYXM6XG4gICAgICAgIGlmIChrby5pc09ic2VydmFibGUodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAvLyAxLiBBbiBvYnNlcnZhYmxlLCB3aXRoIHN0cmluZyB2YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyAyLiBBIGZ1bmN0aW9uIG9mIChkYXRhLCBjb250ZXh0KSByZXR1cm5pbmcgYSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShkYXRhLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIDMuIEEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrby5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZGF0YU9yQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRhcmdldE5vZGVPck5vZGVBcnJheSwgcmVuZGVyTW9kZSkge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgaWYgKChvcHRpb25zWyd0ZW1wbGF0ZUVuZ2luZSddIHx8IF90ZW1wbGF0ZUVuZ2luZSkgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2V0IGEgdGVtcGxhdGUgZW5naW5lIGJlZm9yZSBjYWxsaW5nIHJlbmRlclRlbXBsYXRlXCIpO1xuICAgICAgICByZW5kZXJNb2RlID0gcmVuZGVyTW9kZSB8fCBcInJlcGxhY2VDaGlsZHJlblwiO1xuXG4gICAgICAgIGlmICh0YXJnZXROb2RlT3JOb2RlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdFRhcmdldE5vZGUgPSBnZXRGaXJzdE5vZGVGcm9tUG9zc2libGVBcnJheSh0YXJnZXROb2RlT3JOb2RlQXJyYXkpO1xuXG4gICAgICAgICAgICB2YXIgd2hlblRvRGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICghZmlyc3RUYXJnZXROb2RlKSB8fCAha28udXRpbHMuZG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KGZpcnN0VGFyZ2V0Tm9kZSk7IH07IC8vIFBhc3NpdmUgZGlzcG9zYWwgKG9uIG5leHQgZXZhbHVhdGlvbilcbiAgICAgICAgICAgIHZhciBhY3RpdmVseURpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCA9IChmaXJzdFRhcmdldE5vZGUgJiYgcmVuZGVyTW9kZSA9PSBcInJlcGxhY2VOb2RlXCIpID8gZmlyc3RUYXJnZXROb2RlLnBhcmVudE5vZGUgOiBmaXJzdFRhcmdldE5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKCAvLyBTbyB0aGUgRE9NIGlzIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB3aGVuIGFueSBkZXBlbmRlbmN5IGNoYW5nZXNcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB3ZSd2ZSBnb3QgYSBwcm9wZXIgYmluZGluZyBjb250ZXh0IHRvIHdvcmsgd2l0aFxuICAgICAgICAgICAgICAgICAgICB2YXIgYmluZGluZ0NvbnRleHQgPSAoZGF0YU9yQmluZGluZ0NvbnRleHQgJiYgKGRhdGFPckJpbmRpbmdDb250ZXh0IGluc3RhbmNlb2Yga28uYmluZGluZ0NvbnRleHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhT3JCaW5kaW5nQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcga28uYmluZGluZ0NvbnRleHQoZGF0YU9yQmluZGluZ0NvbnRleHQsIG51bGwsIG51bGwsIG51bGwsIHsgXCJleHBvcnREZXBlbmRlbmNpZXNcIjogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVOYW1lID0gcmVzb2x2ZVRlbXBsYXRlTmFtZSh0ZW1wbGF0ZSwgYmluZGluZ0NvbnRleHRbJyRkYXRhJ10sIGJpbmRpbmdDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkTm9kZXNBcnJheSA9IGV4ZWN1dGVUZW1wbGF0ZSh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUsIHRlbXBsYXRlTmFtZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJNb2RlID09IFwicmVwbGFjZU5vZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZU9yTm9kZUFycmF5ID0gcmVuZGVyZWROb2Rlc0FycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RUYXJnZXROb2RlID0gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB7IGRpc3Bvc2VXaGVuOiB3aGVuVG9EaXNwb3NlLCBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGFjdGl2ZWx5RGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCB5ZXQgaGF2ZSBhIERPTSBub2RlIHRvIGV2YWx1YXRlLCBzbyB1c2UgYSBtZW1vIGFuZCByZW5kZXIgdGhlIHRlbXBsYXRlIGxhdGVyIHdoZW4gdGhlcmUgaXMgYSBET00gbm9kZVxuICAgICAgICAgICAgcmV0dXJuIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoZnVuY3Rpb24gKGRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBrby5yZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YU9yQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIGRvbU5vZGUsIFwicmVwbGFjZU5vZGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBrby5yZW5kZXJUZW1wbGF0ZUZvckVhY2ggPSBmdW5jdGlvbiAodGVtcGxhdGUsIGFycmF5T3JPYnNlcnZhYmxlQXJyYXksIG9wdGlvbnMsIHRhcmdldE5vZGUsIHBhcmVudEJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIC8vIFNpbmNlIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgYWx3YXlzIGNhbGxzIGV4ZWN1dGVUZW1wbGF0ZUZvckFycmF5SXRlbSBhbmQgdGhlblxuICAgICAgICAvLyBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2sgZm9yIGFkZGVkIGl0ZW1zLCB3ZSBjYW4gc3RvcmUgdGhlIGJpbmRpbmcgY29udGV4dCBpbiB0aGUgZm9ybWVyIHRvIHVzZSBpbiB0aGUgbGF0dGVyLlxuICAgICAgICB2YXIgYXJyYXlJdGVtQ29udGV4dDtcblxuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgdG8gZ2V0IHRoZSBub2RlcyB0byBhZGQgdG8gdGFyZ2V0Tm9kZVxuICAgICAgICB2YXIgZXhlY3V0ZVRlbXBsYXRlRm9yQXJyYXlJdGVtID0gZnVuY3Rpb24gKGFycmF5VmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAvLyBTdXBwb3J0IHNlbGVjdGluZyB0ZW1wbGF0ZSBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkYXRhIGJlaW5nIHJlbmRlcmVkXG4gICAgICAgICAgICBhcnJheUl0ZW1Db250ZXh0ID0gcGFyZW50QmluZGluZ0NvbnRleHRbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGFycmF5VmFsdWUsIG9wdGlvbnNbJ2FzJ10sIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0WyckaW5kZXgnXSA9IGluZGV4O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5hbWUgPSByZXNvbHZlVGVtcGxhdGVOYW1lKHRlbXBsYXRlLCBhcnJheVZhbHVlLCBhcnJheUl0ZW1Db250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBleGVjdXRlVGVtcGxhdGUobnVsbCwgXCJpZ25vcmVUYXJnZXROb2RlXCIsIHRlbXBsYXRlTmFtZSwgYXJyYXlJdGVtQ29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgaGFzIGFkZGVkIG5vZGVzIHRvIHRhcmdldE5vZGVcbiAgICAgICAgdmFyIGFjdGl2YXRlQmluZGluZ3NDYWxsYmFjayA9IGZ1bmN0aW9uKGFycmF5VmFsdWUsIGFkZGVkTm9kZXNBcnJheSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkoYWRkZWROb2Rlc0FycmF5LCBhcnJheUl0ZW1Db250ZXh0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydhZnRlclJlbmRlciddKVxuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ2FmdGVyUmVuZGVyJ10oYWRkZWROb2Rlc0FycmF5LCBhcnJheVZhbHVlKTtcblxuICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUgXCJjYWNoZVwiIHZhcmlhYmxlLCBzbyB0aGF0IGl0IGNhbiBiZSBjb2xsZWN0ZWQgYnlcbiAgICAgICAgICAgIC8vIHRoZSBHQyB3aGVuIGl0cyB2YWx1ZSBpc24ndCB1c2VkIGZyb20gd2l0aGluIHRoZSBiaW5kaW5ncyBhbnltb3JlLlxuICAgICAgICAgICAgYXJyYXlJdGVtQ29udGV4dCA9IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGtvLmRlcGVuZGVudE9ic2VydmFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVud3JhcHBlZEFycmF5ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhcnJheU9yT2JzZXJ2YWJsZUFycmF5KSB8fCBbXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW53cmFwcGVkQXJyYXkubGVuZ3RoID09IFwidW5kZWZpbmVkXCIpIC8vIENvZXJjZSBzaW5nbGUgdmFsdWUgaW50byBhcnJheVxuICAgICAgICAgICAgICAgIHVud3JhcHBlZEFycmF5ID0gW3Vud3JhcHBlZEFycmF5XTtcblxuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBhbnkgZW50cmllcyBtYXJrZWQgYXMgZGVzdHJveWVkXG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRBcnJheSA9IGtvLnV0aWxzLmFycmF5RmlsdGVyKHVud3JhcHBlZEFycmF5LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNbJ2luY2x1ZGVEZXN0cm95ZWQnXSB8fCBpdGVtID09PSB1bmRlZmluZWQgfHwgaXRlbSA9PT0gbnVsbCB8fCAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShpdGVtWydfZGVzdHJveSddKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcsIGlnbm9yaW5nIGFueSBvYnNlcnZhYmxlcyB1bndyYXBwZWQgd2l0aGluIChtb3N0IGxpa2VseSBmcm9tIGEgY2FsbGJhY2sgZnVuY3Rpb24pLlxuICAgICAgICAgICAgLy8gSWYgdGhlIGFycmF5IGl0ZW1zIGFyZSBvYnNlcnZhYmxlcywgdGhvdWdoLCB0aGV5IHdpbGwgYmUgdW53cmFwcGVkIGluIGV4ZWN1dGVUZW1wbGF0ZUZvckFycmF5SXRlbSBhbmQgbWFuYWdlZCB3aXRoaW4gc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZy5cbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcsIG51bGwsIFt0YXJnZXROb2RlLCBmaWx0ZXJlZEFycmF5LCBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0sIG9wdGlvbnMsIGFjdGl2YXRlQmluZGluZ3NDYWxsYmFja10pO1xuXG4gICAgICAgIH0sIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiB0YXJnZXROb2RlIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdGVtcGxhdGVDb21wdXRlZERvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTtcbiAgICBmdW5jdGlvbiBkaXNwb3NlT2xkQ29tcHV0ZWRBbmRTdG9yZU5ld09uZShlbGVtZW50LCBuZXdDb21wdXRlZCkge1xuICAgICAgICB2YXIgb2xkQ29tcHV0ZWQgPSBrby51dGlscy5kb21EYXRhLmdldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSk7XG4gICAgICAgIGlmIChvbGRDb21wdXRlZCAmJiAodHlwZW9mKG9sZENvbXB1dGVkLmRpc3Bvc2UpID09ICdmdW5jdGlvbicpKVxuICAgICAgICAgICAgb2xkQ29tcHV0ZWQuZGlzcG9zZSgpO1xuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSwgKG5ld0NvbXB1dGVkICYmIG5ld0NvbXB1dGVkLmlzQWN0aXZlKCkpID8gbmV3Q29tcHV0ZWQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXSA9IHtcbiAgICAgICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgICAgICAvLyBTdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXNcbiAgICAgICAgICAgIHZhciBiaW5kaW5nVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmdWYWx1ZSA9PSBcInN0cmluZ1wiIHx8IGJpbmRpbmdWYWx1ZVsnbmFtZSddKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhIG5hbWVkIHRlbXBsYXRlIC0gY2xlYXIgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgnbm9kZXMnIGluIGJpbmRpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGJlZW4gZ2l2ZW4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzLiBTYXZlIHRoZW0gYXMgdGhlIHRlbXBsYXRlIHNvdXJjZS5cbiAgICAgICAgICAgICAgICAvLyBUaGVyZSBpcyBubyBrbm93biB1c2UgY2FzZSBmb3IgdGhlIG5vZGUgYXJyYXkgYmVpbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSAoaWYgdGhlIG91dHB1dFxuICAgICAgICAgICAgICAgIC8vIHZhcmllcywgcHV0IHRoYXQgYmVoYXZpb3IgKmludG8qIHlvdXIgdGVtcGxhdGUgLSB0aGF0J3Mgd2hhdCB0ZW1wbGF0ZXMgYXJlIGZvciksIGFuZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBpbXBsZW1lbnRhdGlvbiB3b3VsZCBiZSBhIG1lc3MsIHNvIGFzc2VydCB0aGF0IGl0J3Mgbm90IG9ic2VydmFibGUuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gYmluZGluZ1ZhbHVlWydub2RlcyddIHx8IFtdO1xuICAgICAgICAgICAgICAgIGlmIChrby5pc09ic2VydmFibGUobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIFwibm9kZXNcIiBvcHRpb24gbXVzdCBiZSBhIHBsYWluLCBub24tb2JzZXJ2YWJsZSBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGtvLnV0aWxzLm1vdmVDbGVhbmVkTm9kZXNUb0NvbnRhaW5lckVsZW1lbnQobm9kZXMpOyAvLyBUaGlzIGFsc28gcmVtb3ZlcyB0aGUgbm9kZXMgZnJvbSB0aGVpciBjdXJyZW50IHBhcmVudFxuICAgICAgICAgICAgICAgIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUoZWxlbWVudClbJ25vZGVzJ10oY29udGFpbmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhbiBhbm9ueW1vdXMgdGVtcGxhdGUgLSBzdG9yZSB0aGUgZWxlbWVudCBjb250ZW50cywgdGhlbiBjbGVhciB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5vZGVzID0ga28udmlydHVhbEVsZW1lbnRzLmNoaWxkTm9kZXMoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGtvLnV0aWxzLm1vdmVDbGVhbmVkTm9kZXNUb0NvbnRhaW5lckVsZW1lbnQodGVtcGxhdGVOb2Rlcyk7IC8vIFRoaXMgYWxzbyByZW1vdmVzIHRoZSBub2RlcyBmcm9tIHRoZWlyIGN1cnJlbnQgcGFyZW50XG4gICAgICAgICAgICAgICAgbmV3IGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZShlbGVtZW50KVsnbm9kZXMnXShjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgICAgICB9LFxuICAgICAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWUpLFxuICAgICAgICAgICAgICAgIHNob3VsZERpc3BsYXkgPSB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29tcHV0ZWQgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IG9wdGlvbnNbJ25hbWUnXTtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgXCJpZlwiL1wiaWZub3RcIiBjb25kaXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKCdpZicgaW4gb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uc1snaWYnXSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZERpc3BsYXkgJiYgJ2lmbm90JyBpbiBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uc1snaWZub3QnXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnZm9yZWFjaCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBvbmNlIGZvciBlYWNoIGRhdGEgcG9pbnQgKHRyZWF0aW5nIGRhdGEgc2V0IGFzIGVtcHR5IGlmIHNob3VsZERpc3BsYXk9PWZhbHNlKVxuICAgICAgICAgICAgICAgIHZhciBkYXRhQXJyYXkgPSAoc2hvdWxkRGlzcGxheSAmJiBvcHRpb25zWydmb3JlYWNoJ10pIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29tcHV0ZWQgPSBrby5yZW5kZXJUZW1wbGF0ZUZvckVhY2godGVtcGxhdGVOYW1lIHx8IGVsZW1lbnQsIGRhdGFBcnJheSwgb3B0aW9ucywgZWxlbWVudCwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkRGlzcGxheSkge1xuICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBvbmNlIGZvciB0aGlzIHNpbmdsZSBkYXRhIHBvaW50IChvciB1c2UgdGhlIHZpZXdNb2RlbCBpZiBubyBkYXRhIHdhcyBwcm92aWRlZClcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJCaW5kaW5nQ29udGV4dCA9ICgnZGF0YScgaW4gb3B0aW9ucykgP1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nQ29udGV4dC5jcmVhdGVTdGF0aWNDaGlsZENvbnRleHQob3B0aW9uc1snZGF0YSddLCBvcHRpb25zWydhcyddKSA6ICAvLyBHaXZlbiBhbiBleHBsaXRpdCAnZGF0YScgdmFsdWUsIHdlIGNyZWF0ZSBhIGNoaWxkIGJpbmRpbmcgY29udGV4dCBmb3IgaXRcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZ0NvbnRleHQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHaXZlbiBubyBleHBsaWNpdCAnZGF0YScgdmFsdWUsIHdlIHJldGFpbiB0aGUgc2FtZSBiaW5kaW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbXB1dGVkID0ga28ucmVuZGVyVGVtcGxhdGUodGVtcGxhdGVOYW1lIHx8IGVsZW1lbnQsIGlubmVyQmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIGhhdmUgYSBzaW5nbGUgdGVtcGxhdGUgY29tcHV0ZWQgcGVyIGVsZW1lbnQgKG90aGVyd2lzZSB3aGljaCBvbmUgc2hvdWxkIGhhdmUgaXRzIG91dHB1dCBkaXNwbGF5ZWQ/KVxuICAgICAgICAgICAgZGlzcG9zZU9sZENvbXB1dGVkQW5kU3RvcmVOZXdPbmUoZWxlbWVudCwgdGVtcGxhdGVDb21wdXRlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQW5vbnltb3VzIHRlbXBsYXRlcyBjYW4ndCBiZSByZXdyaXR0ZW4uIEdpdmUgYSBuaWNlIGVycm9yIG1lc3NhZ2UgaWYgeW91IHRyeSB0byBkbyBpdC5cbiAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1sndGVtcGxhdGUnXSA9IGZ1bmN0aW9uKGJpbmRpbmdWYWx1ZSkge1xuICAgICAgICB2YXIgcGFyc2VkQmluZGluZ1ZhbHVlID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwoYmluZGluZ1ZhbHVlKTtcblxuICAgICAgICBpZiAoKHBhcnNlZEJpbmRpbmdWYWx1ZS5sZW5ndGggPT0gMSkgJiYgcGFyc2VkQmluZGluZ1ZhbHVlWzBdWyd1bmtub3duJ10pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gSXQgbG9va3MgbGlrZSBhIHN0cmluZyBsaXRlcmFsLCBub3QgYW4gb2JqZWN0IGxpdGVyYWwsIHNvIHRyZWF0IGl0IGFzIGEgbmFtZWQgdGVtcGxhdGUgKHdoaWNoIGlzIGFsbG93ZWQgZm9yIHJld3JpdGluZylcblxuICAgICAgICBpZiAoa28uZXhwcmVzc2lvblJld3JpdGluZy5rZXlWYWx1ZUFycmF5Q29udGFpbnNLZXkocGFyc2VkQmluZGluZ1ZhbHVlLCBcIm5hbWVcIikpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTmFtZWQgdGVtcGxhdGVzIGNhbiBiZSByZXdyaXR0ZW4sIHNvIHJldHVybiBcIm5vIGVycm9yXCJcbiAgICAgICAgcmV0dXJuIFwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiO1xuICAgIH07XG5cbiAgICBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzWyd0ZW1wbGF0ZSddID0gdHJ1ZTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnc2V0VGVtcGxhdGVFbmdpbmUnLCBrby5zZXRUZW1wbGF0ZUVuZ2luZSk7XG5rby5leHBvcnRTeW1ib2woJ3JlbmRlclRlbXBsYXRlJywga28ucmVuZGVyVGVtcGxhdGUpO1xuLy8gR28gdGhyb3VnaCB0aGUgaXRlbXMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgYW5kIGRlbGV0ZWQgYW5kIHRyeSB0byBmaW5kIG1hdGNoZXMgYmV0d2VlbiB0aGVtLlxua28udXRpbHMuZmluZE1vdmVzSW5BcnJheUNvbXBhcmlzb24gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIGxpbWl0RmFpbGVkQ29tcGFyZXMpIHtcbiAgICBpZiAobGVmdC5sZW5ndGggJiYgcmlnaHQubGVuZ3RoKSB7XG4gICAgICAgIHZhciBmYWlsZWRDb21wYXJlcywgbCwgciwgbGVmdEl0ZW0sIHJpZ2h0SXRlbTtcbiAgICAgICAgZm9yIChmYWlsZWRDb21wYXJlcyA9IGwgPSAwOyAoIWxpbWl0RmFpbGVkQ29tcGFyZXMgfHwgZmFpbGVkQ29tcGFyZXMgPCBsaW1pdEZhaWxlZENvbXBhcmVzKSAmJiAobGVmdEl0ZW0gPSBsZWZ0W2xdKTsgKytsKSB7XG4gICAgICAgICAgICBmb3IgKHIgPSAwOyByaWdodEl0ZW0gPSByaWdodFtyXTsgKytyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlZnRJdGVtWyd2YWx1ZSddID09PSByaWdodEl0ZW1bJ3ZhbHVlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEl0ZW1bJ21vdmVkJ10gPSByaWdodEl0ZW1bJ2luZGV4J107XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0SXRlbVsnbW92ZWQnXSA9IGxlZnRJdGVtWydpbmRleCddO1xuICAgICAgICAgICAgICAgICAgICByaWdodC5zcGxpY2UociwgMSk7ICAgICAgICAgLy8gVGhpcyBpdGVtIGlzIG1hcmtlZCBhcyBtb3ZlZDsgc28gcmVtb3ZlIGl0IGZyb20gcmlnaHQgbGlzdFxuICAgICAgICAgICAgICAgICAgICBmYWlsZWRDb21wYXJlcyA9IHIgPSAwOyAgICAgLy8gUmVzZXQgZmFpbGVkIGNvbXBhcmVzIGNvdW50IGJlY2F1c2Ugd2UncmUgY2hlY2tpbmcgZm9yIGNvbnNlY3V0aXZlIGZhaWx1cmVzXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZhaWxlZENvbXBhcmVzICs9IHI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5rby51dGlscy5jb21wYXJlQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzTm90SW5PbGQgPSAnYWRkZWQnLCBzdGF0dXNOb3RJbk5ldyA9ICdkZWxldGVkJztcblxuICAgIC8vIFNpbXBsZSBjYWxjdWxhdGlvbiBiYXNlZCBvbiBMZXZlbnNodGVpbiBkaXN0YW5jZS5cbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKG9sZEFycmF5LCBuZXdBcnJheSwgb3B0aW9ucykge1xuICAgICAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgaWYgdGhlIHRoaXJkIGFyZyBpcyBhY3R1YWxseSBhIGJvb2wsIGludGVycHJldFxuICAgICAgICAvLyBpdCBhcyB0aGUgb2xkIHBhcmFtZXRlciAnZG9udExpbWl0TW92ZXMnLiBOZXdlciBjb2RlIHNob3VsZCB1c2UgeyBkb250TGltaXRNb3ZlczogdHJ1ZSB9LlxuICAgICAgICBvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpID8geyAnZG9udExpbWl0TW92ZXMnOiBvcHRpb25zIH0gOiAob3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIG9sZEFycmF5ID0gb2xkQXJyYXkgfHwgW107XG4gICAgICAgIG5ld0FycmF5ID0gbmV3QXJyYXkgfHwgW107XG5cbiAgICAgICAgaWYgKG9sZEFycmF5Lmxlbmd0aCA8IG5ld0FycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlU21hbGxBcnJheVRvQmlnQXJyYXkob2xkQXJyYXksIG5ld0FycmF5LCBzdGF0dXNOb3RJbk9sZCwgc3RhdHVzTm90SW5OZXcsIG9wdGlvbnMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KG5ld0FycmF5LCBvbGRBcnJheSwgc3RhdHVzTm90SW5OZXcsIHN0YXR1c05vdEluT2xkLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlU21hbGxBcnJheVRvQmlnQXJyYXkoc21sQXJyYXksIGJpZ0FycmF5LCBzdGF0dXNOb3RJblNtbCwgc3RhdHVzTm90SW5CaWcsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG15TWluID0gTWF0aC5taW4sXG4gICAgICAgICAgICBteU1heCA9IE1hdGgubWF4LFxuICAgICAgICAgICAgZWRpdERpc3RhbmNlTWF0cml4ID0gW10sXG4gICAgICAgICAgICBzbWxJbmRleCwgc21sSW5kZXhNYXggPSBzbWxBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBiaWdJbmRleCwgYmlnSW5kZXhNYXggPSBiaWdBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBjb21wYXJlUmFuZ2UgPSAoYmlnSW5kZXhNYXggLSBzbWxJbmRleE1heCkgfHwgMSxcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gc21sSW5kZXhNYXggKyBiaWdJbmRleE1heCArIDEsXG4gICAgICAgICAgICB0aGlzUm93LCBsYXN0Um93LFxuICAgICAgICAgICAgYmlnSW5kZXhNYXhGb3JSb3csIGJpZ0luZGV4TWluRm9yUm93O1xuXG4gICAgICAgIGZvciAoc21sSW5kZXggPSAwOyBzbWxJbmRleCA8PSBzbWxJbmRleE1heDsgc21sSW5kZXgrKykge1xuICAgICAgICAgICAgbGFzdFJvdyA9IHRoaXNSb3c7XG4gICAgICAgICAgICBlZGl0RGlzdGFuY2VNYXRyaXgucHVzaCh0aGlzUm93ID0gW10pO1xuICAgICAgICAgICAgYmlnSW5kZXhNYXhGb3JSb3cgPSBteU1pbihiaWdJbmRleE1heCwgc21sSW5kZXggKyBjb21wYXJlUmFuZ2UpO1xuICAgICAgICAgICAgYmlnSW5kZXhNaW5Gb3JSb3cgPSBteU1heCgwLCBzbWxJbmRleCAtIDEpO1xuICAgICAgICAgICAgZm9yIChiaWdJbmRleCA9IGJpZ0luZGV4TWluRm9yUm93OyBiaWdJbmRleCA8PSBiaWdJbmRleE1heEZvclJvdzsgYmlnSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmICghYmlnSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gc21sSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzbWxJbmRleCkgIC8vIFRvcCByb3cgLSB0cmFuc2Zvcm0gZW1wdHkgYXJyYXkgaW50byBuZXcgYXJyYXkgdmlhIGFkZGl0aW9uc1xuICAgICAgICAgICAgICAgICAgICB0aGlzUm93W2JpZ0luZGV4XSA9IGJpZ0luZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbWxBcnJheVtzbWxJbmRleCAtIDFdID09PSBiaWdBcnJheVtiaWdJbmRleCAtIDFdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzUm93W2JpZ0luZGV4XSA9IGxhc3RSb3dbYmlnSW5kZXggLSAxXTsgICAgICAgICAgICAgICAgICAvLyBjb3B5IHZhbHVlIChubyBlZGl0KVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9ydGhEaXN0YW5jZSA9IGxhc3RSb3dbYmlnSW5kZXhdIHx8IG1heERpc3RhbmNlOyAgICAgICAvLyBub3QgaW4gYmlnIChkZWxldGlvbilcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdlc3REaXN0YW5jZSA9IHRoaXNSb3dbYmlnSW5kZXggLSAxXSB8fCBtYXhEaXN0YW5jZTsgICAgLy8gbm90IGluIHNtYWxsIChhZGRpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Jvd1tiaWdJbmRleF0gPSBteU1pbihub3J0aERpc3RhbmNlLCB3ZXN0RGlzdGFuY2UpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWRpdFNjcmlwdCA9IFtdLCBtZU1pbnVzT25lLCBub3RJblNtbCA9IFtdLCBub3RJbkJpZyA9IFtdO1xuICAgICAgICBmb3IgKHNtbEluZGV4ID0gc21sSW5kZXhNYXgsIGJpZ0luZGV4ID0gYmlnSW5kZXhNYXg7IHNtbEluZGV4IHx8IGJpZ0luZGV4Oykge1xuICAgICAgICAgICAgbWVNaW51c09uZSA9IGVkaXREaXN0YW5jZU1hdHJpeFtzbWxJbmRleF1bYmlnSW5kZXhdIC0gMTtcbiAgICAgICAgICAgIGlmIChiaWdJbmRleCAmJiBtZU1pbnVzT25lID09PSBlZGl0RGlzdGFuY2VNYXRyaXhbc21sSW5kZXhdW2JpZ0luZGV4LTFdKSB7XG4gICAgICAgICAgICAgICAgbm90SW5TbWwucHVzaChlZGl0U2NyaXB0W2VkaXRTY3JpcHQubGVuZ3RoXSA9IHsgICAgIC8vIGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICdzdGF0dXMnOiBzdGF0dXNOb3RJblNtbCxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogYmlnQXJyYXlbLS1iaWdJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IGJpZ0luZGV4IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzbWxJbmRleCAmJiBtZU1pbnVzT25lID09PSBlZGl0RGlzdGFuY2VNYXRyaXhbc21sSW5kZXggLSAxXVtiaWdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBub3RJbkJpZy5wdXNoKGVkaXRTY3JpcHRbZWRpdFNjcmlwdC5sZW5ndGhdID0geyAgICAgLy8gZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJzogc3RhdHVzTm90SW5CaWcsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHNtbEFycmF5Wy0tc21sSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiBzbWxJbmRleCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLS1iaWdJbmRleDtcbiAgICAgICAgICAgICAgICAtLXNtbEluZGV4O1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uc1snc3BhcnNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdFNjcmlwdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0dXMnOiBcInJldGFpbmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBiaWdBcnJheVtiaWdJbmRleF0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGEgbGltaXQgb24gdGhlIG51bWJlciBvZiBjb25zZWN1dGl2ZSBub24tbWF0Y2hpbmcgY29tcGFyaXNvbnM7IGhhdmluZyBpdCBhIG11bHRpcGxlIG9mXG4gICAgICAgIC8vIHNtbEluZGV4TWF4IGtlZXBzIHRoZSB0aW1lIGNvbXBsZXhpdHkgb2YgdGhpcyBhbGdvcml0aG0gbGluZWFyLlxuICAgICAgICBrby51dGlscy5maW5kTW92ZXNJbkFycmF5Q29tcGFyaXNvbihub3RJbkJpZywgbm90SW5TbWwsICFvcHRpb25zWydkb250TGltaXRNb3ZlcyddICYmIHNtbEluZGV4TWF4ICogMTApO1xuXG4gICAgICAgIHJldHVybiBlZGl0U2NyaXB0LnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZUFycmF5cztcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuY29tcGFyZUFycmF5cycsIGtvLnV0aWxzLmNvbXBhcmVBcnJheXMpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBPYmplY3RpdmU6XG4gICAgLy8gKiBHaXZlbiBhbiBpbnB1dCBhcnJheSwgYSBjb250YWluZXIgRE9NIG5vZGUsIGFuZCBhIGZ1bmN0aW9uIGZyb20gYXJyYXkgZWxlbWVudHMgdG8gYXJyYXlzIG9mIERPTSBub2RlcyxcbiAgICAvLyAgIG1hcCB0aGUgYXJyYXkgZWxlbWVudHMgdG8gYXJyYXlzIG9mIERPTSBub2RlcywgY29uY2F0ZW5hdGUgdG9nZXRoZXIgYWxsIHRoZXNlIGFycmF5cywgYW5kIHVzZSB0aGVtIHRvIHBvcHVsYXRlIHRoZSBjb250YWluZXIgRE9NIG5vZGVcbiAgICAvLyAqIE5leHQgdGltZSB3ZSdyZSBnaXZlbiB0aGUgc2FtZSBjb21iaW5hdGlvbiBvZiB0aGluZ3MgKHdpdGggdGhlIGFycmF5IHBvc3NpYmx5IGhhdmluZyBtdXRhdGVkKSwgdXBkYXRlIHRoZSBjb250YWluZXIgRE9NIG5vZGVcbiAgICAvLyAgIHNvIHRoYXQgaXRzIGNoaWxkcmVuIGlzIGFnYWluIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBtYXBwaW5ncyBvZiB0aGUgYXJyYXkgZWxlbWVudHMsIGJ1dCBkb24ndCByZS1tYXAgYW55IGFycmF5IGVsZW1lbnRzIHRoYXQgd2VcbiAgICAvLyAgIHByZXZpb3VzbHkgbWFwcGVkIC0gcmV0YWluIHRob3NlIG5vZGVzLCBhbmQganVzdCBpbnNlcnQvZGVsZXRlIG90aGVyIG9uZXNcblxuICAgIC8vIFwiY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzXCIgd2lsbCBiZSBpbnZva2VkIGFmdGVyIGFueSBcIm1hcHBpbmdcIi1nZW5lcmF0ZWQgbm9kZXMgYXJlIGluc2VydGVkIGludG8gdGhlIGNvbnRhaW5lciBub2RlXG4gICAgLy8gWW91IGNhbiB1c2UgdGhpcywgZm9yIGV4YW1wbGUsIHRvIGFjdGl2YXRlIGJpbmRpbmdzIG9uIHRob3NlIG5vZGVzLlxuXG4gICAgZnVuY3Rpb24gbWFwTm9kZUFuZFJlZnJlc2hXaGVuQ2hhbmdlZChjb250YWluZXJOb2RlLCBtYXBwaW5nLCB2YWx1ZVRvTWFwLCBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMsIGluZGV4KSB7XG4gICAgICAgIC8vIE1hcCB0aGlzIGFycmF5IHZhbHVlIGluc2lkZSBhIGRlcGVuZGVudE9ic2VydmFibGUgc28gd2UgcmUtbWFwIHdoZW4gYW55IGRlcGVuZGVuY3kgY2hhbmdlc1xuICAgICAgICB2YXIgbWFwcGVkTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIGRlcGVuZGVudE9ic2VydmFibGUgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5ld01hcHBlZE5vZGVzID0gbWFwcGluZyh2YWx1ZVRvTWFwLCBpbmRleCwga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KG1hcHBlZE5vZGVzLCBjb250YWluZXJOb2RlKSkgfHwgW107XG5cbiAgICAgICAgICAgIC8vIE9uIHN1YnNlcXVlbnQgZXZhbHVhdGlvbnMsIGp1c3QgcmVwbGFjZSB0aGUgcHJldmlvdXNseS1pbnNlcnRlZCBET00gbm9kZXNcbiAgICAgICAgICAgIGlmIChtYXBwZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMucmVwbGFjZURvbU5vZGVzKG1hcHBlZE5vZGVzLCBuZXdNYXBwZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2RlcylcbiAgICAgICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBudWxsLCBbdmFsdWVUb01hcCwgbmV3TWFwcGVkTm9kZXMsIGluZGV4XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBtYXBwZWROb2RlcyBhcnJheSwgdGhlcmVieSB1cGRhdGluZyB0aGUgcmVjb3JkXG4gICAgICAgICAgICAvLyBvZiB3aGljaCBub2RlcyB3b3VsZCBiZSBkZWxldGVkIGlmIHZhbHVlVG9NYXAgd2FzIGl0c2VsZiBsYXRlciByZW1vdmVkXG4gICAgICAgICAgICBtYXBwZWROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKG1hcHBlZE5vZGVzLCBuZXdNYXBwZWROb2Rlcyk7XG4gICAgICAgIH0sIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBjb250YWluZXJOb2RlLCBkaXNwb3NlV2hlbjogZnVuY3Rpb24oKSB7IHJldHVybiAha28udXRpbHMuYW55RG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KG1hcHBlZE5vZGVzKTsgfSB9KTtcbiAgICAgICAgcmV0dXJuIHsgbWFwcGVkTm9kZXMgOiBtYXBwZWROb2RlcywgZGVwZW5kZW50T2JzZXJ2YWJsZSA6IChkZXBlbmRlbnRPYnNlcnZhYmxlLmlzQWN0aXZlKCkgPyBkZXBlbmRlbnRPYnNlcnZhYmxlIDogdW5kZWZpbmVkKSB9O1xuICAgIH1cblxuICAgIHZhciBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXkgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKSxcbiAgICAgICAgZGVsZXRlZEl0ZW1EdW1teVZhbHVlID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG5cbiAgICBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nID0gZnVuY3Rpb24gKGRvbU5vZGUsIGFycmF5LCBtYXBwaW5nLCBvcHRpb25zLCBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpIHtcbiAgICAgICAgLy8gQ29tcGFyZSB0aGUgcHJvdmlkZWQgYXJyYXkgYWdhaW5zdCB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgaXNGaXJzdEV4ZWN1dGlvbiA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KGRvbU5vZGUsIGxhc3RNYXBwaW5nUmVzdWx0RG9tRGF0YUtleSkgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGxhc3RNYXBwaW5nUmVzdWx0ID0ga28udXRpbHMuZG9tRGF0YS5nZXQoZG9tTm9kZSwgbGFzdE1hcHBpbmdSZXN1bHREb21EYXRhS2V5KSB8fCBbXTtcbiAgICAgICAgdmFyIGxhc3RBcnJheSA9IGtvLnV0aWxzLmFycmF5TWFwKGxhc3RNYXBwaW5nUmVzdWx0LCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5hcnJheUVudHJ5OyB9KTtcbiAgICAgICAgdmFyIGVkaXRTY3JpcHQgPSBrby51dGlscy5jb21wYXJlQXJyYXlzKGxhc3RBcnJheSwgYXJyYXksIG9wdGlvbnNbJ2RvbnRMaW1pdE1vdmVzJ10pO1xuXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuZXcgbWFwcGluZyByZXN1bHRcbiAgICAgICAgdmFyIG5ld01hcHBpbmdSZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGxhc3RNYXBwaW5nUmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB2YXIgbmV3TWFwcGluZ1Jlc3VsdEluZGV4ID0gMDtcblxuICAgICAgICB2YXIgbm9kZXNUb0RlbGV0ZSA9IFtdO1xuICAgICAgICB2YXIgaXRlbXNUb1Byb2Nlc3MgPSBbXTtcbiAgICAgICAgdmFyIGl0ZW1zRm9yQmVmb3JlUmVtb3ZlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHZhciBpdGVtc0Zvck1vdmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIGl0ZW1zRm9yQWZ0ZXJBZGRDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIG1hcERhdGE7XG5cbiAgICAgICAgZnVuY3Rpb24gaXRlbU1vdmVkT3JSZXRhaW5lZChlZGl0U2NyaXB0SW5kZXgsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBtYXBEYXRhID0gbGFzdE1hcHBpbmdSZXN1bHRbb2xkUG9zaXRpb25dO1xuICAgICAgICAgICAgaWYgKG5ld01hcHBpbmdSZXN1bHRJbmRleCAhPT0gb2xkUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgaXRlbXNGb3JNb3ZlQ2FsbGJhY2tzW2VkaXRTY3JpcHRJbmRleF0gPSBtYXBEYXRhO1xuICAgICAgICAgICAgLy8gU2luY2UgdXBkYXRpbmcgdGhlIGluZGV4IG1pZ2h0IGNoYW5nZSB0aGUgbm9kZXMsIGRvIHNvIGJlZm9yZSBjYWxsaW5nIGZpeFVwQ29udGludW91c05vZGVBcnJheVxuICAgICAgICAgICAgbWFwRGF0YS5pbmRleE9ic2VydmFibGUobmV3TWFwcGluZ1Jlc3VsdEluZGV4KyspO1xuICAgICAgICAgICAga28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KG1hcERhdGEubWFwcGVkTm9kZXMsIGRvbU5vZGUpO1xuICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgaXRlbXNUb1Byb2Nlc3MucHVzaChtYXBEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxDYWxsYmFjayhjYWxsYmFjaywgaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gaXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGl0ZW1zW2ldLm1hcHBlZE5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSwgaSwgaXRlbXNbaV0uYXJyYXlFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlZGl0U2NyaXB0SXRlbSwgbW92ZWRJbmRleDsgZWRpdFNjcmlwdEl0ZW0gPSBlZGl0U2NyaXB0W2ldOyBpKyspIHtcbiAgICAgICAgICAgIG1vdmVkSW5kZXggPSBlZGl0U2NyaXB0SXRlbVsnbW92ZWQnXTtcbiAgICAgICAgICAgIHN3aXRjaCAoZWRpdFNjcmlwdEl0ZW1bJ3N0YXR1cyddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVkSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YSA9IGxhc3RNYXBwaW5nUmVzdWx0W2xhc3RNYXBwaW5nUmVzdWx0SW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRyYWNraW5nIGNoYW5nZXMgdG8gdGhlIG1hcHBpbmcgZm9yIHRoZXNlIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwRGF0YS5kZXBlbmRlbnRPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS5kZXBlbmRlbnRPYnNlcnZhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLmRlcGVuZGVudE9ic2VydmFibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFF1ZXVlIHRoZXNlIG5vZGVzIGZvciBsYXRlciByZW1vdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuZml4VXBDb250aW51b3VzTm9kZUFycmF5KG1hcERhdGEubWFwcGVkTm9kZXMsIGRvbU5vZGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zWydiZWZvcmVSZW1vdmUnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNYXBwaW5nUmVzdWx0LnB1c2gobWFwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzLnB1c2gobWFwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBEYXRhLmFycmF5RW50cnkgPT09IGRlbGV0ZWRJdGVtRHVtbXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrc1tpXSA9IG1hcERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0RlbGV0ZS5wdXNoLmFwcGx5KG5vZGVzVG9EZWxldGUsIG1hcERhdGEubWFwcGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TWFwcGluZ1Jlc3VsdEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInJldGFpbmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoaSwgbGFzdE1hcHBpbmdSZXN1bHRJbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYWRkZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU1vdmVkT3JSZXRhaW5lZChpLCBtb3ZlZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEgPSB7IGFycmF5RW50cnk6IGVkaXRTY3JpcHRJdGVtWyd2YWx1ZSddLCBpbmRleE9ic2VydmFibGU6IGtvLm9ic2VydmFibGUobmV3TWFwcGluZ1Jlc3VsdEluZGV4KyspIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNYXBwaW5nUmVzdWx0LnB1c2gobWFwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvUHJvY2Vzcy5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ZpcnN0RXhlY3V0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zRm9yQWZ0ZXJBZGRDYWxsYmFja3NbaV0gPSBtYXBEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgYSBjb3B5IG9mIHRoZSBhcnJheSBpdGVtcyB3ZSBqdXN0IGNvbnNpZGVyZWQgc28gd2UgY2FuIGRpZmZlcmVuY2UgaXQgbmV4dCB0aW1lXG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGRvbU5vZGUsIGxhc3RNYXBwaW5nUmVzdWx0RG9tRGF0YUtleSwgbmV3TWFwcGluZ1Jlc3VsdCk7XG5cbiAgICAgICAgLy8gQ2FsbCBiZWZvcmVNb3ZlIGZpcnN0IGJlZm9yZSBhbnkgY2hhbmdlcyBoYXZlIGJlZW4gbWFkZSB0byB0aGUgRE9NXG4gICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydiZWZvcmVNb3ZlJ10sIGl0ZW1zRm9yTW92ZUNhbGxiYWNrcyk7XG5cbiAgICAgICAgLy8gTmV4dCByZW1vdmUgbm9kZXMgZm9yIGRlbGV0ZWQgaXRlbXMgKG9yIGp1c3QgY2xlYW4gaWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaylcbiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKG5vZGVzVG9EZWxldGUsIG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddID8ga28uY2xlYW5Ob2RlIDoga28ucmVtb3ZlTm9kZSk7XG5cbiAgICAgICAgLy8gTmV4dCBhZGQvcmVvcmRlciB0aGUgcmVtYWluaW5nIGl0ZW1zICh3aWxsIGluY2x1ZGUgZGVsZXRlZCBpdGVtcyBpZiB0aGVyZSdzIGEgYmVmb3JlUmVtb3ZlIGNhbGxiYWNrKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbmV4dE5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChkb21Ob2RlKSwgbGFzdE5vZGUsIG5vZGU7IG1hcERhdGEgPSBpdGVtc1RvUHJvY2Vzc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgbm9kZXMgZm9yIG5ld2x5IGFkZGVkIGl0ZW1zXG4gICAgICAgICAgICBpZiAoIW1hcERhdGEubWFwcGVkTm9kZXMpXG4gICAgICAgICAgICAgICAga28udXRpbHMuZXh0ZW5kKG1hcERhdGEsIG1hcE5vZGVBbmRSZWZyZXNoV2hlbkNoYW5nZWQoZG9tTm9kZSwgbWFwcGluZywgbWFwRGF0YS5hcnJheUVudHJ5LCBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMsIG1hcERhdGEuaW5kZXhPYnNlcnZhYmxlKSk7XG5cbiAgICAgICAgICAgIC8vIFB1dCBub2RlcyBpbiB0aGUgcmlnaHQgcGxhY2UgaWYgdGhleSBhcmVuJ3QgdGhlcmUgYWxyZWFkeVxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IG5vZGUgPSBtYXBEYXRhLm1hcHBlZE5vZGVzW2pdOyBuZXh0Tm9kZSA9IG5vZGUubmV4dFNpYmxpbmcsIGxhc3ROb2RlID0gbm9kZSwgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgIT09IG5leHROb2RlKVxuICAgICAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXIoZG9tTm9kZSwgbm9kZSwgbGFzdE5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrcyBmb3IgbmV3bHkgYWRkZWQgbm9kZXMgKGZvciBleGFtcGxlLCB0byBhcHBseSBiaW5kaW5ncywgZXRjLilcbiAgICAgICAgICAgIGlmICghbWFwRGF0YS5pbml0aWFsaXplZCAmJiBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMobWFwRGF0YS5hcnJheUVudHJ5LCBtYXBEYXRhLm1hcHBlZE5vZGVzLCBtYXBEYXRhLmluZGV4T2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICAgICAgbWFwRGF0YS5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgYmVmb3JlUmVtb3ZlIGNhbGxiYWNrLCBjYWxsIGl0IGFmdGVyIHJlb3JkZXJpbmcuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBhc3N1bWUgdGhhdCB0aGUgYmVmb3JlUmVtb3ZlIGNhbGxiYWNrIHdpbGwgdXN1YWxseSBiZSB1c2VkIHRvIHJlbW92ZSB0aGUgbm9kZXMgdXNpbmdcbiAgICAgICAgLy8gc29tZSBzb3J0IG9mIGFuaW1hdGlvbiwgd2hpY2ggaXMgd2h5IHdlIGZpcnN0IHJlb3JkZXIgdGhlIG5vZGVzIHRoYXQgd2lsbCBiZSByZW1vdmVkLiBJZiB0aGVcbiAgICAgICAgLy8gY2FsbGJhY2sgaW5zdGVhZCByZW1vdmVzIHRoZSBub2RlcyByaWdodCBhd2F5LCBpdCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCB0byBza2lwIHJlb3JkZXJpbmcgdGhlbS5cbiAgICAgICAgLy8gUGVyaGFwcyB3ZSdsbCBtYWtlIHRoYXQgY2hhbmdlIGluIHRoZSBmdXR1cmUgaWYgdGhpcyBzY2VuYXJpbyBiZWNvbWVzIG1vcmUgY29tbW9uLlxuICAgICAgICBjYWxsQ2FsbGJhY2sob3B0aW9uc1snYmVmb3JlUmVtb3ZlJ10sIGl0ZW1zRm9yQmVmb3JlUmVtb3ZlQ2FsbGJhY2tzKTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBzdG9yZWQgdmFsdWVzIG9mIGRlbGV0ZWQgaXRlbXMgd2l0aCBhIGR1bW15IHZhbHVlLiBUaGlzIHByb3ZpZGVzIHR3byBiZW5lZml0czogaXQgbWFya3MgdGhpcyBpdGVtXG4gICAgICAgIC8vIGFzIGFscmVhZHkgXCJyZW1vdmVkXCIgc28gd2Ugd29uJ3QgY2FsbCBiZWZvcmVSZW1vdmUgZm9yIGl0IGFnYWluLCBhbmQgaXQgZW5zdXJlcyB0aGF0IHRoZSBpdGVtIHdvbid0IG1hdGNoIHVwXG4gICAgICAgIC8vIHdpdGggYW4gYWN0dWFsIGl0ZW0gaW4gdGhlIGFycmF5IGFuZCBhcHBlYXIgYXMgXCJyZXRhaW5lZFwiIG9yIFwibW92ZWRcIi5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zRm9yQmVmb3JlUmVtb3ZlQ2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNGb3JCZWZvcmVSZW1vdmVDYWxsYmFja3NbaV0pIHtcbiAgICAgICAgICAgICAgICBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrc1tpXS5hcnJheUVudHJ5ID0gZGVsZXRlZEl0ZW1EdW1teVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluYWxseSBjYWxsIGFmdGVyTW92ZSBhbmQgYWZ0ZXJBZGQgY2FsbGJhY2tzXG4gICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydhZnRlck1vdmUnXSwgaXRlbXNGb3JNb3ZlQ2FsbGJhY2tzKTtcbiAgICAgICAgY2FsbENhbGxiYWNrKG9wdGlvbnNbJ2FmdGVyQWRkJ10sIGl0ZW1zRm9yQWZ0ZXJBZGRDYWxsYmFja3MpO1xuICAgIH1cbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZycsIGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcpO1xua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpc1snYWxsb3dUZW1wbGF0ZVJld3JpdGluZyddID0gZmFsc2U7XG59XG5cbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLnByb3RvdHlwZSA9IG5ldyBrby50ZW1wbGF0ZUVuZ2luZSgpO1xua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0ga28ubmF0aXZlVGVtcGxhdGVFbmdpbmU7XG5rby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgdmFyIHVzZU5vZGVzSWZBdmFpbGFibGUgPSAhKGtvLnV0aWxzLmllVmVyc2lvbiA8IDkpLCAvLyBJRTw5IGNsb25lTm9kZSBkb2Vzbid0IHdvcmsgcHJvcGVybHlcbiAgICAgICAgdGVtcGxhdGVOb2Rlc0Z1bmMgPSB1c2VOb2Rlc0lmQXZhaWxhYmxlID8gdGVtcGxhdGVTb3VyY2VbJ25vZGVzJ10gOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZU5vZGVzID0gdGVtcGxhdGVOb2Rlc0Z1bmMgPyB0ZW1wbGF0ZVNvdXJjZVsnbm9kZXMnXSgpIDogbnVsbDtcblxuICAgIGlmICh0ZW1wbGF0ZU5vZGVzKSB7XG4gICAgICAgIHJldHVybiBrby51dGlscy5tYWtlQXJyYXkodGVtcGxhdGVOb2Rlcy5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlVGV4dCA9IHRlbXBsYXRlU291cmNlWyd0ZXh0J10oKTtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KHRlbXBsYXRlVGV4dCwgdGVtcGxhdGVEb2N1bWVudCk7XG4gICAgfVxufTtcblxua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUuaW5zdGFuY2UgPSBuZXcga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUoKTtcbmtvLnNldFRlbXBsYXRlRW5naW5lKGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLmluc3RhbmNlKTtcblxua28uZXhwb3J0U3ltYm9sKCduYXRpdmVUZW1wbGF0ZUVuZ2luZScsIGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lKTtcbihmdW5jdGlvbigpIHtcbiAgICBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGljaCB2ZXJzaW9uIG9mIGpxdWVyeS10bXBsIHlvdSdyZSB1c2luZy4gVW5mb3J0dW5hdGVseSBqcXVlcnktdG1wbFxuICAgICAgICAvLyBkb2Vzbid0IGV4cG9zZSBhIHZlcnNpb24gbnVtYmVyLCBzbyB3ZSBoYXZlIHRvIGluZmVyIGl0LlxuICAgICAgICAvLyBOb3RlIHRoYXQgYXMgb2YgS25vY2tvdXQgMS4zLCB3ZSBvbmx5IHN1cHBvcnQgalF1ZXJ5LnRtcGwgMS4wLjBwcmUgYW5kIGxhdGVyLFxuICAgICAgICAvLyB3aGljaCBLTyBpbnRlcm5hbGx5IHJlZmVycyB0byBhcyB2ZXJzaW9uIFwiMlwiLCBzbyBvbGRlciB2ZXJzaW9ucyBhcmUgbm8gbG9uZ2VyIGRldGVjdGVkLlxuICAgICAgICB2YXIgalF1ZXJ5VG1wbFZlcnNpb24gPSB0aGlzLmpRdWVyeVRtcGxWZXJzaW9uID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFqUXVlcnlJbnN0YW5jZSB8fCAhKGpRdWVyeUluc3RhbmNlWyd0bXBsJ10pKVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgLy8gU2luY2UgaXQgZXhwb3NlcyBubyBvZmZpY2lhbCB2ZXJzaW9uIG51bWJlciwgd2UgdXNlIG91ciBvd24gbnVtYmVyaW5nIHN5c3RlbS4gVG8gYmUgdXBkYXRlZCBhcyBqcXVlcnktdG1wbCBldm9sdmVzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2VbJ3RtcGwnXVsndGFnJ11bJ3RtcGwnXVsnb3BlbiddLnRvU3RyaW5nKCkuaW5kZXhPZignX18nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIDEuMC4wcHJlLCBjdXN0b20gdGFncyBzaG91bGQgYXBwZW5kIG1hcmt1cCB0byBhbiBhcnJheSBjYWxsZWQgXCJfX1wiXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyOyAvLyBGaW5hbCB2ZXJzaW9uIG9mIGpxdWVyeS50bXBsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChleCkgeyAvKiBBcHBhcmVudGx5IG5vdCB0aGUgdmVyc2lvbiB3ZSB3ZXJlIGxvb2tpbmcgZm9yICovIH1cblxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEFueSBvbGRlciB2ZXJzaW9uIHRoYXQgd2UgZG9uJ3Qgc3VwcG9ydFxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGVuc3VyZUhhc1JlZmVyZW5jZWRKUXVlcnlUZW1wbGF0ZXMoKSB7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5VG1wbFZlcnNpb24gPCAyKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlVGVtcGxhdGUoY29tcGlsZWRUZW1wbGF0ZSwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5SW5zdGFuY2VbJ3RtcGwnXShjb21waWxlZFRlbXBsYXRlLCBkYXRhLCBqUXVlcnlUZW1wbGF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1sncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSA9IGZ1bmN0aW9uKHRlbXBsYXRlU291cmNlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgICAgICAgICAgdGVtcGxhdGVEb2N1bWVudCA9IHRlbXBsYXRlRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIGVuc3VyZUhhc1JlZmVyZW5jZWRKUXVlcnlUZW1wbGF0ZXMoKTtcblxuICAgICAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgc3RvcmVkIGEgcHJlY29tcGlsZWQgdmVyc2lvbiBvZiB0aGlzIHRlbXBsYXRlIChkb24ndCB3YW50IHRvIHJlcGFyc2Ugb24gZXZlcnkgcmVuZGVyKVxuICAgICAgICAgICAgdmFyIHByZWNvbXBpbGVkID0gdGVtcGxhdGVTb3VyY2VbJ2RhdGEnXSgncHJlY29tcGlsZWQnKTtcbiAgICAgICAgICAgIGlmICghcHJlY29tcGlsZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVUZXh0ID0gdGVtcGxhdGVTb3VyY2VbJ3RleHQnXSgpIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgLy8gV3JhcCBpbiBcIndpdGgoJHdoYXRldmVyLmtvQmluZGluZ0NvbnRleHQpIHsgLi4uIH1cIlxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVGV4dCA9IFwie3trb193aXRoICRpdGVtLmtvQmluZGluZ0NvbnRleHR9fVwiICsgdGVtcGxhdGVUZXh0ICsgXCJ7ey9rb193aXRofX1cIjtcblxuICAgICAgICAgICAgICAgIHByZWNvbXBpbGVkID0galF1ZXJ5SW5zdGFuY2VbJ3RlbXBsYXRlJ10obnVsbCwgdGVtcGxhdGVUZXh0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVNvdXJjZVsnZGF0YSddKCdwcmVjb21waWxlZCcsIHByZWNvbXBpbGVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbYmluZGluZ0NvbnRleHRbJyRkYXRhJ11dOyAvLyBQcmV3cmFwIHRoZSBkYXRhIGluIGFuIGFycmF5IHRvIHN0b3AganF1ZXJ5LnRtcGwgZnJvbSB0cnlpbmcgdG8gdW53cmFwIGFueSBhcnJheXNcbiAgICAgICAgICAgIHZhciBqUXVlcnlUZW1wbGF0ZU9wdGlvbnMgPSBqUXVlcnlJbnN0YW5jZVsnZXh0ZW5kJ10oeyAna29CaW5kaW5nQ29udGV4dCc6IGJpbmRpbmdDb250ZXh0IH0sIG9wdGlvbnNbJ3RlbXBsYXRlT3B0aW9ucyddKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdE5vZGVzID0gZXhlY3V0ZVRlbXBsYXRlKHByZWNvbXBpbGVkLCBkYXRhLCBqUXVlcnlUZW1wbGF0ZU9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzdWx0Tm9kZXNbJ2FwcGVuZFRvJ10odGVtcGxhdGVEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTsgLy8gVXNpbmcgXCJhcHBlbmRUb1wiIGZvcmNlcyBqUXVlcnkvalF1ZXJ5LnRtcGwgdG8gcGVyZm9ybSBuZWNlc3NhcnkgY2xlYW51cCB3b3JrXG5cbiAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWydmcmFnbWVudHMnXSA9IHt9OyAvLyBDbGVhciBqUXVlcnkncyBmcmFnbWVudCBjYWNoZSB0byBhdm9pZCBhIG1lbW9yeSBsZWFrIGFmdGVyIGEgbGFyZ2UgbnVtYmVyIG9mIHRlbXBsYXRlIHJlbmRlcnNcbiAgICAgICAgICAgIHJldHVybiByZXN1bHROb2RlcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXSA9IGZ1bmN0aW9uKHNjcmlwdCkge1xuICAgICAgICAgICAgcmV0dXJuIFwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIiArIHNjcmlwdCArIFwiIH0pKCkpIH19XCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpc1snYWRkVGVtcGxhdGUnXSA9IGZ1bmN0aW9uKHRlbXBsYXRlTmFtZSwgdGVtcGxhdGVNYXJrdXApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKFwiPHNjcmlwdCB0eXBlPSd0ZXh0L2h0bWwnIGlkPSdcIiArIHRlbXBsYXRlTmFtZSArIFwiJz5cIiArIHRlbXBsYXRlTWFya3VwICsgXCI8XCIgKyBcIi9zY3JpcHQ+XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChqUXVlcnlUbXBsVmVyc2lvbiA+IDApIHtcbiAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWyd0bXBsJ11bJ3RhZyddWydrb19jb2RlJ10gPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogXCJfXy5wdXNoKCQxIHx8ICcnKTtcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWyd0bXBsJ11bJ3RhZyddWydrb193aXRoJ10gPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogXCJ3aXRoKCQxKSB7XCIsXG4gICAgICAgICAgICAgICAgY2xvc2U6IFwifSBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUucHJvdG90eXBlID0gbmV3IGtvLnRlbXBsYXRlRW5naW5lKCk7XG4gICAga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZTtcblxuICAgIC8vIFVzZSB0aGlzIG9uZSBieSBkZWZhdWx0ICpvbmx5IGlmIGpxdWVyeS50bXBsIGlzIHJlZmVyZW5jZWQqXG4gICAgdmFyIGpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZUluc3RhbmNlID0gbmV3IGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZSgpO1xuICAgIGlmIChqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVJbnN0YW5jZS5qUXVlcnlUbXBsVmVyc2lvbiA+IDApXG4gICAgICAgIGtvLnNldFRlbXBsYXRlRW5naW5lKGpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZUluc3RhbmNlKTtcblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lJywga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lKTtcbn0pKCk7XG59KSk7XG59KCkpO1xufSkoKTtcbiIsInZhciBDQUxMQkFDS19OQU1FID0gJ19fZ29vZ2xlTWFwc0FwaU9uTG9hZENhbGxiYWNrJ1xuXG52YXIgT1BUSU9OU19LRVlTID0gWydjaGFubmVsJywgJ2NsaWVudCcsICdrZXknLCAnbGFuZ3VhZ2UnLCAncmVnaW9uJywgJ3YnXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgR29vZ2xlIE1hcHMgQVBJIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkXG4gICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZSh3aW5kb3cuZ29vZ2xlLm1hcHMpXG4gICAgfVxuXG4gICAgLy8gUmVqZWN0IHRoZSBwcm9taXNlIGFmdGVyIGEgdGltZW91dFxuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvd1tDQUxMQkFDS19OQU1FXSA9IGZ1bmN0aW9uICgpIHt9IC8vIFNldCB0aGUgb24gbG9hZCBjYWxsYmFjayB0byBhIG5vLW9wXG4gICAgICByZWplY3QobmV3IEVycm9yKCdDb3VsZCBub3QgbG9hZCB0aGUgR29vZ2xlIE1hcHMgQVBJJykpXG4gICAgfSwgb3B0aW9ucy50aW1lb3V0IHx8IDEwMDAwKVxuXG4gICAgLy8gSG9vayB1cCB0aGUgb24gbG9hZCBjYWxsYmFja1xuICAgIHdpbmRvd1tDQUxMQkFDS19OQU1FXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICAgIH1cbiAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZS5tYXBzKVxuICAgICAgZGVsZXRlIHdpbmRvd1tDQUxMQkFDS19OQU1FXVxuICAgIH1cblxuICAgIC8vIFByZXBhcmUgdGhlIGBzY3JpcHRgIHRhZyB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSBwYWdlXG4gICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHZhciBwYXJhbXMgPSBbJ2NhbGxiYWNrPScgKyBDQUxMQkFDS19OQU1FXVxuICAgIE9QVElPTlNfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgcGFyYW1zLnB1c2goa2V5ICsgJz0nICsgb3B0aW9uc1trZXldKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKG9wdGlvbnMubGlicmFyaWVzICYmIG9wdGlvbnMubGlicmFyaWVzLmxlbmd0aCkge1xuICAgICAgcGFyYW1zLnB1c2goJ2xpYnJhcmllcz0nICsgb3B0aW9ucy5saWJyYXJpZXMuam9pbignLCcpKVxuICAgIH1cbiAgICBzY3JpcHRFbGVtZW50LnNyYyA9XG4gICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPycgKyBwYXJhbXMuam9pbignJicpXG5cbiAgICAvLyBJbnNlcnQgdGhlIGBzY3JpcHRgIHRhZ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudClcbiAgfSlcbn1cbiIsIi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IGxvYWRHb29nbGVNYXBzQXBpIGZyb20gJ2xvYWQtZ29vZ2xlLW1hcHMtYXBpJztcbmltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5cbmNvbnN0IGdldFN1cmZTcG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9hcGkuc3BpdGNhc3QuY29tL2FwaS9zcG90L2FsbCcpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn07XG5jbGFzcyBHb29nbGVNYXBzIHtcbiAgICAvKlxuICAgIFRoaXMgY2xhc3Mgd3JhcHMgdGhlIGxvYWQtZ29vZ2xlLW1hcHMtYXBpIHNvIHRoYXQgd2UgY2FuXG4gICAgYWNjZXNzIHRoZSBtYXAgZnVuY3Rpb25hbGl0eSBpbiBhbiBlYXN5IHdheS5cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGtleSwgZWxlbWVudCkge1xuICAgICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ29vZ2xlTWFwcyA9IG51bGw7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zdiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRTdHJlZXRWaWV3ID0gdGhpcy5zZXRTdHJlZXRWaWV3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuem9vbUluVG9Mb2NhdGlvbiA9IHRoaXMuem9vbUluVG9Mb2NhdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgbG9hZE1hcHMoKSB7XG4gICAgICAgIC8qXG4gICAgICAgIE5lZWRlZCB0byBwcm92aWRlIHNvbWUga2luZCBvZiBwcm9taXNlIHNvIHRoYXQgd2Uga25vdyB3aGVuIHRoZVxuICAgICAgICBtYXAgaXMgbG9hZGVkLlxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmtleTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGxvYWRHb29nbGVNYXBzQXBpKHsna2V5Jzoga2V5fSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChnb29nbGVNYXBzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZ2xlTWFwcyA9IGdvb2dsZU1hcHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IHRoaXMuZ29vZ2xlTWFwcy5NYXAoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB7bGF0OiAzNy43NjksIGxuZzogLTEyMi40NDZ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVJZDogJ2h5YnJpZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN2ID0gbmV3IGdvb2dsZU1hcHMuU3RyZWV0Vmlld1NlcnZpY2UoKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZE1hcmtlcihsb2NhdGlvbiwgY29udGVudFN0cmluZywga2V5KSB7XG4gICAgICAgIC8qXG4gICAgICAgIFRoaXMgYWRkcyBhIG1hcmtlciB0byB0aGUgbWFwIGFuZCBtYWtlcyBhIGtleSB0aGF0IHdlIGNhbiBsYXRlclxuICAgICAgICBnZXQgdGhlIG1hcmtlciBmcm9tLlxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBnb29nbGVNYXBzID0gdGhpcy5nb29nbGVNYXBzO1xuICAgICAgICBjb25zdCB6b29tSW5Ub0xvY2F0aW9uID0gdGhpcy56b29tSW5Ub0xvY2F0aW9uO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgICBtYXA6IHRoaXMubWFwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGVNYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogY29udGVudFN0cmluZ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jbG9zZUFsbEluZm9XaW5kb3dzKCk7XG4gICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4odGhpcy5tYXAsIG1hcmtlcik7XG4gICAgICAgICAgICB6b29tSW5Ub0xvY2F0aW9uKG1hcmtlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlQm91bmNlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHttYXJrZXI6IG1hcmtlciwga2V5OiBrZXksIGluZm9XaW5kb3c6IGluZm9XaW5kb3d9KTtcblxuICAgIH1cblxuICAgIGdldE1hcmtlcihrZXkpIHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXJzLmZpbHRlcigobWFya2VyKSA9PiBtYXJrZXIua2V5ID09IGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hcmtlcik7XG4gICAgICAgIHJldHVybiBtYXJrZXJbMF07XG5cbiAgICB9XG4gICAgb3BlbkluZm9XaW5kb3coa2V5KSB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFya2Vycy5maWx0ZXIoKG1hcmtlcikgPT4gbWFya2VyLmtleSA9PSBrZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXJrZXIpO1xuICAgICAgICBtYXJrZXJbMF0uaW5mb1dpbmRvdy5vcGVuKHRoaXMubWFwLCBtYXJrZXJbMF0ubWFya2VyKTtcbiAgICB9XG4gICAgY2xvc2VBbGxJbmZvV2luZG93cygpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLm1hcCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBtYXJrZXIuaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHJlZXRWaWV3KGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc3YuZ2V0UGFub3JhbWEoe2xvY2F0aW9uOiBsb2NhdGlvbiwgcmFkaXVzOiAxMDAwfSwgKGRhdGEsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWV0VmlldyA9IHRoaXMubWFwLmdldFN0cmVldFZpZXcoKTtcbiAgICAgICAgICAgIHN0cmVldFZpZXcuc2V0UG9zaXRpb24oZGF0YS5sb2NhdGlvbi5sYXRMbmcpO1xuICAgICAgICAgICAgc3RyZWV0Vmlldy5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHpvb21JblRvTG9jYXRpb24obG9jYXRpb24sIHpvb209MTUpIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSh6b29tKTtcbiAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKGxvY2F0aW9uKTtcblxuICAgIH1cblxuICAgIGNsZWFyTWFya2VycygpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLm1hcCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBtYXJrZXIubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIH1cbiAgICB0b2dnbGVCb3VuY2UobWFya2VyS2V5KSB7XG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlcnMuZmlsdGVyKChtYXJrZXIpID0+IG1hcmtlci5rZXkgPT0gbWFya2VyS2V5KVswXS5tYXJrZXI7XG4gICAgICBpZiAobWFya2VyLmdldEFuaW1hdGlvbigpICE9IG51bGwpIHtcbiAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24odGhpcy5nb29nbGVNYXBzLkFuaW1hdGlvbi5CT1VOQ0UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpKSwgNTAwMCk7XG4gICAgICB9XG4gICAgfVxuXG59XG5mdW5jdGlvbiBTcG90KGRhdGEpIHtcbiAgICB0aGlzLnNwb3RfbmFtZSA9IGtvLm9ic2VydmFibGUoZGF0YS5zcG90X25hbWUpO1xuICAgIHRoaXMuY291bnR5X25hbWUgPSBrby5vYnNlcnZhYmxlKGRhdGEuY291bnR5X25hbWUpO1xuICAgIHRoaXMubGF0aXR1ZGUgPSBrby5vYnNlcnZhYmxlKGRhdGEubGF0aXR1ZGUpO1xuICAgIHRoaXMubG9uZ2l0dWRlID0ga28ub2JzZXJ2YWJsZShkYXRhLmxvbmdpdHVkZSk7XG59XG5cbmZ1bmN0aW9uIFN1cmZTcG90TWFwVmlld01vZGVsKCkge1xuICAgIC8qXG4gICAgVGhpcyBpcyB0aGUgVmlld01vZGVsIGZvciBLbm9ja291dCBqcy4gSXQgdXNlcyB0aGUgc3BpdCBjYXN0IGFwaSB0byBnZXQgdGhlIGRhdGEsXG4gICAgZGlzcGxheSB0aGUgZGF0YSwgYW5kIGZpbHRlciB0aGUgZGF0YS4gSXQgYWxzbyB1c2VzIHRoZSBHb29nbGUgTWFwcyBXcmFwcGVyIGNsYXNzIHRvXG4gICAgaW50ZXJmYWNlIHdpdGggdGhlIG1hcC9cbiAgICAqL1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBOZWVkIHRvIGluaXRpYWxpemUgdGhlIG1hcCBhbmQgZG8gc29tZSBhamF4IHJlcXVlc3RzIHRvIGluaXRpYWxpemUgdGhlIGRhdGFcbiAgICB0aGlzLnN1cmZTcG90TWFwID0gbmV3IEdvb2dsZU1hcHMoXG4gICAgICAgICdBSXphU3lDSXc3N0FUMzNmTjRnT2JyOTZkdEdXS3V5WWZtTzVUeDgnLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpO1xuICAgIHRoaXMuc3BvdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGdldFN1cmZTcG90cygpLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZFNwb3RzID0gcmVzdWx0Lm1hcCgoaXRlbSkgPT4ge3JldHVybiBuZXcgU3BvdChpdGVtKTt9KTtcbiAgICAgICAgICAgIHRoaXMuc3BvdHMobWFwcGVkU3BvdHMpO1xuICAgICAgICAgICAgdGhpcy5zdXJmU3BvdE1hcC5sb2FkTWFwcygpLnRoZW4oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRTcG90cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3VyZlNwb3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcG90RGVzY3JpcHRpb24gPSBcIjxkaXY+XCIrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8aDQ+TmFtZTogXCIrc3VyZlNwb3Quc3BvdF9uYW1lKCkrXCI8L2g0PlwiK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGg1PkNvdW50eTogXCIrc3VyZlNwb3QuY291bnR5X25hbWUoKStcIjwvaDU+XCIrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmZTcG90TWFwLmFkZE1hcmtlcih7bGF0OiBzdXJmU3BvdC5sYXRpdHVkZSgpLCBsbmc6IHN1cmZTcG90LmxvbmdpdHVkZSgpfSwgc3BvdERlc2NyaXB0aW9uLCBzdXJmU3BvdC5zcG90X25hbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgQVBJJyk7XG4gICAgICAgIH0pO1xuICAgIHRoaXMuY291bnR5TmFtZXMgPSBrby5jb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGxldCBhbGxTcG90cyA9IHRoaXMuc3BvdHMoKTtcbiAgICAgICAgbGV0IGNvdW50eU5hbWVzID0gWydBbGwnXTtcbiAgICAgICAgYWxsU3BvdHMubWFwKChzcG90KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvdW50eU5hbWVzLmluY2x1ZGVzKHNwb3QuY291bnR5X25hbWUoKSkpIHtcbiAgICAgICAgICAgICAgICBjb3VudHlOYW1lcy5wdXNoKHNwb3QuY291bnR5X25hbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY291bnR5TmFtZXM7XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZENvdW50eSA9IGtvLm9ic2VydmFibGUoJ0FsbCcpO1xuXG4gICAgdGhpcy5maWx0ZXJlZFNwb3RzID0ga28uY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ291bnR5KCkgPT0gJ0FsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNwb3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcG90cygpLmZpbHRlcihzcG90ID0+IHNwb3QuY291bnR5X25hbWUoKSA9PSB0aGlzLnNlbGVjdGVkQ291bnR5KCkpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAvLyBUaGlzIHJlbmRlcnMgdGhlIG1hcmtlcnMgYW55dGltZSBzZWxlY3RlZENvdW50eSBDaGFuZ2VzXG4gICAgdGhpcy5yZW5kZXJNYXJrZXJzID0ga28uY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdXJmU3BvdE1hcC5nb29nbGVNYXBzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN1cmZTcG90TWFwLmNsZWFyTWFya2VycygpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFNwb3RzKCkubWFwKChzdXJmU3BvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwb3REZXNjcmlwdGlvbiA9IFwiPGRpdj5cIitcbiAgICAgICAgICBcIjxoMj5OYW1lOiBcIitzdXJmU3BvdC5zcG90X25hbWUoKStcIjwvaDI+XCIrXG4gICAgICAgICAgICAgICAgICAgIFwiPGgzPkNvdW50eTogXCIrc3VyZlNwb3QuY291bnR5X25hbWUoKStcIjwvaDM+XCIrXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5zdXJmU3BvdE1hcC5hZGRNYXJrZXIoe2xhdDogc3VyZlNwb3QubGF0aXR1ZGUoKSwgbG5nOiBzdXJmU3BvdC5sb25naXR1ZGUoKX0sIHNwb3REZXNjcmlwdGlvbiwgc3VyZlNwb3Quc3BvdF9uYW1lKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBmaWxTcG90cyA9IHNlbGYuZmlsdGVyZWRTcG90cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsU3BvdHMubGVuZ3RoLzIpO1xuICAgICAgICAgICAgc2VsZi5zdXJmU3BvdE1hcC56b29tSW5Ub0xvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBsYXQ6ZmlsU3BvdHNbTWF0aC5mbG9vcihmaWxTcG90cy5sZW5ndGgvMildLmxhdGl0dWRlKCksXG4gICAgICAgICAgICAgICAgbG5nOmZpbFNwb3RzW01hdGguZmxvb3IoZmlsU3BvdHMubGVuZ3RoLzIpXS5sb25naXR1ZGUoKVxuICAgICAgICAgICAgfSwgMTApO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkQ291bnR5KCkpO1xuXG4gICAgfSk7XG5cbiAgICB0aGlzLlpvb21Ub1Nwb3QgPSBmdW5jdGlvbihzcG90KSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuY2xpY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5zdXJmU3BvdE1hcC5nZXRNYXJrZXIoc3BvdC5zcG90X25hbWUoKSkpO1xuICAgICAgICBzZWxmLnN1cmZTcG90TWFwLmNsb3NlQWxsSW5mb1dpbmRvd3MoKTtcbiAgICAgICAgc2VsZi5zdXJmU3BvdE1hcC5vcGVuSW5mb1dpbmRvdyhzcG90LnNwb3RfbmFtZSgpKTtcbiAgICAgICAgc2VsZi5zdXJmU3BvdE1hcC50b2dnbGVCb3VuY2Uoc3BvdC5zcG90X25hbWUoKSk7XG4gICAgICAgIHNlbGYuc3VyZlNwb3RNYXAuem9vbUluVG9Mb2NhdGlvbih7XG4gICAgICAgICAgICBsYXQ6IHNwb3QubGF0aXR1ZGUoKSwgbG5nOiBzcG90LmxvbmdpdHVkZSgpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdvVG9TdHJlZXRWaWV3ID0gZnVuY3Rpb24oc3BvdCkge1xuICAgICAgICBzZWxmLnN1cmZTcG90TWFwLnNldFN0cmVldFZpZXcoe1xuICAgICAgICAgICAgbGF0OiBzcG90LmxhdGl0dWRlKCksIGxuZzogc3BvdC5sb25naXR1ZGUoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG59XG5cbmtvLmFwcGx5QmluZGluZ3MobmV3IFN1cmZTcG90TWFwVmlld01vZGVsKCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==