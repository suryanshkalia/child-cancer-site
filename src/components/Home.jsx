import React, { useState } from "react";
import { Link } from "react-router-dom";

import imgWide from "./../images/cancer-gov-hero-widescreen-202301.jpg";
import childawareness from "./../images/gold-ribbon-childhood-cancer-awareness.jpeg";
import Cancer from "./../images/breast cancer cell.webp";
import treatment from "./../images/images.jpeg"

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="container text-center w-auto bg-gray-300 shadow-2xl p-4 mb-4">
      <Link to={link}>
        <img src={imageSrc} alt="Card" className="h-80 w-auto" />
        <h3 className="text-2xl " >{title}</h3>
      </Link>
    </div>
  );
};

const Home = () => {

  return (
    <React.Fragment>
      <main className="flex flex-col gap-10  p-20">
        <section className="container flex justify-center mx-auto">
          <img src={imgWide} alt="cancer-gov-hero" className="shadow-2xl m-4" />
        </section>
        <section className="container gap-24 mx-auto flex justify-between">
          <Card
            link={"/cancer"}
            imageSrc={Cancer}
            title="What is cancer"
          />
          <Card
          link={"/treatment"}
            imageSrc={treatment}
            title="Cancer Treatment"
          />
          <Card
          link={"/childawareness"}
            imageSrc={childawareness}
            title="Child Cancer Awareness"
          />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
