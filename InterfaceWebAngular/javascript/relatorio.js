(function() {
    'use strict';

    angular
        .module('listaChamada')
        .controller('relatorio', function ($scope, taskServices) {
            if (!$scope.lista) {
                $scope.lista = [];
            }
            taskServices.get().then(function (response) {
                $scope.lista = response.data;
            }).then(function () {
                var aulas = $scope.lista[0].quantidaDePresenca;
                $scope.quantidadeAulas = aulas;
            });
        });
})();