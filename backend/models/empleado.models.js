const mongoose = require('mongoose');
const { Schema } = mongoose;

// esquema  json que se va a utlizar en la base de datos

const empleadoSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
});

    module.exports = mongoose.model('Empleado', empleadoSchema);// Exportamos el modelo para poder usarlo en otros archivos
// El modelo se llama Empleado y se basa en el esquema empleadoSchema que hemos definido arriba