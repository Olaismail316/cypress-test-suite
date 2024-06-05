/// <reference types="cypress" />
describe('CASE API Suite', function () 
{
    let token, caseno, caseID
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
            else 
            {
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
              "icd10Data": [
                {
                  "code": "Z39",
                  "description": "Z39: Description"
                }
              ],
              "collectionDate": "2024-06-04T18:59:41.590Z",
              "sentDate": "2024-06-04T18:59:41.590Z",
              "dischargeDate": "2024-06-04T18:59:41.590Z",
              "cbcResultsAttached": true,
              "cbcInHouse": true,
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
                      "name": "Onco",
                      "clientId": "Onco",
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
                    "patientType": "HOSPITAL_IN_PATIENT",
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
                cy.log(JSON.stringify(response.body)) 
            }
            else
             {
                cy.log('status is 403')
             }
        })
    })

    it.only("Update Case", function ()
        { 
          cy.fixture('testdata.json').then((testdata) => 

          {       
        cy.request({
            method: 'PUT',
            url: 'http://10.10.10.239:8082/case-api/v1/case/'+caseID,
            headers: {
                Authorization: 'Bearer '+ token
                      },
            body:
            {
              "icd10Data": [
                {
                  "code": "Z55",
                  "description": "Update icd10"
                }
              ],
              "collectionDate": "2024-06-04T19:42:05.670Z",
              "sentDate": "2024-06-04T19:42:05.670Z",
              "dischargeDate": "2024-06-04T19:42:05.670Z",
              "cbcResultsAttached": false,
              "cbcInHouse": false,
                "patient": {
                  "id": 1,
                  "ssn": "1050",
                  "firstName": testdata.firstName,
                  "middleInitial": testdata.middleInitial,
                  "lastName": testdata.lastName,
                  "dob": "2017-04-04",
                  "gender": testdata.gender,
                  "state": testdata.state,
                  "city": testdata.city,
                  "address": testdata.address,
                  "zipCode": testdata.zipCode,
                  "cellPhone": testdata.cellPhone,
                  "homePhone": testdata.homePhone,
                  "mrn": testdata.mrn,
                  "race": testdata.race,
                  "ethnicity": testdata.ethnicity,
                  "sexualOrientation": "gay",
                  "sexualOrientationDescribe": "string"
                },
                "client": {
                  "id": 10,
                  "name": "Onco",
                  "clientId": "10",
                  "priorityId": 1,
                  "priority": "STAT"
                },
                "levelOfService": "PROFESSIONAL_ONLY",
                "requisitionNumber": testdata.requisitionNumber,
                "requisitionType": testdata.requisitionType,
                "specimenNumber": testdata.specNo,
                "reportType": testdata.reportType,
                "reportTemplate": testdata.reportTemplate,
                "reportFormat": testdata.reportFormat,
                "requestedDate": "2024-04-04T10:20:13.902Z",
                "indication": "ind update",
                "testCode": "code update",
                "attendingPhysician": testdata.attendingPhysician,
                "attendingPhysicianId": 1,
                "referringPhysicianId": 1,
                "referringPhysicianName": "ABC",
                "billingInfo": testdata.billingInfo,
                 "patientType":testdata.patientType,
                 "stageOfDisease": "Remission",
                 "fedexNumber": "Fedex 1305",
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
                ],
                "newCaseMainTests": [
                  {
                    "caseId": caseID,
                    "mainTestId": 1,
                    "mainTestName": "Flow cyto",
                    "priority": "STAT",
                    "levelOfService": "PROFESSIONAL_ONLY",
                    "selectedCaseSpecimenIds": [
                      596
                    ],
                    "selectedTestPanelIds": [
                      20
                    ]
                  }
                ],
                "updatedCaseMainTests": [
                  {
                    "id": 437,
                    "priority": "STAT",
                    "levelOfService": "PROFESSIONAL_ONLY",
                    "selectedCaseSpecimenIds": [
                      596
                    ],
                    "selectedTestPanelIds": [
                      20
                    ]
                  }
                ]
              }

        }).then((response) => {
            if (response.status === 200) {
                cy.log('status is 200')
              //  let FN = response.body.patient.firstName
              cy.log(JSON.stringify(response.body)) 
            }
            else 
            {
                cy.log('status is 403')
            }
        })
    })
  })
    it.skip("Search a Case", function ()
    
    {        
      
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/cases/search',
            
            headers: {
            Authorization: 'Bearer '+ token
                      },
            qs: 
            {
              page: '0', // Query parameter
              size:'100',
              searchTerm:'on24',
              
              caseStatus:'SIGNED_OFF',
              clientId:'10'
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
         it.only("get user Cases based on selected client", function ()
    
         {        
             cy.request({
                 method: 'GET',
                 url: 'http://10.10.10.239:8082/case-api/v1/cases',
                 headers: {
                 Authorization: 'Bearer '+ token
                           },
                 qs: 
                 {
                   page: '0', // Query parameter
                   size:'100',
                   searchTerm:'on24',
                   clientId:'1012'
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


      it.only("get All Cases", function ()
          {        
          cy.request({
              method: 'GET',
              url: 'http://10.10.10.239:8082/case-api/v1/cases',
              headers: {
              Authorization: 'Bearer '+ token
                        },
              qs: 
              {
                page: '0', // Query parameter
                size:'10',
                searchTerm:'on24',
                caseStatus:'SIGNED_OFF',
                workflow: 'Flow',
                clientId:'10'
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
})