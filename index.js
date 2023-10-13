const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.set('vies engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Biblioteca Publica Campiñas',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:7777',
      },
    ],
  },
  apis: [`${__dirname}/backend/routes/*.js`],
};





app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// se necesita para que analice los req entrantes es decir las peticiones
app.listen(PORT, () => {
  console.log(`Estoy en linea desde el puerto: ${PORT}`);
});

const router = require('./backend/routes/rutas');

app.use('/', router);

