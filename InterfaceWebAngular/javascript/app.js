(function() {
    'use strict';

    var app = angular.module('listaChamada', ['ngRoute'])
    app.config(function ($routeProvider) {
        $routeProvider
        .when('/listaChamada', 
            {templateUrl: 'rotas/listaChamada.html'}
        )
        .when('/relatorio',
            {templateUrl: 'rotas/relatorio.html'}
        )
        .when('/cadastroAluno',
            {templateUrl: 'rotas/cadastro.html'}
        )
    });
})();