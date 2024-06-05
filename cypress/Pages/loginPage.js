class loginPage {
  visit() 
  {
    cy.visit('/');
  }

  get usernameInput() 
  {
    return cy.get("input[id='form2Example18']");
  }

  get passwordInput()
   {
    return cy.get("input[id='form2Example28']");
   }

  get submitButton() 
  {
    return cy.get("button[class='login-button btn  btn btn-primary']");
  }

  // Action methods
  enterUsername(username) 
  {
    this.usernameInput.type(username)
    return this;
  }

  enterPassword(password) 
  {
    this.passwordInput.type(password)
    return this;
  }

  submit() 
  {
    this.submitButton.click()
    return this;
  }

  // Assertion methods
  assertUrlContains(value)
   {
    cy.url().should('include', value);
  }

  assertWelcomeMessageVisible(username) 
  {
    cy.contains(`Welcome, ${username}`).should('be.visible');
  }

  assertLoginSuccess()
   {
     cy.get('.nav-item > .text-white').should('contain', 'Siparadigm Admin');
      return this;
  }
}

export default loginPage;
