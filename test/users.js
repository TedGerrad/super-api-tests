import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/'); 

import { expect } from "chai";
/*
By importing assertions from the chai library, we can remove "console.log"
from our original request
*/


const TOKEN = '9090ceb54777b92ad8627cd78cf83c97e08447abbc7ac2cde123e05c2d776bf6';

//POSITIVE test scenario that SHOULD PASS
describe('Users', ()=> {
    it('GET /users', (done) => {
        request.get('users?access-token=${TOKEN}').end((err,res) => {
           expect(res.body.data).to.not.be.empty;   
           done();  
        })
    });
})

//NEGATIVE test scenario that SHOULD FAIL
describe('Users', ()=> {
    it('GET /users', (done) => {
        request.get('users?access-token=${TOKEN}').end((err,res) => {
           expect(res.body.data).to.be.empty;   
           done();  
        })
    });
})