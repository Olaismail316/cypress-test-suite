import 'cypress-file-upload';
Cypress.Commands.add('storeText', (selector) => {
  cy.get(selector).invoke('text').then((text) => {
    Cypress.env('storedText', text);
    cy.log(text);
  });
});

Cypress.Commands.add('getStoredText', () => {
  return Cypress.env('storedText');
});
