function produtos() {
   return `
  <body class="container">
      <section class="d-flex flex-row justify-content-between align-items-center card card-body">
          <div>  
              <h2>Produtos</h2>
          </div>

          <div>
              <a class="btn btn-outline-primary" href="#">Novo Produto</a>
          </div>
      </section>

      <section class="card card-body mt-2">
          <table class="table table-hover table-striped">
              <thead class="table-primary">
                  <tr>
                      <th class="text-center">#Id</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th class="text-center">Preço</th>
                      <th class="text-center">Estoque</th>
                      <th class="text-center">Categoria</th>
                      <th class="text-center">Ações</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td class="text-center">1</td>
                      <td>Concha Y Toro</td>
                      <td>Seco com sabor amadeirado envelhecido em barris de carvalho</td>
                      <td class="text-center">R$ 50,00</td>
                      <td class="text-center">20</td>
                      <td class="text-center">Vinhos Tintos</td>
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
                      <td class="text-center">1</td>
                      <td>Cazemiro Tannat 2015</td>
                      <td>Tinto seco feito com uvas da região do rio São Francisco</td>
                      <td class="text-center">R$ 70,00</td>
                      <td class="text-center">40</td>
                      <td class="text-center">Vinhos Brancos</td>
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
