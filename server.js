const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);
});
