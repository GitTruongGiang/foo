const mongoose = require("mongoose");
const { Schema } = mongoose;
const fooSchema = new Schema(
  {
    name: { type: String, required: true },
    flag: { type: Boolean, enum: [true, false], required: true },
  },
  { timestamps: true }
);
const foo = mongoose.model("foo", fooSchema);

module.exports = foo;
