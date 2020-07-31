angular
    .module("telaAdicionarLivro")
    .factory("livroApi", livroApi);

var vm = this;
    function livroApi($http, config) {
        

        vm.getLivro = getLivro;
        vm.saveLivro = saveLivro;
        vm.excluirLivro = excluirLivro;
        vm.alterarLivro = alterarLivro;

        function getLivro() {
            return $http.get(config.baseUrl + "/livro/listarTodos")
        };

        function saveLivro(livro) {
            return $http.post(config.baseUrl + "/livro", livro);
        };

        function excluirLivro(livro){
            return $http.delete(config.baseUrl + "/livro/"+ livro.id)
        };

        function alterarLivro(livro){
            return $http.put(config.baseUrl + "/livro/", livro)
        };

        return{
            getLivro: getLivro,
            saveLivro: saveLivro,
            excluirLivro: excluirLivro,
            alterarLivro: alterarLivro
        };

    };