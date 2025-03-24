import React from "react";
import { corecapabilities } from "../../DataFolder/CoreCapabilities.js";
import TitleComponent from "../ReuseableComponents/TitleComponent.js";

function Corecapabilities() {
  return (
    <section className="cap_main" id="features">
      <div className="container">
        <TitleComponent title="Core Capabilities of " spantitle="Logo" />
        <div className="cap_card d-flex flex-wrap">
          {
            corecapabilities.map((items) => (
                <div className="col-lg-4 col-sm-12 p-3">
                    <div className="cap_box">
                        <img src={items.img} alt="Capabilities icon" />
                        <div className="cap_box_title">
                            <h2>{items.title}</h2>
                        </div>
                        <div className="cap_box_desc">
                            <p>{items.description}</p>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Corecapabilities;
