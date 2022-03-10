import axios from "axios"
import { useRecoilState } from "recoil";
import { userAtom } from "../base/UserAtom";

const useLichessQuery = async (
    URL: string,
    requestType: "POST" | "GET",
    requestBody?: any | null,
    isNDJSON: boolean = false
) => {
    const [user, setUser] = useRecoilState(userAtom)
    if (isNDJSON) {
        const stream = fetch(URL, {
            headers: {
                Accept: "application/x-ndjson",
                Authorization: "Bearer " + user.token,
            },
        });
        return stream
    } else {
        if (requestType === "POST") {
            const response = await axios.post(URL, requestBody ? requestBody : {}, {
                headers: {
                    Authorization:"Bearer " + user.token
                }
            });
            return response
        } else if (requestType === "GET") {
            const response = await axios.get(URL, {
                headers: {
                    Authorization:"Bearer " + user.token
                }
            });
            return response
        } else {
            return null
        }
    }
};

export default useLichessQuery

