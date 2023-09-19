describe("Login Test", () => {
  
  it('should visit the page',()=>{
        cy.visit("../../login.html");
        cy.get('form')
  })

  it("should check if login element exist",()=>{
    // Visit your login page using the relative path
    cy.visit("../../login.html");

    // Find the form by its ID and interact with input fields within it
    cy.get("#login-form").within(() => {
      cy.get('input[name="username"]').should('exist');
      cy.get('input[name = "password"][type = "password"]').should("exist");
      cy.get('button[type="submit"]').should("exist");
    });
  })

  it("should log in successfully", () => {
    // Visit your login page using the relative path
    cy.visit("../../login.html");

    // Find the  form by its ID and interact with input fields within it
    cy.get("#login-form").within(() => {
      cy.get('input[name="username"]').type("sampleuser");
      cy.get('input[name="password"]').type("samplepassword");
      cy.get('button[type="submit"]').click();
    });

    //  Wait for elements on the next page as needed
    cy.contains("p.success", "Login success").should("exist");
  });

  it("should handle login failure", () => {
    // Visit your login page using the relative path
    cy.visit("../../login.html");

    // Find the form by its ID and interact with input fields within it
    cy.get("#login-form").within(() => {
      cy.get('input[name="username"]').type("incorrect_username");
      cy.get('input[name="password"]').type("incorrect_password");
      // Simulate error
      // cy.get('button[type="submit"]').click(); 
    });

    // Assert error messages or handle login failure as needed
    cy.get("#error").should("exist");
  });
});
