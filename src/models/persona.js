const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
	nombre: {type: String, required: true},
    apellido: {type: String, required: true},
	nacimiento: {type: String, required: true},
	cedula: {type: String, unique:true, required: true},
	telefono: {type: String, unique:true, required: true},
	urlimage: {type: String, required:false},
	
	usuario : { type: Schema.Types.ObjectId, ref: 'usuario' , unique:true, required:true}
});


module.exports = mongoose.model('persona', personaSchema);