import React from "react";
import { SERVICE } from "../../static";

import "./service.scss";

const Service = () => {
  const serviceData = SERVICE?.map((el) => (
    <div key={el?.id} className="service__card">
      <img src={el?.icon} alt="" />
      <div className="service__card__info">
        <h3>{el?.title}</h3>
        <p>{el?.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="service container">
      <div className="service__cards">{serviceData}</div>
    </div>
  );
};

export default Service;
