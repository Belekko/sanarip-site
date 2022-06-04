import React from "react";

const Section = (props) => {
  return (
      <div className="block">
        <div className='first-part'>
          <img className="photo" src={props.photo} alt="jon ele surot" />
        </div>
        <div className="second-part">
          <h1 className="heading">{props.title}</h1>
          <p className="heading-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            uam magnam, obcaecati ea,
            cum iusto, excepturi ducimus amet omnis est atque aperiam quasi
            doloribus!
          </p>
        </div>
      </div>
  );
};

export default Section;
