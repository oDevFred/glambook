import request from 'supertest';
import app from '../../src/app';
import { Server } from 'http';

describe('Health Check', () => {
    let server: Server;

    beforeAll((done) => {
        server = app.listen(0, () => {
        console.log('Test server running');
        done();
        });
    });

    afterAll((done) => {
        server.close(done);
    });

    test('should return 200 and status OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'OK' });
    });
});