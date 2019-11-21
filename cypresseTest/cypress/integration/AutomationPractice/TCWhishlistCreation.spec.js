describe("Test Case Wishlist Creation",  ()=>{
    

     // Navigating to myWishlist Page
     it('Create a whislist',() =>{
        cy.visit('http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist')


         // Sign In into wishlists
        cy.get('#email').type("franck.martin3d@gmail.com")
        cy.get('#passwd').type("foxy1234")
        cy.get('#SubmitLogin > span').click()

        // Validation Needed
        // cy.contains('#mywishlist')

        // Create A wishlist
        cy.get('#name').type("testCase1")
        cy.get('#submitWishlist > span').click()
        

           // Validation 
           cy.contains('testCase1')
        


    })
   

    
})