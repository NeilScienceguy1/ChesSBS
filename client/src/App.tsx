import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import HomeData from "./data/HomeData";

const App = () => {
  const HomePageProps = HomeData
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title={HomePageProps.title}
              subtitle={HomePageProps.subtitle}
              buttonText={HomePageProps.buttonText}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
