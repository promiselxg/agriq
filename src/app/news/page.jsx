"use client";
import Skeleton from "@/components/Skeleton/skeleton";
import { extractDayAndMonth } from "@/utils/formatDate";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const url = "https://agriq.vercel.app/api/posts";
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}`);
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[200px] md:h-[200px] items-center justify-center bg-cover bg-center">
          <div className="flex flex-col justify-center text-center items-center w-1/2">
            <h1 className="text-white text-4xl font-extrabold py-3">
              NEWS &amp; ARTICLES
            </h1>
          </div>
        </div>
        <section className="mx-auto w-[90%] md:w-[1200px] md:py-20 py-10">
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
              data?.posts?.map((news, i) => {
                const { day, month } = extractDayAndMonth(news?.createdAt);

                return (
                  <div
                    className="bg-[#fff] justify-end text-start services_box"
                    key={i}
                  >
                    <div className="w-full h-[200px] object-contain relative cursor-pointer blog_img">
                      <Image src={news?.img} fill alt="" />
                      <div className="w-full absolute top-0 left-0 h-[0] inner-bg "></div>
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
        </section>
      </main>
    </>
  );
};

export default News;
