"use client";
import { FiActivity } from "react-icons/fi";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../../(components)/breadcrumb/breadcrumb";
import axios from "axios";

const Editor = dynamic(
  () => {
    return import("../../(utils)/Editor");
  },
  { ssr: false }
);

const WritePost = () => {
  const { status } = useSession();
  const router = useRouter();
  //const [file, setFile] = useState(null);
  const [selectedImages, setselectedImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  if (status === "loading") {
    return <div className="text-[red]">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin?callbakUrl=/blog/write");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setLoading(true);
    const timestamp = Math.round(new Date().getTime() / 1000);
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "agriqbusiness");
          formData.append("timestamp", timestamp);
          formData.append(
            "api_key",
            process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
          );
          setisLoading(true);
          const uploadRes = await axios.post(
            `https://api.cloudinary.com/v1_1/promiselxg/image/upload`,
            formData
          );
          const { data } = uploadRes;
          return data;
        })
      );
      if (list) {
        const res = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc: value,
            img: list[0].secure_url,
            slug: slugify(title),
            catSlug: catSlug || "news", //If not selected, choose the general category
          }),
        });
        if (res.status === 200) {
          const data = await res.json();
          router.push(`/posts/${data.slug}`);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setisLoading(false);
    }
  };

  //  Select File to Upload
  const imageHandleChange = (e) => {
    setselectedImages([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const selectedFiles = [];
      filesArray.forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          // File size is bigger than 5MB
          toast({
            variant: "destructive",
            title: "Selected File is > 5MB.",
            description: `File "${file.name}" exceeds 5MB limit.`,
          });
        } else {
          // File size is within the limit
          selectedFiles.push(file);
        }
      });
      setFiles(selectedFiles);
      const fileArray = selectedFiles.map((file) => URL.createObjectURL(file));
      setselectedImages((prevImages) => prevImages.concat(fileArray));
      selectedFiles.forEach((file) => URL.revokeObjectURL(file));
    }
  };

  return (
    <>
      <div className="w-full flex">
        <div className="flex w-[1200px] mx-auto  flex-col">
          <div className="w-[90%] mx-auto  md:mx-0 md:w-full py-5">
            <Breadcrumb
              prevUrl="/"
              prevLabel="News &amp; Articles"
              activeLabel="Publish a new Post"
            />
          </div>
          <div className="md:w-full w-[90%] mx-auto md:mx-0 mb-10 md:mb-0">
            <div className="flex gap-5 md:flex-row flex-col">
              <div className="flex items-center w-full md:w-1/2 shadow-sm border-[1px] border-[#ccc] rounded p-2 gap-2">
                <FiActivity />
                <input
                  type="text"
                  className="w-full bg-transparent outline-none border-0"
                  placeholder="Title..."
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center w-full md:w-1/2 shadow-sm border-[1px] border-[#ccc] rounded p-2 gap-2">
                <FiActivity />
                <select
                  className="w-full bg-transparent cursor-pointer outline-none border-0"
                  onChange={(e) => setCatSlug(e.target.value)}
                  required
                >
                  <option value="">select category</option>
                  <option value="news">News &amp; Events</option>
                  <option value="projects">Projects</option>
                </select>
              </div>
            </div>
            <div className="flex py-5 mb-5">
              <Editor value={value} setValue={setValue} />
            </div>
            <div className="flex items-center gap-5">
              <label htmlFor="files" className="w-fit ">
                <span
                  className="btn btn-primary text-white"
                  disabled={isLoading}
                >
                  Add cover image
                </span>
                <input
                  type="file"
                  name="files"
                  id="files"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={imageHandleChange}
                  className="hidden"
                />
              </label>

              {!selectedImages.length < 1 && (
                <button
                  className="btn btn-primary text-white"
                  onClick={handleSubmit}
                  disabled={loading || !title || !value}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePost;
