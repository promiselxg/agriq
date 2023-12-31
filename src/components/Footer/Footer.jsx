"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiAtSign,
  FiPhoneCall,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-to-top";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="w-full flex footer-bg md:p-20 p-5">
        <div className="w-full md:w-[1200px] mx-auto">
          <div className="flex md:justify-between md:items-center py-10 border border-b-[#777] border-t-0 border-l-0 border-r-0 flex-col md:flex-row">
            <h1 className="text-[rgba(255,255,255,0.8)] text-2xl  md:text-4xl font-extrabold ">
              Want to start an Agribusiness?
            </h1>
            <ul className="mt-10 ml-0">
              <li className="font-semibold text-[13px]  transition-all">
                <a
                  href="mailto:agriqbusiness.com"
                  className="btn-dark custom-btn p-3 relative bg-[#f37353]"
                >
                  <span className="relative z-10">
                    Get in touch with us today
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full grid md:grid-cols-3 gap-5 md:mt-8">
            <div className="p-5 md:p-10 flex justify-start flex-col">
              <Image
                src="/logo.png"
                width={100}
                height={80}
                alt="logo"
                className="h-[50px] w-[100px] object-contain"
              />

              <div className="flex flex-col my-3 text-[rgba(255,255,255,0.8))] text-[16px] leading-relaxed">
                <span className="flex items-center gap-2 font-[600]">
                  <FiAtSign />
                  info@agriqbusiness.com
                </span>
                <span className="flex items-center gap-2 font-[600]">
                  <FiAtSign />
                  kunlabob@gmail.com
                </span>
                <span className="flex items-center gap-2 font-[600]">
                  <FiAtSign />
                  kunlabob@yahoo.com
                </span>
                <span className="flex items-center gap-2 font-[600]">
                  <FiPhoneCall />
                  +234(803)337 79 22
                </span>
              </div>
            </div>
            <div className="p-5 md:p-10 flex justify-start flex-col">
              <h1 className="mt-1 text-[16px] font-bold text-[rgba(255,255,255,0.8)]">
                Navigation
              </h1>
              <div className="grid grid-cols-2">
                <ul className="my-3 text-[rgba(255,255,255,0.8)] font-medium">
                  <li className="py-1 hover:text-[#f37353] transition-all">
                    <Link
                      href="/"
                      className={`${currentRoute === "/" && "text-[#f37353]"}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-1 hover:text-[#f37353] transition-all">
                    <Link
                      href="/about"
                      className={`${
                        currentRoute === "/about" && "text-[#f37353]"
                      }`}
                    >
                      About us
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      href="/services"
                      className={`${
                        currentRoute === "/services" && "text-[#f37353]"
                      }`}
                    >
                      Our Services
                    </Link>
                  </li>
                </ul>
                <ul className="my-3 text-[rgba(255,255,255,0.8)] font-medium">
                  <li className="py-1 hover:text-[#f37353] transition-all">
                    <Link
                      href="/team"
                      className={`${
                        currentRoute === "/team" && "text-[#f37353]"
                      }`}
                    >
                      Team
                    </Link>
                  </li>
                  <li className="py-1 hover:text-[#f37353] transition-all">
                    <Link
                      href="/news"
                      className={`${
                        currentRoute === "/news" && "text-[#f37353]"
                      }`}
                    >
                      News
                    </Link>
                  </li>
                  <li className="py-1 hover:text-[#f37353] transition-all">
                    <a href="mailto:agriqbusiness.com">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-5 md:p-10 flex justify-start flex-col">
              <h1 className="mt-1 text-[16px] font-bold text-[rgba(255,255,255,0.8)]">
                Connect with us
              </h1>
              <ul className="my-3 text-[rgba(255,255,255,0.8)] font-medium flex items-center gap-3">
                <li className="py-1">
                  <a href="https://www.instagram.com/agriqbiz/">
                    <FiInstagram className="text-2xl hover:text-[#f37353] transition-all" />
                  </a>
                </li>
                <li className="py-1">
                  <a href="https://www.facebook.com/agriqbizservices/">
                    <FiFacebook className="text-2xl hover:text-[#f37353] transition-all" />
                  </a>
                </li>
                <li className="py-1">
                  <a href="https://www.twitter.com/agriqbiz">
                    <FiTwitter className="text-2xl hover:text-[#f37353] transition-all" />
                  </a>
                </li>
              </ul>
              <p className="text-[#777] font-medium leading-normal">
                1 Lekan Aina Street, Fajol Estate, Obantoko, Abeokuta, Lagos.
              </p>
              <p className="text-[rgba(255,255,255,0.8)] text-sm mt-2">
                All rights reserved &copy;2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth className="scrollTo" />
    </>
  );
};

export default Footer;
