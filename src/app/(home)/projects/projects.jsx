import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="w-full flex h-fit bg-[#F9F9F9] pb-20 border border-t-0">
        <div className="mx-auto w-full px-10">
          <div className="pt-20 pb-10">
            <div className="flex justify-center align-center text-center flex-col mb-10">
              <h1 className="text-3xl font-extrabold my-4">Recent Projects</h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-2 ">
            <div className="bg-[url('https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_270/https://tplabs.co/agrios/wp-content/uploads/2022/07/service-01.webp')]  bg-cover h-[500px] relative project rounded-[10px] overflow-hidden">
              <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
              <div className="absolute bottom-8 w-full">
                <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                  project 1
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  We are implementing the Advancing Local Dairy Development in
                  Nigeria (ALDDN), a five-year catalytic program. Using a
                  processor-led and inclusive dairy development approach, ALDDN
                  is improving the productivity and livelihoods of smallholder
                  dairy farmers, empowering women, and increasing the dietary
                  diversity of households to improve nutrition.
                </p>
                <Link href="/" className="text-[rgb(80,146,87)] font-bold">
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-[url('https://tplabs.co/agrios/wp-content/uploads/2022/07/project-03-370x570.webp')]  bg-cover h-[500px] relative project rounded-[10px] overflow-hidden">
              <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
              <div className="absolute bottom-8 w-full">
                <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                  project 2
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  We are implementing the Advancing Local Dairy Development in
                  Nigeria (ALDDN), a five-year catalytic program. Using a
                  processor-led and inclusive dairy development approach, ALDDN
                  is improving the productivity and livelihoods of smallholder
                  dairy farmers, empowering women, and increasing the dietary
                  diversity of households to improve nutrition.
                </p>
                <Link href="/" className="text-[rgb(80,146,87)] font-bold">
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-[url('https://tplabs.co/agrios/wp-content/uploads/2022/07/project-04-370x570.webp')]  bg-cover h-[500px] relative project rounded-[10px] overflow-hidden">
              <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
              <div className="absolute bottom-8 w-full">
                <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                  project 3
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  We are implementing the Advancing Local Dairy Development in
                  Nigeria (ALDDN), a five-year catalytic program. Using a
                  processor-led and inclusive dairy development approach, ALDDN
                  is improving the productivity and livelihoods of smallholder
                  dairy farmers, empowering women, and increasing the dietary
                  diversity of households to improve nutrition.
                </p>
                <Link href="/" className="text-[rgb(80,146,87)] font-bold">
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-[url('https://tplabs.co/agrios/wp-content/uploads/2022/07/project-05-370x570.webp')]  bg-cover h-[500px] relative project rounded-[10px] overflow-hidden">
              <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
              <div className="absolute bottom-8 w-full">
                <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                  project 4
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  We are implementing the Advancing Local Dairy Development in
                  Nigeria (ALDDN), a five-year catalytic program. Using a
                  processor-led and inclusive dairy development approach, ALDDN
                  is improving the productivity and livelihoods of smallholder
                  dairy farmers, empowering women, and increasing the dietary
                  diversity of households to improve nutrition.
                </p>
                <Link href="/" className="text-[rgb(80,146,87)] font-bold">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
