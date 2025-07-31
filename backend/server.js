const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/products');
const productRoutes = require('./routes/departments');

app.use('/api/products', productRoutes);
app.use('/api/departments', departmentRoutes);

app.listen(5000, () =>
    console.log('Server running on port 5000')
);