import TodoPubSubModule from '../common/pub-sub';

const ModuleName = 'ccTodoApplication.ApplicationControllerModule';
const ModuleDeps = [
    TodoPubSubModule.name
];

var ApplicationControllerModule = angular.module(ModuleName, ModuleDeps);

class ApplicationController {
    constructor (TodoPubSub) {
        this.TodoItem = '';
        this.TodoPubSub = TodoPubSub;
    }

    AddTodo () {
        this.TodoPubSub.Publish('ccTodoApplication:AddTodo', {value: this.TodoItem});
        this.TodoItem = '';
    }
}
ApplicationController.$inject = ['ccTodoApplication.TodoPubSub'];
ApplicationControllerModule.controller('ApplicationController', ApplicationController);

export default ApplicationControllerModule;
