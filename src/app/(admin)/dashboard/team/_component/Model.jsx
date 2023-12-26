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
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
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
    return (
      <>
        <div className="w-full">
          <div className="text-[red] w-[1200px] mx-auto">Loading...</div>
        </div>
      </>
    );
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin?callbakUrl=/blog/write");
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/team", {
        method: "POST",
        body: JSON.stringify({
          title,
          name,
          desc,
          userImgUrl: media,
          twitter,
          linkedin,
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
          <h3 className="font-bold text-lg">Add New Team Member</h3>

          <div className="flex flex-col">
            <div className="flex flex-col py-[4px]">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
              />
            </div>
            <div className="flex flex-col py-[4px]">
              <label>Job Title (e.g. MD)</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title (e.g. MD)"
                className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
              />
            </div>
            <div className="flex flex-col py-[4px]">
              <label>Brief Description</label>
              <textarea
                className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
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
            <div className="flex w-full justify-between gap-3">
              <div className="flex flex-col py-[4px]">
                <label>Twitter Username</label>
                <input
                  type="text"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="Twitter Username"
                  className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
                />
              </div>
              <div className="flex flex-col py-[4px]">
                <label>LinkedIn Username</label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="LinkedIn Username"
                  className="p-2 outline-none border-[1px] border-[rgba(0,0,0,0.3)] bg-[#e8e8e8] rounded-[5px]"
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                className="btn w-fit disabled:cursor-not-allowed"
                disabled={loading || !media || !name || !title}
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
