public class livro  extends amigo{
        private String titulo;
        private String autor;
        private String editoras;
        private String anoDePublicacao;
        private String edicaoDoLivro;
        private String numeroDoEmprestimo;
        private String dataDeDevolucao;

    public livro(String titulo, String autor, String editoras, String anoDePublicacao, String edicaoDoLivro, String numeroDoEmprestimo, String dataDeDevolucao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editoras = editoras;
        this.anoDePublicacao = anoDePublicacao;
        this.edicaoDoLivro = edicaoDoLivro;
        this.numeroDoEmprestimo = numeroDoEmprestimo;
        this.dataDeDevolucao = dataDeDevolucao;
    }

    public void AdicionarLivro (){

    }

    public void RemoverLivro (){

    }

    public void Consultar Histórico(){

    }

    public void EmprestarLivro(){

    }


    public String getTitulo() {

        return titulo;
    }

    public void setTitulo(String titulo) {

        this.titulo = titulo;
    }

    public String getAutor() {

        return autor;
    }

    public void setAutor(String autor)
    {
        this.autor = autor;
    }

    public String getEditoras() {

        return editoras;
    }

    public void setEditoras(String editoras) {

        this.editoras = editoras;
    }

    public String getAnoDePublicacao() {

        return anoDePublicacao;
    }

    public void setAnoDePublicacao(String anoDePublicacao) {

        this.anoDePublicacao = anoDePublicacao;

    }

    public String getEdicaoDoLivro() {

        return edicaoDoLivro;
    }

    public void setEdicaoDoLivro(String edicaoDoLivro) {

        this.edicaoDoLivro = edicaoDoLivro;
    }

    public String getNumeroDoEmprestimo() {

        return numeroDoEmprestimo;
    }

    public void setNumeroDoEmprestimo(String numeroDoEmprestimo)
    {
        this.numeroDoEmprestimo = numeroDoEmprestimo;
    }

    public String getDataDeDevolucao() {

        return dataDeDevolucao;
    }

    public void setDataDeDevolucao(String dataDeDevolucao) {

        this.dataDeDevolucao = dataDeDevolucao;

    }

}
