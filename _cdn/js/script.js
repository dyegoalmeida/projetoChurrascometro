let inputAdultos = document.getElementById("adult");
let inputChild = document.getElementById("child");
let inputDuracao = document.getElementById("dur");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando");

    if (inputDuracao.value > 6) {
        resultado.innerHTML = `<p>${calcCarnePorPessoa(650) / 1000} Kg de Carne</p>`;
        resultado.innerHTML += `<p>${Math.ceil(calcCervejaPorPessoa(2000) / 355)} latas de Cerveja</p>`;
        resultado.innerHTML += `<p>${Math.ceil(calcBebidaPorPessoa(1500) / 2000)} garrafas de Bebida</p>`;
    } else {
        resultado.innerHTML = `<p>${calcCarnePorPessoa(400) / 1000} Kg de Carne</p>`;
        resultado.innerHTML += `<p>${Math.ceil(calcCervejaPorPessoa(1200) / 355)} latas de Cerveja</p>`;
        resultado.innerHTML += `<p>${Math.ceil(calcBebidaPorPessoa(1000) / 2000)} garrafas de Bebidas</p>`;
    }

}

function calcCarnePorPessoa(qtdeCarne) {

    return (qtdeCarne * inputAdultos.value) + (qtdeCarne / 2 * inputChild.value);

}

function calcCervejaPorPessoa(qtdeCerveja) {

    return qtdeCerveja * inputAdultos.value;

}

function calcBebidaPorPessoa(qtdeBebida) {

    return (qtdeBebida * inputAdultos.value) + (qtdeBebida / 2 * inputChild.value);

}
