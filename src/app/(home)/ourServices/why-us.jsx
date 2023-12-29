import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";

const WhyUs = () => {
  return (
    <>
      <div className="w-full flex md:pb-20">
        <div className="mx-auto w-[90%] md:w-[1200px]">
          <div className="pt-20 pb-10">
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="left w-[95%] mx-auto md:mx-0 md:w-1/2 relative h-[300px] md:h-[600px] mb-[150px] md:mb-0">
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
                <div className="flex items-center w-full flex-col">
                  <ul>
                    <h1 className="text-2xl md:text-3xl justify-start flex text-left w-ful  mb-5 font-extrabold text-[#212529] capitalize">
                      Why Choose AgriQ?
                    </h1>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[30px] md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Best Agricultural Practices
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[30px] md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Insightful Advisory & Support
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[30px] md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          High Yield. High Returns
                        </h1>
                      </span>
                    </li>

                    <h1 className="text-2xl md:text-3xl justify-start flex text-left w-full  my-5 font-extrabold text-[#212529] capitalize">
                      Our notable achievements include:
                    </h1>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[50px] md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal text-[#112]">
                          Pioneered private sector agri-extension service
                          delivery in Ogun State.
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[30px]  md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Boost Cassava Production yields by over 300%.
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[30px]  md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Boost Rice Production yields by over 400%.
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[45px]  md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Pioneered Greenhouse Tomato Production with Drip
                          Irrigation
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[55px]  md:text-3xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Facilitated take-off of IFAD assisted value chain
                          development in Ogun State.
                        </h1>
                      </span>
                    </li>
                    <li className="flex gap-5 py-3 items-center">
                      <BiCheckCircle className="text-[65px]  md:text-4xl text-[#EEC044]" />
                      <span>
                        <h1 className="text-[16px]  capitalize leading-normal">
                          Launched AgriQ Learning Academy for young farmers and
                          aspiring business owners.
                        </h1>
                      </span>
                    </li>
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
