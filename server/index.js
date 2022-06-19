const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const dbConnect = require("./config/db");
require("dotenv").config();
const clientModel = require("./models/clientModel");

// Database Connection
dbConnect();

// app.get("/", async (req, res) => {
//   try {
//     const clients = await clientModel.find();
//     res.send(clients);
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.post("/", async (req, res) => {
//   try {
//     let client = new clientModel();
//     client.name = "moussa";
//     client.email = "issa@gmail.com";
//     client.phone = "99990-9999";
//     const newClient = await client.save();
// 	res.status(200).json(newClient)
//   } catch (error) {
//     console.log(error);
//   }
// });

// Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
