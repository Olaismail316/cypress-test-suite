describe('Case Attachement test Suite', function () 
{
 let casecode,caseid, fileName ;
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


    
it.only('uploads a file with an attachment type via API',function()
    
    {       
         // Path to the file in the fixtures folder
         fileName = 'age.png';
        
        // Read the file from fixtures
        cy.fixture(fileName).then(fileContent => {
          // Create a new FormData instance
          const formData = new FormData();
          
          // Append the file to the FormData
          formData.append('file', new Blob([fileContent], { type: 'text/plain' }), fileName);
          
          // Append the attachment type to the FormData
          formData.append('attachmentType', 'Requisition'); // Example attachment type
          
          cy.sendApiRequest('POST', 'caseattachment/upload/'+caseid+'/Requisition', formData, Cypress.env("userToken"));
          cy.getApiResponse().then((response) => {
          expect(response.status).to.eq(200);
          cy.log(response.body)
          });
  
        });
      });
   
it.only('List Case Attachement',function()
    {
        cy.sendApiRequest('GET', 'caseattachment/'+caseid, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
         cy.log(response.body)       
        });
       
    })

    it.only('Download Case Attachement',function()
    {
        cy.sendApiRequest('GET', 'caseattachment/'+caseno+'/'+fileName, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
         cy.log(response.body)       
        });  
    })
   
    it.only('Delete Case attachement',function()
    {
        cy.sendApiRequest('DELETE', 'caseattachment/'+caseno+'/'+fileName, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
         cy.log(response.body)       
        });    
      
    })
   
})