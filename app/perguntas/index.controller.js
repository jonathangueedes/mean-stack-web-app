(function () {
    'use strict';

    angular
        .module('app')
        .controller('perguntas.IndexController', Controller);

    function Controller($window, PerguntaService, FlashService) {
        var vm = this;

        vm.perguntas = null;
        vm.savePergunta = savePergunta;
        vm.deletePergunta = deletePergunta;

  
        function savePergunta() {
            PerguntaService.Update(vm.perguntas)
                .then(function () {
                    FlashService.Success('Pergunta cadastrada com sucesso !!!');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function deletePergunta() {
            PerguntaService.Delete(vm.perguntas._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();