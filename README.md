---

### 📌 **README.md** para o Projeto **Clube do Vinho**

# 🍷 Clube do Vinho

O **Clube do Vinho** é um site desenvolvido utilizando **HTML, CSS e JavaScript** com **Bootstrap** para estilização. Ele oferece uma interface para usuários realizarem login e navegarem entre diferentes páginas do sistema.

## 📁 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

CLUBEDOVINHO-FRONT
│── components/ # Componentes reutilizáveis (Header, Footer)
│── css/ # Arquivos de estilos CSS
│── img/ # Imagens utilizadas no site
│── js/ # Scripts auxiliares
│── pages/ # Páginas do site
│── .hintrc # Configuração para padrões de código
│── controller.html # Página de controle do site
│── index.html # Página inicial (Login)
│── README.md # Documentação do projeto

### 📂 **Principais Arquivos**

-  `index.html`: Página inicial contendo o formulário de login.
-  `controller.html`: Controla a navegação entre as páginas.
-  `index.js`: Manipula o conteúdo dinâmico do site.
-  `custom.css`: Contém os estilos personalizados do site.
-  `components/`: Contém arquivos como `header.js` e `footer.js` para facilitar a reutilização de código.
-  `pages/`: Contém arquivos JavaScript para diferentes seções, como **clientes**, **pedidos**, **produtos** etc.

## 🛠 **Tecnologias Utilizadas**

-  **HTML5** - Estrutura do site
-  **CSS3** - Estilização (com `custom.css`)
-  **JavaScript (ES6)** - Lógica do site
-  **Bootstrap 5** - Framework CSS para responsividade

## 🚀 **Como Executar o Projeto**

1. **Clone o repositório**
   git clone https://github.com/jeasdigitalcollege/ClubeDoVinho.git
   cd ClubeDoVinho

2. **Abra o arquivo `index.html`** diretamente no navegador.
3. **Para desenvolvimento local**, utilize a extensão "Live Server" no VS Code ou um servidor HTTP simples:
   npx http-server .

## 🖥 **Funcionamento**

-  **Login Page (`index.html`)**

   -  Permite que o usuário insira **email** e **senha**.
   -  Contém um botão "ENTRAR".
   -  Links para recuperação de senha e cadastro.

-  **Página Controladora (`controller.html`)**

   -  Gerencia a exibição de diferentes páginas do sistema, carregando dinamicamente os conteúdos.

-  **JavaScript (`index.js`)**
   -  Manipula o DOM para inserir dinamicamente o **header**, **footer** e conteúdo principal.

# ✨ **Melhorias Futuras**

-  Implementação de autenticação real com backend.
-  Adição de um banco de dados para persistência dos usuários.
-  Melhor responsividade e design aprimorado.

## 👨‍💻 **Desenvolvedor**

-  **Nome:** Jorge Eduardo Andrade Siqueira
-  **LinkedIn:** [jorgeeasiqueira](https://www.linkedin.com/in/jorgeeasiqueira)
-  **GitHub:** [jeasdigitalcollege](https://github.com/jeasdigitalcollege)

📌 Projeto criado para fins de aprendizado e desenvolvimento web! 🚀
