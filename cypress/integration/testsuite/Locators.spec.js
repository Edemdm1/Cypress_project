///  <reference types = "cypress"/>

describe('Locating Element', () => 
    {
        it('Verify types of locators', () => 
            {   
            
            cy.visit("https://demo.nopcommerce.com/") // Opens the URL

            cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //Search box

            cy.get([type='submit']).click // Click on Search button
        
            }
        )
    }
)