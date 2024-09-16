async function removerAluguel(id) {
    try {
    const aluguelDeletado = await Aluguel.findByIdAndDelete(id);
    return aluguelDeletado;
    } catch (erro) {
    console.error("Erro ao deletar aluguel:", erro);
    throw erro;
    }
    }

    module.exports = removerAluguel