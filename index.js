const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.set('vies engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));
const swaggerUI = require('swagger-ui-express');


const contenido = 'Este es el contenido de mi nuevo documento';
fs.writeFile('./backend/files/logs/nuevo_documento.txt', contenido, (error) =>{
  if (error) throw error;
  console.log('Archivo creado correctamente!!!!');
});


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Define la ruta al archivo JSON de definición de OpenAPI
const swaggerDocument = require('./BPC.json'); // Asegúrate de que el nombre del archivo sea correcto
// se necesita para que analice los req entrantes es decir las peticiones

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log(`Estoy en linea desde el puerto: ${PORT}`);
});

const router = require('./backend/routes/rutas');

app.use('/', router);

