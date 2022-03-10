import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DashboardApp from "./pages/module/App";
import Leaderboard from "./pages/module/Leaderboard";
import TournamentPage from "./pages/module/TournamentPage";
import Game from "./pages/module/Game";
import Error404 from "./components/layouts/404";

import {
  RecoilRoot
} from 'recoil';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
// import Atom from './base/test';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/app" element={<DashboardApp />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/tournaments" element={<TournamentPage />} />
          <Route path="/dashboard/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oauth/callback" element={<LoginCallback />} />
          {/* <Route path="/atoms" element={<Atom />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
