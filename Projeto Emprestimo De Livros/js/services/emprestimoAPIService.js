angular
    .module("projetoEmprestimo")
    .factory('emprestimoAPI', emprestimoAPI) ;

var vm = this;
function emprestimoAPI($http, config) {
    vm._getEmprestimos = _getEmprestimos;
    vm._saveEmprestimo = _saveEmprestimo;
function _getEmprestimos() {
        return $http.get(config.baseUrl+ "/emprestimos");
    };
function _saveEmprestimo() {
        return $http.post(config.baseUrl + "/empretimos", emprestimo)
    };
return {
        getEmprestimos: _getEmprestimos,
        saveEmprestimo: _saveEmprestimo
    };
}

/*vm.metodo = 'POST'
if(livro, amigo.nome){
    vm.metodo = 'PUT';
}
$http({
    method: vm.metodo,
    url: urlBase + 'emprestimos/',
    data: vm.emprestimo

}).then(function successCallback(response){
    vm.carregarEmprestimo();
},  function errorCallback(response) {
    vm.ocorreuErro();
});
};*/