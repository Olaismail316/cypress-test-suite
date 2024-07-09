
class casePage {
  getCaseCode()
   {
    return cy.get(":nth-child(1) > h6 > b")
  }

  getCode()
   {
    cy.get(":nth-child(1) > h6 > b").invoke('text').then((text) => 
    {
      cy.log(text)

    return text;
    })
  ///return this
  }

  pressCreate() {
    cy.get('button#create-case-button-top').click()
    return this
  }
  get AttendingPhysician() {
    return "select[id='attendingPhysicianId']"
  }
  get ReferringPhysician() {
    return cy.get("select[id='referringPhysicianId']")
  }
  selectAttendingPhysician(Atten) {
     cy.get(this.AttendingPhysician).select(Atten)
    return this
  }
  selectReferringPhysician(ref) {
    this.ReferringPhysician.select(ref)
    return this
  }

  get reqNo() {
    return "input#requisitionNumber"
  }
  typeReqNo(req) {
   
     cy.get(this.reqNo).clear().type(req)
    return this
  }
  get accessionDate() {
    return cy.get("#caseAccesionedDate")
  }

  // getaccessionDate()
  // {
  //   return this.accessionDate();

  // }

  get specimenNumber() {
    //return cy.get('input#specimenNumber')
    return 'input#specimenNumber'
  }
  enterSpecimenNo(sn) {

    //this.specimenNumber.clear().type(sn)
    cy.get(this.specimenNumber).clear().type(sn)
    return this
  }

  get firstName() {
    return cy.get("input[id='patient.firstName']")
  }
  enterFirstName(fn) {
    this.firstName.clear().type(fn)
    return this

  }
  get lastName() {

    return cy.get("input[id='patient.lastName']")

  }
  enterLastName(ln) {

    this.lastName.clear().type(ln)
    return this
  }
  get middleName() {
    return cy.get("input[id='patient.middleInitial']")
  }

  enterMiddleIntial(mi) {
    this.middleName.clear().type(mi)
    return this
  }
  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return formattedDate

  }
  getSSNAsseration(ssn) {
    return "***-**-" + ssn.substring(ssn.length - 4);
  }
  getCellAsseration(Phoneno) {
    return "(" + Phoneno.substring(0, 3) + ")" + Phoneno.substring(0, 3) + "-" + Phoneno.substring(Phoneno.length - 4)

  }

  get dateOfBirth() {
    return cy.get("input[id='patient.dob']")
  }

  enterDOB(dob) {
    this.dateOfBirth.clear().type(dob)
    return this
  }

  get gender() {
    return cy.get("select[id='patient.gender']")
  }
  selectGender(gender) {

    this.gender.select(gender)
    return this
  }
  get State() {
    return cy.get("select[id='patient.state']")
  }
  selectState(st) {
    this.State.select(st)
    return this
  }

  get city() {
    return cy.get("select[id='patient.city']")
  }
  selectCity(city) {
    this.city.select(city)
    return this
  }
  get mRN() {
    return cy.get("input[id='patient.mrn']")
  }
  typeMRN(mrn) {
    this.mRN.clear().type(mrn)
    return this
  }
  get zip() {
    return cy.get("input[id='patient.zipCode']")
  }
  enterZipCode(zipcode) {
    this.zip.clear().type(zipcode)
    return this
  }

  get Address() {
    return cy.get("input[id='patient.address']")
  }

  enterAddress(address) {
    this.Address.clear().type(address)
    return this;

  }
  get homePhone() {
    return cy.get("input[id='patient.homePhone']");
  }
  get cellhone() {
    return cy.get("input[id='patient.cellPhone']");
  }
  typeHomePhone(hp) {
    this.homePhone.clear().type(hp)
    return this
  }
  typeCellPhone(cp) {
    this.cellhone.clear().type(cp)
    return this
  }
  get SSN() {
    return cy.get("input[id='patient.ssn']");
  }
  enterSSN(ssn) {

    this.SSN.clear().type(ssn)
    return this
  }
  get sexualOrientation() {
    return cy.get("")
  }
  selectSexualOrienation(sex) {

    this.sexualOrientation.select(sex)
    return this
  }

  get sexualDesc() {
    return cy.get("input[placeholder='Describe Sexual Orientation']")
  }
  typeSexualOrienationDesc(sd) {
    this.sexualDesc.type(sd)
    return this
  }
  get Race() {

    return cy.get("select[id='patient.race']")
  }
  get Ethnicity() {

    return cy.get("select[id='patient.ethnicity']")
  }
  selectRace(race) {
    this.Race.select(race)
    return this
  }
  selectEthnicity(et) {
    this.Ethnicity.select(et)
    return this
  }

  get container() {
    return cy.get("select[id='containerName']");
  }
  selectContainerName(CN) {
    this.container.select(CN)
    return this;


  }
  get typeName() {
    return cy.get("select[id='typeName']");
  }
  selectTypename(TN) {
    this.typeName.select(TN)
    return this;
  }
  get specimenCount() {
    return cy.get("select[id='specimenCount']");
  }
  selectSpecimenCount(sc) {
    this.specimenCount.select(sc)
    return this
  }
  get specimenAddButton() {
    return cy.get("button[class='btn specimen-add-btn btn-danger btn btn-primary']");
    
  }

  addSpec() {
    this.specimenAddButton.click()
    return this
  }
  get billingInfo() {
    return cy.get("select[id='billingInfo']");
  }
  selectBillingInfo(bin) {
    this.billingInfo.select(bin)
    return this
  }
  get patinetType() {
    return cy.get("select[id='patientType']");
  }
  selectPatientType(pt) {

    this.patinetType.select(pt)
    return this
  }
  get icd10() {
    return cy.get("input[id='react-select-3-input']");
  }
  typeIcd10(ic) {
    this.icd10.type(ic)
    return this
  }
  get fedexNo() {
    return "input[id='fedexNumber']";
  }
  typeFedexNo(f) {
     cy.get(this.fedexNo).type(f);
    return this
  }
  get stageOfDisease() {
   return cy.get("label[class='checkBoxLabel form-label']")
  }
  selectStageOfDisease(std) {
    this.stageOfDisease.contains(std).click()
    return this
  }
  get dischargeDate() {
    return cy.get("input[id='dischargeDate']");
  }
  typeDischargeDate(dd) {
    this.dischargeDate.type(dd)
    return this
  }
  get sentData() {
    return cy.get("input[id='sentDate']");
  }
  typeSentDate(sn) {
    this.sentData.type(sn)
    return this
  }
  get collectionDate() {
    return cy.get("input[id='collectionDate']");
  }
  getCollectionDate(cll) {
    this.collectionDate.type(cll)
    return this
  }
  get CBC() {
    return cy.get("input[id='cbcResultsAttached']");
  }
  checkCbc() {
    this.CBC.click()
    return this
  }
  get updateCase() {
    return cy.get(".update-btn-col > .btn > span").click()
  }
createCase() {
    this.updateCase
    return this
  }

  get closeButton() {
    return cy.get("button[class='btn-close']")
  }
  clickCloseMessage() {
     this.closeButton.click()
     return this
  }


  get submitButton() {
    return cy.get(".px-0 > .btn");
  }

  clickSubmitbutton() {
    return this.submitButton.click({ force: true })
  }

  get Icd10Selection() {
    return cy.get("div[class=' css-wsp0cs-MultiValueGeneric']")
  }

  getIcd10Selection() {

    return this.Icd10Selection
  }

  get IcaseDetails() {
    return cy.get("#left-tabs-example-tab-caseDetail")
  }
  clickCaseDetails() { return this.IcaseDetails.click() }



  //   getaccessionBy(){return cy.get("#caseAccesionedBy")}

  //   getCaseCategory(){return cy.get('#caseCategory')}

  //   closeAlert(){return "button[aria-label='Close alert']"}

  //   clickClose(){return cy.get(".btn-close")};

  //   getAccessionNumber(){return cy.get("#caseNumber")}

  get tabICD10() {
    return cy.get("#react-select-3-option-0");
  }
  clickICD10() {
    return this.tabICD10.click()

  }



}
export default casePage