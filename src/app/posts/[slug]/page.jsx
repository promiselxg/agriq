"use client";
import { formatCreatedAt } from "@/utils/formatDate";
import host from "@/utils/host";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FiClock, FiUser } from "react-icons/fi";

const SinglePage = ({ params }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${host.url}/posts/${params.slug}`);
      setData(data);
    };
    getData();
  }, [params.slug]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.data?.title}</title>
        <meta name="description" content={`${data?.data?.title}`} />
      </Helmet>
      <main>
        <div className="w-full">
          <div className="w-full flex justify-between gap-5 flex-col md:flex-row md:mx-auto md:p-20 p-5">
            <div className="left md:w-3/4 h-full">
              <div className="flex flex-col ">
                <h1 className="md:text-5xl text-2xl font-[400] leading-snug text-[rgb(80,146,87)] pt-5 md:pt-0">
                  {data?.data?.title}
                </h1>
                <div className="flex items-center gap-5 py-5 text-[#f04c23]">
                  <span className="flex gap-2 items-center">
                    <FiClock />
                    <p>{formatCreatedAt(data?.data?.createdAt)}</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FiUser />
                    <p>admin</p>
                  </span>
                </div>
              </div>
              <div className="w-full md:h-[600px] bg-white overflow-hidden">
                {data && (
                  <Image
                    src={data?.data?.img}
                    width={1100}
                    height={600}
                    alt={data?.data?.title}
                    className="md:h-[600px]"
                  />
                )}
              </div>
              <div className="py-10 text-justify text-[16px] blog_p list-decimal">
                <p
                  dangerouslySetInnerHTML={{ __html: data?.data?.desc }}
                  className="text-sm leading-snug whitespace-wrap"
                ></p>
              </div>
            </div>
            <div className="right h-fit bg-[#F7F9FB] md:w-1/4 rounded-[10px]">
              <div className="p-2">
                <h1 className="text-[16px] px-3 py-5">Follow us on Twitter</h1>
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/agriqbiz?ref_src=twsrc%5Etfw"
                >
                  Tweets by agriqbiz
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
                {/* <div className="py-5 px-3 w-full">
                  <h1 className="text-[16px] font-[600]">Recent Posts</h1>
                  <ul className="text-sm list-">
                    <li className="py-2">
                      <Link
                        href="/"
                        className="hover:text-[#f04c23] delay-100 transition-all flex gap-2"
                      >
                        <FiArrowRight className="text-2xl" />
                        <p className="text-[14px]">
                          Policy Recommendations for Scaling Innovations in
                          Climate-Resilient Food Systems
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/"
                        className="hover:text-[#f04c23] delay-100 transition-all flex gap-2"
                      >
                        <FiArrowRight className="text-2xl" />
                        <p className="text-[14px]">
                          Policy Recommendations for Scaling Innovations in
                          Climate-Resilient Food Systems
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/"
                        className="hover:text-[#f04c23] delay-100 transition-all flex gap-2"
                      >
                        <FiArrowRight className="text-2xl" />
                        <p className="text-[14px]">
                          Policy Recommendations for Scaling Innovations in
                          Climate-Resilient Food Systems
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/"
                        className="hover:text-[#f04c23] delay-100 transition-all flex gap-2"
                      >
                        <FiArrowRight className="text-2xl" />
                        <p className="text-[14px]">
                          Policy Recommendations for Scaling Innovations in
                          Climate-Resilient Food Systems
                        </p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        href="/"
                        className="hover:text-[#f04c23] delay-100 transition-all flex gap-2"
                      >
                        <FiArrowRight className="text-2xl" />
                        <p className="text-[14px]">
                          Policy Recommendations for Scaling Innovations in
                          Climate-Resilient Food Systems
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePage;
