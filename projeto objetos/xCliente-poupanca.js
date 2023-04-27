function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const toshi = new clientePoupanca(
  "Toshi",
  "12451224124124",
  "toshi@gmail.com",
  100,
  200
);

console.log(toshi);

clientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

toshi.depositarPoup(10);
console.log(toshi.saldoPoup);
