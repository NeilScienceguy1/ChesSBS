import React from 'react'
import HomeCard from '../components/HomeCard';
import HomeNavbar from '../components/HomeNavbar';
import HomeCardData from '../data/HomeCardData';
import NavbarData from '../data/NavbarData';
import { IHomePageProps } from "../types/HomePageData";
import "../styles/index.css"
import "../styles/navbar.css";

const Home = ({title, subtitle, buttonText}: IHomePageProps) => {
    const data = HomeCardData
    const NavbarProps = NavbarData
    return (
      <div className="container">
        <HomeNavbar links={NavbarProps.links} logo={NavbarProps.logo} />
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button type="button">{buttonText}</button>
          </div>
          <div className="col">
            {data.map((data) => {
              return (
                <HomeCard
                  title={data.title}
                  description={data.description}
                  index={data.index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Home
