const express = require('express');
const app = express();

const port = 3000;


// MEU SERVIDOR //
app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
});