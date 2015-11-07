import DataServiceModule from '../../../data';

const ModuleName = 'swApplication.Force.People.Controllers.PeopleControllerModule';
const ModuleDeps = [
    DataServiceModule.name
];

var PeopleControllerModule = angular.module(ModuleName, ModuleDeps);

class PeopleController {
    constructor (ForceDataService) {
        this.people = ForceDataService.LoadPerson();
    }
}

PeopleController.$inject = ['swApplication.Force.DataService'];

PeopleControllerModule.controller('swApplication.Force.People.Controllers.PeopleController', PeopleController);

export default PeopleControllerModule;
