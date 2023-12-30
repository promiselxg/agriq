"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import host from "@/utils/host";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const Team = () => {
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
      <div className="w-full flex h-fit md:h-fit pb-20 bg-[#fff]">
        <div className="mx-auto w-full px-10">
          <div className="">
            <div className="flex justify-center align-center text-center flex-col mb-5">
              <h1 className="text-4xl font-extrabold my-8">Our Team</h1>
            </div>
          </div>
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
          <div className="w-full grid md:grid-cols-4 gap-5">
            {data &&
              data?.staff?.slice(0, 4)?.map((team) => {
                return (
                  <div className="" key={team?.id}>
                    <div className="">
                      <Image
                        src={team?.userImgUrl}
                        width={350}
                        height={400}
                        alt={team?.name}
                        className="w-[350px] h-[400px]"
                      />
                    </div>
                    <div className="bg-[#f9f9f9] py-10 rounded-[8px] relative -top-10 w-[80%] justify-center flex flex-col items-center text-center mx-auto box_shadow h-fit">
                      <h1 className="text-inherit text-[16px] font-bold leading-normal capitalize">
                        {team?.name}
                      </h1>
                      <p className="text-sm text-[rgb(80,146,87)] pb-2 capitalize">
                        {team?.title}
                      </p>
                      {/* <div className="flex items-center gap-3">
                        <a href="http://">
                          <FiTwitter className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                        </a>
                        <a href="http://">
                          <FiLinkedin className="text-[20px] hover:text-[rgb(80,146,87)] transition-all delay-100 hover:scale-150" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
