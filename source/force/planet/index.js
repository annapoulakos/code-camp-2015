import PlanetsControllerModule from './controllers/planets';
import PlanetControllerModule from './controllers/planet';

const ModuleName = 'swApplication.Force.PlanetModule';
const ModuleDeps = [
    PlanetControllerModule.name,
    PlanetsControllerModule.name
];

var PlanetModule = angular.module(ModuleName, ModuleDeps);

export default PlanetModule;
