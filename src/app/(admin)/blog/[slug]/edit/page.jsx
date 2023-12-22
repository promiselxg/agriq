import Breadcrumb from "@/app/(admin)/dashboard/(components)/breadcrumb/breadcrumb";
import { FiActivity } from "react-icons/fi";

const EditPost = ({ params }) => {
  return (
    <>
      <div className="w-full flex">
        <div className="flex w-[1200px] mx-auto flex-col">
          <div className="w-[90%] mx-auto  md:mx-0 md:w-full py-5">
            <Breadcrumb activeLabel="Edit Published Post." />
          </div>
          <div className="md:w-full w-[90%] mx-auto md:mx-0 mb-10 md:mb-0">
            <div className="flex gap-5 md:flex-row flex-col">
              <div className="flex items-center w-full md:w-1/2 shadow-sm border-[1px] border-[#ccc] rounded p-2 gap-2">
                <FiActivity />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-transparent outline-none border-0"
                  placeholder="Title..."
                  defaultValue={params.slug}
                />
              </div>
              <div className="flex items-center w-full md:w-1/2 shadow-sm border-[1px] border-[#ccc] rounded p-2 gap-2">
                <FiActivity />
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent cursor-pointer outline-none border-0"
                >
                  <option value="news" className=" p-3">
                    News
                  </option>
                  <option value="news">Projects</option>
                </select>
              </div>
            </div>
            <div className="flex py-5">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-white w-full shadow-sm border-[1px] border-[#ccc] rounded p-2 gap-2 tracking-[2px]"
              ></textarea>
            </div>
            <div className="flex">
              <button className="btn btn-primary text-white">
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
