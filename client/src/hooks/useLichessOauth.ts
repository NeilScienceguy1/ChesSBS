import { ILoginURLData } from "../types/LoginURLData";
import { useNavigate } from "react-router-dom";

const useLichessOAuth = (data: ILoginURLData) => {
  const navigate = useNavigate();

  const {
    response_type,
    client_id,
    redirect_uri,
    code_challenge_method,
    code_challenge,
    scope,
    state,
  } = data;

  window.location.href = `https://lichess.org/oauth?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code_challenge_method=${code_challenge_method}&code_challenge=${code_challenge}&scope=${scope}&state=${state}`;
};

export default useLichessOAuth;
