class Livro {
  #titulo;
  #autor;
  #preco;

  constructor(titulo, autor, preco) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#preco = preco;
  }

  #informacoes() {
    return `O título do livro é ${this.#titulo}, seu autor é ${
      this.#autor
    } e ele custa ${this.#preco.toLocaleString("pt-br", {
      style: "currency",
      currency: "brl",
    })}`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

class LivroFisico extends Livro {
  #peso;

  constructor(titulo, autor, preco, peso) {
    super(titulo, autor, preco);
    this.#peso = peso;
  }

  #informacoes() {
    return `${super.retornaInformacoes}, seu peso é de ${parseFloat(
      this.#peso
    )} KGs`;
  }

  get retornaInformacoes() {
    return this.#informacoes();
  }
}

class eBook extends Livro {
    #tamanhoMB;

    constructor(titulo, autor, preco, tamanhoMB) {
        super(titulo, autor, preco)
        this.#tamanhoMB = tamanhoMB;
    }

    #informacoes() {
        return `${super.retornaInformacoes}, seu peso é de ${this.#tamanhoMB} MBs`;
      }
    
      get retornaInformacoes() {
        return this.#informacoes();
      }
}


const livroF = new LivroFisico("Livro 1", "Autor 1", 29.9, 2.5)
console.log(livroF.retornaInformacoes)
const livroD = new eBook("Livro 2", "Autor 2", 13.49, 70)
console.log(livroD.retornaInformacoes)