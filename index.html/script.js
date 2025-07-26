// Funções para manipulação da calculadora
let display = document.getElementById("display");

function adicionarNumero(numero) {
    display.value += numero;
}

function adicionarOperacao(operacao) {
    display.value += " " + operacao + " ";
}

function adicionarPonto() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function limpar() {
    display.value = '';
}

function calcular() {
    try {
        display.value = eval(display.value); // Calcula a expressão com eval
    } catch (error) {
        display.value = "Erro"; // Se houver erro na operação
    }
}
