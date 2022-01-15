const base64URL = require("./base64URL")
const CryptoJS = require("crypto-js")


function generateCodeChallenge(code_verifier) {
  return (code_challenge = base64URL(CryptoJS.SHA256(code_verifier)));
}

module.exports = generateCodeChallenge