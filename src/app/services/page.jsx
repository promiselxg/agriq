import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Agriq Business | Our Services",
  description:
    "A leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
};

const Services = () => {
  return (
    <>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] md:h-[200px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center md:w-1/2 p-5">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold py-2 md:py-3">
            Our Services
          </h1>
          <p className="text-[whitesmoke] md:text-[16px] font-medium text-ellipsis">
            At AgriQ we understand that running an agribusiness can be a high
            risk venture that is why we partner with you to ensure that your
            desired outcomes are achieved.
          </p>
        </div>
      </div>
      <div className="w-[90%] md:w-[1200px] grid md:grid-cols-3 gap-5 gap-y-10 mx-auto my-20">
        <div className="w-full flex flex-col services_box service cursor-pointer h-[400px]">
          <Image
            src="/services/plan.png"
            width={350}
            height={250}
            alt="Agribusiness"
            className="w-full h-[250px] min-h-[200px]"
          />
          <div className="px-5 py-10 desc">
            <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
              Agribusiness planning
            </h1>
            <div className="wrapper">
              <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                We provide feasibility assessment and develop bankable business
                plans for various agribusiness initiatives.
              </p>
              <Link
                href="/services"
                className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)] "
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col services_box service cursor-pointer">
          <Image
            src="https://www.syngenta.com/sites/syngenta/files/2023-03/Pictures%20website/Office_Colleagues_Having_Meeting_In_Front_Of_Large_Plant_Display.jpg"
            width={350}
            height={250}
            alt="Agribusiness"
            className="w-full h-[250px] min-h-[200px]"
          />
          <div className="px-5 py-10 desc">
            <h1 className="text-[18px] font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all capitalize">
              Value Chain Development
            </h1>
            <div className="wrapper">
              <p className="text-[#777] text-[14px] leading-normal mt-3 mb-8">
                We assess,identify and facilitate the execution of value chain
                improvement opportunities for the benefit of all stakeholders.
              </p>
              <Link
                href="/services/value-chain-services"
                className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col services_box service cursor-pointer">
          <Image
            src="https://www.syngenta.com/sites/syngenta/files/2023-03/Pictures%20website/Office_Colleagues_Having_Meeting_In_Front_Of_Large_Plant_Display.jpg"
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
                We offer technical advice and support to farmers,facilitating
                the supply of quality inputs and services for high yield
                production.
              </p>
              <Link
                href="/services"
                className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col services_box service cursor-pointer">
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
                We conduct in-depth research and gap/opportunity analysis across
                production,processing,supply and demand sectors of commodity
                value chains.
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
        <div className="w-full flex flex-col services_box service cursor-pointer">
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
                We deliver onsite or virtual training on innovative agricultural
                practices, use of tools and techniques to improve productivity
                of our clients&apos;s farms.
              </p>
              <Link
                href="/services"
                className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col services_box service cursor-pointer">
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
                We facilitate and manage the supply of high quality agricultural
                inputs,materials and equipments .
              </p>
              <Link
                href="/services"
                className="w-fit btn-dark custom-btn p-3 relative bg-[rgb(80,146,87)]  "
              >
                <span className="relative z-10">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
