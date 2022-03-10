import React from 'react';
import Leaderboard from "../../components/Leaderboard";
import Sidebar from "../../components/layouts/Sidebar";

const LeaderboardPage = () => {
  return (
    <div className="">
      <Sidebar />
      <section className="home-section p-10">
        <h1 className="text-center text-2xl text-indigo-700 pb-10 pt-10 sm:text-5xl">
          LEADERBOARD
        </h1>
        <Leaderboard />
      </section>
    </div>
  );
};

export default LeaderboardPage;
