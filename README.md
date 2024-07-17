# Landing Page Project

Este é um projeto de landing page desenvolvido em Angular. Ele exibe diferentes módulos baseados em um fluxo e segmento fornecidos. A cor da página muda dinamicamente de acordo com o segmento recebido.

## Estrutura do Projeto

- `src/app`
  - `modules`
    - `BemVindo`
      - `bemvindo.component.ts`
      - `bemvindo.component.html`
      - `bemvindo.component.css`
      - `bemvindo.module.ts`
    - `Produto`
      - `produto.component.ts`
      - `produto.component.html`
      - `produto.component.css`
      - `produto.module.ts`
    - `Cartao`
      - `cartao.component.ts`
      - `cartao.component.html`
      - `cartao.component.css`
      - `cartao.module.ts`
    - `Conta`
      - `conta.component.ts`
      - `conta.component.html`
      - `conta.component.css`
      - `conta.module.ts`
  - `pages`
    - `landing-page`
      - `landing-page.component.ts`
      - `landing-page.component.html`
      - `landing-page.component.css`
  - `services`
    - `flow.service.ts`
  - `app.module.ts`
  - `app-routing.module.ts`
- `src/styles.css`

## Requisitos

- Node.js
- Angular CLI

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/landing-page-project.git
cd landing-page-project


2. Instale as dependências:
npm install

Execução
Para rodar o projeto localmente, use o comando:
ng serve

Abra o navegador e acesse http://localhost:4200.


Estrutura de Módulos
Módulo BemVindo
Função: Exibe uma mensagem de boas-vindas.
Componentes:
 - bemvindo.component.ts
 - bemvindo.component.html
 - bemvindo.component.css

Componente de Landing Page
Função
Exibe diferentes módulos baseados no fluxo e segmento fornecidos. A cor da página muda dinamicamente de acordo com o segmento recebido.

Componentes
 - landing-page.component.ts
 - landing-page.component.html
 - landing-page.component.css

Serviço de Fluxo
Função
Gerencia a ordem dos módulos e a cor da página com base no fluxo e segmento fornecidos.

Componentes
 - flow.service.ts

