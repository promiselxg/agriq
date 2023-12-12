import Image from "next/image";
import WhyUs from "./why-us";
import Link from "next/link";

const SectionServices = () => {
  return (
    <>
      <div className="services relative  bg-[#fff] ">
        <div className="w-full md:w-[90%] mx-auto h-fit">
          <div className="w-[90%] mx-auto  py-10 md:p-20">
            <div className="flex justify-center align-center text-center flex-col mb-10">
              <h1 className="font-[600] text-[#f04c23] text-[16px] uppercase">
                What we do
              </h1>
              <h1 className="text-3xl font-extrabold my-4">Our Services</h1>
            </div>
            <div className="w-full grid md:grid-cols-3 gap-5 gap-y-10">
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="https://www.syngenta.com/sites/syngenta/files/2023-03/Pictures%20website/Young_scientist_collecting_samples_from_the_cherry_tomato_plant_in_the_greenhouse.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness Planning and Strategy Development
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      At AgriQ, we work closely with our clients to ensure they
                      get the best results from our Agribusiness Strategies and
                      Solutions.
                    </p>
                    <a
                      href=""
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)] "
                    >
                      <span className="relative z-10">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="https://www.syngenta.com/sites/syngenta/files/2023-03/Pictures%20website/Office_Colleagues_Having_Meeting_In_Front_Of_Large_Plant_Display.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness Planning and Strategy Development
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      At AgriQ, we work closely with our clients to ensure they
                      get the best results from our Agribusiness Strategies and
                      Solutions.
                    </p>
                    <a
                      href=""
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="https://www.syngenta.com/sites/syngenta/files/2023-10/Agronomist_in_the_cornfield_for_Syngenta_in_S%C3%A3o_Paulo_State_Brazil.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness Planning and Strategy Development
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      At AgriQ, we work closely with our clients to ensure they
                      get the best results from our Agribusiness Strategies and
                      Solutions.
                    </p>
                    <a
                      href=""
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ul className="flex justify-center text-center items-center mt-20">
              <li>
                <Link
                  href="/services"
                  className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23] "
                >
                  <span className="relative z-10">All Services</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  );
};

export default SectionServices;
