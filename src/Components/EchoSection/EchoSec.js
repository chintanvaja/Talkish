import React from "react";

const CarousalCard = ({ echoData = [] }) => {
  return echoData.map((user) => (
    <div class="col-lg-4 p-3">
      <div class="echoes_box">
        <div class="echo_top d-flex align-items-center">
          <div class="echo_left">
            <img src={user.img} alt="user" />
          </div>
          <div class="echo_right">
            <p>{user.name}</p>
            <p>{user.designation}</p>
          </div>
        </div>
        <div class="echo_bottom">
          <p>{user.feedback}</p>
        </div>
      </div>
    </div>
  ));
};

function EchoSec({echoData}) {
  return (
    <section class="echoes_main" id="about">
      <div class="echoesshadow">
        <div class="tech_title cap_title">
          <h1>
            Echoes of <span>Excellence</span>
          </h1>
        </div>
        <div class="carousel_container">
          <div class="carousel_track echoes_row1 row flex-nowrap">
            {
              <CarousalCard echoData={echoData}/>
            }
            </div>
          <div class="carousel_track echoes_row2 row flex-nowrap">
            {
              <CarousalCard echoData={echoData}/>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default EchoSec;
