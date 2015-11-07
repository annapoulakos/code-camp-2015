import ForceModule from './force';
import ForceRouterModule from './force/router';

const ModuleName = 'swApplication';
const ModuleDeps = [
    ForceModule.name,
    ForceRouterModule.name
];

angular.module(ModuleName, ModuleDeps);
