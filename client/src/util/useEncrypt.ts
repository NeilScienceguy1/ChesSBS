import Crypto from "crypto-js"
import { encrypt } from "./crypto.manual"
const useEncrypt = (data:string, salt:string, strategy:"crypto" | "manual") => {
    if (strategy === "crypto") return Crypto.AES.encrypt(data, salt).toString()
    if (strategy === "manual") return encrypt(salt, data)
    return data
}

export default useEncrypt