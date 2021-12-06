const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

/*we have created a simple app that should return courses and id when certain parameters are parsed.
Route parameters are named URL segments that are used to capture the values specified at their position in
the URL. The captured values are populated in the req.params object with the
name of the route parameter specified in the path as their respective keys.

Route path: /users/userId/books/:bookId
Request URL: htpp://localhost:3000/users/34/books/8989
req.params: {"userId": "34", "bookId": "8989"}

To define routes with route parameters, simply specify the route parameters
in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})
*/
describe('get requests', () => {
    //this test is to test the route parameter to see if the value returned is as expected
    it('get course id', () => {
        request(app)
        .get('/course/1')
        .end((err, res) => {
            expect(res.body.id).to.be.equal('1');
        });
    });
    //this test is to test the query param which usually appears after the question mark
    //localhost/courses?name=mocha
    it('get query param name', (done) => {
        request(app)
        .get('/course')
        .query({ 'name' : 'mocha' })
        .expect(200, { id: '1', name: 'mocha' }, done);
    })
});