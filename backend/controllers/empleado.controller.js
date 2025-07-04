const Empleado = require('../models/empleado.models');
const empleadoCtrl = {};

// DEFINO LOS METODOS
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}; 

// crear empleados
empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado guardado satisfactoriamente',
    });
};
// consultar un solo empleado

empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
}
// actualizar un empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({
        status: 'Empleado actualizado satisfactoriamente' });
}
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    const { id } = req.params;
    await Empleado.findByIdAndDelete(id);
    res.json({
        status: 'Empleado eliminado satisfactoriamente'
    });
};
module.exports = empleadoCtrl;