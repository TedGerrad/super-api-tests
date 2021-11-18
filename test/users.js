import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/'); 
const TOKEN = '9090ceb54777b92ad8627cd78cf83c97e08447abbc7ac2cde123e05c2d776bf6';

describe('Users', ()=> {
    it('GET /users', () => {
        request
            .get('users?access-token=${TOKEN}').end((err,res) => {
                console.log(err);
                console.log(res.body);
            })
    });
})