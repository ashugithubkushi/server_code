const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleName: String,
    vehicleNum: String,
    contactNum: String,
    count: Number,
    vehicleImage: String
});


const VehicleModel = mongoose.model('Vehicle', vehicleSchema);

module.exports = VehicleModel;