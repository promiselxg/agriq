import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="w-full flex h-fit bg-[#F9F9F9] pb-20 border border-t-0">
        <div className="mx-auto w-[95%] md:w-full md:px-10">
          <div className="pt-10 md:pt-20 md:pb-10 pb-5">
            <div className="flex justify-center align-center text-center flex-col mb-10">
              <h1 className="text-3xl font-extrabold my-4">Recent Projects</h1>
            </div>
          </div>
          <div className="w-[90%] md:w-[1200px] mx-auto grid md:grid-cols-3 gap-5 ">
            <div className="bg-[url('https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_270/https://tplabs.co/agrios/wp-content/uploads/2022/07/service-01.webp')]  bg-cover h-[500px] relative project rounded-[10px] overflow-hidden">
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
                  pivotal role in the project's objective to promote and develop
                  commodity value chains in Ogun State.
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
                  Farmers Organization: Aggregation of farmers into groups and
                  clusters
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  The Farmers Aggregation Target for the OGSTEP-Agric sector was
                  set at 2500 farmers. AgriQ successfully aggregated and
                  mobilized 2553 farmers to participate in OGSTEP project.
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
                  In-Depth Analysis of Priority Value Chains in Ogun State
                </h1>
              </div>
              <div className="project_description flex flex-col h-screen items-center justify-center relative">
                <p className="text-[16px]  pb-4">
                  The project involves conducting an in-depth survey titled
                  "In-depth Analysis of Priority Value Chains in the State" as
                  part of the Ogun State Economic Transformation Project
                  (OGSTEP).
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
