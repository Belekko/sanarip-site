import React from "react";
import partner1 from "../assets/11.jpeg";
import partner2 from "../assets/22.jpeg";
import partner3 from "../assets/33.jpeg";
import partner4 from "../assets/44.jpeg";
import partner5 from "../assets/55.jpeg";

const Prefooter = () => {
  return (
    <section id="prefooter">
      <div className="first-part">
        <h1 className="section-h1">In great company</h1>
        <div className="partners">
          <div>
            <img src={partner1} alt="" />
          </div>
          <div>
            <img src={partner2} alt="" />
          </div>
          <div>
            <img src={partner3} alt="" />
          </div>
          <div>
            <img src={partner4} alt="" />
          </div>
          <div>
            <img src={partner5} alt="" />
          </div>
        </div>
      </div>
      <div className="second-part">
        <div>
          <h1 >Want to see Back in action?</h1>
          <p>
            Our product specialists will be happy to show you how you can
            elevate your employee experience with Back.
          </p>
        </div>
        <div>
          <form>
            <div className="form-control">
              <label htmlFor="name">Your name:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Your phone number:</label>
              <input type="number" id="phone" />
            </div>
            <button className="button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
