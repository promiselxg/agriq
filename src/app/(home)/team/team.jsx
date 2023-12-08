import Image from "next/image";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const Team = () => {
  return (
    <>
      <div className="w-full flex h-screen pb-20 bg-[#fff]">
        <div className="mx-auto w-full px-10">
          <div className="pt-20">
            <div className="flex justify-center align-center text-center flex-col mb-10">
              <h1 className="text-3xl font-extrabold my-4">Our People</h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-5">
            <div className="">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <Image
                  src="/team/md.jpg"
                  width={350}
                  height={400}
                  alt="Ibikunle A. Onasanya"
                  className="w-[350px] h-[400px]"
                />
              </div>
              <div className="bg-[#f9f9f9] py-10 rounded-[8px] relative -top-10 w-[80%] justify-center flex flex-col items-center text-center mx-auto box_shadow h-fit">
                <h1 className="text-inherit text-[16px] font-bold leading-normal capitalize">
                  Ibikunle A. Onasanya
                </h1>
                <p className="text-sm text-[rgb(80,146,87)] pb-2 capitalize">
                  MD/CEO
                </p>
                <div className="flex items-center gap-3">
                  <a href="http://">
                    <FiTwitter className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                  <a href="http://">
                    <FiLinkedin className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <Image
                  src="/team/Fola_Onasanya.jpg"
                  width={350}
                  height={400}
                  alt="Fola Onasanya"
                  className="w-[350px] h-[400px]"
                />
              </div>
              <div className="bg-[#f9f9f9] py-10 rounded-[8px] relative -top-10 w-[80%] justify-center flex flex-col items-center text-center mx-auto box_shadow h-fit">
                <h1 className="text-inherit text-[16px] font-bold leading-normal capitalize">
                  Fola Onasanya
                </h1>
                <p className="text-sm text-[rgb(80,146,87)] pb-2 capitalize">
                  Director
                </p>
                <div className="flex items-center gap-3">
                  <a href="http://">
                    <FiTwitter className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                  <a href="http://">
                    <FiLinkedin className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <Image
                  src="/team/Olatomide_Olasunkanmi.jpg"
                  width={350}
                  height={400}
                  alt="Olatomide S. Olasunkanmi"
                  className="w-[350px] h-[400px]"
                />
              </div>
              <div className="bg-[#f9f9f9] py-10 rounded-[8px] relative -top-10 w-[80%] justify-center flex flex-col items-center text-center mx-auto box_shadow h-fit">
                <h1 className="text-inherit text-[16px] font-bold leading-normal capitalize">
                  Olatomide S. Olasunkanmi
                </h1>
                <p className="text-sm text-[rgb(80,146,87)] pb-2 capitalize">
                  Monitoring and Evaluation Specialist
                </p>
                <div className="flex items-center gap-3">
                  <a href="http://">
                    <FiTwitter className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                  <a href="http://">
                    <FiLinkedin className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <Image
                  src="/team/Adedotun_Philip.jpg"
                  width={350}
                  height={400}
                  alt="Adedotun Philip"
                  className="w-[350px] h-[400px]"
                />
              </div>
              <div className="bg-[#f9f9f9] py-10 rounded-[8px] relative -top-10 w-[80%] justify-center flex flex-col items-center text-center mx-auto box_shadow h-fit">
                <h1 className="text-inherit text-[16px] font-bold leading-normal capitalize">
                  Adedotun Philip
                </h1>
                <p className="text-sm text-[rgb(80,146,87)] pb-2 capitalize">
                  Head human resources
                </p>
                <div className="flex items-center gap-3">
                  <a href="http://">
                    <FiTwitter className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                  <a href="http://">
                    <FiLinkedin className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
