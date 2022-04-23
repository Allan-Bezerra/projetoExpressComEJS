const express = require('express');
const app = express();

const homeController = require('./controllers/mainController')

const rotasMain = require('./routers/rotasmain')

const port = 3000;

app.use('/', rotasMain);


// MEU SERVIDOR //
app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
});