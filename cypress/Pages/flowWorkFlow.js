
class flowPage

{

       uploadFlowAttach(attch)
    {
         cy.get("#accordionCasePro > div > div > div > div > div > input[type=file]").attachFile(attch) 
        return this 
     }
assertCaseExistence(caseno)
{

        cy.contains('td', caseno).should('exist') 

}


}
export default flowPage