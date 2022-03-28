const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://prianany:9507710387Pr@@cluster0.jxpvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};