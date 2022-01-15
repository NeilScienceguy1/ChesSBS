const checkToken = (token) => {
    if (!token && localStorage.getItem("lichess-token") === "true") {
        localStorage.clear();
        window.location.href = "/lichess/login"
    }
}