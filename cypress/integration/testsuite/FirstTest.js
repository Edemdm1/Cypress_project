describe('My First Test', () => 
{
    it('Verify Title Of The Page Positive', () => 
    {
     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Verify Title Of The Page Negative', () => 
    {
     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq', 'nopCommerce store')
    })
    
  })