//import { default as LoginPage2, default as addTest, default as caseAttachementPage, default as casePagecopy, default as flowPage } from '../Pages';
import addTest from '../Pages/TestPage';
import casePage from '../Pages/casePage';
import loginPage from '../Pages/loginPage';
import { login } from '../support/utils';

const casecreationPage  = new casePage();
const loginPag = new loginPage();
const testPage = new addTest();
let token;
let caseid;
const pdfFilename = 'downloaded.pdf';
const pdfFilePath = `cypress/downloads/${pdfFilename}`;

describe("Verify that the case data enetred is same as in requistion file",()=>{

before(function()
   {
       cy.fixture('testdata.json').then(function(datadriven)
          {
           cy.log(datadriven)
           this.datadriven=datadriven
          }) 
                   
   })


it.only('Create Case and enter all manadatory data', function() 
 {

  Cypress.on('uncaught:exception', (err, runnable) => 
  {
        return false;
        
  });

 login(this.datadriven.username, this.datadriven.password);             
  cy.wait(3000);
                casecreationPage
 .pressCreate()

.selectAttendingPhysician(this.datadriven.attendingPhysician)

.selectReferringPhysician(this.datadriven.referringPhysician)

.typeReqNo(this.datadriven.requsitionNo)
   
.enterSpecimenNo(this.datadriven.SpecNo)

.enterFirstName(this.datadriven.firstName)
.enterLastName(this.datadriven.lastName)

.enterMiddleIntial(this.datadriven.middleInitial)

.enterDOB(this.datadriven.DOB)

.selectGender(this.datadriven.gender)

.typeMRN(this.datadriven.mRN)

.selectState(this.datadriven.state)

.selectCity(this.datadriven.city)

.enterSSN(this.datadriven.ssn)

.enterZipCode(this.datadriven.zipcode)

.enterAddress(this.datadriven.address)

.typeHomePhone(this.datadriven.homePhone)

.typeCellPhone(this.datadriven.CellPhoneno)

//.getSexualOrienation().select(testdata.sexualOrienation)

.typeSexualOrienationDesc(this.datadriven.sexualOrienationDesc)
  
                             //add specimen
.selectContainerName(this.datadriven.containerName)   

  .selectTypename(this.datadriven.typeName)
    
  .selectSpecimenCount(this.datadriven.specimenCount)
          
 .addSpec()
    
  .selectRace(this.datadriven.race)
   
  .selectEthnicity(this.datadriven.ethnicity)
                             //billing
    .selectBillingInfo(this.datadriven.billingInfo)
   
     
    .selectPatientType(this.datadriven.patientType)

    
    .selectStageOfDisease(this.datadriven.stageOfDisease)

    
    .typeFedexNo(this.datadriven.fedexNo)

    .checkCbc()


   
   .typeSentDate(this.datadriven.sentDate)

      .getCollectionDate(this.datadriven.collectionDate)

       .typeIcd10(this.datadriven.icd10)

      .clickICD10();
      cy.get(".update-btn-col > .btn > span").click()
      //.createCase()
      casecreationPage
.clickCloseMessage()

                        testPage

.clickAddTest()

.selectedTest(this.datadriven.test)

.selectPanel(this.datadriven.triagedPanel)
   
  
.selectSpecmCount(this.datadriven.Specount)
                               //update
    
.clickUpdateCase()

.closeMessage()

  cy.wait(3000)

  cy.storeText(":nth-child(1) > p")
 
}); 

    it.only("Get keytoken from Login API", function ()
    
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
        cy.getStoredText().then((storedText) => {
           caseid =  storedText.substring(storedText.length - 5)
          });
       
       
        cy.fixture('testdata.json').then((testdata) => 
  
                  {
                cy.request({
                  method: 'GET',
                  encoding: 'binary',
                  url: 'http://10.10.10.239:8082/case-api/v1/case/'+caseid+'/requisition',
                  headers: {
                      Authorization: 'Bearer '+ token
                              },      
           
        }).then((response) => {
          // Ensure the response is successful and contains the PDF
          expect(response.status).to.eq(200);
    
          cy.writeFile(pdfFilePath, response.body, 'binary');
        });
    
        // Step 3: Read the PDF File to Verify
        cy.readFile(pdfFilePath, 'binary').should((fileContent) => {
       
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
          expect(pdfText).to.include(testdata.mRN)
          expect(pdfText).to.include(testdata.SpecNo)
          expect(pdfText).to.include(testdata.FullName)
          expect(pdfText).to.include(testdata.sexualOrienationDesc)

         // expect(pdfText).to.include(casecreationPage.getCurrentDate)

          expect(pdfText).to.include(testdata.billingInfo.toLowerCase())
          expect(pdfText).to.include(testdata.stageOfDisease)
          expect(pdfText).to.include(testdata.icd10)
          expect(pdfText).to.include(testdata.zipcode)
          expect(pdfText).to.include(testdata.attendingPhysician)

          expect(pdfText).to.include(testdata.referringPhysician)

         expect(pdfText).to.include(casecreationPage.getCellAsseration(testdata.CellPhoneno))
  
          
          
          ;
        })
    })
      });

 })
           
