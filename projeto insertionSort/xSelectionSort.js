const livros = require("./xLista-livros");
const menorValor = require("./xIndex");

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menorValor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);
