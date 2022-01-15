const generateCodeVerifier = require("../util/generateCodeVerifier");
const generateCodeChallenge = require("../util/generateCodeChallenge");
const generateRandomString = require("../util/generateRandomString");
const CryptoJS = require("crypto-js");


const code_verifier = generateCodeVerifier();
const code_challenge = generateCodeChallenge(code_verifier);

module.exports = {
  CODE_VERIFIER: code_verifier,
  CODE_CHALLENGE: code_challenge,
  STATE: generateRandomString(10),
  SALT: CryptoJS.AES.encrypt(generateRandomString(128), "ChesSBS12345"),
};