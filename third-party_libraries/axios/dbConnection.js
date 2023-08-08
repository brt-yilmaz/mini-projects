const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myatlasclusteredu.nfux5tm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    return client.db(); // Return the database connection
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

module.exports = connectDB;
