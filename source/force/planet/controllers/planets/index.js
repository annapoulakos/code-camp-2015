import ForceDataService from '../../../data';

const ModuleName = 'swApplication.Force.Planet.Controllers.PlanetsControllerModule';
const ModuleDeps = [
    ForceDataService.name
];

class PlanetsController {
    constructor (ForceDataService) {
        this.planets = ForceDataService.LoadPlanet();
    }
}

PlanetsController.$inject = ['swApplication.Force.DataService'];

var PlanetsControllerModule = angular.module(ModuleName, ModuleDeps);

PlanetsControllerModule.controller('swApplication.Force.Planet.Controllers.PlanetsController', PlanetsController);

export default PlanetsControllerModule;
