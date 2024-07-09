/// <reference types="cypress" />
describe('Case Specimen test Suite', function () 

{
    let caseCode,caseId,specimenID;

    before(() => 
    {
        cy.getUserToken();

    });

    it.only('Create a new Case',function()
    {
        cy.fixture('casecreate.json').then((caseData) => 
        {
            cy.sendApiRequest('POST', '/case', caseData, Cypress.env("userToken"));
            cy.getApiResponse().then((response) => {
               caseCode = response; 
               cy.log(caseCode)
            });
        
    
         })
    });
 it.only("Find caseID by CaseCode", function ()
        
        {  
            cy.sendApiRequest('GET', 'case/'+caseCode, '', Cypress.env("userToken"));
            cy.getApiResponse().then((response) => {
                caseId=response.caseId
                cy.log(caseId)
            });
         
        })  


    it.only('Add Specimen',function()
    {
        cy.fixture('specimen.json').then((specimenData) => {
         // const  filePath = 'cypress/fixtures/specimen.json';
            cy.task('writeCaseidToJsonFile',caseId).then(() => {
                cy.log(`CaseId "${caseId}" has been written to the JSON file`);
              });
              cy.sendApiRequest('POST', '/caseSpecimen', specimenData, Cypress.env("userToken"));
              cy.getApiResponse().then((response) => {
                 specimenID = response.body.id;
                 cy.log(specimenID)
              });
        })

    })
    it.only('Update Specimen',function()
    {
        cy.fixture('specimen.json').then((specimenData) => {

                     cy.sendApiRequest('PUT', '/caseSpecimen'+specimenID, specimenData, Cypress.env("userToken"));
                     cy.getApiResponse().then((response) => {
                       cy.log(JSON.stringify(response.body))
                     });
               })

    })

    it.only('Delete Specimen',function()
    {
        cy.sendApiRequest('DELETE', 'caseSpecimen/'+specimenID, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        }); 
       
    })
    it.only('Specimen Source',function()
    {
        cy.sendApiRequest('GET', 'lookup/specimenSources', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        });    
        
    })
    it.only('Specimen Procedures',function()
    {
        cy.sendApiRequest('GET', 'lookup/specimenProcedures', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        });     
       
    })
    it.only('Specimen Containers',function()
    {
        cy.sendApiRequest('GET', 'lookup/specimenContainers', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        }); 
        
    })
    it.only('Specimen conatiner Types',function()
    {
        cy.sendApiRequest('GET', 'lookup/specimenContainer/1/types', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        });  
      
    })
    it.only('Specimen Body Sites',function()
    {
        cy.sendApiRequest('GET', 'lookup/specimenBodySites', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
           cy.log(JSON.stringify(response.body))
        });
  
    })
})