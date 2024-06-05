const { defineConfig } = require('cypress');
const fs = require('fs');
const pdf = require('pdf-parse');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://10.10.10.239:3000/',
    setupNodeEvents(on, config) {
      on('task', {
        parsePdf({ filePath }) {
          const dataBuffer = fs.readFileSync(filePath);
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
      html: false,
      json: true,
    },  
  },
  projectId: "j5ydpa",

  downloadsFolder: 'cypress/downloads'
});