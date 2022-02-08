import React from 'react';
import Sidebar from "../../components/Sidebar";
import ChessboardComponent from "../../components/Chessboard";

const Game = () => {
  return (
      <div className="">
          <Sidebar/>
          <section className="home-section">
              <h1 className="text-center text-2xl text-indigo-700 pb-10 pt-10 sm:text-5xl">LIVE GAME</h1>
              <h1 className="text-center text-1xl text-indigo-700 pb-3 pt-2 sm:text-3xl">NeilChadGeek (2113) VS PRCHAD1901007 (2100)</h1>
              <ChessboardComponent/>
          </section>
      </div>
  );
};

export default Game;
