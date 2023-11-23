const mongoose = require('mongoose');

const p1Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Page1 = mongoose.model('Page1', p1Schema);

module.exports = Page1;
