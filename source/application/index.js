import Topical from '../common/topical';

const ModuleName = 'ccTodoApplication.ApplicationControllerModule';
const ModuleDeps = [];

var ApplicationControllerModule = angular.module(ModuleName, ModuleDeps);

class ApplicationController {
    constructor () {
        this.TodoItem = '';
    }

    AddTodo () {
        Topical.Publish('ccTodoApplication:AddTodo', {value: this.TodoItem});
        this.TodoItem = '';
    }
}
ApplicationController.$inject = [];
ApplicationControllerModule.controller('ApplicationController', ApplicationController);

export default ApplicationControllerModule;
