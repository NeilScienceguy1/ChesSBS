let arrow = document.querySelectorAll(".arrow");
let profileIcon = document.getElementById("profile-icon");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bxs-chess");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (
    !localStorage.getItem("lichess-token") &&
    sidebar.classList.contains("close") == false
  ) {
    document.getElementById("profile-section").classList.add("none");
    showLoginButton();
    profileIcon.classList.remove("bx-log-out");
    profileIcon.classList.add("bx-lock-alt");
  } else {
    document.getElementById("profile-section").classList.remove("none");
  }
  if (sidebar.classList.contains("close") == true) {
    document.getElementById("login-button").classList.add("none");
  }
});
function showLoginButton() {
  document.getElementById("login-button").classList.remove("none");
}
