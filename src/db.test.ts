import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    database: process.env.POSTGRES_DB,
});

async function testConnection(): Promise<void> {
    try {
        const client = await pool.connect();
        console.log('Successfully connected to PostgreSQL');
        client.release();
        await pool.end();
    } catch (error) {
        console.error('Failed to connect to PostgreSQL:', error);
        throw error;
    }
}

// Executar o teste de conexão ao iniciar o script
testConnection().catch((error) => {
    process.exit(1);
});