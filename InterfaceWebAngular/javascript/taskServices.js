(function() {
    'use strict';

    angular
        .module('listaChamada')
        .service('taskServices', function ($http) {
            this.get = function(){
                return $http.get('http://localhost:8083/listaChamada');
            }
            this.post = function (aluno) {
                return $http.post('http://localhost:8083/listaChamada/add', aluno);
            }
            this.put = function (aluno) {
                return $http.put('http://localhost:8083/listaChamada/update', aluno);
            }
            this.delete = function (id) {
                return $http.delete('http://localhost:8083/listaChamada/delete/' + id);
            }
        });
})();