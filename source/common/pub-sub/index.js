const ModuleName = 'ccTodoApplication.Common.PubSubModule';
const ModuleDeps = [];

var PubSubModule = angular.module(ModuleName, ModuleDeps);

class PubSubService {
    constructor ($rootScope) {
        this.$scope = $rootScope;
    }
}
PubSubService.$inject = ['$rootScope'];

PubSubModule.service('ccTodoApplication.TodoPubSub', PubSubService);

export default PubSubModule;
