

describe('test Main test all action', function () 
{

    let caseCode,case_Id,mainTestId;
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
           caseCode = response; 
           cy.log(caseCode)
        });
    

     })
});
    it.only("Find caseID by CaseCode", function ()
    
    {  
        cy.sendApiRequest('GET', 'case/'+caseCode, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            case_Id=response.caseId
            cy.log(case_Id)
        });
     
    })  
    it.only('create main test',function()
    {
        cy.fixture('maintest.json').then((testData) => {
         // const filepath = 'cypress/fixtures/maintest.json';
        cy.task('writeCaseidToJsonFile',case_Id).then(() => {
            cy.log(JSON.stringify(testData));

            cy.log(`CaseId "${case_Id}" has been written to the JSON file`);
          });        
          cy.sendApiRequest('POST', '/caseMainTest', testData, Cypress.env("userToken"));
          cy.getApiResponse().then((response) => {
            mainTestId = response; 
            cy.log(mainTestId)
          });

   
    })
    })
    
    it("get Main test details by id", function ()
    
    {   
            cy.sendApiRequest('GET', '/caseMainTest', '', Cypress.env("userToken"));
            cy.getApiResponse().then((response) => {
                cy.log(response.body)
              });
       
       
    })
    it.only("Submit Case", function ()
    {    
        cy.sendApiRequest('PUT', 'case/'+case_Id+'/submit', '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(response.body)
          });
   
  })

    it("start job", function ()
    
    {      
        cy.sendApiRequest('PUT', 'job/25/start', '', Cypress.env("userToken"));
    
        
    })
    it("submit job", function ()
    
    {   
        cy.sendApiRequest('PUT', 'job/25/submit', '', Cypress.env("userToken"));
     
        
    })
    it.only("update Case main test", function ()
    
    {     
        cy.fixture('updatetest.json').then((testData) => {

        cy.sendApiRequest('PUT', 'caseMainTest/'+mainTestId, testData, Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(response.body)
          });
    })
})
  
    it.only("Delete Main test details by id", function ()
    
    {   
        cy.sendApiRequest('DELETE', 'caseMainTest/'+mainTestId, '',Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(response)
          });
    })


})