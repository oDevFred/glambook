import app from './app';

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});