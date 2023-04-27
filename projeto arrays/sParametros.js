//parametros de funcao
//             2     2
function soma(num1, num2) {
  return num1 + num2;
}
//console.log(soma(2, 2));

//parametros x argumentos

//ordem dos parametros
function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade("b", 2));

function multiplica(numero1, numero2) {
  return numero1 * numero2;
}
//                          9           6
console.log(multiplica(soma(4, 5), soma(3, 3)));
