function categoriasAdd() {
    return `
        <section class="card card-body mt-3">

        <div id="erro_nome" class="alert alert-danger">
            Nome Invalido
        </div>

        <div id="erro_descricao" class="alert alert-danger">
            Descrição Invalida
        </div>

        <form onsubmit="enviar()" action="">
            <label for="nome">Nome:</label>
            <input id="nome" placeholder="Digite aqui" type="text" class="form-control mb-3">

            <label for="descricao">Descrição:</label>
            <textarea id="descricao" placeholder="Digite aqui" class="form-control mb-3"></textarea>

            <label for="select-dia">Escolha o dia:</label>
            <select id="select-dia">
                <option>-- Dia --</option>
            </select>

            <label for="select-mes">Escolha o mes:</label>
            <select id="select-mes">
                <option>-- Mes --</option>
            </select>

            <label for="select-ano">Escolha o ano:</label>
            <select id="select-ano">
                <option>-- Ano --</option>
            </select>

            <button class="btn btn-primary w-100 mt-2">
                PRONTO
            </button>
        </form>
    </section>

    `;
 }
 