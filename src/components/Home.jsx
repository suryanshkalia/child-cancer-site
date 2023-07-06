import React, { useState } from "react";
import { Link } from "react-router-dom";

import imgWide from "./../images/cancer-gov-hero-widescreen-202301.jpg";
import cancerSideEffects from "./../images/1000_F_316738552_vU8mlm1Ag97kKuwy9G2ax1Hrhw5kaM1M.jpg";
import Cancer from "./../images/download.png";
import treatment from "./../images/images.jpeg"

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="container text-center w-auto bg-gray-300 shadow-2xl p-4 mb-4">
      <Link to={link}>
        <img src={imageSrc} alt="Card" className="h-80 w-auto" />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

const Home = () => {

  return (
    <React.Fragment>
      <main className="flex flex-col gap-10">
        <section className="container flex justify-center mx-auto">
          <img src={imgWide} alt="cancer-gov-hero" className="shadow-2xl m-4" />
        </section>
        <section className="container gap-24 mx-auto flex justify-between">
          <Card
            link={"/cancer"}
            imageSrc={Cancer}
            title="What is cancer"
            description="This is the description"
          />
          <Card
          link={"/treatment"}
            imageSrc={treatment}
            title="Cancer Treatment"
            description="This is the description"
          />
          <Card
            imageSrc={cancerSideEffects}
            title="Side effects of cancer"
            description="This is the description"
          />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
