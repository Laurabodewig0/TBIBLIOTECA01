async function removerLivro(id) {
    try {
    const livroDeletado = await Livro.findByIdAndDelete(id);
    return livroDeletado;
    } catch (erro) {
    console.error("Erro ao deletar livro:", erro);
    throw erro;
    }
    }


    module.exports = removerLivro