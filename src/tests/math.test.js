import request from 'supertest';
import app from '../../app';

describe('Math API Tests', () => {
  it('should return correct sum', async () => {
    const res = await request(app).post('/api/addition').send({ a: 3, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });

  it('should return factorial', async () => {
    const res = await request(app).get('/api/factorial/5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(120);
  });

  it('should return fibonacci sequence', async () => {
    const res = await request(app).get('/api/fibonacci/6');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toEqual([0, 1, 1, 2, 3, 5]);
  });

  it('should return square', async () => {
    const res = await request(app).get('/api/square/5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(25);
  });
});