import Link from "next/link";
const Services = () => {
  return (
    <>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[300px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center w-1/2">
          <h1 className="text-white text-4xl font-extrabold py-3">
            Ongoing projects and initiatives
          </h1>
        </div>
      </div>
      <div className="w-full py-20 mx-auto px-10">
        <div className="w-full md:grid grid-cols-4 gap-2">
          <div className="bg-[url('https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_270/https://tplabs.co/agrios/wp-content/uploads/2022/07/service-01.webp')]  bg-cover h-[300px] relative project rounded-[10px] overflow-hidden mb-5 md:mb-0">
            <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
            <div className="absolute bottom-8 w-full">
              <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                OGSTEP-VCDF
              </h1>
            </div>
            <div className="project_description flex flex-col h-screen items-center justify-center relative">
              <p className="text-[16px]  pb-4">
                AgriQ Business Services is actively engaged in the Ogun State
                Economic Project, specifically within the Ikenne Zone. Serving
                as the Value Chain Development Firm (VCDF), AgriQ plays a
                pivotal role in the project&apos;s objective to promote and
                develop commodity value chains in Ogun State.
              </p>
              <Link
                href="/projects/OGSTEP-VCDF"
                className="text-[rgb(80,146,87)] font-bold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
