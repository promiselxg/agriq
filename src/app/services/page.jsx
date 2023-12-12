import Image from "next/image";

export const metadata = {
  title: "Agriq | Our Services",
  description:
    "A leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
};

const Services = () => {
  return (
    <>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] md:h-[300px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center w-1/2">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold py-10 md:py-3">
            Our Services
          </h1>
          <p className="text-[whitesmoke] md:text-[16px] font-medium text-ellipsis hidden">
            At AgriQ, we understand that running an agribusiness can be a high
            risk venture that is why we partner with you to ensure that your
            desired outcomes are achieved.
          </p>
        </div>
      </div>
      <div className="w-[90%] md:w-[1200px] grid md:grid-cols-3 gap-5 gap-y-10 mx-auto my-20">
        <div className="w-full flex flex-col services_box service cursor-pointer h-[400px]">
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
                At AgriQ, we work closely with our clients to ensure they get
                the best results from our Agribusiness Strategies and Solutions.
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
        <div className="w-full flex flex-col services_box service cursor-pointer">
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
                At AgriQ, we work closely with our clients to ensure they get
                the best results from our Agribusiness Strategies and Solutions.
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
        <div className="w-full flex flex-col services_box service cursor-pointer">
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
                At AgriQ, we work closely with our clients to ensure they get
                the best results from our Agribusiness Strategies and Solutions.
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
    </>
  );
};

export default Services;
