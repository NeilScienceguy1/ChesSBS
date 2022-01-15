const generateRandomString = require("./generateRandomString")

function generateCodeVerifier() {
  var code_verifier = generateRandomString(128);
  return code_verifier;
}

module.exports = generateCodeVerifier