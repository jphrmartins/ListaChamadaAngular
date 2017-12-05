(function() {
    'use strict';

    angular
        .module('listaChamada')
        .controller('cadastro', function ($scope, taskServices) {
            $scope.aluno = {id: 0, nomeAluno: '', quantidaDePresenca: 0, presente: false}
            $scope.cadastrar = function (aluno) {
                taskServices.post(aluno).then(function (response) {
                   alert(response.data);
                   console.log(response.status + ' ' + response.statusText); 
                   $scope.aluno = {id: 0, nomeAluno: '', quantidaDePresenca: 0, presente: false}
                });
            }
        });
})();