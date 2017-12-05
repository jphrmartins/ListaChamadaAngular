(function () {
    'use strict'

    angular
        .module('listaChamada')
        .controller('chamada', function ($scope, taskServices) {
            taskServices.get().then(function (response) {
                $scope.lista = response.data;
            });
            $scope.atribuirPresenca = function (id) {
                var i = 0;
                while (i < $scope.lista.length) {
                    if ($scope.lista[i].id === id) {
                        var aluno = $scope.lista[i];
                        if (aluno.presente) {
                            aluno.quantidaDePresenca++;
                        } else {
                            aluno.quantidaDePresenca--;
                        }
                        $scope.lista[i] = aluno;
                        break;
                    }
                    i++
                }
            }
            $scope.contabilizar = function () {
                for (let i = 0; i < $scope.lista.length; i++) {
                    var aluno = $scope.lista[i];
                    if (i === 0) {
                        aluno.quantidaDePresenca++;
                        taskServices.put(aluno).then(function (response) {
                            console.log('Dia Acrescentado');
                        });
                    }else if(aluno.presente){
                        aluno.presente = !aluno.presente;
                        taskServices.put(aluno).then(function (response) {
                            console.log(response.data);
                        });   
                    }
                }
                alert('Presenças contabilizadas');
            }

        });
})();