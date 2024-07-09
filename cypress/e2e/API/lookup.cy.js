describe('onco Lookup ', function () 
{
let maintestid
before(() => 
    {
        cy.getUserToken();

    });

it.only('Get lookup attachement',function()
{
    cy.sendApiRequest('GET', 'lookup/attachments', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body)) 
       
        });  
   
})
it.only("get main test panels", function ()
    
{  
    cy.fixture('testpanel.json').then((testData) => 
        {  
    cy.sendApiRequest('GET', 'lookup/mainTest/1/panels?clientId=10&mainTestId=1', '', Cypress.env("userToken"),testData);
    cy.getApiResponse().then((response) => {
        cy.log(JSON.stringify(response.body)) 
   
    });
})     
   
     })

it.only('Get maintest',function()
{
    cy.sendApiRequest('GET', 'lookup/mainTests', '', Cypress.env("userToken"));
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
it.only('get Priorities',function()
{
    cy.sendApiRequest('GET', 'lookup/priorities', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });   
    
})
it.only('get level of service',function()
{
    cy.sendApiRequest('GET', 'lookup/levelOfService', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });   
   
})
it.only('get case categories',function()
{
    cy.sendApiRequest('GET', 'lookup/categories', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    }); 
    
})
    
  
it.only('get state',function()
{
    
    cy.sendApiRequest('GET', 'lookup/states', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    }); 
})
it.only('get city',function()
{
    cy.sendApiRequest('GET', 'state/25/cities', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    }); 
    
})
it.only('get race',function()
{
    
    cy.sendApiRequest('GET', 'lookup/races', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    }); 
})
it.only('get sexual orientation',function()
{
    cy.sendApiRequest('GET', 'lookup/sexualOrientation', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });  
        
})
it.only('get ethnicities',function()
{
    cy.sendApiRequest('GET', 'lookup/ethnicities', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });   
    
})
it.only('get icd10',function()
{
    cy.sendApiRequest('GET', 'lookup/icd10?searchTerm=ABC', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });   
    
})
it.only('get stage of disease',function()
{
    cy.sendApiRequest('GET', 'lookup/stageOfDisease', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });   
    
})
it.only('reset lookups',function()
{
    cy.sendApiRequest('DELETE', 'lookup/reset', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });    
    
})
it.only('delete races',function()
{
    cy.sendApiRequest('DELETE', 'lookup/reset/races', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
    cy.log(JSON.stringify(response.body)) 
    });    
   
})
})