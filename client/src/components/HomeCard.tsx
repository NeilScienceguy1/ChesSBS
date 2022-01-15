import React from "react";
import { IHomeCardProps } from "../types/HomeCardProps";

const HomeCard = ({ title, description, index }: IHomeCardProps) => {
  return (
    <div className={`card card${index}`}>
      <h5>{title}</h5>
      <p className="card-p">{description}</p>
    </div>
  );
};

export default HomeCard;
