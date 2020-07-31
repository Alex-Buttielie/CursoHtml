angular
    .module('projetoEmprestimo')
    .controller('projetoEmprestimoCtrl', projetoEmprestimoCtrl)


function projetoEmprestimoCtrl(amigosAPI, $scope) {

    var vm = this;
    //vm.app = "Projeto Emprestimo";
    vm.amigos=[];
    //vm.livros=[];
    //vm.emprestimo=[];

    vm.mudaFoto              = mudaFoto;
    vm.carregarAmigos        = carregarAmigos;
    //vm.carregarLivros      = carregarLivros;
    //vm.carregarEmprestimo  = carregarEmprestimo;
    vm.adicionarAmigos        = adicionarAmigos;
    vm.apagarAmigos          = apagarAmigos;
    //vm.apagarLivros        = apagarLivros;
    //vm.isAmigoSelecionado    = isAmigoSelecionado;
    //vm.isLivroSelecionado    = isLivroSelecionado;
    vm.ordenarPor            = ordenarPor;
    //vm.adicionarLivro      = adicionarLivro;
    //vm.adicionarEmprestimo = adicionarEmprestimo;


    function mudaFoto(foto) {
        document.getElementById("icone").src= foto;

    }
    function carregarAmigos() {
        amigosAPI.getAmigos().then(function(response){              
        vm.amigos = response.data;
            });
    };

   /* function carregarLivros() {
        livroAPI.getLivros().then(function (response) {
            response.data.forEach(function(item){
                item.serial = serialGenerator.generate();
                console.log(item);
            });
            vm.livros;
        });
    };*/

    /*function carregarEmprestimo() {

        amigosAPI.getAmigos().then(function(response){
            response.data.forEach(function (item){
                item.serial = serialGenerator.generate();
                console.log(item);
            });
            vm.amigos = response.data;
        });
        amigosAPI.getAmigos().then(function(response){
            response.data.forEach(function (item){
                item.serial = serialGenerator.generate();
                console.log(item);
            });
            vm.amigos = response.data;
        });
    };*/

   /* function adicionarEmprestimo(livro, amigo) {
        carregarAmigos();
        carregarLivros();
        if (amigo.selecionado  && livro.selecionado){
        emprestimoAPI.saveEmprestimo(amigo, livro).then(function (data) {
            delete $scope.amigo;
            delete $scope.livro;
            $scope.amigoForm.$setPristine();
            $scope.livroForm;$setPristine();
            carregarAmigos();
            carregarLivros();
        });
        };

        vm.metodo = 'POST'
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

    function adicionarAmigos(amigo) {
        if(amigo.id){
            amigosAPI.alterarAmigo(amigo).then(function (data) {
                delete $scope.amigo;
                $scope.amigoForm.$setPristine();
                carregarAmigos();
            });
        }else{
            amigosAPI.saveAmigo(amigo).then(function (data) {
                delete $scope.amigo;
                $scope.amigoForm.$setPristine();
                carregarAmigos();
            });
        }
    };
    /*function adicionarLivro(livro) {
        livroApi.savelivro(livro).then(function (data) {
            livro.data = new Date();
            delete $scope.livro;
            $scope.livroForm.$setPristine();
            carregarLivros();
        });
    };*/

    
    function apagarAmigos (amigo) {
        vm.amigos = vm.amigos.filter(function (amigo) {
            if (amigo.selecionado) {
                amigosAPI.excluirAmigo(amigo).then(function (response){                      
                    carregarAmigos();
                });
            }
        });
    }

    /*function apagarLivros() {
        vm.livros = vm.livros.filter(function(livro){
            if(!livro.selecionado) return livro;
        });
    };*/
   /* function  isAmigoSelecionado(amigos) {
        return vm.amigos.some(function(amigo){
            return amigo.selecionado;
        });
    };*/
    /*function  isLivroSelecionado(livros) {
        return vm.livros.some(function(livro){
            return livro.selecionado;
        });
    };*/
    function ordenarPor(campo){
        vm.criterioDeOrdenacao = campo;
        vm.direcaoDaOrdenacao  = !vm.direcaoDaOrdenacao;
    };

    carregarAmigos();
   //carregarLivros();
    //carregarEmprestimo();

};