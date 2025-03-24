import React from "react";
import TitleComponent from "../ReuseableComponents/TitleComponent";
import WhiteButton from "../ReuseableComponents/WhiteButton";

function BusinessSec({ businessData = [] }) {
  return (
    <section class="bussiness_main">
      <div class="container">
        <TitleComponent
          class="tech_title"
          title="Why Choose"
          spantitle="Logo"
          title2=" for Your "
          spantitle2="Business?"
        />
        <div class="business_card row justify-content-center">
          {businessData.map((items, index) => (
            <div class="col-lg-4 col-md-6 p-2">
              <div class="business_box">
                <div class="number">{index + 1}</div>
                <div class="buscard_title">
                  <h4>{items.title}</h4>
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <WhiteButton title="Discover the Benefits with Your Free Trial!" />
      </div>
    </section>
  );
}

export default BusinessSec;
