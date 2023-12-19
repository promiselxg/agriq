import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const WhyUs = () => {
  return (
    <>
      <div className="w-full flex h-fit pb-20">
        <div className="mx-auto w-[90%] md:w-[1200px]">
          <div className="pt-20 pb-10">
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="left w-[95%] mx-auto md:mx-0 md:w-1/2 relative h-[300px] md:h-[600px]">
                <div className="w-[10%] bg-[#4CAF48] h-[350px] md:h-[480px] absolute top-[30px] md:top-[50px] -left-5 rounded-l-[20px]"></div>
                <div className="absolute top-0 left-0 rounded-[20px] overflow-hidden">
                  <Image
                    src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_570/https://tplabs.co/agrios/wp-content/uploads/2022/07/farmer.webp"
                    width={500}
                    height={600}
                    alt=""
                    className="z-10 w-full h-[400px] md:h-[600px]"
                  />
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className="flex items-center w-full md:h-[500px] ">
                  <ul>
                    <h1 className="text-3xl justify-start flex text-left w-full mt-[150px] md:mt-[60px] mb-5 font-extrabold text-[#212529]">
                      Why Choose AgriQ?
                    </h1>
                    <li className="flex gap-5 py-3 items-center">
                      <span className="mt-2 md:mt-0 text-sm w-[43px] h-[43px] md:w-[45px] md:h-[45px] rounded-[50%] md:text-2xl bg-[green] text-white flex items-center justify-center text-center">
                        <FiCheck />
                      </span>
                      <span>
                        <h1 className="text-[20px] font-bold capitalize leading-normal text-[#112]">
                          Best Agricultural Practices
                        </h1>
                        {/* <p className="text-[16px]">
                        There are variation You need to be sure there is
                        anything hidden in the middle of t ```ext.
                      </p> */}
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <span className="mt-2 md:mt-0 text-sm w-[42px] h-[43px] md:w-[45px] md:h-[45px] rounded-[50%] md:text-2xl bg-[#C5CE38] text-white flex items-center justify-center text-center">
                        <FiCheck />
                      </span>
                      <span>
                        <h1 className="text-[20px] font-bold capitalize leading-normal">
                          Insightful Advisory & Support
                        </h1>
                        {/* <p className="text-[16px]">
                        There are variation You need to be sure there is
                        anything hidden in the middle of text.
                      </p> */}
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <span className="mt-2 md:mt-0 text-sm w-[42px] h-[43px] md:w-[45px] md:h-[45px] rounded-[50%] md:text-2xl bg-[#EEC044] text-white flex items-center justify-center text-center">
                        <FiCheck />
                      </span>
                      <span>
                        <h1 className="text-[20px] font-bold capitalize leading-normal">
                          High Yield. High Returns
                        </h1>
                        {/* <p className="text-[16px]">
                        There are variation You need to be sure there is
                        anything hidden in the middle of text.
                      </p> */}
                      </span>
                    </li>
                    {/* <li className="flex gap-5 py-3">
                    <span className="mt-2 md:mt-0 text-sm w-[42px] h-[22px] md:w-[45px] md:h-[40px] rounded-[50%] md:text-2xl bg-[#F04C23] text-white flex items-center justify-center text-center">
                      <FiCheck />
                    </span>
                    <span>
                      <h1 className="text-[20px] font-bold capitalize leading-normal">
                        Quality Oranic Food
                      </h1>
                      <p className="text-[16px]">
                        There are variation You need to be sure there is
                        anything hidden in the middle of text.
                      </p>
                    </span>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
