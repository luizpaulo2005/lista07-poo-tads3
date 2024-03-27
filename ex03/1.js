class Calculadora {
    #valor1;
    #valor2;

    constructor(valor1, valor2) {
        this.#valor1 = valor1;
        this.#valor2 = valor2;
    }

    #somar() {
        return this.#valor1 + this.#valor2;
    }

    get returnSoma() {
        return this.#somar();
    }

    #subtrair() {
        return this.#valor1 - this.#valor2;
    }

    get returnSubtracao() {
        return this.#subtrair();
    }

    #multiplicar() {
        return this.#valor1 * this.#valor2;
    }

    get returnMultiplicacao() {
        return this.#multiplicar();
    }

    #dividir() {
        return this.#valor1 / this.#valor2;
    }

    get returnDivisao() {
        return this.#dividir();
    }

    #potencia() {
        return this.#valor1 ** this.#valor2;
    }

    get returnPotencia() {
        return this.#potencia();
    }

    #raizQuadrada() {
        return Math.sqrt(this.#valor1);
    }

    get returnRaizQuadrada() {
        return this.#raizQuadrada();
    }
}

const calculadora = new Calculadora(10, 2);
console.log(calculadora.returnSoma);
console.log(calculadora.returnSubtracao);
console.log(calculadora.returnMultiplicacao);
console.log(calculadora.returnDivisao);
console.log(calculadora.returnPotencia);
console.log(calculadora.returnRaizQuadrada);