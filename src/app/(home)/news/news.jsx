import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const SectionBlog = () => {
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
                What&apos;s worth knowing
              </h1>
            </div>
            <div className="md:w-full grid md:grid-cols-3 gap-5">
              <div className="bg-[#fff] justify-end text-start services_box">
                <div className="bg-[url('https://web.archive.org/web/20220319145228im_/https://www.agriqservices.com/wp-content/uploads/2017/11/Sesame-seed.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                  <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                  <ul>
                    <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                      <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                        <span className="relative z-10 text-2xl">28</span>
                        <span className="relative z-10 uppercase">SEP</span>
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
                        <span className="relative z-10 uppercase">FEB</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-5 0">
                  <h1 className="text-[#777] font-semibold text-sm uppercase">
                    Category
                  </h1>
                  <Link
                    href="/this-is-a-blog-post"
                    className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                  >
                    <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                      COMMODITY ALLIANCE FORUM (CAF) 2023: FOSTERING
                      AGRICULTURAL GROWTH AND COLLABORATION
                    </h1>
                    <span className="flex items-center gap-3">
                      Learn more
                      <HiArrowNarrowRight className="arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bg-[#fff] justify-end text-start services_box">
                <div className="bg-[url('https://web.archive.org/web/20220319145221im_/https://www.agriqservices.com/wp-content/uploads/2017/11/CBN.jpg')] w-full h-[200px] object-contain relative cursor-pointer blog_img">
                  <div className="w-full absolute top-0 left-0 h-[0]  inner-bg "></div>
                  <ul>
                    <li className="font-semibold text-[13px] hover:text-[#f37353] transition-all absolute bottom-10 right-5">
                      <div className="cursor-pointer btn-dark custom-btn px-6 py-2 relative bg-[#f04c23] flex flex-col leading-tight">
                        <span className="relative z-10 text-2xl">20</span>
                        <span className="relative z-10 uppercase">DEC</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-5 0">
                  <h1 className="text-[#777] font-semibold text-sm uppercase">
                    Category
                  </h1>
                  <Link
                    href="/this-is-a-blog-post"
                    className="hover:cursor-pointer hover:text-[#f04c23] transition ease-in delay-[3ms] duration-30 text-[#212529] section_link"
                  >
                    <h1 className="text-[20px] font-extrabold leading-tight my-2 lowercase first-letter:capitalize">
                      Food security: FG to commence aggressive dry season
                      farming in November
                    </h1>
                    <span className="flex items-center gap-3">
                      Learn more
                      <HiArrowNarrowRight className="arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBlog;
