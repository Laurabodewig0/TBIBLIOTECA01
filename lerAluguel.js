async function lerAluguel() {
    try {
    return await Aluguel.find();
    } catch (erro) {
    console.error("Erro ao verificar Alguel:", erro);
    throw erro;
    }
    }

    module.exports = lerAluguel