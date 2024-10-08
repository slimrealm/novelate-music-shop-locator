import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from anywhere
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));
app.use(express.json());

app.use('/api/v1', apiRoutes);

app.listen(port, () => {
    console.log(`Novelate app listening at http://localhost:${port}`);
});