# Paradise Nursery

Front-end de uma loja de plantas domésticas criado para o projeto final do curso. O aplicativo oferece página inicial, catálogo com 18 plantas em três categorias e carrinho de compras interativo.

- **Aplicativo publicado:** https://micael-h.github.io/paradise-nursery/
- **Repositório público:** https://github.com/Micael-H/paradise-nursery

## Funcionalidades

- Página inicial com imagem de fundo, apresentação da empresa e botão **Get Started**.
- Catálogo de plantas com foto, nome, preço e botão **Add to Cart**, desativado após a inclusão.
- Navegação entre Início, Plantas e Carrinho, com contador dinâmico de itens.
- Carrinho com quantidade total, preço unitário, subtotal por planta e valor total.
- Controles para aumentar, diminuir e excluir plantas. O checkout exibe **Em breve**.
- Estado do carrinho gerenciado com Redux Toolkit e salvo no navegador.
- Layout responsivo e navegação por teclado.

## Tecnologias

React, Vite, React Router, Redux Toolkit e CSS.

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal. Para verificar a versão de produção:

```bash
npm run build
npm run preview
```

## Atualizar o GitHub Pages

Depois de alterar o aplicativo, envie o código para a branch `main` e, dentro desta pasta, execute:

```bash
npm install
npm run deploy
```

O GitHub Pages está configurado para publicar a branch `gh-pages` na pasta `/ (root)`. A opção `base: './'` do Vite e o HashRouter permitem que as rotas funcionem no endereço publicado.

## Arquivos principais da avaliação

- [`src/AboutUs.jsx`](src/AboutUs.jsx): apresentação da empresa.
- [`src/App.css`](src/App.css): estilos e imagem de fundo da página inicial.
- [`src/App.jsx`](src/App.jsx): página inicial e rotas.
- [`src/CartSlice.jsx`](src/CartSlice.jsx): estado Redux do carrinho.
- [`src/ProductList.jsx`](src/ProductList.jsx): catálogo de plantas.
- [`src/CartItem.jsx`](src/CartItem.jsx): carrinho de compras.

As imagens originais deste projeto estão em `public/images/`. A imagem do catálogo contém 18 fotografias organizadas em uma grade; cada produto mostra seu próprio recorte.
