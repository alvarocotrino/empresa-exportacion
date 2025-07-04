const mongoose = require('mongoose');

const URI = 'mongodb+srv://alvarocotrino:duM8cerCimoUddCF@cluster0.fjpge0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI, {
   
    tlsAllowInvalidCertificates: true // Mantén esta si la necesitas para tu entorno específico
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error('Error de conexión a DB:', err));

module.exports = mongoose;