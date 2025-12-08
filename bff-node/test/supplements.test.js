const request = require('supertest');
const express = require('express');
const supplementsRouter = require('../routes/supplements');

const app = express();
app.use('/api/supplements', supplementsRouter);

describe('GET /api/supplements', () => {
  test('returns list of supplements', async () => {
    const res = await request(app).get('/api/supplements');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
  });
});
