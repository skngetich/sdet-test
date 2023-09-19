describe("Login Test", () => {
  beforeEach(()=>{
    // Visit your login page using the relative path
    cy.visit("../../login.html");
  })
  
  it('should visit the page',()=>{
        cy.get('form').should('exist')
  })

  it("should check if login element exist",()=>{
      // Find the form by its ID and interact with input fields within it
    cy.get("#login-form").within(() => {
      cy.get('input[name="username"]').should('exist');
      cy.get('input[name = "password"][type = "password"]').should("exist");
      cy.get('button[type="submit"]').should("exist");
    });
  })

  it("should log in successfully", () => {
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
