/// <reference types="cypress" />
describe('Login API test Suite', function () 

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
    it.only('register user',function()
    {


        cy.request({
            method: 'POST',
            url: 'http://10.10.10.239:8081/user-api/v1/user/register',
            
            headers: {
                Authorization: 'Bearer '+ token
                        },
            body: {
                firstName: 'Ahmed',
                lastName: 'elnasharty',
                email: 'ahmed205@siparadigm.com',
                password: 'test'
            }

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
})