async function atualizarAluguel(id, IdLivro, IdEstudante, dataAluguel, dataDevolucao)
{
try {
const aluguelAtualizado = await Aluguel.findByIdAndUpdate(
id,
{ IdLivro, IdEstudante, dataAluguel, dataDevolucao },
{ new: true, runValidators: true }
);
return aluguelAtualizado;
} catch (erro) {
console.error("Erro ao atualizar aluguel:", erro);
throw erro;
}
}

module.exports = atualizarAluguel