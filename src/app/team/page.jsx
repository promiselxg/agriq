"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import host from "@/utils/host";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${host?.url}/team`);
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      <main className="relative bg-[white]">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Team Members</title>
          <meta name="description" content="Agriq Business Management Staff" />
        </Helmet>
        <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[200px] md:h-[200px] items-center justify-center bg-cover bg-center">
          <div className="flex flex-col justify-center text-center items-center w-1/2">
            <h1 className="text-white text-4xl font-extrabold py-3">
              Our Team
            </h1>
            <p className="text-[whitesmoke] text-[16px] font-medium hidden md:flex">
              We have a team of professionals with extensive experience and
              expertise in agriculture, agribusiness, and management consulting.
              Our team members have a proven track record, skills, and credible
              educational background, making them highly qualified in their
              respective fields.
            </p>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full mx-auto bg-[white] md:p-10 p-5">
            <div className="md:py-10">
              {loading && (
                <div className="w-[1200px] mx-auto flex gap-5">
                  <div className="gap-5 w-full justify-between">
                    <Skeleton />
                  </div>
                  <div className="gap-5 w-full justify-between hidden md:flex">
                    <Skeleton />
                  </div>
                  <div className="gap-5 w-full justify-between hidden md:flex">
                    <Skeleton />
                  </div>
                </div>
              )}

              <div className="w-full grid md:grid-cols-4 gap-5 my-10">
                {data &&
                  data?.staff?.map((team) => {
                    return (
                      <div
                        className="bg-[#000] relative team_member cursor-pointer h-[300px] bg-center bg-cover w-full overflow-hidden project_team"
                        key={team?.id}
                      >
                        <div className="absolute top-0 bottom-0 w-full bg-[rgba(0,0,0,0.8)] h-0 overflow-hidden hidden_bg ">
                          <div className="h-full text-center flex justify-center items-center p-10 flex-col text-white">
                            <h1 className="text-[20px] font-extrabold capitalize">
                              {team?.name}
                            </h1>
                            <p className="text-[16px] font-bold pt-2">
                              {team?.title}
                            </p>
                            {team?.desc && (
                              <p className="text-[0.8rem] pt-2 leading-tight">
                                {team?.desc}
                              </p>
                            )}
                          </div>
                        </div>
                        <Image
                          src={team?.userImgUrl}
                          width={330}
                          height={300}
                          alt={team?.name}
                          className="w-full bg-cover h-[300px]"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
