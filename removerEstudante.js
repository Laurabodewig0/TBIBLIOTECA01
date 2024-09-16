async function removerEstudante(id) {
    try {
    const estudanteDeletado = await Estudante.findByIdAndDelete(id);
    return estudanteDeletado;
    } catch (erro) {
    console.error("Erro ao deletar estudante:", erro);
    throw erro;
    }
    }

    module.exports = removerEstudante