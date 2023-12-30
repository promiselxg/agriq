"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiAtSign,
  FiPhoneCall,
  FiMenu,
} from "react-icons/fi";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const currentRoute = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 100; // Set your desired scroll height here

      setIsFixed(scrollHeight > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer-4");
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  const navigateAndCloseDrawer = (path) => () => {
    router.push(path);
    closeDrawer();
  };

  return (
    <>
      <header
        className={` w-full h-[80px] md:h-[80px] flex items-center bg-[whitesmoke] relative ${
          isFixed ? "sticky top-0 bg-[#fff] z-50" : ""
        }`}
      >
        <div className="w-[1200px] mx-auto">
          {/* <div className="flex items-center justify-between md:h-[60px] relative -top-3">
            <nav className="hidden md:flex">
              <ul className="flex relative header__top pr-3">
                <li className="flex z-10 p-4 gap-3 font-semibold">
                  <span className="flex gap-1">
                    <span className="flex items-center">
                      <div className="text-white">
                        <FiPhoneCall className="text-[26px]" />
                      </div>
                    </span>
                    <a className="text-white" href="tel:1234567890">
                      +234(803)3377922
                    </a>
                  </span>
                  <span className="flex gap-1">
                    <span className="flex items-center">
                      <div className="text-white ">
                        <FiAtSign className="text-[26px]" />
                      </div>
                    </span>
                    <a
                      className="text-white"
                      href="mailto:business@agriqbusiness.com"
                    >
                      business@agriq.com
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
            <div className="hidden md:flex gap-5 items-center">
              <ul className="mx-auto">
                <li className="m-2 font-semibold text-sm" onClick={toggle}>
                  Mon - Sat 9:00am - 5:00pm / Sunday - CLOSED
                </li>
              </ul>
              <ul className="social-icons flex items-center gap-5">
                <li className="social-icons-instagram flex items-center">
                  <a
                    href="https://www.instagram.com/agriqbiz/"
                    target="_blank"
                    className="flex items-center justify-center transition-all "
                    title="Instagram"
                    data-cursor-effect-hover="fit"
                  >
                    <FiInstagram className="text-[20px]" />
                  </a>
                </li>
                <li className="social-icons-twitter">
                  <a
                    href="https://www.twitter.com/agriqbiz"
                    target="_blank"
                    className="flex items-center justify-center transition-all "
                    title="Twitter"
                    data-cursor-effect-hover="fit"
                  >
                    <FiTwitter className="text-[20px]" />
                  </a>
                </li>
                <li className="social-icons-facebook">
                  <a
                    href="https://www.facebook.com/agriqbizservices/"
                    target="_blank"
                    className="flex items-center justify-center transition-all "
                    title="Facebook"
                    data-cursor-effect-hover="fit"
                  >
                    <FiFacebook className="text-[20px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="h-[80px] w-full  p-3 justify-between flex">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    width={100}
                    height={80}
                    alt="logo"
                    className="h-[60px] w-full object-contain"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex items-center">
                <ul className="flex gap-8">
                  <li
                    className={`${
                      currentRoute === "/" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/" className="h-full">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/about" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/about" className="h-full">
                      About Us
                    </Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/services" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/team" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/team">Team</Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/projects" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/news" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <Link href="/news">News &amp; Articles</Link>
                  </li>
                  <li
                    className={`${
                      currentRoute === "/contact" && "text-[#f37353]"
                    } font-semibold text-[16px] hover:text-[#f37353] transition-all`}
                  >
                    <a
                      href="mailto:info@agriqbusiness.com"
                      className="btn-dark custom-btn p-3 relative bg-[#212529]"
                    >
                      <span className="relative z-10">Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="drawer drawer-end md:hidden relative w-fit">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="w-fit">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4">
                    <FiMenu className="text-3xl cursor-pointer mr-4" />
                  </label>
                </div>
                <div className="drawer-side h-screen z-50 top-[80px]">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <ul className="menu  w-80 min-h-full bg-[#212529] text-base-content items-center flex justify-center -top-10 relative">
                    {/* Sidebar content here */}
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/")}>
                        Home
                      </button>
                    </li>
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/about")}>
                        About Us
                      </button>
                    </li>
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/services")}>
                        Our Services
                      </button>
                    </li>
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/team")}>
                        Team
                      </button>
                    </li>
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/projects")}>
                        Projects
                      </button>
                    </li>
                    <li className="py-[4px] text-2xl font-bold text-[#fff]">
                      <button onClick={navigateAndCloseDrawer("/news")}>
                        News &amp; Articles
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
