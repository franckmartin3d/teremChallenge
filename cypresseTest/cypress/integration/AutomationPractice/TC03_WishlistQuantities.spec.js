describe("Test Case Wishlist Quantities", () => {
    // Navigating to myWishlist Page
    it("Add Items to whistlist to verify quantities", () => {

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
    cy.get("#name").type("QuantitiesWishlist");
    cy.get("#submitWishlist > span").click();
    // Validation
    cy.contains("QuantitiesWishlist");

    //STEPS TO TEST
    // 1. In Popular Item select "Faded Short Sleeve T-shirts
    cy.get('.logo').click()
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()

    // 2. On the right side of the screen select "Add to wishlist"
    cy.get('#wishlist_button').click()
    // Validate
    cy.contains('Added to your wishlist.')
    cy.get('.fancybox-item').click()

    // 3. Navigate to your wishlist (user => MY WHISHLIST)
    cy.get('.account').click()
    cy.get('.lnk_wishlist').click()
        // validate quantities 1
        // cy.get('#mywishlist').should('include','1')
    
    // 4. In Popular Item select "Faded Short Sleeve T-shirts
    cy.get(':nth-child(2) > .product-content > h5 > .product-name').click()

    // 5. On the right side of the screen select "Add to wishlist"
    cy.get('#wishlist_button').click()
        // Validate
        cy.contains('Added to your wishlist.')
        cy.get('.fancybox-item').click()

    // 6. Navigate to your wishlist (user => MY WHISHLIST)
    cy.get('.account').click()
    cy.get('.lnk_wishlist').click()
        // validate quantities 2
        // cy.get('.bold').should('include','2')


    
    // 7. In Popular Item select "Faded Short Sleeve T-shirts
    // 8. Select Size M
    // 9. On the right side of the screen select "Add to wishlist"
    // 10. Navigate to your wishlist (user => MY WHISHLIST)
    
    // 11. In Popular Item select "Faded Short Sleeve T-shirts
    // 12. Select Size L
    // 13. On the right side of the screen select "Add to wishlist"
    // 14. Navigate to your wishlist (user => MY WHISHLIST)
    
    // 15. In Popular Item select "Faded Short Sleeve T-shirts
    cy.get(':nth-child(2) > .product-content > h5 > .product-name').click()

    // 16. Select color Blue
    cy.wait(600)
    cy.get('#color_14').click()
        // validate
    cy.url().should('include', 'color-blue')

    // 17. On the right side of the screen select "Add to wishlist"
    cy.get('#wishlist_button').click()
        // Validate
        cy.contains('Added to your wishlist.')
        cy.get('.fancybox-item').click()

    // 18. Navigate to your wishlist (user => MY WHISHLIST)
    cy.get('.account').click()
    cy.get('.lnk_wishlist').click()
    cy.get('[style="width:200px;"] > a').click()

        // validate quantities 2
        cy.get('.wlp_bought_list').contains('S, Orange').should('be.visible')
        cy.get('.wlp_bought_list').contains('S, Blue').should('be.visible')
    

    // TEARDOWN
    // / delete whishlist
    cy.wait(600);
    cy.get('.icon-remove').click( { multiple: true })
    cy.wait(600)

    // sign out
    cy.get("nav > :nth-child(2) > .logout").click();
        // validation Needed
        cy.contains("Sign in");

    });

});

