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
    {
      nome: "Juliana",
      parentesco: "filho",
      dataNasc: "12/12/2012",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info} - ${cliente[info]}`;
  }
}

console.log(relatorio);
