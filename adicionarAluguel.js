async function adicionarAluguel(IdLivro, IdEstudante, dataAluguel, dataDevolucao) {
    try {
    const novoAluguel = new Aluguel({ IdLivro, IdEstudante, dataAluguel, dataDevolucao });
    return await novoAluguel.save();
    } catch (erro) {
    console.error("Erro ao verificar Aluguel:", erro);
    throw erro;
    }
    }

    module.exports = adicionarAluguel