const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ftpsClient = require('ssh2-sftp-client');
const constants = require('./common/constants');

const {
  API_PORT,
  DB_NAME,
  DB_URL,
  GORDON_FTP_CLIENT_IP,
  GORDON_FTP_CLIENT_USERNAME,
  GORDON_FTP_CLIENT_PASSWORD,
} = constants;

const app = express();
const router = express.Router();
const ftps = new ftpsClient();

ftps.connect({
  host: GORDON_FTP_CLIENT_IP,
  username: GORDON_FTP_CLIENT_USERNAME,
  password: GORDON_FTP_CLIENT_PASSWORD,
  port: 22,
}).then(serverMsg => console.log('FTP server message: ', serverMsg));


mongoose.connect(DB_URL);
const db = mongoose.connection;

db.once("open", () => console.log(`Connection to ${DB_NAME} DB successful`));
db.once("error", () => console.error(`Connection to ${DB_NAME} DB failed`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
