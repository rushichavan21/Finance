const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


userSchema.virtual("confirmPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Passwords do not match");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;