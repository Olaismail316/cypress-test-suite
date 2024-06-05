// Assuming you have a JSON file named data.json with your applause data
// {
//   "applause": {
//     "value": "your_applause_data_here"
//   }
// }

describe('Your Cypress Test Suite', () => {
    beforeEach(() => {
      cy.fixture('testdata.json').then((data) => {
        // Extracting applause data from JSON
        // Use the applauseData within your test
        // For example, you can log it or use it in your test assertions
        console.log(data);
      });
    });
  
    it('Your Cypress Test', () => {
      // Your test code here
    });
  });