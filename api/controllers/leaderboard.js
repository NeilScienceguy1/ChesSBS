const { default: fetch } = require("node-fetch");
const readStream = require("../util/readNdjsonStream");

const getLeaderboard = (timeControl) => {
  return new Promise((resolve, reject) => {
    getChesSBSLeaderboard(timeControl)
      .then((result) => {
        // console.log("completed");
        resolve(result);
      })
      .catch((err) => {
        return err;
      });
  });
};

const getChesSBSLeaderboard = (timeControl) => {
  return new Promise((resolve, reject) => {
    const stream = fetch("https://lichess.org/api/team/club-chessbs/users", {
      headers: {
        Accept: "application/x-ndjson",
      },
    });

    let users = [];

    const onMessage = (obj) => {
      users.push(obj);
    };

    const onComplete = () => {
      if (timeControl === "bullet") {
        users
          .sort((a, b) => {
            return a.perfs.bullet.rating - b.perfs.bullet.rating;
          })
          .splice(0, 29);
        let users2 = [];
        users.forEach((user) => {
          users2.push({
            rating: user.perfs.bullet.rating,
            username: user.username,
          });
        });
        users2.reverse();
        resolve(users2);
      }
      if (timeControl === "blitz") {
        users
          .sort((a, b) => {
            return a.perfs.blitz.rating - b.perfs.blitz.rating;
          })
          .splice(0, 29);
        let users2 = [];
        users.forEach((user) => {
          users2.push({
            rating: user.perfs.blitz.rating,
            username: user.username,
          });
        });
        users2.reverse();
        resolve(users2);
      }
      if (timeControl === "rapid") {
        users
          .sort((a, b) => {
            return a.perfs.rapid.rating - b.perfs.rapid.rating;
          })
          .splice(0, 29);
        let users2 = [];
        users.forEach((user) => {
          users2.push({
            rating: user.perfs.rapid.rating,
            username: user.username,
          });
        });
        users2.reverse();
        resolve(users2);
      }
    };

    stream
      .then(readStream(onMessage))
      .then(onComplete)
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
};

module.exports = getLeaderboard;
