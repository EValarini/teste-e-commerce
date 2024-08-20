describe('Fluxo de Adição e Remoção de Produto ao Carrinho', () => {
  it('Deve adicionar e remover um produto do carrinho com sucesso', () => {
    // Acessa o site
    cy.visit('https://liven-store-prd.web.app/')

    // Espera a página carregar completamente
    cy.wait(3000)

    // Localiza o primeiro produto e o adiciona ao carrinho
    cy.get('.card-footer-item').first().within(() => {
      cy.contains('Carrinho').click()
    })
    // Clica no menu sanduíche
    cy.get('.navbar-burger').click()

    // Verifica se o produto foi adicionado ao carrinho
    cy.get('.cart-product-count').should('have.length.at.least', 1)

    // Espera o carrinho carregar
    cy.wait(3000)

     // Abre o carrinho
    cy.get('.cart-product-count').click()

      // Espera o carrinho carregar
      cy.wait(3000)
  
    //Adiciona item no carrinho
    cy.get('.svg-inline--fa.fa-plus.fa-w-14.is-clickable.add-or-remove-item-icon.has-text-info').click()

    // Espera a remoção ser processada
    cy.wait(3000)

    //Remove dois itens no carrinho
     cy.get('.svg-inline--fa.fa-minus.fa-w-14.is-clickable.add-or-remove-item-icon.has-text-danger').click()

    // Espera a remoção ser processada
    cy.wait(3000)

    // Verifica se o carrinho está vazio
    cy.get('.cart-product-count').should('have.length.at.least', 0)

    // Clica no menu sanduíche
    cy.get('.navbar-burger').click()

    // Espera a remoção ser processada
    cy.wait(1000)

    //Retorna a tela inicial
    cy.visit('https://liven-store-prd.web.app/')
  })
})