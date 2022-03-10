export interface ILoginURLData {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  code_challenge_method: string;
  code_challenge: string;
  scope: string;
  state: string;
}
