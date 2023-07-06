import React from "react";

const TypeCards = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-10 max-w-xl p-10 text-center shadow-xl ">
      <h3 className="text-2xl" >{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const sideEffects = () => {
  const types = [
    {
      title: "Neutropenia",
      description:
        "Neutropenia is a decrease in the number of white blood cells, which are the body’s main defense against infection. A low white blood cell count depends on the kind of chemotherapy you get for your cancer. You may be checked for a low white blood cell count, depending on the kind of treatment you receive.",
    },
    {
        title : "Hair Loss",
        description : "Some kinds of chemotherapy can make your hair fall out. This condition is called alopecia. Hair usually grows back two to three months after treatment ends.A cooling cap may help you keep more of your hair. A cooling cap fits tightly on your head and keeps your scalp cold before, during, and after your chemotherapy treatment. Studies have found that how well a cooling cap works depends on the kind of chemotherapy you receive. Talk to your doctor about a cooling cap before you start chemotherapy."
    },
    {
        title : "Nausea and Vomiting",
        description : "Cancer treatments can make you feel sick to your stomach, and to vomit. Sometimes, cancer patients feel sick just from thinking about cancer treatment.Fortunately, medicines can help control nausea and make you feel better. Tell your doctor when you feel sick, so he or she can find the medicine that works best for you."
    },
    {
        title : "Problems with Thinking and Remembering Things",
        description : "The drugs used to treat cancer can cause some people to have trouble concentrating or remembering things. This is sometimes called “chemo brain,” and it can make it hard for cancer patients to do their jobs or everyday tasks."
    },
    {
        title : "Cancer Pain",
        description : "Cancer itself and treatments for it may cause pain. Pain can make it harder to do your normal activities, and lower your quality of life. Pain control is an important part of your cancer treatment plan. Talk to your doctor if you have pain. Your doctor will figure out what is causing the pain and the best way to control it. For more information, visit Pain in People with Cancer."
    },{
        title : "Blood Clots (Deep Vein Thrombosis)",
        description : "Deep vein thrombosis (DVT) is when a blood clot forms in a deep vein. These clots usually form in the lower leg, thigh, or pelvis, but they can also occur in the arm. Sometimes the DVT will break off and go to the lungs.Cancer patients, especially cancer patients who are receiving chemotherapy, have a much higher risk of DVT than other people"
    },
    
  ];

  const TypeSection = () => {
    return (
        <div className="flex flex-wrap  gap-10" >
            {
                types.map((item, index) => (
                    <TypeCards title={item.title} description={item.description} />
                ))
            }
        </div>
    )
  }

  return (
    <main className=" mx-auto mb-20">
      <section className="text-center bg-gray-200 p-10 mx-auto">
        <h1 className="text-4xl my-5">Side Effects of Cancer Treatment</h1>
        <h3>
          Cancer treatments may have many side effects. A side effect occurs
          when treatment damages healthy cells, or organs are removed during
          surgery. Side effects can be different for each person, and for
          different medicines and kinds of treatment.
        </h3>
      </section>
      <section className="max-w-7xl mx-auto">
        <TypeSection/>
      </section>
    </main>
  );
};

export default sideEffects;
