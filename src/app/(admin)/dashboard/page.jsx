"use client";

import Link from "next/link";

const Dashboard = () => {
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
                        <th className="text-black">Description</th>
                        <th className="text-black">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="bg-white">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>
                          <p className="bg-[blue] w-fit p-[2px] px-4 rounded-md text-white text-[12px]">
                            Blue
                          </p>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>
                          <p className="bg-[purple] w-fit p-[2px] px-4 rounded-md text-white text-[12px]">
                            Purple
                          </p>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>
                          <p className="bg-[Red] w-fit p-[2px] px-4 rounded-md text-white text-[12px]">
                            Red
                          </p>
                        </td>
                      </tr>
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
