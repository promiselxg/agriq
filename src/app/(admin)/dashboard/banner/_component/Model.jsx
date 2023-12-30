"use client";
import Image from "next/image";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Model = () => {
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [hierarchy, setHierarchy] = useState("");

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
    return (
      <>
        <div className="w-full">
          <div className="text-[red] w-[1200px] mx-auto">Loading...</div>
        </div>
      </>
    );
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin?callbakUrl=/dashboard/team");
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/banner", {
        method: "POST",
        body: JSON.stringify({
          desc,
          userImgUrl: media,
          hierarchy,
        }),
      });
      if (res.status === 200) {
        setLoading(false);
        window.location = window.location;
      }
    } catch (error) {
      setLoading(false);
      alert(
        "An Unknown error occurred while trying to create add a new team member."
      );
    }
  };

  return (
    <>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Add New Slider</h3>

          <div className="flex flex-col">
            <div className="flex flex-col py-[4px]">
              <label className="flex items-center">
                Text&nbsp;(<span className="text-[12px]">optional</span>)
              </label>
              <textarea
                className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="flex-col flex">
              <label className="flex items-center">
                Hierarchy&nbsp;
                <span className="text-[12px] text-red-500">
                  (1 = Highest, 5 = Lowest)
                </span>
              </label>
              <select
                value={hierarchy}
                onChange={(e) => setHierarchy(e.target.value)}
                className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px] cursor-pointer"
              >
                <option value="">Select Hierarchy</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="flex flex-col">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <label>Select Image</label>
              <button className="cursor-pointer">
                <label htmlFor="image" className="flex gap-2">
                  <Image
                    src="/image.png"
                    alt=""
                    width={50}
                    height={50}
                    className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px] cursor-pointer"
                  />
                  {media && (
                    <Image
                      src={media}
                      alt=""
                      width={50}
                      height={50}
                      className=""
                    />
                  )}
                </label>
              </button>
            </div>
            <div className="mt-5">
              <button
                className="btn w-fit disabled:cursor-not-allowed"
                disabled={loading || !media}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Model;
