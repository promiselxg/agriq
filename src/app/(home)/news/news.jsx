"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import { extractDayAndMonth } from "@/utils/formatDate";
import host from "@/utils/host";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const SectionBlog = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(`${host.url}/posts?slug=news`);
      setData(response);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <div className="w-full relative md:h-screen bg-white">
        <div className="mx-auto w-[90%] md:w-[1200px]">
          <div className="flex justify-center text-center items-center md:py-20 py-10 flex-col">
            <div className="flex flex-col mb-10">
              <h1 className="text-[#777] text-[16px] uppercase font-semibold">
                News &amp; Articles
              </h1>
              <h1 className="text-4xl font-extrabold">
                What&apos;s worth knowing?
              </h1>
            </div>
            <div className="md:w-full grid md:grid-cols-3 gap-5">
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
                data?.data?.posts?.slice(0, 3).map((news, i) => {
                  const { day, month } = extractDayAndMonth(news?.createdAt);

                  return (
                    <div
                      className="bg-[#fff] justify-end text-start services_box"
                      key={i}
                    >
                      <div className="w-full h-[200px] object-contain relative cursor-pointer blog_img">
                        <Image src={news?.img} fill alt="" />
                        <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                        <ul>
                          <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                            <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                              <span className="relative z-10 text-2xl">
                                {day}
                              </span>
                              <span className="relative z-10 uppercase">
                                {month}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="p-5 0">
                        {/* <h1 className="text-[#777] font-semibold text-sm uppercase">
                          {news?.catSlug}
                        </h1> */}
                        <Link
                          href={`/posts/${news?.slug}`}
                          className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                        >
                          <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                            {news?.title}
                          </h1>
                          <span className="flex items-center gap-3">
                            Learn more
                            <HiArrowNarrowRight className="arrow" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBlog;
