describe('Case Attachement test Suite', function () 

{
    let token,caseno,caseID
    it.only("Get keytoken by login user", function ()
    
    {        
        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8081/user-api/v1/user/authenticate',

            body: {
                email: 'admin@siparadigm.com',
                password: 'test'
                  }

        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
                token = response.body.token
                cy.log(JSON.stringify(token)) 
            }
            else {
                cy.log('status is 403')
            }
        })
    })
    
    it.only('Create a new Case',function()
    {
        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/case',
             headers: {
                Authorization: 'Bearer '+ token
                      },
            body:   {
                    "patient": {
                      "id": 170,
                      "ssn": "102365489",
                      "firstName": "Kawthar",
                      "middleInitial": "st",
                      "lastName": "Fahd",
                      "dob": "2024-04-04T09:42:57.535Z",
                      "gender": "male",
                      "state": "string",
                      "city": "string",
                      "address": "string",
                      "zipCode": "string",
                      "cellPhone": "string",
                      "homePhone": "string",
                      "mrn": "string",
                      "race": "string",
                      "ethnicity": "string",
                      "sexualOrientation": "string",
                      "sexualOrientationDescribe": "string"
                    },
                    "client": {
                      "id": 10,
                      "name": "string",
                      "clientId": "string",
                      "priorityId": 1,
                      "priority": "STAT"
                    },
                    "attendingPhysicianId": 1,
                    "referringPhysicianId": 1,
                    "caseCategory": "OX",
                    "levelOfService": "PROFESSIONAL_ONLY",
                    "requisitionNumber": "string",
                    "requisitionType": "string",
                    "specimenNumber": "string",
                    "referringInstitutionBlock": "string",
                    "reportType": "string",
                    "reportTemplate": "string",
                    "reportFormat": "string",
                    "requestedDate": "2024-04-04T09:42:57.535Z",
                    "indication": "string",
                    "testCode": "string",
                    "billingInfo": "INSURANCE",
                    "specimens": [
                      {
                        "id": 0,
                        "data": {
                          "containerName": "string",
                          "typeName": "string",
                          "numberOfLabel": 0,
                          "labelId": "string",
                          "specimenAmount": "string",
                          "identifier": "string",
                          "comment": "string",
                          "source": "string",
                          "bodySite": "string",
                          "procedure": "string",
                          "repeatNumber": "string"
                        }
                      }
                    ]
                   }

        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
                caseno = response.body
                cy.log(JSON.stringify(caseno)) 
            }
            else 
            {
                cy.log('status is 403')
            }
        })
    })

    it.only("Find caseID by CaseCode", function ()
    
    {  
        cy.log(caseno)
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/case/'+caseno,
            headers: {
                Authorization: 'Bearer '+ token
                        },
        }).then((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
                caseID = response.body.caseId
                cy.log(caseID)
            }
            else
             {
                cy.log('status is 403')
             }
        })
    })


    it.only('uploads a file with an attachment type via API',function()
    
    {       
         // Path to the file in the fixtures folder
        const fileName = 'age.png';
        
        // Read the file from fixtures
        cy.fixture(fileName).then(fileContent => {
          // Create a new FormData instance
          const formData = new FormData();
          
          // Append the file to the FormData
          formData.append('file', new Blob([fileContent], { type: 'text/plain' }), fileName);
          
          // Append the attachment type to the FormData
          formData.append('attachmentType', 'Requisition'); // Example attachment type
    
          // Make the API request to upload the file
          cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/caseattachment/upload/'+caseID+'/Requisition', 
            headers: {
                Authorization: 'Bearer '+ token
                        },
            // Replace with your API endpoint
            body: formData,
            
          }).then((response) => {
            // Assertions to validate the upload
            expect(response.status).to.eq(200);
            //expect(response.body).to.have.property('success', true);
          });
        });
      });
   
   
    it.only('List Case Attachement',function()
    {
       
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/caseattachment/'+caseID,
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
        

        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
             
               cy.log(response.body)

            }
            else 
            
            {
                cy.log('status is 403')
            }
        })
    })
    it.only('Download Case Attachement',function()
    {
       
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/caseattachment/'+caseno+'/age.png',
            
                headers: {
                Authorization: 'Bearer '+ token
                        },
          

        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
            }
            else 
            
            {
                cy.log('status is 403')
            }
        })
    })
  
    
    
    
    it.only('Delete Case attachement',function()
    {
        
        cy.request({
            method: 'DELETE',
            url: 'http://10.10.10.239:8082/case-api/v1/caseattachment/'+caseno+'/age.png',
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
        
        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
                cy.log(JSON.stringify(response.body)) 

            }
            else 
            
            {
                cy.log('status is 403')
            }
        })
    })
   
})