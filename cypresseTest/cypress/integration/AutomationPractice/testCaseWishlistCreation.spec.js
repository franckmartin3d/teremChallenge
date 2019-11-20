describe("Test Case Wishlist Creation",  ()=>{

     // Navigating to myWishlist Page
     it('Navigate to AP site',() =>{
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
        // cy.contains('#mywishlist')
    })
   


})