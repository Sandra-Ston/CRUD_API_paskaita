/// <reference types="cypress" />

it('Fixtures works', () =>{
    cy.fixture('users').as('userJson').then((users)=>{
        cy.log(users)

    }); //kreipiasi i fixtures/user.json ir nudodoma kaip vadinsis toliau kode

    cy.fixture('example').as('exampleJson').then((example) => {
        cy.log(example)
    });

    cy.fixture('products').as('productsCsv').then((products) => {
        cy.log(products)
    });

});