"use client";
import React from "react";
import { Helmet } from "react-helmet";

const Consulting = () => {
  const handleCollapseToggle = (index) => {
    const radioBtn = document.getElementById(`accordionRadio-${index}`);
    radioBtn.checked = !radioBtn.checked;
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services | Consulting</title>
        <meta
          name="description"
          content="AgriQ has been at the forefront of the Value Chain
                      development project in agriculture."
        />
      </Helmet>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] md:h-[300px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center md:w-1/2 w-[90%] pb-10 md:pb-0">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold pt-10 md:py-3">
            Consulting
          </h1>
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
                Leading Value Chain Development Project
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="w-full">
                    <p className="text-sm leading-loose ">
                      AgriQ has been at the forefront of the Value Chain
                      development project in agriculture.
                    </p>
                    <ul>
                      <li>Project 1: IFAD-VCDP</li>
                      <li>Project 2: OGSTEP-VCDF </li>
                    </ul>
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
                Agricultural Market Entry strategy and Analysis
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="w-full">
                    <p className="text-sm leading-loose text-justify md:text-left">
                      At AgriQ, we understand the dynamic challenges and
                      opportunities that shape the agricultural sector, and our
                      strategic approach ensures a thoughtful and informed
                      market entry. Our commitment to precision and foresight
                      underscores the importance of an in-depth analysis of
                      market landscapes, consumer behaviors, and regulatory
                      frameworks. The Agricultural Market Entry Strategy and
                      Analysis by AgriQ is tailored to identify key market entry
                      points, assess potential risks, and capitalize on emerging
                      trends.
                    </p>
                    <ul>
                      <li>In-depth Analysis</li>
                      <li>Commercialization and market access </li>
                    </ul>
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
                Training and capacity building services
              </div>
              <div className="collapse-content services_box">
                <div className="flex justify-between gap-5 p-5 md:p-5 px-2 py-5 flex-col md:flex-row">
                  <div className="w-full">
                    <p className="text-sm leading-loose ">
                      Whether onsite or remote, expert training from our team of
                      functional experts ensures our clients know how to
                      implement our Agribusiness.
                    </p>
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

export default Consulting;
