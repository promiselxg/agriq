import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
};

const Page = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <main>
        <div className="w-full">
          <div className="w-full flex justify-between gap-5 flex-col md:flex-row md:mx-auto md:p-20 p-5">
            <div className="left md:w-3/4 h-full">
              <div className="flex flex-col ">
                <h1 className="md:text-5xl text-2xl font-[400] leading-snug text-[rgb(80,146,87)] pt-5 md:pt-0">
                  Policy Recommendations for Scaling Innovations in
                  Climate-Resilient Food Systems
                </h1>
                <div className="flex items-center gap-5 py-5 text-[#f04c23]">
                  <span className="flex gap-2 items-center">
                    <FiClock />
                    <p>November 20, 2023</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FiUser />
                    <p>admin</p>
                  </span>
                </div>
              </div>
              <div className="w-full h-fit bg-white">
                <Image
                  src="https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg"
                  width={1100}
                  height={600}
                  alt=""
                />
              </div>
              <div className="py-10 whitespace-break-wrap text-justify text-[16px] blog_p">
                <p>
                  The 2023 Sahel Food Changemakers System Conference was a
                  highly impactful event that successfully brought together key
                  stakeholders to discuss the transformation of Nigeria’s food
                  system. During the conference, the challenges facing the
                  agriculture sector, particularly the detrimental impact of
                  climate change, were identified and thoroughly addressed.
                  Numerous innovative solutions were proposed to promote the
                  adoption of climate-resilient agricultural practices.
                </p>
                <p>
                  Importantly, these recommendations emphasize the importance of
                  sustainable and adaptable farming methods, including
                  agroforestry, conservation agriculture, and precision farming.
                  These practices hold the potential to increase agricultural
                  productivity, conserve natural resources, and reduce
                  greenhouse gas emissions.
                </p>
                <p>
                  The conference also underscored the significance of enacting
                  inclusive and sustainable policies and regulations that
                  encourage adopting climate-resilient practices. This includes
                  incentivizing renewable energy in agriculture, fostering
                  collaboration across various sectors, and integrating climate
                  change considerations into agricultural initiatives.
                </p>
              </div>
            </div>
            <div className="right h-fit bg-[#F7F9FB] md:w-1/4 rounded-[10px]">
              <div className="p-2">
                <h1 className="text-[16px] px-3 py-5">Follow us on Twitter</h1>
                <a
                  className="twitter-timeline"
                  data-width="400"
                  data-height="600"
                  data-theme="light"
                  href="https://twitter.com/promiselxg?ref_src=twsrc%5Etfw"
                >
                  Tweets by promiselxg
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
                <div className="py-5 px-3 w-full">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
