"use client";
import { FiTrash2 } from "react-icons/fi";
import Model from "./_component/Model";
import { useEffect, useState } from "react";
import axios from "axios";
import host from "@/utils/host";
import Swal from "sweetalert2";

const Team = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${host?.url}/team`);
      setData(response?.data?.staff);
    };
    fetchUsers();
  }, []);

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this User?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        const res = axios.delete(`${host.url}/team/${id}`);
        if (res) {
          Swal.fire("", "deleted Successfully", "success");
          document.getElementById(id).style.display = "none";
        }
        // document.getElementById(id).style.display = "none";
      }
    });
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="py-10">
          <div className="flex w-[90%] md:w-[1200px] mx-auto flex-col">
            <div className="flex w-full items-center justify-between">
              <span>
                <h1 className="text-sm font-extrabold">Team Members</h1>
                <p>List of all Team members</p>
              </span>

              <button
                className="btn btn-primary w-fit"
                onClick={() =>
                  document?.getElementById("my_modal_2")?.showModal()
                }
              >
                Add New Team Member
              </button>
            </div>
            <div className="flex w-full mt-5 bg-white  border-[1px] border-[#ccc] rounded-[5px] shadow-sm p-8">
              <div className="w-full">
                <div className="overflow-x-auto">
                  <table className="table table-md">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th className="text-black">Name</th>
                        <th className="text-black">Job Function</th>
                        <th className="text-black">Description</th>
                        <th className="text-black">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {data &&
                        data?.map((team, i) => {
                          return (
                            <tr
                              className="bg-white"
                              key={team?.id}
                              id={team?.id}
                            >
                              <th>{i + 1}</th>
                              <td>{team?.name}</td>
                              <td>{team?.title}</td>
                              <td>{team?.desc}</td>
                              <td>
                                <FiTrash2
                                  className="cursor-pointer"
                                  onClick={() =>
                                    deleteItem(team?.id, team?.userImgUrl)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Model />
      </div>
    </>
  );
};

export default Team;
