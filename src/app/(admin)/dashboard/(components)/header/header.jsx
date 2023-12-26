"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();
  return (
    <>
      <div className="flex w-full">
        <div className="w-full bg-white  border border-b-[rgba(0,0,0,0.1)] ">
          <div className="w-[90%] md:w-[1200px] flex h-[60px] mx-auto items-center justify-between">
            <div className="flex items-center gap-10">
              <Link href="/dashboard">
                <Image
                  src="/logo.png"
                  width={100}
                  height={60}
                  alt="logo"
                  className="h-[50px] w-full object-contain"
                />
              </Link>
              <nav className="flex">
                <ul className="flex items-center gap-5">
                  <li>
                    <Link
                      href="/dashboard"
                      className={`${
                        currentRoute === "/dashboard" &&
                        "border-slate-500 text-gray-900 border-b-2"
                      } inline-flex items-center px-1   text-sm font-[600] h-[60px]`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/blog/write"
                      className={`${
                        currentRoute === "/dashboard/blog/write" &&
                        "border-slate-500 text-gray-900 border-b-2"
                      } inline-flex items-center px-1   text-sm font-[600] h-[60px]`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/team"
                      className={`${
                        currentRoute === "/dashboard/team" &&
                        "border-slate-500 text-gray-900 border-b-2"
                      } inline-flex items-center px-1   text-sm font-[600] h-[60px]`}
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right">
              <div className="dropdown dropdown-bottom dropdown-end ">
                <label
                  tabIndex={0}
                  role="button"
                  className="font-bold cursor-pointer"
                >
                  My Profile
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-[5px] w-52 "
                >
                  <li>
                    <Link href="/api/auth/signout?callbakUrl=/">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
