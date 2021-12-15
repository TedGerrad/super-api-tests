//setup express server
const express = require('express');
//The "require" function is used to include/import the express module

const request = require('supertest');
//The "require" function is used to include/import the supertest library

const expect = require('chai').expect;
//The "require" function is used to include/import the chai assertions library 

//express server is preferred for its ease of use and the ability to  parse the app to the supertest command. Thus you don't have to worry about parsing in localhost
const app = express();
/*line 12 defines an instance of Express which handles the request and response 
from the server to the client. In this case we define a instance of express to 
our variable called "app"
*/

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" });
})

/*"app.get()" is a function that tells the server what to do when a
 get request at the given route is called. It has a callback function(req, res)
 that listens to the incoming request object(req) and responds accordingly using
 the response object(res).
  */

describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    /*
    line 31 contains the route for our given get request.
    Routing refers to how an server side application responds to
    a client request to a particular endpoint.
    The endpoint consists of a URI(a path such as "/" or "/books")
    and an HTTP method such as GET, POST, PUT, DELETE.
    Routes can be web-pages or REST-API endpoints.
    Each route has at least one handler function or a callback.
    This callback function determines what the response from the server
    for that particular route
    */
    it('Mocky OK Response', (done) => {
        request('https://run.mocky.io')
        .get('v3/491fb3f5-da7c-410e-8dae-0de5f5a26868')
        .expect(200, done);
    })
});

