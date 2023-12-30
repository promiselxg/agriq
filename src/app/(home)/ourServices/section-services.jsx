import Image from "next/image";
import WhyUs from "./why-us";
import Link from "next/link";
import Partners from "../partners/partners";

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
                  src="/services/plan.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness planning
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We provide feasibility assessment and develop bankable
                      business plans for various agribusiness initiatives.
                    </p>
                    <Link
                      href="/"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)] "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
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
                    Value Chain Development
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We assess,identify and facilitate the execution of value
                      chain improvement opportunities for the benefit of all
                      stakeholders.
                    </p>
                    <Link
                      href="/services/value-chain-services"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)] "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="/services/2.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
                    Agri extension services
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We offer technical advice and support to
                      farmers,facilitating the supply of quality inputs and
                      services for high yield production.
                    </p>
                    <Link
                      href="/services/consulting"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="/services/value_chain.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
                    value chain research
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We conduct in-depth research and gap/opportunity analysis
                      across production,processing,supply and demand sectors of
                      commodity value chains.
                    </p>
                    <Link
                      href="/"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="/services/1.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
                    Training and capacity building
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We deliver onsite or virtual training on innovative
                      agricultural practices, use of tools and techniques to
                      improve productivity of our clients&apos; farms.
                    </p>
                    <Link
                      href="/"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col services_box cursor-pointer">
                <Image
                  src="/services/5.jpg"
                  width={350}
                  height={250}
                  alt="Agribusiness"
                  className="w-full h-[250px] min-h-[200px]"
                />
                <div className="px-5 py-10 desc">
                  <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
                    Agricultural supplies
                  </h1>
                  <div className="wrapper">
                    <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                      We facilitate and manage the supply of high quality
                      agricultural inputs,materials and equipments .
                    </p>
                    <Link
                      href="/"
                      className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
                    >
                      <span className="relative z-10">Learn More</span>
                    </Link>
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
      <Partners />
    </>
  );
};

export default SectionServices;
