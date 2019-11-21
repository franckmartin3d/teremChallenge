describe("Test Case Wishlist Creation",  ()=>{
    beforeEach(function () {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is just a simple example
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
      })


     // Navigating to myWishlist Page
     it('Create a whislist',() =>{
        cy.visit('http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist')
    })
    // Sign In into wishlists
    it('Login to application',() =>{
        cy.get('#email').type("franck.martin3d@gmail.com")
        cy.get('#passwd').type("foxy1234")
        cy.get('#SubmitLogin > span').click()

        // Validation Needed
        // cy.contains('#mywishlist')
    })
    it('Create A wishlist',() =>{
        
        cy.get('#name').type("testCase1")
        cy.get('#submitWishlist > span').click()
        // Validation Needed
        cy.contains('testCase1')
    })
   


})