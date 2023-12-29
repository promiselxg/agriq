"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import host from "@/utils/host";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Services = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Agriqbusiness | Projects</title>
        <meta name="description" content="Agriq Business | Projects" />
      </Helmet>
      <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[200px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col justify-center text-center items-center w-1/2">
          <h1 className="text-white text-4xl font-extrabold py-3">
            Ongoing projects and initiatives
          </h1>
        </div>
      </div>
      <div className="w-full py-20 mx-auto px-10">
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
    </>
  );
};

export default Services;
