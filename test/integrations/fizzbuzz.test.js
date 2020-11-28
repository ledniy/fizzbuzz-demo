const request = require('supertest');
const app = require('../../src/app');

describe('integration', () => {
  describe('/fizzbuzz', () => {
    it('POST: responds with json', function(done) {
      request(app)
        .post('/fizzbuzz')
        .send({
          count: 15
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('POST: responds with validation error', function(done) {
      request(app)
        .post('/fizzbuzz')
        .send({
          asd: 15
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
    it('GET: responds with not implemented', function(done) {
      request(app)
        .get('/fizzbuzz')
        .expect(405, done);
    });
  });

  describe('/asd', () => {
    it('GET: responds with not found', function(done) {
      request(app)
        .get('/asd')
        .expect(404, done);
    });
  });
});
