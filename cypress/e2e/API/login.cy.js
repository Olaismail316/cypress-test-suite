/// <reference types="cypress" />
describe('Login API test Suite', function () 

{
    before(() => 
        {
            cy.getUserToken();
    
        });
        
    it.only('register user',function()
    {

        cy.fixture('register.json').then((userData) => 
            {
                cy.sendApiRequest('POST', '/register', userData, Cypress.env("userToken"));
                cy.getApiResponse().then((response) => {
                   cy.log(response.body); 
                });
            
        
             })
            })
        
})