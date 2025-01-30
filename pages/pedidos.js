function pedidos() {
   return `
 <body class="container">
     <section class="d-flex flex-row justify-content-between align-items-center card card-body">
         <div>  
             <h2>Pedidos</h2>
         </div>

         <div>
             <a class="btn btn-outline-primary" href="#">Novo Pedido</a>
         </div>
     </section>

     <section class="card card-body mt-2">
         <table class="table table-hover table-striped">
             <thead class="table-primary">
                 <tr>
                     <th class="text-center">#Id</th>
                     <th>Nome do Cliente</th>
                     <th class="text-center">Data Pedido</th>
                     <th>Status Pedido</th>
                     <th>Valor Total</th>
                     <th class="text-center">Ações</th>
                 </tr>
             </thead>

             <tbody>
                 <tr>
                     <td class="text-center">1</td>
                     <td>José Maria</td>
                     <td class="text-center">27/01/2025</td>
                     <td>Enviado</td>
                     <td>R$ 100,00</td>

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
                     <td>Maria das Dores</td>
                     <td class="text-center">28/01/2025</td>
                     <td>Pendente</td>
                     <td>R$ 200,00</td>
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
