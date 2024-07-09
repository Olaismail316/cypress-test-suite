import 'cypress-file-upload';
Cypress.Commands.add('storeText', (selector) => {
  cy.get(selector).invoke('text').then((text) => {
    Cypress.env('storedText', text);
  });
});

Cypress.Commands.add('getStoredText', () => {
  return Cypress.env('storedText');
});


Cypress.Commands.add("getUserToken", () => {
  cy.request({
    method: "POST",
    url: "http://172.30.255.162:8081/user-api/v1/user/authenticate", // Replace with your actual login endpoint
    body: 
    {
      "email":"admin@siparadigm.com",
      "password":"test"
    }
  }).then((response) => {
    // Ensure the response status is 200 OK
    expect(response.status).to.equal(200);

    // Extract the token from the response body
    const token = response.body.token;

    // Store the token in the Cypress environment variable 'userToken'
    Cypress.env("userToken", token);
  });

});

Cypress.Commands.add("sendApiRequest", (method, url, body, token,qs) => {
  cy.request({     
   method: method,
    url:url,
    headers: {
       Authorization: 'Bearer '+ token
             },
           body: body,
           qs: qs
          }).then((response) => {
            expect(response.status).to.equal(200); // Ensure the response status is 200 OK
            Cypress.env('output', response.body);
           
          })
        })
        Cypress.Commands.add('getApiResponse', () => {
          return Cypress.env('output');
        });