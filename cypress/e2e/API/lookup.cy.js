describe('onco Lookup ', function () 
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

it.only('Get lookup attachement',function()
{
   
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/attachments',
        
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
it.only("get main test panels", function ()
    
{        
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/mainTest/1/panels?clientId=10&mainTestId=1',
        headers: {
        Authorization: 'Bearer '+ token
                  },
        qs: 
        {
          clientId:'10',
          mainTestId: '1'
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

it.only('Get maintest',function()
{
   
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/mainTests',
        
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

it.only('Specimen Source',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/specimenSources',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('Specimen Procedures',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/specimenProcedures',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('Specimen Containers',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/specimenContainers',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
          cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('Specimen conatiner Types',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/specimenContainer/1/types',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
           // cy.log(response.body)
           cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('Specimen Body Sites',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/specimenBodySites',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get Priorities',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/priorities',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get level of service',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/levelOfService',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get case categories',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/categories',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get state',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/states',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get city',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/state/25/cities',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get race',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/races',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get sexual orientation',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/sexualOrientation',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get ethnicities',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/ethnicities',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get icd10',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/icd10?searchTerm=ABC',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('get stage of disease',function()
{
    
    cy.request({
        method: 'GET',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/stageOfDisease',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('reset lookups',function()
{
    
    cy.request({
        method: 'Delete',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/reset',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
it.only('delete races',function()
{
    
    cy.request({
        method: 'Delete',
        url: 'http://10.10.10.239:8082/case-api/v1/lookup/reset/races',
        
        headers: {
            Authorization: 'Bearer '+ token
                    },
    
    }).then
    ((response) => {
        if (response.status === 200) 
        {
            cy.log('status is 200')
          //  cy.log(response.body)
            cy.log(JSON.stringify(response.body)) 

        }
        else 
        
        {
            cy.log('status is 403')
        }
    })
})
})