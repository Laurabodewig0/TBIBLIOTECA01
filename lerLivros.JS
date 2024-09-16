async function lerLivros() {
    try {
    return await Livro.find();
    } catch (erro) {
    console.error("Erro ao obter livros:", erro);
    throw erro;
    }
    }

    module.exports = lerLivros