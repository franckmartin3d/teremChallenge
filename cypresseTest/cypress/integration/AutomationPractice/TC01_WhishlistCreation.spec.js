describe("Test Case Wishlist Creation", () => {
  // Navigating to myWishlist Page
  it("Create a whislist", () => {
    cy.visit(
      "http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist"
    );
    // validation Needed

    // Sign In into wishlists
    cy.get("#email").type("franck.martin3d@gmail.com");
    cy.get("#passwd").type("foxy1234");
    cy.get("#SubmitLogin > span").click();
    // Validation Needed
    // cy.contains('#mywishlist')

    // Create A wishlist
    cy.get("#name").type("WhishToDelete");
    cy.get("#submitWishlist > span").click();
    // Validation
    cy.contains("WhishToDelete");

    // delete whishlist
    cy.wait(600);
    cy.get('.icon-remove').click({ multiple: true })
    cy.wait(600)

    // validation Needed

   //  TEARDOWN
    // sign out
    cy.get("nav > :nth-child(2) > .logout").click();
    // validation Needed
    cy.contains("Sign in");
  });
});
