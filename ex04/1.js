class ItemBiblioteca {
  #titulo;

  constructor(titulo) {
    this.#titulo = titulo;
  }

  #informacoes() {
    return `O titulo deste item é ${this.#titulo}`;
  }

  get obterInformacoes() {
    return this.#informacoes();
  }
}

class Livro extends ItemBiblioteca {
  #autor;

  constructor(titulo, autor) {
    super(titulo);
    this.#autor = autor;
  }

  #informacoes() {
    return `${super.obterInformacoes} e seu autor é ${this.#autor}`;
  }

  get obterInformacoes() {
    return this.#informacoes();
  }
}

class DVD extends ItemBiblioteca {
  #duracao;

  constructor(titulo, duracao) {
    super(titulo);
    this.#duracao = duracao;
  }

  #informacoes() {
    return `${super.obterInformacoes} e seu duração é de ${this.#duracao}m`;
  }

  get obterInformacoes() {
    return this.#informacoes();
  }
}

const livro = new Livro("Livro 1", "Autor 1")
console.log(livro.obterInformacoes)

const dvd = new DVD("DVD 1", 50)
console.log(dvd.obterInformacoes)