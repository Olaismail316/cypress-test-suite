const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'cypress/downloads/downloaded.pdf';

const convertPdfToJson = async (pdfPath) => {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);

  const jsonOutput = {
    text: data.text,
    numPages: data.numpages,
    numRenderedPages: data.numrender,
    info: data.info,
    metadata: data.metadata,
    version: data.version,
  };

  fs.writeFileSync('output.json', JSON.stringify(jsonOutput, null, 2));
  console.log('PDF converted to JSON and saved as output.json');
};

convertPdfToJson(pdfPath);