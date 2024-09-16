async function AdicionarLivros(Titulo, Autor, Ano, Genero) {
    try {
    const novoLivro = new Livro({ Titulo, Autor, Ano, Genero });
    return await novoLivro.save();
    } catch (erro) {
    console.error("Erro ao criar livro:", erro);
    throw erro;
    }
    }

    module.exports = AdicionarLivros