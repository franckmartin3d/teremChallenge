describe("Setup: Navigate to automationPractice.com",  ()=>{

    // Navigating to login page
    it('Navigate to AP site',() =>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    })
    // Sign In
    it('Login to application',() =>{
        cy.get('#email').type("franck.martin3d@gmail.com")
        cy.get('#passwd').type("foxy1234")
        cy.get('#SubmitLogin > span').click()
    })


})