import ForceDataService from '../../../data';

const ModuleName = 'swApplication.Force.Film.Controllers.FilmControllerModule';
const ModuleDeps = [
    ForceDataService.name
];

class FilmController {
    constructor ($routeParams, ForceDataService) {
        var [film] = ForceDataService.LoadFilm($routeParams.id);

        this.film = film;

        this.characters = [];
        this.film.fields.characters.forEach(character => {
            let [x] = ForceDataService.LoadPerson(character);
            this.characters.push(x);
        });

        this.planets = [];
        this.film.fields.planets.forEach(planet => {
            let [x] = ForceDataService.LoadPlanet(planet);
            this.characters.push(x);
        });

        this.species = [];
        this.film.fields.species.forEach(species => {
            let [x] = ForceDataService.LoadSpecies(species);
            this.species.push(x);
        });

        this.starships = [];
        this.film.fields.starships.forEach(starship => {
            let [x] = ForceDataService.LoadStarship(starship);
            this.starships.push(x);
        });

        this.vehicles = [];
        this.film.fields.vehicles.forEach(vehicle => {
            let [x] = ForceDataService.LoadVehicle(vehicle);
            this.vehicles.push(x);
        });
    }
}

FilmController.$inject = ['$routeParams', 'swApplication.Force.DataService'];

var FilmControllerModule = angular.module(ModuleName, ModuleDeps);

FilmControllerModule.controller('swApplication.Force.Film.Controllers.FilmController', FilmController);

export default FilmControllerModule;
