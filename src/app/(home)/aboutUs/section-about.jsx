import Image from "next/image";
import Link from "next/link";
import Partners from "../partners/partners";

const SectionAboutUs = () => {
  return (
    <>
      <div className="container w-full flex relative">
        <div className="w-[1200px]  mx-auto h-screen py-[50px] flex justify-between gap-7  items-center">
          <div className="left flex w-1/2 gap-3">
            <div className="flex w-[280px]">
              <Image
                src="https://web.archive.org/web/20220319145230im_/https://www.agriqservices.com/wp-content/themes/agriq/images//banners/img_banner_03.jpg"
                width={384}
                height={384}
                alt="image"
                className="w-full h-[400px] shadow-sm"
              />
            </div>
            <div className="flex gap-3 flex-col w-[280px]">
              <Image
                src="https://web.archive.org/web/20220319145229im_/https://www.agriqservices.com/wp-content/themes/agriq/images//banners/img_banner_01.jpg"
                width={291}
                height={245}
                alt="image"
                className="w-full h-[190px] object-cover shadow-sm"
              />
              <Image
                src="https://web.archive.org/web/20220319145228im_/https://www.agriqservices.com/wp-content/themes/agriq/images//banners/img_banner_02.jpg"
                width={291}
                height={245}
                alt="image"
                className="w-full h-[200px] object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="right flex w-1/2 flex-col">
            <div className="heading">
              <h1 className="text-[16px] font-bold text-[#f04c23] mb-3">
                About us
              </h1>
              <h1 className="text-3xl font-extrabold leading-tight">
                Your digital agricultural journey begins here.
              </h1>
              <p className="my-5 text-[#777] text-[16px]">
                AgriQ is an agribusiness consulting company that supports
                clients across the entire agribusiness value chain - providing
                valuable operational and commercial solutions. With robust
                experience and proven competence, we plan, execute and manage
                efficient and high-yield agribusiness programs.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <span>
                <Image src="/download.svg" width={60} height={40} alt="award" />
              </span>
              <span>
                <h1 className="text-3xl font-extrabold">240+</h1>
                <span className="text-[16px] font-bold">
                  Satisfied customers
                </span>
              </span>
            </div>
            <ul>
              <li>
                <Link
                  href=""
                  className="w-fit btn-dark custom-btn p-3 relative bg-[#f04c23]"
                >
                  <span className="relative z-10">Get Started</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
};

export default SectionAboutUs;
