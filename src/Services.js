import React from "react";
import "./Services.css";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import FacebookIcon from "@material-ui/icons/Facebook";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import { PhoneAndroid } from "@material-ui/icons";

function Services() {
  return (
    <div className="services">
      <div className="services__header">
        <h5>C.R.I FLUID SYSTEMS CATER TO DIVERSE SEGMENTS</h5>
      </div>
      <div className="services__info">
        <p>
          CHEMICAL&PROCESS|POWER|WATER&WASTE WATER|OILS &
          GAS|PHARMA|SUGARS&DISTELLERIES|PAPER&PULP|MARINE&DEFENCE|METAL&MINING|FOODN
          & BEVERAGE|PETROCHEMICAL &REFINERIES|SOLAR|BUILDING|HVAC|FIRE
          FIGHTING|AGRICULTURE&RESIDENTIAL
        </p>
      </div>
      <div className="services__box">
        <div className="services__icons">
          <LocalPhoneIcon className="services__iconss" />
          <p>Toll Free 1800 200 1234 </p>
        </div>
        <div className="services__icons">
          <FacebookIcon className="serives__iconss" />
          <p>www.facebook.com/cripumps </p>
        </div>
        <div className="services__icons">
          <PublicRoundedIcon className="services__iconss" />
          <p>www.cripumps.com </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
