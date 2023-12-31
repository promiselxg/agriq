"use client";
import { FiActivity } from "react-icons/fi";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { app } from "@/utils/firebase";
import Breadcrumb from "../../(components)/breadcrumb/breadcrumb";

const Editor = dynamic(
  () => {
    return import("../../(utils)/Editor");
  },
  { ssr: false }
);

const WritePost = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

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
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      setLoading(false);
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
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
                >
                  <option value="news">News &amp; Events</option>
                  <option value="projects">Projects</option>
                </select>
              </div>
            </div>
            <button className="button" onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            {open && (
              <div className="add">
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button className="addButton">
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                <button className="addButton">
                  <Image src="/external.png" alt="" width={16} height={16} />
                </button>
                <button className="addButton">
                  <Image src="/video.png" alt="" width={16} height={16} />
                </button>
              </div>
            )}
            <div className="flex py-5 mb-5">
              <Editor value={value} setValue={setValue} />
            </div>
            <div className="flex">
              <button
                className="btn btn-primary text-white"
                onClick={handleSubmit}
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePost;
