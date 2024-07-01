const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')

const docenteRouter = require('./src/routes/docente.js');
const cursoRouter = require('./src/routes/curso.js');
const alumnoRouter = require('./src/routes/alumno.js');
const matriculaRouter = require('./src/routes/matricula.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
})

app.use('/docente', docenteRouter);
app.use('/curso', cursoRouter);
app.use('/alumno', alumnoRouter);
app.use('/matricula', matriculaRouter);

module.exports = app
