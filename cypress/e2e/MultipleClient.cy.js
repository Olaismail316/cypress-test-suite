import { startTask } from '../support/utils'
import { login } from '../support/utils'
import { searchList } from '../support/utils'
import { Specimen } from '../Pages/selectors'
import { Billing } from  '../Pages/selectors'
import { ClientPage } from  '../Pages/selectors'
import { Patinet } from  '../Pages/selectors'
import {CreateCase} from  '../Pages/selectors'
import {assertSuccessfulSave}  from '../support/utils'
import casePage from '../Pages/casePage';
import LoginPage from '../Pages/LoginPage';
import caseAttachementPage  from '../Pages/caseAttachementPage';
import flowPage  from '../Pages/flowWorkFlow';
import addTest from '../Pages/TestPage';

const casecreationPage  = new casePage();
const CaseAttachPage = new caseAttachementPage();
const TechFlowPage = new flowPage();
const loginPage = new LoginPage();
const testPage = new addTest();
beforeEach(() => 
{
  Cypress.on('uncaught:exception', (err, runnable) => 
  {
        return false;
        
  });
                  loginPage
  .visit()
  .enterUsername('admin@siparadigm.com')
  .enterPassword('test')
  .submit()
  .assertLoginSuccess();

});

it('Verify that Case is created under default client', () => 

{

    cy.fixture('testdata.json').then((testdata) => 

    {
     
    cy.wait(3000);
                        casecreationPage
    .pressCreate()
    
    .selectAttendingPhysician(testdata.attendingPhysician)
    
    .selectReferringPhysician(testdata.referringPhysician)
    
    .typeReqNo(testdata.requsitionNo)
       
    .enterSpecimenNo(testdata.SpecNo)
       
    .enterFirstName(testdata.firstName)
        
    .enterLastName(testdata.lastName)
        
    .enterMiddleIntial(testdata.middleInitial)
    
    .enterDOB(testdata.DOB)
       
    .selectGender(testdata.gender)
    
    .typeMRN(testdata.mRN)
    
    .selectState(testdata.state)
    
    .selectCity(testdata.city)
    
    .enterSSN(testdata.ssn)
      
    .enterZipCode(testdata.zipcode)
        
    .enterAddress(testdata.address)
    
    .typeHomePhone(testdata.homePhone)
    
    .typeCellPhone(testdata.CellPhoneno)
    
    //.getSexualOrienation().select(testdata.sexualOrienation)
    
    .typeSexualOrienationDesc(testdata.sexualOrienationDesc)
        
    .selectRace(testdata.race)
       
    .selectEthnicity(testdata.ethnicity)
                                 //billing
    .selectBillingInfo(testdata.billingInfo)
       
    .selectPatientType(testdata.patientType)
    
    .selectStageOfDisease(testdata.stageOfDisease)
    
    .typeFedexNo(testdata.fedexNo)
    
    .checkCbc()
    
    .getDischargeDate(testdata.dischargeDate)
    
    .getSentDate(testdata.sentDate)
    
    .getCollectionDate(testdata.collectionDate)
    
    .typeIcd10(testdata.icd10)
    
    .clickICD10()
    
                         casecreationPage
    .clickCreateCase()
    
    .clickCloseMessage()

                         cy.wait(3000)
    const Code = casecreationPage.getCaseCode();
    searchList(testdata.triagedcase,casecreationPage.getCaseCode());
    cy.wait(3000)


    TechFlowPage.assertCaseExistence(Code);

})

})