import PeopleControllerModule from './controllers/people';
import PersonControllerModule from './controllers/person';

const ModuleName = 'swApplication.Force.PeopleModule';
const ModuleDeps = [
    PeopleControllerModule.name,
    PersonControllerModule.name
];

var PeopleModule = angular.module(ModuleName, ModuleDeps);

export default PeopleModule;
