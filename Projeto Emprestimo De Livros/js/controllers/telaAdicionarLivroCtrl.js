angular
    .module('telaAdicionarLivro')
    .controller('telaAdicionarLivroCtrl', telaAdicionarLivroCtrl)

    function telaAdicionarLivroCtrl(livroApi, $scope){

        var vm = this;
        vm.livros=[];
        vm.carregarLivros      = carregarLivros;
        vm.apagarLivros        = apagarLivros;
        vm.adicionarLivro      = adicionarLivro;
        vm.alterarLivro        = alterarLivro;
        vm.ordenarPor          =   ordenarPor;


        function carregarLivros() {
            livroApi.getLivro().then(function(response){              
            vm.livros = response.data;
                });
        };

        function adicionarLivro(livro) {
            if(livro.id){
                livroApi.alterarLivro(livro).then(function (data) {
                    delete $scope.livro;
                    $scope.livroForm.$setPristine();
                    carregarLivros();
                });
            }else{
                livroApi.saveLivro(livro).then(function (data) {
                    delete $scope.livro;
                    $scope.livroForm.$setPristine();
                    carregarLivros();
                });
            }
        };

    function apagarLivros (livro) {
        vm.livros = vm.livros.filter(function (livro) {
            if (livro.selecionado) {
                livroApi.excluirLivro(livro).then(function (response){                      
                    carregarLivros();
                });
            }
        });
    }

        

        function alterarLivro (livro){
            vm.livros = vm.livros.filter(function (livro) {
                if (livro.selecionado){
                    livro.selecionado = !livro.selecionado;
                    $scope.livro = angular.copy(livro);
                }
            });
        }
            function ordenarPor (campo) {
                vm.criterioDeOrdenacao = campo;
                vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
            };
        carregarLivros();
    };