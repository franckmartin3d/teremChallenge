describe("Test Case Add Items", () => {
    // Navigating to myWishlist Page
    it("Add Items to whistlist", () => {

    //PREREQUIST
    // navigate to website
      cy.visit(
        "http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist"
      );
      

    //Log in user
    cy.get("#email").type("franck.martin3d@gmail.com");
    cy.get("#passwd").type("foxy1234");
    cy.get("#SubmitLogin > span").click();
    //Create a whishlist
    cy.get("#name").type("addItemWishlist");
    cy.get("#submitWishlist > span").click();
    // Validation
    cy.contains("addItemWishlist");


    //STEPS TO TEST
    // 1. In Popular Item select "Faded Short Sleeve T-shirts
    cy.get(':nth-child(2) > .product-content > h5 > .product-name').click()
        //validation needed 


    // 2. On the right side of the screen select "Add to wishlist"
    cy.get('#wishlist_button').click()
        // Validate
        cy.contains('Added to your wishlist.')
        cy.get('.fancybox-item').click()

    // 3. Navigate to your wishlist (user => MY WHISHLIST)
    cy.get('.account').click()
    cy.get('.lnk_wishlist').click()
        // validate quantities


    // 4. Select the wishlist in the table
    cy.get('[style="width:200px;"] > a').click()
        // validate
        cy.contains('Faded Short Sleeve T-shirts')

    // 5. Sign out
    cy.get('nav > :nth-child(2) > .logout').click()
        // validation needed
        cy.contains("Sign in");

    // 6. Sign In
    cy.get('.login').click()

    // ogin
    cy.get("#email").type("franck.martin3d@gmail.com");
    cy.get("#passwd").type("foxy1234");
    cy.get("#SubmitLogin > span").click();

    // 7 Select My wishlist
    cy.get('.lnk_wishlist').click()
        // Validation Needed

    // 8. Select the created wishlist
    cy.get('[style="width:200px;"] > a').click()
        // validate
        cy.contains('Faded Short Sleeve T-shirts')


    // TEARDOWN
    // delete whishlist
    cy.wait(600);
    cy.get('.icon-remove').click({ multiple: true })
    cy.wait(600)

    // sign out
    cy.get("nav > :nth-child(2) > .logout").click();
        // validation Needed
        cy.contains("Sign in");
 

    });

});

