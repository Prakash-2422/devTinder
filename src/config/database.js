const mongoose = require("mongoose");
const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://prakash2404:3_n8DwYsJuA9DmQ@prakash.dejm3ru.mongodb.net/devTinder"
    );
};

module.exports = connectDB;
