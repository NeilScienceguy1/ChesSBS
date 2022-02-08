import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e: any) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
  }, []);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`sidebar ${open ? "" : "close"}`}>
      <div className="logo-details">
        <i className="bx bxs-chess" onClick={(e) => setOpen(!open)}></i>
        <span className="logo_name">ChesSBS</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="bx bx-user-circle"></i>
            <span className="link_name">Account</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Account
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bxs-trophy"></i>
              <span className="link_name">Leaderboards</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Leaderboards
              </a>
            </li>
            <li>
              <a href="/dashboard/leaderboard/bullet">Bullet</a>
            </li>
            <li>
              <a href="/dashboard/leaderboard/blitz">Blitz</a>
            </li>
            <li>
              <a href="/dashboard/leaderboard/rapid">Rapid</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bxs-id-card"></i>
              <span className="link_name">Tournaments</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Tournaments
              </a>
            </li>
            <li>
              <a href="#">Arena</a>
            </li>
            <li>
              <a href="#">Swiss</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-data"></i>
            <span className="link_name">Analysis</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Analysis
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-tv"></i>
            <span className="link_name">Live Streams</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Live Streams
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bxs-extension"></i>
              <span className="link_name">Puzzles</span>
            </a>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Puzzles
              </a>
            </li>
            <li>
              <a href="#">Puzzle Storm</a>
            </li>
            <li>
              <a href="#">Puzzle Dashboard</a>
            </li>
            <li>
              <a href="#">Daily Puzzle</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-podcast"></i>
            <span className="link_name">Broadcasts</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Broadcasts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-search-alt-2"></i>
            <span className="link_name">Search</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Search
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-info-circle"></i>
            <span className="link_name">Club Info</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Club Info
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content">
              {/* <img
                src="data:image/jpeg;base64,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"
                alt="profileImg"
              /> */}
            </div>
            {/* <div className="login-button none" id="login-button">
              <button className="button-3" role="button">
                Login
              </button>
            </div> */}
            <div className="name-job none" id="profile-section">
              <div className="profile_name" id="username">
                NeilChessGee
              </div>
              <div className="job">Chess Player</div>
            </div>

            <i className="bx bx-log-out" id="profile-icon"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
