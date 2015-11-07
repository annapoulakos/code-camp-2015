var targets = require('./force-targets.json');

const ModuleName = 'swApplication.ForceModule';
const ModuleDeps = [];

class ForceController {
    constructor () {
        this.targets = targets;
    }
}

ForceController.$inject = [];

var ForceModule = angular.module(ModuleName, ModuleDeps);

ForceModule.controller('swApplication.ForceModule.ForceController', ForceController);

export default ForceModule;
