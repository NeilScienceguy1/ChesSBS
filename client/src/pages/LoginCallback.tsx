import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HandleLichessOauthCallback from "../hooks/useHandleLichessOauthCallback";

const LoginCallback = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code");
    useEffect(() => {
        async function fetchData() {
            const token = await HandleLichessOauthCallback(code ? code :"", "ChesSBS12345");
            return token
        }
        console.log(fetchData())
    }, []);
    return <div>LoginCallback</div>;
};

export default LoginCallback;
