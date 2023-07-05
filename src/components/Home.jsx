import React, { useState } from "react";
import { Link } from "react-router-dom";

import imgWide from "./../images/cancer-gov-hero-widescreen-202301.jpg";
import cancerSideEffects from "./../images/1000_F_316738552_vU8mlm1Ag97kKuwy9G2ax1Hrhw5kaM1M.jpg";

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

const Links = ({ links, title, src }) => {
  return (
    <div className="card-container flex flex-col shadow-xl p-4 mb-4">
      <h3 className="mb-5">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={src[index]}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  const links = [
    "What is cancer",
    "Causes & prevention",
    "Diagnoses & staging",
  ];
  const src = ["/what-is-cancer", "/causes-prevention", "/diagnoses-staging"];

  return (
    <React.Fragment>
      <main className="flex flex-col gap-10">
        <section className="container flex justify-center mx-auto">
          <img
            src={imgWide}
            alt="cancer-gov-hero"
            className="shadow-2xl m-4"
          />
        </section>
        <section className="container gap-24 mx-auto flex justify-between">
          <Card
            link={"/typesofcancer"}
            imageSrc={cancerSideEffects}
            title="Types of cancer"
            description="This is the description"
          />
          <Card
            imageSrc={cancerSideEffects}
            title="Side Effects of Cancer Treatment"
            description="This is the description"
          />
          <Card
            imageSrc={cancerSideEffects}
            title="Side effects of cancer"
            description="This is the description"
          />
        </section>
        <section className="container mx-auto flex justify-between">
          <Links title="About Cancer" links={links} src={src} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
