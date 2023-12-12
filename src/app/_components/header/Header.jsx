import Image from "next/image";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiAtSign,
  FiPhoneCall,
} from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="w-full h-[80px] md:h-[150px] flex items-center bg-[whitesmoke] relative">
        <div className="w-[1200px] mx-auto">
          <div className="flex items-center justify-between md:h-[60px] relative -top-3">
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
                    <a className="text-white" href="mailto:business@agriq.com">
                      business@agriq.com
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
            <div className="hidden md:flex gap-5 items-center">
              <ul className="mx-auto">
                <li className="m-2 font-semibold text-sm">
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
          </div>
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
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/" className="h-full">
                      Home
                    </Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/team">Team</Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link href="/projects">News &amp; Articles</Link>
                  </li>
                  <li className="font-semibold text-[16px] hover:text-[#f37353] transition-all">
                    <Link
                      href="/contact"
                      className="btn-dark custom-btn p-3 relative bg-[#212529]"
                    >
                      <span className="relative z-10">Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="drawer drawer-end  md:hidden relative w-fit">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="w-fit">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="btn">
                    X
                  </label>
                </div>
                <div className="drawer-side h-screen z-50">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
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
