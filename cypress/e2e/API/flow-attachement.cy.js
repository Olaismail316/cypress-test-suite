describe('Flow test Suite', function () 

{
    let caseCode,case_Id,mainTestId,fileName

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
  
    it.only('uploads a file with an attachment type via API',function(){
        // Path to the file in the fixtures folder
         fileName = 'age.png';
        
        // Read the file from fixtures
        cy.fixture(fileName).then(fileContent => {
          // Create a new FormData instance
          const formData = new FormData();
          
          // Append the file to the FormData
          formData.append('file', new Blob([fileContent], { type: 'text/plain' }), fileName);
          
          cy.sendApiRequest('POST', 'flowcytometry/flowcytometryanalysis/upload/'+mainTestId, formData, Cypress.env("userToken"))
          cy.getApiResponse().then((response) => {
          expect(response.status).to.eq(200);
          cy.log(response.body)
          });
       
        });
      });
   
    it.only('Get flow cyto Analysis',function()
    {
        cy.sendApiRequest('GET', 'flowcytometry/flowcytometryanalysis/'+case_Id, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {      
            cy.log(JSON.stringify(response.body));

        }); 
      
    })
    it.only('Download flow cytometry analysis',function()
    {
        cy.sendApiRequest('GET', 'flowcytometry/flowcytometryanalysis/'+caseCode+'/'+fileName, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body));

        });   
       
    })
    it.only('Delete Case Attachement',function()
    {
        cy.sendApiRequest('DELETE', 'flowcytometry/flowcytometryanalysis/'+mainTestId+'/'+fileName, '', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body));

        });   
       
    })
  
   
   
})