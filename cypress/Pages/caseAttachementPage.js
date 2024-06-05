/// <reference types="cypress" />

class caseAttachementPage 

{

    clickCaseAttachementTab() 
    {
         cy.get("a[id='left-tabs-example-tab-caseAttachment']").click()
       return this
    }
    clickUploadButton(att)
    {
         cy.get("#left-tabs-example-tabpane-caseAttachment > div > input[type=file]") .attachFile(att)
         return this 
     }
}
export default caseAttachementPage