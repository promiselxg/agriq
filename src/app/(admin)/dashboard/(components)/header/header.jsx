import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-full bg-white  border border-b-[rgba(0,0,0,0.1)] ">
          <div className="w-[90%] md:w-[1200px] flex h-[60px] mx-auto items-center justify-between">
            <div className="flex items-center gap-10">
              <Link href="">
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
                      href="/"
                      className="border-slate-500 text-gray-900 inline-flex items-center px-1  border-b-2 text-sm font-[600] h-[60px]"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/Blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right">
              <div className="dropdown dropdown-bottom dropdown-end ">
                Welcome,&nbsp;
                <label
                  tabIndex={0}
                  role="button"
                  className="font-bold cursor-pointer"
                >
                  Profile
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-[5px] w-52 "
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
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
