class Carro {
  #marca;
  #modelo;
  #ano;

  constructor(marca, modelo, ano) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }

  get obterInformacoes() {
    console.log(
      `A marca do seu carro é ${this.#marca}.\nO modelo é ${
        this.#modelo
      }.\nE o ano é ${this.#ano}`
    );
  }

  get #CalculaAnoDeUso() {
    const diferenca = new Date().getFullYear() - this.#ano;

    if (diferenca <= 0) {
      console.log("O seu carro possui menos de um ano");
    } else {
      console.log(`O seu carro possui ${diferenca} ano(s) de uso.`);
    }
  }

  get anoDeUso() {
    return this.#CalculaAnoDeUso;
  }
}

const meuCarro = new Carro("Volkswagen", "Passat CC", 2010);

meuCarro.obterInformacoes;
meuCarro.anoDeUso;
