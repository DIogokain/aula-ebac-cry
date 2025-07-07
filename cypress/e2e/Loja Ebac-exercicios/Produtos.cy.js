/// <reference types="cypress" />
import produtosPage from '../../support/page-objects/produtos.page'

describe('Funcionalidades: Produtos', () => {
    beforeEach(() => {
         produtosPage.visitarUrl();
    });
    it.only('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Circe Hooded Ice Fleece')
            cy.get('#tab-title-description >a').should
        
    });

    it('deve visitar a pagina do produto', () => {

});
    it('Deve adicionar um produto ao carrinho', () => {

})

    it('deve buscar um produto de sucesso', () => {
        produtosPage.buscarProduto('')

})

})