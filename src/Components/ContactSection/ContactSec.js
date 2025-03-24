import React from "react";
import TitleComponent from "../ReuseableComponents/TitleComponent";
import WhiteButton from "../ReuseableComponents/WhiteButton";

function ContactSec({ contactData = [] }) {
  const options = ["Product 1", "Product 2", "Product 3"];
  return (
    <section className="contact_main" id="contactus">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 cap_title contact_title d-flex justify-content-center align-items-center">
            <TitleComponent
              title="Take the "
              spantitle="Next Step"
              title2=" Get Personalized Solutions"
              spantitle2="Today!"
            />
          </div>
          <div className="col-lg-6 contact_right">
            <h4 className="mb-4">Contact Information</h4>
            <form className="row flex-wrap">
              {contactData.map((data,index) => (
                <div key={index} className={`${data.class} mb-4`}>
                  <label htmlFor={data.id} className="form-label">
                    {data.label}
                  </label>
                  <input
                    type={data.type}
                    className="form-control"
                    id={data.id}
                    placeholder={data.placeholder}
                  />
                </div>
              ))}
              <div className="col-lg-12 mb-4">
                <label htmlFor="inputState" className="form-label">
                  Which Talkish product sparks your interest?
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose Product</option>

                  {options.map((options,index) => (
                    <option key={index}>{options}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-12 mb-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Write Your Message
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Write Your Message"
                />
              </div>

              <WhiteButton title="Submit" class1="pt-4 pb-0" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSec;
