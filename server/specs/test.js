import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';

import modelTests from './models/test';
import productTests from './products.test';
import salesTests from './sales.test';

const request = supertest(app);

// Run Tests for the Model Class and Data Model Classes
modelTests();

describe('All test cases for Store Manager API', () => {
  describe('test case for loading application home page', () => {
    it('Should load application home page', (done) => {
      request.get('/')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).deep.equal({
            message: 'Welcome to Store Manager API'
          });
          if (err) done(err);
          done();
        });
    });
    it('Should load API Home', (done) => {
      request.get('/api/v1')
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('Store Manger API V1');
          if (err) done(err);
          done();
        });
    });
  });

  productTests();
  salesTests();
});
