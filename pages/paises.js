function paises() {
   return `
   <body class="container">
       <section class="d-flex flex-row justify-content-between align-items-center card card-body">
           <div>  
               <h2>Países</h2>
           </div>

           <div>
               <a class="btn btn-outline-primary" href="add-categoria.html">Novo País</a>
           </div>
       </section>

       <section class="card card-body mt-2">
           <table class="table table-hover table-striped">
               <thead class="table-primary">
                   <tr>
                       <th class="text-center">#Id</th>
                       <th>Nome do País</th>
                       <th>Continente</th>
                       <th class="text-center">Ações</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                       <td class="text-center">1</td>
                       <td>Brasil</td>
                       <td>América</td>
                       <td class="text-center">
                           <div class="d-flex justify-content-center gap-2">
                               <a href="#" class="btn btn-outline-success btn-sm">
                                   Consultar
                               </a>
                               <a href="#"  class="btn btn-outline-warning btn-sm">
                                   Editar
                               </a>
                               <a href="#" class="btn btn-outline-danger btn-sm">
                                   Excluir
                               </a>
                           </div>
                       </td>
                   </tr>
                   <tr>
                       <td class="text-center">2</td>
                       <td>Espanha</td>
                       <td>Europa</td>
                       <td class="text-center">
                           <div class="d-flex justify-content-center gap-2">
                               <a href="#" class="btn btn-outline-success btn-sm">
                                   Consultar
                               </a>
                               <a href="#" class="btn btn-outline-warning btn-sm">
                                   Editar
                               </a>
                               <a href="#" class="btn btn-outline-danger btn-sm">
                                   Excluir
                               </a>
                           </div>
                       </td>
                   </tr>
               </tbody>
           </table>
       </section>
   `;
}
