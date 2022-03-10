import CryptoJS from "crypto-js"

export function generateRandomString(length:number) {
    var text = "";
    var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function generateCodeVerifier() {
    var code_verifier = generateRandomString(128);
    return code_verifier;
}

function generateCodeChallenge(code_verifier:string) {
    return base64URL(CryptoJS.SHA256(code_verifier));
}

function base64URL(string:any) {
    return string
        .toString(CryptoJS.enc.Base64)
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

export const CODE_VERIFIER = generateCodeVerifier();
export const CODE_CHALLENGE = generateCodeChallenge(CODE_VERIFIER);