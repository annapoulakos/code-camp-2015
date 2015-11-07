import PeopleModule from '../people';
var PeopleTemplate = require('../people/templates/people-view.html'),
    PersonTemplate = require('../people/templates/person-view.html');

import PlanetModule from '../planet';
var PlanetsTemplate = require('../planet/templates/planets-view.html'),
    PlanetTemplate = require('../planet/templates/planet-view.html');

import FilmsModule from '../film';
var FilmsTemplate = require('../film/templates/films-view.html'),
    FilmTemplate = require('../film/templates/film-view.html');

const ModuleName = 'swApplication.Force.RouterModule';
const ModuleDeps = [
    'ngRoute',
    PeopleModule.name,
    PlanetModule.name,
    FilmsModule.name
];

var ForceRouter = angular.module(ModuleName, ModuleDeps);

ForceRouter.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/People', {
            template: PeopleTemplate,
            controller: 'swApplication.Force.People.Controllers.PeopleController',
            controllerAs: 'People'
        })
        .when('/People/:id', {
            template: PersonTemplate,
            controller: 'swApplication.Force.People.Controllers.PersonController',
            controllerAs: 'Person'
        })
        .when('/Planets', {
            template: PlanetsTemplate,
            controller: 'swApplication.Force.Planet.Controllers.PlanetsController',
            controllerAs: 'Planets'
        })
        .when('/Planets/:id', {
            template: PlanetTemplate,
            controller: 'swApplication.Force.Planet.Controllers.PlanetController',
            controllerAs: 'Planet'
        })
        .when('/Films', {
            template: FilmsTemplate,
            controller: 'swApplication.Force.Film.Controllers.FilmsController',
            controllerAs: 'Films'
        })
        .when('/Films/:id', {
            template: FilmTemplate,
            controller: 'swApplication.Force.Film.Controllers.FilmController',
            controllerAs: 'Film'
        })
        .otherwise({
            redirectTo: '/Films'
        });

        $locationProvider.html5Mode(false);
    }]);

export default ForceRouter;
