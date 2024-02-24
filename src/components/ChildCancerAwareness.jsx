import React from "react";

import image from "../images/screen-shot-2017-09-04-at-09-32-27.png";
import symptoms from "../images/Child_Cancer_Smart_symptoms.jpg";

const ChildCancerAwareness = () => {
  const types = [
    {
      title: "Blood Cancer",
      description:
        "Childhood acute lymphoblastic leukemia (ALL) is a type of cancer in which the bone marrow makes too many immature lymphocytes (a type of white blood cell).Leukemia may affect red blood cells, white blood cells, and platelets.",
    },
    {
      title: "Brain Tumors",
      description:
        "A childhood brain or spinal cord tumor is a disease in which abnormal cells form in the tissues of the brain or spinal cord.The brain controls many important body functions. The spinal cord connects the brain with nerves in most parts of the body.Brain and spinal cord tumors are a common type of childhood cancer. Some tumors are benign and some children can be cured by surgery.",
    },
    {
      title: "Bone Cancers",
      description:
        "Bone cancer is rare and includes several types. Some bone cancers, including osteosarcoma and Ewing sarcoma, are seen most often in children and young adults.",
    },
    {
      title: "Neuroblastoma",
      description:
        "Neuroblastoma is a cancer of immature nerve cells that most often occurs in young children. It usually begins in the adrenal glands but can form in the neck, chest, abdomen, and spine.",
    },
    {
      title: "Wilms’ Tumor",
      description:
        "Arises in the kidney most often appears in children, usually between the ages of two and four, and is very different from adult kidney cancers, cure rates are very high with early diagnosis.",
    },
    {
      title: "Rhabdomyosarcoma",
      description:
        "Rhabdomyosarcoma usually begins in muscles that are attached to bones and that help the body move, but it may begin in many places in the body. Rhabdomyosarcoma is the most common type of soft tissue sarcoma in children.",
    },
    {
      title: "Retinoblastoma",
      description:
        "Retinoblastoma is cancer of the retina. Retinoblastoma is a rare type of eye cancer that can affect young children, usually under the age of 5. if it's picked up early, retinoblastoma can often be successfully treated.Retinoblastoma can either affect one or both eyes. If it affects both eyes, it's usually diagnosed before a child is one year old. If it affects one eye, it tends to be diagnosed later (between the ages of 2 and 3). Since early detection saves the vision and also life, it is important to focus on the signs and symptoms",
    },
  ];
  return (
    <React.Fragment>
      <main className="flex flex-col mx-auto p-5 md:p-10 overflow-x-auto">
        <section className="flex justify-end p-10">
          <div>
            <img className="shadow-xl" src={image} alt="childhoocancerribbon" />
          </div>
        </section>
        <section className="flex flex-col gap-20">
          <div className=" flex flex-col gap-4 max-w-xl">
            <h1 className="text-2xl  ">
              Cancer occurs in people of all ages including children. However,
              cancer in children is rare and is curable if detected early and
              treated effectively.
            </h1>
            <ul className="list-disc ml-10">
              <li>
                Every year, over 3 lakh children are diagnosed with Cancer all
                over the world
              </li>
              <li>
                In India, nearly more than 50,000 new childhood cancer cases
                occur every year.
              </li>
              <li>
                In the west, the survival rate is as high as 80-90% in some
                cancers. With a conservative estimate of 70% survival rate, many
                survivors are added to population every year.
              </li>
              <li>
                Cancers in childhood are best treated at Paediatric cancer units
                by specialised disease management groups . Age group of 0-14 is
                considered as paediatric age group, some centres also consider
                age up to 18 years.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 justify-between">
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="text-2xl">Symptoms of Childhood Cancer</h1>
              <p>
                Adults can observe the signs and symptoms of cancer in their
                bodies and maybe take some action however, in children, it is
                difficult to understand and observe any signs and symptoms under
                all the regular play accidents, bruises or any common illnesses.
                It is difficult to detect cancer in children as they are rare
                compared to adults.
              </p>
              <p>Some symptoms are:</p>
              <ul className="list-disc ml-10">
                <li>Continued, unexplained weight loss</li>
                <li>Headaches, often with early morning vomiting</li>
                <li>
                  Increased swelling or persistent pain in the bones, joints,
                  back, or legs
                </li>
                <li>
                  Lump or mass, especially in the abdomen, neck, chest, pelvis,
                  or armpits
                </li>
                <li>
                  Development of a whitish appearance in pupil of the eye or
                  changes in the vision
                </li>
                <li>Recurrent fevers not caused by infections</li>
                <li>Excessive bruising or bleeding (often sudden)</li>
                <li>Noticeable paleness or prolonged tiredness</li>
              </ul>
            </div>
            <div>
              <img src={symptoms} alt="Child hood cancer symptoms" className="max-w-md"  />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="space-y-10">
              <h1 className="text-2xl">Types of Childhood Cancers</h1>
              <p>
                There are many types of childhood cancers and they are quite
                different from the adult cancers. Adult cancers majorly
                originate in organs whereas childhood cancer involves tissues
                (hematopoietic, lymphatic, central nervous system, muscle , bone
                etc).
              </p>
              <p>
                Awareness about the signs and symptoms is necessary for early
                diagnosis, in India majority of the cases presenting to the
                oncology centres come at late stages where dissemination has
                already occurred.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 p-5">
              {types.map((item, index) => (
                <div className="max-w-lg shadow-lg border border-gray-900 p-6">
                  <h1 className="text-xl mb-5" key={index}>
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ChildCancerAwareness;
