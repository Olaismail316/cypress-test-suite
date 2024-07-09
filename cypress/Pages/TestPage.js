

 import { Test } from './selectors';

 class addTest {
 
     clickAddTest ()
    
    {
     cy.wait(2000)
         cy.get(Test.Addtest).click()
         return this
    
    }
   
    selectedTest(tst)
    
    {
         cy.get(Test.selectedtest).select(tst).wait(3000)
         return this
    
    }
   
   
    selectPanel(tp){
         
        cy.get(Test.TriagedPanel).type(tp).type('{enter}').wait(3000)
        return this
    }
   
    selectSpecmCount(sc)
    {
         cy.get(Test.speccount).type(sc).type('{enter}').wait(3000)
        return this
    
    }

    clickUpdateCase()
    {
      cy.get(".update-btn-col > .btn > span").click({force: true})
     return this
}
    closeMessage(){
      cy.get("button[class='btn-close']").click()
      return this}
 

  assertCorrectstatus(status)
  {
    return cy.get("[style=\"text-align: center; vertical-align: middle;\"] > span")
    .should('have.text', status);

}
}
 export default addTest