"use client";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <>
      <div className="w-full relative ">
        <div className="hero-bg md:h-[700px] h-[300px] ">
          <Carousel
            autoPlay
            infiniteLoop={true}
            transitionTime={500}
            showStatus={false}
            interval={5000}
            emulateTouch
            dynamicHeight={true}
            showThumbs={false}
          >
            <div className="relative">
              <Image
                src="/sliders/3.jpg"
                width={1200}
                height={700}
                className="h-[300px] md:h-[700px]"
                alt="image"
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase">
                  PIONEERED GREEN HOUSE TOMATO PRODUCTION WITH DRIP IRRIGATION
                  IN OGUN STATE.
                </h1>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sliders/1.jpg"
                width={1200}
                height={700}
                className="h-[300px] md:h-[700px]"
                alt="image"
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase">
                  Increased Rice Yield by more than 400% using smart
                  agribusiness solutions.
                </h1>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sliders/2.jpg"
                width={1200}
                height={700}
                className="h-[300px] md:h-[700px]"
                alt="image"
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase">
                  Delivering intelligence in Agribusiness through Agriq
                  Learning Academy.
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
