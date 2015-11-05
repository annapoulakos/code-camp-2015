(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonTopical = require('../common/topical');

var _commonTopical2 = _interopRequireDefault(_commonTopical);

var ModuleName = 'ccTodoApplication.ApplicationControllerModule';
var ModuleDeps = [];

var ApplicationControllerModule = angular.module(ModuleName, ModuleDeps);

var ApplicationController = (function () {
    function ApplicationController() {
        _classCallCheck(this, ApplicationController);

        this.TodoItem = '';
    }

    _createClass(ApplicationController, [{
        key: 'AddTodo',
        value: function AddTodo() {
            _commonTopical2['default'].Publish('ccTodoApplication:AddTodo', { value: this.TodoItem });
            this.TodoItem = '';
        }
    }]);

    return ApplicationController;
})();

ApplicationController.$inject = [];
ApplicationControllerModule.controller('ApplicationController', ApplicationController);

exports['default'] = ApplicationControllerModule;
module.exports = exports['default'];

},{"../common/topical":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

var Channel = (function () {
    function Channel(channel) {
        _classCallCheck(this, Channel);

        this.name = channel;
        this.topics = {};
    }

    _createClass(Channel, [{
        key: 'Publish',
        value: function Publish(topic) {
            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            if (topic === '*') {
                this.PublishAll(data);
            }

            if (topic in this.topics) {
                this.topics[topic].sort(function (a, b) {
                    return b.priority - a.priority;
                }).forEach(function (elem) {
                    elem.callback(data);
                });
            }

            return this;
        }
    }, {
        key: 'Subscribe',
        value: function Subscribe(topic) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? _utilities2['default'].noop : arguments[1];
            var priority = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

            var guid = _utilities2['default'].Guid();

            if (topic === '*') {
                return this.SubscribeAll(callback, priority);
            } else {
                if (!(topic in this.topics)) {
                    this.topics[topic] = {};
                }
            }

            if (!(guid in this.topics[topic])) {
                this.topics[topic][guid] = [];
            }

            this.topics[topic][guid].push({
                callback: callback,
                priority: priority,
                timestamp: Date.now(),
                topic: topic
            });

            return guid;
        }
    }, {
        key: 'Unsubscribe',
        value: function Unsubscribe(topic, guid) {
            if (!(topic in this.topics) || !(guid in this.topics[topic])) {
                return;
            }

            delete this.topics[topic][guid];

            return this;
        }
    }, {
        key: 'PublishAll',
        value: function PublishAll(data) {
            var _this = this;

            this.topics.forEach(function (topic) {
                _this.publish(topic, data);
            });
        }
    }, {
        key: 'SubscribeAll',
        value: function SubscribeAll() {
            var _this2 = this;

            var callback = arguments.length <= 0 || arguments[0] === undefined ? _utilities2['default'].noop : arguments[0];
            var priority = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            return this.topics.map(function (topic) {
                return _this2.Subscribe(topic, callback, priority);
            });
        }
    }]);

    return Channel;
})();

exports['default'] = Channel;
module.exports = exports['default'];

},{"./utilities":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _channel = require('./channel');

var _channel2 = _interopRequireDefault(_channel);

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

var channels = {};

var Topical = (function () {
    function Topical() {
        _classCallCheck(this, Topical);
    }

    _createClass(Topical, null, [{
        key: 'Channel',
        value: function Channel(channel) {
            if (!(channel in channels)) {
                channels[channel] = new _channel2['default'](channel);
            }

            return channels[channel];
        }
    }, {
        key: 'Publish',
        value: function Publish(topic) {
            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var _Utilities$ParseTopic = _utilities2['default'].ParseTopic(topic);

            var _Utilities$ParseTopic2 = _slicedToArray(_Utilities$ParseTopic, 2);

            var channel = _Utilities$ParseTopic2[0];
            var name = _Utilities$ParseTopic2[1];

            return Topical.Channel(channel).Publish(name, data);
        }
    }, {
        key: 'Subscribe',
        value: function Subscribe(topic) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? _utilities2['default'].noop : arguments[1];
            var priority = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

            var _Utilities$ParseTopic3 = _utilities2['default'].ParseTopic(topic);

            var _Utilities$ParseTopic32 = _slicedToArray(_Utilities$ParseTopic3, 2);

            var channel = _Utilities$ParseTopic32[0];
            var name = _Utilities$ParseTopic32[1];

            return Topical.Channel(channel).Subscribe(name, callback, priority);
        }
    }, {
        key: 'Unsubscribe',
        value: function Unsubscribe(topic, guid) {
            var _Utilities$ParseTopic4 = _utilities2['default'].ParseTopic(topic);

            var _Utilities$ParseTopic42 = _slicedToArray(_Utilities$ParseTopic4, 2);

            var channel = _Utilities$ParseTopic42[0];
            var name = _Utilities$ParseTopic42[1];

            return Topical.Channel(channel).Unsubscribe(name, guid);
        }
    }]);

    return Topical;
})();

window.topical = window.topical || Topical;

exports['default'] = Topical;
module.exports = exports['default'];

},{"./channel":2,"./utilities":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utilities = (function () {
    function Utilities() {
        _classCallCheck(this, Utilities);
    }

    _createClass(Utilities, null, [{
        key: 'noop',
        value: function noop() {}
    }, {
        key: 'ParseTopic',
        value: function ParseTopic(topic) {
            var tokens = topic.split('.');
            if (tokens.length === 1) {
                tokens.unshift('_default');
            }

            return tokens;
        }
    }, {
        key: 'Guid',
        value: function Guid() {
            var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                _ = function _(x) {
                var n = Math.random() * 16 | 0,
                    r = x === 'x' ? n : n & 0x3 | 0x8;
                return r.toString(16);
            },
                gen = function gen() {
                return guid.replace(/[xy]/g, _);
            };
            return gen();
        }
    }]);

    return Utilities;
})();

exports['default'] = Utilities;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var ModuleName = 'ccTodoApplication';
var ModuleDeps = [_application2['default'].name];

var application = angular.module(ModuleName, ModuleDeps);

},{"./application":1}]},{},[5]);
