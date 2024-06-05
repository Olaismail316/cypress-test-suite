/// <reference types="cypress" />
describe('Case Specimen test Suite', function () 

{
    let token, specimenID
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
    it.only('Add Specimen',function()
    {
       
        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/caseSpecimen',
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
            body: 
             {
                "caseId": 17461,
                "data":
                 {
                  "containerName": "Green Top Tube",
                  "typeName": "GTT",
                  "numberOfLabel": 4,
                  "specimenAmount": "4",
                  "identifier": "No identifier",
                  "comment": "Comment GTT",
                  "source": "Source GTT",
                  "bodySite": "body site GTT",
                  "procedure": "procedure GTT"
                  }
              
              }

        }).then
        ((response) => {
            if (response.status === 200) 
            {
                cy.log('status is 200')
                specimenID =response.body.id
               cy.log(specimenID)

            }
            else 
            
            {
                cy.log('status is 403')
            }
        })
    })
    it.only('Update Specimen',function()
    {
       
        cy.request({
            method: 'PUT',
            url: 'http://10.10.10.239:8082/case-api/v1/caseSpecimen/'+specimenID,
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
            body: 
             {
        "containerName": "Lavendar tube",
        "typeName": "No type name",
         "numberOfLabel": 2,
         "specimenAmount": "5",
         "identifier": "No",
         "comment": "No",
         "source": "No",
         "bodySite": "No",
         "procedure": "string"  
              }

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

    it.only('Delete Specimen',function()
    {
       
        cy.request({
            method: 'DELETE',
            url: 'http://10.10.10.239:8082/case-api/v1/caseSpecimen/'+specimenID,
            
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