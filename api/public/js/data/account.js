// const { default: axios } = require("axios");

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function getAccountDetails(token) {
  let access_token = CryptoJS.AES.decrypt(token, "ChesSBS12345").toString(
    CryptoJS.enc.Utf8
  );
  axios
    .get("https://lichess.org/api/account", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((result) => {
      if (result.data) {
        let username;
        if (result.data.username.length > 12) {
          username = result.data.username.substring(0, 12);
          str = setCharAt(username, 11, ".");
          str2 = setCharAt(str, 10, ".");
          username = str2;
        } else {
          username = result.data.username;
        }
        console.log(username);
        document.getElementById("username").innerHTML = username;
        addUserDetails(result.data, access_token);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function addUserDetails(user, token) {
  document.getElementById(
    "username-display"
  ).innerHTML = `Welcome, ${user.username}!`;
  console.log(user.playTime.total);
  document.getElementById("createdAt").innerHTML = new Date(
    user.createdAt
  ).toLocaleDateString("en-US");
  document.getElementById("playingTime").innerHTML = `${secondsToDhms(
    user.playTime.total
  )}`;
  document.getElementById("completion").innerHTML = `${user.completionRate}%`;
  Object.keys(user.perfs).forEach((perf) => {
    if (perf !== "streak" && perf !== "storm" && perf !== "racer") {
      const table = document.getElementById("rating-table");
      const val = user.perfs[perf];
      const html = `        
    <tr>
          <td>${perf}</td>
          <td>${val.rating}</td>
          <td>${val.games}</td>
          <td>${val.prog}</td>
          <td>${val.rd}</td>
    </tr>`;
      const tr = document.createElement("tr");
      tr.innerHTML = html;
      table.appendChild(tr);
    }
  });
  axios
    .get("https://lichess.org/api/account/email", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      document.getElementById("email-display").innerHTML = result.data.email;
    })
    .catch((err) => {
      console.log(err);
    });
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours") : "";
  if (hDisplay == "") {
    return dDisplay;
  } else {
    return dDisplay + ", " + hDisplay;
  }
}
