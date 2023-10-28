const dataSocio = require('../data-access/usuarios.controller');

exports.guardar = async (req, res) => {
  try {
    const datos = req.body;
    const nuevoSocio = await dataSocio.guardar(datos);
    if (nuevoSocio.respuesta === false) {
      res.status(500).json({socio: 'No se registro el socio'});
    } else {
      res.status(200).json({socio: 'Socio guardado con éxito', nuevoSocio});
    }
  } catch (error) {
    res.status(500).json({error: 'Error al procesar la solicitud'});
  }
};

exports.buscar = async (req, res) => {
  try {
    // const nombre = {nombre: req.body.nombre};
    const busquedaSocio = await dataSocio.buscar({}, {},
    );
    if (!busquedaSocio) {
      res.status(404).json({error: 'No se encontro el socio'});
    } else {
      res.status(200).json(busquedaSocio);
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.eliminar = async (req, res) => {
  try {
    const id = {_id: req.params.id};
    const eliminarSocio = await dataSocio.eliminar(id);
    if (eliminarSocio.respuesta === false) {
      res.status(404).json({socio: 'No se logro eliminar el socio'});
    } else {
      res.status(200).json({socio: 'se elimino con exito ' + eliminarSocio.nombre});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.actualizar = async (req, res) => {
  try {
    const id = {_id: req.params.id};
    const actualizar = req.body;
    await dataSocio.actualizar(id, actualizar);
    if (id.respuesta === false) {
      res.status(404).json({socio: 'No se logro actualizar'});
    } else {
      res.status(200).json({socio: 'se actualizo con exito'});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.index = (req, res) => {
  res.render('index.ejs');
};

exports.formularioEditoriales = (req, res) =>{
  res.render('formularioEditoriales.ejs');
};

exports.formularioUsuarios = (req, res)=>{
  res.render('formularioUsuarios.ejs');
};

exports.formularioPrestamos = (req, res)=>{
  res.render('formularioPrestamos.ejs');
};

exports.formularioReservas = (req, res)=>{
  res.render('formularioReservas.ejs');
};


