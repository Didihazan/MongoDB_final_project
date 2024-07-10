const express = require('express');
const connectDB = require('./config/db');
const phoneRoutes = require('./routes/phones');
const companyRoutes = require('./routes/companies');

const app = express();

// התחברות ל-MongoDB
connectDB();

// שימוש בנתיבים
app.use('/phones', phoneRoutes);
app.use('/companies', companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
