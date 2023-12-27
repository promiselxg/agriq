"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import host from "@/utils/host";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(`${host.url}/posts?slug=projects`);
      setData(response?.data?.posts);
      setLoading(false);
    };
    getData();
  }, []);

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
            {loading ? (
              <>
                <div className="gap-5 w-full justify-between">
                  <Skeleton />
                </div>
                <div className="gap-5 w-full justify-between hidden md:flex">
                  <Skeleton />
                </div>
                <div className="gap-5 w-full justify-between hidden md:flex">
                  <Skeleton />
                </div>
              </>
            ) : (
              data &&
              data?.map((project) => {
                return (
                  <div
                    className="bg-cover h-[500px] relative project rounded-[10px] overflow-hidden"
                    style={{ backgroundImage: `url(${project?.img})` }}
                    key={project?.id}
                  >
                    <Link href={`/posts/${project?.slug}`}>
                      <div className="top-0 bottom-0 w-full absolute cursor-pointer black_bg"></div>
                      <div className="absolute bottom-8 w-full">
                        <h1 className="flex justify-center items-center text-center text-2xl text-white px-3 capitalize font-extrabold">
                          {project?.title}
                        </h1>
                      </div>
                      <div className="project_description flex flex-col h-screen items-center justify-center relative">
                        <p
                          className="text-[16px]  pb-4"
                          dangerouslySetInnerHTML={{
                            __html: project?.desc.substring(0, 200) + "...",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
