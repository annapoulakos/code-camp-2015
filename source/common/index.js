import PubSubModule from './pub-sub';

const ModuleName = 'ccTodoApplication.Common';
const ModuleDeps = [
    PubSubModule.name
];

var CommonModule = angular.module(ModuleName, ModuleDeps);

export default CommonModule;
