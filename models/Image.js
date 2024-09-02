const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    image: String,
   
},
{
    collection: 'Image',
}
);


const ImageModel = mongoose.model('Slots', ImageSchema);

module.exports = ImageModel;

