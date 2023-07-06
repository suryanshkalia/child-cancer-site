import React from "react";

import cancer from "./../images/dna-genomic-sequence-article.jpg";
import chrometography from "./../images/chrometography.jpg";
import hormonetherapy from "./../images/Hormone therapy.jpg";
import hypothermia from "./../images/hypothermia.jpg";
import immunotherpay from "./../images/lauren-wood-immunotherapy-thumb.jpg";
import stemcelltransplant from "./../images/stem-cell-transplant.jpg";
import surgery from "./../images/surgery.jpg";

const Treatment = () => {
  const typesTreatment = [
    {
      title: "Biomarker testing",
      image: cancer,
      description:
        "Biomarker testing is a way to look for genes, proteins, and other substances (called biomarkers or tumor markers) that can provide information about cancer. Biomarker testing can help you and your doctor choose a cancer treatment.",
    },
    {
      title: "Chemotherapy",
      image: chrometography,
      description:
        "Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells. Learn how chemotherapy works against cancer, why it causes side effects, and how it is used with other cancer treatments.",
    },
    {
      title: "Hormone Therapy",
      image: hormonetherapy,
      description:
        "Hormone therapy is a treatment that slows or stops the growth of breast and prostate cancers that use hormones to grow. Learn about the types of hormone therapy and side effects that may happen",
    },
    {
      title: "Hypothermia",
      image: hypothermia,
      description:
        "Hyperthermia is a type of treatment in which body tissue is heated to as high as 113 °F to help damage and kill cancer cells with little or no harm to normal tissue. Learn about the types of cancer and precancers that hyperthermia is used to treat, how it is given, and the benefits and drawbacks of using hyperthermia.",
    },
    {
      title: "Immunotherapy",
      image: immunotherpay,
      description:
        "Immunotherapy is a type of cancer treatment that helps your immune system fight cancer. This page covers the types of immunotherapy, how it is used against cancer, and what you can expect during treatment",
    },
    {
      title: "Stem cell Transplant",
      image: stemcelltransplant,
      description:
        "Stem cell transplants are procedures that restore stem cells that grow into blood cells in people who have had theirs destroyed by high doses of chemotherapy or radiation therapy. Learn about the types of transplants, side effects that may occur, and how stem cell transplants are used in cancer treatment.",
    },
    {
      title: "Surgery",
      image: surgery,
      description:
        "When used to treat cancer, surgery is a procedure in which a surgeon removes cancer from your body. Learn the different ways that surgery is used against cancer and what you can expect before, during, and after surger",
    },
  ];

  return (
    <React.Fragment>
      <main className="p-10">
        <section className="flex justify-center ">
          <div className="flex flex-col gap-4 w-1/2 ">
            <h1 className="text-4xl">Types of Cancer Treatment</h1>
            <p>
              There are many types of cancer treatment. The types of treatment
              that you receive will depend on the type of cancer you have and
              how advanced it is.
            </p>
            <p>
              Some people with cancer will have only one treatment. But most
              people have a combination of treatments, such as surgery with
              chemotherapy and radiation therapy. When you need treatment for
              cancer, you have a lot to learn and think about. It is normal to
              feel overwhelmed and confused. But, talking with your doctor and
              learning about the types of treatment you may have can help you
              feel more in control.
            </p>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-8 p-10">
          {typesTreatment.map((item, index) => (
            <div className="w-1/2 max-w-md flex flex-col p-5 shadow-2xl" >
              <h3 key={index} className="text-4xl " >{item.title}</h3>
              <div >
              <img src={item.image} alt="type of cancer treatment"/>
              <p  >{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Treatment;
