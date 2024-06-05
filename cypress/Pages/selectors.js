export const Specimen = {
CN: "select[id='containerName']",
TypeName: "select[id='typeName']",
SpCount: "select[id='specimenCount']",
AddedSpec: "button[class='btn specimen-add-btn btn btn-primary']"
}
export const Billing = {
  patient: "select[id='patientType']",
  ic: "input[id='react-select-3-input']",
  billing: "select[id='billingInfo']"
}

export const CreateCase = {
caseCode: ':nth-child(1) > h6 > b',
CreateButton: 'button#create-case-button-top',
CN:"#caseNumber",
dis: "label[class='checkBoxLabel form-label']",

req:"input#requisitionNumber",
acc: "#caseAccesionedDate",
spec:'input#specimenNumber',
collDate: "input[id='collectionDate']", 
cbc: "input[id='cbcResultsAttached']", 
saveCase: "button[class='btn btn-primary update-btn btn btn-primary']",
updatecase: ".update-btn-col > .btn > span",
submit: ".px-0 > .btn" ,
closebutton: "button[class='btn-close']",
sentdate: "input[id='sentDate']",
disdate:"input[id='dischargeDate']",
fedexno: "input[id='fedexNumber']",
CClose: ".btn-close",
closealert: "button[aria-label='Close alert']",
CCat: '#caseCategory' ,
accby: "#caseAccesionedBy",
icd10selection: "div[class=' css-wsp0cs-MultiValueGeneric']" ,
casedetail: "#left-tabs-example-tab-caseDetail",
cicd: "#react-select-3-option-0",



}
export const ClientPage = {

Attending: "select[id='attendingPhysicianId']",
Referring: "select[id='referringPhysicianId']",
}
export const Test = {
Addtest: ".col-md-3 > .btn",
selectedtest: "select[class='custom-select select-control-sm form-control']",
TriagedPanel: ":nth-child(3) > :nth-child(1) > .css-b62m3t-container > .css-13cymwt-control",
teststatus: "[style=\"text-align: center; vertical-align: middle;\"] > span",
speccount: ".css-1fdsijx-ValueContainer > .css-qbdosj-Input",
}
export const Patinet = {
  fn: "input[id='patient.firstName']",
  ln: "input[id='patient.lastName']",
  mid: "input[id='patient.middleInitial']",
  dob: "input[id='patient.dob']",
  gender: "select[id='patient.gender']",
  state: "select[id='patient.state']",
  city: "select[id='patient.city']",
  mrn: "input[id='patient.mrn']",
  zip: "input[id='patient.zipCode']",
  address: "input[id='patient.address']",
  hphone: "input[id='patient.homePhone']",
  cellphone: "input[id='patient.cellPhone']",
  SSN: "input[id='patient.ssn']",
  Desc: "input[placeholder='Describe Sexual Orientation']",
  race: "select[id='patient.race']",
  eth:"select[id='patient.ethnicity']"

}

//   getCaseCode()
//   {
      
//       return cy.get(caseCode);
    
      
//   }
//   getCreatButton() 
//   {
//       return cy.get(CreateButton)
     
//   }
//   getAttendingPhysician() 
  
//   {
//     return cy.get(Attending)
      
//   }
//   getReferringPhysician()
//    {
//     return  cy.get(Referring)
   
//   }
//  getReqNo() 
//   {

//     return  cy.get(req);
//   }
//   getaccessionDate()
//   {
    
//     return  cy.get(acc);

//   }
 
//   getSpecimenNo()
//  {
 
//     return  cy.get(spec)
//   }
  
//    getFirstName() 
//   {
   
//     return  cy.get(fn)
//     }
//     getLastName() 
//     {
    
//         return  cy.get(ln)
       
//       }
//   getMiddleIntial() 
//   {
    
//     return  cy.get(mid)
     
//   }
//   getCurrentDate()
//   {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const day = today.getDate();
    
//     const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
//     return formattedDate

//   }
//   getSSNAsseration(ssn){
//    return "***-**-"+ssn.substring(ssn.length - 4);
//   }
//   getCellAsseration(Phoneno)
//   {
//    return "("+Phoneno.substring(0,3) +")"+Phoneno.substring(0,3)+"-"+Phoneno.substring(Phoneno.length -4)

//   }
//   getDOB() 
//   {
    
//     return cy.get(dob);
//   }
//   getGender()
//    {
   
//     return cy.get(gender);
        
//  }

//   getState() 
//   {
  
//     return  cy.get( state)
//   }
//   getCity() 
//   {
   
//     return  cy.get(city)

//   }
//  getMRN() {
 
//    return cy.get(mrn);
//   }

//  getZipCode()
//  {
  
//     return  cy.get(zip);
//  }


//   getAddress() {
   
//     return  cy.get(address);
     
//   }
//   getHomePhone() {
  
//     return  cy.get(hphone)
//   }
//   getCellPhone() {
  
//     return  cy.get(cellphone)
//   }
//   getSSN() {
   
//      return cy.get(SSN)
//   }
//   getSexualOrienation() 
//   {
//     SexOr = "input[id='patient.ssn']";
//     return cy.get(SexOr)
//  }
//   getSexualOrienationDesc()
//    {
    
//       return cy.get(Desc)
//    }
  
//    getContainerName()
//  {
 
//       return cy.get( CN)
   
//   }
//   getTypename() 
//   {
   
//      return cy.get(TypeName)
//   }
//   getSpecimenCount() 
//   {
  
//       return cy.get(SpCount)
//   }  

//   getAddedSpec() 
//   {
  
//     return cy.get(AddedSpec)
//   }
//   getRace() 
//   {
   
//     return cy.get(race)
//   }
//   getEthnicity()
//   {
  
//     return cy.get(eth)
//   }

//     getBillingInfo()
//     {
    
//         return cy.get(billing)
//     }
//     getPatientType()
//     {
    
//         return cy.get(patient)
//     }
//     getIcd10()
//     {
     
//         return cy.get()
//     }
//     getFedexNo()
//    {
   
//     return cy.get(fn)   
//    }
//    getStageOfDisease()
//    { 
 
//     return cy.get(dis)
// }
   
//    getDischargeDate()
//    {
 
//     return cy.get(disdate)
//    } 
  
//    getSentDate()
//     {
   
//     return cy.get(sentdate)
    
// }

//    getCollectionDate() { return cy.get(collDate)}
//    getCbcCheck()  {return cy.get(cbc)}
//    getCreateCaseButton()
//     {return cy.get(createcase)}
//    getCloseButton(){ return cy.get(closebutton)}
//    getAddtest (){ return cy.get(Addtest)}
  
//    getSelectedTest(){ return cy.get(selectedtest)}
//    getTriagedPanel(){return cy.get(TriagedPanel)}
//     getSpecmCount(){return cy.get(speccount)}
//     getUpdateCase(){ return cy.get(updatecase)}
//      getSubmitbutton(){return cy.get(submit) }
//      getIcd10Selection(){return cy.get(icd10selection)}
     
//     getCaseDetailsButton(){ return cy.get(casedetail)}
//     getTeststatus(){ return cy.get(teststatus)}

   
//     getaccessionBy(){ return cy.get(accby)}
//     getCaseCategory(){return cy.get(CCat)}
//     closeAlert(){ return closealert}
//     clickClose(){ return cy.get(CClose)};
//     getAccessionNumber(){ return cy.get(CN)}
//     clickICD10(){ return cy.get(cicd)}
  
  //   AssertValue(locator, fieldtext)  
  //   {
  //     locator.invoke('val').then((inputValue) => {
  //     // Assert that the value is correct
  //     return expect(inputValue).to.equal(fieldtext);
  //   });
  // }
    
