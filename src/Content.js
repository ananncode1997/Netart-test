import React from "react";
import "./Content.css";
import award from "./award.png";
import guest from "./chief-guest.png";

function Content() {
  return (
    <div className="content">
      <div className="content__row">
        <div className="content__left">
          {/* image */}
          <img className="left__image" src={award} alt="/" />
        </div>
        <div className="content__right">
          {/* full description and photo */}
          <div className="content__right__header">
            <h5>
              C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time
            </h5>
            <ul>
              <li>
                C.R.I's eneregy efficient products are well recognized by
                various Government Instituions, as trustworthy products across
                the globe to save energy
              </li>
              <li>
                CRI is the highest contributors in the country for the projects
                of EESL(Energy Efficiency Services Limited) to replace the old
                inefficient pumps with 5 Star rated energy efficient smart pumps
                with IoT enabled control panel
              </li>
            </ul>
          </div>
          <div className="content__right__image">
            <img src={guest} alt="" />
            <figcaption>
              Government of India has awarded the
              <b>National Energy Conservation Award 2018"</b>, Mr. G. Selvaraj
              joint managing Director of C.R.I Group received the award from
              Smt. Sumitra Mahajan, speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honarable Minister of State
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
