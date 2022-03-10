import { useRecoilState } from "recoil"
import { userAtom } from "../base/UserAtom"
import useEncrypt from "../util/useEncrypt"

const useSaveUserToken = (token:string) => {
    const encryptedToken1 = useEncrypt(token, "", "crypto")
    const encryptedToken2 = useEncrypt(encryptedToken1, "", "manual")
    const [user, setUser] = useRecoilState(userAtom)
    setUser((data) => {
        return {
            ...data,
            token:encryptedToken2
        }
    })

    return user.token;
}

export default useSaveUserToken