"use client";
import host from "@/utils/host";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const response = await axios.get(`${host?.url}/posts`);
      setData(response?.data?.posts);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this Post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        const res = axios.delete(`http://localhost:3000/api/posts/${id}`);
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
            <div className="flex  w-full items-center justify-between">
              <div>
                <h1 className="text-sm font-extrabold">News &amp; Articles</h1>
                <p className="text-sm font-medium">
                  A list of published news &amp; articles.
                </p>
              </div>
              <button className="btn btn-primary w-fit">
                <Link href="/dashboard/blog/write">Add New Post</Link>
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
                        <th className="text-black">Title</th>
                        <th className="text-black">Category</th>
                        <th className="text-black">Action</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {/* row 1 */}
                      {loading && (
                        <>
                          <tr
                            colspan="4"
                            className="p-3 text-[red] text-bold text-center"
                          >
                            loading...
                          </tr>
                        </>
                      )}
                      {data &&
                        data.map((post, i) => {
                          return (
                            <tr
                              className="bg-white"
                              key={post.id}
                              id={post?.id}
                            >
                              <th>{i + 1}</th>
                              <td className="w-[80%]">{post?.title}</td>

                              <td className="capitalize">
                                <p className="px-2 rounded bg-purple-500 text-white text-[12px]">
                                  {post?.catSlug}
                                </p>
                              </td>
                              <td className="flex items-center gap-2">
                                <FiTrash2
                                  className="cursor-pointer"
                                  onClick={() => deleteItem(post?.id)}
                                />
                                <FiEye
                                  onClick={() =>
                                    router.push(`/posts/${post?.slug}`)
                                  }
                                  className="cursor-pointer"
                                />
                                <FiEdit
                                  onClick={() =>
                                    router.push(
                                      `/dashboard/blog/${post?.slug}/edit`
                                    )
                                  }
                                  className="cursor-pointer"
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
      </div>
    </>
  );
};

export default Dashboard;
