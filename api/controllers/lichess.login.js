const {
  CODE_CHALLENGE,
  CODE_VERIFIER,
  STATE,
  SALT,
} = require("../config/constants");
const axios = require("axios").default;
const { cipher } = require("../util/encryption");
const checkChesSBS = require("../util/checkChesSBS");

const response_type = "code";
const client_id = "ChesSBS12345";
const redirect_uri = "http://localhost:2022/lichess/login/callback";
const code_challenge_method = "S256";
const code_challenge = CODE_CHALLENGE;
const state = STATE;
const scope = "preference:read preference:write email:read tournament:write puzzle:read team:read team:write follow:write msg:write study:read study:write";

const lichess_login = (req, res) => {
  res.redirect(
    `https://lichess.org/oauth?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code_challenge_method=${code_challenge_method}&code_challenge=${code_challenge}&scope=${scope}&state=${state}`
  );
};

const handleLoginCallback = (req, res) => {
  const code = req.query.code;
  axios
    .post(
      "https://lichess.org/api/token",
      {
        grant_type: "authorization_code",
        code: code,
        code_verifier: CODE_VERIFIER,
        redirect_uri: redirect_uri,
        client_id: client_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      if (result.data) {
        req.session.lichess_auth_token = cipher(
          result.data.access_token
        ).toString();
        checkChesSBS(req.session.lichess_auth_token).then((isPartOfChesSBS) => {
          if (isPartOfChesSBS[0] === true) {
            res.redirect("/dashboard/app?login_success=true");
          } else {
            res.json({
              error: "You are not part of ChesSBS",
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err.response.data.error_description);
    });
};

module.exports = {
  lichess_login,
  handleLoginCallback,
};
