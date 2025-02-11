
describe ('JSON-PLACEHOLDER', () => {

    context ('/posts', () => {

        context ('/posts atsakiri testai', () => {

            it('/posts status kodas 200', () => {
                cy.request("GET", "https://jsonplaceholder.typicode.com/posts"). then((response) => {
                    expect(response.status).to.be.eq(200);
                });
            });

            it('/posts netuscias', () => {
                cy.request ("GET", "https://jsonplaceholder.typicode.com/posts"). then ((response) => {
                    expect(response.body).length.to.be.above(1);
                })
            })

            it('/posts atsakymo laikas', () => {
                cy.request ("GET", "https://jsonplaceholder.typicode.com/posts"). then ((response) => {
                    //patikrinti rensponse time (aprasyti 3 varinatai tai paciai uzklausai)
                    expect(response.duration).to.be.lessThan(1000);
                    expect(response.duration).to.not.be.greaterThan(1000);
                    expect(response.duration).to.be.below(1000);
                })
            })

        });



        it('/posts vieno posts bendras testas', () =>{
            cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.body).to.have.property('id', 1);

                cy.log(response.body);
                cy.log(response.body.id);
                cy.log(response.body.title);

            })
        }); 
        
        it('/posts create bendras testas', () =>{
            cy.request('POST', "https://jsonplaceholder.typicode.com/posts", {
                title:"nauja prekė",
                body: 'naujas aprašymas',
                userId: 20
                }).then((response) => {
                    expect(response.status).to.be.eq(201);
                    expect(response.duration).to.be.below(1000);
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('title', 'nauja prekė');
                    expect(response.body).to.have.property('body', 'naujas aprašymas');
                    expect(response.body).to.have.property('userId', 20);
                    cy.log(response.body);
                })
        });

        it('/posts update bendras testas', () =>{
            cy.request ('PUT', "https://jsonplaceholder.typicode.com/posts/1", {
                title: "atnaujinta prekė",
                body: 'atnaujintas aprašymas',
                userId: 1
            }).then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.duration).to.be.below(1000);
                expect(response.body).to.have.property('id', 1);
                expect(response.body).to.have.property('title', 'atnaujinta prekė');
                expect(response.body).to.have.property('body', 'atnaujintas aprašymas');
                expect(response.body).to.have.property('userId', 1);
                cy.log(response.body);

            })
        });
        
        it('/posts delete bendras testas', () =>{
            cy.request('DELETE', "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.duration).to.be.below(1000);

           })
            
        });

        
    });

});
