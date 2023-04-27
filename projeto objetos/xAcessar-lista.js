const cliente = {
  nome: "Kaio",
  idade: 14,
  cpf: "12512512324",
  email: "kaio@gmail.com",
};

const chaves = ["nome", "idade", "cpf", "email"];
console.log(cliente[chaves[0]]);

chaves.forEach((info) => console.log(cliente[info]));
