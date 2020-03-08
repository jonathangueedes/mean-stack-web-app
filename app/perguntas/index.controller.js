(function () {
    'use strict';

    angular
        .module('app')
        .controller('perguntas.IndexController', Controller);

    function Controller($window, PerguntaService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.saveUser = savePergunta;
        vm.deleteUser = deletePergunta;

  
        function savePergunta() {
            PerguntaService.Update(vm.user)
                .then(function () {
                    FlashService.Success('Pergunta cadastrada com sucesso !!!');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function deletePergunta() {
            PerguntaService.Delete(vm.user._id)
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