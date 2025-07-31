import request from 'supertest';
import app from '../../src/app';

describe('Health Check', () => {
    test('should return 200 and status OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'OK' });
    });
});