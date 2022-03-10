import React from "react";
import useLichessOAuth from "../hooks/useLichessOauth";
import { CODE_CHALLENGE, generateRandomString } from "../util/OAuthDetails";

const Login = () => {
  useLichessOAuth({
    response_type: "code",
    client_id: "ChesSBS12345",
    redirect_uri: "http://localhost:3000/oauth/callback",
    code_challenge_method: "S256",
    code_challenge: CODE_CHALLENGE,
    scope:
      "preference:read preference:write email:read tournament:write puzzle:read team:read team:write follow:write msg:write study:read study:write",
    state: generateRandomString(10),
  });
  return <div>Login</div>;
};

export default Login;
