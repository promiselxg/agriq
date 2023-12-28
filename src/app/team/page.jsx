"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [sortBy, setSortBy] = useState("all");
  const [sortedTeam, setSortedTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/team`);
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (data) {
    const teamMembers = data?.staff?.map((member) => {
      const formattedMember = {
        name: member.name,
        title: member.title,
        image: `/team/${member.id}.jpg`, // Assuming the images are stored in the "/team/" directory
        role: member.teamRole,
      };

      // Optionally include description if it exists in the input data
      if (member.desc) {
        formattedMember.desc = member.desc;
      }

      return formattedMember;
    });

    const sorted = teamMembers?.filter((teamMember) => {
      return teamMember?.role?.toLowerCase() === sortBy?.toLowerCase();
    });
    setSortedTeam(sorted);
  }
  console.log(sortedTeam);
  return (
    <>
      <main className="relative bg-[white]">
        <div className="w-full flex bg-[url('https://sahelconsult.com/wp-content/uploads/2023/01/page-banner-team-members.jpg')] h-[200px] md:h-[200px] items-center justify-center bg-cover bg-center">
          <div className="flex flex-col justify-center text-center items-center w-1/2">
            <h1 className="text-white text-4xl font-extrabold py-3">
              Our Team
            </h1>
            <p className="text-[whitesmoke] text-[16px] font-medium hidden md:flex">
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
                {data &&
                  sortedTeam?.map((team) => {
                    <>
                      <h1>OK</h1>
                    </>;
                  })}
                {/* {data &&
                  sortedteamMembers?.map((team, index) => (
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
                          {team?.desc && (
                            <p className="text-[0.8rem]  pt-2">{team?.desc}</p>
                          )}
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
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
