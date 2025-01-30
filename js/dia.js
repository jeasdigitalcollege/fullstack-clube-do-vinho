document.addEventListener('DOMContentLoaded', function() {
    inicializarSelects(); // Chama a função que inicializa os selects
});

function inicializarSelects() {
    const SELECT_DIA = document.getElementById('select-dia');
    const SELECT_MES = document.getElementById('select-mes');
    const SELECT_ANO = document.getElementById('select-ano');

    if (SELECT_DIA && SELECT_MES && SELECT_ANO) {
        
        let numero = 1;
        while (numero <= 31) {
            SELECT_DIA.innerHTML += `<option>${numero}</option>`;
            numero++;
        }

        let mes = 1;
        do {
            SELECT_MES.innerHTML += `<option>${mes}</option>`;
            mes++;
        } while (mes <= 12);

        for (let ano = 2025; ano >= 1950; ano--) {
            if (ano % 2 !== 0) {
                SELECT_ANO.innerHTML += `<option>${ano}</option>`;
            }
        }
    } else {
        console.error("Elementos select não encontrados!");  // Importante para depuração
    }
}