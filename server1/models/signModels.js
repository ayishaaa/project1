const mongoose = require('mongoose');

const signSchema = mongoose.Schema(
  {
    userId1 : {type: String, required: true, unique:true,},
    Name1: {type: String, required: true,},
    Place1: {type: String, required: true,},
    Mobile1: {type: String, required: true,},
    Age1: {type: String, required: true,},
    Gender1: {type: String, required: true,},
  },
  {
    timestamps: true,
  }
);

const modelSign = mongoose.model('Sign', signSchema);

module.exports = modelSign;
