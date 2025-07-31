import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

export default app;