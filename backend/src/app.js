import Express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';

const app = Express();

app.use(Express.json());
app.use(cors());

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno no servidor' });
});


export default app;