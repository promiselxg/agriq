"use client";
import Link from "next/link";
import CompanyStats from "../(home)/companyStats/company-stats";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Agriqbusiness | About Us</title>
        <meta
          name="description"
          content="AgriQ is a leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources."
        />
      </Helmet>
      <main className="relative bg-[white]">
        <div className="w-full flex bg-[url('https://tplabs.co/agrios/wp-content/uploads/2022/07/bg-featured-title.webp')] h-[300px] items-center justify-center bg-cover">
          <div className="flex flex-col justify-center text-center items-center w-full">
            <div className="flex text-[rgba(255,255,255,0.7)] text-[16px] uppercase gap-2">
              <Link href="/">home</Link>
              <span>/</span>
              <span>about</span>
            </div>
            <h1 className="text-white text-4xl font-extrabold py-3">
              About Us
            </h1>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full md:w-[1200px] mx-auto relative -top-[50px] bg-[white] md:p-20 p-10 box_shadow">
            <div className="py-10">
              <h1 className="text-2xl capitalize mb-2 font-bold">Who we are</h1>
              <p className="text-[16px] font-medium pb-2">
                AgriQ is an agribusiness consulting organization that supports
                clients across the food and agribusiness value chain-providing
                valuable operational and commercial solutions.With proven
                experience and expertise, we plan, execute and manage
                highly-efficient agribusiness projects.
              </p>
              <p className="text-[16px] font-medium ">
                Our team of technical and commercial experts have successfully
                delivered on over 20 agribusiness programs across the
                diversified agribusiness sector and value chain. From
                productions, processing, packaging to marketing and exportation,
                we draw on our experience and expertise to deliver the best
                business results.
              </p>
            </div>
            <div className="py-10">
              <div className="tab_header">
                <div role="tablist" className="md:tabs tabs-lifted">
                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab capitalize"
                    className="tab md:w-[200px]"
                    aria-label="Our History"
                    checked={activeTab === 0}
                    onChange={() => handleTabClick(0)}
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-[white] w-full md:w-[1000px] py-6 md:py-6"
                  >
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                      <li>
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                          <time className="font-mono italic">2015</time>
                          <div className="text-lg font-extrabold">
                            AgriQ Business Services LTD
                          </div>
                          <p className="md:text-[16px]  py-2">
                            AgriQ Business Services LTD was established on 21st
                            of October, 2015 with the primary objective of
                            providing advisory and consulting services in
                            agriculture. The company specializes in offering
                            expert guidance to a wide range of clients,
                            including public, private, and non-profit
                            organizations.
                          </p>
                        </div>
                        <hr />
                      </li>
                    </ul>
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab capitalize"
                    aria-label="Our Vision &amp; Mission"
                    checked={activeTab === 1}
                    onChange={() => handleTabClick(1)}
                  />
                  <div role="tabpanel" className="tab-content bg-[white] p-6">
                    <h1 className="py-2 text-[20px] font-bold">Our Vision</h1>
                    <p className="md:text-[16px]  py-2">
                      Our vision is to globally recognized institution,
                      committed to maximizing the potentials agricultural and
                      agro based of enterprises in Africa-through the provision
                      of world-class innovative, human capital and agro-smart
                      solutions
                    </p>
                    <h1 className="py-2 text-[20px] font-bold">Our Mission</h1>
                    <p className="md:text-[16px]  py-2">
                      Our mission is to equip each client with requisite
                      knowledge and skills they need for success.
                    </p>
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab capitalize"
                    aria-label="Our value proposition"
                    checked={activeTab === 2}
                    onChange={() => handleTabClick(2)}
                  />
                  <div role="tabpanel" className="tab-content p-6">
                    <h1 className="text-[20px] font-bold py-2 capitalize">
                      Our value proposition
                    </h1>
                    <ul>
                      <li className="md:text-[16px] py-3">
                        We bring to each clients over 50 years of combined
                        functional expertise and sector-focused experienced in
                        the Agriculture and Agro-services sector- with
                        internationally-recognized accomplishments.
                      </li>
                      <li className="md:text-[16px] py-3">
                        We provide a diverse team composed of world-class
                        professionals in Agricultural Production, Development
                        and Economics, Engineering, Business Management,
                        Financial Services and Investment Banking.
                      </li>
                      <li className="md:text-[16px] py-3">
                        As successful operators of agribusinesses ourselves, we
                        offer the most practical advice and technical support to
                        our clients – we call it providing &apos;true
                        value&apos;.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CompanyStats />
      </main>
    </>
  );
}
