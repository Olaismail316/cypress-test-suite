describe('sign off report', function () 

{
    let token, caseno, caseID,maintestid
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

    it('sign off case',function()
    
    {
        const fileName = 'age.png';
        
        cy.fixture(fileName).then(fileContent => {
          const formData = new FormData();
          
          formData.append('file', new Blob([fileContent], { type: 'text/plain' }), fileName);
          cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/report/upload/'+caseID,
            headers: {
                Authorization: 'Bearer '+ token
                    },
                body: formData,

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
    it.only("List signed off cases by ID", function ()
    
    {        
        cy.request({   
            method: 'GET',
            //url: 'http://10.10.10.239:8082/case-api/v1/report/'+caseID,
            url: 'http://10.10.10.239:8082/case-api/v1/report/16728',

            headers: {
            Authorization: 'Bearer '+ token
                        },

        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
                cy.log(response.body) 

                cy.log(JSON.stringify(response.body)) 
            }
            else {
                cy.log('status is 403')
            }
        })
    })
    it.only("Download Signed off report", function ()
    
    {        
        cy.request({   
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/report/ON24-13328/ON24-13328_1.pdf',
            headers: {
            Authorization: 'Bearer '+ token
                       
                     },
                    
        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
               
                cy.log(JSON.stringify(response.body)) 
            }
            else {
                cy.log('status is 403')
            }
        })
    })
    it.only("Download latest Signed off report", function ()
    
    {        
        cy.request({   
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/report/downloadlatestreport/16596',
            headers: {
            Authorization: 'Bearer '+ token
                       
                     },
                    
        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
               
                cy.log(JSON.stringify(response.body)) 
            }
            else {
                cy.log('status is 403')
            }
        })
    })
    it.only("Delete Signed off report", function ()
    
    {        
        cy.request({   
            method: 'DELETE',
            url: 'http://10.10.10.239:8082/case-api/v1/report/ON24-13383/ON24-13383-1.pdf',
            headers: {
            Authorization: 'Bearer '+ token
                       
                     },
                    
        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
               
                cy.log(JSON.stringify(response.body)) 
            }
            else {
                cy.log('status is 403')
            }
        })
    })


})

})