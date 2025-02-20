
it('Request, intercept, visit', () => {

// API užklausa su tikrinimu
cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    expect(response.status).to.eq(200); //ar status kodas 200
});

// Apsilankome puslapyje
cy.visit('https://todolist.james.am/#/') // tiesiog uzeinu i svetaine


//Perima API, kai API kviecia narsykle!!!!
// Perimame GET užklausą, bet is ansciau zinome, kad šio posto nėra
//cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts/104").as("missingPost");
//cy.wait("@missingPost", { timeout: 2000 }).its("response.statusCode").should("eq", 404);

});

it('Get a post/mock post', () => {
    //gauti originalų post kurio id = 1
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        cy.log(response.body);
    });
 
    // cy.intercept, nereaguoja į cy.request
    // cy.intercept reaguoja tik į cy.visit
 
    //Sumanipuliuoti, periimti post kurio id = 1
    //{userId: 104, title: 'perimtas pavadinimas', id: 104}
    cy.intercept('GET', "https://jsonplaceholder.typicode.com/todos/1", {
    statusCode: 201,
    body: { userId: 104, title: 'perimtas pavadinimas', id: 104 } }).as('getPostMock');
    cy.visit('https://jsonplaceholder.typicode.com');
    cy.get('#run-button').click();
    cy.wait('@getPostMock');
});
 