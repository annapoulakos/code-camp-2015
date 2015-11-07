import ForceDataService from '../../../data';

const ModuleName = 'swApplication.Force.Planet.Controllers.PlanetControllerModule';
const ModuleDeps = [
    ForceDataService.name
];

class PlanetController {
    constructor ($routeParams, ForceDataService) {
        var [planet] = ForceDataService.LoadPlanet($routeParams.id);
        this.planet = planet;
    }
}

PlanetController.$inject = ['$routeParams', 'swApplication.Force.DataService'];

var PlanetControllerModule = angular.module(ModuleName, ModuleDeps);
PlanetControllerModule.controller('swApplication.Force.Planet.Controllers.PlanetController', PlanetController);

export default PlanetControllerModule;
