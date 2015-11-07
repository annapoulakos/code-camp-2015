import FilmsControllerModule from './controllers/films';
import FilmControllerModule from './controllers/film';

const ModuleName = 'swApplication.Force.FilmModule';
const ModuleDeps = [
    FilmsControllerModule.name,
    FilmControllerModule.name
];

var FilmModule = angular.module(ModuleName, ModuleDeps);

export default FilmModule;
