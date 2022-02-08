import React from "react";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import DashboardComponent from "../../components/DashboardComponent";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const DashboardApp = () => {
  return (
    <div className="">
      <Sidebar />
      <section className="home-section">
        <DashboardComponent />

        <div className="bg-gray-800">
          <h1 className="text-center text-4xl text-indigo-600 pt-10">YOUR STATS</h1>
          <Stats />
          <Stats />
        </div>
        <div className="p-10">
          <h1 className="text-3xl text-center p-2">YOUR RATINGS</h1>
          <Table />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default DashboardApp;
