const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, requried: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  create: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
