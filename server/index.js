const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const dbConnect = require("./config/db");
require("dotenv").config();
const clientModel = require("./models/clientModel");
const { buildSchema } = require("graphql");

// Database Connection
dbConnect();

// Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    // graphiql: process.env.NODE_ENV === 'development' ? true : false,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
