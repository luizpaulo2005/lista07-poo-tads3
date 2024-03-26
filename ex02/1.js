class Animal {
  #nome;
  #idade;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  #informacoes() {
    return `O nome do animal é ${this.#nome} e sua idade é de ${this.#idade}`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

class Mamifero extends Animal {
  #tipoDePelo;
  #som;

  constructor(nome, idade, tipoDePelo, som) {
    super(nome, idade);
    this.#tipoDePelo = tipoDePelo;
    this.#som = som;
  }

  #informacoes() {
    return `${super.retornaInformacoes}, seu tipo de pelo é ${
      this.#tipoDePelo
    } e faz esse som: ${this.#som}`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

class Ave extends Animal {
  #tipoDeBico;
  #podeVoar;
  constructor(nome, idade, tipoDeBico, podeVoar) {
    super(nome, idade);
    this.#tipoDeBico = tipoDeBico;
    this.#podeVoar = podeVoar;
  }

  #informacoes() {
    return `${super.retornaInformacoes}, seu tipo de bico é ${
      this.#tipoDeBico
    } e ele ${!this.#podeVoar ? "não pode" : "pode"} voar`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}
const macacego = new Mamifero("Morcego", 4, "Morc", "Grita");
console.log(macacego.retornaInformacoes);

const tucano = new Ave("Tucano", 2, "Curvo", false);
console.log(tucano.retornaInformacoes);