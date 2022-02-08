import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DashboardApp from "./pages/module/App";
import Leaderboard from "./pages/module/Leaderboard";
import TournamentPage from "./pages/module/TournamentPage";
import Game from "./pages/module/Game";
import Error404 from "./components/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/app" element={<DashboardApp />} />
        <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
        <Route path="/dashboard/tournaments" element={<TournamentPage/>} />
        <Route path="/dashboard/game" element={<Game/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
