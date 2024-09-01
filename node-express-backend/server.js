const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from anywhere
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-novelate-api-key']
}));
app.use(express.json());

app.use('/api/v1', apiRoutes);

app.listen(port, () => {
    console.log(`Novelate app listening at http://localhost:${port}`);
});