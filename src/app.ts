import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;