const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');

const PORT = 3000;

app.use(express.json());

// use routes
app.use('/', taskRoutes);

// default route
app.get('/', (req, res) => {
    res.send("MVC Task API Running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});