describe('sign off report', function () 

{
    let casecode,caseid,maintestid;
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

    it('sign off case',function()
    
    {
        const fileName = 'age.png';
        
        cy.fixture(fileName).then(fileContent => {
          const formData = new FormData();
          
          formData.append('file', new Blob([fileContent], { type: 'text/plain' }), fileName);
         
                cy.sendApiRequest('POST', 'report/upload/'+caseid, formData, Cypress.env("userToken"));
                cy.getApiResponse().then((response) => {
                   casecode = response; 
                });
            
        
             }) 
    })
    it.only("List signed off cases by ID", function ()
    
    {   
       // http://10.10.10.239:8082/case-api/v1/report/16728',
        cy.sendApiRequest('GET', 'report/'+caseid,'', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body)) 
        });        
       
    })
    it.only("Download Signed off report", function ()
    
    {  
        //'http://10.10.10.239:8082/case-api/v1/report/ON24-13328/ON24-13328_1.pdf' 
        cy.sendApiRequest('GET', 'report/'+casecode+'/'+casecode+'_1.pdf','', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body)) 
        });  
      
    })
    it.only("Download latest Signed off report", function ()
    
    {  
        //'http://10.10.10.239:8082/case-api/v1/report/downloadlatestreport/16596'
        cy.sendApiRequest('GET', 'report/downloadlatestreport/'+caseid,'', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body)) 
        });  
              
       
    })
    it.only("Delete Signed off report", function ()
    
    {  
        //'http://10.10.10.239:8082/case-api/v1/report/ON24-13383/ON24-13383-1.pdf' 
        cy.sendApiRequest('DELETE', 'report/'+casecode+'/'+casecode+'_1.pdf','', Cypress.env("userToken"));
        cy.getApiResponse().then((response) => {
            cy.log(JSON.stringify(response.body)) 
        });      
       
    })


})

