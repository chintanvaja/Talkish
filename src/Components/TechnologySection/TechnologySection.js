import React from "react";
import TitleComponent from "../ReuseableComponents/TitleComponent";


function TechnologySection({technologyData = []}) {
  return (
    <section class="tech_main">
      <div class="container">
        <TitleComponent
          classname="tech_title"
          title="Transforming Industries with "
          spantitle="Advanced Technology"
        />

        <div class="tech_card row justify-content-center">
          {technologyData.map((items) => (
            <div class={`col-lg-4 col-md-6 p-2 ${items.class}`}>
              <div
                class={`tech_box `}
                style={{ "--items-color": items.color }}
              >
                <img src={items.img} alt="tech icon" />
                <p>{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
