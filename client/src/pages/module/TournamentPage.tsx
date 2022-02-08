import React from 'react';
import Sidebar from '../../components/Sidebar';
import Tournaments from '../../components/Tournaments';

const TournamentPage = () => {
  return (
      <div className="">
          <Sidebar/>
          <section className="home-section">
                <h1 className="text-center text-2xl text-indigo-700 pb-10 pt-10 sm:text-5xl">ARENA TOURNAMENTS</h1>
                <Tournaments/>
          </section>
      </div>
  );
};

export default TournamentPage;
