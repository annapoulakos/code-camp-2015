var FilmData = require('./films.json'),
    PeopleData = require('./people.json'),
    PlanetData = require('./planets.json'),
    SpeciesData = require('./species.json'),
    StarshipData = require('./starships.json'),
    TransportData = require('./transport.json'),
    VehicleData = require('./vehicles.json');

const ModuleName = 'swApplication.Force.DataAbstractionLayer';
const ModuleDeps = [];

var filter = (haystack, target) => {
    if (target === null) {
        return haystack;
    }

    return haystack.filter(x => x.pk == target);
};

class DataService {
    constructor () {}

    LoadFilm (id = null) {
        return filter(FilmData, id);
    }

    LoadPerson (id = null) {
        return filter(PeopleData, id);
    }

    LoadPlanet (id = null) {
        return filter(PlanetData, id);
    }

    LoadSpecies (id = null) {
        return filter(SpeciesData, id);
    }

    LoadStarship (id = null) {
        var [starship] = filter(StarshipData, id),
            [transport] = this.LoadTransport(id);
        angular.extend(starship.fields, transport.fields);

        return [starship];
    }

    LoadTransport (id = null) {
        return filter(TransportData, id);
    }

    LoadVehicle (id = null) {
        var [vehicle] = filter(VehicleData, id),
            [transport] = this.LoadTransport(id);

        angular.extend(vehicle.fields, transport.fields);
        return [vehicle];
    }
}

DataService.$inject = [];

var DataAbstractionLayerModule = angular.module(ModuleName, ModuleDeps);

DataAbstractionLayerModule.service('swApplication.Force.DataService', DataService);

export default DataAbstractionLayerModule;
