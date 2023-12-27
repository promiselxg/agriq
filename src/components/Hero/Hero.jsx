"use client";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`/api/banner`);
      setData(response?.data?.slide);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full relative ">
        <div className="hero-bg md:h-[700px] h-[300px] ">
          {data && (
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
              {data &&
                data?.map((slider) => {
                  return (
                    <div className="relative" key={slider?.id}>
                      <Image
                        src={slider?.userImgUrl}
                        width={1200}
                        height={700}
                        className="h-[300px] md:h-[700px]"
                        alt="image"
                      />
                      {slider?.desc && (
                        <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                          <h1 className="text-2xl md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase">
                            {slider?.desc}
                          </h1>
                        </div>
                      )}
                    </div>
                  );
                })}
            </Carousel>
          )}
          {isLoading && (
            <div className="relative">
              <Image
                src="/sliders/3.jpg"
                width={1200}
                height={700}
                className="h-[300px] md:h-[700px] w-full"
                alt="image"
                priority
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase">
                  PIONEERED GREEN HOUSE TOMATO PRODUCTION WITH DRIP IRRIGATION
                  IN OGUN STATE.
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
