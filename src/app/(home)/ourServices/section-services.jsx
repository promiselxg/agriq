import Image from "next/image";

const SectionServices = () => {
  return (
    <>
      <div className="service_bg relative h-[100px]"></div>
      <div className="services relative  bg-[#f3f3f3] ">
        <div className="w-[1200px] mx-auto h-fit">
          <div className="p-20">
            <div className="flex justify-center align-center text-center flex-col mb-10">
              <h1 className="font-[600] text-[#f04c23] text-[16px] uppercase">
                What we do
              </h1>
              <h1 className="text-3xl font-extrabold my-4">
                Our Amazing Services
              </h1>
              {/* <p className="text-[#777] text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
                eum?
              </p> */}
            </div>
            <div className="w-full grid grid-cols-3 gap-5 gap-y-10">
              <div className="w-full flex justify-center flex-col text-center items-center">
                <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3">
                  <Image
                    src="/services/Agribusiness.png"
                    width={100}
                    height={100}
                    alt="Agribusiness"
                    className="w-fit h-[100px]"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] my-5 font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness Planning and Strategy Development
                  </h1>
                  <p className="text-[#777] text-[14px] leading-normal">
                    At AgriQ, we work closely with our clients to ensure they
                    get the best results from our Agribusiness Strategies and
                    Solutions.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col text-center items-center">
                <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3">
                  <Image
                    src="/services/Training.png"
                    width={100}
                    height={100}
                    alt="Training"
                    className="w-fit h-[100px]"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] my-5 font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Training and Capacity Building Services
                  </h1>
                  <p className="text-[#777] text-[14px] leading-normal">
                    Whether onsite or remote, expert training from our team of
                    functional experts ensures our clients know how to implement
                    our Agribusiness.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col text-center items-center">
                <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3">
                  <Image
                    src="/services/implementation.png"
                    width={100}
                    height={100}
                    alt="implementation"
                    className="w-fit h-[100px]"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] my-5 font-[600] cursor-pointer hover:text-[rgb(80,146,87)] transition-all">
                    Agribusiness Implementation and support
                  </h1>
                  <p className="text-[#777] text-[14px] leading-normal">
                    At AgriQ, we work closely with our clients to ensure they
                    get the best results from our Agribusiness Strategies and
                    Solutions.
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex justify-center text-center items-center mt-20">
              <li>
                <a
                  href=""
                  className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23] "
                >
                  <span className="relative z-10">All Services</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionServices;
