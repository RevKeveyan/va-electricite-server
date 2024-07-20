require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const accountRouter = require('./routes/accountRouter');
const authRouter = require('./routes/authRouter');
const skillRouter = require('./routes/skillRouter');
const tariffRouter = require('./routes/tariffRouter');
const messageRouter = require("./routes/messageRouter");
const userRouter = require("./routes/userRouter");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors({ origin: "*" }));

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.use(authRouter);
app.use(accountRouter);
app.use(skillRouter);
app.use(tariffRouter);
app.use(userRouter);
app.use(messageRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`${PORT} Server started`);
});
