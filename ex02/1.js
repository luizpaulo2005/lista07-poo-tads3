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

  constructor(nome, idade, tipoDePelo) {
    super(nome, idade);
    this.#tipoDePelo = tipoDePelo;
  }

  #informacoes() {
    return `${super.retornaInformacoes} e seu tipo de pelo é ${
      this.#tipoDePelo
    }`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

class Ave extends Animal {
  #tipoDeBico;

  constructor(nome, idade, tipoDeBico) {
    super(nome, idade);
    this.#tipoDeBico = tipoDeBico;
  }

  #informacoes() {
    return `${super.retornaInformacoes} e seu tipo de bico é ${
      this.#tipoDeBico
    }`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

const tucano = new Ave("Tucano", 2, "Curvo");
console.log(tucano.retornaInformacoes)
const macacego = new Mamifero("Morcego", 4, "Morc");
console.log(macacego.retornaInformacoes)