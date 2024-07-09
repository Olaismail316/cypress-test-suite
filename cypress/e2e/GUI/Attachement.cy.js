it.skips('uploadAttachements', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit('http://10.10.10.239:3000/login/');
    
   
    cy.get("input[id='form2Example18']").clear().type("admin@siparadigm.com");

    cy.get("input[id='form2Example28']").clear().type("test");
    
  
      cy.get("button[class='login-button btn  btn btn-primary']").click();

      cy.get("a[id='left-tabs-example-tab-Triaged']").click();

      cy.contains('td', 'ON23-13251').should('exist') 
      // This finds a <td> element containing the text 'ON23-13251'
      .then((element) => {
        // You can perform further actions with the found element
        cy.wrap(element).click( {force: true }) // For example, you can click on the found element
      })
     // cy.get("td:contains('ON23-13251')").click();
      cy.wait(3000);
      cy.get("a[id='left-tabs-example-tab-caseAttachment']").click();
      cy.wait(3000);
      cy.get("button[class='btn float-end attachment-browse-button']").contains('Browse').click();

     

});
