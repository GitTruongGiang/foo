const mongoose = require("mongoose");
const { Schema } = mongoose;

const booSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    referenceTo: { type: mongoose.SchemaTypes.ObjectId, ref: "Foo" },
  },
  { timestamps: true }
);

const boo = mongoose.model("boo", booSchema);

module.exports = boo;
