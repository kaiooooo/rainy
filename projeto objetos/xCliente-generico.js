function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const kaio = new Cliente("Kaio", "125125125", "kaio@gmail.com", 100);

console.log(kaio);
