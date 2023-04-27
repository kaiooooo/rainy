const cliente = {
  nome: "Kaio",
  idade: 14,
  cpf: "12512512324",
  email: "kaio@gmail.com",
  fones: ["5511232332", "5511241234"],
  dependentes: [
    {
      nome: "Toshi",
      parentesco: "filho",
      dataNasc: "11/11/2011",
    },
  ],
};

cliente.dependentes.push({
  nome: "Juliana",
  parentesco: "filho",
  dataNasc: "12/12/2012",
});

const filhaMaisNova = cliente.dependentes.filter(
  (dependente) => dependente.dataNasc === "12/12/2012"
);
console.log(filhaMaisNova[0].nome);
