const mongoose = require("mongoose");
require('dotenv').config()

const { USERNAME, PASSWORD, CLUSTER, DATABASE } = process.env;

const connection = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}/${DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
