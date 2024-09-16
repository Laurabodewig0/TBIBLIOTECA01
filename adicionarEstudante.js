async function adicionarEstudante(Nome, Matricula, Curso, Ano) {
    try {
    const novoEstudante = new Estudante({ Nome, Matricula, Curso, Ano });
    return await novoEstudante.save();
    } catch (erro) {
    console.error("Erro ao adicionar Estudante:", erro);
    throw erro;
    }
    }

    module.exports = adicionarEstudante