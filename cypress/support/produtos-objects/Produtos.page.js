class ProdutosPage {
    visitarProdutos() {
        cy.visit('produtos');
    }

    buscarProduto() {
       
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
         .contains('nomeProduto')
            .click()
      
    }

    visitarProduto() {
        
    }
    addProdutoCarrinho() {
       
    }
}

export default new ProdutosPage();