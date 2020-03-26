const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors()); // Apenas isso permite que toda aplicaçao de front-end acesse esse back-end
                 // Se especificar um "origin", é possível permitir apenas ele - hospedagem do meu front-end

app.use(express.json()); 
app.use(routes);


app.listen(3333);