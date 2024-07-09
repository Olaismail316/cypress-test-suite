const { defineConfig } = require('cypress');
const fs = require('fs');
const pdf = require('pdf-parse');

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://172.30.255.162:8082/case-api/v1",
    "websiteUrl": "http://10.10.10.239:3000/",

    setupNodeEvents(on, config) {
      on('task', {
writeCaseidToJsonFile(caseId) {
      // Read existing JSON file
      const file_path = 'cypress/fixtures/specimen.json';
      let existingData = {};
      if (fs.existsSync(file_path)) {
        existingData = JSON.parse(fs.readFileSync(file_path));
      }

      // Update caseid
      existingData.caseId = caseId;

      // Write updated data back to JSON file
      fs.writeFileSync(file_path, JSON.stringify(existingData, null, 2));

      return null;
    },
        parsePdf({ file_path }) {
          const dataBuffer = fs.readFileSync(file_path);
          return pdf(dataBuffer).then(data => {
            return data.text;
          });
        }

      });
    },
 reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },  
  },
  projectId: "j5ydpa",

  downloadsFolder: 'cypress/downloads'
});