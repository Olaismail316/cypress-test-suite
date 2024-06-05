



describe('Download and Verify PDF', () => {




    const pdfUrl = 'file:///C:/Users/SIP/Desktop/';
    const pdfFilename = 'downloaded.pdf';
    const pdfFilePath = `cypress/downloads/${pdfFilename}`;
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
  
    it.only('should download the PDF, save it locally, and verify the file', function ()  {
      cy.fixture('testdata.json').then((testdata) => 

                {
              cy.request({
                method: 'GET',
                encoding: 'binary',
                url: 'http://10.10.10.239:8082/case-api/v1/case/17476/requisition',
                headers: {
                    Authorization: 'Bearer '+ token
                            },      
         
      }).then((response) => {
        // Ensure the response is successful and contains the PDF
        expect(response.status).to.eq(200);
       // expect(response.body).to.not.be.empty;
  
        // Step 2: Save PDF Locally Using `cy.writeFile`
        cy.writeFile(pdfFilePath, response.body, 'binary');
      });
  
      // Step 3: Read the PDF File to Verify
      cy.readFile(pdfFilePath, 'binary').should((fileContent) => {
        // Ensure the file is not empty
        //expect(fileContent).to.not.be.empty;
        // Optionally, check the file size or other properties
      //expect(fileContent.length).to.be.greater_than(0);
      });
    
      cy.task('parsePdf', { filePath: pdfFilePath }).then((pdfText) => {
        // Assert the content of the PDF
        expect(pdfText).to.include(testdata.firstName);
        expect(pdfText).to.include(testdata.middleInitial)
        expect(pdfText).to.include(testdata.lastName)
        expect(pdfText).to.include(testdata.gender)
        expect(pdfText).to.include(testdata.state)
        expect(pdfText).to.include(testdata.city)
        expect(pdfText).to.include(testdata.address)
      //  expect(pdfText).to.include(testdata.requisitionNumber)
       // expect(pdfText).to.include(testdata.billingInfo)
       // expect(pdfText).to.include(testdata.patientType)

        // expect(pdfText).to.include(testdata.city)
        // expect(pdfText).to.include(testdata.state)

        
        
        ;
      })
    });
  })

  it.only('should validate the JSON output and check for specific text', function () 
   {
  
    cy.fixture('testdata.json').then((testdata) => 

    {
    cy.readFile('output.json').then((json) => {
      // Check if the text property exists
      expect(json.text).to.include(testdata.firstName);
      expect(json.text).to.include(testdata.middleInitial)
      expect(json.text).to.include(testdata.lastName)
      expect(json.text).to.include(testdata.gender)
      expect(json.text).to.include(testdata.state)
      expect(json.text).to.include(testdata.city)
      expect(json.text).to.include(testdata.address)
      // // Validate that specific text exists within the text property
      // expect(json.text).to.include('specific text you are looking for');
      // expect(json.text).to.include('another piece of text');

      // // Check other properties if necessary
      // expect(json).to.have.property('numPages');
      // expect(json.numPages).to.equal(5); // Example check for the number of pages

      // expect(json).to.have.property('info');
      // expect(json.info).to.have.property('Title', 'Expected PDF Title')
  
  })
   })
  })
});