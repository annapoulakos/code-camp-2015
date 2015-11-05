(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonPubSub = require('../common/pub-sub');

var _commonPubSub2 = _interopRequireDefault(_commonPubSub);

var ModuleName = 'ccTodoApplication.ApplicationControllerModule';
var ModuleDeps = [_commonPubSub2['default'].name];

var ApplicationControllerModule = angular.module(ModuleName, ModuleDeps);

var ApplicationController = (function () {
    function ApplicationController(TodoPubSub) {
        _classCallCheck(this, ApplicationController);

        this.TodoItem = '';
        this.TodoPubSub = TodoPubSub;
    }

    _createClass(ApplicationController, [{
        key: 'AddTodo',
        value: function AddTodo() {
            this.TodoPubSub.Publish('ccTodoApplication:AddTodo', { value: this.TodoItem });
            this.TodoItem = '';
        }
    }]);

    return ApplicationController;
})();

ApplicationController.$inject = ['ccTodoApplication.TodoPubSub'];
ApplicationControllerModule.controller('ApplicationController', ApplicationController);

exports['default'] = ApplicationControllerModule;
module.exports = exports['default'];

},{"../common/pub-sub":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ModuleName = 'ccTodoApplication.Common.PubSubModule';
var ModuleDeps = [];

var PubSubModule = angular.module(ModuleName, ModuleDeps);

var PubSubService = function PubSubService($rootScope) {
    _classCallCheck(this, PubSubService);

    this.$scope = $rootScope;
};

PubSubService.$inject = ['$rootScope'];

PubSubModule.service('ccTodoApplication.TodoPubSub', PubSubService);

exports['default'] = PubSubModule;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var ModuleName = 'ccTodoApplication';
var ModuleDeps = [_application2['default'].name];

var application = angular.module(ModuleName, ModuleDeps);

},{"./application":1}]},{},[3]);
