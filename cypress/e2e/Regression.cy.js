//import { default as LoginPage2, default as addTest, default as caseAttachementPage, default as casePagecopy, default as flowPage } from '../Pages';

import addTest from '../Pages/TestPage';
import caseAttachementPage from '../Pages/caseAttachementPage';
import casePage from '../Pages/casePage';
import flowPage from '../Pages/flowWorkFlow';
import loginPage from '../Pages/loginPage';
import { assertSuccessfulSave, login, searchList, startTask } from '../support/utils';

const casecreationPage  = new casePage();
const CaseAttachPage = new caseAttachementPage();
const TechFlowPage = new flowPage();
const loginPag = new loginPage();
const testPage = new addTest();
describe("Onco Regression Suite End to End ",()=>{

before(function()
   {
       cy.fixture('testdata.json').then(function(datadriven)
          {
           cy.log(datadriven)
           this.datadriven=datadriven
          }) 
         //  loginPag
         //  .visit()
         //  .enterUsername("test@siparadigm.com")
         //  .enterPassword("test")
         //  .submit()
         //  .assertLoginSuccess();             
   })


it('Create Case till sending to Siparadigm ', function() 
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

                           //Case attachement
                      CaseAttachPage
.clickCaseAttachementTab()

.clickUploadButton(this.datadriven.attachementname)

                          //Send case no to triaged
searchList(this.datadriven.triagedcase,casecreationPage.getCaseCode());

 cy.wait(3000);
  
 startTask();        
          
                               //Submit         
                      casecreationPage
.clickSubmitbutton();

                       testPage
.assertCorrectstatus(this.datadriven.submittedStatus);

                            //Flow techincal work

searchList(this.datadriven.flowlist,casecreationPage.getCaseCode());
 
cy.wait(3000);

startTask();
     
                    TechFlowPage
 .uploadFlowAttach(this.datadriven.attachementname);
 
cy.wait(3000);

                      casecreationPage
.clickSubmitbutton()
                        testPage
.assertCorrectstatus(this.datadriven.closedStatus);

 searchList(this.datadriven.All,casecreationPage.getCaseCode());

                     casecreationPage
 .clickCaseDetails();
assertSuccessfulSave(casecreationPage.specimenNumber,this.datadriven.SpecNo)
 assertSuccessfulSave(casecreationPage.reqNo,this.datadriven.requsitionNo);
 assertSuccessfulSave(casecreationPage.fedexNo,this.datadriven.fedexNo)
// // assertSuccessfulSave(casecreationPage.firstName, testdata.firstName)
// // assertSuccessfulSave(casecreationPage.SSN, casecreationPage.getSSNAsseration(testdata.ssn));

// // assertSuccessfulSave(casecreationPage.firstName, testdata.lastName)
// // assertSuccessfulSave(casecreationPage.middleName, testdata.middleInitial)
// // assertSuccessfulSave(casecreationPage.dateOfBirth, testdata.DOB)
// // assertSuccessfulSave(casecreationPage.mRN, testdata.mRN)
// // assertSuccessfulSave(casecreationPage.gender,testdata.gender);
// // assertSuccessfulSave(casecreationPage.Ethnicity, testdata.ethnicity)
// // assertSuccessfulSave(casecreationPage.homePhone,testdata.homePhone);
// // assertSuccessfulSave(casecreationPage.cellhone,casecreationPage.getCellAsseration(testdata.CellPhoneno));
// // assertSuccessfulSave(casecreationPage.accessionDate,casecreationPage.getCurrentDate())
// // assertSuccessfulSave(casecreationPage.State, testdata.state)
// // assertSuccessfulSave(casecreationPage.city, testdata.city)
// // assertSuccessfulSave(casecreationPage.zip,testdata.zipcode);
// // assertSuccessfulSave(Patinet.address,testdata.address);
// // assertSuccessfulSave(Patinet.race,testdata.race);
// // assertSuccessfulSave(Billing.billing,testdata.billingInfo);
// // assertSuccessfulSave(Billing.patient,testdata.patientType);
// // assertSuccessfulSave(CreateCase.collDate,testdata.collectionDate);
// // assertSuccessfulSave(CreateCase.disdate,testdata.dischargeDate);
// // assertSuccessfulSave(CreateCase.sentdate,testdata.sentDate);
// // assertSuccessfulSave(Patinet.Desc,testdata.sexualOrienationDesc);
// // assertSuccessfulSave(CreateCase.accby,testdata.accessionby);
// // assertSuccessfulSave(CreateCase.CCat,testdata.casecategory);
// //                        casecreationPage
// // //.getIcd10Selection().contains(testdata.icd10selection)

// // //.getAttendingPhysician().find('option:selected').should('have.text', testdata.attendingPhysician)
// // //.getReferringPhysician().find('option:selected').should('have.text', testdata.referringPhysician)
// // cy.get('input[type="radio"][value="New Diagnosis"]').should('be.checked');

// // // cc.AssertValue(cc.getSexualOrienation(),testdata.sexualOrienation);


// });
    
}); 

})
           
