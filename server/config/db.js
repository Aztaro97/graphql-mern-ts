const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose.connect(
    "mongodb://127.0.0.1:27017/graphql_db"
  );

  console.log(
    `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
