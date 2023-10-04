const DataPrestamos = require('../data-access/prestamos.controller')



exports.guardarPrestamo = async (req, res) => {
    try {
      const datos = req.body;
      const nuevoPrestamo = await DataPrestamos.guardarPrestamo(datos);
      if (nuevoPrestamo.respuesta === false) {
        res.status(404).json({ error: 'No se registro el prestamo' });
      } else {
        res.status(200).json({ Prestamo: nuevoPrestamo });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };
  
  
  exports.buscarPrestamos = async (req, res) => {
    try {
      const busquedaPrestamos = await DataPrestamos.buscarPrestamos();
      if (busquedaPrestamos.respuesta === false) {
        res.status(404).json({ error: 'No se encontraron prestamos' });
      } else {
        res.status(200).json({ Prestamo: 'prestamos encontrados' + busquedaPrestamos });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

  exports.buscarPrestamoById = async (id)=>{
    try {
        const ById = req.body.idUsuario
        const busquedaPrestamo = await DataPrestamos.verPrestamoById(ById);
        if (busquedaPrestamo.respuesta === false) {
          res.status(404).json({ error: 'No se encontraro el prestamo' });
        } else {
          res.status(200).json({ Prestamo: 'prestamo encontrado' + busquedaPrestamo });
        }
      } catch (err) {
        res.status(500).json({ error: err });
      }
  }
  
  exports.eliminarPrestamo = async (req, res) => {
    try {
      const id = req.params.id;
      const eliminarPrestamo = await DataPrestamos.eliminarPrestamo(id);
      if (eliminarPrestamo.respuesta === false) {
        res.status(404).json({ error: 'No se logro eliminar el prestamo' });
      } else {
        res.status(200).json({Prestamo:  'Se elimino exitosamente' });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };
  
  exports.actualizarPrestamo = async (req, res) => {
    try {
      const id = {_id: req.params.id};
      const datos = req.body;
      if (id.respuesta === false) {
        res.status(401).json({error: 'no existe el ID'});
      } else {
        await DataPrestamos.actualizarPrestamo(id, datos);
        res.status(200).json({Prestamo: 'DATOS ACTUALIZADOS'});
      }
    } catch (err) {
      res.status(500).json({error: err});
    }
  };
  
  
  