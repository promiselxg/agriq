"use client";
import { FiTrash2 } from "react-icons/fi";
import Model from "./_component/Model";
import { useEffect, useState } from "react";
import axios from "axios";
import host from "@/utils/host";
import Swal from "sweetalert2";
import Image from "next/image";

const Team = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${host.url}/banner`);
      setData(response?.data?.slide);
    };
    fetchData();
  }, []);

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        const res = axios.delete(`${host.url}/banner/${id}`);
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
                <h1 className="text-sm font-extrabold">Banner</h1>
                <p>Manage All Slide Shows</p>
              </span>

              <button
                className="btn btn-primary w-fit"
                onClick={() =>
                  document?.getElementById("my_modal_2")?.showModal()
                }
              >
                Upload new Banner
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
                        <th className="text-black">Image</th>
                        <th className="text-black">Text</th>
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
                              <td>
                                <Image
                                  src={team?.userImgUrl}
                                  alt={team?.desc}
                                  width={80}
                                  height={80}
                                />
                              </td>
                              <td>{team?.desc}</td>
                              <td>
                                <FiTrash2
                                  className="cursor-pointer"
                                  onClick={() => deleteItem(team?.id)}
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
