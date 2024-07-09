// cypress/integration/performance.spec.js

describe('Performance Tests', () => {
    it.skip('should measure the page load time', () => {
      cy.measurePageLoad('http://10.10.10.239:3000/login/');
    });
  
    it.skip('should measure the API response time', () => {
      cy.measureApiResponseTime('GET', 'http://10.10.10.239:8082/case-api/v1/case/ON24-13460');
    });
  });