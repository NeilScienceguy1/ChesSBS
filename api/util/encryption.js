const CryptoJS = require("crypto-js");

const cipher = (text) => {
  return CryptoJS.AES.encrypt(text, "ChesSBS12345");
};

const decipher = (text) => {
  return CryptoJS.AES.decrypt(text, "ChesSBS12345").toString(CryptoJS.enc.Utf8);
};

module.exports = { cipher, decipher };
