const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
        mongoose.connection.once('open', async () => {
            try {
              await mongoose.connection.db.collection('users').dropIndex('username_1');
              console.log("Dropped faulty index: username_1");
            } catch (err) {
              console.log("No faulty index found or already removed.");
            }
          });
          
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
