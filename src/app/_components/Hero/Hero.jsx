const Hero = () => {
  return (
    <>
      <div className="w-full relative ">
        <div className="hero-bg md:h-screen h-[200px] ">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.3)] w-full md:h-full"></div>
          <div className="md:w-[1200px] mx-auto flex items-center md:h-screen h-[200px]">
            <div className="md:container flex  justify-between items-center gap-6">
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[20px] bg-[rgba(0,0,0,0.5)] p-10 ">
                <h1 className="text-sm md:text-5xl font-extrabold text-[#fff] z-10 leading-tight mb-4">
                  How agricultural innovation &amp; sustainability impact
                  harvest.
                </h1>
              </div>
              {/* <div className="w-1/2 flex items-center justify-end">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
