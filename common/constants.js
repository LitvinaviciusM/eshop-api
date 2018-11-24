const API_PORT = 3001;

// Mongo DB client credentials
const DB_USER = 'autoparts-shop-db-client';
const DB_PASSWORD = 'fec6DPWUJHrQLt4';
const DB_NAME = 'autoparts-shop';
const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@ds263740.mlab.com:63740/${DB_NAME}`;

// 'Gordon' FTP client credentials
const GORDON_FTP_CLIENT_IP = '192.168.5.231';
const GORDON_FTP_CLIENT_USERNAME = '0001238';
const GORDON_FTP_CLIENT_PASSWORD = 'ltarturas';

module.exports = Object.freeze({
  API_PORT,
  DB_URL,
  DB_NAME,
  GORDON_FTP_CLIENT_IP,
  GORDON_FTP_CLIENT_USERNAME,
  GORDON_FTP_CLIENT_PASSWORD,
});
