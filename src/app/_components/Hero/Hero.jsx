import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-[600px] w-full relative hero overflow-hidden">
        <div className="hero-bg">
          <div className="w-[1200px] mx-auto flex items-center h-[calc(100vh-30vh)]">
            <div className="container flex  justify-between items-center  gap-6">
              <div className="w-1/2 max-w-lg flex flex-initial flex-col ml-[20px]">
                <h1 className="text-2xl font-extrabold text-[#212529]">
                  AgriBusiness Unleashed: Planting Success in the Digital Soil!
                </h1>
                <p className="my-5 text-[15.4px] text-[#777777] text-start leading-6">
                  Unleash the power of AgriBusiness with us, where success is
                  planted in the digital soil, growing into a thriving harvest
                  of innovation.
                </p>
                <ul className="mt-2">
                  <li>
                    <a
                      href=""
                      className="w-fit btn-dark custom-btn p-3 relative bg-[#212529]"
                    >
                      <span className="relative z-10">Learn More</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 flex items-center justify-end">
                <div className="w-full">
                  <div className="w-full gap-5 relative flex flex-wrap justify-center">
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/Agribusiness.png"
                        width={100}
                        height={100}
                        alt="Agribusiness"
                        className="w-fit h-[100px]"
                      />
                    </div>
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/Training.png"
                        width={100}
                        height={100}
                        alt="Training"
                        className="w-fit h-[100px]"
                      />
                    </div>
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/implementation.png"
                        width={100}
                        height={100}
                        alt="implementation"
                        className="w-fit h-[100px]"
                      />
                    </div>
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/Advisory.png"
                        width={100}
                        height={100}
                        alt="Advisory"
                        className="w-fit h-[100px]"
                      />
                    </div>
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/Market_access.png"
                        width={100}
                        height={100}
                        alt="Market access"
                        className="w-fit h-[100px]"
                      />
                    </div>
                    <div className="w-fit services_box bg-[#fff] rounded-[50%] p-3 overflow-hidden rotate cursor-pointer">
                      <Image
                        src="/services/Farm_Operation.png"
                        width={100}
                        height={100}
                        alt="Farm Operation"
                        className="w-fit h-[100px]"
                      />
                    </div>
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

export default Hero;
