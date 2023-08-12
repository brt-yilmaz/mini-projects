const mongoose = require("mongoose");
require("dotenv").config();

const dbName = "mongooseExample"; // default is test
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myatlasclusteredu.nfux5tm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}
