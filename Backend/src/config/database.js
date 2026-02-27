const mongoose = require("mongoose")

const connectedToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error connected to DB", error);
    }
};




module.exports = connectedToDb