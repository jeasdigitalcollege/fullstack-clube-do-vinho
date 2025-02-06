const INPUT_NUMERO = document.getElementById('card_numero');
const SPAN_NUMERO = document.getElementById('resultado_numero');

const IMG_BANDEIRA = document.getElementById('card_bandeira');

const INPUT_TITULAR = document.getElementById('card_titular');
const SPAN_TITULAR = document.getElementById('resultado_titular');

const INPUT_CVV = document.getElementById('card_cvv');

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

const SELECT_MES = document.getElementById('card_mes');
const SPAN_MES = document.getElementById('resultado_mes');
for (let mes = 0; mes <=11; mes++) {            // Pode ser usado o map()
    SELECT_MES.innerHTML += `<option>${MESES[mes]}</option>`;    
}

const SELECT_ANO = document.getElementById('card_ano');
const SPAN_ANO = document.getElementById('resultado_ano');

let hoje = new Date();
let anoFim = hoje.getFullYear() + 10;
for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

// Event Listener para entrada de dados no campo do cartão
INPUT_NUMERO.addEventListener('input', (e) => {
    let formattedValue = formatarNumeroCartao(e.target.value);
    e.target.value = formattedValue;

    SPAN_NUMERO.innerHTML = formattedValue || '0000 0000 0000 0000';
    identificarBandeira(formattedValue.replace(/\s/g, '')); // Remove espaços antes de verificar a bandeira
});

// Função para formatar o número do cartão
function formatarNumeroCartao(numero) {
    let value = numero.replace(/\D/g, '').substring(0, 16); // Remove não números e limita a 16 caracteres
    return value.replace(/(\d{4})/g, '$1 ').trim(); // Adiciona espaços a cada 4 dígitos
}

/*
Numeração de Cartões de CRédito:
Visa: Começa com o número 4 
Mastercard: Começa com os números entre 51 e 55, ou entre 2221 a 2720 
American Express: Começa com os números 34 ou 37 
Elo: Pode começar com vários intervalos, como 4011, 4312, 4389, entre outros 
*/
// Função para identificar a bandeira do cartão
function identificarBandeira(numero) {
    let bandeira = 'default.png'; // Imagem padrão

    if (/^4/.test(numero)) {
        bandeira = 'visa.png';
    } else if (/^5[1-5]/.test(numero) || /^2(2[2-9][1-9]|2[3-9]\d\d|[3-6]\d\d\d|7[0-1]\d\d|720)/.test(numero)) {
        bandeira = 'mastercard.png';
    } else if (/^3[47]/.test(numero)) {
        bandeira = 'amex.png';
    } else if (/^6(011|5)/.test(numero) || /^(50|65)/.test(numero)) {
        bandeira = 'elo.png';
    }

    IMG_BANDEIRA.src = `img/${bandeira}`;
}

// Validar e atualizar nome do titular
INPUT_TITULAR.addEventListener('input', () => {
    let nome = INPUT_TITULAR.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
    INPUT_TITULAR.value = nome;
    SPAN_TITULAR.innerHTML = nome || 'NOME DO TITULAR';
});

// Aplicar máscara no CVV
INPUT_CVV.addEventListener('input', () => {
    INPUT_CVV.value = INPUT_CVV.value.replace(/\D/g, '').substring(0, 4);
});

function selecionarMes() {
    let m= SELECT_MES.selectedIndex;

    if(m < 10) {
        SPAN_MES.innerHTML = "0"+m;

    } else {
        SPAN_MES.innerHTML = m;
    }
}

function selecionarAno() {
    SPAN_ANO.innerHTML = SELECT_ANO.value;
}
