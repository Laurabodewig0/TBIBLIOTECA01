async function lerEstudante() {
    try {
    return await Estudante.find();
    } catch (erro) {
    console.error("Erro ao verficar Estudante:", erro);
    throw erro;
    }
    }

    module.exports = lerEstudante