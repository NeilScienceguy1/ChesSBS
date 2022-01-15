const { default: axios } = require("axios");
const { decipher } = require("./encryption");

const checkChesSBS = (token) => {
  return new Promise((resolve, reject) => {
    const access_token = decipher(token);

    axios
      .get("https://lichess.org/api/account", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((result) => {
        if (result.data.username) {
          axios
            .get("https://lichess.org/api/team/of/" + result.data.username)
            .then((res) => {
              let isPartOfClub = [false];
              if (res.data.length > 0) {
                res.data.forEach((team) => {
                  if (team.name === "Club ChesSBS") {
                    isPartOfClub[0] = true;
                  }
                });
              }
              resolve(isPartOfClub)
            });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = checkChesSBS;
