class Membro {
  #nome;
  #idade;
  #peso;
  #altura;
  #mensalidade;

  constructor(nome, idade, peso, altura) {
    this.#nome = nome;
    this.#idade = idade;
    this.#peso = peso;
    this.#altura = altura;
    this.#mensalidade = 200;
  }

  #calculaIMC() {
    console.log(`O IMC de ${this.#nome} é ${(this.#peso / this.#altura ** 2).toFixed(2)}`);
  }

  get retornaIMC() {
    return this.#calculaIMC();
  }

  #calculaMensalidade() {
    if (this.#idade < 18) {
      this.#mensalidade = this.#mensalidade * 0.9;
    }

    console.log(`A mensalidade de ${this.#nome} é R$${this.#mensalidade}`);
  }

  get retornaMensalidade() {
    return this.#calculaMensalidade();
  }
}

const pessoa = new Membro("João", 17, 70, 1.8);
pessoa.retornaIMC;
pessoa.retornaMensalidade;
