// Arquivo index.js

const MAIN = document.getElementById("main");

MAIN.innerHTML = `
    ${header()}

    <section class="card card-body mt-2">
        <div>  
            <h2>Bem Vindo!</h2>
        </div>
    </section>

    ${footer()}`;

function alterarConteudo(pagina) {
   //console.log(pagina);
   //console.log(window[pagina]());

   MAIN.innerHTML = `${header()} ${window[pagina]()} ${footer()} `;
}
