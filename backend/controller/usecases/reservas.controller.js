const DataReserva = require('../data-access/reserva.controller');


exports.guardarReserva = async (req, res) => {
  try {
    const datos = req.body;
    const nuevaReserva = await DataReserva.guardarReserva(datos);
    if (nuevaReserva.respuesta === false) {
      res.status(404).json({error: 'No se registro la Reserva'});
    } else {
      res.status(200).json({Reserva: nuevaReserva});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};


exports.buscarReservas = async (req, res) => {
  try {
    const busquedaReservas = await DataReserva.buscarReservas();
    if (busquedaReservas.respuesta === false) {
      res.status(404).json({error: 'No se encontraron Reservas'});
    } else {
      res.status(200).json({Reserva: busquedaReservas});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.buscarReservaById = async (req, res) => {
  try {
    const ById = req.body.idUsuario;
    const busquedaReservaById = await DataReserva.verReservaById(ById);
    if (busquedaReservaById.respuesta === false) {
      res.status(404).json({error: 'No se encontro la Reserva'});
    } else {
      res.status(200).json({Reserva: busquedaReservaById});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.eliminarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const eliminarReserva = await DataReserva.eliminarReserva(id);
    if (eliminarReserva.respuesta === false) {
      res.status(404).json({error: 'No se logro eliminar la Reserva'});
    } else {
      res.status(200).json({Reserva: 'Se elimino exitosamente'});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const id = {_id: req.params.id};
    const datos = req.body;
    if (id.respuesta === false) {
      res.status(401).json({error: 'no existe el ID'});
    } else {
      await DataReserva.actualizarReserva(id, datos);
      res.status(200).json({Reserva: 'DATOS ACTUALIZADOS'});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};


