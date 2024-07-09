
export const startTask = () => {
   
    cy.contains('button', 'Start').should('exist').then((element) => 
      {
        
        cy.wrap(element).click( {force: true }) 
      })    
           
  }
 
  export const searchList = (partialLocator,locator) => {
   
    locator.invoke('text').then((text) => {
 
  cy.get( '#left-tabs-example-tab-' + partialLocator + '').click();
  
  cy.get('#left-tabs-example-tabpane-' + partialLocator + ' > .my-5 > .d-flex > .form-control').type(text.trim());
 
  })

  }
 
  export const assertSuccessfulSave = (locator, fieldtext) => 
  {
  cy.get(locator).invoke('val').then((inputValue) => {

    expect(inputValue).to.equal(fieldtext);
  });
  }
  
  export const login = (username, password) => 
    {
    Cypress.on('uncaught:exception', (err, runnable) => 
    {
          return false;
          
    });

    cy.visit('http://172.30.255.162:3000/');
    
       
    cy.get("input[id='form2Example18']").clear().type(username);

    cy.get("input[id='form2Example28']").clear().type(password);
    
    cy.get("button[class='login-button btn  btn btn-primary']").click();
    cy.wait(3000)
  
  }


 