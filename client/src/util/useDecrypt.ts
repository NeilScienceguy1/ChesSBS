import Crypto from "crypto-js"
import { decrypt } from "./crypto.manual"
const useDecrypt = (encrypted:string, salt:string, strategy:"crypto" | "manual") => {
    if (strategy === "crypto") return Crypto.AES.decrypt(encrypted, salt).toString(Crypto.enc.Utf8);
    if (strategy === "manual") return decrypt(salt, encrypted);
}

export default useDecrypt