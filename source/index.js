import ApplicationControllerModule from './application';

const ModuleName = 'ccTodoApplication';
const ModuleDeps = [
    ApplicationControllerModule.name
];

var application = angular.module(ModuleName, ModuleDeps);
