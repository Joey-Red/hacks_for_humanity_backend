mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isCaregiver: { type: Boolean, required: true },
    isPatient: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", User);
