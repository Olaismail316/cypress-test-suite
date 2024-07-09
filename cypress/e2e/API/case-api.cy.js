/// <reference types="cypress" />

describe('CASE API Suite sanity check', function () 
{
    let casecode,caseid;
    before(() => 
    {
        cy.getUserToken();

    });
      
it.only('Create a new Case',function()
{
    cy.fixture('casecreate.json').then((userData) => 
    {
        cy.sendApiRequest('POST', '/case', userData, Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           casecode = response; 
        });
    

     })
});
    it.only("Find caseID by CaseCode", function ()
    
    {  
        cy.sendApiRequest('GET', 'case/'+casecode, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            caseid=response.caseId
       
        });
     
    })

    it("Update Case", function ()
        { 
          cy.fixture('updatecase.json').then((updateCase) => 
         
          { 
            cy.sendApiRequest('PUT', 'case/'+caseid, updateCase, Cypress.env("userToken"));
     
      
    })
  })
    it.only("Search a Case", function ()
    
    {   
        
      cy.fixture('searchcase.json').then((search) => {  
        cy.sendApiRequest('GET', 'cases/search', search, Cypress.env("userToken"));
   
         })
        })
      it.only("get All Cases", function ()
          {   
     cy.fixture('searchcase.json').then((search) => {     
        cy.sendApiRequest('GET', 'cases', search, Cypress.env("userToken"))

      
        })
      })     
})