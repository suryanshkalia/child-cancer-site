import React from "react";
import Cancer from "./../images/1645116488629.jpg";
import cna from "./../images/cna.jpg";
import hyperPlasia from "./../images/hyperplasia-dysplasia-cancer-progression-article.jpg";

const CancerInfo = () => {
  return (
    <>
      <main>
        <section className="p-10">
          <div className="flex justify-center">
            <img src={Cancer} className="h-96" alt="Cancer" />
          </div>
        </section>
        <section className="flex flex-col gap-20 flex-wrap p-10 m-10">
          <div className="w-1/2">
            <h1 className="text-4xl my-5">What is Cancer?</h1>
            <p>
              Cancer is a disease in which some of the body's cells grow
              uncontrollably and spread to other parts of the body. Cancer can
              start almost anywhere in the human body, which is made up of
              trillions of cells.
            </p>
            <p>
              Normally, human cells grow and multiply (through a process called
              cell division) to form new cells as the body needs them. When
              cells grow old or become damaged, they die, and new cells take
              their place. Sometimes this orderly process breaks down, and
              abnormal or damaged cells grow and multiply when they shouldn't.
              These cells may form tumors, which are lumps of tissue. Tumors can
              be cancerous or not cancerous (benign).
            </p>
            <p>
              Cancerous tumors spread into, or invade, nearby tissues and can
              travel to distant places in the body to form new tumors (a process
              called metastasis). Cancerous tumors may also be called malignant
              tumors. Many cancers form solid tumors, but cancers of the blood,
              such as leukemias, generally do not. Benign tumors do not spread
              into, or invade, nearby tissues. When removed, benign tumors
              usually don't grow back, whereas cancerous tumors sometimes do.
              Benign tumors can sometimes be quite large, however. Some can
              cause serious symptoms or be life-threatening, such as benign
              tumors in the brain.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl my-5">
              Difference Between Cancer Cells and Normal Cells
            </h1>
            <ul className="list-disc pl-10 mb-5">
              <li>
                Cancer cells grow in the absence of signals telling them to
                grow. Normal cells only grow when they receive such signals.
              </li>
              <li>
                Cancer cells ignore signals that normally tell cells to stop
                dividing or to die (a process known as programmed cell death, or
                apoptosis).
              </li>
              <li>
                Cancer cells invade into nearby areas and spread to other areas
                of the body. Normal cells stop growing when they encounter other
                cells, and most normal cells do not move around the body.
              </li>
              <li>
                Cancer cells tell blood vessels to grow toward tumors. These
                blood vessels supply tumors with oxygen and nutrients and remove
                waste products from tumors.
              </li>
              <li>
                Cancer cells hide from the immune system. The immune system
                normally eliminates damaged or abnormal cells.
              </li>
              <li>
                Cancer cells trick the immune system into helping them stay
                alive and grow. For instance, some cancer cells convince immune
                cells to protect the tumor instead of attacking it.
              </li>
              <li>
                Cancer cells accumulate multiple changes in their chromosomes,
                such as duplications and deletions of chromosome parts. Some
                cancer cells have double the normal number of chromosomes.
              </li>
              <li>
                Cancer cells rely on different kinds of nutrients than normal
                cells. In addition, some cancer cells make energy from nutrients
                in a different way than most normal cells. This lets cancer
                cells grow more quickly.
              </li>
            </ul>
            <p>
              Many times, cancer cells rely so heavily on these abnormal
              behaviors that they can’t survive without them. Researchers have
              taken advantage of this fact, developing therapies that target the
              abnormal features of cancer cells. For example, some cancer
              therapies prevent blood vessels from growing toward tumors,
              essentially starving the tumor of needed nutrients.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl">How Does Cancer Develop?</h1>
            <p className="my-5">
              Cancer is a genetic disease—that is, it is caused by changes to
              genes that control the way our cells function, especially how they
              grow and divide.
            </p>
            <p>Genetic changes that cause cancer can happen because:</p>
            <ul className="list-disc pl-10 my-5 ">
              <li>of errors that occur as cells divide. </li>
              <li>
                of damage to DNA caused by harmful substances in the
                environment, such as the chemicals in tobacco smoke and
                ultraviolet rays from the sun. (Our Cancer Causes and Prevention
                section has more information.){" "}
              </li>
              <li>they were inherited from our parents.</li>
            </ul>
            <p>
              The body normally eliminates cells with damaged DNA before they
              turn cancerous. But the body’s ability to do so goes down as we
              age. This is part of the reason why there is a higher risk of
              cancer later in life.
            </p>
            <p>
              Each person’s cancer has a unique combination of genetic changes.
              As the cancer continues to grow, additional changes will occur.
              Even within the same tumor, different cells may have different
              genetic changes.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl">Tissue Changes that Are Not Cancer</h1>
            <p className="my-5">
              Not every change in the body’s tissues is cancer. Some tissue
              changes may develop into cancer if they are not treated, however.
              Here are some examples of tissue changes that are not cancer but,
              in some cases, are monitored because they could become cancer:
            </p>
            <ul className="list-disc pl-10">
              <li>
                Hyperplasia occurs when cells within a tissue multiply faster
                than normal and extra cells build up. However, the cells and the
                way the tissue is organized still look normal under a
                microscope. Hyperplasia can be caused by several factors or
                conditions, including chronic irritation.
              </li>
              <li>
                Dysplasia is a more advanced condition than hyperplasia. In
                dysplasia, there is also a buildup of extra cells. But the cells
                look abnormal and there are changes in how the tissue is
                organized. In general, the more abnormal the cells and tissue
                look, the greater the chance that cancer will form. Some types
                of dysplasia may need to be monitored or treated, but others do
                not. An example of dysplasia is an abnormal mole (called a
                dysplastic nevus) that forms on the skin. A dysplastic nevus can
                turn into melanoma, although most do not.
              </li>
              <li>
                Carcinoma in situ is an even more advanced condition. Although
                it is sometimes called stage 0 cancer, it is not cancer because
                the abnormal cells do not invade nearby tissue the way that
                cancer cells do. But because some carcinomas in situ may become
                cancer, they are usually treated.
              </li>
            </ul>
            <figure className="p-4" >
              <div className="fig-container" >
                <div className="flex justify-center" >
                <img src={hyperPlasia} alt="tissue changes" className="" />
                </div>
                <figcaption className="bg-gray-100 p-5 inline-block" >
                  Normal cells may become cancer cells. Before cancer cells form
                  in tissues of the body, the cells go through abnormal changes
                  called hyperplasia and dysplasia. In hyperplasia, there is an
                  increase in the number of cells in an organ or tissue that
                  appear normal under a microscope. In dysplasia, the cells look
                  abnormal under a microscope but are not cancer. Hyperplasia
                  and dysplasia may or may not become cancer.
                  <p>Credit: © Terese
                  Winslow</p>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};

export default CancerInfo;
