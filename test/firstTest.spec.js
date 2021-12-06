//setup express server
const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;
//express server is preferred for its ease of use and the ability to  parse the app to the supertest command. Thus you don't have to worry about parsing in localhost
const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" });
})

describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    it('Mocky OK Response', (done) => {
        request('https://run.mocky.io')
        .get('v3/491fb3f5-da7c-410e-8dae-0de5f5a26868')
        .expect(200, done);
    })
});

