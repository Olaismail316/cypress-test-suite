describe('test Main test all action', function () 

{
    let token, caseno,maintestid
    const caseID = '17556';
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
    
    it('Create a new Case',function()
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

    it("Find caseID by CaseCode", function ()
    
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

    it.only('create main test',function()
    {


        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/caseMainTest',
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
            body: {
                "caseId": caseID,
                "mainTestId": 1,
                "mainTestName": "Flow",
                "priority": "STAT",
                "levelOfService": "PROFESSIONAL_ONLY",
                "selectedCaseSpecimenIds": 
                [
                 
                  596
                  
                ],
                "selectedTestPanelIds": 
                [
                 20
                ]
              
              }
        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
                maintestid = response.body
                cy.log(JSON.stringify(maintestid)) 
             
            }
            else 
            
            {
                cy.log('status is 403')
            }
        })
    })
    it("get Main test details by id", function ()
    
    {        
        cy.request({   
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/caseMainTest/'+maintestid,
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
    it.only("Submit Case", function ()
    {    
    cy.request({
        method: 'PUT',
        url: 'http://10.10.10.239:8082/case-api/v1/case/'+caseID+'/submit',
        headers: {
        Authorization: 'Bearer '+ token
                  },
       
            }).then((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
           let A = response.body
            cy.log(JSON.stringify(A)) 
        }
        else 
        {
            cy.log('status is 403')
        }
    })
  })

    it("start job", function ()
    
    {        
        cy.request({   
            method: 'PUT',
            url: 'http://10.10.10.239:8082/case-api/v1/job/25/start',
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
    it("submit job", function ()
    
    {        
        cy.request({   
            method: 'PUT',
            url: 'http://10.10.10.239:8082/case-api/v1/job/25/submit',
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
    it("update Case main test", function ()
    
    {        
        cy.request({   
            method: 'PUT',
            url: 'http://10.10.10.239:8082/case-api/v1/caseMainTest/'+maintestid,
            headers: {
            Authorization: 'Bearer '+ token
                       
                     },
                     body: {
                    "priority": "STAT",
                    "levelOfService": "PROFESSIONAL_ONLY",
                    "selectedCaseSpecimenIds": 
                    [
                      110
                    ],
                    "selectedTestPanelIds": [
                      35
                    ]
                  
            }
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
  
    it("Delete Main test details by id", function ()
    
    {        
        cy.request({   
            method: 'DELETE', 
            url: 'http://10.10.10.239:8082/case-api/v1/caseMainTest/'+maintestid,
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