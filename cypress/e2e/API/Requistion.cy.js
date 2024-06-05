describe('Case Requistion test Suite', function () 

{
    let token

it.only("Login", function ()
    
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


it.only("Get Requisition", function ()
    
{        
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/case/17038/requisition',

       headers: {
                Authorization: 'Bearer '+ token
                        },

    }).then((response) => {
        if (response.status === 200) {
            cy.log('status is 200')
            
            cy.log(response.body) 
        }
        else {
            cy.log('status is 403')
        }
    })
})   


})