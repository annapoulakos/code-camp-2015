import ForceDataService from '../../../data';

const ModuleName = 'swApplication.Force.Film.Controllers.FilmsControllerModule';
const ModuleDeps = [
    ForceDataService.name
];

class FilmsController {
    constructor (ForceDataService) {
        this.films = ForceDataService.LoadFilm();
    }
}

FilmsController.$inject = ['swApplication.Force.DataService'];

var FilmsControllerModule = angular.module(ModuleName, ModuleDeps);

FilmsControllerModule.controller('swApplication.Force.Film.Controllers.FilmsController', FilmsController);

export default FilmsControllerModule;
