var app = require('..');
var request = require('supertest');

describe('Home page', function () {
    describe('GET /', function () {
        it('should response 200 OK', function (done) {
            request(app)
                .get('/')
                .expect(200, done);
        });
    });
});