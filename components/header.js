function header() {
   return `
      <header class="d-flex flex-row align-items-center justify-content-between gap-5">
         <img  src="/img/logo.jpg" class="logo" alt="Logo">
         <h2>Clube do Vinho</h2>

         <nav class="mb-2 text-end""> 
            <button class="btn btn-outline-primary" onclick="alterarConteudo('dashboard')">Dashboard</button>
            <button class="btn btn-outline-primary" onclick="alterarConteudo('categorias')">Categorias</button>
            <button class="btn btn-outline-primary" onclick="alterarConteudo('clientes')">Clientes</button>        
            <button class="btn btn-outline-primary" onclick="alterarConteudo('paises')">Países</button>        
            <button class="btn btn-outline-primary" onclick="alterarConteudo('produtos')">Produtos</button>
            <button class="btn btn-outline-primary" onclick="alterarConteudo('pedidos')">Pedidos</button>
            <button class="btn btn-outline-primary" onclick="sair()">Sair</button>    
         </nav>

      </header>
      `;
}
