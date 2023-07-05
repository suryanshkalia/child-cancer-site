import React from "react";
import { Link } from "react-router-dom";

import imgWide from "./../images/cancer-gov-hero-widescreen-202301.jpg";
import cancerSideEffects from "./../images/1000_F_316738552_vU8mlm1Ag97kKuwy9G2ax1Hrhw5kaM1M.jpg";
import cancerTreatmentEffects from "./../images/xNausea_CWCrop.jpg.resize.jpg.pagespeed.ic.nBLKh-n7kV.jpg";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card flex flex-1 flex-co1">
      <Link to="">
        <img src={imageSrc} alt="Card" className="h-60 w-auto" />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

const Links = ({ links, title, src }) => {
  return (
    <div className="card flex flex-1 flex-col ">
      <h3 className="mb-5">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to="{src[index]}">{link}</Link>
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
  const src = ["about", "/causes-prevention", "/diagnoses-staging"];

  return (
    <React.Fragment>
      <main className="flex flex-col gap-10 ">
        <section className="container mx-auto">
          <img src={imgWide} alt="cancer-gov-hero" />
        </section>
        <section className="container mx-auto flex justify-between">
          <Card
            imageSrc={cancerSideEffects}
            title="Side Effects Of Cancer"
            description="This is the description"
          ></Card>
          <Card
            imageSrc={cancerSideEffects}
            title="Side Effects of Cancer Treatment"
            description="This is the description"
          ></Card>
          <Card
            imageSrc={cancerSideEffects}
            title="Types of cancer"
            description="This is the description"
          ></Card>
        </section>
        <section className="Link container mx-auto flex justify-between">
          <Links title="About Cancer" links={links} src={src}></Links>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
