import React from "react";
import "./Uses.css";
import pumps from "./pumps.png";

function Uses() {
  return (
    <div className="uses">
      <div className="uses__info">
        <div className="uses__info__header">
          <p>
            INSTALLED OVER 10 LAKH STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMILATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION
          </p>
        </div>
        <img src={pumps} alt="" />
      </div>
      <p className="uses__para">
        Valves - Pumps - Pipes -Iot Drives & Conrollers - Wires & Cables - Solar
        Systems - Motors
      </p>
      <div className="hor__line"></div>
    </div>
  );
}

export default Uses;
