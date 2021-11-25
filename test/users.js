import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/'); 

import { expect } from "chai";
/*
By importing assertions from the chai library, we can remove "console.log"
from our original request
*/


const TOKEN = '9090ceb54777b92ad8627cd78cf83c97e08447abbc7ac2cde123e05c2d776bf6';

//This test sends a GET request to the /users endpoint of the API to verify whether or not it returns an empty result

/*
POSITIVE test scenario that SHOULD PASS
describe('Users', ()=> {
    it('GET /users', (done) => {
        request.get('users?access-token=${TOKEN}').end((err,res) => {
           expect(res.body.data).to.not.be.empty;   
           done();  
        })
    });
})
*/

//POSITIVE test scenario using the "return" AND "then" keywords to handle asychronus behaviour 
describe('Users', ()=> {
    it('GET /users', () => {
        return request.get('users?access-token=${TOKEN}').then((res) => {
           expect(res.body.data).to.not.be.empty;     
        });
    });
})

/*
NEGATIVE test scenario that SHOULD FAIL
describe('Users', ()=> {
    it('GET /users', (done) => {
        request.get('users?access-token=${TOKEN}').end((err,res) => {
         expect(res.body.data).to.be.empty;   
         done();  
         }) 
    });
}) 
*/

//NEGATIVE test scenario using the "return" AND "then" keywords to handle asychronus behaviour 
describe('Users', ()=> {
    /*
    it('GET /users', () => {
        return request.get('users?access-token=${TOKEN}').then((res) => {
         expect(res.body.data).to.be.empty;     
         }); 
    });

    //This test passes when the "not.empty" assertion is used but the resource at that endpoint does not exist when accessed via the browser which is odd to say the least
    it('GET /users/:id', () => {
        return request.get('users/1?access-token=${TOKEN}').then((res) => {
         expect(res.body.data.id).to.be.eq(1);
         //equal('{"meta":null, "data":{"message":"Resource not found"}}');     
         });
    });
    */

    it('GET /users with query params', () => {
        const url = 'users?access-token=${TOKEN}&page=5&gender=female&status=active'

        return request.get(url).then((res) => {
         expect(res.body.data).to.not.be.empty;
         //equal('{"meta":null, "data":{"message":"Resource not found"}}');  

         /*
         To test for something more specific with our assertions, so we 
         want to test if the result of our request  is on page 5, if the gender
         is female, if the status is active and if all of the users are being returned. 
         To do this we shall implement a "forEach" loop. 
         We used a forEach loop because we are dealing with a set/list of results 
         and we need to cofirm that all the "members" of the list are accounted for.
         forEach is a javascript array method that is used to execute a function on each
         item in an array.
         A forEach loop will run a callback function for each item in a list/array; 
         then the loop stops. 
         */    

         res.body.data.forEach(data => {
             expect(data.gender).to.eq('Male');
             expect(data.status).to.eq('active');
             expect(data.page).to.eq('5');
         })
         });
    });
});

