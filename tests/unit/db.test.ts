import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

describe('PostgreSQL Connection', () => {
    let pool: Pool;

    beforeAll(() => {
        const host = process.env.POSTGRES_HOST === 'db' ? 'localhost' : process.env.POSTGRES_HOST;
        console.log('Variáveis de ambiente:', {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host,
        port: process.env.POSTGRES_PORT || '5432',
        database: process.env.POSTGRES_DB,
        });

        pool = new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host,
        port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
        database: process.env.POSTGRES_DB,
        });
    });

    afterAll(async () => {
        await pool.end();
    });

    test('deve conectar ao banco de dados PostgreSQL', async () => {
        try {
        const client = await pool.connect();
        expect(client).toBeDefined();
        client.release();
        } catch (error) {
        console.error('Erro de conexão:', error);
        throw error;
        }
    });
});