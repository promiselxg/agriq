import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const News = () => {
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
            <div className="bg-[#fff] justify-end text-start services_box">
              <div className="bg-[url('https://web.archive.org/web/20220319145228im_/https://www.agriqservices.com/wp-content/uploads/2017/11/Sesame-seed.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                <ul>
                  <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                    <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                      <span className="relative z-10 text-2xl">28</span>
                      <span className="relative z-10 uppercase">May</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 0">
                <h1 className="text-[#777] font-semibold text-sm uppercase">
                  Farming
                </h1>
                <Link
                  href="/this-is-a-blog-post"
                  className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                >
                  <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                    EMPOWERING FARMERS FOR A SUSTAINABLE FUTURE IN IKENNE ZONE
                  </h1>
                  <span className="flex items-center gap-3">
                    Learn more
                    <HiArrowNarrowRight className="arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] justify-end text-start services_box">
              <div className="bg-[url('https://web.archive.org/web/20220319145221im_/https://www.agriqservices.com/wp-content/uploads/2017/11/demo-pond-2.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                <ul>
                  <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                    <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                      <span className="relative z-10 text-2xl">18</span>
                      <span className="relative z-10 uppercase">FEB</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 0">
                <h1 className="text-[#777] font-semibold text-sm uppercase">
                  Article
                </h1>
                <Link
                  href="/this-is-a-blog-post"
                  className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                >
                  <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                    PARTICIPATORY COMMUNITY PLANNING (PCP) / PARTICIPATORY
                    LEARNING AND ACTION (PLA)
                  </h1>
                  <span className="flex items-center gap-3">
                    Learn more
                    <HiArrowNarrowRight className="arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] justify-end text-start services_box">
              <div className="bg-[url('https://web.archive.org/web/20220319145221im_/https://www.agriqservices.com/wp-content/uploads/2017/11/demo-pond-2.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                <ul>
                  <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                    <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                      <span className="relative z-10 text-2xl">21</span>
                      <span className="relative z-10 uppercase">SEP</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 0">
                <h1 className="text-[#777] font-semibold text-sm uppercase">
                  Article
                </h1>
                <Link
                  href="/this-is-a-blog-post"
                  className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                >
                  <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                    Ogun pledges support for SheFarmers initiative
                  </h1>
                  <span className="flex items-center gap-3">
                    Learn more
                    <HiArrowNarrowRight className="arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-[#fff] justify-end text-start services_box">
              <div className="bg-[url('https://web.archive.org/web/20220319145221im_/https://www.agriqservices.com/wp-content/uploads/2017/11/demo-pond-2.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                <ul>
                  <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                    <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                      <span className="relative z-10 text-2xl">18</span>
                      <span className="relative z-10 uppercase">NOV</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 0">
                <h1 className="text-[#777] font-semibold text-sm uppercase">
                  Article
                </h1>
                <Link
                  href="/this-is-a-blog-post"
                  className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                >
                  <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                    Food security: FG to commence aggressive dry season farming
                    in November
                  </h1>
                  <span className="flex items-center gap-3">
                    Learn more
                    <HiArrowNarrowRight className="arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
