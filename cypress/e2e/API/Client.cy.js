/// <reference types="cypress" />
describe('Client API test Suite', function () 

{
    before(() => 
        {
            cy.getUserToken();
    
        });
    it.only('Search Client',function()
    {
        cy.fixture('clientsearch.json').then((searchdata) => 
            {
            cy.sendApiRequest('POST', 'client/search', searchdata, Cypress.env("userToken"));
            cy.getApiResponse().then((response) => 
                {
               cy.log(response.body); 
            });
       
 })
})
    it.only('get Defualt Client for logged in user',function()
    {
        cy.sendApiRequest('GET', 'client/selected-client', '',Cypress.env("userToken"));
        cy.getApiResponse().then((response) => 
            {
                cy.log(JSON.stringify(response.body)) 
        });  
        
    })

    it.only('Get client Attending Physicians',function()
    {
        cy.sendApiRequest('GET', 'client/76/attendingphysicians', '',Cypress.env("userToken"));
        cy.getApiResponse().then((response) => 
            {
                cy.log(JSON.stringify(response.body)) 
        }); 
       
    })
    it.only('Get Referring Physicians',function()
    {
        cy.sendApiRequest('GET', 'client/76/refferringphysicians', '',Cypress.env("userToken"));
        cy.getApiResponse().then((response) => 
            {
                cy.log(JSON.stringify(response.body)) 
        });   
     
    })
    it.only('Get User Clients',function()
    {
        cy.sendApiRequest('GET',  'client/user-clients', '',Cypress.env("userToken"));
        cy.getApiResponse().then((response) => 
            {
                cy.log(JSON.stringify(response.body)) 
        });   
       
    })
    
})