"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [sortBy, setSortBy] = useState("all");

  const teamMembers = [
    {
      name: "Ibikunle A. Onasanya",
      title: "MD/CEO",
      image: "/team/md.jpg",
      role: "all",
    },
    {
      name: "Fola Onasanya",
      title: "Director",
      image: "/team/Fola_Onasanya.jpg",
      role: "all",
    },
    {
      name: "Olatomide S. Olasunkanmi",
      title: "Monitoring and Evaluation Specialist",
      image: "/team/Olatomide_Olasunkanmi.jpg",
      role: "all",
    },
    {
      name: "Adedotun Philip",
      title: "Head human resources",
      image: "/team/Adedotun_Philip.jpg",
      role: "all",
    },
    {
      name: "Ayodeji Yusuf",
      title: "Administrative Officer",
      image: "/team/Ayodeji_Yusuf.jpg",
      role: "all",
    },
    {
      name: "Omoniyi A. Olusegun",
      title: "Extension Agent/Facilitator",
      image: "/team/Omoniyi_Olusegun.jpg",
      role: "all",
    },
    {
      name: "Prof. Adewale Dipeolu ",
      title: "Agribusiness Specialist",
      image: "/team/Abeeb_bello.jpg",
      role: "expert consultant",
    },
    {
      name: "Prof. Adekunle Idowu ",
      title: "Aquaculture specialist",
      image: "/team/Abeeb_bello.jpg",
      role: "expert consultant",
    },
    {
      name: "Dr. Kazeem Bello ",
      title: "Poultry/Livestock Specialist",
      image: "/team/Abeeb_bello.jpg",
      role: "expert consultant",
    },
    {
      name: "Adeniyi Joshua",
      title: "Extension Agent/Facilitator",
      image: "/team/Abeeb_bello.jpg",
      role: "facilitator",
    },
    {
      name: "Adedamola Sodipe",
      title: "Extension Agent/Facilitator",
      image: "/team/Abeeb_bello.jpg",
      role: "facilitator",
    },
    {
      name: "Olayinka Idowu",
      title: "Extension Agent/Facilitator",
      image: "/team/Abeeb_bello.jpg",
      role: "facilitator",
    },

    // Add more contact objects as needed
  ];

  const sortedteamMembers = teamMembers.filter((teamMember) => {
    return teamMember.role.toLowerCase() === sortBy.toLowerCase();
  });

  return (
    <>
      <main className="relative bg-[white]">
        <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[200px] md:h-[400px] items-center justify-center bg-cover bg-center">
          <div className="flex flex-col justify-center text-center items-center w-1/2">
            <h1 className="text-white text-4xl font-extrabold py-3">
              Our Team
            </h1>
            <p className="text-[whitesmoke] text-[16px] font-medium hidden">
              We have a team of professionals with extensive experience and
              expertise in agriculture, agribusiness, and management consulting.
              Our team members have a proven track record, skills, and credible
              educational background, making them highly qualified in their
              respective fields.
            </p>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full mx-auto bg-[white] md:p-10 p-5">
            <h1 className="py-3 text-2xl font-extrabold mb-2">Sort By:</h1>
            <ul className="flex md:items-center gap-4 flex-col md:flex-row items-start">
              <li className="font-semibold text-[16px] transition-all">
                <button
                  className={`btn-dark custom-btn p-3 relative ${
                    sortBy === "all" ? "bg-[#212529]" : "bg-[#f37353]"
                  }`}
                  onClick={() => setSortBy("all")}
                >
                  <span className="relative z-10">Core Team</span>
                </button>
              </li>
              <li className="font-semibold text-[16px] transition-all">
                <button
                  className={`btn-dark custom-btn p-3 relative ${
                    sortBy === "expert consultant"
                      ? "bg-[#212529]"
                      : "bg-[green]"
                  }`}
                  onClick={() => setSortBy("expert consultant")}
                >
                  <span className="relative z-10">Experts consultant</span>
                </button>
              </li>
              <li className="font-semibold text-[16px] transition-all">
                <button
                  className={`btn-dark custom-btn p-3 relative ${
                    sortBy === "facilitator" ? "bg-[#212529]" : "bg-[purple]"
                  }`}
                  onClick={() => setSortBy("facilitator")}
                >
                  <span className="relative z-10">Facilitators</span>
                </button>
              </li>
            </ul>
            <div className="md:py-10">
              <div className="w-full grid md:grid-cols-4 gap-5 my-10">
                {sortedteamMembers.map((team, index) => (
                  <div
                    className="bg-[#000] relative team_member cursor-pointer h-[350px] bg-center bg-cover w-full overflow-hidden project_team"
                    key={index}
                  >
                    <div className="absolute top-0 bottom-0 w-full bg-[rgba(0,0,0,0.8)] h-0 overflow-hidden hidden_bg ">
                      <div className="h-full text-center flex justify-center items-center p-10 flex-col text-white">
                        <h1 className="text-[20px] font-extrabold capitalize">
                          {team?.name}
                        </h1>
                        <p className="text-[16px] font-bold pt-2">
                          {team?.title}
                        </p>
                      </div>
                    </div>
                    <Image
                      src={team?.image}
                      width={330}
                      height={350}
                      alt={team?.name}
                      className="w-full bg-cover h-[350px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
