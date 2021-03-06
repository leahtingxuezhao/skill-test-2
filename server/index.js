require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
app.get("/api/product/:id", ctrl.getProduct);
app.get("/api/product", ctrl.getAllProducts);
app.post("/api/product", ctrl.createProduct);
app.put("/api/product/:id", ctrl.updateProduct);
app.delete("/api/product/:id", ctrl.deleteProduct);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
  app.listen(SERVER_PORT, () =>
    console.log(`Server running on ${SERVER_PORT}`)
  );
});
