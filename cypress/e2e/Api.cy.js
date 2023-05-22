
describe('API method',()=>{
    it('POST method', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://practice.expandtesting.com/notes/api/users/login',
            body :{
                
                "email" : "6fci31r2mnam@gmailcc.com",
                "password" : "Azerty1234"
            }
        }).then((res)=>{
            expect(res.status).to.eql(200);
            expect(res.body).has.property('message','Login successful');
            expect(res.body.data).has.property('name','houssem');
            expect(res.body.data).has.property('email','6fci31r2mnam@gmailcc.com');
        })
    })
    
})
describe('Post notes', ()=>{
    
    it('POST method',()=>{
        cy.fixture("data").then((user)=>{
            cy.request({
                url : 'https://practice.expandtesting.com/notes/api/notes/',
                headers :{
                    accept: "application/json",
                    "x-auth-token" : "5302487622e0451695f16dcb7b7da41bf4e52ac2999b4fac9271d0159087b0e9",
                },
                body : {
                    title : user.title,
                    description : user.description,
                    category : user.category,

                }
            }).then((res)=>{
                expect(res.status).to.eql(200);
                expect(res.body.success).to.eql(true);

            })
        })

        })
    
        
    it('POST method',()=>{
    
        cy.request({
            url : 'https://practice.expandtesting.com/notes/api/notes/',
            headers :{
                accept: "application/json",
                "x-auth-token" : "5302487622e0451695f16dcb7b7da41bf4e52ac2999b4fac9271d0159087b0e9",
            },
            body : {
                category : "work",
                description : "creat home not",
                title : "home note"
            }
        }).then((res)=>{
            expect(res.status).to.eql(200);
            expect(res.body.success).to.eql(true);
        })
    })
    it('POST method',()=>{
    
        cy.request({
            url : 'https://practice.expandtesting.com/notes/api/notes/',
            headers :{
                accept: "application/json",
                "x-auth-token" : "5302487622e0451695f16dcb7b7da41bf4e52ac2999b4fac9271d0159087b0e9",
            },
            body : {
                category : "personal",
                description : "creat home not",
                title : "home note"
            }
        }).then((res)=>{
            expect(res.status).to.eql(200);
            expect(res.body.success).to.eql(true);

        })
    })
})
