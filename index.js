const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.set('vies engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// se necesita para que analice los req entrantes es decir las peticiones
app.listen(PORT, () => {
  console.log(`Estoy en linea desde el puerto: ${PORT}`);
});

const router = require('./backend/routes/rutas');

app.use('/', router);

