import React from "react";
import TitleComponent from "../ReuseableComponents/TitleComponent";

function FaqSection({ faqdata = [] }) {
  return (
    <section class="faq_main" id="faq">
      <div class="container">
        <div class="row">
          <div class="faq_left col-lg-6">
              <div  class="accordion mb-4" id="accordionExample">
            {faqdata.map((faqs, index) => (
                <div key={index} class="accordion-item">
                  <h2 class="accordion-header" id={`heading-${faqs.id}`}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${faqs.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${faqs.id}`}
                    >
                      {faqs.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${faqs.id}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`heading-${faqs.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">{faqs.description}</div>
                  </div>
                </div>
            ))}
              </div>
          </div>
          <div class="faq_right col-lg-6 d-flex justify-content-center align-items-center">
            <TitleComponent
              classname="contact_title"
              title="Frequently "
              spantitle="Asked"
              title2=" Question"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
