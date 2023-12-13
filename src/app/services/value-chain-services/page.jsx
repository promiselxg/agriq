"use client";
import Image from "next/image";
import React from "react";

const ValueChain = () => {
  const handleCollapseToggle = (index) => {
    const radioBtn = document.getElementById(`accordionRadio-${index}`);
    radioBtn.checked = !radioBtn.checked;
  };
  return (
    <>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] md:h-[300px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center md:w-1/2 w-[90%] pb-10 md:pb-0">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold pt-10 md:py-3">
            Value Chain Services
          </h1>
          <p className="text-[whitesmoke] md:text-[16px] font-[600] text-ellipsis leading-tight md:leading-normal">
            we specialize in value chain analysis for cassava, maize, broiler,
            aquaculture, and oil palm.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="mx-auto md:w-[1200px] w-[90%]">
          <div className="my-20 bg-[#eee] flex flex-col  border-[rgba(255,255,255,0.3)]">
            <div className="collapse collapse-plus">
              <input type="radio" id="accordionRadio-1" name="my-accordion-3" />
              <div
                className="collapse-title text-sm font-bold border border-b-[rgba(0,0,0,0.1)]"
                onClick={() => handleCollapseToggle(1)}
              >
                Cassava
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <p className="text-sm leading-loose ">
                      AgriQ specializes in providing comprehensive services
                      across the entire cassava value chain. Our focus extends
                      to input suppliers, producers/farmers, processors,
                      traders, transporters, and end consumer’s analysis. We are
                      dedicated to supporting key activities from cultivation to
                      market distribution. Within the cassava value chain, we
                      recognize the pivotal role of marketers who contribute to
                      the seamless flow of cassava products in the market. Their
                      responsibilities include transportation, packaging, and
                      ensuring proper storage for future sales. Our commitment
                      is evident through our engagements with the IFAD-assisted
                      Value Chain Development Programme (VCDP) in Ogun State and
                      the Ogun State Economic Transformation Project. These
                      initiatives reflect our dedication to the development and
                      optimization of the cassava value chain, ultimately
                      contributing to economic growth and sustainability.
                    </p>
                  </div>
                  <div className="md:w-1/2 justify-end flex">
                    <Image
                      src="https://sahelconsult.com/wp-content/uploads/2019/05/agribusiness-training.jpg"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" id="accordionRadio-2" name="my-accordion-3" />
              <div
                className="collapse-title text-sm font-bold border border-b-[rgba(0,0,0,0.1)]"
                onClick={() => handleCollapseToggle(2)}
              >
                Maize
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <p className="text-sm leading-loose text-justify md:text-left">
                      AgriQ is tackling the challenges within Nigeria&apos;s
                      maize value chain head-on, recognizing issues ranging from
                      inconsistent access to inputs to logistical obstacles
                      faced by farmers, processors, and traders. In response,
                      AgriQ introduces a comprehensive strategy to transform the
                      maize industry. By addressing core problems, implementing
                      sustainable practices, and fostering collaboration, AgriQ
                      aims to empower farmers, optimize distribution channels,
                      and ensure a resilient and prosperous maize value chain.
                      Our approach involves prioritizing reliable access to
                      quality inputs for farmers, implementing efficient
                      post-harvest handling practices, and streamlining
                      distribution channels. These strategic interventions are
                      designed to create a more efficient and robust maize value
                      chain in Nigeria, addressing existing challenges and
                      paving the way for sustainable growth. In a significant
                      partnership, AgriQ collaborates with the Ogun State
                      Economic Transformation Project, aligning efforts to
                      reshape the future of maize in Ogun State.
                    </p>
                  </div>
                  <div className="md:w-1/2 justify-end flex">
                    <Image
                      src="https://sahelconsult.com/wp-content/uploads/2019/05/agribusiness-training.jpg"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="collapse collapse-plus">
              <input type="radio" id="accordionRadio-3" name="my-accordion-3" />
              <div
                className="collapse-title text-sm font-bold border border-b-[rgba(0,0,0,0.1)]"
                onClick={() => handleCollapseToggle(3)}
              >
                Broiler
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <p className="text-sm leading-loose ">
                      Embarking on the broiler industry in Nigeria presents a
                      set of challenges that demand innovative solutions. From
                      ensuring the consistent availability of high-quality feed
                      to optimizing production processes and navigating market
                      complexities, AgriQ steps into the broiler value chain
                      with a mission to revolutionize the landscape. Our
                      strategic approach involves addressing the core issues
                      faced by broiler farmers, processors, and distributors. We
                      are committed to enhancing the supply chain by providing
                      farmers with access to top-notch feed and implementing
                      efficient farming practices. AgriQ recognizes the pivotal
                      role of processors and distributors in maintaining product
                      integrity and ensuring timely delivery to consumers.
                      Through our interventions, we seek to create a more
                      streamlined and resilient broiler industry. AgriQ proudly
                      collaborates with the Ogun State Economic Transformation
                      Project to drive positive change within the broiler value
                      chain. Together, we work towards implementing sustainable
                      practices, fostering innovation, and creating a robust
                      framework for the broiler industry&apos;s growth and
                      prosperity.
                    </p>
                  </div>
                  <div className="md:w-1/2 justify-end flex">
                    <Image
                      src="https://sahelconsult.com/wp-content/uploads/2019/05/agribusiness-training.jpg"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="collapse collapse-plus">
              <input type="radio" id="accordionRadio-4" name="my-accordion-3" />
              <div
                className="collapse-title text-sm font-bold border border-b-[rgba(0,0,0,0.1)]"
                onClick={() => handleCollapseToggle(4)}
              >
                Aquaculture
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <p className="text-sm leading-loose ">
                      Our comprehensive strategy addresses key concerns faced by
                      catfish farmers, processors, and distributors. AgriQ
                      emphasizes the importance of sustainable farming
                      practices, providing access to high-quality feeds, and
                      implementing efficient water management techniques.
                      Recognizing the crucial role of distributors in delivering
                      fresh and high-quality catfish to consumers, we focus on
                      creating a streamlined and resilient supply chain. In a
                      strategic collaboration, AgriQ partners with the Ogun
                      State Economic Transformation Project, aligning efforts to
                      elevate the catfish aquaculture sector.
                    </p>
                  </div>
                  <div className="md:w-1/2 justify-end flex">
                    <Image
                      src="https://sahelconsult.com/wp-content/uploads/2019/05/agribusiness-training.jpg"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="collapse collapse-plus">
              <input type="radio" id="accordionRadio-5" name="my-accordion-3" />
              <div
                className="collapse-title text-sm font-bold border border-b-[rgba(0,0,0,0.1)]"
                onClick={() => handleCollapseToggle(5)}
              >
                Oil-Palm
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <p className="text-sm leading-loose ">
                      From addressing sustainable cultivation practices to
                      optimizing processing methods and navigating market
                      complexities, AgriQ enters the oil palm value chain with a
                      commitment to bring about transformative changes. Our
                      holistic strategy is designed to tackle the key issues
                      faced by oil palm growers, processors, and distributors.
                      AgriQ places a strong emphasis on sustainable farming
                      practices, ensuring access to high-quality seeds, and
                      implementing efficient harvesting and processing
                      techniques. Recognizing the importance of distributors in
                      delivering premium palm oil products to consumers, our
                      focus extends to creating a seamless and resilient supply
                      chain
                    </p>
                  </div>
                  <div className="md:w-1/2 justify-end flex">
                    <Image
                      src="https://sahelconsult.com/wp-content/uploads/2019/05/agribusiness-training.jpg"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueChain;
