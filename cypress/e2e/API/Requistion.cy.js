describe('Case Requistion test Suite', function () 

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

it.only("Verify that the requistion gets download successfully", function ()
    
{  
    cy.sendApiRequest('GET', 'case/'+caseid+'/requisition', '', Cypress.env("userToken"));
    cy.getApiResponse().then((response) => {
        cy.log(response.body) 
   
    });      
   
})   


})