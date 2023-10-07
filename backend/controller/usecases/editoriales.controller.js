const DataEditorial = require('../data-access/editoriales.controller');

exports.guardarEditoriaL = async (req, res) => {
  try {
    const datos = req.body;
    const nuevaEditorial = await DataEditorial.guardarEditorial(datos);
    if (nuevaEditorial.respuesta === false) {
      res.status(404).json({error: 'No se registro editorial'});
    } else {
      res.status(200).json({Editorial: nuevaEditorial});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};


exports.buscarEditorial = async (req, res) => {
  try {
    // const nombre = {nombreEditorial: req.body.nombreEditorial};
    const busquedaEditorial = await DataEditorial.buscarEditorial();
    if (busquedaEditorial.respuesta === false) {
      res.status(404).json({error: 'No se encontro la editorial'});
    } else {
      res.status(200).json({Editorial: 'Editorial econtrada', resultado: busquedaEditorial});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.eliminarEditorial = async (req, res) => {
  try {
    const id = req.params.id;
    const eliminarEditorial = await DataEditorial.eliminarEditorial(id);
    if (eliminarEditorial.respuesta === false) {
      res.status(404).json({error: 'No se logro eliminar la editorial'});
    } else {
      res.status(200).json({Editorial: 'Se elimino exitosamente'});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.actualizarEditorial = async (req, res) => {
  try {
    const id = {_id: req.params.id};
    const datos = req.body;
    if (id.respuesta === false) {
      res.status(401).json({error: 'no existe el ID'});
    } else {
      await DataEditorial.actualizarEditorial(id, datos);
      res.status(200).json({Editorial: 'DATOS ACTUALIZADOS'});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};


