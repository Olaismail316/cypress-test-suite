/// <reference types="cypress" />
describe('Client API test Suite', function () 

{
    let token
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
    it.only('Search Client',function()
    {
       
        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8082/case-api/v1/client/search',
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
            body: 
             {
                "fullName": "onconexus",
                "subName": "on",
                "practiceCode": "77"
              
              }

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
    it.only('get Defualt Client for logged in user',function()
    {
       
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/client/selected-client',
            
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

    it.only('Get client Attending Physicians',function()
    {
       
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/client/76/attendingphysicians',
            
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
    it.only('Get Referring Physicians',function()
    {
        
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/client/76/refferringphysicians',
            
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
    it.only('Get User Clients',function()
    {
        
        cy.request({
            method: 'GET',
            url: 'http://10.10.10.239:8082/case-api/v1/client/user-clients',
            
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