async function atualizarLivros(id, Titulo, Autor, Ano, Genero)
{
try {
const livroAtualizado = await Livro.findByIdAndUpdate(
id,
{ Titulo, Autor, Ano, Genero },
{ new: true, runValidators: true }
);
return livroAtualizado;
} catch (erro) {
console.error("Erro ao atualizar livro:", erro);
throw erro;
}
}

module.exports = atualizarLivros