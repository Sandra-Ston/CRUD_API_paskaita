
describe ('CRUD_API', () => {

    context ('/products', () => {

        context ('/products atsakiri testai', () => {

            it('/products status kodas 200', () => {
                cy.request("GET", "localhost:3000/products"). then((response) => {
                    expect(response.status).to.be.eq(200);
                });
            });

            it('/products netuscias', () => {
                cy.request ("GET", "localhost:3000/products"). then ((response) => {
                    expect(response.body).length.to.be.above(1);
                })
            })

            it('/products atsakymo laikas', () => {
                cy.request ("GET", "localhost:3000/products"). then ((response) => {
                    //patikrinti rensponse time (aprasyti 3 varinatai tai paciai uzklausai)
                    expect(response.duration).to.be.lessThan(1000);
                    expect(response.duration).to.not.be.greaterThan(1000);
                    expect(response.duration).to.be.below(1000);
                })
            })

        });



        it('/products vieno produkto bendras testas', () =>{
            cy.request("GET", "localhost:3000/products/2").then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.body).to.have.property('id', 2);
                expect(response.body).to.have.property('title', 'Lašiša');

                cy.log(response.body);
                cy.log(response.body.id);
                cy.log(response.body.title);

            })
        }); 
        
        it('/products create bendras testas', () =>{
            cy.request('POST', "localhost:3000/products", {
                title:"nauja prekė",
                description: 'naujas aprašymas',
                price: '4.20'
                }).then((response) => {
                    expect(response.status).to.be.eq(201);
                    expect(response.duration).to.be.below(1000);
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('title', 'nauja prekė');
                    expect(response.body).to.have.property('description', 'naujas aprašymas');
                    expect(response.body).to.have.property('price', 4.20);
                })
        });

        it('/products update bendras testas', () =>{
            cy.request ('PUT', "localhost:3000/products/7", {
                title: "atnaujinta prekė",
                description: 'atnaujintas aprašymas',
                price: '420.42'
            }).then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.duration).to.be.below(1000);
                expect(response.body).to.have.property('id');
                expect(response.body).to.have.property('title', 'atnaujinta prekė');
                expect(response.body).to.have.property('description', 'atnaujintas aprašymas');
                expect(response.body).to.have.property('price', 420.42);

            })
        });
        
        it('/products delete bendras testas', () =>{
            cy.request('DELETE', "localhost:3000/products/10").then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.duration).to.be.below(1000);
                expect(response.body).to.have.property('message');
            })
            
        });

        
    });

});
