"use client";
import Link from "next/link";
import ReactPlayer from "react-player";

const SectionAboutUs = () => {
  return (
    <>
      <div className="w-full flex relative bg-[#e8e8e8]">
        <div className="md:w-[1200px]  mx-auto md:py-24 py-10 flex justify-between gap-7  items-center">
          <div className="flex w-[90%] md:w-full  mx-auto md:mx-0 gap-5 items-center flex-col-reverse md:flex-row">
            <div className="heading">
              <h1 className="text-2xl font-bold text-[#f04c23] uppercase">
                Welcome
              </h1>
              <p className="my-5 text-[#000] md:text-[16px] font-medium">
                Welcome to AgriQ Business Services Ltd. We are committed to
                delivering smart agribusiness solutions through a range of
                specialized services across the agricultural value chain. Our
                extensive experience and proven expertise enables us provide
                outstanding value in every engagement.
              </p>
              {/* <p className="my-5 md:text-[16px] text-[#000] font-medium">
                Our notable achievements include pioneering Greenhouse Tomato
                Production with Drip Irrigation and significantly boosting rice
                and cassava yields in Ogun state. At AgriQ, we are unwaveringly
                committed to enhancing productivity, optimizing resources, and
                championing sustainability.
              </p> */}
              <p className="my-5 md:text-[16px] text-[#000] font-medium">
                We take pride in our notable achievements and testimonials from
                a diverse range of public, private, and international
                organizations, forging enduring partnerships that have thrived
                over the years.
              </p>
              <p className="my-5 md:text-[16px] text-[#000] font-medium">
                Join our mission to achieve sustainable agricultural development
                in Africa through the effective application of agricultural
                intelligence, innovation and technologies.
              </p>
              <ul className="my-5">
                <li>
                  <Link
                    href="/about"
                    className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23]"
                  >
                    <span className="relative z-10">Learn More</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <ReactPlayer url="https://youtu.be/lMX9F9XwV1c" width="340px" />
            </div>
            <div className="hidden md:flex">
              <ReactPlayer url="https://youtu.be/lMX9F9XwV1c" />
            </div>
          </div>
          {/* <div className="left flex w-1/2 gap-3"></div> */}
        </div>
      </div>
      {/* <Partners /> */}
    </>
  );
};

export default SectionAboutUs;
