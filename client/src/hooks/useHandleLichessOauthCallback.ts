import axios, { AxiosResponse } from "axios";
import { CODE_VERIFIER } from "../util/OAuthDetails";
import useLichessQuery from "../util/useLichessQuery";
import useSaveUserToken from "./useSaveUserToken";

const HandleLichessOauthCallback = async (
  lichess_auth_code: string,
  client_id: string
) => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://lichess.org/api/token", {
        grant_type: "authorization_code",
        code: lichess_auth_code,
        code_verifier: CODE_VERIFIER,
        redirect_uri: "http://localhost:3000/oauth/callback",
        client_id: client_id,
      })
      .then((res) => resolve(res.data.access_token))

      .catch((err) => console.log(err));
  });
};

export default HandleLichessOauthCallback;

// const token = useSaveUserToken(response?.data.access_token)

// const userInfo = (await useLichessQuery(
//   "https://lichess.org/api/account",
//   "GET"
// )) as AxiosResponse<any, any>;
// console.log(userInfo.data);
