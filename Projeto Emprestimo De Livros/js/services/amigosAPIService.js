angular
    .module("projetoEmprestimo")
    .factory("amigosAPI", amigosAPI);

var vm = this;
    function amigosAPI($http, config) {
        

        vm.getAmigos = getAmigos;
        vm.saveAmigo = saveAmigo;
        vm.excluirAmigo = excluirAmigo;
        vm.alterarAmigo = alterarAmigo;

        function getAmigos() {
            return $http.get(config.baseUrl + "/amigo/listarTodos")
        };

        function saveAmigo(amigo) {
            return $http.post(config.baseUrl + "/amigo", amigo);
        };

        function excluirAmigo(amigo){
            return $http.delete(config.baseUrl + "/amigo/"+ amigo.id)
        };

        function alterarAmigo(amigo){
            return $http.put(config.baseUrl + "/amigo/", amigo)
        };

        return{
            getAmigos: getAmigos,
            saveAmigo: saveAmigo,
            excluirAmigo: excluirAmigo,
            alterarAmigo: alterarAmigo
        };

    };