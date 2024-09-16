async function atualizarEstudante(id, Nome, Matricula, Curso, Ano)
{
try {
const estudanteAtualizado = await Estudante.findByIdAndUpdate(
id,
{ Nome, Matricula, Curso, Ano },
{ new: true, runValidators: true }
);
return estudanteAtualizado;
} catch (erro) {
console.error("Erro ao atualizar estudante:", erro);
throw erro;
}
}

module.exports = atualizarEstudante