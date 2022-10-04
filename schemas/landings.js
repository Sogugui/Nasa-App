const mongoose = require('mongoose');


const landingsSchema = {
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    id: { 
        type: Number, 
        required: true,
        unique: true 
    },
    nametype: { 
        type: String, 
        required: true 
    },
    recclass: { 
        type: String, 
        required: true 
    },
    mass:{
        type: Number,
        required: true       
    },
    
    fall:{
        type: String,
        required: true       
    },
    year:{
        type: String,
        required: true 
    },
    reclat:{
        type:Number
    },
    reclong:{
        type: Number
    },
    geolocation:{
        type: Object,
        latitude:{
            type:Number,
            required: true
        },
        longitude:{
            type:Number,
            required: true
        }
    }


};
// Crear el esquema
const createlandingsSchema = mongoose.Schema(landingsSchema);
// Crear el modelo --> Colección
const Landing = mongoose.model('landings', createlandingsSchema);

module.exports = Landing;