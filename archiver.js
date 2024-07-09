const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('example.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');

  // Now, attempt to upload the zip file to BrowserStack or another service
  // Example code for uploading the file (adjust as per your requirements)
  uploadToBrowserStack('example.zip');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.directory('D:\Work\ONCO', true); // Replace 'folder-to-zip' with your actual folder path
archive.finalize();

function uploadToBrowserStack(zipFilePath) {
  // Implement your upload logic here
  // Example:
  // Call an API to upload the zip file to BrowserStack
  // Make sure to handle any errors or retries if necessary
}
