const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller'); // es para poder usar lo que tiene empleado.controller.js donde estan los metodos
// que se van a utilizar en las rutas de empleados
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getUnicoEmpleado);
router.put('/:id', empleadoCtrl.editarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado);
module.exports = router; // exportamos el router para poder usarlo en otros archivos
