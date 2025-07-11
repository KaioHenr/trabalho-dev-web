import Express from 'express';
import cors from 'cors';
import { router } from './Routes/index.js';
import { frontendLink } from './Config/index.js';

const app = Express();
const corsOptions = {
    origin: frontendLink.link,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    credentials: true
};

app.use(Express.json());
app.use(cors(corsOptions));

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno no servidor' });
});


export default app;