// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FoodSchema = new Schema({

  title: {

    type: String,
   
  },

  sugar: {
    
  	type: String,
  
  }
});

// Create the Model
var Food = mongoose.model('Food', FoodSchema);

// Export it for use elsewhere
module.exports = Food;