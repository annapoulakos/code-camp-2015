import DataServiceModule from '../../../data';

const ModuleName = 'swApplication.Force.People.Controllers.PersonControllerModule';
const ModuleDeps = [
    DataServiceModule.name
];

var PersonControllerModule = angular.module(ModuleName, ModuleDeps);

class PersonController {
    constructor ($routeParams, DataService) {
        var [person] = DataService.LoadPerson($routeParams.id);
        this.person = person;

        var [homeworld] = DataService.LoadPlanet(this.person.fields.homeworld);
        this.homeworld = homeworld;
    }
}

PersonController.$inject = ['$routeParams', 'swApplication.Force.DataService'];

PersonControllerModule.controller('swApplication.Force.People.Controllers.PersonController', PersonController);

export default PersonControllerModule;
