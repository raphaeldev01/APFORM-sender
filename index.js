const express = require('express');
const app = express();
const cors = require('cors');

// Impoting the routes
const sendRouter = require('./routers/send.js');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json())

// Routes
app.use('/send', sendRouter);

app.get("/", (req, res) => {
    res.send("ok")
})

app.listen(5000, () => {    
    console.log('Servidor rodando na porta 5000');
});